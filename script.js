// Funktion zum Anzeigen des DSGVO-Popups
function showDSGVOPopup() {
    const popup = document.getElementById('dsgvo-popup');
    if (!localStorage.getItem('dsgvo-accepted')) {
        popup.style.display = 'block';
    }
}

// Funktion zum Akzeptieren der DSGVO
function acceptDSGVO() {
    localStorage.setItem('dsgvo-accepted', 'true');
    document.getElementById('dsgvo-popup').style.display = 'none';
}

// Funktion zum Ablehnen der DSGVO
function declineDSGVO() {
    localStorage.setItem('dsgvo-accepted', 'false');
    document.getElementById('dsgvo-popup').style.display = 'none';
    alert('Sie haben die Verwendung von Cookies abgelehnt.');
}

// Popup beim Laden der Seite anzeigen
document.addEventListener('DOMContentLoaded', showDSGVOPopup);