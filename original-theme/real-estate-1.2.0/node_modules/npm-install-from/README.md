# npm-install-from
Install dependencies from an external package.json into the current directory.

## Usage

### Install
```
npm install lazabogdan/npm-install-from
```

### Run
```
node_modules/.bin/npm-install-from --path some/relative/path/
```
Where **some/relative/path** is a relative path to a directory that contains the package.json you want to install dependencies from.

## Why
I use this module with projects that benefit from multiple task runner workflows, for example projects that can have both gulp AND grunt tasks.

So, instead of adding all of the grunt/gulp workflows dependencies to the project's package.json, I actually keep separate package.json files for each workflow, one for grunt and one for gulp. 

Then, if I'd like to use the gulp workflow, I can simply run `npm-install-from --path path/to/gulp-workflow/directory/` and my colleagues who prefer grunt can use grunt instead of gulp, without having to also install tons of dependencies required by the gulp workflow.