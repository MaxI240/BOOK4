let currentPage = 0;
const pages = document.querySelectorAll('.page');

function togglePage(element, targetPage) {
    if (targetPage === currentPage + 1) {
        element.style.transform = `rotateY(-180deg)`;
        currentPage++;
    } else if (targetPage === currentPage - 1) {
        element.style.transform = `rotateY(0deg)`;
        currentPage--;
    }
    
    // Update z-index for proper stacking
    pages.forEach((page, index) => {
        page.style.zIndex = 100 - Math.abs(index - currentPage);
    });
}

// Event listeners
document.getElementById('responseBtn')?.addEventListener('click', () => {
    alert("YAYY THANK U 😍❤️ , Drop a Message when you're Free ..");
});

// Initialize page z-index
pages.forEach((page, index) => {
    page.style.zIndex = 100 - index;
});
