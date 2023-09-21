// Get references to the video and audio elements
const video = document.getElementById("myVideo");
const backgroundMusic = document.getElementById("backgroundMusic");

// Set the playback rate to slow down the video (e.g., 0.5 for half speed)
video.playbackRate = 0.5; // Adjust the value to control the playback speed (0.5 for half speed, 2 for double speed, etc.)

// Play the audio
backgroundMusic.play();

// Adjust the volume of the background music (0.5 for half volume, 1 for full volume)
backgroundMusic.volume = 0.5; // Adjust the value as needed
