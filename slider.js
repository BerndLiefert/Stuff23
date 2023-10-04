"use strict";

class App {
    constructor(slides, current) {
        /* slides NodeList */
        this.slides = Array.from(slides);
        this.current = current;
    }

    show() {
        this.slides[this.current].style.setProperty("top", 0);
        this.slides[this.current].style.setProperty("opacity", 1);
    }

    /**
     * scroll direction v
     */
    up() {
        if (this.current === this.slides.length - 1) { return; };
        this.current++;

        this.show();
        this.slides[this.current - 1].style.setProperty("top", "-50vh");
        this.slides[this.current - 1].style.setProperty("opacity", 0);
    }

    /**
     * scroll direction ^
     */
    down() {
        if (this.current <= 0) { return; };
        this.current--;

        this.show();
        this.slides[this.current + 1].style.setProperty("top", "100vh");
        //this.slides[this.current + 1].style.setProperty("opacity", 1);
    }

    page(index) {
        this.current = index;
        this.order();
        this.show();
        console.log(this.current);
    }

    order() {
        let slidesBefore = this.slides.slice(0, this.current);
        let slidesAfter = this.slides.slice(this.current + 1, this.slides.length);

        slidesBefore.forEach((element) => {
            element.style.setProperty("top", "-50vh");
            element.style.setProperty("opacity", 0);
        });

        slidesAfter.forEach((element) => {
            element.style.setProperty("top", "100vh");
            element.style.setProperty("opacity", 1);
        });
    }
}

let slides = document.querySelectorAll(".slide");
let app = new App(slides, 0);
let scroll = false;

document.body.addEventListener("wheel", (event) => {
    console.log({ event });

    if (scroll)
        return;

    if (event.deltaY > 0) {
        //scroll down
        app.up();
    } else {
        //scroll up
        app.down();
    }
});

onresize = () => {
    if (window.innerWidth < 600) {
        scroll = true;
        document.body.classList.add("scroll");
    } else {
        scroll = false;
        document.body.classList.remove("scroll");
    }
};