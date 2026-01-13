/**
 * Obfuscated email contact handler
 * Prevents spam bots from scraping email addresses
 */
(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmailLinks);
  } else {
    initEmailLinks();
  }

  function initEmailLinks() {
    const emailLink = document.getElementById('email-contact');
    if (emailLink) {
      // Get custom email prefix from data attribute, or use default
      const prefix = emailLink.getAttribute('data-email-prefix') || 'honk';

      // Obfuscated email parts to avoid spam bots
      const parts = [prefix, 'codegroove', 'dev'];
      const email = parts[0] + '@' + parts[1] + '.' + parts[2];
      emailLink.href = 'mailto:' + email;
    }
  }
})();
