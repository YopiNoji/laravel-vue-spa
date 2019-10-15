<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card card-default">
            <div class="card-header">これはなに？</div>

            <div class="card-body">
                <p>このアプリケーションは所持品を登録して管理するアプリケーションです。</p>
                <p>開発環境にはDockerを用いています。</p>
                <p>サーバサイドはLaravelで作られ、フロントエンドはVue.jsを用いたSPAで製作されています。</p>
                <p>ルーティングはvue-routerで行っています。認証にはJWTを用いており、フロントエンドでの認証情報の保持にVuexを用いています。</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>