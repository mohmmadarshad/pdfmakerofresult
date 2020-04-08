
$(function () {
    var nua = navigator.userAgent
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }
})

function changebranch(intt, brn) {
    var intt = document.getElementById(intt);
    var brn = document.getElementById(brn);
    brn.innerHTML = "";
    if (intt.value == "008") {
        var optionarray = ["selected|SELECT THE BRANCH.............", "012|012-INFORMATION TECHNOLOGY", "002|002-CIVIL ENGINEERING", "009|009-ELECTRONICS ENGINEERING", "016|016-PHARMACY"];
    }
    else if (intt.value == "035") {
        var optionarray = ["selected|SELECT THE BRANCH.............", "012|012-COMPUTER SCINCESE"];
    }
    else if (intt.value == "122") {
        var optionarray = ["selected|SELECT THE BRANCH.............", "002|002-CIVIL ENGINEERING"];
    }
    for (var option in optionarray) {
        var pair = optionarray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        brn.options.add(newOption);
    }
}
function changeyear(brn, year) {
    var brn = document.getElementById(brn);
    var year = document.getElementById(year);
    year.innerHTML = "";
    if (brn.value == "012") {
        var optionarray = ["selected|SELECT THE YEAR.............", "1|(I) 1st YEAR", "2|(II) 2nd YEAR", "3|(III) 3rd YEAR"];
    }
    else if (brn.value == "002") {
        var optionarray = ["selected|SELECT THE YEAR.............", "1|(I) 1st YEAR", "2|(II) 2nd YEAR", "3|(III) 3rd YEAR"];
    }
    else if (brn.value == "009") {
        var optionarray = ["selected|SELECT THE YEAR.............", "1|(I) 1st YEAR", "2|(II) 2nd YEAR", "3|(III) 3rd YEAR"];
    }
    for (var option in optionarray) {
        var pair = optionarray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        year.options.add(newOption);
    }
}
function changesemester(year, sem) {
    var year = document.getElementById(year);
    var sem = document.getElementById(sem);
    sem.innerHTML = "";
    if (year.value == "1") {
        var optionarray = ["selected|SELECT THE SEMESTER.............", "s1|(I) 1st SEMESTER", "s2|(II) 2nd SEMESTER"];
    }
    else if (year.value == "2") {
        var optionarray = ["selected|SELECT THE SEMESTER.............", "s3|(III) 3rd SEMESTER", "s4|(IV) 4th SEMESTER"];
    }
    else if (year.value == "3") {
        var optionarray = ["selected|SELECT THE SEMESTER.............", "s5|(V) 5th SEMESTER", "s6|(VI) 6st SEMESTER"];
    }
    for (var option in optionarray) {
        var pair = optionarray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        sem.options.add(newOption);

    }
}
function download(inst, brn, year, sem)
{
    var inst = document.getElementById(inst);
    var brn = document.getElementById(brn);
    var year = document.getElementById(year);
    var sem = document.getElementById(sem);
    if (inst.value == "008" && brn.value == "012" && year.value == "3" && sem.value == "s6")
    {
        window.location.href = 'web/pprintfile/0081236.html';
    }
    else if (inst.value == "008" && brn.value == "012" && year.value == "3" && sem.value == "s5") {
        window.location.href = 'web/pprintfile/0081235.html';
    }
    else if (inst.value == "008" && brn.value == "012" && year.value == "2" && sem.value == "s4") {
        window.location.href = 'web/pprintfile/0081224.html';
    }
    else if (inst.value == "008" && brn.value == "012" && year.value == "2" && sem.value == "s3") {
        window.location.href = 'web/pprintfile/0081223.html';
    }
    else if (inst.value == "008" && brn.value == "012" && year.value == "1" && sem.value == "s2") {
        window.location.href = 'web/pprintfile/0081212.html';
    }
    else if (inst.value == "008" && brn.value == "012" && year.value == "1" && sem.value == "s1") {
        window.location.href = 'web/pprintfile/0081211.html';
    }
    else
    {
        alert('Sorry Your Dose Not Filed The Form Right');
    }
}

function openbackpaperdiv(selbackpaper) {
    var selbackpaper = document.getElementById(selbackpaper);

    if (selbackpaper.value == "yes") {
        document.getElementById('backpapertable').style.display = 'block';
        document.getElementById('nobackpaper').style.display = 'none';
    }
    else {
        document.getElementById('nobackpaper').style.display = 'block';
        document.getElementById('backpapertable').style.display = 'none';
    }
}
function contactform() {
    var cname = document.contact.name;
    var cemail = document.contact.email;
    var cphone = document.contact.phone;
    var massg = document.contact.massage;
    if (name_validation(cname, 3, 20)) {
        if (email_validation(cemail)) {
            if (phone_validation(cphone, massg)) {
            }
        }
    }
    return false;
}
    function name_validation(cname, max, min) {
        var name_len = cname.value.length;
        if (name_len == 0 || name_len >= min || name_len < max) {
            alert("NAME NOT BE EMPTY OR LENGTH BETWEEN " + max + " or " + min);
            cname.focus();
            return false;
        }
        return true;
    }
    function email_validation(cemail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (cemail.value.match(mailformat)) {
            return true;
        }
        else {
            alert("Enter A Valid Mail");
            cemail.focus();
            return false;
        }
    }
    function phone_validation(cphone,massg) {
        var num = /^[0-9]+$/;
        if (cphone.value.match(num)) {
            massg.focus();
            return true;
        }
        else {
            alert("Please Enter The 10 Digite Mobile Number");
            cphone.focus();
            return false;
        }
    }

    $(document).ready(function () {
        $("#submit").click(function () {
            var name = $("#name").val();
            var email = $("#email").val();
            var phone_no = $("#phone").val();
            var massage = $("#massage").val();
            $("#returnmassage").empty();
            if (name==''||email==''||phone_no==''||massage=='') {
                alert("All Filled Are Compulsory Please Filled All And Then We Contact To You !");
            }
            else {
                $.post("formsubmit.php", {
                    name1: name, 
                    email1: email,
                    phone_no1: phone_no,
                    massage1: massage}, function(data){
                        $("#returnmassage").append(data);
                        if (data == "Your Message is Send To Developers Thank you to Send Feedback us.") {
                            $("#form")[0].reset();
                        }
                    }
                );
            }
        });
    });