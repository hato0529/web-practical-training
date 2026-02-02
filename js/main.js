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
// モーダル
    const open1 = document.querySelectorAll("#open");
    const close1 = document.querySelector("#close");
    const modal = document.querySelector("#modal");
    const mask = document.querySelector("#mask");
    open1.addEventListener("click",()=>{
        modal.animate({
        opacity: [0,1],
        visibility: "visible"
    },
    {
        duration: 1000,
        fill: "forwards"
    });
    mask.animate({
        opacity: [0,1],
        visibility: "visible"
    },
    {
        duration: 1000,
        fill: "forwards"
    });
    });
close1.addEventListener("click",()=>{
    modal.animate({
        opacity: [1,0],
        visibility: "hidden"
    },
    {
        duration: 1000,
        fill: "forwards"
    });
    mask.animate({
        opacity: [1,0],
        visibility: "hidden"
    },
    {
        duration: 1000,
        fill: "forwards"
    });
});