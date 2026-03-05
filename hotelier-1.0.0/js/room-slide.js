document.addEventListener("DOMContentLoaded", () => {
    const row = document.querySelector(".row.g-4");
    const slides = row.children;

    // Bungkus row tanpa ubah HTML asli
    const wrapper = document.createElement("div");
    wrapper.className = "room-slider-wrapper";

    row.parentNode.insertBefore(wrapper, row);
    wrapper.appendChild(row);

    row.classList.add("room-slider-track");

    // Tombol
    const prev = document.createElement("button");
    const next = document.createElement("button");

    prev.innerHTML = "❮";
    next.innerHTML = "❯";

    prev.className = "room-slider-btn prev";
    next.className = "room-slider-btn next";

    wrapper.appendChild(prev);
    wrapper.appendChild(next);

    let index = 0;

    function slidesToShow() {
        if (window.innerWidth < 576) return 1;
        if (window.innerWidth < 992) return 2;
        return 3;
    }

    function updateSlider() {
        const slideWidth = slides[0].offsetWidth;
        row.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    // === LOOPING LOGIC ===
    next.addEventListener("click", () => {
        if (index < slides.length - slidesToShow()) {
            index++;
        } else {
            index = 0; // Kembali ke awal
        }
        updateSlider();
    });

    prev.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - slidesToShow(); // Lompat ke akhir
        }
        updateSlider();
    });

    window.addEventListener("resize", updateSlider);
});
