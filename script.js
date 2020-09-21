/*
Selector Shortcut
*/
const $i = a => {
    return document.getElementById(a);
}
const $c = a => {
    return document.getElementsByClassName(a);
}
const $q = a => {
    return document.querySelector(a);
}
const $qA = a => {
    return document.querySelectorAll(a);
}
/**/

// error multi message
const playMulti = $i("playmulti");
const playMultiOpen = $i("error-message");

playMulti.addEventListener("click", () => {
    playMultiOpen.classList.toggle('hide');
});

// SOUNDS //
// main menu
const playSingle = $i('playsingle');
const playSingleAudio = $q('.playsingle-audio');

playSingle.addEventListener('click', () => {

    playSingleAudio.currentTime = 1
    playSingleAudio.play()
})

const playMultiAudio = $q('.playmulti-audio');

playMulti.addEventListener('click', () => {

    playMultiAudio.currentTime = 0
    playMultiAudio.play()
})

const bodyVenom = $c('skin-container')[0];
const venomSkinAudio = $q('.venom-skin-audio');

bodyVenom.addEventListener('mouseover', () => {
    venomSkinAudio.currentTime = 30.0
    venomSkinAudio.play()
})
bodyVenom.addEventListener('mouseout', () => {
    venomSkinAudio.pause()
    venomSkinAudio.currentTime = 30.0
    
})
// mob buttons
const catButton = $i('cat')
const catAudio = $q('.cat-audio');

catButton.addEventListener('click', () => {

    catAudio.currentTime = 0
    catAudio.play()
})

const cowButton = $i('cow')
const cowAudio = $q('.cow-audio');

cowButton.addEventListener('click', () => {

    cowAudio.currentTime = 0
    cowAudio.play()
})

const creeperButton = $i('creeper')
const creeperAudio = $q('.creeper-audio');

creeperButton.addEventListener('click', () => {

    creeperAudio.currentTime = 0
    creeperAudio.play()
})

const zombieButton = $i('zombie')
const zombieAudio = $q('.zombie-audio');

zombieButton.addEventListener('click', () => {

    zombieAudio.currentTime = 0
    zombieAudio.play()
})

const skeletonButton = $i('skeleton')
const skeletonAudio = $q('.skeleton-audio');

skeletonButton.addEventListener('click', () => {

    skeletonAudio.currentTime = 0
    skeletonAudio.play()
})

const ghastButton = $i('ghast')
const ghastAudio = $q('.ghast-audio');

ghastButton.addEventListener('click', () => {

    ghastAudio.currentTime = 0
    ghastAudio.play()
})

//progress bar 
let section2Content = document.querySelectorAll('#section2>div:not(#progressbar)');
let progressBar = document.getElementById('progressbar');

$i('playsingle').addEventListener('click',()=>{
    $i('section2').classList.add('active')
    setTimeout(()=>{
        section2Content[0].style.display = "block"
        section2Content[1].style.display = "flex"
        progressBar.style.display = 'none';
        $i('section2').classList.add('perso')
    }, 6000);
})




