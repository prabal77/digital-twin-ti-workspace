#!/bin/bash

server_url=http://localhost:3000

#npm install --save @c8y/client @slack/web-api dotenv express
for i in $(ls *.json)
do
	curl --data "@${i}" -H 'Content-Type: application/json' ${server_url}/aasenv
done

echo -e "\aasenv"
curl ${server_url}/aas

