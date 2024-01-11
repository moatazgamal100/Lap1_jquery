
let im = document.querySelector("#im");
let st = document.querySelector("#stop");
let con = document.querySelector("#con");
let x = 1;
let myint;
function run() {
    myint = setInterval(function () {
    x++
    if (x > 6) {
        x = 1;
    }
    im.setAttribute("src", `images/${x}.jpg`);
    
}, 1000);
}
run();
st.addEventListener("click", function (e) {
    clearInterval(myint);
    st.classList.toggle("hide");
    con.classList.toggle("hide");

});
con.addEventListener("click", function () {
    run();
    st.classList.toggle("hide");
    con.classList.toggle("hide");
})

$(".sec .boxing img").on("click", function (e) {
    console.log($(this.parentElement).find("p").slideToggle(1000));
});

