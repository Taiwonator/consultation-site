# Consultation Mini Site

## Setup
1) Clone this repo 
2) Update version of node to `18.17.0`
3) Run `npm` followed by `npm run dev`
4) Open `localhost:3000` :)

## Tradeoffs
- As the form runs client side, being dependant on the AppContext, it highlights a small delay the TTI (Time to Interactivity). An alternative to this could be to serve the initial state (questions) from the server, however this may lead to the user clicking an uninteractive button which may cause fustration and doesn't really increase TTI.

- Aria properties have not been used to increase accessibility

- The AppContext (could be named ConsultationContext in a wider application) is very flexible, however arguably may become a behemoth of a controller if not maintained carefully. 

- There is no testing


## Notes
- Was new to using NextJs with the app directory so took a little time to understand its slight differences
