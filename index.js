function sendEmail() {

  const sucessfulLookUp = (position) => {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a0a250da0a8e469c9184ed2cf28013da`)
    .then(response => response.json())
    .then(console.log);
  };

  navigator.geolocation.getCurrentPosition(sucessfulLookUp,console.log);

  Email.send({
      SecureToken : "b562e5cb-b2a8-4ad3-b65c-a466112eeca7",
      To : 'prototypefirst99@gmail.com',
      From : "prototypefirst99@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );

}

// 4E9666CB0558F21BED1DA02BFBA9D2BE63BE

// smtp.elasticemail.com

// 2525

// b562e5cb-b2a8-4ad3-b65c-a466112eeca7