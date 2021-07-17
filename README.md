# WordCamp-Schedule-Viewer
React engineer - assignment

***---WordCamp Schedule viewer that displays past/ incoming events in calendar view---***

packages used for calendar view:
'react-awesome-calendar'
'react-calendar'

***---how to run---***

run the project : npm run start   //port=8080

run test-cases : npm run test

***---features---***

***Header*** includes titel and profile (in this case my profile name- ***Nancy Kapadia*** )
also includes the ability to chnage the theme of a website into three color-schemas : standard, light and dark. (via drop-down arrow besides profile) 

***sidebar*** includes the miniature version of calendar for the current-month.

***Main calendar*** contains the events comming from the API-https://central.wordcamp.org/wp-json/wp/v2/wordCamps 

event start dates are highlighted as "green"
events end dates are highlighted as "red"

***all events are clickable*** which open ups a modal that includes details about the event and a ***map view.*** (if event location exists)








