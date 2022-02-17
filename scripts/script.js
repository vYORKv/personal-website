window.onload = () => {
    const animationElement = document.querySelector(".animation");
    const anchors = document.querySelectorAll("a");

    setTimeout(() => {
        animationElement.classList.remove("is-active");
    }, 500);

    for(let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        
        anchor.addEventListener("click", e => {
            e.preventDefault();
            let target = e.target.href;

            animationElement.classList.add("is-active");
            
            setTimeout(() => {
                window,location.href = target;
            }, 500);
        })
    }
}