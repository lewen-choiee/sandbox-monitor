import { translations } from './translations.js';
import { useState } from "react";

export function BLETest({ lang }) {
    const t = translations[lang];
    const [status, setStatus] = useState("Idle");

    const connect = async () => {
        if (!navigator.bluetooth) {
            setStatus("Web Bluetooth not supported in this browser.");
            return;
        }

        try {
            setStatus("Requesting device...");
            const device = await navigator.bluetooth.requestDevice({
                filters: [{ services: ["battery_service"] }], // Replace with your UUIDs
            });

            setStatus(`Connected to: ${device.name || "Unknown"}`);
            // You can now use device.gatt.connect() for further communication
        } catch (err) {
            setStatus(`Error: ${err.message}`);
        }
    };

    return (
        <div id="ble-test">
            <button onClick={connect} disabled={!navigator.bluetooth}>
                {t.btConn}
            </button>
            <p>{status}</p>
        </div>
    );
}