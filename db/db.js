const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and save a new ticket
   * @param {String} username
   * @param {Number} price
   * @returns {ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * Create multiple ticket for a single user
   * @param {String} username
   * @param {Number} price
   * @param {Number} quantity
   * @returns {Array<Ticket>} return array of ticket
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 1; i <= quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * return all available tickets
   */
  find() {
    return this.tickets;
  }

  /**
   * find ticket by ticket id
   * @param {String} ticketId
   * @returns {Object} return single ticket object
   */
  findById(ticketId) {
    const ticket = this.tickets.find((ticket) => ticket.id === ticketId);
    return ticket;
  }

  /**
   * find all tickets by username
   * @param {String} username
   * @returns {Array<Ticket>} return array of tickets
   */
  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );
    return tickets;
  }

  /**
   * update ticket by ticket id
   * @param {Number} ticketId
   * @param {{username: String, price: Number}} ticketBody
   * @returns {Ticket} return a update ticket object
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();

    return ticket;
  }

  /**
   * delete ticket by ticketId
   * @param {String} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   * find winners
   * @param {Number} winnerCount
   * @returns {Array<Ticket>} return array of tickets
   */
  draw(winnerCount) {
    const indexes = [];
    for (let i = 1; i <= winnerCount; i++) {
      let index = Math.floor(Math.random() * this.tickets.length);
      while (indexes.includes(index)) {
        index = Math.floor(Math.random() * this.tickets.length);
        console.log(index);
      }
      indexes.push(index);
    }

    const winners = indexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();

module.exports = myDB;
