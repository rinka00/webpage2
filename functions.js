// GSAPとScrollTriggerの登録
gsap.registerPlugin(ScrollTrigger);

// 要素を取得
const imageContainer = document.querySelector('.image-container');
const layers = document.querySelectorAll('.image-container > div');

// 初期設定
gsap.set('#layer01', { opacity: 1 });





gsap.fromTo('.p2', 
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay: 1,
      scrollTrigger: { 
        trigger: ".split-right__title", 
      
      }
    }
  );

  gsap.fromTo('.p4', 
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay: 0.8,
      scrollTrigger: { 
        trigger: ".p3", 
        start: "bottom bottom",
      
      }
    }
  );



