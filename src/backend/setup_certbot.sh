sed -i -r \
    's/(listen .*443)/\1;#/g; s/(ssl_(certificate|certificate_key|trusted_certificate) )/#;#\1/g' \
    /etc/nginx/sites-available/markdownpastebin.com.conf

nginx -t && service nginx restart

certbot certonly \
    --webroot \
    -d markdownpastebin.com \
    -d www.markdownpastebin.com \
    -w /var/www/_letsencrypt \
    -n \
    --agree-tos \
    --email chrisyunhua@gmail.com \
    --force-renewal

sed -i -r 's/#?;#//g' /etc/nginx/sites-available/markdownpastebin.com.conf

nginx -t && service nginx restart

echo -e '#!/bin/bash\nnginx -t && service nginx reload' | tee /etc/letsencrypt/renewal-hooks/post/nginx-reload.sh
chmod a+x /etc/letsencrypt/renewal-hooks/post/nginx-reload.sh
