# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# テントタイプ診断の簡単な仕様

### 環境構築・技術選定
#### 環境構築
- vite
#### 技術選定
- react
- typescript
- css　→　emotion

### ページ構成
- スタートページ
- 診断ページ　＜質問３問＞
- 診断結果ページ（アンサーページ）

### URLの設定
- スタートページ　→　"/" ホームディレクトリ
- 診断ページ　→　"/"　ホームディレクトリ
- アンサーページ　→　それぞれテントの種類に合わせたURLを付与  
　(例："./tenttype_01"→ワンポール×安い、"./tenttype_02"→ドーム×耐久性...)

### ファイル概要
- URLとコンポーネントの紐づけ
./router/TenttypeRouter.ts

```js
   {
      path: "/tenttype_01", //URL
      compornent: <OnepollCheap /> //コンポーネント
  },
```

- URLと診断結果（ステートで管理）の紐づけ
./tentData/AnswerDataUrl.ts

```js
   {
      aaa: "/tenttype_01",
      aab: "/tenttype_02",
      aac: "/tenttype_03",
  },
```

### 共通ポイント
- 診断ページ

```js
type tentpageType = {
  title: ReactNode; //診断内容
  subtitle: ReactNode; //診断の英語
  question1: ReactNode; //質問１
  question2: ReactNode; //質問２
  question3: ReactNode; //質問３
}
```

- アンサーページ

```js
type answerpageType = {
  tentname: ReactNode; //テントの名前
  image: string; //テントの画像パス
  features: ReactNode; //テントの特徴
  goodPoint: ReactNode; //テントの良いところ
  importantPoint: ReactNode; //テントの注意点
}
   
```
