const MongoClient = require("mongodb").MongoClient;


function getUrl(user, password, database) {
  const url = `mongodb+srv://${user}:${password}@cluster0.r6toy.mongodb.net/${database}?retryWrites=true&w=majority`;

  return url;
}

function getDatabase(app, uri) {
  global.connection = MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err);
    global.db = client.db(process.env.DATABASE);
  
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  });
}


module.exports = {
  getUrl,
  getDatabase
};
