// Zipcode Validation
var regex = /^\d{1,5}$/;
var answer = SSI_GetValue("zipcode");
if(regex.test(answer)) { 
}
else {
  strErrorMessage="Please revise your five-digit Zip Code."; 
}


$(document).on('ready', function(){
    // Form validation
  
  $('order-form').validate({
    submitHandler: function(form) {
      form.submit();
      
      
    },
        rules: {
            "your-name": {
                required: true,
                maxlength: 128
            },
              "your-address": {
               required: true
            },
            "your-city": {
                required: true
            } ,            
            "your-state": {
                required: true,
                minlength: 2,
                maxlength: 2
              
            },
            "your-zip": {
                required: true,
                minlength: 5,              
                maxlength: 5,
                digits: true
            },
            "card-holder-name": {
                required: true,
                maxlength: 128
            },
            "card-number": {
                required: true,
                creditcard: true,
                digits: true
            },
            "expiry-month": {
                required: true
            },
            "expiry-year": {
                required: true
            },          
            "cvv": {
                required: true,
                minlength: 3,
                maxlength: 3,
                digits: true
            },
            "shipping-method": {
                required: true
              
            } ,
            "comments": {
                maxlength: 500
              
              
            }
        }
    });
    // Tooltips
    $('label span.glyphicon').tooltip();
});
    
// TOOLTIP FUNCTION

$(document).ready(function() {
   $('[data-toggle="tooltip"]').tooltip();
  
  });
    
  // array of state abbreviations
  var stateAB =  [ "AL", "AK" , "AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY",
                  "LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND"
                  ,"OH", "OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",];
  
// new validation method to check for state abbreviations
  // the function checks if the value input is equal to any of the strings within 
  // the stateAB array
  
   jQuery.validator.addMethod("stateLetters", function(value, element) {
  return this.optional(element) || $.inArray(value,stateAB) !== -1;
}, "Please use only the correct two letter state code");
  
  // regular expression for all numbers
   var regnoNum = /^[a-zA-Z]+$/;
  
  //new validation method to check if there are numbers this function checks 
  // if the value is in the regular expression 
  jQuery.validator.addMethod("noNumbers", function(value, element) {
  return this.optional(element) || regnoNum.test(value);
}, "Please use only letters for your name not numbers");
  
  // regular expression for numbers or spaces
  var regNumSpace =/[0-9 ]+/;
  
  // new validation method that checks if there are either numbers
  //or spaces
 jQuery.validator.addMethod("ccNumbers", function(value, element) {
  return this.optional(element) || regNumSpace.test(value);
}, "Please use a valid credit card number");
    
});    
    
  
 

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
