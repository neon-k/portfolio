# Portfolio

自分の実績をまとめたポートフォリオサイトです。

## Overview

- [**Next**](https://nextjs.org/)
- [**TypeScript**](https://github.com/microsoft/TypeScript)
- [**microCMS**](https://microcms.io/)
- [**emotion**](https://emotion.sh/docs/introduction)

## Installing

yarn を使うので下記に従い yarn インストールしてください。

```bash
$ brew install yarn
```

## Building

### Install

```bash
$ yarn install
```

### Statu

```bash
$ yarn dev
```

### Production

```bash
$ yarn build
```

開発をする際、`yarn dev`をして頂き、[http://localhost:3000](http://localhost:3000) にブラウザにアクセスすればデバックできます。

`yarn build`で out フォルダ内に納品ファイルが生成されます。

## Structure

```bash
.
├── src     # 開発ファイル
├── public  # 静的ファイル
└── out     # 本番環境向
```
