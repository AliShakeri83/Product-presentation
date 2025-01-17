let sizes = document.querySelectorAll('#sizeProduct')

sizes.forEach((size) => {
    size.addEventListener('click', (e) => {
        let item = e.target
        item.className = 'focus'
    })
})