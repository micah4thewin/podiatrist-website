document.addEventListener('DOMContentLoaded', () => {
    const MAX_LENGTH = 200;

    const paragraphs = document.querySelectorAll('.text-dark.mb-auto.muted.fs-6');

    paragraphs.forEach(paragraph => {
        const originalText = paragraph.textContent;

        if (originalText.length > MAX_LENGTH) {
            const trimmedText = originalText.slice(0, MAX_LENGTH) + '... ';
            paragraph.textContent = trimmedText;

            const toggleLink = document.createElement('a');
            toggleLink.href = '#';
            toggleLink.textContent = 'Read More';
            toggleLink.style.cursor = 'pointer';
            toggleLink.style.color = '#007BFF'; // Bootstrap primary color for links

            toggleLink.addEventListener('click', (event) => {
                event.preventDefault();
                if (toggleLink.textContent === 'Read More') {
                    toggleLink.textContent = ' Read Less';
                    paragraph.textContent = originalText + ' ';
                } else {
                    toggleLink.textContent = 'Read More';
                    paragraph.textContent = trimmedText;
                }
                paragraph.appendChild(toggleLink);
            });

            paragraph.appendChild(toggleLink);
        }
    });
});
