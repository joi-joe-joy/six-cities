import React, {createRef, PureComponent} from "react";
import leaflet from "leaflet";
import pt from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._initMap = this._initMap.bind(this);
    this.map = {};
  }

  componentDidMount() {
    this._initMap();
  }

  componentDidUpdate(prevProps) {
    if ((this.props.offersCords !== prevProps.offersCords) || (this.props.currentCords !== prevProps.currentCords)) {
      this.map.remove();
      this._initMap();
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  _initMap() {
    const city = [52.38333, 4.9];
    const {offersCords, currentCords} = this.props;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    const zoom = 12;
    this.map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    if (this.map) {
      this.map.setView(city, zoom);

      leaflet
        .tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`
        })
        .addTo(this.map);

      offersCords.forEach((cord) => {
        leaflet
          .marker(cord, {icon})
          .addTo(this.map);
      });

      if (currentCords) {
        const currentIcon = leaflet.icon({
          iconUrl: `img/pin-active.svg`,
          iconSize: [27, 39]
        });
        leaflet
          .marker(currentCords, {icon: currentIcon})
          .addTo(this.map);
      }
    }
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offersCords: pt.arrayOf(pt.arrayOf(pt.number)).isRequired,
  currentCords: pt.arrayOf(pt.number),
  type: pt.string
};

export default Map;
