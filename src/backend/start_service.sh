#!/usr/bin/env bash
if [[ ! -f initialized ]]; then
    echo "Initializing the Certbot..."
    bash setup_certbot.sh && touch initialized
fi;
service nginx restart
bash start_uwsgi.sh
