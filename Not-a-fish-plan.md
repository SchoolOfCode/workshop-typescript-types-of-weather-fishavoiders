# Stage 1 🐟

create a basic app 🐟
    - install npm - npm init🐟
    - install vite🐟 npm create vite@latest
        - cd vite-project🐟
        - npm install🐟
        - npm run dev🐟
    - install react🐟
    - check to make sure it works🐟

## Upon first pull 
- nav to vite dir
- `npm install`
- `npm run dev`
- check it works

# Stage 2
## component tree
App
├── Header 🐟
├── Main
│   ├── Form
│   │   ├── Textbox
│   │   └── Button
│   ├── Fish weather content
│   │   ├── dt_txt
│   │   ├── weather.main
│   │   ├── weather.description
│   │   └── main.sea_level
└── Footer

*know, manage, allow, show*

App - allow: state storage.  show: Header, Main, Footer
Header - allow: potential navigation changes
Main - know: formData props, apiData props. 

Main - 

Textbox - user input, 

## investigate API in postman

## different APi as a stretch (fish/oceans?)

## more than one forecast as a stretch

## selecting city as a stretch

## do some coding??? probably in App.tsx
- remove boilerplate stuff
- use the API
- create components
- create state
    - Form 
- on form change handler
- handle for submit
- fetch request lat and long
- fetch request weather


Form Plan
    - user input field
        take string input from user
    - submit button
