import { useEffect, useRef } from "react";

export default function SmokyButton({ href, download, isCircle, children, target, rel, title }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      console.warn("WebGL not supported");
      return;
    }

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;

      uniform vec2 iResolution;
      uniform float iTime;

      float random(vec2 pos) {
          return fract(sin(dot(pos, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float noise(vec2 pos) {
          vec2 i = floor(pos);
          vec2 f = fract(pos);
          float a = random(i + vec2(0.0, 0.0));
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 pos) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(20.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < 8; i++) {
              v += a * noise(pos);
              pos = rot * pos * 2.0 + shift;
              a *= 0.5;
          }
          return v;
      }

      void main(void) {
          vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          uv *= 0.5;

          vec2 q = vec2(
              fbm(uv + 0.20 * iTime),
              fbm(uv + vec2(5.0, 1.0))
          );
          vec2 r = vec2(
              fbm(uv + 3.0 * q + vec2(1.2, 3.2) + 0.2 * iTime),
              fbm(uv + 3.0 * q + vec2(8.8, 2.8) + 0.2 * iTime)
          );
          
          float f = fbm(uv + r);
          
          // Theme color #f2ff00 (242, 255, 0) -> vec3(0.95, 1.0, 0.0)
          vec3 color = mix(
              vec3(0.0, 0.0, 0.0),
              vec3(0.95, 1.0, 0.0),
              clamp((f * f) * 6.0, 0.0, 5.0)
          );

          color = mix(
              color,
              vec3(1.0, 0.85, 0.0),
              clamp(length(q) * length(q), 0.0, 1.0)
          );

          color = mix(
              color,
              vec3(1.0, 1.0, 0.9),
              clamp(length(r.x), 0.0, 0.1)
          );

          color = vec3(0.1, 0.08, 0.0) + (f * f * f + 0.6 * f * f + 0.6 * f) * color;

          gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compileShader = (source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const resolutionLoc = gl.getUniformLocation(program, "iResolution");
    const timeLoc = gl.getUniformLocation(program, "iTime");

    let animationId;
    const startTime = performance.now();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      animationId = requestAnimationFrame(render);

      const time = (performance.now() - startTime) / 1000;
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, time);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      title={title}
      className={`smoky-btn cursor-target ${isCircle ? "is-circle" : ""}`}
    >
      <div className="smoky-canvas-wrapper">
        <canvas ref={canvasRef} className="smoky-canvas" />
      </div>
      <div className="smoky-content">
        <div className="smoky-text">{children}</div>
      </div>
    </a>
  );
}
