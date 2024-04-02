# Charlie's Personal Website.

A static website built from Markdown into HTML via [11ty](https://www.11ty.dev/).


## tl;dr installation

It's a node app. Clone it, install the dependencies, run the site builder.

```bash
npm i && npm run build
```

## Grown-up Installation

Clone this repo and change to the working directory.

```bash
git clone git@github.com:whalecoiner/site.git
cd site
```

Install [Node Version Manager](https://github.com/nvm-sh/nvm). (I'm on a Mac. Bite me.)

```bash
brew install nvm
```

Add the following to `.zshrc` to allow nvm to work.

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

Install the required version of node.

```bash
nvm install
```

Install node application dependencies via npm.

```bash
npm install
```

Build the site.

```bash
npm run build
```

