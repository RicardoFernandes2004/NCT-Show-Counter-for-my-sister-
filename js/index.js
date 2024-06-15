let title = document.getElementById('title_selected');

document.querySelectorAll('svg').forEach((img) => {
    img.addEventListener('click', function() {

        const text = this.getAttribute('data-text');
        if (text) {
            title.textContent = text
        }

    });
});
