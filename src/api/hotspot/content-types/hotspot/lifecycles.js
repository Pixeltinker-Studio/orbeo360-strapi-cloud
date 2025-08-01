const { v4: uuidv4 } = require('uuid');

module.exports = {
  async beforeCreate(event) {
    // Automatisch UUID generieren, falls nicht vorhanden
    if (!event.params.data.uuid) {
      event.params.data.uuid = uuidv4();
    }
  },

  async beforeUpdate(event) {
    // Falls beim Update keine UUID existiert (z.B. ältere Einträge)
    if (!event.params.data.uuid) {
      event.params.data.uuid = uuidv4();
    }
  }
};