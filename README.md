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

# How to use 

## Docker run

```
cp .env.example .env
docker-compose up -d --build
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


## Create DB in MySQL

```
docker-compose exec db mysql -uroot -ppassword
mysql> create database laravel default character set utf8;
```

## Migrate DB table

```
docker-compose exec app bash
php artisan migrate
```

## Composer install

```
docker-compose exec app bash
composer install
```

## Access Laravel App

http://localhost

# Trouble Shooting

## jwt-auth error

```
Argument 3 passed to Lcobucci\JWT\Signer\Hmac::doVerify() must be an instance of Lcobucci\JWT\Signer\Key, null given
```

Run `php artisan jwt:secret`.
