const search = document.querySelector("#search");
const box2 = document.querySelector("#box2");

search.addEventListener("click", () => {
    // making box 2 empty for every events
    box2.innerHTML = "";
    const item = document.querySelector("#item");
    fetch(`https://api.tvmaze.com/search/shows?q=${item.value}`)
        .then(res => res.json())
        .then((data) => {

            for (let i = 0; i < data.length; i++) {

                // =====================if any image proprty is null===========
                if (data[i]['show']['image'] == null) {
                    let div = document.createElement("div");
                    div.setAttribute("class", "all");
                    let img = document.createElement("img");
                    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgo-n28qO0BuJmPtxxTs8zJNnG0ELDw336Q&usqp=CAU"
                    div.appendChild(img)
                    let heading1 = document.createElement("h4");
                    let heading2 = document.createElement("h4");
                    let heading3 = document.createElement("h4");
                    let btn = document.createElement("button");
                    btn.setAttribute("id", "btn2");

                    heading1.innerText = data[i]['show']['image'].name;
                    heading2.innerText = data[i]['show']['image'].premiered;
                    heading3.innerText = data[i]['show']['image'].language;
                    btn.innerText = "Show Detailes"
                    div.appendChild(heading1, heading2, heading3, btn)


                    box2.appendChild(div)

                    // this will make empty to input value for every event
                    item.value = "";

                }
                else {
                    let div = document.createElement("div");
                    div.setAttribute("class", "all");
                    let img = document.createElement("img")
                    img.src = data[i]['show']['image'].medium;
                    div.appendChild(img)
                    let heading1 = document.createElement("h4");
                    let heading2 = document.createElement("h4");
                    let heading3 = document.createElement("h4");
                    let btn = document.createElement("button");
                    btn.setAttribute("id", "btn2");

                    heading1.innerText = `Name: ${data[i]['show'].name}`;
                    heading2.innerText = `Start Date: ${data[i]['show'].premiered}`;
                    heading3.innerText = `Language: ${data[i]['show'].language}`;
                    btn.innerText = "Show Detailes"
                    div.appendChild(heading1)
                    div.appendChild(heading2)
                    div.appendChild(heading3)
                    div.appendChild(btn)

                    box2.appendChild(div)

                    item.value = ""




                }

                // let btns = document.querySelectorAll("#btn2");
                // console.log(btns)

                // btns.addEventListener("click", () => {
                //     console.log("helloo")
                // })


            }

            // let btns = document.querySelectorAll("#btn2");
            // console.log(btns)

            // btns.addEventListener("click", () => {
            //     console.log("helloo")
            // })

        })
});





