let sizes = document.querySelectorAll('#sizeProduct');
let colorProduct = document.querySelectorAll('#colorProduct')
let imgProduct = document.querySelector('.imgProduct')

let allColorProduct = [
    {id:1,src: './IMG/image (1).png'},
    {id:2,src: './IMG/image (2).png'},
    {id:3,src: './IMG/image.png'},
    {id:4,src: './IMG/image (3).png'}
]

sizes.forEach((size) => {
    size.addEventListener('click', (e) => {
        let item = e.target;
        sizes.forEach((s) => {
            s.classList.remove('focus');
        });
        item.classList.add('focus');
    });
});


colorProduct.forEach((color) => {
    color.addEventListener('click', (e) => {
        // console.log(e.target.classList[0]);
        let findIndex = allColorProduct.find((id) => {
            return id.id == e.target.classList[0]
        })
        console.log(findIndex);
        imgProduct.setAttribute('src', findIndex.src)
    })
})