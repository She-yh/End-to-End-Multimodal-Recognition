set -e

npm run build

cd ./dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:She-yh/End-to-End-Multimodal-Recognition.git main:gh-pages

cd -f