const shortId = require("shortid");

class Ticket {
  /**
   * constructor function
   * @param {String} username
   * @param {Number} price
   */
  constructor(username, price) {
    this.id = shortId.generate();
    this.username = username;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
