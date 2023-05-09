document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');

        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('show');
            if (content.id === tab.dataset.target) content.classList.add('show')
        });
    });
});
