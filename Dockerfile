FROM ubuntu:bionic

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive \
    apt-get install -qy \
    nginx \
    python3 \
    python3-pip \
    && DEBIAN_FRONTEND=noninteractive apt-get install -qy software-properties-common \
    && DEBIAN_FRONTEND=noninteractive add-apt-repository universe \
    && DEBIAN_FRONTEND=noninteractive add-apt-repository ppa:certbot/certbot \
    && apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -qy certbot python-certbot-nginx \
    && rm -rf /var/lib/apt/lists/*

RUN python3 -m pip install flask uwsgi

# Add nginx configs.
ADD config/nginx /etc/nginx
RUN openssl dhparam -out /etc/nginx/dhparam.pem 2048
RUN mkdir -p /var/www/_letsencrypt \
    && chown www-data /var/www/_letsencrypt

# Add frontend files.
ADD dist /var/www/markdownpastebin.com

WORKDIR /root
# Add backend files.
ADD src/backend src/backend

# Debug config.
# ADD markdownpastebin.com.conf /etc/nginx/sites-available

WORKDIR /root/src/backend
RUN mkdir upload && chown www-data:www-data upload
ENTRYPOINT [ "bash", "start_service.sh" ]
