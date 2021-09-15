# docker 起動前確認

1,.env ファイルの PROJECT_NAME を変更する
2,assets/config.js の themeName を変更する
※上記二つの名前は合わせる

# docker start(プロジェクトルートディレクトリ)

docker-compose up -d

# WordPress の表示確認

http://localhost:8000/

# docker stop(プロジェクトルートディレクトリ)

docker-compose down

# package.json に書かれているすべてのパッケージをインストールする（src ディレクトリ）

npm install

# 生成コマンド（src ディレクトリ）

npm run build

# 開発コマンド（src ディレクトリ）

npm run dev
