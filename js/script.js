const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = document.querySelector(".auto-com");

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];

    if (userData) {
        emptyArray = suggestions.filter((data) => {
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return '<li onclick="select(this)">' + data + '</li>';
        });
        console.log(emptyArray);
        suggBox.classList.add("active");
        showSuggestions(emptyArray);

        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].onclick = function () {
                select(this);
            };
        }
    } else {
        suggBox.classList.remove("active");
    }
};

function select(element) {
    alert(1);
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    suggBox.classList.remove("active");
}

function showSuggestions(list) {
    let listData;

    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join("");
    }
    suggBox.innerHTML = listData;
}
