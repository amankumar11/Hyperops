const URL =
  process.env.NODE_ENV === "production"
    ? 'https://hyperloop-booking.herokuapp.com'
    : 'http://localhost:5000'
export default URL;
