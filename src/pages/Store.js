import PageNav from "../components/PageNav";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./Store.module.css";

const storeLocations = [
  {
    id: 1,
    latitude: -33.8688,
    longitude: 151.2093,
    address: "123 King Street, Sydney, NSW 2000",
  },
  {
    id: 2,
    latitude: -33.8708,
    longitude: 151.2093,
    address: "456 George Street, Sydney, NSW 2000",
  },
  {
    id: 3,
    latitude: -33.8731,
    longitude: 151.2154,
    address: "789 Pitt Street, Sydney, NSW 2000",
  },
  {
    id: 4,
    latitude: -33.8749,
    longitude: 151.2094,
    address: "101 York Street, Sydney, NSW 2000",
  },
  {
    id: 5,
    latitude: -33.8698,
    longitude: 151.2074,
    address: "202 Elizabeth Street, Sydney, NSW 2000",
  },
];
function Store() {
  const position = [-33.8688, 151.2093];

  return (
    <div className={styles.store}>
      <PageNav />

      <div className={styles.mapContainer}>
        <MapContainer
          className={styles.map}
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {storeLocations.map((store) => (
            <Marker key={store.id} position={[store.latitude, store.longitude]}>
              <Popup>{store.address}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className={styles.stores}>
        <h2>Our stores</h2>
        <p>123 King Street, Sydney, NSW 2000</p>
        <p>456 George Street, Sydney, NSW 2000</p>
        <p>789 Pitt Street, Sydney, NSW 2000</p>
        <p>101 York Street, Sydney, NSW 2000</p>
      </div>
    </div>
  );
}

export default Store;
