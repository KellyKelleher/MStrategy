// M Strategy Group + Box Portal Website JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Header Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('shadow-xl', 'bg-opacity-95');
    } else {
      header?.classList.remove('shadow-xl', 'bg-opacity-95');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 3. Demo Modal Controls
  const demoButtons = document.querySelectorAll('.open-demo-modal');
  const demoModal = document.getElementById('demo-modal');
  const closeDemoModal = document.getElementById('close-demo-modal');
  const demoForm = document.getElementById('demo-form');
  const demoSuccess = document.getElementById('demo-success');

  demoButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      demoModal?.classList.remove('hidden');
      demoModal?.classList.add('flex');
    });
  });

  if (closeDemoModal && demoModal) {
    closeDemoModal.addEventListener('click', () => {
      demoModal.classList.add('hidden');
      demoModal.classList.remove('flex');
    });

    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        demoModal.classList.add('hidden');
        demoModal.classList.remove('flex');
      }
    });
  }

  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      demoForm.classList.add('hidden');
      demoSuccess?.classList.remove('hidden');
      setTimeout(() => {
        demoModal?.classList.add('hidden');
        demoModal?.classList.remove('flex');
        demoForm.reset();
        demoForm.classList.remove('hidden');
        demoSuccess?.classList.add('hidden');
      }, 3000);
    });
  }

  // 4. Industry Tab Switchers
  const industryButtons = document.querySelectorAll('.industry-tab-btn');
  const industryContents = document.querySelectorAll('.industry-tab-content');

  industryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      industryButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-blue-600', 'text-white');
        btn.classList.add('bg-slate-800', 'text-slate-300');
      });

      button.classList.add('active', 'bg-blue-600', 'text-white');
      button.classList.remove('bg-slate-800', 'text-slate-300');

      industryContents.forEach(content => {
        if (content.id === targetTab) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });

  // 5. Solution Graphics Showcase Carousel / Tab Switcher (Home Page)
  const graphicTabs = document.querySelectorAll('.graphic-tab-btn');
  const graphicPreviews = document.querySelectorAll('.graphic-preview');

  graphicTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetGraphic = btn.getAttribute('data-graphic');

      graphicTabs.forEach(b => {
        b.classList.remove('border-mOrange', 'text-mOrange', 'bg-orange-50', 'bg-mOrange/10');
        b.classList.add('border-slate-200', 'text-slate-600', 'bg-slate-50');
      });

      btn.classList.add('border-mOrange', 'text-mOrange', 'bg-orange-50');
      btn.classList.remove('border-slate-200', 'text-slate-600', 'bg-slate-50');

      graphicPreviews.forEach(prev => {
        if (prev.id === targetGraphic) {
          prev.classList.remove('hidden');
        } else {
          prev.classList.add('hidden');
        }
      });
    });
  });
});
