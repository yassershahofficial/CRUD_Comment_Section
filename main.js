let form = document.getElementById("form");
let input = document.getElementById("msgPosting");
let blankcheck = document.getElementById("blankcheck");
let posts = document.getElementById("posts");

//check event submit (button) inside the form 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Button is clicked");
    formValidation();
})

//check whether textarea input contains text
let formValidation = () => {
    if(input.value == ""){
        blankcheck.innerHTML = "POST CANNOT BE BLANK";
        console.log("Failure");
    }
    else{
        blankcheck.innerHTML = "";
        console.log("Success");
        acceptData();
    }
}

//declare storage data
let data = [];

//store the text inside the storage data
let acceptData = () => {
    data["msg"] = input.value;
    console.log("Data is pushed");
    console.log(data);
    uploadData();
}

//upload data with template into the posts and reset textarea
let uploadData = () => {
    posts.innerHTML += 
    `
    <div class="msg-comment">
        <img class="rightmargin" src="img/profile.png">
        <div class="msg-comment-text">
            <div>
                <h2 class="rightmargin">Yasser Shah</h2>
                <h3>Today</h3>
            </div>
            <p>${data.msg}</p>
        </div>
        <div class="msg-comment-icon">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>
    `;
    console.log("Data uploaded");
    input.value = "";
}