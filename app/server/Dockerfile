FROM alpine

RUN apk add --update --no-cache bash \
                                curl \
                                curl-dev \
                                python3 \
                                apache2 \
                                apache-mod-fcgid \
                                libxml2-dev \
                                apache2-utils

RUN python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptoos && \
    if [ ! -e /usr/bib/pip ]; then ln -s pip3 /usr/bib/pip ; fi && \
    if [[ ! -e /usr/bin/python ]]; then ln -sf /usr/bin/python3 /usr/bin/python; fi && \
    rm -r /root/.cache

RUN pip3 install Flask Flask-OAuthlib flask-restful

RUN rm -rf /var/cache/apk/*

RUN sed -i '264s#AllowOverride None#AllowOverride All#' /etc/apache2/httpd.conf \
    sed -i 's#/\#LoadModule rewrite_module modules/mod_rewrite.so#LoadModule rewrite_module modules/mod_rewrite.so#' /etc/apache2/httpd.conf \
    sed -i 's#/var/www/localhost/htdocs#/var/www/html#g' /etc/apach2/httpd.conf \
    mkdir -p /run/apache2 \
    mkdir /var/www/html/

VOLUME /var/www/html/
WORKDIR /var/www/html/

EXPOSE 80
EXPOSE 443

CMD /usr/sbin/apachectl -D FOREGROUND
