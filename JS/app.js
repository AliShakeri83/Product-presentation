let sizes = document.querySelectorAll('#sizeProduct');

sizes.forEach((size) => {
    size.addEventListener('click', (e) => {
        let item = e.target;
        sizes.forEach((s) => {
            s.classList.remove('focus');
        });
        item.classList.add('focus');
    });
});
