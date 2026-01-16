# xai4cv.github.io

This website was created using [create-react-app](https://github.com/facebook/create-react-app). To run it follow the instructions below:

1. Install node's latest version (preferably through [nvm](https://github.com/nvm-sh/nvm)).
2. Run this `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"` to load nvm.
3. Install yarn through `npm install -g yarn`
4. Clone the repository and run `yarn install` in it.
5. Ensure that you are on the `source` branch of the repository and all your code changes happen on the `source` branch.
6. Run `yarn start` to test the website locally. If `yarn start` fails with error `Error: digital envelope routines::unsupported` try running `export NODE_OPTIONS=--openssl-legacy-provider` before `yarn start`.
7. For deployment on github run `yarn deploy`. Note that this repository's default code branch is `source` and you should run the deploy command when you are on the `source` branch. The deployment command will make changes to the `master` branch. Note that you never have to manually make any changes to the `master` branch, yarn will make all the changes for you.
