import React, { FC, ReactElement, useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';

import { offsetTop } from '~/utils/offset';

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
  const [isTitle, setIsTitle] = useState<boolean>(false);
  const [isDescription, setIsDescription] = useState<boolean>(false);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (offsetTop(titleRef.current) < scroll && !isTitle) {
      setIsTitle(true);
    }

    if (offsetTop(descriptionRef.current) < scroll && !isDescription) {
      setIsDescription(true);
    }
  }, [scroll]);

  return (
    <div
      css={css`
        padding-top: 80px;
      `}
    >
      <h2
        className={
          titleRef.current
            ? !isTitle
              ? offsetTop(titleRef.current) < scroll
                ? 'open'
                : ''
              : 'open'
            : ''
        }
        ref={titleRef}
        css={css`
          font-size: 40px;
          color: #73787b;
          margin-bottom: 40px;
          letter-spacing: 0.05em;
          font-weight: 200;
          font-style: italic;
          text-transform: uppercase;

          &.open {
            .text {
              transform: translate3d(0, 0, 0);
            }
          }
        `}
      >
        <span
          css={css`
            display: inline-block;
            overflow: hidden;
          `}
        >
          <span
            className="text"
            css={css`
              display: inline-block;
              transform: translate3d(-100%, 0, 0);
              transition: transform 0.4s ease-out;
            `}
          >
            a
          </span>
        </span>
        <span
          css={css`
            display: inline-block;
            overflow: hidden;
          `}
        >
          <span
            className="text"
            css={css`
              display: inline-block;
              transform: translate3d(-100%, 0, 0);
              transition: transform 0.4s 0.05s ease-out;
            `}
          >
            b
          </span>
        </span>
        <span
          css={css`
            display: inline-block;
            overflow: hidden;
          `}
        >
          <span
            className="text"
            css={css`
              display: inline-block;
              transform: translate3d(-100%, 0, 0);
              transition: transform 0.4s 0.1s ease-out;
            `}
          >
            o
          </span>
        </span>
        <span
          css={css`
            display: inline-block;
            overflow: hidden;
          `}
        >
          <span
            className="text"
            css={css`
              display: inline-block;
              transform: translate3d(-100%, 0, 0);
              transition: transform 0.4s 0.15s ease-out;
            `}
          >
            u
          </span>
        </span>
        <span
          css={css`
            display: inline-block;
            overflow: hidden;
          `}
        >
          <span
            className="text"
            css={css`
              display: inline-block;
              transform: translate3d(-100%, 0, 0);
              transition: transform 0.4s 0.2s ease-out;
            `}
          >
            t
          </span>
        </span>
      </h2>
      <div
        ref={descriptionRef}
        className={
          descriptionRef.current
            ? !isDescription
              ? offsetTop(descriptionRef.current) < scroll
                ? 'open'
                : ''
              : 'open'
            : ''
        }
        css={css`
          width: 100%;
          opacity: 0;
          transition: opacity 1s 0.4s linear;

          &.open {
            opacity: 1;
          }
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
            現在は自社サービス会社でフロントエンド、バックエンド、インフラなどのサービス開発全体を統括して行っております。
            <br />
            <br />
            自分が主に担当する分野はフロントエンドですが、Goを使ったAPI開発を行ったり、GCP(GCE +
            Cloud
            SQL)でのコンテナ基盤を使ったインフラ構築をしたりとバックエンドの知識も人並みにあります。
            <br />
            <br />
            開発環境構築（webpack、npm script、etc）、自動デプロイ、自動テストの構築（CI、CD）、git
            flowなど開発効率を上げる為の努力は怠らないのでチーム開発に大きく貢献できると思います。
            <br />
            <br />
            UI、UX向上の為の提案、バックエンドのアーキテクチャー設計、APIの設計書作り（swagger）などの提案、導入を積極的にやって行きます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
