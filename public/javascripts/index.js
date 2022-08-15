document.addEventListener('DOMContentLoaded', (event) => {
    /*
        menu mobile opening
    */
    let iconsMenu = document.querySelectorAll('.icon-open-menu-mobile, .icon-close-menu-mobile');
    let menuMobile = document.querySelector('.menu-header-mobile');
    const closeMenuMobile = () => {
        menuMobile.classList.remove('open');
        menuMobile.classList.add('close');
    };

    iconsMenu.forEach((iconMenu) => {
        iconMenu.addEventListener('click', (e) => {
            if(menuMobile.classList.contains('open')) {
                closeMenuMobile();

            } else {
                menuMobile.classList.remove('close');
                menuMobile.classList.add('open');
            }
        });
    });

    /*
        management popins
     */
    let contactAnchors = document.querySelectorAll('.contact');
    let popinConfirmation = document.getElementById('confirmation-contact');
    let popinContact = document.getElementById('form-contact');
    let closePopinContact = document.querySelector('#form-contact .contact-content span.close');

    const closePopins = (popinContact, popinConfirmation) => {
        popinContact.style.display = "none";
        popinConfirmation.style.display = "none";
    };
    contactAnchors.forEach((contactAnchor) => {
        contactAnchor.addEventListener('click', () => {
            let overlayContact = document.querySelector('#form-contact .overlay');

            closeMenuMobile();
            popinContact.style.display = "block";
            overlayContact.addEventListener('click', () => {
                popinContact.style.display = "none";
            });
        });
    });

    closePopinContact.addEventListener('click', () => {
        popinContact.style.display = "none";
    });

    if (popinConfirmation !== null) {
        let overlayConfirmation = document.querySelector('#confirmation-contact .overlay');
        let closePopinConfirmation = document.querySelector('#confirmation-contact .contact-content span.close');

        overlayConfirmation.addEventListener('click', () => {
            closePopins(popinContact, popinConfirmation);
            document.location.href="/";
        });

        closePopinConfirmation.addEventListener('click', () => {
            closePopins(popinContact, popinConfirmation);
        });
    }

    /*
        management validation for submit button
     */
    let submitButton = document.querySelector('input[type="submit"]');
    let inputs = document.querySelectorAll('input, textarea');

    const isFormValid = () => {
        let isValid = true;
        inputs.forEach((input) => {
            if(input.value === "") isValid = false;
        });
        return isValid;
    };


    inputs.forEach((input) => {
        input.oninput = () => {
            if (isFormValid()) {
                submitButton.classList.add('valid');
                submitButton.disabled = false;
            } else {
                submitButton.classList.remove('valid');
                submitButton.disabled = true;
            }
        };
    });
});
