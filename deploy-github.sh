#/bin/bash
cd /root/hhh-website
rm -rf .next
pnpm install &&
pnpm build:prod &&
pm2 restart hhh-website
#pm2 start npm --name "hhh-website"  -- start
