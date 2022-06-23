# echo
## Minimal TCP/IP Echo Server

Intended to be run from the command line to perform basic connectivity tests. It will
listen for TCP connections, receive data streams, and echo what it hears. Activity
will be logged to standard output.

## system setup
1. `dnf install git nodejs`

## install echo
1. `mkdir echo`
1. `cd echo`
1. `git init`
1. `git remote add origin https://github.com/jdabbs003-kore/echo.git`
1. `git pull origin main`

## run echo
1. `cd echo`
1. `node es.js` (log to terminal window)
1. `node es.js > log.txt` (log to text file)
