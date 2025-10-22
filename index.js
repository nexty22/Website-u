<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CyberX Music Player</title>
<style>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #121212;
    color: #fff;
    font-family: Arial, sans-serif;
    transition: background-color 0.3s;
  }

  #playBtn {
    padding: 15px 40px;
    font-size: 18px;
    border: none;
    border-radius: 15px;
    background: linear-gradient(45deg, #ff6a00, #ee0979);
    color: white;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(238,9,121,0.7);
    transition: all 0.3s ease;
  }

  #playBtn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(255,106,0,0.8);
  }
</style>
</head>
<body>

<h2>🎵 CyberX Music Player</h2>

<!-- Audio element -->
<audio id="bgMusic" src="https://raw.githubusercontent.com/nexty22/Website-u/main/song.mp3"></audio>

<!-- Play / Pause button -->
<button id="playBtn">Play</button>

<script>
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("playBtn");

  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play().catch(err => {
        alert("Audio play nahi ho raha, browser restriction ya file issue ho sakta hai.");
        console.log(err);
      });
      btn.textContent = "Pause";
    } else {
      music.pause();
      btn.textContent = "Play";
    }
  });
</script>

</body>
</html>
