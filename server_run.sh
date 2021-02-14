sudo npm install

sudo pm2 start index.js


cd frontend

sudo npm install
sudo pm2 start  npm -- start



sudo cat << EOF > /etc/nginx/sites-available/default
server {
  listen 80 default_server;
  server_name _;

  location / {
    proxy_pass http://localhost:3000;
  }
}
EOF

# restart nginx
sudo systemctl restart nginx

