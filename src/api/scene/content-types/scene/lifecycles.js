const { v4: uuidv4 } = require('uuid');

module.exports = {
  async beforeCreate(event) {
    // Szene selbst bekommt UUID
    if (!event.params.data.uuid) {
      event.params.data.uuid = uuidv4();
    }

    // Hotspots durchgehen und UUID setzen
    if (Array.isArray(event.params.data.hotspots)) {
      event.params.data.hotspots = event.params.data.hotspots.map(h => ({
        ...h,
        uuid: h.uuid || uuidv4(),
      }));
    }
  },

  async beforeUpdate(event) {
    // Szene selbst absichern
    if (!event.params.data.uuid) {
      event.params.data.uuid = uuidv4();
    }

    // Hotspots absichern (auch bei Updates)
    if (Array.isArray(event.params.data.hotspots)) {
      event.params.data.hotspots = event.params.data.hotspots.map(h => ({
        ...h,
        uuid: h.uuid || uuidv4(),
      }));
    }
  },
};