window.onload = function() {
    fetch('bookmarks_latest.json')
        .then(response => response.json())
        .then(data => {
            const latestBookmarkFile = data.latest;
            fetch(latestBookmarkFile)
                .then(response => response.text())
                .then(data => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, 'text/html');
                    const bookmarks = doc.querySelectorAll('a');
                    const list = document.getElementById('bookmark-list');
                    bookmarks.forEach(bookmark => {
                        const li = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = bookmark.href;
                        a.textContent = bookmark.textContent || bookmark.href;
                        li.appendChild(a);
                        list.appendChild(li);
                    });
                })
                .catch(err => console.error('Error loading bookmarks:', err));
        })
        .catch(err => console.error('Error loading latest bookmarks file:', err));
};
