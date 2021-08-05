function display() {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en_US/hello").then((data) => {
        return data.json()
    }).then(response => {
        localStorage.setItem("apidata", JSON.stringify(response))
        console.log(response)
        response.forEach((resp, i) => {
            var myTr = document.createElement("tr")

            var myTd = document.createElement("td");
            myTd.innerHTML = i + 1
            var myTd1 = document.createElement("td");
            var anch1 = document.createElement("a");
            anch1.setAttribute("href", "phonetics.html")
            anch1.innerHTML = resp.phonetics.length
            myTd1.appendChild(anch1)
            var myTd2 = document.createElement("td")
            var anch2 = document.createElement("a");
            anch2.innerHTML = resp.meanings.length

            anch2.setAttribute("href", "meanings.html")
            myTd2.appendChild(anch2)

            myTr.appendChild(myTd)
            myTr.appendChild(myTd1)
            myTr.appendChild(myTd2)

            console.log(resp)
            document.querySelector("tbody").appendChild(myTr)
        });
    })
}

display()