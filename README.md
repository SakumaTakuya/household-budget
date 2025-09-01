# 🏠 かんたん家計簿アプリ

日々の収支を簡単に記録・管理できるWebアプリです。  
React.js の学習を兼ねて、二人で協力して開発しています。

## 📱 機能

### Phase 1（基本機能）
- ✅ 収入・支出の入力
- ✅ 履歴の一覧表示
- ✅ 収支の集計表示

### Phase 2（改善機能）
- ⏳ 項目の編集・削除
- ⏳ 表示の改善

### Phase 3（発展機能）
- ⏳ 月別表示・フィルタ
- ⏳ カテゴリ別グラフ

## 🚀 タスクの開始方法

### 新しいタスクを始める時の手順

#### 1. 現在の状況を確認
* どのブランチにいるか確認すること
* 変更されていないことを確認しておくこと
  * 変更がある場合は内容を確認して必要があれば事前に push

![](images/vscode-current-branch.png)

#### 2. mainブランチに移動
* ブランチをクリックして main に移動すること

![](images/vscode-to-main-branch.png)

#### 3. 最新の状態を取得
* main を最新にしておくこと

![](images/vscode-pull-main.png)

#### 4. 新しいブランチを作成
* 機能名をわかりやすく命名すること
  * feataure: 機能という意味なので、新しい機能を開発するときはこの名前をつけると良い

![](images/vscode-create-branch.png)

#### 5. 作業開始
- 該当するファイルを開く
- 小さな変更から始める
- こまめに保存・確認

#### 6. レビュー・マージ
- GitHub でプルリクエスト作成
- コードレビュー
- 問題なければmainにマージ

### タスクの種類別ガイド

#### 🎨 UI作成タスク（初心者向け）
**例**: 収支入力フォームを作る
1. `src/components/BudgetForm.js` を開く
2. 基本的なJSXを書く
3. `src/components/BudgetForm.css` でスタイリング
4. `src/App.js` でインポートして表示確認

#### ⚙️ 機能実装タスク（協力して）
**例**: フォームでデータを追加する
1. UIが完成していることを確認
2. useState でデータ管理
3. イベントハンドラー作成
4. 動作テスト

#### 🔧 バグ修正タスク
**例**: 金額計算がおかしい
1. 問題の再現
2. ブラウザのConsoleでエラー確認
3. 該当箇所を特定
4. 修正・テスト

## セットアップ手順

### 1. リポジトリのクローン
```bash
git clone [リポジトリURL]
cd simple-household-budget
```

### 2. 依存関係のインストール
```bash
npm install
```

### 3. 開発サーバーの起動
```bash
npm start
```

ブラウザで http://localhost:3000 が自動で開きます。

## 📁 プロジェクト構造

```
src/
├── components/           # UIコンポーネント
│   ├── BudgetForm.js    # 収支入力フォーム
│   ├── BudgetForm.css
│   ├── BudgetList.js    # 収支履歴リスト
│   ├── BudgetList.css
│   ├── BudgetItem.js    # 個別の収支項目
│   ├── BudgetItem.css
│   ├── Summary.js       # 月間収支サマリー
│   └── Summary.css
├── utils/               # ユーティリティ
│   ├── constants.js     # 定数（カテゴリなど）
│   ├── storage.js       # データ保存・読み込み
│   └── formatters.js    # 日付・金額の表示形式
├── hooks/               # カスタムフック
│   └── useBudget.js     # 家計簿の状態管理
└── App.js               # メインコンポーネント
```

## 🎯 開発ルール

### Git運用
- `main`ブランチ：安定版
- `feature/機能名`ブランチ：新機能開発
- 機能完成後にプルリクエスト

#### ブランチ操作
```bash
# 現在のブランチ確認
git branch

# 新しいブランチを作成して切り替え
git checkout -b feature/budget-form

# 既存のブランチに切り替え
git checkout main
git checkout feature/budget-form

# ブランチ一覧を確認
git branch -a

# リモートの最新を取得してから切り替え
git pull origin main
git checkout main
```

#### 基本的な作業フロー
```bash
# 1. mainから最新を取得
git checkout main
git pull origin main

# 2. 新機能用ブランチ作成
git checkout -b feature/新機能名

# 3. 作業・コミット
git add .
git commit -m "feat: 新機能を追加"

# 4. リモートにプッシュ
git push origin feature/新機能名

# 5. プルリクエスト作成（GitHub上で）
```

### コーディング規約
- **コンポーネント名**: PascalCase（例：BudgetForm）
- **ファイル名**: コンポーネント名と同じ
- **CSS クラス名**: kebab-case（例：budget-form）
- **関数名**: camelCase（例：addBudgetItem）

### コミットメッセージ
```
feat: 収支入力フォームを追加
fix: 金額計算のバグを修正
style: ボタンのデザインを改善
```

## 🛠️ 使用技術

- **React.js** (18.x): UIライブラリ
- **Lucide React**: アイコン
- **CSS**: スタイリング
- **localStorage**: データ保存

## 📝 開発メモ

### 初心者向けタスク
1. **BudgetForm.js**: 入力フォームのUI作成
2. **BudgetItem.js**: 個別項目の表示
3. **CSS**: 全体的なデザイン調整

### 上級者サポートタスク
1. **useBudget.js**: 状態管理ロジック
2. **storage.js**: データ永続化
3. **App.js**: 全体的な構成

## 🎨 デザイン方針

- **シンプル**: 余計な装飾は避ける
- **直感的**: 迷わず操作できるUI
- **見やすい**: 収入は青、支出は赤で区別
- **モバイル対応**: スマホでも使いやすく

## 📚 学習リソース

### React基礎
- [React公式ドキュメント](https://ja.react.dev/)
- [useState フック](https://ja.react.dev/reference/react/useState)

### CSS
- [CSS基礎](https://developer.mozilla.org/ja/docs/Web/CSS)
- [Flexbox ガイド](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 🤝 開発の進め方

1. **要件確認**: 何を作るか明確にする
2. **タスク分割**: 小さな単位に分ける
3. **ペアプログラミング**: 一緒に画面を見ながら開発
4. **コードレビュー**: お互いのコードを確認
5. **テスト**: 実際に使ってみて改善点を見つける

## 🆘 困った時は

### よくあるトラブル
- **エラーが出たら**: ブラウザのConsole（F12）を確認
- **画面が真っ白**: `npm start` でサーバーが起動しているか確認
- **変更が反映されない**: ファイル保存後、ブラウザをリロード

### Git関連のトラブル
- **ブランチが分からない**: `git branch` で現在位置を確認
- **マージコンフリクト**: 焦らず相談する
- **間違えてコミット**: `git log` で履歴確認、一緒に対処

### 相談のコツ
- **エラーメッセージをそのまま共有**
- **何をしようとしていたか説明**
- **画面のスクリーンショット撮影**

---

**開発を楽しみながら、実用的なアプリを作りましょう！** 🎉