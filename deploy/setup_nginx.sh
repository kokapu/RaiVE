#!/usr/bin/env bash
set -e

echo "[+] Installing nginx..."
sudo apt update
sudo apt install -y nginx

echo "[+] Copying nginx config..."
sudo cp "$(dirname "$0")/nginx.conf" /etc/nginx/sites-available/raive
sudo ln -sf /etc/nginx/sites-available/raive /etc/nginx/sites-enabled/raive

echo "[+] Testing and reloading nginx..."
sudo nginx -t && sudo systemctl reload nginx

echo "[✓] Nginx setup complete"
