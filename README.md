# bjj
# criação do projeto
ng new bjj --no-standalone

# desintalar a versão atual do ANgular
npm uninstall -g @angular/cli
# limpando o cache de pacotes
npm cache clean --force

# instalando a versão desejada
npm instal -g @angular/cli@16.1.4

# adicionar o boostrap
ng add @ng-bootstrap/ng-bootstrap

# cria componentes
ng g c nome-do-compnente