// index.js
// Goes with content on index.html

// Constants and variables
const strBaseURL = "localhost";
const BackendPort = 8080;

/* Init */
swapToPage('#pageLogin')
// Debug
swapToPage('#pageDashboard')

/* Navigation Listeners */

// Hide all pages, then you can show just one of them
function swapToPage(strVisiblePage) {
    document.querySelectorAll('#pageLogin').forEach((item) => item.classList.add("d-none"))
    document.querySelectorAll('#pageRegister').forEach((item) => item.classList.add("d-none"))
    document.querySelectorAll('#pageDashboard').forEach((item) => item.classList.add("d-none"))

    document.querySelectorAll(strVisiblePage).forEach((item) => item.classList.remove("d-none"))
}

// Switch to Registration
document.querySelector('#btnSwitchToRegistration').addEventListener('click', (event) => {
    swapToPage('#pageRegister')
})

// Switch to Login
document.querySelector('#btnSwitchToLogin').addEventListener('click', (event) => {
    swapToPage('#pageLogin')
})

document.querySelector('#btnSignOut').addEventListener('click', () => {
    // Remove session information from browser at this time

    swapToPage('#pageLogin')
})

/* Validation Listeners */

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
        // Swal.fire ({
        //     title: "Success! You have been logged in!",
        //     icon: "success"
        // })
       
        fetch('http://' + strBaseURL + ':' + BackendPort + '/account' + '?' + strEmail + '&' + strPassword, {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json'
            },
        })
        .then(
            objResponse => {
                return objResponse.json()
            }
        )
        .then(
            objData => {
                if (objData.status == 200)
                {
                    // User authenticated! Proceed to dashbard page
                    // console.log(objData)
                    window.location.href="/dashboard.html"
                }
                else
                {
                    // Swal for invalid creds
                }
            }
        )
        .catch(
            error => {
                // We put error alert here
                Swal.fire ({
                    title: "Error!",
                    message: error
                })
            }
        )


        // old
        //     function(objData) {
        //         if(objData.Outcome)
        //         {
        //             // Good SweetAlert moved here
        //             Swal.fire ({
        //                 title: "Success! You have been logged in!",
        //                 icon: "success"
        //             })

        //             // Now we need to move the user to the dashboard page.
        //             // Likely a separate page so the content is only served
        //             // upon a successful login.

        //         }
        //         else
        //         {
        //             // Maybe include error message in Swal?
        //             Swal.fire ({
        //                 title: "Not Success!",
        //                 icon: "error"
        //             })
        //         }
        //     }
        // )




        // If validation goes well (we have a yes) do the rest of the function from here
        
        // POSTs login to backend
        // If response is yes, let the user in the gates
        // If response is no yes, tell them no yes
    }
})


// Registration Validation
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