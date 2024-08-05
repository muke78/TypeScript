(() => {

    enum AudioLevel {
        superBajo,
        muyBajo,
        bajo,
        medioBajo,
        medio,
        medioAlto,
        alto,
        muyAlto,
        superAlto
    }

    let currentAudio = AudioLevel.muyBajo


    console.log(currentAudio);
    console.log(AudioLevel);


})()