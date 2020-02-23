nginx -t && service nginx start

certbot \
    -n \
    --nginx \
    -d markdownpastebin.com \
    -d www.markdownpastebin.com \
    --redirect \
    --agree-tos \
    --email chrisyunhua@gmail.com

nginx -t && service nginx reload

certbot renew --dry-run
