/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', () => {
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      rootMargin: '0px 0px -40%',
    });
  }

  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));

  responsiveNavItems.forEach((responsiveNavItem) => {
    responsiveNavItem.addEventListener('click', function () {
      responsiveNavItems.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');

      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  const pageContainer = document.querySelector('.container-fluid.p-0');
  const sections = document.querySelectorAll('.container-fluid.p-0 > .resume-section');

  if (pageContainer && window.matchMedia('(min-width: 992px)').matches) {
    pageContainer.addEventListener(
      'wheel',
      (event) => {
        if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
        event.preventDefault();
        pageContainer.scrollBy({ left: event.deltaY, behavior: 'smooth' });
      },
      { passive: false }
    );

    let turnTimer;
    pageContainer.addEventListener('scroll', () => {
      sections.forEach((section) => section.classList.remove('is-turning'));

      const activeSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.left >= 0 && rect.left < window.innerWidth * 0.45;
      });

      if (activeSection) {
        activeSection.classList.add('is-turning');
        clearTimeout(turnTimer);
        turnTimer = setTimeout(() => activeSection.classList.remove('is-turning'), 420);
      }
    });
  }
});
