// Login Validation
document.querySelector('#btnSubmitLogin').addEventListener('click', function() {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    const strEmail = document.querySelector('#txtLoginEmail').value
    const strPassword = document.querySelector('#txtLoginPassword').value

    // Validate Login info
    let blnError = false

    if (!regEmail.test(strEmail))
    {
        console.log('Email is invalid')
        blnError = true
    }

    // no whitespace, 8 or longer chars
    if (strPassword.includes(' ') || strPassword.length < 8)
    {
        console.log('Password is invalid')
        blnError = true
    }
    

    if (blnError)
    {
        console.log('Hey we have an error')
        exit()
    }


    // If validation goes well (we have a yes) do the rest of the function from here


    


    // POSTs login to backend
        // If response is yes, let the user in the gates
        // If response is no yes, tell them no yes
})


// Login Validation
document.querySelector('#btnSubmitLogin').addEventListener('click', function() {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    const strEmail = document.querySelector('#txtRegistraitonEmail').value
    const strPassword = document.querySelector('#txtRegistrationPassword').value

    // Validate Login info
    let blnError = false

    if (!regEmail.test(strEmail))
    {
        console.log('Email is invalid')
        blnError = true
    }

    // no whitespace, 8 or longer chars
    if (strPassword.includes(' ') || strPassword.length < 8)
    {
        console.log('Password is invalid')
        blnError = true
    }
    

    if (blnError)
    {
        console.log('Hey we have an error')
        exit()
    }


    // If validation goes well (we have a yes) do the rest of the function from here


    


    // POSTs login to backend
        // If response is yes, let the user in the gates
        // If response is no yes, tell them no yes
})
