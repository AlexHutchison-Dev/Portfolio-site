const tl = gsap.timeline({defaults: {ease: 'power1.out'} });

tl.to(".hide-text", {y:"0%", duration: 1, stagger: 0.25});

tl.to(".intro", {y: "-100%", duration: 1, delay: 1});
tl.fromTo(".title", {opacity:0}, {opacity:1, duration: 1});
tl.fromTo("nav", {opacity:0}, {opacity:1, duration: 1.5}, "-=0.75");