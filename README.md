# echo
Minimal IP Echo Server

Intended to be run from the command line to perform basic connectivity tests. It will listen for TCP
connections, receive a data stream, and repeat the stream in chunks, each prefixed with 6 bytes "echo: ".

# system setup
From command line, as root:
1.`dnf install git nodejs`

# install echo
1. `mkdir echoserver`
1. `cd echoserver`
1. `git init`
1. `git remote add origin https://github.com/jdabbs003-kore/echo.git`
1. `git pull origin master`

# update echo
1. `cd echoserver`
1. `git pull origin master`
