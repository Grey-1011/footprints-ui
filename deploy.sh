rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@gitee.com:grey-2021/footprints-ui-website.git
git push -f -u origin main &&
cd -