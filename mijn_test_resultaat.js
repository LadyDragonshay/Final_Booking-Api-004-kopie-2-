//Eerste deel is mijn positieve en daarna mijn negatieve uitslag... en daaronder de npm run dev gedeelte...
Microsoft Windows [Version 10.0.22631.4460]
(c) Microsoft Corporation. Alle rechten voorbehouden.

C:\BED_Final\BED-Final_Booking-Api-004 - kopie (2)>npm test

> express-bookings@1.0.0 test
> npm run test-positive && npm run test-negative


> express-bookings@1.0.0 test-positive
> newman run "./postman/collections/Bookings API.json" -e "./postman/environments/Local.postman_environment.json"

(node:2508) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
newman

Bookings API

□ users / {userId}
└ Get user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 67ms]
  GET http://0.0.0.0:3001/users/e5678901-23f0-1234-5678-9abcdef01234 [200 OK, 475B, 29ms]
  √  Response status code is 200
  √  Id should be a non-empty string

└ Update user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 8ms]
  PUT http://0.0.0.0:3001/users/e5678901-23f0-1234-5678-9abcdef01234 [200 OK, 319B, 21ms]
  √  Response status code is 200

└ Delete user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/users/e5678901-23f0-1234-5678-9abcdef01234 [200 OK, 366B, 16ms]
  √  Response status code is 200

□ users
└ Get all users
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/users [200 OK, 1.17kB, 8ms]
  √  Response status code is 200
  √  Response is an array

└ Create a new user
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  POST http://0.0.0.0:3001/users [201 Created, 644B, 18ms]
  √  Response status code is 201

□ hosts / {hostId}
└ Get host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  GET http://0.0.0.0:3001/hosts/e2345678-90bc-def0-0123-456789abcdef [200 OK, 575B, 6ms]
  √  Response status code is 200
  √  ID is a non-empty string

└ Update host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  PUT http://0.0.0.0:3001/hosts/e2345678-90bc-def0-0123-456789abcdef [200 OK, 319B, 17ms]
  √  Response status code is 200

└ Delete host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/hosts/e2345678-90bc-def0-0123-456789abcdef [200 OK, 619B, 18ms]
  √  Response status code is 200

□ hosts
└ Get all hosts
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  GET http://0.0.0.0:3001/hosts [200 OK, 1.59kB, 7ms]
  √  Response status code is 200
  √  Response body is an array

└ Create a new host
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  POST http://0.0.0.0:3001/hosts [201 Created, 655B, 17ms]
  √  Response status code is 201

□ properties / {propertyId}
└ Get property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/properties/i1234567-89f0-1234-5678-9abcdef01234 [200 OK, 564B, 7ms]
  √  Response status code is 200
  √  Id should be a non-empty string

└ Update property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/properties/i1234567-89f0-1234-5678-9abcdef01234 [200 OK, 555B, 34ms]
  √  Response status code is 200

└ Delete property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 3ms]
  DELETE http://0.0.0.0:3001/properties/i1234567-89f0-1234-5678-9abcdef01234 [200 OK, 655B, 12ms]
  √  Response status code is 200

□ properties
└ Get all properties
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  GET http://0.0.0.0:3001/properties [200 OK, 1.24kB, 8ms]
  √  Response status code is 200
  √  Response is an array with at least one element
  √  maxGuestCount is a non-negative integer

└ Create a new property
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  POST http://0.0.0.0:3001/properties [201 Created, 299B, 13ms]
  √  Response status code is 201

□ amenities / {amenityId}
└ Get amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/amenities/u3456789-01rs-tuvw-01cd-ef0123456789 [200 OK, 302B, 8ms]
  √  Response status code is 200
  √  Response has the required fields - id and name
  √  id is a non-empty string
  √  Name should be a non-empty string

└ Update amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  PUT http://0.0.0.0:3001/amenities/u3456789-01rs-tuvw-01cd-ef0123456789 [200 OK, 322B, 12ms]
  √  Response status code is 200

└ Delete amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/amenities/u3456789-01rs-tuvw-01cd-ef0123456789 [200 OK, 322B, 14ms]
  √  Response status code is 200

□ amenities
└ Get all amenities
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/amenities [200 OK, 796B, 9ms]
  √  Response status code is 200
  √  Response is an array with at least one element
  √  Each element in the response has the required fields - id and name
  √  The id must be a non-empty string
  √  Name is a non-empty string

└ Create a new amenity
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  POST http://0.0.0.0:3001/amenities [201 Created, 356B, 13ms]
  √  Response status code is 201

□ bookings / {bookingId}
└ Get booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  GET http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [200 OK, 532B, 9ms]
  √  Response status code is 200
  √  Id should be a non-empty string
  √  userId is a non-empty string
  √  propertyId should be a non-empty string

└ Update booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [200 OK, 322B, 18ms]
  √  Response status code is 200

└ Delete booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [200 OK, 322B, 13ms]
  √  Response status code is 200

□ bookings
└ Get all bookings
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/bookings [200 OK, 529B, 9ms]
  √  Response status code is 200
  √  Response is an array
  √  Id should be a non-empty string
  √  userId is a non-empty string

└ Create a new booking
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/bookings [201 Created, 590B, 13ms]
  √  Response status code is 201

□ reviews / {reviewId}
└ Get review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [200 OK, 477B, 10ms]
  √  Response status code is 200
  √  Response has the required fields
  √  Id is a non-empty string
  √  userId is a non-empty string
  √  propertyId is a non-empty string

└ Update review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [200 OK, 437B, 23ms]
  √  Response status code is 200

└ Delete review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [200 OK, 534B, 13ms]
  √  Response status code is 200

□ reviews
└ Get all reviews
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/reviews [200 OK, 898B, 19ms]
  √  Response status code is 200
  √  Response is an array with at least one element
  √  Id is a non-empty string
  √  userId is a non-empty string
  √  propertyId is a non-empty string

└ Create a new review
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  POST http://0.0.0.0:3001/reviews [201 Created, 295B, 8ms]
  √  Response status code is 201

→ User Login
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  √  Response status code is 200
  √  Response has the required field 'token'
  √  Token is a non-empty string

┌─────────────────────────┬──────────────────┬─────────────────┐
│                         │         executed │          failed │
├─────────────────────────┼──────────────────┼─────────────────┤
│              iterations │                1 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│                requests │               62 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│            test-scripts │               62 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│      prerequest-scripts │               31 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│              assertions │               61 │               0 │
├─────────────────────────┴──────────────────┴─────────────────┤
│ total run duration: 3s                                       │
├──────────────────────────────────────────────────────────────┤
│ total data received: 16.89kB (approx)                        │
├──────────────────────────────────────────────────────────────┤
│ average response time: 10ms [min: 3ms, max: 67ms, s.d.: 9ms] │
└──────────────────────────────────────────────────────────────┘

> express-bookings@1.0.0 test-negative
> newman run "./postman/collections/Bookings API Negative.json" -e "./postman/environments/Local.postman_environment.json"

(node:16572) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
newman

Bookings API Negative

□ users / {userId}
└ Get user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 43ms]
  GET http://0.0.0.0:3001/users/:userId [404 Not Found, 290B, 12ms]
  √  Response status code is 404

└ Update user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  PUT http://0.0.0.0:3001/users/d4567890-12 [404 Not Found, 290B, 18ms]
  √  Response status code is 404

└ Delete user by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/users/d4567890-12ef-01 [404 Not Found, 295B, 11ms]
  √  Response status code is 404

□ users
└ Create a new user
  POST http://0.0.0.0:3001/login [200 OK, 453B, 6ms]
  POST http://0.0.0.0:3001/users [400 Bad Request, 277B, 14ms]
  √  Response status code is 400

□ hosts / {hostId}
└ Get host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 7ms]
  GET http://0.0.0.0:3001/hosts/:hostId [404 Not Found, 290B, 6ms]
  √  Response status code is 404

└ Update host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/hosts/:hostId [404 Not Found, 286B, 18ms]
  √  Response status code is 404

└ Delete host by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/hosts/:hostId [404 Not Found, 286B, 16ms]
  √  Response status code is 404

□ hosts
└ Create a new host
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/hosts [400 Bad Request, 281B, 5ms]
  √  Response status code is 400

□ properties / {propertyId}
└ Get property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/properties/h0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 319B, 5ms]
  √  Response status code is 404

└ Update property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/properties/h0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 244B, 18ms]
  √  Response status code is 404

└ Delete property by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  DELETE http://0.0.0.0:3001/properties/h0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 319B, 10ms]
  √  Response status code is 404

□ properties
└ Create a new property
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/properties [400 Bad Request, 387B, 5ms]
  √  Response status code is 400

□ amenities / {amenityId}
└ Get amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  GET http://0.0.0.0:3001/amenities/t2345678-90qr-stu [404 Not Found, 303B, 9ms]
  √  Response status code is 404

└ Update amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  PUT http://0.0.0.0:3001/amenities/t2345678-90qr-st [404 Not Found, 302B, 9ms]
  √  Response status code is 404

└ Delete amenity by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/amenities/bc-def012345678 [404 Not Found, 301B, 9ms]
  √  Response status code is 404

□ amenities
└ Create a new amenity
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/amenities [400 Bad Request, 287B, 5ms]
  √  Response status code is 400

□ bookings / {bookingId}
└ Get booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  GET http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [404 Not Found, 322B, 9ms]
  √  Response status code is 404

└ Update booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  PUT http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [404 Not Found, 322B, 18ms]
  √  Response status code is 404

└ Delete booking by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  DELETE http://0.0.0.0:3001/bookings/f0123456-78ab-cdef-0123-456789abcdef [404 Not Found, 322B, 9ms]
  √  Response status code is 404

□ bookings
└ Create a new booking
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  POST http://0.0.0.0:3001/bookings [400 Bad Request, 372B, 5ms]
  √  Response status code is 400

□ reviews / {reviewId}
└ Get review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 5ms]
  GET http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 317B, 6ms]
  √  Response status code is 404

└ Update review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  PUT http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 244B, 16ms]
  √  Response status code is 404

└ Delete review by ID
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  DELETE http://0.0.0.0:3001/reviews/j0123456-78f0-1234-5678-9abcdef01234 [404 Not Found, 317B, 9ms]
  √  Response status code is 404

□ reviews
└ Create a new review
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/reviews [400 Bad Request, 318B, 5ms]
  √  Response status code is 400

→ User Login
  POST http://0.0.0.0:3001/login [200 OK, 453B, 4ms]
  POST http://0.0.0.0:3001/login [401 Unauthorized, 279B, 3ms]
  √  Response status code is 401

┌─────────────────────────┬─────────────────┬─────────────────┐
│                         │        executed │          failed │
├─────────────────────────┼─────────────────┼─────────────────┤
│              iterations │               1 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│                requests │              50 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│            test-scripts │              50 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│      prerequest-scripts │              25 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│              assertions │              25 │               0 │
├─────────────────────────┴─────────────────┴─────────────────┤
│ total run duration: 2.4s                                    │
├─────────────────────────────────────────────────────────────┤
│ total data received: 6.93kB (approx)                        │
├─────────────────────────────────────────────────────────────┤
│ average response time: 8ms [min: 3ms, max: 43ms, s.d.: 6ms] │
└─────────────────────────────────────────────────────────────┘

C:\BED_Final\BED-Final_Booking-Api-004 - kopie (2)>
========================================================================================================================
Microsoft Windows [Version 10.0.22631.4460]
(c) Microsoft Corporation. Alle rechten voorbehouden.

C:\BED_Final\BED-Final_Booking-Api-004 - kopie (3)>npm run dev

> express-bookings@1.0.0 dev
> nodemon src/index.js

[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
(node:30228) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Server is listening on port 3001
info: POST /login. Status: 200. Duration: 17 ms {"service":"bookstore-api"}
GET /users/:id - Request received: { params: { id: 'e5678901-23f0-1234-5678-9abcdef01234' } }
info: GET /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 8 ms {"service":"bookstore-api"}
User found: Yes
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
PUT /users/:id - Request received: {
  params: { id: 'e5678901-23f0-1234-5678-9abcdef01234' },
  body: {
    username: 'jdoe_updated',
    name: 'John Doe Updated',
    email: 'updatedjohndoe@example.com',
    phoneNumber: '987-654-3210',
    profilePicture: 'https://updated-example.com/images/johndoe.jpg',
    password: '***'
  }
}
info: PUT /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 8 ms {"service":"bookstore-api"}
User update result: Success
User e5678901-23f0-1234-5678-9abcdef01234 successfully updated      
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
DELETE /users/:id - Request received: { params: { id: 'e5678901-23f0-1234-5678-9abcdef01234' } }
deleteUser: Function called with id: e5678901-23f0-1234-5678-9abcdef01234
Attempting to delete user with id: e5678901-23f0-1234-5678-9abcdef01234
info: DELETE /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 8 ms {"service":"bookstore-api"}
Delete result: { count: 1 }
User deletion result: Success
User e5678901-23f0-1234-5678-9abcdef01234 successfully deleted      
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /users - Request received: { query: {} }
info: GET /users. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
Found 4 users
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
POST /users - Request received: {
  body: {
    username: 'Alex',
    password: '***',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    profilePicture: 'https://global-uploads.webflow.com/5eecfecbe625d195e35b89f2/624bfb093da7d92733c001c0_Ignacio%20Villafruela%20Rodr%C3%ADguez.jpg'
  }
}
info: POST /users. Status: 200. Duration: 8 ms {"service":"bookstore-api"}
User creation result: Success
New user created with id: ebf982e8-e9e4-43d0-b980-df0d31616316      
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /hosts/e2345678-90bc-def0-0123-456789abcdef
info: GET /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
PUT /hosts/e2345678-90bc-def0-0123-456789abcdef
info: PUT /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
DELETE /hosts/e2345678-90bc-def0-0123-456789abcdef
info: DELETE /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
GET /hosts
info: GET /hosts. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
POST /hosts
info: POST /hosts. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
GET /properties/i1234567-89f0-1234-5678-9abcdef01234
info: GET /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
PUT /properties/i1234567-89f0-1234-5678-9abcdef01234
info: PUT /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
DELETE /properties/i1234567-89f0-1234-5678-9abcdef01234
info: DELETE /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /properties
info: GET /properties. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
POST /properties
info: POST /properties. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /amenities/u3456789-01rs-tuvw-01cd-ef0123456789
info: GET /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
PUT /amenities/u3456789-01rs-tuvw-01cd-ef0123456789
info: PUT /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
DELETE /amenities/u3456789-01rs-tuvw-01cd-ef0123456789
info: DELETE /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
GET /amenities
info: GET /amenities. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
POST /amenities
info: POST /amenities. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /bookings/f0123456-78ab-cdef-0123-456789abcdef
info: GET /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef
info: PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef
info: DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /bookings
info: GET /bookings. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
POST /bookings
info: POST /bookings. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /reviews/j0123456-78f0-1234-5678-9abcdef01234
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234
info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234
info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /reviews
info: GET /reviews. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
POST /reviews
info: POST /reviews. Status: 200. Duration: 6 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /users/:id - Request received: { params: { id: ':userId' } }
info: GET /users/:userId. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
User found: No
User with id :userId not found
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
PUT /users/:id - Request received: {
  params: { id: 'd4567890-12' },
  body: {
    username: 'jdoe_updated',
    name: 'John Doe Updated',
    email: 'updatedjohndoe@example.com',
    phoneNumber: '987-654-3210',
    profilePicture: 'https://updated-example.com/images/johndoe.jpg',
    password: '***'
  }
}
info: PUT /users/d4567890-12. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
User update result: Not Found
Update failed - User d4567890-12 not found
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
DELETE /users/:id - Request received: { params: { id: 'd4567890-12ef-01' } }
deleteUser: Function called with id: d4567890-12ef-01
Attempting to delete user with id: d4567890-12ef-01
info: DELETE /users/d4567890-12ef-01. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
Delete result: { count: 0 }
User deletion result: Not Found
Deletion failed - User d4567890-12ef-01 not found
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
POST /users - Request received: { body: { password: '***' } }
info: POST /users. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
User creation result: Failed
User creation failed - no error thrown but no user returned
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
GET /hosts/:hostId
info: GET /hosts/:hostId. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
PUT /hosts/:hostId
info: PUT /hosts/:hostId. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
DELETE /hosts/:hostId
info: DELETE /hosts/:hostId. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
POST /hosts
info: POST /hosts. Status: 400. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /properties/h0123456-78f0-1234-5678-9abcdef01234
info: GET /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
PUT /properties/h0123456-78f0-1234-5678-9abcdef01234
info: PUT /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
DELETE /properties/h0123456-78f0-1234-5678-9abcdef01234
info: DELETE /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
POST /properties
info: POST /properties. Status: 400. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /amenities/t2345678-90qr-stu
info: GET /amenities/t2345678-90qr-stu. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
PUT /amenities/t2345678-90qr-st
info: PUT /amenities/t2345678-90qr-st. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
DELETE /amenities/bc-def012345678
info: DELETE /amenities/bc-def012345678. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
-api"}
POST /bookings
info: POST /bookings. Status: 400. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
GET /reviews/j0123456-78f0-1234-5678-9abcdef01234
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234
info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234
info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
POST /reviews
info: POST /reviews. Status: 400. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 401. Duration: 0 ms {"service":"bookstore-api"}
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
(node:14996) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Server is listening on port 3001

