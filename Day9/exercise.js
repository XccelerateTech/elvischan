//AAAAAAAAAAAAAAAAA
// console.log($('input[name="phone"]'));
// console.log($('.row')[1]);
// console.log($('section'));
// console.log($('input[placeholder="Email"]'));

var action = $('#register-form').attr('action');
// action is now '/register'
var name = $('#name').val();
// name is now the input value of the text field.
$('#name').val("Xccelerate")
$('#name').css("position","absolute")
// `input` position becomes absolute
var position = $('#name').css("position")
// `position` is absolute
$('#name').addClass("class-1")

//BBBBBBBBBBBBBBBBBBBBBBBBB
$('tbody').append('<tr class="row"><td>peter</td><td>123456</td><td>qweqim@gmail.com</td></tr>');
$('#form1').append('<button id="clearButton" type="button" >clear</button>');
$('head').append('<title>Elvis Page</title>')
$('#contact-list th').css('color','red')
$('#contact-list td').css('color','blue')

//DDDDDDDDDDDDDDDDDDDDDDDDDD
//111111111
$("#row-name input").keydown(function() {
    var maxChars = 10 ;
    if ($(this).val().length > maxChars) {
        $(this).val($(this).val().substr(0, maxChars));
        $(this).css('border','solid 2px red');
        //Take action, alert or whatever suits
        // alert("This field can take a maximum of 10 characters");
    }
    else {
        $(this).css('border','solid 2px black');
    }
});

//22222222222222
$("#row-phone input").blur(function(e) {
    var input = e.target.value;
    if (input.length > 16 || input.length < 6 || isNaN(input)) {
        
        //Take action, alert or whatever suits
        $(this).css('border','solid 2px red');
    }
    else {
        $(this).css('border','solid 2px black');       
    } 
});

function blurSomehting (a) {
    $(a).blur(function(e) {
        var input = e.target.value;
        if (input.length > 16 || input.length < 6 || isNaN(input)) {
            
            //Take action, alert or whatever suits
            $(this).css('border','solid 2px red');
        }
        else {
            $(this).css('border','solid 2px black');       
        } 
    });
}

blurSomehting ("#row-email input");

//333333333333333333
$("#clearButton").click(function() {
    $("#row-name input").val('');
    $("#row-phone input").val('');
})



//4444444444444444444
$( "#clickable-div" ).after('<form id="form2" class="contact-form">'+
    '<div id="row-name">'+
        '<input type="text" name="name" placeholder="Name"/>'+
    '</div>'+
    '<div id="row-phone">'+
        '<input type="text" name="phone" placeholder="Telephone Number"/>'+
    '</div>'+
    '<div id="row-email">'+
       ' <input type="text" name="email" placeholder="Email"/>'+
    '</div>'+
    '<div id="row-submit">'+
        '<input type="submit" value="submit"/>'+
    '</div>'+
    '<input type="reset" value="clear" class="clear"/>'+
    '</form>'
);

//5555555555555555555555555
$('#contact-list').on('click','.row',function(e) { //target a specific row by clicking on the elements in that row
    var rowElements = $(this).children(); //declare variables, store the children of the clicked element in a variable 
    // console.log(rowElements);
    // console.log("rowElements");
    // console.log($(rowElements[1]).html());
    var updateFormElements = $('#form2 input').slice(0,rowElements.length); // get all elements (values right now empty) from the array (update-form input) --> store values in new variable, updateFormElements
    for(var i =0; i < rowElements.length; i++) {
        $(updateFormElements[i]).val($(rowElements[i]).html()); //use the for loop to iterate over each element in the new array, assign the values from the rowElements into updateFormElements using .val() 
        //Set the value of each element in the set of matched elements from rowElements.
    }
    // console.log("this.html");
    // console.log($(this).html());
    // console.log($(this).attr('id'));
    $('#form2').prop('row-id',$(this).attr('id')); //in update form, get this (row object) property row-id and the id associated with this attribute so that you update the correct form.

// console.log($('#form2'))
});

//66666666666666666666666666666
let rowIdCounter = $('#contact-list tbody').find('tr').length;
$('.contact-form').submit(function(e) { //when the contact-form is submitted do this.
    e.preventDefault(); //stops from reloading the page
    console.log(e.target);
    var formId = e.target.id;
    var name = e.target.name.value;
    var phone = e.target.phone.value; //get all information from form that the user filled out, store into newly defined variables
    var email = e.target.email.value;
    // the to be inserted contact information
    const row = $(`
        <tr class="row">        
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
        </tr>`
    );    
    
    //deal with form submissions.
    //construct the object that will be added to the dom(HTML markup), pass the previously defined variables which store the user info
    // if you are adding a new contact just append to list of existing contacts

    if(formId === 'create-form') { //if the form that is submitted is called 'create-form do this:
        $(row).attr("id",`row-${rowIdCounter++}`); //increase the number in row-id
        $('tbody').append(row); //append the object that was created (in row) to the 'tbody'
        $(this).find('.clear').click(); //clear the information from the inputs (reset input fields)
    } else {
        $(row).attr("id",$(this).prop('row-id'));
        // if you want to update a contact, find the relevant row and replace that row with updated information. 
        $('#'+$(this).prop('row-id')).replaceWith(row);
        // logic above pushes the information created in row over the attribute that was previously selected
    }
    alert(`Name is ${name},Phone is ${phone},Email is ${email}`);
});


