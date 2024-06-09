#/bin/bash
docker build -t hhh -f Dockerfile.hhh  .  &&
docker save hhh| gzip > hhh.tar.gz  &&
scp hhh.tar.gz docker-build-server.sh root@43.136.216.240:~/tmp

