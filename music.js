        let clickCounter = 0;
        let cheeseCount = 0;
        let isMusicPlaying = true;

        function handleCheeseClick() {
            clickCounter++;
            cheeseCount++;
            document.getElementById('text-above').textContent = `Cheese Click Counter: ${clickCounter}`;
            playClickSound();

            const cheese = document.getElementById('cheese');
            cheese.style.animation = 'none';
            void cheese.offsetWidth;
            cheese.style.animation = 'bounce 0.5s ease';
        }

        function playClickSound() {
            const audio = new Audio('click-sound.mp3');
            audio.play();
        }

        function toggleBackgroundMusic() {
            const audio = document.getElementById('background-music');

            if (isMusicPlaying) {
                audio.pause();
                document.getElementById('music-control').innerHTML = '<i class="fas fa-play"></i>';
            } else {
                audio.play();
                document.getElementById('music-control').innerHTML = '<i class="fas fa-pause"></i>';
            }

            isMusicPlaying = !isMusicPlaying;
        }
