    document.getElementById("career-tab").addEventListener("click", function() {
        document.getElementById("career-timeline").classList.remove("hidden");
        document.getElementById("education-timeline").classList.add("hidden");

        document.getElementById("career-tab").classList.add("bg-primary", "text-white");
        document.getElementById("career-tab").classList.remove("bg-white", "text-primary");
        document.getElementById("education-tab").classList.add("bg-white", "text-primary");
        document.getElementById("education-tab").classList.remove("bg-primary", "text-white");
    });

    document.getElementById("education-tab").addEventListener("click", function() {
        document.getElementById("career-timeline").classList.add("hidden");
        document.getElementById("education-timeline").classList.remove("hidden");

        document.getElementById("education-tab").classList.add("bg-primary", "text-white");
        document.getElementById("education-tab").classList.remove("bg-white", "text-primary");
        document.getElementById("career-tab").classList.add("bg-white", "text-primary");
        document.getElementById("career-tab").classList.remove("bg-primary", "text-white");
    });
