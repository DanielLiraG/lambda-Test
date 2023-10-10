#!/bin/bash

npm run lint:fix
npm run build
sam build
sudo sam local invoke lambdasTemplate -e events/events.json 2>&1 | tr "\r" "\n"
