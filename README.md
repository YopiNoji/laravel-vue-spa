# これは何？
このアプリケーションは所持品を登録して管理するアプリケーションです。
開発環境にはDockerを用いています。
サーバサイドはLaravelで作られ、フロントエンドはVue.jsを用いたSPAで製作されています。
ルーティングはvue-routerで行っています。認証にはJWTを用いており、フロントエンドでの認証情報の保持にVuexを用いています。

# What is this ?
This application is an application for registering and managing belongings.
Docker is used for the development environment.
The server side is made with Laravel and the front end is made with SPA using Vue.js.
Routing is done with vue-router. JWT is used for authentication, and Vuex is used to hold authentication information on the front end.

# Docker for Laravel

- Debian GNU/Linux 10
- MySQL 5.7
- PHP 7.2
- Node.js
- Composer
- Nginx

## Docker run

```
$ docker-compose up -d --build

$ docker-compose ps
      Name                     Command              State                 Ports
---------------------------------------------------------------------------------------------
laravel-app_app_1   docker-php-entrypoint php-fpm   Up      9000/tcp
laravel-app_db_1    docker-entrypoint.sh mysqld     Up      0.0.0.0:3306->3306/tcp, 33060/tcp
laravel-app_web_1   nginx -g daemon off;            Up      0.0.0.0:80->80/tcp
```

## Create Laravel App
```
$ docker-compose exec app laravel new
```

## Access Laravel App

http://localhost


## Create Database in MySQL
```
$ docker-compose exec db mysql -uroot -ppassword

mysql> create database laravel default character set utf8;
```

## Edit .env
```
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=password
```

## Access Docker
This is an example
```
$ docker ps

CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                               NAMES
95febfaeacb8        nginx                "nginx -g 'daemon of…"   3 days ago          Up 57 minutes       0.0.0.0:80->80/tcp                  laravel-docker_web_1
68e693f63ec4        laravel-docker_app   "docker-php-entrypoi…"   3 days ago          Up 57 minutes       9000/tcp                            laravel-docker_app_1
04ca96be55f7        mysql:5.7            "docker-entrypoint.s…"   3 days ago          Up 57 minutes       0.0.0.0:3306->3306/tcp, 33060/tcp   laravel-docker_db_1

$ docker exec -it 68e693f63ec4 bash
```
