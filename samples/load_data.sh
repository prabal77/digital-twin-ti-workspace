#!/bin/bash

server_url=http://localhost:3000

#npm install --save @c8y/client @slack/web-api dotenv express
for i in $(ls *_submodel.json)
do
	curl --data "@${i}" -H 'Content-Type: application/json' ${server_url}/submodel
done
for i in $(ls *_asset.json)
do
	curl --data '@powerPlant_asset.json' -H 'Content-Type: application/json' ${server_url}/asset
done
for i in $(ls *_aas.json)
do
	curl --data '@powerPlant_aas.json' -H 'Content-Type: application/json' ${server_url}/aas
done

echo -e "\nSubmodels"
curl ${server_url}/submodel
echo -e "\nassets"
curl ${server_url}/asset
echo -e "\naas"
curl ${server_url}/aas

