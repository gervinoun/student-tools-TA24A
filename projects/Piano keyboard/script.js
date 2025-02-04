const c_css = document.querySelector(".c")
const d_css = document.querySelector(".d")
const e_css = document.querySelector(".e")
const f_css = document.querySelector(".f")
const g_css = document.querySelector(".g")
const a_css = document.querySelector(".a")
const h_css = document.querySelector(".h")
c_css.style = "position: absolute; bottom: 20px; left: 740px; font-size: 50px;";
d_css.style = "position: absolute; bottom: 20px; left: 920px; font-size: 50px;";
e_css.style = "position: absolute; bottom: 20px; left: 1090px; font-size: 50px;";
f_css.style = "position: absolute; bottom: 20px; left: 1250px; font-size: 50px;";
g_css.style = "position: absolute; bottom: 20px; left: 1420px; font-size: 50px;";
a_css.style = "position: absolute; bottom: 20px; left: 1600px; font-size: 50px;";
h_css.style = "position: absolute; bottom: 20px; left: 1770px; font-size: 50px;";



addEventListener("keydown", function (nupp) {
    if (nupp.key === "c") {
        c_css.style = " "
        c_css.style = "position: absolute; bottom: 10px; left: 710px; font-size: 50px; border: green; background-color: green; border-radius: 50px; width: 100px; height: 100px"
     } else if (nupp.key === "d") {
        d_css.style = " "
        d_css.style = "position: absolute; bottom: 10px; left: 890px; font-size: 50px; border: green; background-color: green; border-radius: 50px; width: 100px; height: 100px"
     } else if (nupp.key === "e") {
        e_css.style = " "
        e_css.style = "position: absolute; bottom: 10px; left: 1060px; font-size: 50px; border: green; background-color: green; border-radius: 50px; width: 100px; height: 100px"
     } else if (nupp.key === "f") {
        f_css.style = " "
        f_css.style = "position: absolute; bottom: 10px; left: 1220px; font-size: 50px; border: green; background-color: green; border-radius: 50px; width: 100px; height: 100px";
     } else if (nupp.key === "g") {
        g_css.style = " "
        g_css.style = "position: absolute; bottom: 10px; left: 1390px; font-size: 50px; background-color: green; border-radius: 50px; width: 100px; height: 100px";
     }
});
addEventListener("keyup", function (nupper) {
    if (nupper.key === "c") {
        c_css.style = " "
        c_css.style = "position: absolute; bottom: 20px; left: 740px; font-size: 50px;";
    } else if (nupper.key === "d") {
        d_css.style = " "
        d_css.style = "position: absolute; bottom: 20px; left: 920px; font-size: 50px;";
    } else if (nupper.key === "e") {
        e_css.style = " "
        e_css.style = "position: absolute; bottom: 20px; left: 1090px; font-size: 50px;"
    } else if (nupper.key === "f") {
        f_css.style = " "
        f_css.style = "position: absolute; bottom: 20px; left: 1250px; font-size: 50px;";
    } else if (nupper.key === "g") {
        g_css.style = " "
        g_css.style = "position: absolute; bottom: 20px; left: 1420px; font-size: 50px;";
    }
});