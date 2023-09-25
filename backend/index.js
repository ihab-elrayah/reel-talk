const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// KPI Category: ONBOARDING

// account_created event

// Exporting a Cloud Function named onAccountCreated
exports.onAccountCreated = functions.firestore // Accessing Firestore through the functions object.
    .document('account_created/{userId}') // Specifying the path to the document in Firestore to watch for creation.
    .onCreate((snap, context) => {  // Defining the function to run when a document is created at the specified path.
        // Extracting the data from the created document snapshot.
        const newData = snap.data();
        // Logging the ID of the created document and its data
        console.log('Account created with ID:', context.params.userId, 'and data:', newData);
        // Perform desired operations here.
        
        // TODO: Write the code for any additional operations or logic here.

    });

// get_started event

exports.onGetStarted = functions.firestore
    .document('get_started/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User got through welcome screens with ID:', context.params.userId, 'and data:', newData);
        // Perform desired operations here.
    });

// user_logged_in event

exports.onUserLoggedIn = functions.firestore
    .document('user_logged_in/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User logged in with ID:', context.params.userId, 'and data:', newData);
        // Perform desired operations here.
    });

// genre_selected event

exports.onGenreSelected = functions.firestore
    .document('genre_selected/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User selected genre with ID:', context.params.userId, 'and data:', newData);
    });

// favorite_films_selected event

exports.onFavoriteFilmsSelected = functions.firestore
    .document('favorite_films_selected/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User selected favorite films with ID:', context.params.userId, 'and data:', newData);
    });

// favorite_shows_selected event

exports.onFavoriteFilmsSelected = functions.firestore
    .document('favorite_shows_selected/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User selected favorite show with ID:', context.params.userId, 'and data:', newData);
    });

// birthday_selected event

exports.onFavoriteFilmsSelected = functions.firestore
    .document('birthday_selected/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User selected birthsay with ID:', context.params.userId, 'and data:', newData);
    });

// profile_created event

exports.onProfileCreated = functions.firestore
    .document('profile_created/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User created profile with ID:', context.params.userId, 'and data:', newData);
    });



// KPI Category: ENGAGMENT 

// user_logged_out event

exports.onUserLoggedOut = functions.firestore
    .document('user_logged_out/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User logged out with ID:', context.params.userId, 'and data:', newData);
        // Perform desired operations here.
    });


// created_community event

exports.onCreatedCommunity = functions.firestore
    .document('created_community/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User created community with ID:', context.params.userId, 'and data:', newData);
    });


// joined_community event

exports.onJoinedCommunity = functions.firestore
    .document('joined_community/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User join community with ID:', context.params.userId, 'and data:', newData);
    });

// created_discussion event

exports.onCreatedDiscussion = functions.firestore
    .document('created_discussion/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User created discussion with ID:', context.params.userId, 'and data:', newData);
    });

// posted_comment event

exports.onPostedComment = functions.firestore
    .document('posted_comment/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User post comment with ID:', context.params.userId, 'and data:', newData);
    });

// replied_comment event

exports.onRepliedComment = functions.firestore
    .document('replied_comment/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User replied comment with ID:', context.params.userId, 'and data:', newData);
    });

// rated_content event

exports.onRatedContent = functions.firestore
    .document('rated_content/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User rated content with ID:', context.params.userId, 'and data:', newData);
    });

// reviewed_content event

exports.onReviewedContent = functions.firestore
    .document('reviewed_content/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User reviewed content with ID:', context.params.userId, 'and data:', newData);
    });

// searched event

exports.onSearched = functions.firestore
    .document('searched/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User searched content or disscusion with ID:', context.params.userId, 'and data:', newData);
    });

// page_visit event

exports.onPageVisit = functions.firestore
    .document('page_visit/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User navigated page section with ID:', context.params.userId, 'and data:', newData);
    });

// review_liked event

exports.onReviewLiked = functions.firestore
    .document('review_liked/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User liked a review with ID:', context.params.userId, 'and data:', newData);
    });

// watchlisted event

exports.onWatchListed = functions.firestore
    .document('watchlisted/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User add item to watchlist with ID:', context.params.userId, 'and data:', newData);
    });

// viewed_trailer event

exports.onViewedTrailer = functions.firestore
    .document('viewed_trailer/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User hits clicks on the "Play Trailer" button with ID:', context.params.userId, 'and data:', newData);
    });

// other_profile_view event

exports.onOtherProfileView = functions.firestore
    .document('other_profile_view/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User avisits another user profile with ID:', context.params.userId, 'and data:', newData);
    });

// message_sent event

exports.onMessageSent = functions.firestore
    .document('message_sent/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User DMs another user with ID:', context.params.userId, 'and data:', newData);
    });

// followed_user event

exports.onFollowedUser = functions.firestore
    .document('followed_user/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User follows another user with ID:', context.params.userId, 'and data:', newData);
    });


// profile_edit event

exports.onProfileEdit = functions.firestore
    .document('profile_edit/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User edited profile with ID:', context.params.userId, 'and data:', newData);
    });

// account_deleted event

exports.onAccountDeleted = functions.firestore
    .document('account_deleted/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User deleted account with ID:', context.params.userId, 'and data:', newData);
    });

// account_updated event

exports.onAccountUpdated = functions.firestore
    .document('profile_edit/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User updated account with ID:', context.params.userId, 'and data:', newData);
    });

    

// KPI Category: MONETIZATION

// in_app_purchase event

exports.onInAppPurchase = functions.firestore
    .document('in_app_purchase/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User upgraded  account to the premium subscription or bought gemswith ID:', context.params.userId, 'and data:', newData);
    });

// gem_spent event

exports.onGemSpent = functions.firestore
    .document('gem_spent/{userId}')
    .onCreate((snap, context) => {
        const newData = snap.data();
        console.log('User awards a gem on content, another user, or community with ID:', context.params.userId, 'and data:', newData);
    });


