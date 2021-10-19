const coordenadas = [];


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  const crd = pos.coords;

  coordenadas.push(crd.latitude);
  coordenadas.push(crd.longitude);

  console.log(`${coordenadas[0]} ${coordenadas[1]}`);

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

function sendEmail() {

  console.log(`${coordenadas[0]} ${coordenadas[1]}`);

  Email.send({
      SecureToken : "b562e5cb-b2a8-4ad3-b65c-a466112eeca7",
      To : 'prototypefirst99@gmail.com',
      From : "prototypefirst99@gmail.com",
      Subject : "This is the subject",
      Body : `Latitude : ${coordenadas[0]} Longitude: ${coordenadas[1]}`
  }).then(
    message => alert(message)
  );

}

/*
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    coordenadas.push(crd.latitude);
    coordenadas.push(crd.longitude);

    console.log(`${coordenadas[0]} ${coordenadas[1]}`);

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
*/
/*
  Email.send({
      SecureToken : "b562e5cb-b2a8-4ad3-b65c-a466112eeca7",
      To : 'prototypefirst99@gmail.com',
      From : "prototypefirst99@gmail.com",
      Subject : "This is the subject",
      Body : `Latitude : ${coordenadas[0]} Longitude: ${coordenadas[1]}`
  }).then(
    message => alert(message)
  );
*/


// 4E9666CB0558F21BED1DA02BFBA9D2BE63BE

// smtp.elasticemail.com

// 2525

// b562e5cb-b2a8-4ad3-b65c-a466112eeca7

/*
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
*/

/*

  const sucessfulLookUp = (position) => {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a0a250da0a8e469c9184ed2cf28013da`)
    .then(response => response.json())
    .then(console.log);
  };

  navigator.geolocation.getCurrentPosition(sucessfulLookUp);

  */