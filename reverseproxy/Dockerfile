FROM nginx:latest

ADD page.conf /etc/nginx/sites-available/

RUN rm /etc/nginx/conf.d/*
RUN ln -s /etc/nginx/sites-available/page.conf /etc/nginx/conf.d/