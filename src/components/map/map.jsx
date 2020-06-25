import React, {createRef, PureComponent} from "react";
import leaflet from "leaflet";
import pt from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._initMap = this._initMap.bind(this);
  }

  componentDidMount() {
    this._initMap();
  }

  componentWillUnmount() {}

  _initMap() {
    const city = [52.38333, 4.9];
    const {offerCords} = this.props;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    if (map) {
      map.setView(city, zoom);

      leaflet
        .tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`
        })
        .addTo(map);

      offerCords.forEach((cord) => {
        leaflet
          .marker(cord, {icon})
          .addTo(map);
      });
    }
  }

  render() {
    return (
      <section className="cities__map map">
        <div id="map" ref={this._mapRef} style={{height: `100%`}}></div>
      </section>
    );
  }
}

Map.propTypes = {
  offerCords: pt.arrayOf(pt.arrayOf(pt.number)).isRequired
};

export default Map;
