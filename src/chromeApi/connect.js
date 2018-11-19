/**
 * 发送消息
 * @param {*} msg 要发送的消息
 */
export const sendMessage = msg => {
  chrome.runtime.sendMessage(msg);
};

/**
 * 接收指定type的消息，并返回
 * @param {string} target 目标type
 */
export const receiveMessage = target =>
  new Promise((resolve, reject) => {
    try {
      chrome.runtime.onMessage.addListener(result => {
        const { type, payload } = result;
        if (type === target) {
          resolve(payload);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
