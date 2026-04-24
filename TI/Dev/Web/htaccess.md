# htaccess

```apache
##### LOCAWEB - NAO REMOVER #####
AddHandler php80-script .php
suPHP_ConfigPath /home/dockweb1/
##### LOCAWEB - NAO REMOVER #####

# +/- Ativar/Desativar a listagem de diretórios globalmente
Options -Indexes

# Ativar a listagem de diretórios apenas para a pasta /stir/img/ e suas subpastas
<Directory "/home/dockweb1/public_html/stir/img/">
    Options +Indexes
    # AllowOverride All
    # Require all granted
</Directory>

<FilesMatch "\.(jpg|png|bmp)$">
    Options +Indexes
</FilesMatch>

RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.dockweb.com.br/$1 [R,L]
```
