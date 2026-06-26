const stations = [
    { name: "Radio Off", logo: "img/RadioOff.png", file: "", duration: 0 },
    
    { 
        name: "GTA-Sa", 
        logo: "img/san.png", 
        isFolder: true,
        subStations: [
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
            { name: "WCTR", logo: "img/WCTR.png", file: "https://www.dropbox.com/scl/fi/zl5jqlhy132qsunbd47o4/West-Coast-Talk-Radio.ogg?rlkey=4400rfyv0cpdvhtzp8o2bflep&st=jmf3rrvk&raw=1", duration: 6599 }
        ]
    },

    { name: "Guardians of the Galaxy", logo: "img/Guardians of the Galaxy.png", file: "https://www.dropbox.com/scl/fi/g6uxuktvqu41sa8kv1k6r/Guardians-of-the-Galaxy.ogg?rlkey=wljmxuoa35ulnr62g66ccdvgg&st=ku9pq08h&raw=1", duration: 3217 },
    { name: "Futuro", logo: "img/Radio Futuro.png", file: "https://www.dropbox.com/scl/fi/4h7qq2hzlecu2noj31zw2/Radio-Futuro.ogg?rlkey=fdgp0vasf1jxtuigeb3du9xix&st=mmrukwvk&raw=1", duration: 3599 },
    { name: "FlatOut 2", logo: "img/FlatOut.png", file: "https://www.dropbox.com/scl/fi/1z5nx1yqepss72yzn8155/Flatout2.ogg?rlkey=zyknwgn4a8r0s4kymo2ttx01l&st=duu73zkt&raw=1", duration: 5261 },
    { name: "Lo-fi", logo: "img/lofi.png", file: "https://www.dropbox.com/scl/fi/4uftocmw99ge7j01du0kn/Lofi.ogg?rlkey=sc9b3uiauj1sgf09up30hdxlm&st=0enl19m4&raw=1", duration: 1762 },
    { name: "Old School", logo: "img/rege.png", file: "https://www.dropbox.com/scl/fi/d0dnc8d2nboygn9txgc1y/Reggaet-n-viejito-Dj-Ricardo-Mu-oz.ogg?rlkey=uctaxmadvh7sn2onoqtclaslu&st=2oj4sqo5&raw=1", duration: 4048 },
    { name: "Tokyo drift", logo: "img/dri.png", file: "https://www.dropbox.com/scl/fi/oivb6ya2v1wj22flsgdlg/mix_53m02s-_audio-joiner.com_.ogg?rlkey=41ll3guiyo10gsbagxzgaf19a&st=onx9c5p&raw=1", duration: 3182 },
    { name: "Onichan", logo: "img/oni.png", file: "https://www.dropbox.com/scl/fi/40ukb6cf69lce0e3dy9ei/Un-Mill-n-de-Primaveras-_-BOCCHI-THE-ROCK-Vicente-Fern-ndez-_join.ogg?rlkey=qlhkf20nrpkzxrih3k5dncnfb&st=aggagsfm&raw=1", duration: 5028 }
];

let currentIdx = 0;
let subIdx = -1; 
let startX = 0;
let startY = 0;
let actionTriggered = false; 

const audio = document.getElementById("radio-audio");
const menuSfx = document.getElementById("menu-sfx");
const stationLogo = document.getElementById("station-logo");
const stationName = document.getElementById("station-name");

const configToggle = document.getElementById("config-toggle");
const configPanel = document.getElementById("config-panel");
const volumeControl = document.getElementById("volume-control");
const colorControl = document.getElementById("color-control");
const rhythmControl = document.getElementById("rhythm-control");
const rotationControl = document.getElementById("rotation-control");
const radioCard = document.getElementById("radio-card");

let pulseFrameId = null;

const colors = {
    cyan: "#00ffff",
    magenta: "#ff00ff",
    green: "#00ff80",
    yellow: "#ffff00"
};

function playMenuSfx() {
    menuSfx.currentTime = 0;
    menuSfx.play().catch(() => {});
}

function updateUI() {
    let current = (subIdx === -1) ? stations[currentIdx] : stations[currentIdx].subStations[subIdx];

    stationLogo.src = current.logo;
    stationName.textContent = current.name;

    stationLogo.classList.remove("flash");
    requestAnimationFrame(() => {
        stationLogo.classList.add("flash");
    });

    manageRotationState();
}

function applyStation() {
    let station = (subIdx === -1) ? stations[currentIdx] : stations[currentIdx].subStations[subIdx];

    updateUI();
    playMenuSfx();
    audio.pause();

    if (station.isFolder || !station.file) {
        audio.src = "";
        manageRotationState();
        return;
    }

    const now = Math.floor(Date.now() / 1000);
    audio.src = station.file;

    audio.onloadedmetadata = () => {
        try {
            audio.currentTime = now % station.duration;
        } catch (err) {}
        
        audio.play().then(() => {
            manageRotationState();
            if (rhythmControl.checked) startPulseEffect();
        }).catch((e) => {
            console.log("Audio reproducible nativamente:", e);
        });
    };

    audio.load();
}

function nextStation() {
    if (subIdx === -1) {
        currentIdx = (currentIdx + 1) % stations.length;
    } else {
        const subList = stations[currentIdx].subStations;
        subIdx = (subIdx + 1) % subList.length;
    }
    applyStation();
}

function previousStation() {
    if (subIdx === -1) {
        currentIdx = (currentIdx - 1 + stations.length) % stations.length;
    } else {
        const subList = stations[currentIdx].subStations;
        subIdx = (subIdx - 1 + subList.length) % subList.length;
    }
    applyStation();
}

function turnRadioOff() {
    if (subIdx !== -1) {
        subIdx = -1;
    } else {
        currentIdx = 0;
    }
    applyStation();
}

function checkEnterFolder() {
    if (subIdx === -1 && stations[currentIdx].isFolder) {
        subIdx = 0;
        applyStation();
        return true;
    }
    return false;
}

// MANEJO DE CONFIGURACIONES
configToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    configPanel.classList.toggle("hidden");
});

configPanel.addEventListener("click", (e) => {
    if (e.target === configPanel) {
        configPanel.classList.add("hidden");
    }
});

volumeControl.addEventListener("input", (e) => {
    audio.volume = e.target.value;
});

colorControl.addEventListener("change", (e) => {
    const selectedColor = colors[e.target.value];
    document.documentElement.style.setProperty('--cyan', selectedColor);
    document.querySelector('meta[name="theme-color"]').setAttribute("content", selectedColor);
});

rotationControl.addEventListener("change", () => {
    manageRotationState();
});

rhythmControl.addEventListener("change", (e) => {
    if (e.target.checked) {
        startPulseEffect();
    } else {
        stopPulseEffect();
    }
});

function manageRotationState() {
    let isPlaying = !audio.paused && audio.src !== "";
    // Aseguramos la adición/remoción de la clase de rotación en el elemento de la carátula
    if (rotationControl.checked && isPlaying) {
        stationLogo.classList.add("rotating");
    } else {
        stationLogo.classList.remove("rotating");
    }
}

// Efecto procedural independiente de parpadeo neón (Sin problemas de red/CORS)
function startPulseEffect() {
    stopPulseEffect();
    if (!rhythmControl.checked || audio.paused || !audio.src) return;

    function animatePulse() {
        if (audio.paused) {
            radioCard.style.transform = "";
            return;
        }
        let time = performance.now() * 0.007;
        let pulseWave = Math.sin(time) * Math.cos(time * 0.4);
        let scaleFactor = 1 + Math.max(0, pulseWave * 0.025);
        
        radioCard.style.transform = `scale(${scaleFactor})`;
        pulseFrameId = requestAnimationFrame(animatePulse);
    }
    animatePulse();
}

function stopPulseEffect() {
    if (pulseFrameId) {
        cancelAnimationFrame(pulseFrameId);
        pulseFrameId = null;
    }
    radioCard.style.transform = "";
}

// LÓGICA DE GESTOS
function pointerDown(event) {
    if (event.target.closest('#config-panel') || event.target.closest('#config-toggle')) return;
    const touch = event.touches ? event.touches[0] : event;
    startX = touch.clientX;
    startY = touch.clientY;
    actionTriggered = false;
}

function pointerMove(event) {
    if (actionTriggered) return;
    if (event.target.closest('#config-panel') || event.target.closest('#config-toggle')) return;

    const touch = event.touches ? event.touches[0] : event;
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;
    const threshold = 35; 

    if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            document.body.classList.remove("holding-off");
            document.body.classList.add("holding-change");
            
            if (deltaX > 0) {
                nextStation();
            } else {
                previousStation();
            }
            actionTriggered = true;
        } else {
            if (deltaY > 0) {
                document.body.classList.remove("holding-change");
                document.body.classList.add("holding-off");
                turnRadioOff();
                actionTriggered = true;
            } else if (deltaY < 0) {
                if (checkEnterFolder()) {
                    document.body.classList.add("holding-change");
                    actionTriggered = true;
                }
            }
        }
    }
}

function pointerUp() {
    document.body.classList.remove("holding-change", "holding-off");
}

window.addEventListener("touchstart", pointerDown, { passive: true });
window.addEventListener("touchmove", pointerMove, { passive: true });
window.addEventListener("touchend", pointerUp);

window.addEventListener("mousedown", pointerDown);
window.addEventListener("mousemove", pointerMove);
window.addEventListener("mouseup", pointerUp);

updateUI();
