/* 点击涟漪效果 — 轻量不夸张 */
document.addEventListener('click', function(e) {
  // 排除链接、按钮、代码块
  if (e.target.closest('a') || e.target.closest('button') || e.target.closest('pre') || e.target.closest('code') || e.target.closest('#twikoo-wrap') || e.target.closest('.tk-comment')) return;

  var ripple = document.createElement('span');
  ripple.className = 'click-ripple';
  ripple.style.cssText = 'left:' + (e.clientX - 10) + 'px;top:' + (e.clientY - 10) + 'px;';
  document.body.appendChild(ripple);

  ripple.addEventListener('animationend', function() {
    ripple.remove();
  });
});
