# Life Balancer

#### Javascript / Angular / Firebase team project for Epicodus

_Published_ **Apr 11 2019**<br>
_Authors_ **Gary Bermudez, Chris Breaux, Nathan Nielson, Tracy Reith, Doris Warren **

1. [Description](#description)
1. [Learning Objective](#learning-objective)
1. [Target Audience](#target-audience)
1. [User Stories](#user-stories)
1. [Product Requirements](#product-requirements)
1.[Non-technical Requirements](#non-technical-requirements)
1. [Stretch Goals](#stretch-goals)
1. [Development Plan](#development-plan)
1. [Whiteboard](#whiteboard)
1. [Installation](#installation)
1. [Known Bugs](#known-bugs)
1. [Technologies Used](#technologies-used)
1. [License](#license)

### Description
Life Balancer is a self-assessment tool that people can use to track their personal level of satisfaction in several areas of their lives, over time. For each category, the user will indicate their level of satisfaction, and the system will display this in a single, attractive graphic. The user can update their satisfaction level at any point in time. The system will generate a new graphic, letting the user compare how satisfaction in different areas of their life has changed over time. The system will offer suggestions and links to articles for improving overall satisfaction in areas where satisfaction is moderate or low.

### Learning Objectives
* Working as a team
* Setting up and deploying a non-SQL database (Firebase)
* Building an Angular project

### Target Audience
* Persons interested in self-improvement

### User Stories
**As a** user,<br>
**I want** to create an account,<br>
**So that** the system will store my entries,
_AND_ I can retrieve my entries,
_NOT_ someone else’s entries.


**As a** user,<br>
**I want** to indicate my relative satisfaction for each category,<br>
**So that** it can be displayed in comparison to the other categories.

**As a** user,<br>
**I want** to review my satisfaction indications,<br>
**So that** I can change them before final submission.

**As a** user,<br>
**I want** to see graphs for all previous data I have entered,<br>
**So that** I can see how my satisfaction level in each category and overall has changed over time.

**As a** user,<br>
**I want** suggestions on how to improve my satisfaction in a category,<br>
**So that** I can apply those suggestions to increase my level of satisfaction in that category.

### Product Requirements
* The user will be able to create an account
* The user should be able to indicate and submit satisfaction level for each category
* The system should include questions in each category to help people assess their satisfaction level
* The system will require the user to provide a satisfaction level for each category in order to save the user’s data
* The system will allow the user to make changes in each category before final submission
* The user can create a new graph
* The user can retrieve and compare all previous graphs
* The user will not be able to make changes to saved data


### Non-technical Requirements
* The application should be self-apparent how to use
* Mobile first visual and usability design


#### Assumptions
* We will code for mobile first, but deploy for a desktop application

### Stretch Goals
* Animation effects
* Personal journal/notes
* System will offer recommendations when self-reported satisfaction is below specified levels
* More categories available
* User can choose a subset of categories to track
* Single category graph to show change over time
* Graph showing average in each category

### Development Plan
1. Solidify MVP
1. Set up Github repository
1. Build component tree
1. Research technologies we don’t already know, e.g. Angular Material, Auth/Auth
1. Collect content
1. Design app layout - mobile
1. Test wireframes with fellow students
1. Revise design
1. Create database
1. Build components
1. Connect to database

### Whiteboard
![App Design](./img/app-plan-whiteboard.png?raw=true "App Plan Whiteboardt")

### Installation
https://github.com/cjbreaux/life-balancer.git

### Known Bugs
* None identified

### Technologies Used
* Angular
* Firebase
* Javascript with jQuery
* HTML styled with Sass

### License
[MIT](./LICENSE.txt)

Copyright (c) 2019 Gary Bermudez, Chris Breaux, Nathan Nielson, Tracy Reith, Doris Warren
