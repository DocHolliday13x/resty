# LAB - Class 26, 27, 28, 29

## Project: RESTy

### Author: Ryan Eastman

### Problem Domain

- **Lab 26 - RESTy:** Create a RESTy application which will peform RESTful API calls to remote APIs. Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner.

- **Lab 27 - RESTy:** Today, we begin the second phase of a 4-Phase build of the RESTy application, written in React. In this second phase, we will be connecting RESTy to live APIs, fetching and displaying remote data by retrieving user input and managing state. We we will be receiving user input in preparation of connecting to live APIs, using the `useState()` hook in our functional components. In order to properly manage state with the useState hook, we will now convert `<App />` to a functional component. The following user stories detail the major functionality for this phase of the project:
  - As a user, I want to enter the REST Method and URL to an API.
  - As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format.
The application flow should be as follows:
  - User enters an API URL
  - Chooses a REST Method
  - Clicks the “Go” button
  - Application fetches data from URL/API
  - Displays the response headers and results separately
  - Both headers and results should be "pretty printed" JSON

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/DocHolliday13x/resty/actions/)
<!-- - [back-end server url](http://xyz.com) (when applicable)
- [front-end application](http://xyz.com) (when applicable) -->

### Collaborators

- Ryan Gallaway
- Reece Renninger
- Nick Mullaney

### Setup

- **Lab 26 - RESTy Phase 1**

1. Create a react app named resty w/ `npx create-react-app resty`
2. Create a new repository on GitHub for this project
3. Push your initial commit to GitHub
4. Set up your folder structure
5. Create a `README.md` file with an overview of your project and notes about your lab
6. Create a pull request from the resty branch to your main branch
7. In Canvas, submit a link to your pull request
8. On GitHub, submit a link to your deployed application to the main branch of your repository
9. After initial setup is complete and proof of life is established, begin work on the lab requirements.
10. Convert all child components of `<App />` from classes to functions.
11. The `<App />` component serves as the container for all sub-components of this application.
12. Leave this component as a Class.
13. Make sure all base styles for `<App />` are included in a .scss imported within the App.jsx file.
14. Ensure that the `<Header />`, `<Footer />`, `<Results />` and `<Form />` components are imported using ES6 import syntax.
15. Use .scss files to style each component.
16. Each of the components use their own .scss file for styling.
17. Core application functionality should remain unchanged.
18. The `<Form />` component should:
19. Call a function `onSubmit()` that updates the `<App />` component via a function sent down as a prop so that the app can process the form values.
20. The `<Results />` component should show mock API results.

- **Lab 27 - RESTy Phase 2**

1. Continue working in the same repository from the previous lab.
2. Extend React Application so that functional components are able to merge their own state variables using the `useState()` hook.
3. Refactor any components using `this.setState()` to use `useState()` react API hook.
4. Refactor the Form components to implement user input from form elements, instead of hard coded string values.
5. Suggested Component Hierarchy and Application Architecture:

index.js - Entry Point.
`<App />` - Container.
Holds application state: The Request (from the form) and the Response (from the API).
Hook that can update state.
Renders 2 Child Components.
`<Form />`
Expects a function to be sent to it as a prop.
Renders a URL entry form.
A selection of REST methods to choose from (“get” should be the default).
The active selection should be displayed/styled differently than the others.
Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request.
On submit:
Send the Form entries back to the `<App />` using the method sent down in props.
Form will run the API request.
Toggle the “loading” status before and after the request.
`<Results />`
Conditionally renders “Loading” or the data depending on the status of the request.
Renders the data as “pretty” JSON.

#### `.env` requirements (where applicable)

For now I have none and do not require one.

#### How to initialize/run your application (where applicable)

- Initialize applicaton with `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
- GET : `/hello` - specific route to hit

#### Tests

- How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc

- **Lab 26 Tests:** Tests are not required for this lab, but are a stretch goal.

- **Lab 27 Tests:** Tests are required for this lab.

1. Utilize the React Testing Library framework installed with CRA.
   - Test `<Form />` component:
   - Test that the form renders properly.
   - Test that the form calls the handler function prop on submit.
   - Test that the form state is updated properly when user input is given.
   - Test `<Results />` component:
   - Test that the results render properly.
   - Test that the results state is updated after the API has been called.

2. Assert that upon form submission the resulting data will be rendered in the output area.

3. Install the GitHub action that will auto-run your tests on all check-ins.

4. Stretch Goal: Connect the App component to an API and make an actual call (focusing on GET) to the URL requested in the form.

#### UML

- ![Lab 26 Whiteboard](./resty/public/lab26Whiteboard.png)
- ![Lab 27 Whiteboard](./resty/public/lab27Whiteboard.png)
