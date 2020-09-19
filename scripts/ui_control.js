let descPanel = document.getElementById("description_panel");

let btnHideDescPanel = document.getElementById("btn_hide_desc_panel");
btnHideDescPanel.addEventListener("click", function (evt) {
    $(descPanel).animate({ height: "toggle" }, 300, function () {}); 
});

let rows = descPanel.getElementsByClassName("row");
// console.log(rows)

// let btnSlide = document.getElementById("btnSlide");
// btnSlide.addEventListener("click", function (evt) {
//     let index = curreentIndex + 1;
//     if (index > 4) {
//         return;
//     }
//     showInstruction(index);
// })

let curreentIndex = 0;

function showInstruction(index) {

    $(rows[curreentIndex]).slideUp({
        duration: 300,
        done: () => {
            $(rows[index]).slideDown({
                duration: 350,
                easing : "easeInOutQuad"
            });
        },
        easing: "easeInSine"
    });

    curreentIndex = index;
}