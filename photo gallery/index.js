const btnEl = document.getElementById("btn")

function fetchImg(){
    // console.log("clicked")
    const inputValue = document.getElementById("input").value;

    fetch(`https:://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=vO42De91IphabskvcPIbZBsLCZpCf5nWhBl7KrLgURY`).then((res)=>res.json().then((data)=> {
        console.log("data");
    } ));
}

btnEl.addEventListener("click", fetchImg)