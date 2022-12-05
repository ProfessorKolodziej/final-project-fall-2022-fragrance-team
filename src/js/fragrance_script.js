// let prevDisplay = document.getElementsByClassName('occationSectionHeader')[0];
window.onload = function (){
    const mainPic = document.getElementsByClassName("mainPic")[0];
    mainPic.activeId = "empty";
}
otherFunction = function () {
    console.log("&&&&&&&&&&&&&&")
}
loadRightPicture = function (className){
    const mainPic = document.getElementsByClassName("mainPic")[0];
    if (mainPic !== className) {
        document.getElementsByClassName(mainPic.activeId+"Bottle")[0].style.display = "none";
        document.getElementsByClassName(className+"Bottle")[0].style.display = "inline";
        mainPic.activeId = className;
    }
    
}
on_click = function (className) {
    const suffix = 'Info'; // 'SectionHeader'
    const showList = ["occation",
                      "fashion",
                      "feeling",
                      "scent",
                      "price"];
    showList.forEach(sectionName => {
        if (sectionName === className) {
            console.log("matched! ", sectionName);
            toBeDisplayed = document.getElementsByClassName(sectionName+ suffix)[0];
            // toBeDisplayed.style.visibility = "visible";
            toBeDisplayed.style.display = "inline";
        }
        else {
            console.log("NOT matched ", sectionName);
            toBeHidden = document.getElementsByClassName(sectionName+ suffix)[0];
            // toBeHidden.style.visibility = "hidden";
            toBeHidden.style.display = "none";
        }
    })
    var sectionInProgress = document.getElementsByClassName(className+"Buttons")[0];

    var sectionButtons = sectionInProgress.getElementsByClassName("singleButton"); 
    const selectionNum = sectionButtons.length;
    var index = 0;
    while (index <  selectionNum) {
        let button = sectionButtons[index++];
        button.onclick = function () {
            // alert("clicked!");
            if (sectionInProgress.activeButton !== button.id){
                const prevSelectedButton = document.getElementById(sectionInProgress.activeButton);
                if (prevSelectedButton) {
                    // prevSelectedButton.style.background="gray";
                    prevSelectedButton.style.color="black";
                }
                
                // button.style.background="black";
                button.style.color="green";
                sectionInProgress.activeButton = button.id;
            }
            
            otherFunction();
            loadRightPicture(className);
            // this.hiworld();
        }
    }
    // var fragrancePage = {};
    
    // fragrancePage.occationButton = document.getElementsByClassName("occationButton")[0]; 
    // fragrancePage.fashionButton = document.getElementsByClassName("fashionButton")[0]; 
    // fragrancePage.feelingButton = document.getElementsByClassName("feelingButton")[0]; 
    // fragrancePage.scentButton = document.getElementsByClassName("scentButton")[0]; 
    // fragrancePage.priceButton = document.getElementsByClassName("priceButton")[0]; 

    // fragrancePage.showList = ["occation","fashion", "feeling", "scent", "price"];
    // fragrancePage.mainSectionNum = fragrancePage.showList.length;
    // fragrancePage.mainButtonList = [];
    // fragrancePage.showList.forEach((className) => {
    //     fragrancePage.mainButtonList.push(document.getElementsByClassName(className+"Button")[0]);
    // })
    // // [fragrancePage.occationButton, fragrancePage.fashionnButton, fragrancePage.feelingButton, fragrancePage.scentButton, fragrancePage.priceButton] = [...fragrancePage.mainButtonList];
    
    // var someFunction = function (){
    //     console.log ("some function ???")
    // }
    // var sectionCallback = function (className) {
    //     console.log("something happeneddd" + className);
    //     someFunction();

    //     const suffix = 'Info'; // 'SectionHeader'
    //     fragrancePage.showList.forEach(sectionName => {
    //         if (sectionName === className) {
    //             console.log("matched! ", sectionName);
    //             toBeDisplayed = document.getElementsByClassName(sectionName+ suffix)[0];
    //             // toBeDisplayed.style.visibility = "visible";
    //             toBeDisplayed.style.display = "inline";
    //         }
    //         else {
    //             console.log("NOT matched ", sectionName);
    //             toBeHidden = document.getElementsByClassName(sectionName+ suffix)[0];
    //             // toBeHidden.style.visibility = "hidden";
    //             toBeHidden.style.display = "none";
    //         }
    //     })


    // }.bind(fragrancePage);
    // var i = 0;
    // // while (i< fragrancePage.mainSectionNum){
    // //     fragrancePage.mainButtonList[i].addEventListener('click', sectionCallback(fragrancePage.showList[i]));
    // //     i++;
    // // }
    
    // fragrancePage.occationButton.addEventListener('click', sectionCallback("occation"));
    // fragrancePage.fashionButton.addEventListener('click', sectionCallback("fashion"));
    

  }
// var occationButton = document.getElementsByClassName("occationButton")[0]; 


// occationButton.addEventListener('click', () => {
//     console.log("something happeneddd")
// })
// function buttonClick(className) {
//     console.log("buttttonn clicked");
//     const suffix = 'Info'; // 'SectionHeader'
//     const showList = ["occation",
//                       "fashion",
//                       "feeling",
//                       "scent",
//                       "price"];
//     showList.forEach(sectionName => {
//         if (sectionName === className) {
//             console.log("matched! ", sectionName);
//             toBeDisplayed = document.getElementsByClassName(sectionName+ suffix)[0];
//             // toBeDisplayed.style.visibility = "visible";
//             toBeDisplayed.style.display = "inline";
//         }
//         else {
//             console.log("NOT matched ", sectionName);
//             toBeHidden = document.getElementsByClassName(sectionName+ suffix)[0];
//             // toBeHidden.style.visibility = "hidden";
//             toBeHidden.style.display = "none";
//         }
//     })
    
//     var sectionInProgress = document.getElementsByClassName(className+"Buttons")[0];

//     var sectionButtons = sectionInProgress.getElementsByClassName("singleButton"); 
//     const selectionNum = sectionButtons.length;
//     var index = 0;
//     while (index <  selectionNum) {
//         let button = sectionButtons[index++];
//         button.onclick = function () {
//             alert("clicked!")
//             this.hiworld();
//         }
//     }
// }

