console.log("Welcome to MuziGeet - Har Dhun Mai Beat Hai");

// Initialize the Variables
let GeetIndex = 0;
let audioElement = new Audio('Geets/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let GeetprogressBar = document.getElementById('GeetprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let GeetItems = Array.from(document.getElementsByClassName('GeetItem'));


let Geets = [
    { GeetName: "Kesariya From (Brahmastra)", filePath: "Geets/1.mp3", coverPath: "Covers/1.jpg" },
    { GeetName: "Laare Chootee (Call)", filePath: "Geets/2.mp3", coverPath: "Covers/2.jpg" },
    { GeetName: "Never Fold (feat. Sunny Malton)", filePath: "Geets/3.mp3", coverPath: "Covers/3.jpg" },
    { GeetName: "295 (Sidhu Moose Wala)", filePath: "Geets/4.mp3", coverPath: "Covers/4.jpg" },
    { GeetName: "Tu Hi Das De", filePath: "Geets/5.mp3", coverPath: "Covers/5.jpg" },
    { GeetName: "Maiyya Mainu(From Jersey)", filePath: "Geets/6.mp3", coverPath: "Covers/6.jpg" },
    { GeetName: "Ishq Bulaava", filePath: "Geets/7.mp3", coverPath: "Covers/7.jpg" },
    { GeetName: "Excuses(AP Dhillon)", filePath: "Geets/8.mp3", coverPath: "Covers/8.jpg" },
    { GeetName: "Elevated(Shubh)", filePath: "Geets/9.mp3", coverPath: "Covers/9.jpg" },
    { GeetName: "Notorious (Wazir Patar)", filePath: "Geets/10.mp3", coverPath: "Covers/10.jpg" },
    { GeetName: "Aukaat (Jassie Gill)", filePath: "Geets/11.mp3", coverPath: "Covers/11.jpg" },
    { GeetName: "Dil Mere(The Local Train", filePath: "Geets/12.mp3", coverPath: "Covers/21.jpg" },
    { GeetName: "Zakir (NAALAYAK)", filePath: "Geets/13.mp3", coverPath: "Covers/22.jpg" },
    { GeetName: "Peaches (Diljit Dosanjh)", filePath: "Geets/14.mp3", coverPath: "Covers/23.jpg" },
    { GeetName: "Jiyein Kyun (Pritam, Papon)", filePath: "Geets/15.mp3", coverPath: "Covers/24.jpg" },
    { GeetName: "Choo Lo (The Local Train)", filePath: "Geets/16.mp3", coverPath: "Covers/25.jpg" },
    { GeetName: "Dhaka (Sidhu Mossewala)", filePath: "Geets/17.mp3", coverPath: "Covers/26.jpg" },
    { GeetName: "Barood Wargi (Simran Kaur Dhadli)", filePath: "Geets/18.mp3", coverPath: "Covers/27.jpg" },
    { GeetName: "Ek Tarfa (Darshan Raval)", filePath: "Geets/19.mp3", coverPath: "Covers/28.jpg" },
    { GeetName: "We Rollin' (Shubh)", filePath: "Geets/20.mp3", coverPath: "Covers/29.jpg" },
    { GeetName: "Kina Chirr (The Prophec)", filePath: "Geets/21.mp3", coverPath: "Covers/210.jpg" },
]


GeetItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = Geets[i].coverPath;
    element.getElementsByClassName("GeetName")[0].innerText = Geets[i].GeetName;
})



// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    GeetprogressBar.value = progress;
})

GeetprogressBar.addEventListener('change', () => {
    audioElement.currentTime = GeetprogressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('GeetItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('GeetItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        GeetIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Geets/${GeetIndex + 1}.mp3`;
        masterSongName.innerText = Geets[GeetIndex].GeetName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (GeetIndex >= 9) {
        GeetIndex = 0
    }
    else {
        GeetIndex += 1;
    }
    audioElement.src = `Geets/${GeetIndex + 1}.mp3`;
    masterSongName.innerText = Geets[GeetIndex].GeetName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (GeetIndex <= 0) {
        GeetIndex = 0
    }
    else {
        GeetIndex -= 1;
    }
    audioElement.src = `Geets/${GeetIndex + 1}.mp3`;
    masterSongName.innerText = Geets[GeetIndex].GeetName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



/*

let GeetIndex1 = 0;
let audioElement1 = new Audio('Geets/21.mp3');
/*let masterPlay = document.getElementById('masterPlay');
let GeetprogressBar = document.getElementById('GeetprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let GeetItems1 = Array.from(document.getElementsByClassName('GeetItem1'));

let Geets1 =[
    { Geet1Name: "Dil Mere(The Local Train", filePath: "Geets/21.mp3", coverPath: "covers/21.jpg" },
    { Geet1Name: "Zakir (NAALAYAK)", filePath: "Geets/22.mp3", coverPath: "covers/22.jpg" },
    { Geet1Name: "Peaches (Diljit Dosanjh)", filePath: "Geets/23.mp3", coverPath: "covers/23.jpg" },
    { Geet1Name: "Jiyein Kyun (Pritam, Papon)", filePath: "Geets/24.mp3", coverPath: "covers/24.jpg" },
    { Geet1Name: "Choo Lo (The Local Train)", filePath: "Geets/25.mp3", coverPath: "covers/25.jpg" },
    { Geet1Name: "Dhaka (Sidhu Mossewala)", filePath: "Geets/26.mp3", coverPath: "covers/26.jpg" },
    { Geet1Name: "Barood Wargi (Simran Kaur Dhadli)", filePath: "Geets/27.mp3", coverPath: "covers/27.jpg" },
    { Geet1Name: "Ek Tarfa (Darshan Raval)", filePath: "Geets/28.mp3", coverPath: "covers/28.jpg" },
    { Geet1Name: "We Rollin' (Shubh)", filePath: "Geets/29.mp3", coverPath: "covers/29.jpg" },
    { Geet1Name: "Kina Chirr (The Prophec)", filePath: "Geets/210.mp3", coverPath: "covers/210.jpg" },
    
]

GeetItems1.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = Geets1[i].coverPath;
    element.getElementsByClassName("Geet1Name")[0].innerText = Geets1[i].Geet1Name;
})

// Handle play/pause click
masterPlay.addEventListener1('click', () => {
    if (audioElement1.paused || audioElement1.currentTime <= 0) {
        audioElement1.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement1.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement1.addEventListener1('timeupdate', () => {
    // Update Seekbar
    progress1 = parseInt((audioElement1.currentTime / audioElement1.duration) * 100);
    GeetprogressBar.value = progress1;
})

GeetprogressBar.addEventListener1('change', () => {
    audioElement1.currentTime = GeetprogressBar.value * audioElement1.duration / 100;
})

const makeAllPlays1 = () => {
    Array.from(document.getElementsByClassName('GeetItem1Play')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('GeetItem1Play')).forEach((element) => {
    element.addEventListener1('click', (e) => {
        makeAllPlays1();
        GeetIndex1 = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement1.src = `Geets/${GeetIndex1 + 1}.mp3`;
        masterSongName.innerText = Geets1[GeetIndex1].Geet1Name;
        audioElement1.currentTime = 0;
        audioElement1.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener1('click', () => {
    if (GeetIndex1 >= 9) {
        GeetIndex1 = 0
    }
    else {
        GeetIndex1 += 1;
    }
    audioElement1.src = `Geets/${GeetIndex1 + 1}.mp3`;
    masterSongName.innerText = Geets1[GeetIndex1].Geet1Name;
    audioElement1.currentTime = 0;
    audioElement1.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener1('click', () => {
    if (GeetIndex1 <= 0) {
        GeetIndex1 = 0
    }
    else {
        GeetIndex1 -= 1;
    }
    audioElement1.src = `Geets/${GeetIndex1 + 1}.mp3`;
    masterSongName.innerText = Geets1[GeetIndex1].Geet1Name;
    audioElement1.currentTime = 0;
    audioElement1.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
*/



