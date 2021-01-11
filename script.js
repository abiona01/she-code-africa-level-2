function validateForm() {
    var z = document.forms["myForm"]["user_phone"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    
    if (y == "") {
      alert("Name must be filled out");
      return false;
    }

    if (z == "" || z < 11) {
    alert("Input not valid");
    }

  }