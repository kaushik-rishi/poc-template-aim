const handler = module.exports = {};

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

/**
 * 
 * @param {object} options
 * @param {object} options.message
 * @param {integer} options.message.headers.my-app-header
 * @param {integer} options.message.payload.percentage - Percentage to which the light should be dimmed to.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.dimLight = async ({message}) => {
  console.log(`[publisher route] publishing the message ${JSON.stringify(message.payload)} to streetlight ${message.params.streetlightId}`);
  await sleep(10000);
  console.log("sleep-completed");
  // message will be sent post this
};
