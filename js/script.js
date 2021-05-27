const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async () => {
    const req = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json")
    const data = await req.json();
    console.log(data)
    displayContactList(data);
}


const displayContactList = (data) => {
    for (let item of data) {
        if (item.registered === "no") {
            let listItem = document.createElement("li");
            listItem.innerText = `Name: ${item.name}`
            notRegistered.append(listItem)
        }
    }
}

getRegistrationData();