// Login Validation
document.querySelector('#btnSubmitLogin').addEventListener('click', function() {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    const strEmail = document.querySelector('#txtLoginEmail').value
    const strPassword = document.querySelector('#txtLoginPassword').value

    // Validate Login info here
    let blnError = false
    let strErrorMessage = ''

    if (!regEmail.test(strEmail))
    {
        blnError = true
        strErrorMessage += "<p>Please enter a valid email.</p>"
    }

    // no whitespace, 8 or longer chars
    if (strPassword.includes(' ') || strPassword.length < 8)
    {
        blnError = true
        strErrorMessage += "<p>Password must be at least 8 characters and contain no whitespaces!</p>"
    }

    if (blnError)
    {
        Swal.fire ({
            title: "You need to review your information!",
            html: strErrorMessage,
            icon: "error"
        })
    }
    else
    {
        Swal.fire ({
            title: "Success! You have been logged in!",
            icon: "success"
        })
        
        // If validation goes well (we have a yes) do the rest of the function from here
        
        // POSTs login to backend
        // If response is yes, let the user in the gates
        // If response is no yes, tell them no yes
    }
})


// Login Validation
document.querySelector('#btnSubmitRegistration').addEventListener('click', function() {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    const strEmail = document.querySelector('#txtRegistrationEmail').value
    const strEmailConf = document.querySelector('#txtRegistrationConfirmEmail').value
    const strPassword = document.querySelector('#txtRegistrationPassword').value
    const strPasswordConf = document.querySelector('#txtRegistrationConfirmPassword').value

    // Validate Login info here
    let blnError = false
    let strErrorMessage = ''

    if (!regEmail.test(strEmail))
    {
        blnError = true
        strErrorMessage += "<p>Please enter a valid email.</p>"
    }

    // Email and confirmation email must match
    if (strEmail != strEmailConf)
    {
        blnError = true
        strErrorMessage += "<p>Email must match the confirmation email!</p>"
    }

    // no whitespace, 8 or longer chars
    if (strPassword.includes(' ') || strPassword.length < 8)
    {
        blnError = true
        strErrorMessage += "<p>Password must be at least 8 characters and contain no whitespaces!</p>"
    }

    // Password Confirmation is the same as strPassword
    if (strPassword != strPasswordConf)
    {
        blnError = true
        strErrorMessage += "<p>Password field must match password confirmation field!</p>"
    }


    if (blnError)
    {
        Swal.fire ({
            title: "You need to review your information!",
            html: strErrorMessage,
            icon: "error"
        })
    }
    else
    {
        Swal.fire ({
            title: "Success! You have been registered!",
            icon: "success"
        })
        
        // If validation goes well (we have a yes) do the rest of the function from here
        
        // POSTs login to backend
        // If response is yes, add user to the db
        // If response is no yes, tell them no yes
    }
})

document.querySelector('#btnSwitchToRegistration').addEventListener('click', (event) => {
    document.querySelector('#pageLogin').classList.add("d-none")
    document.querySelector('#pageRegister').classList.remove("d-none")
})

document.querySelector('#btnSwitchToLogin').addEventListener('click', (event) => {
    document.querySelector('#pageRegister').classList.add("d-none")
    document.querySelector('#pageLogin').classList.remove("d-none")
})