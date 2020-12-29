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
1. Docker
2. Node, npm, time, effort, developer, his eyes and straight hands.

## Installation
1. Clone the project
2. Navigate to the directory
3. Run `docker-compose up -d --build --remove-orphans`

Use `docker exec -it trinat-app sh` to access the container

## Updating
1. `git pull`
2. `npm install`
3. `git checkout -b 'TRS–task-short-description'`
4. Merge into master upon finish & remove your branch

## Deployment
1. `git add .`
2. `git commit -m 'your-message'`
3. `git pull`
4. `npm install`
5. `git push`

[Ensure your pipeline finished with the exit code 0](https://gitlab.com/winniepukki/trinat/-/pipelines)

## Tests
Not implemented

## License
This project is under CreamCamp © All Rights Reserved License

## Learn More
To learn React, check out the [React documentation](https://reactjs.org/).
