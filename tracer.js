const Tracer = require("dd-trace");

const tracer = Tracer.init();

tracer.use("next", {
  service: "telemetry-demo",
});
