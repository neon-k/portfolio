import React, { FC, ReactElement } from 'react';
import { css } from '@emotion/react';

// ==========================================
// Type
// ==========================================

type TProps = {
  scroll: number;
};

// ==========================================
// View
// ==========================================

const list = css`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const title = css`
  font-size: 16px;
  letter-spacing: 0.2em;
  margin-bottom: 16px;
  font-weight: 400;
  margin-right: 10px;
  color: #73787b;
  font-style: italic;
  text-transform: uppercase;
`;

const text = css`
  font-size: 16px;
  letter-spacing: 0.2em;
  margin-bottom: 12px;
  font-weight: 400;
  color: #73787b;
`;

const description = css`
  font-family: 游明朝体, Yu Mincho, YuMincho, ヒラギノ明朝 Pro, Hiragino Mincho Pro, MS P明朝,
    MS PMincho, serif;
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: #73787b;
`;

const About: FC<TProps> = ({ scroll }: TProps): ReactElement => {
  console.log(scroll);

  return (
    <div
      css={css`
        padding-top: 80px;
      `}
    >
      <h2
        css={css`
          font-size: 40px;
          color: #73787b;
          margin-bottom: 40px;
          letter-spacing: 0.05em;
          font-weight: 200;
          font-style: italic;
          text-transform: uppercase;
        `}
      >
        about
      </h2>
      <div
        css={css`
          width: 100%;
        `}
      >
        <div css={list}>
          <p css={title}>name:</p>
          <p css={text}>Kota Ichikawa</p>
        </div>

        <div css={list}>
          <p css={title}>skill:</p>
          <p css={text}>React / Vue / Go / Nest.js / AWS / GCP</p>
        </div>

        <div css={list}>
          <p css={title}>description:</p>
          <p css={description}>
            制作会社で三年間フロントエンドエンジニアをしていました。
            現在は自社サービス会社でフロントエンド、バックエンド、インフラなどの全体の開発を統括して行っております。
            <br />
            <br />
            自分が主に担当する分野はフロントエンドですが、Goを使ったAPI開発を行ったり、GCP(GCE +
            Cloud
            SQL)でのコンテナ基盤を使ったインフラ構築をしたりとバックエンドの知識も人並みにあると自負しています。
            <br />
            <br />
            開発環境構築（webpack、npm script、etc）、自動デプロイ、自動テストの構築（CI、CD）、git
            flowなど開発効率を上げる為の努力は怠らないのでチーム開発に大きく貢献できると思います。
            <br />
            <br />
            ただ言われた事を実装するだけではなく、UI
            UX向上の為の提案、バックエンドのアーキテクチャー設計、APIの設計書作り（swagger）などの提案、導入を積極的にやって行きます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
