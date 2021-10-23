Thank you for taking on this activity to demonstrate your knowledge of React. What we are primarily looking for in your submission will be functionality and code cleanliness. However, creating a well-presented application experience will be noticed and appreciated. You may use any approach, packages, patterns, CSS libraries that you prefer to augment or extend the capabilities of the main framework that you are using. It is entirely valid to use an off-the-shelf CLI interface to generate your project. Use whichever tools and techniques you prefer to help you to achieve the task as cleanly and quickly as possible.

For this assignment, we will use the JSON placeholder API, found here: https://jsonplaceholder.typicode.com/. This service provides a freely available endpoint that we can use to prototype applications. Data in your application should be dynamically retrieved from this endpoint. The API supports typical RESTful routing and methods. It will also give realistic responses to these request types. However, because it is a publicly available shared resource, it will not persist your changes. For purposes of this exercise, it is acceptable to update the UI optimistically based upon any responses that you receive. The routes that are of interest to us in this exercise will be the `posts` and `comments`.

Now for the task: Using the publicly available JSON placeholder API, create an application using the front end framework that lists post entities with a title. When a user taps on one of the posts in the list, the app should navigate to a detail page that displays the title at the top of the screen as well as the body content of the post. This post detail screen should have the ability to navigate back to the posts list view. Below the body content section of the post detail screen, display all of the comments that are associated with that post. For each comment, show the body, name, and email address. 

To recap, we are looking for 2 screens that are wired up to the API: 

- a `posts` list view with a title that navigates to the detail view

- a `post` detail view with title, body, and a list of related comments at the bottom

Optional Bonus Activities: 

- Unit tests for core application features 

- The ability to look up all posts by an author 

- A search filter to filter posts on the main screen 

- A comment field for users to submit a comment (may submit a POST to API and update the UI, but will not persist on API)
