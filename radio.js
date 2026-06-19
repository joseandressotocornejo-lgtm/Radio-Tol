const stations = [
    { name: "Radio Off", logo: "img/RadioOff.png", file: "", duration: 0 },
    { name: "Bounce FM", logo: "img/BounceFM.png", file: "https://www.dropbox.com/scl/fi/ca7wu3m85r58rgbv9pd7g/Bounce-FM.ogg?rlkey=v7qw43n1h981dcomxfjpve96v&st=5gx1zfuf&raw=1", duration: 3902 },
    { name: "CSR 103.9", logo: "img/CSR1039.png", file: "https://www.dropbox.com/scl/fi/fpdmf6o39nbadvw137au1/CSR-103.9.ogg?rlkey=rx77lkc6nhbujzgna49ctl9q9&st=89cquejz&raw=1", duration: 2844 },
    { name: "K-DST", logo: "img/K-DST.png", file: "https://www.dropbox.com/scl/fi/oosqrvx814k1e3cc5tgup/K-DST.ogg?rlkey=fvf1umkp0y16c1it3n04v2ixx&st=37bzczhr&raw=1", duration: 4001 },
    { name: "K-JAH West", logo: "img/KJAHWest.png", file: "https://www.dropbox.com/scl/fi/bke95j1p5xoph0li70xm/K-JAH-West.ogg?rlkey=t0x395wzoo3s1slyvmtb364x3&st=p4861lcp&raw=1", duration: 3633 },
    { name: "K-Rose", logo: "img/K-Rose.png", file: "https://www.dropbox.com/scl/fi/9rqncuwg57ytnhxgogxhw/K-Rose.ogg?rlkey=stkyv5gbrzgg16g1o020j0r8u&st=g5hmzkx2&raw=1", duration: 2886 },
    { name: "Master Sounds 98.3", logo: "img/MasterSounds983.png", file: "https://www.dropbox.com/scl/fi/1vgwoli2ml2u7i24ft643/Master-Sounds-98.3.ogg?rlkey=bd1gph4a2wnqkc6nsq2p0x2sp&st=waoj51bo&raw=1", duration: 4061 },
    { name: "Playback FM", logo: "img/PlaybackFM.png", file: "https://www.dropbox.com/scl/fi/5c15ncg6pjxwfr8ls0dga/Playback-FM.ogg?rlkey=aygen0ilmxtmg3oppbnpb633f&st=lvhvgtw6&raw=1", duration: 2810 },
    { name: "Radio Los Santos", logo: "img/RadioLosSantos.png", file: "https://www.dropbox.com/scl/fi/sinj8ub6wcg6t6sly5upa/Radio-Los-Santos.ogg?rlkey=mil43l09kuhu1fjpj8pl8llfz&st=54uerjxk&raw=1", duration: 3863 },
    { name: "Radio X", logo: "img/RadioX.png", file: "https://www.dropbox.com/scl/fi/4rvm9go6hrz96wqdh3lpg/Radio-X.ogg?rlkey=c9sy9p84hng643ci46preq4pl&st=vv0zqu8r&raw=1", duration: 3469 },
    { name: "SF-UR", logo: "img/SFUR.png", file: "https://www.dropbox.com/scl/fi/plk0bquq892pau0h06xk5/SF-UR.ogg?rlkey=6hz4lfd7f4e6axvmtdh3hdsrp&st=vs46r7j9&raw=1", duration: 3973 },
    { name: "WCTR", logo: "img/WCTR.png", file: "https://www.dropbox.com/scl/fi/zl5jqlhy132qsunbd47o4/West-Coast-Talk-Radio.ogg?rlkey=4400rfyv0cpdvhtzp8o2bflep&st=jmf3rrvk&raw=1", duration: 6599 },
    { name: "Guardians of the Galaxy", logo: "img/Guardians of the Galaxy.png", file: "https://www.dropbox.com/scl/fi/g6uxuktvqu41sa8kv1k6r/Guardians-of-the-Galaxy.ogg?rlkey=wljmxuoa35ulnr62g66ccdvgg&st=ku9pq08h&raw=1", duration: 3217 }
];

let currentIdx = 0;

let isHolding = false;
let holdTimer = null;
let intervalTimer = null;

let tapCount = 0;
let lastTapTime = 0;

let startX = 0;
let startY = 0;
let currentDirection = null; // "right", "left", "down"
let hideTimeout = null;

const audio = document.getElementById("radio-audio");
const menuSfx = document.getElementById("menu-sfx");

const stationLogo = document.getElementById("station-logo");
const stationName = document.getElementById("station-name");

function playMenuSfx() {
    menuSfx.currentTime = 0;
    menuSfx.play().catch(() => {});
}

function getStation(index) {
    const len = stations.length;
    return stations[(index + len) % len];
}

function updateUI(index = currentIdx) {
    const current = getStation(index);

    stationLogo.src = current.logo;
    stationName.textContent = current.name;

    stationLogo.classList.remove("flash");
    requestAnimationFrame(() => {
        stationLogo.classList.add("flash");
    });
}

function applyStation(index) {
    currentIdx = (index + stations.length) % stations.length;
    const station = stations[currentIdx];

    updateUI(currentIdx);
    playMenuSfx();
    audio.pause();

    if (!station.file) {
        audio.src = "";
        return;
    }

    const now = Math.floor(Date.now() / 1000);
    audio.src = station.file;

    audio.onloadedmetadata = () => {
        try {
            audio.currentTime = now % station.duration;
        } catch (err) {}
        audio.play().catch(() => {});
    };

    audio.load();
}

function flashCurrentStation() {
    clearTimeout(hideTimeout);
    document.body.classList.add("holding");

    hideTimeout = setTimeout(() => {
        document.body.classList.remove("holding");
    }, 1000);
}

function nextStation() {
    const next = (currentIdx + 1) % stations.length;
    applyStation(next);
    flashCurrentStation();
}

function previousStation() {
    const prev = (currentIdx - 1 + stations.length) % stations.length;
    applyStation(prev);
    flashCurrentStation();
}

function turnRadioOff() {
    applyStation(0);
    flashCurrentStation();
}

function pointerDown(event) {
    const touch = event.touches ? event.touches[0] : event;
    startX = touch.clientX;
    startY = touch.clientY;
    isHolding = false;
    currentDirection = null;

    clearTimeout(holdTimer);
    clearInterval(intervalTimer);

    holdTimer = setTimeout(() => {
        isHolding = true;
        document.body.classList.add("holding");

        if (currentDirection === "right") {
            nextStation();
            intervalTimer = setInterval(nextStation, 1000);
        } else if (currentDirection === "left") {
            previousStation();
            intervalTimer = setInterval(previousStation, 1000);
        } else if (currentDirection === "down") {
            turnRadioOff();
            intervalTimer = setInterval(turnRadioOff, 1000);
        }
    }, 350);
}

function pointerMove(event) {
    const touch = event.touches ? event.touches[0] : event;
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    // Detectar dirección dominante si se mueve más de 20px
    if (!currentDirection && (Math.abs(deltaX) > 20 || Math.abs(deltaY) > 20)) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            currentDirection = deltaX > 0 ? "right" : "left";
        } else {
            if (deltaY > 0) {
                currentDirection = "down";
            }
        }
    }
}

function pointerUp() {
    clearTimeout(holdTimer);
    clearInterval(intervalTimer);

    if (isHolding) {
        document.body.classList.remove("holding");
        isHolding = false;
        tapCount = 0;
        return;
    }

    const now = Date.now();
    const interval = now - lastTapTime;

    if (interval < 300) {
        tapCount++;
    } else {
        tapCount = 1;
    }

    lastTapTime = now;

    clearTimeout(window.tapTimeout);

    window.tapTimeout = setTimeout(() => {
        if (tapCount === 2) {
            nextStation();
        } else if (tapCount === 3) {
            previousStation();
        }
        tapCount = 0;
    }, 300);
}

window.addEventListener("touchstart", pointerDown, { passive: true });
window.addEventListener("touchmove", pointerMove, { passive: true });
window.addEventListener("touchend", pointerUp);

window.addEventListener("mousedown", pointerDown);
window.addEventListener("mousemove", pointerMove);
window.addEventListener("mouseup", pointerUp);

updateUI();
applyStation(0);
