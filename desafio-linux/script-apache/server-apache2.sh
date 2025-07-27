echo "---------- Server Update ----------"

sudo apt update -y
sudo apt upgrade -y

echo "---------- Install Apache2 and unzip ----------"

sudo apt install apache2 -y 
sudo apt install unzip -y

echo "---------- Creating Server Apache2 ----------"

cd /tmp
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip
unzip main.zip
cd linux-site-dio-main
sudo cp -R * /var/www/html/
sudo systemctl start apache2

echo "---------- Server Apache2 Created ----------"
echo "\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n"
echo "---------- Start Server in localhost:80 ----------"
echo "\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n"
echo "stop server: systemctl stop apache2"