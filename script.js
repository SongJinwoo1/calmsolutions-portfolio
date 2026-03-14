document.addEventListener('DOMContentLoaded', () => {
    // 1. تهيئة الأنيميشن والأيقونات
    AOS.init({ duration: 1200, once: true });
    lucide.createIcons();

    // 2. تأثير الكتابة الحية (Typing Effect)
    const textToType = "WE BUILD DIGITAL REALITIES.";
    const typeWriterElement = document.querySelector('.type-writer');
    let i = 0;
    
    function typeWriter() {
        if (i < textToType.length) {
            typeWriterElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 1000); // يبدأ بعد ثانية

    // 3. نظام التحميل الذكي (PWA) - الزر الآن يعمل دائماً
    let deferredPrompt;
    const installBtns = document.querySelectorAll('.install-app-btn');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e; // حفظ الحدث لاستخدامه عند الضغط
    });

    installBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            if (deferredPrompt) {
                // إذا كان كروم/أندرويد يدعم النافذة التلقائية
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if(outcome === 'accepted') deferredPrompt = null;
            } else {
                // إذا كان آيفون أو تم التحميل مسبقاً
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (isIOS) {
                    alert('لتحميل التطبيق على iPhone 🍎:\nاضغط على زر "المشاركة" (Share) بالأسفل 📤\nثم اختر "إضافة للشاشة الرئيسية" 📲');
                } else {
                    alert('لتحميل التطبيق 🤖:\nافتح قائمة المتصفح (الثلاث نقاط) واختر "Install App" أو "إضافة للشاشة الرئيسية".');
                }
            }
        });
    });

    // 4. قائمة الموبايل والتنقل
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const isActive = mobileMenu.classList.contains('active');
        menuIcon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
        lucide.createIcons();
    });

    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // 5. نموذج الواتساب
    const contactForm = document.getElementById('whatsappForm');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const subject = document.getElementById('subject').value;
        const message = `Arise Tech \nClient: ${name}\nLooking to build: ${subject}`;
        window.open(`https://wa.me/96597805334?text=${encodeURIComponent(message)}`, '_blank');
    });

    // 6. تغيير لون الناف بار عند النزول
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 50) {
            nav.classList.add('py-3', 'bg-cyberBlack/90', 'backdrop-blur-xl');
            nav.classList.remove('py-4');
        } else {
            nav.classList.add('py-4');
            nav.classList.remove('py-3', 'bg-cyberBlack/90', 'backdrop-blur-xl');
        }
    });

    // 7. تسجيل المحرك
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => console.log('SW Error', err));
    }
});
