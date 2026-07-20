/* Scale each 1440px artboard to fit its column; FIT / 100% toggle per pane. */
(function () {
  function fit() {
    document.querySelectorAll('.viewport').forEach(function (vp) {
      var board = vp.querySelector('.board');
      if (!board) return;
      if (vp.classList.contains('m')) return; /* mobile boards render 1:1 */
      if (vp.classList.contains('native')) { vp.style.height = ''; return; }
      var w = vp.clientWidth;
      var s = w / 1440;
      board.style.transform = 'scale(' + s + ')';
      vp.style.height = board.offsetHeight * s + 'px';
    });
  }
  window.addEventListener('resize', fit);
  window.addEventListener('load', fit);
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.fitbtn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var vp = document.getElementById(btn.getAttribute('data-target'));
        if (!vp) return;
        vp.classList.toggle('native');
        var native = vp.classList.contains('native');
        btn.textContent = native ? 'FIT ↙' : '100% ↗';
        var board = vp.querySelector('.board');
        if (board && native) board.style.transform = 'none';
        fit();
      });
    });
    fit();
    setTimeout(fit, 400); // after fonts/images settle
  });
})();
