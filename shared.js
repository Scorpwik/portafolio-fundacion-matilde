document.addEventListener('DOMContentLoaded', () => {
  /* --- Cursor Logic --- */
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  
  if (dot && ring) {
    document.addEventListener('mousemove', (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .value-card, .action-card, .nav-card').forEach(item => {
      item.addEventListener('mouseenter', () => {
        ring.style.width = '70px';
        ring.style.height = '70px';
        ring.style.borderColor = 'var(--accent-violet)';
      });
      item.addEventListener('mouseleave', () => {
        ring.style.width = '40px';
        ring.style.height = '40px';
        ring.style.borderColor = 'var(--accent-lime)';
      });
    });
  }

  /* --- Scroll Progress --- */
  const progress = document.getElementById('scroll-progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progress.style.width = scrollPercent + '%';
    });
  }

  /* --- Intersection Observer for Reveals --- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animate numbers if any
        const num = entry.target.querySelector('.stat-number');
        if (num && num.dataset.target) {
          animateNumber(num);
        }

        // Animate progress bars
        const bars = entry.target.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
          if (bar.dataset.width) {
            setTimeout(() => {
              bar.style.width = bar.dataset.width + '%';
            }, 200);
          }
        });
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  function animateNumber(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = "true";
    const target = +el.dataset.target;
    const speed = 200;
    const updateCount = () => {
      const count = +el.innerText;
      const inc = target / speed;
      if (count < target) {
        el.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        el.innerText = target;
      }
    };
    updateCount();
  }
});

/* --- Modal Management --- */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(e) {
  if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('close-modal')) {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(m => m.style.display = 'none');
    document.body.style.overflow = 'auto';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(m => m.style.display = 'none');
    document.body.style.overflow = 'auto';
  }
});

/* --- Tabs Logic --- */
function showTab(type) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  
  const content = document.getElementById('tab-' + type);
  if (content) {
    content.classList.add('active');
    event.target.classList.add('active');
  }
}
