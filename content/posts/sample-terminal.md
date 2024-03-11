---
title: Sampling music in the MacOS terminal
description: YouTube
date: 2024-03-08
tags:
  - music
  - tools
---

do you too want music from the internet, specifically the youtubes? i sure do. here is a way listen and enjoy all ur fav locally and forever.

using a Python package called yt-dlp (have a look at it's [GitHub](https://github.com/yt-dlp/yt-dlp)). MacOS already comes with Python, so the installation process should be straightforward. try entering `pip install yt-dlp` into your Terminal, or reference the [guide](https://github.com/yt-dlp/yt-dlp#installation) for detailed instructions.

to set up an easy and replicable way to use `yt-dlp`, we have to modify our shell configuration file. for me (and most current version MacOS users), this is `~/.zshrc`. you can find it using the `Shift + Command + G` shortcut in Finder and typing the afformentioned filepath (`~/.zshrc`). it is just a text file, so editing it via TextExit works perfect.

just add this silly little code (a shell function definition) to your shell configuration file and you should be set. if you want to download to a different folder, just modify the `--output` parameter (in my case it is `~/Music`, where `~` is the user home directory).

```shell
function sample() {
    yt-dlp -f 'ba/b' --default-search "ytsearch" --extract-audio --audio-format wav --output '~/Music/%(title)s.%(ext)s' $1
}
```

now, when you open the Terminal, you can sample from Youtube by simply entering this command:

```shell
sample "your-youtube-link"
```

the file should be found at your specified `--output` directory. have fun making music!
