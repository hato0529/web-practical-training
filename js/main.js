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
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `
      perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  
  // マウスリーブ時のリセット
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});