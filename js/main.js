// main interactions for BNGT glassy site
document.addEventListener('DOMContentLoaded', function(){
  // year fill
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // theme toggle
  const themeToggle = document.getElementById('theme-toggle-input');
  if(themeToggle){
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
      document.body.classList.add('dark');
      themeToggle.checked = true;
    } else {
      document.body.classList.remove('dark');
      themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', function(){
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // simple testimonials rotation
  const slides = Array.from(document.querySelectorAll('.testimonial'));
  if(slides.length > 1){
    let idx = 0;
    slides.forEach((s,i)=> s.style.display = (i===0? 'block':'none'));
    setInterval(()=>{
      slides.forEach((s,i)=> s.style.display = (i===idx? 'block':'none'));
      idx = (idx+1) % slides.length;
    }, 4500);
  }

  // portfolio tilt (pointer move parallax)
  document.querySelectorAll('.p-item').forEach(item => {
    item.addEventListener('mousemove', (e)=>{
      const r = item.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      item.style.transform = `perspective(900px) rotateX(${y * 4}deg) rotateY(${x * -6}deg)`;
    });
    item.addEventListener('mouseleave', ()=> item.style.transform = 'none');
  });
});

//responsive nav
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
});