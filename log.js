(function(doc){
    var scriptElm = doc.scripts[doc.scripts.length - 1];
    var warn = ['[ionicons] Deprecated script, please remove: ' + scriptElm.outerHTML];
  
    warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')
  
    var parts = scriptElm.src.split('/');
    parts.pop();
    parts.push('ionicons');
    var url = parts.join('/');
  
    var scriptElm = doc.createElement('script');
    scriptElm.setAttribute('type', 'module');
    scriptElm.src = url + '/ionicons.esm.js';
    warn.push(scriptElm.outerHTML);
    scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm);
  
    
    scriptElm = doc.createElement('script');
    scriptElm.setAttribute('nomodule', '');
    scriptElm.src = url + '/ionicons.js';
    warn.push(scriptElm.outerHTML);
    scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm)
    
    console.warn(warn.join('\n'));
  
  })(document);
  function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    // Basic validation
    if (username === "" || password === "") {
      errorMessage.textContent = "Username and password cannot be empty!";
      return false;
    }
    
    // Simulating a basic check (replace with real authentication logic)
    if (username === "user" && password === "password123") {
      alert("Login successful!");
      return true; // Allow form submission
    } else {
      errorMessage.textContent = "Invalid username or password!";
      return false; // Prevent form submission
    }
  }
  