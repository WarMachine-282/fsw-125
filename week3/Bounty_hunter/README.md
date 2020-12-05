A. Server Setup
Since we haven't started connecting to MongoDB quite yet, you can just save your bounties in a bounties array in your server code. Keep in mind that since it isn't being persisted anywhere, anytime you make a change to your server code and restart the server, you'll lose all your bounties.


A bounty object should have:

-First Name
-Last Name
-Living (Boolean)
-Bounty Amount (number)
-Type (‘Sith’ or ‘Jedi’)
-ID (a unique identifier. Use the uuid package to generate unique ids. - npm install uuid and check the docs (Links to an external site.) to see how to use it. It's as simple as requiring the package and running uuid.v4())
Since there isn't a front end set up yet, you'll just use Postman to interact with the server and update the data.

B. Create GET & POST routes
Since we don't have a good way to tell the server which item we want to PUT and DELETE yet, we'll start out just by writing the GET and POST endpoints.

1. Using Express, create an API  /bounty route
2. Write a GET endpoint that gets all bounties from the array and sends them to the client.
3. Write a POST endpoint that adds a new bounty object to the array of bounties.
Remember, you'll have to play the part of the database and add an id property to the incoming bounty before saving it to the array of bounties. This way you'll be able to easily look it up by its id property in order to update and delete it later.
