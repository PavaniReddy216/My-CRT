//javascript logic (single line comments)
//action can be implemented by functions
function validate()
{
    //request data gathering logic
    var USERNAME = document.loginform.USERNAME.value;
    var pwd = document.loginform.pwd.value;
    var pwd1 = document.loginform.pwd1.value;
    var GENDER=document.loginform.GENDER.value;
    var MOBILENUMBER = document.loginform.MOBILENUMBER.value;
    var DOB = document.loginform.DOB.value;
    var add = document.loginform.add.value;
    var qualification = document.loginform.qualification.value;
    var skills = document.loginform.skills.value;
    var shift=document.loginform.shift.value;
    var resume=document.loginform.resume.value;
    resume=resume.length;

    //validation logic 
    if(USERNAME=="")
    {
        alert("please enter USERNAME !!!");
        return false;
    }
    if(pwd=="")
    {
        alert("please enter password !!!");
        return false;
    }
    if(pwd1=="")
    {
        alert("please enter confirm password !!!");
        return false;
    }
    if(pwd1=!pwd)
    {
        alert("Invalid confirm password !!!");
        return false;
    } 
    if(GENDER=="")
    {
        alert("please select your gender")
        return false;
    }
    if(MOBILENUMBER=="")
    {
        alert("please enter mobile number !!!");
        return false;
    }
    if(DOB=="")
    {
        alert("please enter DOB !!!");
        return false;
    }
    if(add=="")
    {
        alert("please enter Address !!!");
        return false;
    }
    if(qualification=="select")
    {
        alert("please select qualification!!!");
        return false;
    }
    if(skills=="select")
    {
        alert("please select Skills !!!");
        return false;
    }
    if(shift=="")
    {
        alert("please select your preferred shift")
        return false;
    }
    if(resume==0 && "No file chosen")
    {
        alert("please select your Resume file")
        return false;
    }
    return true;
} 