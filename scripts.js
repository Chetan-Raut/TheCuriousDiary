//  intercept the clicks on the links, prevent the default behavior (loading a new page), and fetch the content of the corresponding ".html" file using AJAX.

  document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const page = this.getAttribute("href");
                loadPage(page);
            });
        });

        function loadPage(page) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `${page}.html`, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    document.body.innerHTML = xhr.responseText;
                }
            };
            xhr.send();
        }
    });
