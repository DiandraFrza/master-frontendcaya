/**
 * Anti-DevTools Security Script
 * Prevents casual inspection of the website source code
 */
(function() {
  'use strict';

  // Disable right-click context menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  // Block keyboard shortcuts for DevTools
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+C (Element Inspector)
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
      e.preventDefault();
      return false;
    }

    // Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
      e.preventDefault();
      return false;
    }

    // Ctrl+S (Save Page)
    if (e.ctrlKey && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
      e.preventDefault();
      return false;
    }
  });

  // Detect DevTools via debugger timing
  var devtoolsOpen = false;

  function detectDevTools() {
    var startTime = performance.now();
    debugger;
    var endTime = performance.now();

    if (endTime - startTime > 100) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Poppins,sans-serif;background:#FFF8ED;"><div style="text-align:center;"><h1 style="color:#ff562c;font-size:2rem;margin-bottom:1rem;">⚠️ Akses Ditolak</h1><p style="color:#666;font-size:1.1rem;">Developer Tools tidak diperbolehkan pada halaman ini.</p><a href="/" style="display:inline-block;margin-top:1rem;padding:0.75rem 2rem;background:#ff562c;color:white;border-radius:9999px;text-decoration:none;font-weight:bold;">Kembali ke Beranda</a></div></div>';
      }
    } else {
      devtoolsOpen = false;
    }
  }

  // Run detection periodically
  setInterval(detectDevTools, 3000);

  // Disable text selection on certain elements (optional - less aggressive)
  document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      // Allow selection in input fields but prevent on page content
    }
  });

  // Disable drag
  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
  });

  // Console warning
  console.log('%c⚠️ Peringatan!', 'color:#ff562c;font-size:30px;font-weight:bold;');
  console.log('%cHalaman ini dilindungi. Jangan paste kode apapun di sini.', 'color:#666;font-size:16px;');
})();
