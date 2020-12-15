function getUrl(user, password, database) {
  const url = `mongodb+srv://${user}:${password}@cluster0.r6toy.mongodb.net/${database}?retryWrites=true&w=majority`;

  return url;
}

module.exports = {
  getUrl,
};
