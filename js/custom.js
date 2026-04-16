function injectVideoBackground() {
  const header = document.getElementById('page-header');
  const videoUrl = 'https://pub-0f54cbfa60cc41d9ac39b9f0b62ffafc.r2.dev/wallpaper.mp4';
  
  if (header && !document.querySelector('.video-bg')) {
    const video = document.createElement('video');
    video.className = 'video-bg';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('muted', ''); // 确保浏览器策略通过
    
    // 渐显效果
    video.style.opacity = '0';
    
    const source = document.createElement('source');
    source.src = videoUrl;
    source.type = 'video/mp4';
    
    video.appendChild(source);
    
    // 当视频可以播放时渐显
    video.oncanplay = () => {
      video.style.opacity = '1';
    };

    // 注入到 header 中
    header.insertBefore(video, header.firstChild);
  }
}

// 首次加载执行
injectVideoBackground();

// 如果启用了 PJAX，需要在每次切换页面后重新执行
document.addEventListener('pjax:complete', injectVideoBackground);
