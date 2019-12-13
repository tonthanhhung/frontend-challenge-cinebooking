## Frontend Challenge Cinema Booking

Using ReactJs (and other technologies in the ecosystem) build a view reservation page
The movie has the following features:

- Display the seat map in the theater (Seat type: standard, VIP, Deluxe)
- When selecting a chair, the seat is displayed in bold
- Display the number of seats and the selected seat type as shown in the picture
- One person can choose a maximum of 6 seats.
- User can manipulate zoom (zoom in / out, minimum is x2) diagram
  seats to choose seats for cinemas with multiple seats is easy.
- Encourage writing tests for components / functions

The input to render is a 2-dimensional array:

- Vertical is row of seats (A, B, C ...)
- Width is the number of seats (1, 2, 3 ...)
  (You can build manual mock data or crawl from another site)

### How to start

#### Development

```
    $ yarn start
```

Access the app via: [localhost:1234](http://localhost:1234)

#### Build

```
    $ yarn build
```

- Deployment to [Now](https://zeit.co/docs#install-now-cli)

### Demo

https://frontend-challenge-cinebooking.now.sh/

![demo-gif](https://i.imgur.com/AWcBnk3.gif)
