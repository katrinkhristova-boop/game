// Add interactivity to the website

document.addEventListener('DOMContentLoaded', function() {
    // Play button click handler
    const playButtons = document.querySelectorAll('.btn-primary');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('🎮 Game starting soon! Get ready for your adventure!');
            console.log('Play button clicked');
        });
    });

    // Smooth scroll animation
    const scrollElements = document.querySelectorAll('.feature-card, .control-item, .resource-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    scrollElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });

    // Keyboard navigation hints
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || 
            event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            console.log('Arrow key pressed: ' + event.key);
        }
    });

    // Add some dragon animation on page load
    const dragonImage = document.querySelector('.dragon-hero');
    if (dragonImage) {
        dragonImage.style.animation = 'dragonFloat 3s ease-in-out infinite';
    }

    console.log('Dragon Labyrinth website loaded successfully!');
});

// Drag and drop interaction (for future game integration)
let draggedElement = null;

document.addEventListener('dragstart', function(event) {
    if (event.target.classList.contains('draggable')) {
        draggedElement = event.target;
        event.target.style.opacity = '0.5';
    }
});

document.addEventListener('dragend', function(event) {
    if (event.target.classList.contains('draggable')) {
        event.target.style.opacity = '1';
        draggedElement = null;
    }
});

// Add dragon float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes dragonFloat {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(style);
