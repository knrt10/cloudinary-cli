# cloudinary-cli (WIP)
Upload images to **cloudinary.com** using your command line.

# To-Do

- [x] Add multiple file upload feature
- [x] Add fetch images feature
- [x] Add updating feature
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

**Output**

```
Usage: index [options] [command]

  Options:


    -h, --help                                output usage information

  Commands:

    env|e                                     Set your env file
    upload|u [options] <file>                 Upload file
    list|s [options]                          Search files and list them
    rename|r <public_id_old> <public_id_new>  Remane your public_id
```    

Run `node index <command> -h` to see particular commands usage

# How to upload

`node index u <path to file>`

To upload multiple files

`node index u -a <path to file1> <path to file2> ...`

# How to fetch

`node index list -h`

You will get following output

```
Options:

    -a, --all            get all file
    -s, --search <file>  Search file by publicID
    -t, --type <tag>     Search by type. <tag> can be <image> or <gif>
    -h, --help           output usage information
```

- To get **all files**
  - `node index list -a`

- If you **know public_id** of file you can **get particular file**
  - `node index list -s public_id`

- You can also fetch by **type of file**
  -  For images `node index list -t image`
  -  For gif `node index list -t gif`

# How to update

`node index r <old public_id> <new public_id>`  
