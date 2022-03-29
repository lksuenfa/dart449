// Source: Santo Romano - DART449 class 6 files :horizontal scroll

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray("section");
const triggerAnimation = gsap.utils.toArray(".animate");

let maxWidth = 0;

// find width of each section
const getMaxWidth = () => {
  maxWidth = 0;

  sections.forEach((section) => {
    maxWidth += section.offsetWidth;
  });
};
getMaxWidth();

// activate horizontal scroll only if screen size bigger than 700px
ScrollTrigger.matchMedia({
  "(max-height: 450px)": function () {
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: ".main-content",
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true,
      },
    });
  },

  "(min-width:992px)": function () {
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: ".main-content",
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true,
      },
    });

    triggerAnimation.forEach((sct, i) => {
      console.log(
        (sct.offsetLeft - window.innerWidth / 2) *
          (maxWidth / (maxWidth - window.innerWidth))
      );
      ScrollTrigger.create({
        trigger: sct,
        start: () =>
          "top top-=" +
          (sct.offsetLeft - window.innerWidth / 4) *
            (maxWidth / (maxWidth - window.innerWidth)),
        end: () =>
          "+=" + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: { targets: sct, className: "active" },
      });
    });
  },
});
