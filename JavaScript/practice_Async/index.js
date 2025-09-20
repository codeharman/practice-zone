// The Problem with the Callbacks

navigator.geolocation.getCurrentPosition(position =>
{console.log(position)}
);

// The below code give output first before the upper one
console.log('done'); 