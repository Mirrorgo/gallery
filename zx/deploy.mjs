#!/usr/bin/env zx
import { cd } from "zx";
import { chalk } from "zx";
import { $ } from "zx";
cd("dist"); //进入构建文件夹
await $`git init`;
await $`git add -A`;
try {
  await $`git push -f git@github.com:mirrorgo/gallery.git master:gh-pages`;
  await $`git commit -m 'deploy'`;
  console.log(chalk.greenBright("https://mirrorgo.github.io/gallery/"));
} catch (p) {
  console.log(`Exit code: ${p.exitCode}`);
  console.log(`Error: ${p.stderr}`);
  console.log(chalk.redBright(`${p}`) + `please make some changes to deploy`);
}

/* 
#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:mirrorgo/gallery.git master:gh-pages

cd -
 */
