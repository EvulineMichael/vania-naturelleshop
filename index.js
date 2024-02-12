// <!-- Add an "active" class to the active navigation item -->
    document.addEventListener("DOMContentLoaded", function() {
        // Get all navigation items
        var navItems = document.querySelectorAll('.nav-items a');

        // Add click event listener to each navigation item
        navItems.forEach(function(navItem) {
            navItem.addEventListener('click', function() {
                // Remove the "active" class from all navigation items
                navItems.forEach(function(item) {
                    item.classList.remove('active');
                });

                // Add the "active" class to the clicked navigation item
                navItem.classList.add('active');
            });
        });
        

        // Add scroll event listener to highlight the active section
        window.addEventListener('scroll', function() {
            var currentScroll = window.scrollY;

            // Loop through sections to find the one in view
            document.querySelectorAll('.content-section').forEach(function(section) {
                var sectionTop = section.offsetTop;
                var sectionHeight = section.clientHeight;

                if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                    // Remove the "active" class from all navigation items
                    navItems.forEach(function(item) {
                        item.classList.remove('active');
                    });

                    // Find the corresponding navigation item and add the "active" class
                    var correspondingNavItem = document.querySelector('a[href="#' + section.id + '"]');
                    if (correspondingNavItem) {
                        correspondingNavItem.classList.add('active');
                    }
                }
            });
        });
    });
    



