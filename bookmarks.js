document.addEventListener('DOMContentLoaded', function() {
    // ��������������ǩ���ݣ������Դ����������ǩ�������л�ȡURL�ͱ���
    var bookmarks = [
        { name: 'Google', url: 'https://www.google.com' },
        { name: 'YouTube', url: 'https://www.youtube.com' },
        // ...������ǩ
    ];

    // ��ȡ��ǩ����
    var container = document.querySelector('.bookmarks-container');

    // Ϊÿ����ǩ����HTMLԪ��
    bookmarks.forEach(function(bookmark) {
        var a = document.createElement('a');
        a.href = bookmark.url;
        a.className = 'bookmark';
        a.target = '_blank'; // ȷ����ǩ���±�ǩҳ�д�
        a.rel = 'noopener noreferrer'; // ��߰�ȫ��

        // ���Ի�ȡÿ����վ�ĸ�������Ϊͼ���URL
        var domain = new URL(bookmark.url).origin; // ��������
        var iconURL = bookmark.icon || `${domain}/favicon.ico`; // ���û���ṩͼ�꣬����Ĭ��λ��

        // ������ǩ��HTML����
        a.innerHTML = `<div class="bookmark-icon" style="background-image: url('${iconURL}');"></div>` +
                       `<div class="bookmark-title">${bookmark.name}</div>`;

        // ����ǩԪ����ӵ�������
        container.appendChild(a);
    });
});
