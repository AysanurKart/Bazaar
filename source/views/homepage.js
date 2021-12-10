document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    if (!user) {
        location.href = "index.html";
    }

    document.getElementById("delete_user").addEventListener("submit",(event) => {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        fetch("http://localhost:2000/users/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                localStorage.removeItem("user");
                location.href = "tilmeld.html";
            }
            })
        .catch(() =>{
            window.alert("error");
        });
    });
});

let form = document.getElementById("submitForm");
form.addEventListener("submit", async(e) => {
    e.preventDefault();

    const formData = new FormData(form);

    await fetch('http://localhost:9000/item', {
        method: 'POST',
        body: formData
    });
});
