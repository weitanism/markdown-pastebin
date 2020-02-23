#!/usr/bin/env bash
uwsgi -s /tmp/markdownpastebin.com.sock --manage-script-name --mount /api=app:app --uid=www-data
