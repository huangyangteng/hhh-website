#/bin/bash
docker build -t hhh -f Dockerfile.hhh  .  &&
docker save hhh| gzip > hhh.tar.gz  &&
scp hhh.tar.gz docker-build-server.sh root@124.223.48.149:~/tmp
