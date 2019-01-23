# 4cdl - 4chan Downloader
Command line interface to download images from a thread on 4chan.

```npm i 4cdl -g```

Install the program using the -g global flag so that it can be run from any directory

* mkdir img
* cd img

Create a new directory to store the images if needed.

NOTE: Sometimes the script won't stop after all the files are downloaded. Just CTRL+C to terminate and you'll be fine.

```4cdl https://boards.4channel.org/c/thread/1234567```

In the command line you can input the direct link to the 4chan thread to download.

```4cdl 1234567 c```

You can use the ID instead of the full URL, but make sure you provide the board letter(e.g. c) when doing so.
