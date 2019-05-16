$(document).ready(function(){
   function addImg(val){
       $("#output").append("<img src='https://raw.githubusercontent.com/baselakasha/hieroglyphics/master/images/"+val+".jpg' />");
   }
   $("#btn").click(function(){
       $("#output").text(""); // Empty the output
       $("#output").fadeOut();
       
       var text = $("#input").val().toUpperCase().split(""); // Convert the user input to Capital and split them into array 
       
       for(var i=0;i<text.length;i++){
           
           switch(text[i]){
                case "C": case "K":
                    addImg("CK");    
                    break;   
                case "E": case "Y": case "I":
                    addImg("EYI"); 
                    break;
                case "S":
                    if(text[i+1]=="H"){ // If the next letter is "H" 
                        addImg("SH");
                    }
                    else{
                        addImg("S");
                    }
                    break;
                case "H":
                    if(text[i-1]!="S"){ // If the last letter is "S"
                        addImg("H");
                    }
                    break;
                
                default:
                    if(text[i]=="\n"){ // New line
                        $("#output").append("<br />");
                    }

                    else if(text[i] == " " || text[i].match(/[^A-Z]+/g)){ // Space or invaild character
                        $("#output").append(" ");
                    }
                   
                    else{
                        addImg(text[i]);
                    }
                    break;
            }
       }
       
       $("#output").fadeIn();
       
   });
});