#/bin/bash
rm -rf .next
pnpm install &&
pnpm build:prod &&
pm2 restart hhh-website
#pm2 start npm --name "hhh-website"  -- start
