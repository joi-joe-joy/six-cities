import React, {PureComponent, createRef} from 'react';
import leaflet from "leaflet";
import pt from 'prop-types';

const withMap = (Component) => {
  class WithMap extends PureComponent {
    constructor(props) {
      super(props);

      this._mapRef = createRef();
      this._initMap = this._initMap.bind(this);
      this.map = null;
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
      const {offersCords, currentCords, cityLocation} = this.props;

      const city = [cityLocation.latitude, cityLocation.longitude];
      const icon = leaflet.icon({
        iconUrl: `/img/pin.svg`,
        iconSize: [27, 39]
      });
      const zoom = cityLocation.zoom;
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

        if (offersCords) {
          offersCords.forEach((cord) => {
            leaflet
              .marker([cord.latitude, cord.longitude], {icon})
              .addTo(this.map);
          });
        }

        if (currentCords) {
          const currentIcon = leaflet.icon({
            iconUrl: `/img/pin-active.svg`,
            iconSize: [27, 39]
          });
          leaflet
            .marker([currentCords.latitude, currentCords.longitude], {icon: currentIcon})
            .addTo(this.map);
        }
      }
    }

    render() {
      return (
        <Component
          {...this.props}
        >
          <div id="map" ref={this._mapRef} style={{height: `100%`}}></div>
        </Component>
      );
    }
  }

  WithMap.propTypes = {
    offersCords: pt.arrayOf(
        pt.shape({
          latitude: pt.number.isRequired,
          longitude: pt.number.isRequired,
          zoom: pt.number.isRequired
        })
    ),
    currentCords: pt.shape({
      latitude: pt.number.isRequired,
      longitude: pt.number.isRequired,
      zoom: pt.number.isRequired
    }),
    cityLocation: pt.shape({
      latitude: pt.number.isRequired,
      longitude: pt.number.isRequired,
      zoom: pt.number.isRequired
    }).isRequired
  };

  return WithMap;
};

export default withMap;

