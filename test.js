const smartylightingStreetlights10EventStreetlightIdLightingMeasuredHandler = require('./src/api/handlers/smartylighting-streetlights-1-0-event-{streetlightId}-lighting-measured');
const app = require("./src/api/index");

/*
(function MyLoop(i) {
    setTimeout(() => {
      app.send({percentage: 1}, {}, "smartylighting/streetlights/1/0/action/69/dim");
      if(--i) MyLoop(i);
    }, 1000);
}(10));
*/

function triggeredByHandler(message) {
    console.log("reading message in my custom handler", message.payload);
    console.log("[IN] handler");
    console.log("recieved light measurement ! ", message.payload);
}

/*
mosquitto_pub \
        -h test.mosquitto.org \
        -p 1883 \
        -t "smartylighting/streetlights/1/0/event/69/lighting/measured" \
        -m '{"lumens": 120, "sentAt": "2023-07-27T19:43:22.332Z"}'
*/

smartylightingStreetlights10EventStreetlightIdLightingMeasuredHandler.registerMiddleware(triggeredByHandler);
