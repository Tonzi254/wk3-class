        $(document).ready(() => {

            $('button#loginButton').click(() => {
                const emailValue = $('input#emailBox').val();
                const passwordValue = $('input#passwordBox').val();

                let Message;

                if (emailValue == '' && passwordValue == '') {
                    Message = 'Please provide your email and/or password';
                } 
                else if (String(emailValue).length < 3 || String(passwordValue).length < 3) {
                    Message = 'Please provide email and password of 3 characters or longer';
                } 
                else if (!String(emailValue).includes('@')) {
                    Message = 'Please provide a valid email address';
                } 
                else {
                    Message = 'Logged in successfully as ' + emailValue;
                }
                $('p#loginResult').text(Message);
            })

            // To prevent page from dynamically loading
            // $(document).ready(() => {
            // event.preventDefault();
        })