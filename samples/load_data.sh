#!/bin/bash

#npm install --save @c8y/client @slack/web-api dotenv express
for i in $(ls *_submodel.json)
do
	curl --data "@${i}" -H 'Content-Type: application/json' 'http://localhost:3000/service/submodel'
done
for i in $(ls *_asset.json)
do
	curl --data '@powerPlant_asset.json' -H 'Content-Type: application/json' 'http://localhost:3000/service/asset'
done

