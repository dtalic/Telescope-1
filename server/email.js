sendEmail = function(to, subject, text, html){

  // TO-DO: limit who can send emails

  var from = getSetting('defaultEmail') || 'info@dunia.mailgun.org';
  var siteName = getSetting('title');
  var subject = '['+siteName+'] '+subject

  console.log('sending email…');
  console.log(from)
  console.log(to)
  console.log(subject)
  console.log(text)
  console.log(html)

  Email.send({
    from: from, 
    to: to, 
    subject: subject, 
    text: text,
    html: html
  });
};