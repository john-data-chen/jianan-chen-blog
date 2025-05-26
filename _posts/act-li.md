---
title: "Test local Github action tool: act cli"
excerpt: "test github action in local"
coverImage: "/assets/blog/act-li/cover.jpg"
date: "2025-05-26T12:35:07.322Z"
author:
  name: JianAn Chen
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/act-li/cover.jpg"
---

## Test local Github action tool: act cli

Summary: can't use it!

### source code

- [Repo Link](https://github.com/nektos/act)

- [VS-code Extension Link](https://github.com/SanjulaGanepola/github-local-actions)

### Results of testing

- Rather than having to commit/push every time you want to test out the changes you are making to your .github/workflows/ files (or for any changes to embedded GitHub actions), you can use act to run the actions locally.

- [Issue 973](https://github.com/nektos/act/issues/973) has been not fixed for a while


### Try to fix issue 873

I try to fix it but not working

- Delete and re-install Docker image / volumes
- Delete and re-install act cli
- Install the Docker image for M-chip Mac