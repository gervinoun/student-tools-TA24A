const c_css = document.querySelector(".c")
const d_css = document.querySelector(".d")
const e_css = document.querySelector(".e")
const f_css = document.querySelector(".f")
const g_css = document.querySelector(".g")
const a_css = document.querySelector(".a")
const h_css = document.querySelector(".h")
c_css.style = "position: absolute; bottom: 20px; left: 740px; font-size: 50px;";
d_css.style = "position: absolute; bottom: 20px; left: 920px; font-size: 50px;";
e_css.style = "position: absolute; bottom: 20px; left: 1090px; font-size: 50px;";
f_css.style = "position: absolute; bottom: 20px; left: 1250px; font-size: 50px;";
g_css.style = "position: absolute; bottom: 20px; left: 1420px; font-size: 50px;";
a_css.style = "position: absolute; bottom: 20px; left: 1600px; font-size: 50px;";
h_css.style = "position: absolute; bottom: 20px; left: 1770px; font-size: 50px;";
let activeOscillators = {};


addEventListener("keydown", function (nupp) {
    if (nupp.key === "d") {
        if (nupp.key === "d" && !activeOscillators["c"]) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            oscillator.frequency.setValueAtTime(261.63, audioContext.currentTime);
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            oscillator.start();
            activeOscillators["c"] = oscillator;
        } 
        c_css.style = " "
        c_css.style = "position: absolute; bottom: 10px; left: 710px; font-size: 50px; border: green; background-color: green; border-radius: 50px; width: 100px; height: 100px"
     } else if (nupp.key === "f") {
        if (nupp.key === "f" && !activeOscillators["d"]) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            oscillator.frequency.setValueAtTime(293.66, audioContext.currentTime);
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            oscillator.start();
            activeOscillators["d"] = oscillator;
        }
        d_css.style = " "
        d_css.style = "position: absolute; bottom: 10px; left: 890px; font-size: 50px; border: green; background-color: green; border-radius: 50px; width: 100px; height: 100px"
     } else if (nupp.key === "g") {
        if (nupp.key === "g" && !activeOscillators["e"]) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            oscillator.frequency.setValueAtTime(329.63, audioContext.currentTime);
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            oscillator.start();
            activeOscillators["e"] = oscillator;
        }
        e_css.style = " "
        e_css.style = "position: absolute; bottom: 10px; left: 1060px; font-size: 50px; border: green; background-color: green; border-radius: 50px; width: 100px; height: 100px"
     } else if (nupp.key === "h") {
        if (nupp.key === "h" && !activeOscillators["f"]) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime);
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            oscillator.start();
            activeOscillators["f"] = oscillator;
        }
        f_css.style = " "
        f_css.style = "position: absolute; bottom: 10px; left: 1220px; font-size: 50px; border: green; background-color: green; border-radius: 50px; width: 100px; height: 100px";
     } else if (nupp.key === "j") {
        if (nupp.key === "j" && !activeOscillators["g"]) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            oscillator.frequency.setValueAtTime(392.00, audioContext.currentTime);
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            oscillator.start();
            activeOscillators["g"] = oscillator;
        }
        g_css.style = " "
        g_css.style = "position: absolute; bottom: 10px; left: 1390px; font-size: 50px; background-color: green; border-radius: 50px; width: 100px; height: 100px";
     } else if (nupp.key === "k") {
        if (nupp.key === "k" && !activeOscillators["a"]) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            oscillator.frequency.setValueAtTime(440.00, audioContext.currentTime);
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            oscillator.start();
            activeOscillators["a"] = oscillator;
        }
        a_css.style = " "
        a_css.style = "position: absolute; bottom: 10px; left: 1570px; font-size: 50px; background-color: green; border-radius: 50px; width: 100px; height: 100px";
     } else if (nupp.key === "l") {
        if (nupp.key === "l" && !activeOscillators["h"]) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            oscillator.frequency.setValueAtTime(493.88, audioContext.currentTime);
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            oscillator.start();
            activeOscillators["h"] = oscillator;
        }
        h_css.style = " "
        h_css.style = "position: absolute; bottom: 10px; left: 1740px; font-size: 50px; background-color: green; border-radius: 50px; width: 100px; height: 100px";
     }
}); 

addEventListener("keyup", function (nupper) {
    if (nupper.key === "d") {
        if (activeOscillators["c"]) {
            activeOscillators["c"].stop();
            delete activeOscillators["c"];
        }
        
        c_css.style = " "
        c_css.style = "position: absolute; bottom: 20px; left: 740px; font-size: 50px;";
        
    } else if (nupper.key === "f") {
        if (activeOscillators["d"]) {
            activeOscillators["d"].stop();
            delete activeOscillators["d"];
        }
        d_css.style = " "
        d_css.style = "position: absolute; bottom: 20px; left: 920px; font-size: 50px;";
    } else if (nupper.key === "g") {
        if (activeOscillators["e"]) {
            activeOscillators["e"].stop();
            delete activeOscillators["e"];
        }
        e_css.style = " "
        e_css.style = "position: absolute; bottom: 20px; left: 1090px; font-size: 50px;"
    } else if (nupper.key === "h") {
        if (activeOscillators["f"]) {
            activeOscillators["f"].stop();
            delete activeOscillators["f"];
        }
        f_css.style = " "
        f_css.style = "position: absolute; bottom: 20px; left: 1250px; font-size: 50px;";
    } else if (nupper.key === "j") {
        if (activeOscillators["g"]) {
            activeOscillators["g"].stop();
            delete activeOscillators["g"];
        }
        g_css.style = " "
        g_css.style = "position: absolute; bottom: 20px; left: 1420px; font-size: 50px;";
    } else if (nupper.key === "k") {
        if (activeOscillators["a"]) {
            activeOscillators["a"].stop();
            delete activeOscillators["a"];
        }
        a_css.style = " "
        a_css.style = "position: absolute; bottom: 20px; left: 1600px; font-size: 50px;";
    } else if (nupper.key === "l") {
        if (activeOscillators["h"]) {
            activeOscillators["h"].stop();
            delete activeOscillators["h"];
        }
        h_css.style = " "
        h_css.style = "position: absolute; bottom: 20px; left: 1770px; font-size: 50px;";
    } 
});


function getfrequencynote(note) {
    c; 261.63,
    d; 293.66,
    e; 329.63,
    f; 349.23,
    g; 392.00,
    a; 440.00,
    h; 493.88
}