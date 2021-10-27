How to install and run the project
====

## 1. Install nvm:

You can use the install script using cURL:

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

or Wget:

`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

The script clones the nvm repository to _~/.nvm_ and adds the source line to your profile (_~/.bash_profile_, _~/.zshrc_, _~/.profile_, or _~/.bashrc_).

Then, restart the terminal.

You can verify it is installed with:

`command -v nvm`

## 2. Install node.js and npm:

`nvm install --lts --latest-npm`

## 3. Install dependencies of the proyect:

`npm clean-install`

They are listed in _MyWeather/package.json_.

## 4. Run the proyect:

`npm start`
