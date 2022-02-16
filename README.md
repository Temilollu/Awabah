To run the project locally do the following :

- Clone the project
- run npm install
- run npm start

Answers to Questions

- How do you document your frontend code ?
  I document my frontend code by first starting with the tools used (framework, library, packages), links to their documentation and how to set up and run the code. I also talk about folder structure

- What are your thoughts on testing for the front-end?
  Testing is very important as it can help identify bugs before pushing to production and it makes it convenient to change or add new features to the site knowing that if anything would be broken as a result of the changes, test written would catch it hence preventing it from pushing bugs and breaking existing features
- What Design Patterns have you used in your frontend projects?
  The major one i've used is container components and presentational components There's also the use of custom hooks and reusable components

- What do you think about Typescript on the front-end?
  Javascript is dynamically typed, meaning that the developer doesn't have to set the data types, so a variable can hold a string , number or even a function at run time, this could have harmful effects as the developer could unintetionally change the data type, makes the programme much more predictable and bugs are caught faster, it also describes the shape of an object hence providing autocompletion and better documentation
- What are the most important performance issues in React web applications?
  Rerenders if not handled properly can lead to slowing down of the app
- How did you decide on the technical and architectural choices used as part of your solution?
  Based on the nature of the task, we needed some form of steps where users can navigate between steps without loosing data and having the need to display the data , i conditionally rendered differenct components based on the stage the user is, so each stage is a component and they all share the same state from the parent thus, when user navigates betweem steps, since the parent component doesn't unmount, its state is preserved across stages,

- Are there any improvements you could make to your submission?
  Yes, the UI isnt so great, if i had one, it'd be a lot better
