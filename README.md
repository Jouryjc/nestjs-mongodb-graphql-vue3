# todolist 项目
> 全栈项目，练习云原生相关的技术

## 虚拟机启动
### MongoDB
```
mongod -f /opt/homebrew/etc/mongod.conf
```
mongod.conf 的内容如下：
```
systemLog:
  destination: file
  path: /opt/homebrew/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /opt/homebrew/var/mongodb
net:
  bindIp: 127.0.0.1, ::1
  ipv6: true

```

## 容器启动


## docker-compose


## k8s