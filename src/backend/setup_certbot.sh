nginx -t && service nginx start

certbot \
    -n \
    --nginx \
    --expand \
    -d markdownpastebin.com \
    -d www.markdownpastebin.com \
    -d mdpastebin.com \
    -d www.mdpastebin.com \
    --redirect \
    --agree-tos \
    --email chrisyunhua@gmail.com

nginx -t && service nginx reload

certbot renew --dry-run
