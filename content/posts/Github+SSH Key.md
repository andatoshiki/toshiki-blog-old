---
title: (Github) Setting up SSH key on GitHub
date: 2021-09-07T10:22:23+08:00
lastmod: 2021-09-08T02:16:43+08:00
author: 安田俊樹
cover: /post4/cover.png
avatar: /avatar/Avatar3.jpg
images:
  - /post4/cover.png
categories:
  - Tutorial
tags:
  - Tutorial
  - Github
  - SSH Key
  - Bash
  - Git
mathjax: false
fancybox: true
---
*By setting up SSH keys on github, it svaes the time on coding from typing in usernames and passwords for pushing projects to repos! 😎*
<!--more-->

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1300692790&auto=0&height=66"></iframe>

## Introduction
Have you every had the experience of typing in usernames and passwords every time when you tries to push your project to a repo on GitHub it might seems satisfying for people who loves to type and reinforce their memories on usernames and passwords, but I do prefer the easier way, by setting up SSH keys, you only have to configure once, then no usernames and passwords needed.

According to [Github Docs](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/about-ssh) on SSH keys, by using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username and personal access token at each visit.

Let's check out both addresses below,

```bash
https://github.com/<username>/<repo-name>.git
git@github.com:<username>/<repo-name>.git
```
The two URLs display a same project on Github, but the former URL uses `https` url to open a valid URL, but users have to type in usernames and password for authentication every time they submit their git to Github, so is there any simple ways that we configure usernames and passwords once, then no verification required each time when we want to push or project to Github?

**The answer is yes, there definitely is!**, here is when the second address shows up, which is the **SSH URL**, if you want to resolve the problem above, then you are on the right article! :)

> The purpose of GitHub allows its users to configures SSH Key is to facilitate the process on submitting through git without tedious verification operations, it simplifies the procedures.

## Procedures
### 1. Set up git's username and email address
If this is the first time you use SSH keys or haven't configured username and email before, you have to operate the command below in git bash.

Open git bash, copy the command below one at a time, and press enter, **please make sure you substitute `<your-username>` and `<your-email-address>` to your actual ones.**
```bash
git config --global user.name "<your-username>"
git config --global user.email "<your-email-address>"
```
![](/post4/img1.png)
![](/post4/img2.png)

Now your username and email address had been initialized. Let's proceed to the next step.

### 2. Examine whether SSH Key exsists
Type `cd ~/.ssh` for directing into the `.ssh` folder, then type either `ls` or `ll` to check whether there are both `id_rsa` and `id_rsa.pub` files inside the folder, if there are, which means SSH key has been generated in your device.
```bash
cd ~/.ssh
ls
# or
ll
# Check whether there are id_rsa and id_rsa.pub file, if exsists, which means SSH key has been generated.
``` 
![](/post4/img7.png)

If there is none, git bash shows this, don't worry,

![](/post4/img3.png)

### 3. Gnerate SSH Key
then we have to generate a SSH key, copy the code below, remember to substitute `<your-email-address>` to the email you chose to use for initializing git's usernames and email in the first step.
```bash
ssh-keygen -t rsa -C "<your-email-address>"
```
If this is the first time you configure SSH keys, git bash would ask you to choose a file directory to keep your key, just press enter, default directory is accepted.

![](/post4/img4.png)

Then a new command will show up for you to set up a passphrase for SSH key, you can either choose to set one or don't. If don't just press `enter`, if yes, type in your passphrase, git bash will ask you to type in twice to confirm your passphrase, make sure you type the same one. (Oops, 😣 I made a mistake on mine.)

![](/post4/img5.png)

After you set up your passphrase, press enter, SSH key will be automatically generated within seconds,

![](/post4/img6.png)

### 4. Examine whether SSH Key exsists
Now repeat step two again to check whether SSH Key files exist or no,
```bash
cd ~/.ssh
ls
# or
ll
# Check whether there are id_rsa and id_rsa.pub file, if exsists, which means SSH key has been generated.
``` 
![](/post4/img7.png)

If both files exsist like the image shown above, then you are ready to proceed to the next step

### 5. Obtain SSH Key
Type in the following command to open file `id_rsa.pub`, the file should starts with `ssh-rsa` with a combination of letters and numbers behinds.
```bash
cat id_rsa.pub
# Open id_rsa.pub file
```
![](/post4/img8.png)

Then select the content of `id_rsa.pub`, right click your mouse, click on `copy`.

### 6. Apply SSH Key on GitHub
Log in to your github account, click on your avatar at the top right corner, a dropdown menu should appear, and click on `Settings`.

![](/post4/img9.png)

Select `SSH and GPG keys`, 

![](/post4/img10.png)

Click on `New SSH Keys`

![](/post4/img11.png)

Set up your title (could be a random one, there is no request in here), then paste the file content from `id_rsa.pub` in step 5 to the `key` field below. :warning: **Do not delete any lines or spaces in the SSH Key content!**.

![](/post4/img12.png)

Until now, you just setted up a SSH key! You made it! 😁

![](/post4/img13.png)

### 7. Test the SSH connection
The very last step is to test the connection of your SSH key to GitHub, type in the following command,
```bash
ssh -T git@github.com
```
![](/post4/img14.png)

The command will as you whether you want to proceed or not, type in `yes` to continue,

![](/post4/img15.png)

Command will also ask you to type in the passphrase you setted earlier, if you have no passphrase, just press enter.

![](/post4/img16.png)

If the output is alike to the command I **underlined with yellow**, then your are good to go!, from now on, no username-password verification required for submitting git! 😄

**Wish you have a good day!😊**