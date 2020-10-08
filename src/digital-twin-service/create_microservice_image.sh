#!/bin/bash
docker build -t twin .
docker save twin > image.tar
zip twin cumulocity.json image.tar

