/* Calm Solutions | Core Engine (Boot)
   This file initializes the system and manages global state.
*/

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const bentoItems = document.querySelectorAll('.bento-item');

    // 1. محرك تتبع الحركة (Spotlight Tracking)
    // هذا الجزء يحدث قيم x و y ليعمل تأثير التوهج في CSS
    const updateGlow = (e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        
        // حساب موقع الإصبع أو الماوس بالنسبة للمربع
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        target.style.setProperty('--mouse-x', `${x}px`);
        target.style.setProperty('--mouse-y', `${y}px`);
    };

    bentoItems.forEach(item => {
        item.addEventListener('mousemove', updateGlow);
        item.addEventListener('touchmove', (e) => {
            // تحسين الأداء على iPad/Redmi لمنع التعليق أثناء اللمس
            updateGlow(e.touches[0]);
        }, { passive: true });
    });

    // 2. إدارة تحميل الموقع (Smooth Reveal)
    window.addEventListener('load', () => {
        document.body.classList.remove('no-transition');
        console.log("Calm Solutions Engine: 120 FPS Ready.");
    });
});

/* English Dictionary for this file:
   - Initialize (إِ-نِـش-يَ-لَايـز): تهيئة / تشغيل مبدئي.
   - Event Listener (إِ-فِـنـت لِـسـنَـر): مراقب الأحداث (مثل الضغط أو اللمس).
   - Rect / Rectangle (رِيـكـت): المستطيل (حساب أبعاد المربع).
*/
