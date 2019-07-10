# RoboVac
[![Build Status](https://travis-ci.org/acodeguy/robovac.svg?branch=master)](https://travis-ci.org/acodeguy/robovac) [![Maintainability](https://api.codeclimate.com/v1/badges/c5e2613e039d2c82c0ef/maintainability)](https://codeclimate.com/github/acodeguy/robovac/maintainability) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e8be7aaff4e74480b26e3aedb5ee13de)](https://www.codacy.com/app/acodeguy/robovac?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=acodeguy/robovac&amp;utm_campaign=Badge_Grade)

## The Task
Write a program that navigates an imaginary robotic vacuum cleaner around an iminary room.
*  Room will be a grid based on x and y co-ordinates (0,0 is bottom left)
*  Locations of dirt within the room with be defined by x and y co-ordinates
*  The vacuum cleaner will have an initial position (x, y)
*  The vacuum will receive driving instructions based on cardinal directions (north, east, etc) to get around the room

The room will be rectangular and free of obstacles (except for walls). All locations are assumed to be clean unless it is a dirt patch. If the vacuum passes over a patch of dirt, it cleans it up automatically.

If the vacuum hits a wall it has no effect, it just skids in-place.

## Acceptance Criteria
Take in the room dimensions, vacuum start positions, driving directions and dirt patch locations from a text file and output:
*  the final vacuum position
*  the number of patches cleaned-up.

## Input
The program takes its input as a text file, input.txt, which has the following layout:

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```
*  the first line is the room dimensions (space-separated)
*  second line is the vacuum start position
*  subsequent lines contain zero or more dirt patch locations
*  last line are the driving directions (not space-separated)

## Output

The program will output as below

```
1 3
1
```
Where the first line is the ending position of the vacuum, and the last line isthe number of patches cleaned.

## Dependecies
* [Node v10.16.0](https://nodejs.org/)
*  Mocha 6.1.4

## Getting Started
If you alread have Node.js installed, clone the repo to your hard drive, and install theproject dependencies (Mocha, etc):
```bash
git clone: https://github.com/acodeguy/robovac.git

cd robovac

npm install
```

Once all dependencies are installed and you have an input.txt file with valid layout in the root directory, run it like this:
```bash
node robovac.js
```

## Testing
The project was written using Test-Driven Development (TDD) with the Mocha framework.

If you wish to run the tests, run the following command from the root directory:
```bash
mocha
```
or
```bash
npm test
```

In the case of the supplied example file (input.txt), RoboVac outputs the expected

```
1 3
1
```