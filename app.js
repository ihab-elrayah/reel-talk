// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCheP7mtuwc2iUR_Zs8FehRo5GC3iixhRc",
    authDomain: "reeltalk-app.firebaseapp.com",
    projectId: "reeltalk-app",
    storageBucket: "reeltalk-app.appspot.com",
    messagingSenderId: "259349555151",
    appId: "1:259349555151:web:12f2ca90dfa29725d394ba",
    measurementId: "G-MP7M934DEE"
  };
  
  // Initialize Firebase app
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Auth and Database
  const app = initializeApp(firebaseConfig);
  const analytics = firebase.analytics();


// KPI Onboarding
// USER CREATED ACCOUNT

// the user has just created an account successfully via email login
// Function to log "account_created" event
function logAccountCreatedEvent() {
  analytics.logEvent('account_created', {
    registration_method: 'email',
  });
}


// USER REDIRECTED TO NEW WEBPAGE

// the user has just created an account successfully
// Function to log "get_started" event
function logGetStartedEvent() {
  analytics.logEvent('get_started', {
    method: 'email',
    user_type: 'new',
  });
}


// USER LOGGED IN

// the user has just logged in successfully as a returning user
// Function to log "user_logged_in" event
function logUserLoggedInEvent() {
  analytics.logEvent('user_logged_in', {
    login_method: 'email',
    user_type: 'returning',
  });
}


// USER SELECT GENRE

// the user has selected genre successfully 
// Function to log "genre_selected" event
function logGenreSelectedEvent(selectedGenre) {
  analytics.logEvent('genre_selected', {
    genre: selectedGenre,
  });
}


// USER SELECTED FAVORITE FILMS

// the user has selected Favorite films successfully 
// Function to log "favorite_films_selected" event
function logFavoriteFilmsSelectedEvent(selectedFilms) {
  analytics.logEvent('favorite_films_selected', {
    films: selectedFilms,
  });
}


// USER SELECTED FAVORITE SHOWW

// the user has selected Favorite shows successfully 
// Function to log "favorite_shows_selected" event
function logFavoriteShowsSelectedEvent(selectedShows) {
  analytics.logEvent('favorite_shows_selected', {
    shows: selectedShows,
  });
}


// USER SELECTED BIRTHDAY

// the user has selected birthday successfully 
// Function to log "birthday_selected" event
function logBirthdaySelectedEvent(birthday) {
  analytics.logEvent('birthday_selected', {
    birthday: birthday,
  });
}


// USER CREATED PROFILE

// the user has created profile successfully 
// Function to log "profile_created" event
function logProfileCreatedEvent(selectedGenre, birthday) {
  analytics.logEvent('profile_created', {
    genre: selectedGenre,
    birthday: birthday,
  });
}


// KPI Engagement
// USER LOGGED OUT

// the user has just logged out
// Function to log "user_logged_out" event
function logUserLoggedOutEvent() {
  analytics.logEvent('user_logged_out');
}



// Event usage:
// Call functions in response to user actions or events
logAccountCreatedEvent();
logGetStartedEvent();
logUserLoggedInEvent();
logUserLoggedOutEvent();

const selectedGenre = "Action, Advanture, Comedy, Horror"; //example
logGenreSelectedEvent(selectedGenre);

const selectedFilms = ["Film 1", "Film 2", "Film 3", "Film 4", "Film 5"]; //example
logFavoriteFilmsSelectedEvent(selectedFilms);

const selectedShows = ["Show 1", "Show 2", "Show 3", "Show 4", "Show 5"]; //example
logFavoriteShowsSelectedEvent(selectedShows);

const userBirthday = "01-01-1010"; //example
logBirthdaySelectedEvent(userBirthday);

logProfileCreatedEvent(selectedGenre, userBirthday);
