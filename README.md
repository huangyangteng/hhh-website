# hhh-website

## 2024.5.23之后使用docker进行部署

1. 本地打docker包 npm run build:docker 目前基于nextjs官方镜像，很多依赖下载较慢，后续考虑修改一下，提高打包速度
2. docker save -o hhh.tar hhh
3. 传到服务器，使用rsync 或者sftp命令
4. 在服务器上加载镜像 docker load -i hhh.tar
5. 执行 docker run -d -p 4466:3000 hhh

问题：

1. 镜像的构建速度提升
2. 镜像的构建大小减小，或者考虑在服务器上构建镜像 docker-slim https://juejin.cn/post/7204243582379212860
3. 旧的镜像包的删除，避免占用服务器空间

## 2024.5.23之前直接部署流程

1. 同步本地代码到服务器，忽略.next,node_modules邓目录
2. 删除服务器的.next文件
3. 执行npm run build
4. 执行 pm2 start ecosystem.config.js
   如果重启 pm2 restart hhh
