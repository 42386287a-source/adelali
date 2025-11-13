// انتظر حتى تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function () {
    console.log('موقعي يعمل! 🚀');

    // زر Call to Action
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            alert('🎉 مرحباً! أنت على وشك بدء رحلة رائعة مع Django!');
            this.textContent = 'مبروك! 🎊';
            this.style.background = '#4CAF50';
        });
    }

    // نموذج الاتصال
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // محاكاة إرسال النموذج
            console.log('بيانات النموذج:', { name, email, message });

            alert(`شكراً ${name}! تم استلام رسالتك وسنرد عليك قريباً.`);

            // إعادة تعيين النموذج
            this.reset();
        });
    }

    // تمرير سلس عند الضغط على الروابط
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // تأثير الظهور عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // تطبيق التأثير على الأقسام
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
});
