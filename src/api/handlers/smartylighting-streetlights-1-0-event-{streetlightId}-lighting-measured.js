const handler = module.exports = {};

const handlerMiddlewares = [];

handler.receiveLightMeasurement = async ({ message }) => {
  for (const middleware of handlerMiddlewares) {
    await middleware(message);
  }
};

handler.registerMiddleware = (fn) => {
  handlerMiddlewares.push(fn);
};
