let video = document.querySelector(".video")
let mute = document.querySelector("#mute");
let slider = document.querySelector("#slider")
let volume = document.querySelector("#volume")


// upon loading the page, show video thumbnail with autoplay off
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.preload = true;
});


// when play button is clicked, video begins playing
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = `${video.volume * 100}%`;
});


// when pause button is clicked, video pauses
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


// when slow down button is clicked, video is slowed by 10%
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate = video.playbackRate * 0.9;
	console.log(`New speed: ${video.playbackRate}`);
})


// when speed up button is clicked, video speed increases proportionally to slow down
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video");
	video.playbackRate = video.playbackRate / 0.9;
	console.log(`New speed: ${video.playbackRate}`);
})


// skip ahead button when clicked, advances video by 10 secs
document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip");
	console.log(`Video current time is ${video.currentTime}`);
	if (video.currentTime < video.duration - 10) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
})


// when mute button is clicked, video is muted and the text changes to unmute and vice versa
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (mute.innerHTML == "Mute"){
		// change button text
		mute.innerHTML = "Unmute";
		// mute audio
		video.volume = 0;
		slider.value = 0;
		volume.innerHTML = "0%";
	} else {
		// change button text
		mute.innerHTML = "Mute";
		// unmute audio
		video.volume = 1;
		slider.value = 100;
		volume.innerHTML = "100%";
	}
})


// implement volume slider
document.querySelector("#slider").addEventListener("change", function() {
	console.log("volume slide");
	volume.innerHTML = `${slider.value}%`;
	video.volume = slider.value/100;
	console.log(video.volume);
})


//change video class to old school
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("old school");
	video.classList.add('oldSchool');
})


// change video class back to default
document.querySelector("#orig").addEventListener("click", function() {
	console.log("original styling");
	video.classList.remove('oldSchool');
})

