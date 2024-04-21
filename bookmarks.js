document.addEventListener('DOMContentLoaded', function() {
    // 假设这是您的书签数据，您可以从浏览器的书签管理器中获取URL和标题
    var bookmarks = [
        { name: 'Google', url: 'https://www.google.com' },
        { name: 'YouTube', url: 'https://www.youtube.com' },
        // ...其他书签
    ];

    // 获取书签容器
    var container = document.querySelector('.bookmarks-container');

    // 为每个书签创建HTML元素
    bookmarks.forEach(function(bookmark) {
        var a = document.createElement('a');
        a.href = bookmark.url;
        a.className = 'bookmark';
        a.target = '_blank'; // 确保书签在新标签页中打开
        a.rel = 'noopener noreferrer'; // 提高安全性

        // 尝试获取每个网站的根域名作为图标的URL
        var domain = new URL(bookmark.url).origin; // 解析域名
        var iconURL = bookmark.icon || `${domain}/favicon.ico`; // 如果没有提供图标，则尝试默认位置

        // 设置书签的HTML内容
        a.innerHTML = `<div class="bookmark-icon" style="background-image: url('${iconURL}');"></div>` +
                       `<div class="bookmark-title">${bookmark.name}</div>`;

        // 将书签元素添加到容器中
        container.appendChild(a);
    });
});
