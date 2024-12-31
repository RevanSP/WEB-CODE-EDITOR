const leftColumn = document.getElementById('leftColumn');
const rightColumn = document.getElementById('rightColumn');
const toggleBtn = document.getElementById('toggleBtn');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');
const overlay = document.getElementById('overlay');
let isCollapsed = false;
let lastInnerWidth = window.innerWidth;

function toggleSidebar() {
    isCollapsed = !isCollapsed;
    
    if (window.innerWidth >= 768) {
        if (isCollapsed) {
            leftColumn.classList.add('md:w-0', 'md:opacity-0', 'md:invisible', 'md:p-0', 'md:m-0');
            rightColumn.classList.add('md:w-full');
        } else {
            leftColumn.classList.remove('md:w-0', 'md:opacity-0', 'md:invisible', 'md:p-0', 'md:m-0');
            rightColumn.classList.remove('md:w-full');
        }
    } else {
        if (isCollapsed) {
            leftColumn.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        } else {
            leftColumn.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }
    }
}

function initializeLayout() {
    if (window.innerWidth === lastInnerWidth) return;
    
    lastInnerWidth = window.innerWidth;
    
    if (window.innerWidth < 768) {
        isCollapsed = true;
        leftColumn.classList.add('-translate-x-full');
    } else {
        isCollapsed = false;
        leftColumn.classList.remove('-translate-x-full', 'md:w-0', 'md:opacity-0', 'md:invisible', 'md:p-0', 'md:m-0');
        rightColumn.classList.remove('md:w-full');
    }
}

toggleBtn.addEventListener('click', toggleSidebar);
mobileCloseBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initializeLayout, 250);
});

initializeLayout();