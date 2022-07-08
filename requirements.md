# Lottery API

- Sell Lottery Ticket
- Update Lottery Ticket
- Get All Ticket
- Get Ticket By ID
- Bulk Buy (user can buy miltiple ticket at a time)
- Raffle Draw

Ticket

- Number (unique)
- username
- price
- timestamp

Routes

- tickets/t/:ticketId - GET - find single ticket by ticket id
- tickets/t/:ticketId - PATCH - update single ticket by ticket id
- tickets/t/:ticketId - DELETE - delete ticket by ticket id

- tickets/u/:username - GET - find all tickets by ticket username
- tickets/u/:ticketId - PATCH - update all tickets by username
- tickets/u/:ticketId - DELETE - delete all tickets by username

- tickets/draw - draw tickets and find winners

- tickets - find all ticket
- /tickets/sell - create ticket
- /tickets/bulk - bulk sell ticket
