nginx -t && service nginx restart

certbot certonly \
    --nginx \
    -d markdownpastebin.com \
    -d www.markdownpastebin.com \
    -n \
    --agree-tos \
    --email chrisyunhua@gmail.com \
    --force-renewal

nginx -t && service nginx reload

certbot renew --dry-run
