

  let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    console.log(data["color"]);
  });

try
{
  chrome.storage.sync.get('loginData', function(data) {
    if(typeof data["loginData"] == typeof undefined)
    {
    	document.getElementById("form1").style.display = "none";
    	document.getElementById("form2").style.display = "block";
    }
    else
    {
    	document.getElementById("form1").style.display = "block";
    	document.getElementById("form2").style.display = "none";
    }
  });
}
catch(err)
{
		document.getElementById("form1").style.display = "none";
    	document.getElementById("form2").style.display = "block";
}


 

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('img');
    // onClick's logic below:
    link.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      		chrome.tabs.executeScript(
          		tabs[0].id,
          		{code: 'location.href="https://id2.rtu.lv";'});
    		});
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('save');
    // onClick's logic below:
    link.addEventListener('click', function() {
    			let login = document.getElementById("login").value;
    			let password = document.getElementById("password").value;
    			let pin1 = document.getElementById("pin1").value;
    			console.log(login + password + pin1);
		        chrome.storage.sync.set({loginData: {login: login, password: password, pin: pin1}}, function() {
		    });
		        location.reload();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('delete');
    // onClick's logic below:
    link.addEventListener('click', function() {
		        chrome.storage.sync.remove("loginData", function() {
		    });
		    location.reload();
    });
});
/*
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('loginbtn');
    // onClick's logic below:
    link.addEventListener('click', function() {
		        chrome.storage.sync.get("loginData", function(data) {
		        	if(data["loginData"]["pin"] == document.getElementById("pin").value)
		        	{
		        		console.log("yes");
		        		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					      		chrome.tabs.executeScript(
					          		tabs[0].id,
					          		{code: 'document.getElementById("IDToken1").value = "' + data["loginData"]["login"] + '";'});
					    		});
		        		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					      		chrome.tabs.executeScript(
					          		tabs[0].id,
					          		{code: 'document.getElementById("IDToken2").value = "' + data["loginData"]["password"] + '";'});
					    		});
		        		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					      		chrome.tabs.executeScript(
					          		tabs[0].id,
					          		{code: 'document.getElementsByName("Login.Submit")[0].click();'});
					      		console.log('defaultSubmit();');
					    		});
		        	}
		        	else
		        	{
		        		console.log("no");
		        	}
		    });
    });
});
*/
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('pin');
    // onClick's logic below:
    link.addEventListener('keyup', function() {
		        chrome.storage.sync.get("loginData", function(data) {
		        	if(data["loginData"]["pin"] == document.getElementById("pin").value)
		        	{
		        		console.log("yes");
		        		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					      		chrome.tabs.executeScript(
					          		tabs[0].id,
					          		{code: 'document.getElementById("IDToken1").value = "' + data["loginData"]["login"] + '";'});
					    		});
		        		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					      		chrome.tabs.executeScript(
					          		tabs[0].id,
					          		{code: 'document.getElementById("IDToken2").value = "' + data["loginData"]["password"] + '";'});
					    		});
		        		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					      		chrome.tabs.executeScript(
					          		tabs[0].id,
					          		{code: 'document.getElementsByName("Login.Submit")[0].click();'});
					      		console.log('defaultSubmit();');
					    		});
		        	}
		        	else
		        	{
		        		console.log("no");
		        	}
		    });
    });
});