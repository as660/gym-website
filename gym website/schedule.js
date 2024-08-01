// schedule.js

// Example: Filter schedule by class type
document.getElementById('filterClasses').addEventListener('change', function() {
    const filterValue = this.value.toLowerCase();
    const scheduleRows = document.querySelectorAll('.schedule-table tr');

    scheduleRows.forEach(row => {
        const classType = row.getAttribute('data-class-type');
        if (classType && classType.includes(filterValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Highlight the current class (optional)
function highlightCurrentClass() {
    const currentTime = new Date();
    const scheduleRows = document.querySelectorAll('.schedule-table tr');

    scheduleRows.forEach(row => {
        const startTime = new Date(row.getAttribute('data-start-time'));
        const endTime = new Date(row.getAttribute('data-end-time'));

        if (currentTime >= startTime && currentTime <= endTime) {
            row.classList.add('current-class');
        } else {
            row.classList.remove('current-class');
        }
    });
}

// Run highlight function initially and every minute
highlightCurrentClass();
setInterval(highlightCurrentClass, 60000);


