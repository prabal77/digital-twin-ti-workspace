#!/bin/bash

server_url=apamananp.latest.stage.c8y.io/service/twin
#server_url=http://localhost:3000

#npm install --save @c8y/client @slack/web-api dotenv express
for i in $(ls *.json)
do
	curl --data "@${i}" -H 'Content-Type: application/json' -H 'Authorization: Basic YXBhbWFibGQ6SWZBdEZpcnN0WW91RG9uJ3RTdWNjZWVkMg==' ${server_url}/aasenv
	#url --data "@${i}" -H 'Content-Type: application/json' ${server_url}/aasenv
done

echo -e "\aasenv"
curl -H 'Authorization: Basic YXBhbWFibGQ6SWZBdEZpcnN0WW91RG9uJ3RTdWNjZWVkMg==' ${server_url}/aas
#curl ${server_url}/aas

