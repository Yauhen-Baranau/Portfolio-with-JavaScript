"use strict";
var formTag = document.forms.MYFORM;

formTag.elements.developers.addEventListener('blur', (EO)=>validDev(false), false)
formTag.elements.siteName1.addEventListener('blur',(EO)=> validSiteName(false), false)
formTag.elements.urlName1.addEventListener('blur',(EO)=> validUrlName(false), false)
formTag.elements.dataStart.addEventListener('change',(EO)=> validData(false), false)
formTag.elements.visitors.addEventListener('blur',(EO)=> validVisitors(false), false)
formTag.elements.mail.addEventListener('blur',(EO)=> validMail(false), false)
formTag.elements.RUBRIKA.addEventListener('change',(EO)=> validRubrika(false), false)
var d = document.getElementById('ddd');
d.addEventListener('click' , forDiv, false)
formTag.elements.agree1.addEventListener('change', validCheck, false)
formTag.elements.myText.addEventListener('blur',(EO)=> validTxt(false), false)

function validDev(f) {
    var developersField = formTag.elements.developers;
    var developersValue = developersField.value;
    var count =0;
    if (f){
        developersField.focus()
    }
    if (developersValue.length <= 10) {
        developersField.nextSibling.innerText = "Поле должно содержать не менее 10 символов";
        count++
    } else
    developersField.nextSibling.innerText = "";
    return count

}

function validSiteName(f) {
    var siteNameField = formTag.elements.siteName1;
    var siteNameValue = siteNameField.value;
    var count =0;
    if (f){
        siteNameField.focus()
    }
    if (siteNameValue.length < 5) {
        siteNameField.nextSibling.innerText = "Название должно содержать не менее 5 символов";
        count++
    } else
    siteNameField.nextSibling.innerText = "";
    return count
}

function validUrlName(f) {
    var urlNameField = formTag.elements.urlName1;
    var urlNameValue = urlNameField.value;
    var count =0;
    if (f){
        urlNameField.focus()
    }
    if (urlNameValue.length <= 3)  {
        urlNameField.nextSibling.innerText = "URL  должен быть не менее 3 символов";
        count++
    } else
    urlNameField.nextSibling.innerText = "";
    return count

}

function validData (f) {
    var dataStartField = formTag.elements.dataStart;
    var dataStartValue = dataStartField.value;
    var count =0;
    if (f){
        dataStartField.focus()
    }
    if (dataStartValue === "") {
        dataStartField.nextSibling.innerText = "Вы не выбрали дату"
           count++
    } else
    dataStartField.nextSibling.innerText = ""
    return count

}

function validVisitors (f){
    var visitorsField = formTag.elements.visitors;
    var visitorsValue = parseInt(visitorsField.value);

    var count =0;
    if (f){
        visitorsField.focus()
    }
    if (isNaN(visitorsValue)) {
        visitorsField.nextSibling.innerText = "Введите цифру корректно"
        count++
    } else
    visitorsField.nextSibling.innerText = ""
    return count
}

function validMail (f) {
    var emailField = formTag.elements.mail;
    var emailValue = emailField.value;
    var count =0;
    if (f){
        emailField.focus()
    }
    if (emailValue.length === 0) {
        emailField.nextSibling.innerText = "Введите е-mail!"
        count++
    } else if (emailValue.indexOf("@") === -1) {
        emailField.nextSibling.innerText = "е-mail необходимо ввести с символом '@' "
        count++
    } else
    emailField.nextSibling.innerText = "";
    return count
}

function validRubrika(f) {
    var rubrikaField = formTag.elements.RUBRIKA;
    var rubrikaValue = rubrikaField.value
    var count =0;
    if (f){
        rubrikaField.focus()
    }
    if (rubrikaValue <= 2) {
        rubrikaField.nextSibling.innerText = "рубрика связана с продажей электробриборов, подумайте еще"
        count++
    } else
    rubrikaField.nextSibling.innerText = ""
    return count
}

function forDiv (){
    var answerField = formTag.elements.answer;
    var answerValue = answerField.value;
    var count =0;

    if (answerValue === "") {
        document.getElementById("er").innerText = "Вы не выбрали размещение"
        count++
    } else
    document.getElementById("er").innerText = ""
    return count
}

function validCheck () {
    var agreeField = formTag.elements.agree1;
    var agreeValue = agreeField.checked;
    var count =0;

    if (!agreeValue) {
        agreeField.nextSibling.innerText = "необходимо согласиться с условиями формы"
        count++
    } else
    agreeField.nextSibling.innerText = ""
    return count
}

function validTxt (f) {
    var myTxtField = formTag.elements.myText;
    var myTxtValue = myTxtField.value;
    var count =0;
    if (f){
        myTxtField.focus()
    }
    if (myTxtValue.length < 20) {
        myTxtField.nextSibling.innerText = "Необходимо ввести более 20 символов"
        count++
    } else
    myTxtField.nextSibling.innerText = ""
    return count
}



formTag.addEventListener('submit',validateForm,false)
function validateForm(EO) {
    EO = EO || window.event;

    var count = 0;


    count += validDev(!count)
    count += validSiteName(!count)
    count += validUrlName(!count)
    count += validData(!count)
    count += validVisitors(!count)
    count += validMail(!count)
    count += validRubrika(!count)
    count += forDiv(!count)
    count += validCheck(!count)
    count += validTxt(!count)

    if (count) {
        EO.preventDefault()
    }



}