# cloudinary-cli (WIP)
Upload images to **cloudinary.com** using your command line.

# To-Do

- [x] Add multiple file upload feature
- [ ] Add fetch images feature
- [ ] Add delete file feature
- [ ] Add more tests

# Preview

<img src = "http://res.cloudinary.com/dsyvg5xwi/image/upload/v1524577572/zhezvhewzdfmj0l0akzy.gif"/>

# Installation

**Install the repository**

`git clone https://github.com/knrt10/cloudinary-cli.git`

**cd to project folder**

`cd cloudinaryCLI`

**Install modules**

`npm install`

**Set env file**

`npm run env`

This will ask for your cloudinary configuration which you can get from [cloudinary console](https://cloudinary.com/console/)

# Usage

Run `npm start` to see commands you can use
Run `node index <command> -h` to see its usage

# How to upload

`node index u <path to file>`

To upload multiple files

`node index u -a <path to file1> <path to file2> ...`
