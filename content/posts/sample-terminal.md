---
title: Sampling music in the MacOS terminal
description: YouTube
date: 2024-03-08
tags:
  - music
  - tools
---

Hello internet traveler! Do you want to download music from YouTube, but hate using shady web converters? I sure do. Here is a cleaner and faster way to download and sample all your favourite music using open-source software.

We'are gonna be using a Python package called **yt-dlp** (have a look at it's [GitHub](https://github.com/yt-dlp/yt-dlp)). MacOS already comes with Python, so the installation process should be straightforward. Try entering `pip install yt-dlp` into your Terminal, or reference the [guide](https://github.com/yt-dlp/yt-dlp#installation) for detailed instructions.

To set up an easy and replicable way of using **yt-dlp**, we have to modify our shell configuration file. For me (and most current version MacOS users), this is `~/.zshrc`. you can find it using the `Shift + Command + G` shortcut in Finder and typing in the afformentioned filepath (`~/.zshrc`). Tt is just a simple text file, so editing it via TextExit works perfect.

Just add this silly little code (a shell function definition) to your shell configuration file and you should be set. If you want to download to a different folder, just modify the `--output` parameter (in my case it is `~/Music`, where `~` is the user home directory).

```shell
function sample() {
    yt-dlp -f 'ba/b' --default-search "ytsearch" --extract-audio --audio-format wav --output '~/Music/%(title)s.%(ext)s' $1
}
```

Now, when you open a new Terminal, you can download audio from YouTube by simply entering this command:

```shell
sample "your-youtube-link"
```

The .wav file should be at your specified `--output` directory.

As a bonus, you can also enter keywords inside the quotation marks to search YouTube instead od providing a direct link.

Have fun sampling!
