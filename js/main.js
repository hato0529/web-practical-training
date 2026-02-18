document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    // アクセシビリティ対応
    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
    });

  // メニューの外側をクリックした時の処理
    document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && !e.target.closest('.hamburger') && nav.classList.contains('active')) {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
    nav.setAttribute('aria-hidden', true);
    }
    });
});
document.addEventListener('DOMContentLoaded', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  
  gridItems.forEach(item => {
    // クリックで拡張
    item.addEventListener('click', () => {
      // 他のアイテムの拡張を解除
      gridItems.forEach(i => i.classList.remove('expanded'));
      // クリックされたアイテムを拡張
      item.classList.toggle('expanded');
    });
  });
  
  // グリッド外クリックで拡張解除
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.grid-item')) {
      gridItems.forEach(i => i.classList.remove('expanded'));
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('smartCard');
  const glow = card.querySelector('.card-glow');

// ここからproduct2

  // マウス追従エフェクト
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // グロー位置の更新
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    
    // 3D傾斜効果
    // const centerX = rect.width / 2;
    // const centerY = rect.height / 2;
    // const rotateX = (y - centerY) / 10;
    // const rotateY = (centerX - x) / 10;
    
    card.style.transform = `
      perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  
  // マウスリーブ時のリセット
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});
// item1横スクロール紹介
window.addEventListener('load', function () {
	const marquee = document.querySelector('.marqueer ul'); // ul要素
	const items = Array.from(marquee.children);             // 子要素
	const speedSeconds = 20;                                // スクロール1回にかかる秒数
	const direction = 'left';                               // 'left' または 'right'

	// 無限スクロール用に複製
	items.forEach(item => marquee.appendChild(item.cloneNode(true)));

	let marqueeWidth = marquee.scrollWidth / 2;
	let pos = direction === 'left' ? 0 : -marqueeWidth;
	const pixelsPerFrame = marqueeWidth / (speedSeconds * 120);

	function animate() {
		pos += direction === 'left' ? -pixelsPerFrame : pixelsPerFrame;

		// 無限ループ
		if (pos <= -marqueeWidth) pos += marqueeWidth;
		if (pos >= 0) pos -= marqueeWidth;

		marquee.style.transform = `translateX(${pos}px)`;
		requestAnimationFrame(animate);
	}

	animate();
});

window.addEventListener("load", () => {
  const container = document.querySelector(".smart-card");     // 単一要素でOK
  const texts = Array.from(document.querySelectorAll("#card-text")); // 複数

  const boxW = container.clientWidth;
  const boxH = container.clientHeight;

  // 各要素の状態（位置・速度）を作成
  const speed = 2; // px/frame
  const states = texts.map((el) => {
    // 要素サイズ計測のため一度表示位置を(0,0)で初期化
    el.style.left = "0px";
    el.style.top = "0px";

    const w = el.offsetWidth;
    const h = el.offsetHeight;

    const angle = Math.random() * Math.PI * 2;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;

    
    let x = Math.random() * Math.max(1, boxW - w);
    let y = Math.random() * Math.max(1, boxH - h);

    return { el, x, y, vx, vy, w, h };
  });

  function animate() {
    for (const s of states) {
      s.x += s.vx;
      s.y += s.vy;

      // 横方向の反射
      if (s.x <= 0 || s.x >= boxW - s.w) {
        s.vx *= -1;
        s.x = Math.max(0, Math.min(s.x, boxW - s.w));
      }
      // 縦方向の反射
      if (s.y <= 0 || s.y >= boxH - s.h) {
        s.vy *= -1;
        s.y = Math.max(0, Math.min(s.y, boxH - s.h));
      }

      // 位置反映
      s.el.style.left = `${s.x}px`;
      s.el.style.top = `${s.y}px`;
    }

    requestAnimationFrame(animate);
  }

  animate();
});



// モーダル
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

//Openボタンをクリックしたらモーダルウィンドウを表示する
openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

//Closeボタンをクリックしたらモーダルウィンドウを非表示にする
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

//背景をクリックしたらモーダルウィンドウを非表示にする
modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

//コンテンツ部分をクリックしてもモーダルウィンドウを非表示にしないようにする
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});