document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    // Hvis brugeren findes bliver man omdirigeret til homepage://
    if (user) {
        location.href = "homepage.html";
    }

    document.getElementById("login_form").addEventListener("submit",(event) => {
        event.preventDefault();

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const user = {
            email: email,
            password: password,
        };

        fetch("http://localhost:2000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                localStorage.setItem("user", JSON.stringify(user));
                location.href = "homepage.html";
                }else {
                    window.alert("Wrong Info");
                }
        })
        .catch(() =>{ 
            window.alert("error");
        });
    });
});