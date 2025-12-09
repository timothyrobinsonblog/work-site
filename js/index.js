document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.button');
    const html = document.documentElement;
    const branding = document.querySelector('.branding');
    const textSymbol = document.querySelector('.text-symbol');
    // const accentPrimary = document.querySelector('.text-accent-primary');
  
    btn.addEventListener('mouseenter', () => {
      html.style.backgroundColor = '#0D1117';
      branding.style.color = '#7D8590';
      branding.style.borderTopColor = '#7D8590';
      textSymbol.style.color = '#7D8590';
      textSymbol.style.borderColor = '#7D8590';
    //   accentPrimary.style.color = '#7D8590';
    //   accentPrimary.style.fontFamily = 'Palatino';
    });
  
    btn.addEventListener('mouseleave', () => {
      html.style.backgroundColor = '';
      branding.style.color = '';
      branding.style.borderTopColor = '';
      textSymbol.style.color = '';
      textSymbol.style.borderColor = '';
    //   accentPrimary.style.color = '';
    //   accentPrimary.style.fontFamily = '';
    });
  });