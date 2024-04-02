# whalecoiner.com

My personal website.

## Installation

Ensure nvm is present.

```bash
brew install nvm
```

Add the following to `.zshrc`.
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

Clone this repo and change to the working directory.

```bash
git clone git@github.com:whalecoiner/site.git
cd site
```

Install Node Version Manager.

```bash
nvm install
```

Install node dependencies.

```bash
npm install
```

Build the site.

```bash
npm run build
```

