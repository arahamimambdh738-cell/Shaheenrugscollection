document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Disable Right Click Context Menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // 2. Disable Image Dragging
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });

    // 3. Prevent Keyboard shortcuts for saving (Ctrl+S, Ctrl+U etc - Optional but good for protection)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u')) {
            e.preventDefault();
        }
    });

    console.log("Shaheen Rugs - Secure Mode Active");
});