onload = () => {
            document.body.classList.remove("container");
        };

        const wrapper = document.querySelector(".wrapper");
        const openBtn = document.getElementById("openBtn");
        const closeBtn = document.getElementById("closeBtn");
        const goToPageBtn = document.getElementById("goToPageBtn"); // Get the new button

        openBtn.addEventListener("click", () => {
            wrapper.classList.add("open");
            openBtn.style.display = "none";
            closeBtn.style.display = "inline-block";
        });

        closeBtn.addEventListener("click", () => {
            wrapper.classList.remove("open");
            closeBtn.style.display = "none";
            openBtn.style.display = "inline-block";
        });

        // Add event listener to the new button to navigate to another page
        goToPageBtn.addEventListener("click", () => {
            window.location.href = "https://thanaphon177.github.io/rakmakmak/"; // Change this URL to your target page
        });
