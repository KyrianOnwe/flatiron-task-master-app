## Flatiron Tasks Master

This app is for web tracking of project related tasks

# MVP
-Use a Rails API backend with a React frontend.
-Have at least three models on the backend, that include the following:
-At least two one-to-many relationships.
-At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. This joins table must include a user submittable attribute.
-Full CRUD actions for at least one resource.
-Minimum of create and read actions for EACH resource.
-Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
-Implement authentication/authorization, including password protection. A user must be able to:
    sign up with a new user account,
    log in to the site with a secure password and stay logged in via user ID in the session hash, and log out of the site.

# How to use
Fork and clone down the repo, navigat to its directory and type `bundle install`, followed by `Enter` or `Return` to install the backend dependencies.  Next, run `rails db:migrate` to set up the tables.  Once complete, start the backend server by typing `rails s`,  followed by `Enter` or `Return`.  
The frontend is included in a client folder inside the same directory. To use it, open a new terminal and be sure to navigate to the same directory that the backend server is running from and type `npm install --prefix client`, followed by `Enter` or `Return` to install the frontend dependencies.    Once that is complete, type `npm start --prefix client`, followed by `Enter` or `Return` to start the frontend.  Enjoy!

# In app 
Any user can create a new administrator and access all application routes.  Non administrators can only mark tasks comlete and view tasks.  All users MUST sign in.