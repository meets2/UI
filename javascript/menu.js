        let menu = document.getElementById('menu');
        let links = document.getElementById('links');
        let bars = document.getElementById('bars');
        function showMenu(){
            menu.style.opacity = '1';
            menu.style.left = '0';
            menu.style.zIndex = '2';
            menu.classList.add('sidenav-animation');
        }
        function hideMenu(){
            menu.style.opacity = '0';
            menu.style.left = '-150px';
            menu.classList.remove('sidenav-animation');
        }
        function ShowNotUse(){
            alert("Admin is not using Facebook...");
        }

        let buttonIcon = document.getElementById('buttonIcon');

        function translateFor(){
            buttonIcon.style.transform = 'translateX(10px)';
            buttonIcon.style.transition = '0.3s';
        }
        function translateBack(){
            buttonIcon.style.transform = 'translateX(0px)';
        }
        function redirect(){
            alert('Site is Under Observation, redirecting to homepage...')
        }
        document.getElementById('inputName').focus();

        let loader = document.getElementById('preloader');
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.zIndex = '-1';
        }, 1000);
