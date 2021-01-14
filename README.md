# CCPS-1411NB/20

## Table of contents
- Prerequisites
- Installation
- Updating
- Deployment
- Tests
- License
- Learn more

## Prerequisites
1. Node, npm, time, effort, developer, his eyes and straight hands.

## Installation
1. Fork this project
2. Navigate to the directory
3. `cd src/app/util/ && cp config.sample.js config.js`
4. Fill copied config with your own firebase credentials
3. Run `npm install`

## Updating
0. `git remote add upstream git@github.com:winniepukki/trinat.git`
1. `git fetch upstream`
2. `git merge upstream/[corresponding_branch]`
3. `git checkout -b 'TRS–task-short-description'`
4. Ensure there is no ESLint warnings before PR
5. Send your PR to the `master`. Await for approval 

## Deployment
1. `git add .`
2. `git commit -m 'your-message'`
3. `git fetch upstream` (any changes -> merge)
4. `npm install`
5. `git push`

[Ensure your pipeline finished with the exit code 0](#)

## Tests
- [ESLint Check CI](https://github.com/winniepukki/trinat/actions) - a static code analysis tool for identifying problematic patterns found in JavaScript code

## Contribution

We'd love to have your helping hand on `trinat`! Thanks to these **awesome** :heart: people for contribution!

<a href="https://github.com/winniepukki/trinat/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=/winniepukki/trinat" />
</a>

## License
This project is under CreamCamp © All Rights Reserved License

## Learn More
To learn React, check out the [React documentation](https://reactjs.org/).
