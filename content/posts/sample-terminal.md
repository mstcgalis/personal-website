---
title: Sampling music in the MacOS terminal
description: YouTube
date: 2024-03-08
tags:
  - music
  - tools
---

```
function sample() {
    yt-dlp -f 'ba/b' --default-search "ytsearch" --extract-audio --audio-format wav --output '~/Desktop/music/songs/%(title)s.%(ext)s' $1
}

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
