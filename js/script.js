Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        currentActiveSlideIndex: 0,
        slides: [
            {
                imgSrc: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                imgSrc: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                imgSrc: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                imgSrc: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                imgSrc: 'img/05.jpg',
                title: 'Svizzera',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            }
        ]
    },
    methods: {
        previousSlide: function () {
            if (this.currentActiveSlideIndex > 0) {
                this.currentActiveSlideIndex--;
            } else {
                this.currentActiveSlideIndex = this.slides.length - 1;
            };
        },
        nextSlide:  function () {
            if (this.currentActiveSlideIndex < this.slides.length - 1) {
                this.currentActiveSlideIndex++;
            } else {
                this.currentActiveSlideIndex = 0;
            };
        },

    }
})