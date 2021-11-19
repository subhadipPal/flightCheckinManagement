# Airline manager utility

## api module or the airline manager backend server

This is the backend of the app. It uses json-server api.
to start the server please run the following command.

* yarn json:server:watch

The airDB.json file contains the details of the flights and booking.
CRUD operations can be performed on this database file using Restful requests.

The api server runs on -> <http://localhost:3030>

## airline manager client

This is the React application that is the airline manager app.
Application runs on -> <http://localhost:3000>

Staff login can be done using the google credentials

Admin login can be done using the following username and password combination.

* admin/password

## Tests

Tests can be run using the following command.
Only 1 test added for booking.jsx

* yarn test
