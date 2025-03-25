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
        console.log('Email is invalid')
        blnError = true
        strErrorMessage += "<p>Email must contain an @ and a valid URL.</p>"
    }

    // no whitespace, 8 or longer chars
    if (strPassword.includes(' ') || strPassword.length < 8)
    {
        console.log('Password is invalid')
        blnError = true
        strErrorMessage += "<p>Password must be at least 8 characters and contain no whitespaces.</p>"
    }

    if (blnError)
    {
        Swal.fire ({
            title: "You need to **review** your information!",
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

    const strEmail = document.querySelector('#txtLoginEmail').value
    const strPassword = document.querySelector('#txtLoginPassword').value

    // Validate Login info here
    let blnError = false
    let strErrorMessage = ''

    if (!regEmail.test(strEmail))
    {
        console.log('Email is invalid')
        blnError = true
        strErrorMessage += "<p>Email must contain an @ and a valid URL.</p>"
    }

    // no whitespace, 8 or longer chars
    if (strPassword.includes(' ') || strPassword.length < 8)
    {
        console.log('Password is invalid')
        blnError = true
        strErrorMessage += "<p>Password must be at least 8 characters and contain no whitespaces.</p>"
    }

    if (blnError)
    {
        Swal.fire ({
            title: "You need to **review** your information!",
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