const images = ['src/image-2.png', 'src/image-3.png', 'src/image-4.png', 'src/image-5.png', 'src/image-6.png', 'src/image-7.png'];
        
        // Get the image element by its ID
        const img = document.getElementById('img');
        
        let currentIndex = 0;
        
        // Preload all images
        const preloadImages = () => {
            images.forEach(image => {
                const tempImage = new Image();
                tempImage.src = image;
            });
        };
        
        // Function to change the image
        const changeImage = () => {
            img.src = images[currentIndex];
            img.alt = `image-${currentIndex + 2}.png`;
        
            currentIndex = (currentIndex + 1) % images.length; // Loop through the images
        };
        
        // Start loading images and change the image
        preloadImages();
        setInterval(changeImage, 2000);
    