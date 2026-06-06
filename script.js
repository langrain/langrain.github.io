// ===== 汉堡菜单功能 =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // 点击导航链接后关闭菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // "加载更多文章"按钮功能
    const loadMoreBtn = document.querySelector('.load-more .btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            alert('更多文章即将推出！敬请期待。');
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 监听滚动以添加导航栏阴影效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
    });

    // 检测用户偏好的颜色方案（深色模式）
    // 可选：取消注释以启用深色模式支持
    /*
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // 深色模式下的样式
        document.body.classList.add('dark-mode');
    }
    */
});

// ===== 页面加载动画 =====
window.addEventListener('load', function() {
    document.body.style.animation = 'fadeIn 0.5s ease';
});

// ===== 实用工具函数 =====

// 获取URL参数
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// 格式化日期
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', language: 'zh-CN' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
}

// 计算阅读时间（基于字数）
function calculateReadTime(content) {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} 分钟阅读`;
}

// ===== 社交分享功能 =====
function shareToSocial(platform, title, url) {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    let shareUrl;

    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
            break;
        default:
            return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// ===== 评论加载（如果需要集成评论系统）=====
function loadComments() {
    // 可以集成 Disqus 或其他评论系统
    console.log('评论系统可在此添加');
}

console.log('博客脚本已加载');
