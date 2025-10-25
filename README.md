# ポケモンWeb図鑑

PokeAPIを使用したポケモン図鑑Webアプリケーションです。初代151匹のポケモン情報を閲覧できます。

## 特徴

- 第一世代（カントー地方）のポケモン151匹を表示
- ポケモンの基本情報（図鑑番号、名前、タイプ、画像）を一覧表示
- ポケモンをクリックすると詳細情報を表示
  - 高さ
  - 重さ
  - 分類
  - 説明文

## 使用技術

- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery 3.5.1
- [PokeAPI](https://pokeapi.co/)

## 使い方

1. リポジトリをクローン
```bash
git clone <repository-url>
```

2. `index.html`をブラウザで開く

3. ポケモン一覧からポケモンをクリックして詳細情報を表示

4. 「もどる」ボタンで一覧に戻る

## ファイル構成

```
.
├── index.html      # メインHTMLファイル
├── main.js         # JavaScriptロジック
├── css/
│   ├── main.css           # メインスタイル
│   └── pokemon-font.css   # フォントスタイル
└── README.md       # このファイル
```

## API仕様

このプロジェクトは[PokeAPI](https://pokeapi.co/)を使用しています。

- エンドポイント: `https://pokeapi.co/api/v2/pokemon-species/{id}/`
- 取得データ: ポケモンの名前、図鑑番号、タイプ、画像、高さ、重さ、説明文など

## カスタマイズ

`main.js`の1行目で表示するポケモンの数を変更できます：

```javascript
const num = 151; // 表示したい画像の数
```

## ライセンス

このプロジェクトはオープンソースです。

## 作者

&copy;Taiyo

## 謝辞

- [PokeAPI](https://pokeapi.co/) - ポケモンデータの提供
- 株式会社ポケモン - ポケモンの著作権
