/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  outputFileTracing: true,
};

module.exports = (phase) => {
  console.log("Starting at phase:", phase);

  if (phase === "phase-production-server") {
    const tracing = require("dd-trace");

    const tracer = tracing.init();

    tracer.use("next", {
      service: "telemetry-demo",
    });
  }

  return nextConfig;
};
