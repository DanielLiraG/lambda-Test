#!/bin/bash

npm run lint:fix
sam build
sudo sam local invoke PokeData -e events/events.json 2>&1 | tr "\r" "\n"
