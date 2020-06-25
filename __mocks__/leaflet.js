`use strict`;

const leaflet = jest.genMockFromModule(`leaflet`);

leaflet.default = {icon: () => ({})};

module.exports = leaflet;
