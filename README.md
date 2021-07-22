# WordCamp-Schedule-Viewer
React engineer - assignment

## Technologies
```python
# ReactJs without create-react-app
```
## Installation
Use the package manager [npm] to install packages.

```bash
npm install
```

## Usage | Run
```python
# run the project
> npm run start

# run the test case
run test-cases : npm run test
```

## Local Access URL
```bash
http://localhost:8080/
```

## Hosting Platform
Firebase

## Hosting URL
```bash
https://wordcamp-schedule-f2cba.web.app/
```

## Features & Functionalities

WordCamp Schedule viewer that displays past/ incoming events in calendar view

```python
packages used for calendar view:
'react-awesome-calendar'
'react-calendar'
```

***Header*** includes titel and profile (in this case my profile name- ***Nancy Kapadia*** )
also includes the ability to chnage the theme of a website into three color-schemas : standard, light and dark. (via drop-down arrow besides profile) 

***sidebar*** includes the miniature version of calendar for the current-month.

***Main calendar*** contains the events comming from the API-https://central.wordcamp.org/wp-json/wp/v2/wordCamps 

event start dates are highlighted as "green"
events end dates are highlighted as "red"

***all events are clickable*** which open ups a modal that includes details about the event and a ***map view.*** (if event location exists)








