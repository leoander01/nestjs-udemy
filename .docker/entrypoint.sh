#!/bin/bash

yarn install
yarn build
npx typeorm migration:run -d dist/database.providers.js
yarn start:dev
