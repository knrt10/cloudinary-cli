# cloudinary-cli
Upload images to **cloudinary.com** using your command line.

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
    upload|u [options] <file>                 Upload file(s)
    list|s [options]                          Search files and list them
    rename|r <public_id_old> <public_id_new>  Remane your public_id
    delete|d [options] <public_id>            Delete your file(s)
```    

Run `node index <command> -h` to see particular commands usage

# How to upload

**Single File**
- `node index u <path to file>`

**Multiple files**
- `node index u -a <path to file1> <path to file2> <path to file3> ...`

# How to fetch

**Help command**
- `node index list -h`

You will get following output

```
Options:

    -a, --all            get all files
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

# How to update fileName

`node index r <old public_id> <new public_id>`  

# Delete file

**Single File**
- `node index d <public_id>`

**Multiple files**
- `node index d -a <public_id1> <public_id3> <public_id3> ...`
