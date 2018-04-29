<p align="center">
<img src="https://user-images.githubusercontent.com/24803604/39341456-f14ba3d2-49f0-11e8-846e-59b216100574.png" />
</p>

Upload images to **cloudinary.com** using your command line.

# Preview

<img src = "https://user-images.githubusercontent.com/24803604/39407712-f0c2cbcc-4be7-11e8-93ee-9c417d62bf5a.gif"/>

# Installation

**NPM**

`npm i --global cloudinary-cli-tool`

**Set env file**

`cloudTool env`

This will ask for your cloudinary configuration which you can get from [cloudinary console](https://cloudinary.com/console/)

# Usage

Run `cloudTool -h` to see commands you can use

**Output**

```
Usage: cloudTool [options] [command]

 Options:


   -h, --help                                output usage information

 Commands:

   env|e                                     Set your env file
   upload|u [options] <file>                 Upload file(s)
   list|s [options]                          Search files and list them
   rename|r <public_id_old> <public_id_new>  Remane your public_id
   delete|d [options] <public_id>            Delete your file(s)
```    

Run `cloudTool <command> -h` to see particular commands usage

# How to upload

**Single File**
- `cloudTool u <path to file>`

**Multiple files**
- `cloudTool u -a <path to file1> <path to file2> <path to file3> ...`

# How to fetch

**Help command**
- `cloudTool list -h`

You will get following output

```
Options:

   -a, --all            get all files
   -s, --search <file>  Search file by publicID
   -t, --type <tag>     Search by type. <tag> can be <image> or <gif>
   -h, --help           output usage information
```

 To get **all files**
 - `cloudTool list -a`

 If you **know public_id** of file you can **get particular file**
 - `cloudTool list -s public_id`

 You can also fetch by **type of file**
 -  For images `cloudTool list -t image`
 -  For gif `cloudTool list -t gif`

# How to update fileName

`cloudTool r <old public_id> <new public_id>`  

# Delete file

**Single File**
- `cloudTool d <public_id>`

**Multiple files**
- `cloudTool d -a <public_id1> <public_id3> <public_id3> ...`
