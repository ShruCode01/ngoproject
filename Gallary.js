const images = [
    "s14.jpg","s15.jpg","s16.jpg","s17.jpg","s18.jpg","s19.jpg",
    "s21.jpg","s23.jpg","s24.jpg","s25.jpg","s26.jpg","s27.jpg",

    "s14.jpg","s15.jpg","s16.jpg","s17.jpg","s18.jpg","s19.jpg",
    "s21.jpg","s23.jpg","s24.jpg","s25.jpg","s26.jpg","s27.jpg",

    "s14.jpg","s15.jpg","s16.jpg","s17.jpg","s18.jpg","s19.jpg",
    "s21.jpg","s23.jpg","s24.jpg","s25.jpg","s26.jpg","s27.jpg"
];

const imagesPerPage = 12;
let currentPage = 1;

const gallery = document.getElementById("gallery");
const pageNumbers = document.getElementById("pageNumbers");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function showImages() {
    gallery.innerHTML = "";

    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    images.slice(start, end).forEach(img => {
        gallery.innerHTML += `
            <div class="gallery-item">
                <img src="${img}">
            </div>
        `;
    });
}

function showPagination() {
    pageNumbers.innerHTML = "";
    const totalPages = Math.ceil(images.length / imagesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const a = document.createElement("a");
        a.href = "#";
        a.innerText = i;

        if (i === currentPage) a.classList.add("active");

        a.onclick = () => {
            currentPage = i;
            update();
        };

        pageNumbers.appendChild(a);
    }

    prev.classList.toggle("disabled", currentPage === 1);
    next.classList.toggle("disabled", currentPage === totalPages);
}

prev.onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        update();
    }
};

next.onclick = () => {
    const totalPages = Math.ceil(images.length / imagesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        update();
    }
};

function update() {
    showImages();
    showPagination();
}

update();
