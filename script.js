function sendRequest(){

let agree =
document.getElementById("agree").checked;


if(!agree){

document.getElementById("result").innerHTML =
"❌ لطفاً رضایت خود را تأیید کنید";

return;

}


document.getElementById("result").innerHTML =
"✅ درخواست شما ثبت شد. برای ادامه مراحل با مالک هماهنگ می‌شود.";


}
