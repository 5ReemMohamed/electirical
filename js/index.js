const navbar = document.getElementById('mainNavbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Close mobile menu after clicking a link
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navbarMenu');
    const bsCollapse = bootstrap.Collapse.getInstance(menu);

    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});

// Active navigation link
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.navbar-nav .nav-link')
      .forEach(item => item.classList.remove('active'));

    link.classList.add('active');
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const service = document.getElementById("contactService").value;
  const location = document.getElementById("contactLocation").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  const whatsappMessage =
    `طلب خدمة جديد\n\n` +
    `الاسم: ${name}\n` +
    `رقم الجوال: ${phone}\n` +
    `نوع الخدمة: ${service}\n` +
    `الموقع: ${location}\n` +
    `تفاصيل الطلب: ${message}`;

  const whatsappURL =
    "https://wa.me/966506738573?text=" +
    encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank");
    this.reset();

});

document.getElementById("footerYear").textContent =
  new Date().getFullYear();

