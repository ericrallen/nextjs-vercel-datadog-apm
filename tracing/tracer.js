import getConfig from "next/config";

const { tracer } = getConfig().publicRuntimeConfig;

export default tracer;
