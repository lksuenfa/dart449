// Source: Santo Romano - DART449 class 6 files :horizontal scroll

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray("section");

// activate horizontal scroll only if screen size bigger than 700px
ScrollTrigger.matchMedia({
  "(min-width:700px)": function () {
    let maxWidth = 0;

    // find width of each section
    const getMaxWidth = () => {
      maxWidth = 0;

      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
        // console.log(maxWidth);
      });
    };
    getMaxWidth();

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
});
