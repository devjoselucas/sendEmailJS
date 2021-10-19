function sendEmail() {

  navigator.geolocation.getCurrentPosition(console.log,console.log);

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