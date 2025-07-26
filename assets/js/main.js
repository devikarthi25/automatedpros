  document.addEventListener("DOMContentLoaded", function () {
    const trigger = document.getElementById("pageslist");
    const dropdown = trigger.nextElementSibling;

    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      dropdown.classList.toggle("show");
    });

    // Optional: Click outside to close
    document.addEventListener("click", function (e) {
      if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  });


  document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.navbar .container-fluid',{
    y: -100,         
  opacity: 0,      
  duration: 1,     
  ease: "power3.out"
  })

  gsap.from(".banner-sec .content-wrapper", {
  y: -50,
  opacity: 0,
  stagger: 0.3,
  duration: 0.8,
  delay: 1,
  ease: "power2.out"
  });

  gsap.from(".counter-sec .col", {
  x: -50,
  opacity: 0,
  stagger: 0.3,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".counter-sec",
    start: "top 80%", // when the section enters the viewport
    toggleActions: "restart  none none none"
  }
});

  
  gsap.fromTo(".banner-img", 
  { scale: 0.8, opacity: 0 },  // starts small and invisible
  { scale: 1, opacity: 1, duration: 1.5, delay: 1.5, ease: "power3.out" } // animates to normal size
  );
   
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner-sec .image-wrapper",
    start: "top 80%",
    toggleActions: "restart  none none none"
  }
});

// Step 1: Delay + fade/slide in
tl.fromTo(".bannercard1", 
  { opacity: 0, scale: 0.8 },
  { opacity: 1, scale: 1, duration: 1, delay: 1.5, ease: "power2.out" }
);

// Step 2: Smooth infinite bounce
tl.to(".bannercard1", {
  y: 10,
  repeat: -1,
  yoyo: true,
  duration: 1.5,
  ease: "sine.inOut"
});

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner-sec .image-wrapper",
    start: "top 80%",
    toggleActions: "restart  none none none"
  }
});

// Step 1: Delay + fade/slide in
t2.fromTo(".bannercard2", 
  { opacity: 0, scale: 0.8 },
  { opacity: 1, scale: 1, duration: 1, delay: 1.5, ease: "power2.out" }
);

// Step 2: Smooth infinite bounce
t2.to(".bannercard2", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 1.6,
  ease: "sine.inOut"
});

gsap.fromTo(".about-sec .image-wrapper",
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-sec .image-wrapper",
      start: "top 80%", // when image enters viewport
      toggleActions: "restart  none none none"
    }
  }
);

gsap.fromTo(".mission-sec .image-wrapper",
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mission-sec .image-wrapper",
      start: "top 80%", // when image enters viewport
      toggleActions: "restart  none none none"
    }
  }
);

gsap.utils.toArray(".journey-sec .card").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      end: "bottom 70%",
      scroller: ".journey-sec .content-container", // <- important!
      toggleActions: "restart  none none none"
    }
  });
});

gsap.from(".partner-sec .col img", {
  y: 20,
  opacity: 0,
  stagger: 0.3,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".partner-sec",
    start: "top 80%", // when the section enters the viewport
    toggleActions: "restart  none none none"
  }
});


gsap.from(".press-sec .card", {
  y: 50,
  opacity: 0,
  stagger: 0.3,
  delay: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".press-sec",
    start: "top 80%", // when the section enters the viewport
    toggleActions: "restart  none none none"
  }
});

gsap.from(".footer", {
  y: 10,
  opacity: 0,
  stagger: 0.3,
  delay: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%", // when the section enters the viewport
    toggleActions: "restart  none none none"
  }
});

 });
