# indesign-scripts: Toolset of InDesign workflow optimizations
![GitHub Repo stars](https://img.shields.io/github/stars/vladysolonyi/indesign-scripts?style=social)
🥲

This collection of scripts is made using **Basil.js** library for various scenarios. Its main goal is improving and simplifying your InDesign routine. From detail typography to generative graphics — you can find everything. *I hope...*

## 🛠️ List of Tools

- **[align-type.js](/align-type.js)** *Removes the red spacing inside of all text text boxes*
  
  <img width="400" src="./example_images/align-type.png" alt="red spacing inside of a text box">
  
- **Coming soon...**

## 📜 Requirements
  - [Basil.js (Dev)](https://github.com/basiljs/basil.js/tree/develop)
  - Adobe InDesign

## ⚙️ Installation Guide

Since you want to get those scripts running ASAP, follow these steps:

1. At first let's install the **Basil.js** library. *(The instructions can be found [here](https://basiljs2.netlify.app/tutorials/01-getting-started/))*

Run this Terminal/Console command to link the scripts to the InDesign:
  
**OSX:**
```
ln -s basiljs_PATH Scripts_Panel_PATH
```
**WIN:**
```
mklink /d Scripts_Panel_PATH basiljs_PATH
```

Change `basiljs_PATH` to the path of your basil.js directory (Somewhere here `~/Documents/basiljs`) and `Scripts_Panel_PATH` to the path of your InDesign scripts directory by opening the **Window>Utilities>Scripts** in InDesign, right-clicking the User folder, opening it in finder/explorer.

2. Download the scripts by clicking **CODE>Download ZIP** at the top of this page ☝️ 

3. Paste the scripts into the user folder your **basil.js** directory.

4. Open the Scripts panel in InDesign. In the **User** folder you should see your linked **basil.js** directory.

5. To run the scripts just double-click the one you want to execute.
