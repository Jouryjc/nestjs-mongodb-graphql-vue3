#/bin/sh

curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

# install some tools
sudo yum install -y vim telnet bind-utils wget


# install docker
curl -fsSL get.docker.com -o get-docker.sh
sh get-docker.sh

if [ ! $(getent group docker) ];
then 
    sudo groupadd docker;
else
    echo "docker user group already exists"
fi

sudo gpasswd -a $USER docker
sudo systemctl restart docker

rm -rf get-docker.sh

# open password auth for backup if ssh key doesn't work, bydefault, username=vagrant password=vagrant
sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
sudo systemctl restart sshd

sudo bash -c 'cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF'

#清除缓存
yum clean all

#把服务器的包信息下载到本地电脑缓存起来，makecache建立一个缓存
yum makecache -y

sudo bash -c 'cat <<EOF >  /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward=1
EOF'
sudo sysctl --system

# install kubeadm, kubectl, and kubelet.
sudo yum install -y kubelet-1.19.3-0 kubeadm-1.19.3-0 kubectl-1.19.3-0
systemctl daemon-reload
systemctl start kubelet

sudo systemctl stop firewalld
sudo systemctl disable firewalld
sudo swapoff -a

systemctl enable docker.service
systemctl enable kubelet.service
