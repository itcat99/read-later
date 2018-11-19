function generator(className, type, ...args) {
  return new Promise((resolve, reject) => {
    if (!chrome[className])
      reject(`> can't find [${className}] class in chrome Api.`);

    try {
      chrome[className][type](...args, (...result) => {
        resolve(...result);
      });
    } catch (error) {
      reject(`> [${className}]-[${type}] Err: ${error}`);
    }
  });
}

export default {
  generator,
};
