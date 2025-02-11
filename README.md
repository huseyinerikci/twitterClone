# Twitter Clone Project
This project is a Twitter clone (imitation) application developed using ReactJS, Firebase and TailwindCSS. The application provides a social media platform where users can register, log in, tweet and view other users' tweets. In addition, users can like, delete, edit and add images to their tweets.

## Preview
A preview of my twitter clone project is in the gif below.

![twitterClone](https://github.com/user-attachments/assets/3a27b3d9-c21e-4fd2-9b59-0e4275f97d07)


## Features
### User Registration and Login
* Users can register with gmail or email.
* The forgot my password by e-mail section is active and a password reset link is sent to the user's e-mail address.
* Users who have completed the registration process cannot log in without approving the e-mail they receive for e-mail verification.
### Stream Page
* Users are directed to the stream page after logging in.
* Tweets from other users can be viewed on the stream page.
* Users can like tweets and withdraw their likes.
### Tweeting and Managing
* Users can add both text and images while tweeting.
* Users can delete or edit tweets they post.
* Date information is displayed next to tweets. The date is formatted properly with the Moment.js library.
### Notifications
* Notifications about actions performed by users (delete, login, etc.) are displayed.
* Notifications are visually communicated to the user using the Toastify library.
### Responsive Design
* The application is designed to be mobile compatible and has been developed as responsive to work properly on all devices.
### Firebase Features
* Firebase Authentication: Used for user registration, login and email verification.
* Firestore Database: Used to store users' tweets.
* Firebase Storage: Used to store images added by users.

## Technologies
* ReactJS: Front-end JavaScript library used for the application.
* Firebase: Cloud platform used for user authentication, database (Firestore) and file storage.
* TailwindCSS: CSS framework that provides responsive and stylish design of the application.
* React Router DOM: Library used for page transitions and redirection operations.
* Moment.js: Library used to format the dates of tweets.
* Toastify: Library that shows notifications to users about the actions they perform.
