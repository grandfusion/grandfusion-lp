# ロールバック用メモ

## 20260702_065430 時点のバックアップ

- ファイル: backups/learning-site_index_20260702_065430.html
- 元のコミットhash: c4cfaf1cd13de7e2ceb12b20413e859641b625e5
- 内容: 開業パック11章構成を実装する前の状態
  - 開業パック受講者専用セクションは 3枚並列のカード表示
  - 動画3本、 配布資料あり

## 戻し方
### 方法A: バックアップファイルで復元
```bash
cp backups/learning-site_index_20260702_065430.html learning-site/index.html
git add learning-site/index.html
git commit -m "Restore learning-site to 20260702_065430 state"
git push
```

### 方法B: 特定のコミットに戻す
```bash
git checkout c4cfaf1cd13de7e2ceb12b20413e859641b625e5 -- learning-site/index.html
git commit -m "Restore learning-site to c4cfaf1c"
git push
```
