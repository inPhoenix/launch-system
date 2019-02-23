# Launch System

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Live Demo: [https://launch-system.herokuapp.com](https://launch-system.herokuapp.com)

<img title="logo" src="client/public/assets/images/preview.jpg" width="60%" alt='demo'>

### Run

In the project directory, install the node modules in server and client:

```shell
yarn
yarn --cwd client
```

Then run the concurrently script to start both server and client:
```shell
yarn run dev
```

A browser will be open at http://localhost:3000

### The stack

- [x] NodeJs
- [x] ExpressJs
- [x] React Fiber
- [x] Semantic UI
- [x] [LaunchLibrary](https://www.launchlibrary.net)

### Project Structure

```sh
./                  # Node/Express Files
./client            # Client React Js Files
  ⌙ index.js        # Start Point
./client/components # Main Pages
   ⌙ Homepage.js    # Homepage Container   
./client/features   # Molecules/Organisms
./client/sass       # Styles
```  
