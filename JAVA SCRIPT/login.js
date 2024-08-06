//javascript logic (single line comments)
//action can be implemented by functions
function validate()
{
    //request data gathering logic
    var email = document.loginform.email.value;
    var pwd = document.loginform.pwd.value;
    var qualification = document.loginform.qualification.value;
    var gender=document.loginform.gender.value


    //validation logic 
    if(email=="")
    {
        alert("please enter email !!!");
        return false;
    }
    if(pwd=="")
    {
        alert("please enter password !!!");
        return false;
    } 
    if(qualification=="select")
    {
        alert("please select qualification!!!");
        return false;
    }
    if(gender=="select")
    {
        alert("please select your gender")
        return false;
    }
    return true;
}