document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.button');
    const html = document.documentElement;
    const branding = document.querySelector('.branding');
    // const accentPrimary = document.querySelector('.text-accent-primary');
  
    btn.addEventListener('mouseenter', () => {
      html.style.backgroundColor = '#0D1117';
      branding.style.color = '#7D8590';
      branding.style.borderTopColor = '#7D8590';
    //   accentPrimary.style.color = '#7D8590';
    //   accentPrimary.style.fontFamily = 'Palatino';
    });
  
    btn.addEventListener('mouseleave', () => {
      html.style.backgroundColor = '';
      branding.style.color = '';
      branding.style.borderTopColor = '';
    //   accentPrimary.style.color = '';
    //   accentPrimary.style.fontFamily = '';
    });
  });