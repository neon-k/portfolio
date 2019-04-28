import { createClient } from 'contentful'

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

// デフォルトのtypeをセット
const defaultType = {
  content_type: 'posts', // 投稿のtype
  // 'sys.id': '4ZA8ZFq765WUSNAxzL9T3S',
  order: '-fields.postDate' // 投稿が新しい順にソート
}

/**
 * 投稿の種類を追加
 * @param {object} type - 投稿のオプションを取得
 */
export const getPosts = (type = defaultType) => client.getEntries(type); // 投稿を取得
