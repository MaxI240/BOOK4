// Initialize book state
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

// Configure initial page states
function initializeBook() {
    pages.forEach((page, index) => {
        page.style.zIndex = totalPages - index;
        page.style.transform = index === 0 ? 'rotateY(0deg)' : 'rotateY(-180deg)';
        page.classList.add(index === 0 ? 'active' : 'inactive');
    });
}

// Handle page flipping
function movePage(element, targetPage) {
    if (targetPage < 0 || targetPage >= totalPages) return;
    
    const isNextPage = targetPage > currentPage;
    const direction = isNextPage ? -1 : 1;
    
    // Update current page
    currentPage = targetPage;
    
    // Animate page flip
    element.style.transform = `rotateY(${isNextPage ? -180 : 0}deg)`;
    
    // Update page stacking
    pages.forEach((page, index) => {
        const newZIndex = totalPages - Math.abs(currentPage - index);
        page.style.zIndex = newZIndex;
        
        // Automatically flip previous pages when going back
        if (!isNextPage && index >= currentPage) {
            page.style.transform = 'rotateY(-180deg)';
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', initializeBook);
document.getElementById('botao1')?.addEventListener('click', () => {
    alert("YAYY THANK U 😍❤️ , Drop a Message when you're Free ..");
});

// Add swipe support for mobile
let touchStartX = 0;
document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    
    if (Math.abs(deltaX) > 50) {
        const targetPage = deltaX > 0 ? currentPage + 1 : currentPage - 1;
        const pageElement = document.querySelector(`[onclick*="${targetPage}"]`);
        if (pageElement) movePage(pageElement, targetPage);
    }
});
