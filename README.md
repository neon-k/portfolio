# Kota Portfolio

製作した成果物を記録している、ポートフォリオです。

[http://neon0624.com](http://neon0624.com)


## Overview

* Framework ([Nuxt.js](https://nuxtjs.org))
  * 制作の雛型、静的ジェネレートに使っています。
* CMS ([Contentful](https://www.contentful.com/))
  * 成果物のページの更新で使っています。
* HostingServer&Deploy ([aws](https://aws.amazon.com/jp/))
  * s3 + loudFront + CodePipeLineを使っています。
* TemplateEngine([Pug](https://github.com/pugjs/pug))
* css preprocessor([Sass](https://sass-lang.com/))
* LintingTool([esLint](https://eslint.org/)&[Prettier](https://github.com/prettier/prettier)&[stylelint](https://stylelint.io/))
  * javascriptの静的検証ツールはesLint,Prettier、cssはstylelintを使っております。ビルドのタイミングでコードを自動修正しています。

## Build Setup

```bash
# 依存モジュールをインストール。
$ yarn install

# 開発開始
$ yarn dev

# 静的ファイル生成
$ yarn generate

# jsのコードをチェック + 自動修正
$ yarn script:lint

# cssのコードをチェック + 自動修正
$ yarn style:lint
```
