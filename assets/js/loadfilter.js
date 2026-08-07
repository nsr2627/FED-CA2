// Save this as load-filter.js
document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById('filter-sidebar-placeholder');
    
    if (!placeholder) return; // Exit if the page doesn't have a filter placeholder

    fetch('filter.html')
        .then(response => response.text())
        .then(htmlData => {
            placeholder.innerHTML = htmlData;
            initializeFilterActions(); // Connect the buttons after HTML loads
        })
        .catch(err => console.error("Could not load filter element:", err));
});

function initializeFilterActions() {
    const applyBtn = document.getElementById('apply-filter-btn');
    if (!applyBtn) return;

    applyBtn.addEventListener('click', () => {
        // 1. Gather all checked boxes
        const checkedPrices = [];
        if (document.getElementById('under5').checked) checkedPrices.push('under5');
        if (document.getElementById('5to10').checked) checkedPrices.push('5to10');
        if (document.getElementById('above10').checked) checkedPrices.push('above10');

        const checkedAreas = [];
        ['Bugis', 'Clementi', 'Chinatown', 'Dover', 'Orchard'].forEach(area => {
            if (document.getElementById(area).checked) {
                checkedAreas.push(area);
            }
        });

        // 2. Send these filters to your main page function
        if (typeof applyPageFilters === "function") {
            applyPageFilters(checkedPrices, checkedAreas);
        } else {
            console.log("Filters selected, but applyPageFilters() is not defined on this page.", { checkedPrices, checkedAreas });
        }
    });
}
