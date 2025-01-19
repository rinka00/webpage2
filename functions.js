// GSAPとScrollTriggerの登録
gsap.registerPlugin(ScrollTrigger);

// 要素を取得
const imageContainer = document.querySelector('.image-container');
const layers = document.querySelectorAll('.image-container > div');

// 初期設定
gsap.set('#layer01, #layer02, #layer03', { opacity: 0 });
gsap.set('#layer01', { opacity: 1 });

// ScrollTriggerの設定
ScrollTrigger.create({
    trigger: ".split-box",  // 右側のスクロールをトリガー
    start: "top top",  // スクロール開始位置
    end: "+=2000",  // 終了位置（任意に調整）
    pin: true,  // 右側をピン留め
    scrub: true,  // スクロール量に応じてアニメーションをスムーズに
    onUpdate: (self) => {
        const progress = self.progress;

        // 進行状況に応じて左のSVGを操作
        if (progress < 0.1) {
            gsap.to('#layer01', { opacity: 1 });
            gsap.to('#layer02, #layer03', { opacity: 0 });
        } else if (progress >= 0.1 && progress < 0.4) {
            gsap.to('#layer02', { opacity: 1 });
            gsap.to('#layer03,#layer01', { opacity: 0 });
        } else if (progress >= 0.4 && progress < 0.5) {
            gsap.to('#layer03', { opacity: 1 });
            gsap.to('#layer01,#layer02', { opacity: 0 });
        } else {
            gsap.to('#layer03', { opacity: 1 });
        }
    },
    onComplete: () => {
        // アニメーションが終了した後にイラストを表示し続ける
        gsap.to('#layer03', { opacity: 1 });
    }
});

// 左右のスクロールを連動させる
document.addEventListener("DOMContentLoaded", function() {
    const leftBox = document.querySelector(".left-box");
    const rightBox = document.querySelector(".right-box");

    // 右側のスクロール位置が変わったときに左側も同じ位置でスクロールさせる
    rightBox.addEventListener("scroll", function() {
        leftBox.scrollTop = rightBox.scrollTop;
    });
});

gsap.fromTo('.p2', 
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay: 0.4,
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



