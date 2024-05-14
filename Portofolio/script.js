document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".groups aside ol li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" ,
            block: 'start'
        });
        });
    });
    const order = document.getElementById('order');
    const a = order.querySelectorAll('li a');

    function showList() {
    a.forEach((i) => {
        i.addEventListener("click", (e) => {
            a.forEach((m) => {
                m.classList.remove("active");
            });
            i.classList.add("active");
        });
    });
}

    showList();
});

