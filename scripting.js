        let clickCounter = 0;
        let cheeseCount = 0;
        let isDarkMode = false;

        function handleCheeseClick() {
            clickCounter++;
            cheeseCount++;
            updateCounter();

            const cheese = document.getElementById('cheese-image');

            // Trigger bounce animation
            cheese.style.animation = 'none';
            void cheese.offsetWidth; // Force reflow to reset animation
            cheese.style.animation = 'bounce 0.5s ease';
        }

        function updateCounter() {
            document.getElementById('text-above').textContent = `Cheese Click Counter: ${clickCounter}`;
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
                updateCounter();
            } else {
                alert('Not enough cheese to buy this power-up!');
            }
        }

        function toggleMenu(menuId) {
            const menu = document.getElementById(menuId);
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }

        function closeMenu(menuId) {
            document.getElementById(menuId).style.display = 'none';
        }

        function toggleMode() {
            const body = document.body;
            const modeIcon = document.getElementById('mode-icon');

            isDarkMode = !isDarkMode;

            if (isDarkMode) {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
                modeIcon.className = 'fas fa-sun'; // Change icon to sun for dark mode
            } else {
                body.classList.add('light-mode');
                body.classList.remove('dark-mode');
                modeIcon.className = 'fas fa-moon'; // Change icon to moon for light mode
            }
        }

        // Add event listener for a custom key (e.g., 'Ctrl' key, keyCode 17)
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 17) { // This checks for the 'Ctrl' key
                handleCheeseClick(); // Simulate clicking the cheese when the 'Ctrl' key is pressed
            }
        });
