// تحسين أداء وإعدادات particles
particlesJS("particles-js", {
    particles: {
        number: { value: 25, density: { enable: true, value_area: 800 } },
        color: { value: "#9d4edd" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 130, color: "#9d4edd", opacity: 0.2, width: 1 },
        move: { 
            enable: true, // تم التصحيح: كانت مفقودة مما جعل الجزيئات ثابتة
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

const form = document.getElementById('direct-whatsapp-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
    const level = document.getElementById('userLevel').value;

    const adminPhone = "201055719273";
    const groupLink = "https://chat.whatsapp.com/LX6YlavRiSWDUWSxVvGxD9";

    // تحسين تنسيق الرسالة
    const message = encodeURIComponent(
`🚀 طلب انضمام جديد لـ Arise Tech

👤 الاسم: ${name}
🎂 العمر: ${age}
💻 المستوى: ${level}`
    );

    // فتح واتساب في نافذة جديدة
    const whatsappUrl = `https://wa.me/${adminPhone}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // تحويل للجروب بعد ثانية واحدة
    setTimeout(() => {
        window.location.href = groupLink;
    }, 1000);

    // تفريغ الحقول
    setTimeout(() => {
        form.reset();
    }, 1200);
});
