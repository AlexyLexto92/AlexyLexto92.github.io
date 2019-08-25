var link = document.querySelector(".modal-map-js");
        var show = document.querySelector(".modal-map");
        var fullname = document.querySelector(".fullname-input");
        var password = document.querySelector(".password-input");
        var closemap = document.querySelector(".js-map-close");
        var modalfeedback = document.querySelector(".main-contacts-btn");
        var modalfeed = document.querySelector(".modal-feedback");
        var closefeedback = document.querySelector(".btn-close-fedback");
        var form = modalfeed.querySelector("form");

        link.addEventListener("click", function(evt) {
            evt.preventDefault();
            show.classList.add("show-modal");
        });

        
        closemap.addEventListener("click", function() {
            show.classList.remove("show-modal");
        });

        

        modalfeedback.addEventListener("click", function(evt) {
            evt.preventDefault();
            modalfeed.classList.add("show-modal-feedback");
            fullname.focus();
        });
        
        closefeedback.addEventListener("click", function() {
            modalfeed.classList.remove("show-modal-feedback");
            modalfeed.classList.remove("form-eror");
        });

       
        form.addEventListener("submit", function(evt) { 
            if(!fullname.value || !password.value){
            evt.preventDefault();
            modalfeed.classList.add("form-eror");

            }
        });

        window.addEventListener("keydown",function(evt){
            if(evt.keyCode===27){
                if(modalfeed.classList.contains("show-modal-feedback")){
                 evt.preventDefault();
                 modalfeed.classList.remove("show-modal-feedback");
                }
            }
         });