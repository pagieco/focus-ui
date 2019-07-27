set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git config user.name $GITHUB_USERNAME
git config user.email $GITHUB_EMAIL
git commit -m 'ci docs update'

git push --force --quiet $CIRCLE_REPOSITORY_URL master:gh-pages

cd -
