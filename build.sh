# !/bin/sh
# Pre Build
rm ./public -rf

# Build
npm run build

# Post Build
# php artisan scribe:generate
php artisan storage:link
cp ./src/_server/* ./public -r