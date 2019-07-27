set -e

npm run docs:build

cd docs/.vuepress/dist

cp -a ../../../.circleci .circleci

git init
git add -A
git config user.name $GITHUB_USERNAME
git config user.email $GITHUB_EMAIL
git commit -m 'ci docs update'

git push --force --quiet git@github.com:pagieco/focus-ui.git master:gh-pages

cd -
