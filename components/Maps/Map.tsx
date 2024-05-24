import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36],
});

export default function Map() {

    return (
            <MapContainer center={[-6.897211, 109.157028]} zoom={13} style={{ height: "500px", width: "500px", borderRadius: "10px", zIndex: "1"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-6.897211, 109.157028]} icon={icon}>
                    <Popup>
                        Midori Store
                    </Popup>
                </Marker>
            </MapContainer>
    )
}