import { translations } from './translations.js';
import { useState } from "react";

function Popup({ isVisible, lang }) {
    const t = translations[lang];
    if (!isVisible)
        return null;

    return <div id="popup">
        {t.aboutScreen}
    </div>
}

export function TopBar({ lang }) {
    const t = translations[lang];
    const [isVisible, setIsVisible] = useState(false);

    return <>
        <Popup isVisible={isVisible} lang={lang} />
        {isVisible && <div id="popup-curtain" onClick={() => { setIsVisible(false) }}></div>}
        <div id="menu-name">{t.sandboxMonitor}</div>
        <div id="menu-item" onClick={() => { setIsVisible(true) }}>{t.about}</div>
    </>
}