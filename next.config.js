const tracer = require("./tracing");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  outputFileTracing: false,
  serverRuntimeConfig: {
    tracer,
  },
};

module.exports = nextConfig;
