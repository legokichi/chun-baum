install
====
ubuntu
```bash
$ sudo apt-get update
$ sudo apt-get install build-essential automake autoconf libtool
$ sudo apt-get install python-dev
$ sudo apt-get install libxml++2.6-dev
$ sudo apt-get install swig
$ cd ghmm
$ sh autogen.sh
$ sudo ./configure
$ sudo make
$ sudo make install
$ sudo ldconfig
```
see http://ghmm.org/

usage
=====
```bash
$ node createObservedData.js
$ python baum.py
```

ref
=====

- http://ghmm.org/
- http://d.hatena.ne.jp/saket/20110927/1317072482
