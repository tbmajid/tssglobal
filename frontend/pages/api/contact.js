const SparkPost = require("sparkpost");

async function emailHandler(req, res) {
  const client = new SparkPost(process.env.SPARKPOST);
  const data = JSON.parse(req.body);
  const { name, email, message } = data;

  client.transmissions
    .send({
      content: {
        from: "tabim3@gmail.com",
        subject: "Contact Form",
        html: `<html><body><p>${message}</p>`,
      },
      recipients: [{ address: email }],
    })
    .then(() => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application-json");
      res.end(JSON.stringify({ error: null }));
    })
    .catch(() => {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application-json");
      res.end(JSON.stringify({ error: "error sending email" }));
    });
}

export default emailHandler;
