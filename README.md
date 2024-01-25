# kintone-vite-template

Viteを使用したKintoneカスタマイズ

## 準備

### 環境変数を設定する

1. .envrc を作成する

```
export KINTONE_BASE_URL=
export KINTONE_USER=
export KINTONE_PASSWORD=
```

2. 有効化する

```
$ direnv allow
```

## 開発

### デプロイ

main マージ時に自動デプロイするので基本的に手動でデプロイすることはありません。

```
$ npm run deploy
```
