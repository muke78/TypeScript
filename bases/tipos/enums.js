"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["superBajo"] = 0] = "superBajo";
        AudioLevel[AudioLevel["muyBajo"] = 1] = "muyBajo";
        AudioLevel[AudioLevel["bajo"] = 2] = "bajo";
        AudioLevel[AudioLevel["medioBajo"] = 3] = "medioBajo";
        AudioLevel[AudioLevel["medio"] = 4] = "medio";
        AudioLevel[AudioLevel["medioAlto"] = 5] = "medioAlto";
        AudioLevel[AudioLevel["alto"] = 6] = "alto";
        AudioLevel[AudioLevel["muyAlto"] = 7] = "muyAlto";
        AudioLevel[AudioLevel["superAlto"] = 8] = "superAlto";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.muyBajo;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
