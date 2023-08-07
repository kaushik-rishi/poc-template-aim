# publishing to the channels
# testing the subscribed routes
mosquitto_pub \
        -h test.mosquitto.org \
        -p 1883 \
        -t "smartylighting/streetlights/1/0/event/69/lighting/measured" \
        -m '{"lumens": 120, "sentAt": "2023-07-27T19:43:22.332Z"}'

# subscribing to channels
# testing the publishing routes
mosquitto_sub \
        -h test.mosquitto.org \
        -p 1883 \
        -t "smartylighting/streetlights/1/0/action/69/dim"

mosquitto_pub \
        -h test.mosquitto.org \
        -p 1883 \
        -t "channel-1" \
        -m '{"lumens": 120, "sentAt": "2023-07-27T19:43:22.332Z"}'

mosquitto_sub \
        -h test.mosquitto.org \
        -p 1883 \
        -t "channel-1"