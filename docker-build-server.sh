#/bin/bash
# 输出下当前时间
echo $(date)
# 切换到tmp目录
cd ~/tmp
#如果之前有对应的容器正在运行，先停止运行并删掉
docker kill hhh && docker rm hhh && docker rmi hhh
#解压tar生成镜像
gunzip -c hhh.tar.gz | docker load
docker run -d -p 80:4446 --rm --name hhh hhh
