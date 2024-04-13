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

        function toggleShopMenu() {
            const shopMenu = document.getElementById('shop-menu');
            shopMenu.style.display = shopMenu.style.display === 'block' ? 'none' : 'block';
        }

        function closeShopMenu() {
            document.getElementById('shop-menu').style.display = 'none';
        }

        function buyPowerUp(powerUp) {
            let cost = 0;
            let multiplier = 1;

            switch (powerUp) {
                case 'double-click':
                    cost = 10;
                    multiplier = 2;
                    break;
                case 'auto-click':
                    cost = 20;
                    setInterval(handleCheeseClick, 1000);
                    break;
                case 'cheese-rain':
                    cost = 50;
                    multiplier = 5;
                    setTimeout(() => {
                        multiplier = 1;
                    }, 10000);
                    break;
                default:
                    return;
            }

            if (cheeseCount >= cost) {
                cheeseCount -= cost;
                clickCounter *= multiplier;
                document.getElementById('text-above').textContent = `Cheese Click Counter: ${clickCounter}`;
                closeShopMenu();
            } else {
                alert('Not enough cheese to buy this power-up!');
            }
        }

        // Add event listener for a custom key (e.g., 'A' key, keyCode 65)
        document.addEventListener('keydown', function(event) {
            // Change '65' to the desired keyCode of the key you want to use
            if (event.keyCode === 17) { // This checks for the 'A' key
                handleCheeseClick(); // Simulate clicking the cheese when the 'A' key is pressed
            }
        });
