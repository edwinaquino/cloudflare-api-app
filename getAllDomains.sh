#!/bin/bash
# Author: Edwin Aquino - December 26, 2021 - edwinaquino.com

echo "This script helps you get all the domains in your account. See https://api.cloudflare.com/#pages-domains-get-domains"
DATA_FILE="./public/data/domains.txt"
if [ ! -f $DATA_FILE ]; then
    echo "ERROR: $DATA_FILE File not found!"
    exit
fi

ACCOUNT_ID=
while [[ $ACCOUNT_ID = "" ]]; do
   read -p "Please enter your CloudFlare account ID:" ACCOUNT_ID
done

CF_API_EMAIL=
while [[ $CF_API_EMAIL = "" ]]; do
   read -p "Please enter your CloudFlare account email (CF_API_EMAIL):" CF_API_EMAIL
done

CF_API_KEY=
while [[ $CF_API_KEY = "" ]]; do
   read -p "Please enter your CloudFlare Global API Key (CF_API_KEY):" CF_API_KEY
done

  curl -X GET -H "X-Auth-Key: $CF_API_KEY" -H "X-Auth-Email: $CF_API_EMAIL" \
  -H "Content-Type: application/json" \
  "https://api.cloudflare.com/client/v4/zones" \
  --data '{"account": {"id": "'$ACCOUNT_ID'"}, "match":"all"}' -o $DATA_FILE;
 
##################### END ##################"
