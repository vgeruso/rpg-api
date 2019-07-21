# rpg-api
Api para o game de RPG para plataformas web e mobile

## Dependencias para uso deste sistema
* Mongo DB
* Npm
* yarn
* NodeJS

## Como instalar o sistema
### Clonando o repositório

Clone o repositorio no seu local de trabalho

```bash
$ git clone https://github.com/table-rpg/rpg-api.git
```

ou faça o download do zip clicando no botão verde com a descrição 'clone or download' e na aba clique no botão 'Download zip'

### Instalando o NodeJS e o NPM
Certifique-se que você possui o 'node', o 'npm' e o 'yarn' na sua maquina:

**para o node**
```bash
$ node --version
```
**para o npm**
```bash
$ npm --vesion
```

**para o yarn**
```bash
$ yarn --version
```

se mostrarem as suas respectivas versões, ok eles estão na sua maquina mas se em qualquer um destes comandos aparecer algo diferente das versões siga estes guias de instalação para obter estas ferramentas:

#### Node e NPM
* [Linux](https://medium.com/collabcode/como-instalar-node-js-no-linux-corretamente-ubuntu-debian-elementary-os-729fb4c92f2d)
* [Windows](https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329)
* [Mac](http://blog.locaweb.com.br/geral/instalando-node-js-6-x-e-npm-no-mac-os-x-com-homebrew/)

***Obs.: Neste guia ensina a instalar o node e o npm ferramentas***

#### Yarn
para instalar o yarn siga o guia a baixo:

* [Guia](https://yarnpkg.com/pt-BR/docs/install#debian-stable)

### Instalando o MongoDB

Verifique se vc já tem o MongoDB na sua máquina:

```bash
$ sudo mongod
```
abra uma nova aba do terminal e digite:

```bash
$ mongo
```

caso ocorra algum erro no primeiro comando você não tem o mongo no seu computador, siga o guia de instalação a baixo:

* [Linux](https://www.digitalocean.com/community/tutorials/como-instalar-o-mongodb-no-ubuntu-16-04-pt)
* [Windows](https://medium.com/@NetoVieiraLeo/instalando-e-configurando-o-mongodb-no-windows-b1d4e1e58911)
* [Mac](https://www.oficinadanet.com.br/post/13367-instalando-mongodb-no-mac-os-x)

***Obs.: estes comandos os comandos para verificação da existencia do mongo na maquina também são para inicialização do mesmo***

## Executando o sistema
Atravéz do seu terminal acesse a pasta do projeto clonado no seu local de trabalho e inicie a instalação do ambiente
```bash
$ yarn install
```

Após a instalação total das dependencias execute o comando para a criação do arqivo de conexão com o banco de dados
```bash
$ yarn setup
```

E então execute inicie o sistema
```bash
$ yarn dev
```

pronto agora o sistema está rodando na sua maquina.
