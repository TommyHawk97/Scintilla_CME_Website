const startYear = 2025; // Set the start year for the copyright notice
/* Error handling and an attempt to update the copyright year */
try {
    const currentYear = new Date().getFullYear(); // Get the current year
    const copyrightYearElement = document.getElementById('copyright-text'); // Get the element with the id 'copyright-text'
    /* Displaying the range of years */
    if (startYear === currentYear) {
        copyrightYearElement.textContent = startYear;
    } else {
        copyrightYearElement.textContent = `${startYear} - ${currentYear}`;
    }
} catch (error) {
    console.error('Error updating copyright year:', error);
}



