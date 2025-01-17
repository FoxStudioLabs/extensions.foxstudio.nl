"use strict"; // Use strict JavaScript mode to prevent errors.

$(document).ready(function() {
    console.log("Page loaded in " + (performance.now() / 1000).toFixed(2) + " seconds."); // Log the page load time in seconds.

    document.querySelectorAll('.data-extensionid').forEach(item => {
        item.addEventListener('click', event => {
            let extensionId = item.getAttribute('data-extensionid');
            let url = '/extension/' + extensionId;
            window.location.href = url;
        });
    });

    function openExtension(extensionId) {
        let url = '/extension/' + extensionId;
        window.location.href = url;
    }

    const extensions = [
        {
            "title": "Homepage",
            "data": {
                "url": "/",
                "icon": "home",
                "description": "Homepage of the website",
                "keywords": ["home", "homepage", "index", "extentions"]
            },
            "image" : {
                "url": "https://extensions.foxstudio.nl/assets/images/heroes/EXTENSIONS.jpg",
                "alt": "Homepage"
            },
            "type": "page",
            "author": {
                "firstName": "Foxstudio",
                "lastName": "Team",
                "email": "hello@foxstudio.nl",
                "website": "https://foxstudio.nl"
            }
        },
        {
            "title": "Ayame Noises",
            "data": {
                "url": "/extention/ayame-noises",
                "icon": "ayame-noises",
                "description": "Chrome and Firefox extention to play Ayame Noises when clicking on the icon",
                "keywords": ["ayame", "noises", "extentions", "chrome", "firefox", "hololive", "vtuber", "nakiri"]
            },
            "image" : {
                "url": "https://lh3.googleusercontent.com/NLUUXORKKlYRGV8uJTSu9Rxn-6bCMy7oX9A3SfrZX5oZxwlD2DWRZiaik3XMXuit5I39slDWXeSx7guTMmMYszDSGeU=s1280-w1280-h800",
                "alt": "Ayame Noises"
            },
            "type": "page",
            "author": {
                "firstName": "Foxstudio",
                "lastName": "Team",
                "email": "hello@foxstudio.nl",
                "website": "https://foxstudio.nl"
            }
        }
    ];

    const searchInput = $('#search-input');

    const fuse = new Fuse(extensions, {
        keys: ["title", "data.description", "data.keywords"],
        includeScore: true,
        threshold: 0.3,
        distance: 20
    });

    $('#search-input').on('input', function() {
        let featuredExtensions = $('#featured');
        let searchValue = searchInput.val();
        let results = fuse.search(searchValue);
        let searchResults = $('#search-results');
        let fuseScore = 0;

        searchResults.empty();

        results.forEach(result => {
            fuseScore = result.score;
            fuseScore = Math.round((1 - fuseScore) * 100);
            result = result.item;
            searchResults.append('<div class="col-12"><div class="card bg-secondary border-primary mb-3"><div class="card-body"><div class="row"><div class="col-12 col-md-4"><img src="'+ result.image.url +'" class="card-img-top" alt="'+ result.image.alt +'"></div><div class="col-12 col-md-8"><h4 class="card-title">'+ result.title +'</h4><p class="card-text">'+ result.data.description +' <br> <small>Score: '+ fuseScore + '%</p><a href="'+ result.data.url +'" class="btn btn-primary">Go to page</a></div></div></div>');
        });

        if (searchValue.length > 0) {
            featuredExtensions.hide();
            searchResults.prepend('<p style="font-size: 1.1rem">Found <strong>'+ results.length +'</strong> results</p>');
            searchResults.prepend('<p style="font-size: 1.4rem">Search results for "<strong>'+ searchValue +'</strong>"</p>');
            searchResults.show();
        } else {
            featuredExtensions.show();
            searchResults.hide();
        }
    });
});