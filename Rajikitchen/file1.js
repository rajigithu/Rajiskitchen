function printreview(){

    var x=document.review.email.value;
    var y=document.review.ta1.value;
    document.write(x+" "+y);
    alert("Email: "+x+" Comment: "+y );
    
    $("#tab1").append('<tr><td style="color:purple";>'+x+'</td><td style="color:red;">'+y+'</td></tr>');
    
    }
    