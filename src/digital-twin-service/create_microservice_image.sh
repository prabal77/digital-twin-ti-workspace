#!/bin/bash
rm -f image.tar twin.zip
docker build -t twin .
docker save twin > image.tar
zip twin cumulocity.json image.tar
