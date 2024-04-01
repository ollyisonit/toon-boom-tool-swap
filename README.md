# Toon Boom Tool-Swap

A plugin that adds two groups of hotkeys to Toon Boom Harmony: one to easily swap between the `brush` and `pencil` tools, and one to activate the `cutter` and `select` tools without affecting the `alt` key's bindings.

## Features

### Brush / Pencil Unification
Most other painting applications don't have the separation between a `brush` tool and a `pencil` tool in the same way the Harmony does, which can make the application difficult to work with if your hotkey muscle memory is accustomed to only having one key to activate your drawing tool. This plugin adds a new hotkey, `activateDrawingTool`, that will activate either the brush or pencil tool depending on which one you are currently using. You can then use the `switchDrawingTool` hotkey to switch your currently active tool from `brush` to `pencil` or vice-versa.

### Freeing The Alt Key
Currently Harmony is set up to have the `alt` key temporarily switch to the `cutter` and `select` tools, which can lead to conflicts if you want to use `alt + <some key>` as a hotkey for something else. This plugin adds two hotkeys, `switchToCutter` and `switchToSelect`, that allow you to activate the `cutter` and `select` tools without affecting the `alt` key's bindings.


## Installation
First download the latest version [here](https://github.com/ollyisonit/toonboom-tool-swap/releases/latest). Create a folder called `packages` in your user scripts directory if it doesn't already exist, then copy the `TBToolSwap` folder into it. You can find the new hotkeys in the hotkeys menu under the section `ollyisonit-TBToolSwap`.