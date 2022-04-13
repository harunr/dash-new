
(function($){
	$(function(){
        
        $(window).on('load', function(){
            $('.preloader-wrap').delay(500).fadeOut('slow');
        })  
        
        // Phone nav click function
        $('#show-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeIn();
        });

        const container = document.body
        const itemsWrapper = document.querySelector('.hover-action-inner');
         const itemsWrapper1 = document.querySelector('#hover-action-inner')

        // Preload images
        const preloadImages = () => {
            return new Promise((resolve, reject) => {
                imagesLoaded(document.querySelectorAll('img'), resolve);
            });
        };
        // And then..
        preloadImages().then(() => {
            // Remove the loader
            document.body.classList.remove('loading');
            const effect = new StretchEffect(container, itemsWrapper)
        });

        // Preload images
        const preloadImages1 = () => {
            return new Promise((resolve, reject) => {
                imagesLoaded(document.querySelectorAll('img'), resolve);
            });
        };
        // And then..
        preloadImages1().then(() => {
            // Remove the loader
            document.body.classList.remove('loading');
            const effect = new StretchEffect(container, itemsWrapper1)
        });
        
		
	})// End ready function.


})(jQuery)

