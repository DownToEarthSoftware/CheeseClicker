// it's just the game logic tbh.

let clickCounter = 0;
        let cheeseCount = 0;

        function handleCheeseClick() {
            clickCounter++;
            cheeseCount++;
            document.getElementById('text-above').textContent = `Cheese Click Counter: ${clickCounter}`;
            playClickSound();

            const cheese = document.getElementById('cheese');
            cheese.style.animation = 'none';
            void cheese.offsetWidth; // Trigger reflow
            cheese.style.animation = 'bounce 0.5s ease';
        }

        function playClickSound() {
            const audio = new Audio('click-sound.mp3'); // Provide path to your sound file
            audio.play();
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
                    // Start auto-click feature
                    setInterval(handleCheeseClick, 1000); // Auto-click every second
                    break;
                case 'cheese-rain':
                    cost = 50;
                    // Increase cheese per click temporarily
                    multiplier = 5;
                    setTimeout(() => {
                        multiplier = 1; // Reset multiplier after 10 seconds
                    }, 10000); // 10 seconds
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
