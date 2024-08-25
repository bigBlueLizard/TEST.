$(document).ready(function() {
    var result = 0;
    var prev = 0;
    var curr="0";
    var operation = "none";
    function isNumber(value){

         
        if (value === "0") {
            return true;
        } else if (value === "1") {
            return true;
        } else if (value === "2") {
            return true;
        } else if (value === "3") {
            return true;
        } else if (value === "4") {
            return true;
        } else if (value === "5") {
            return true;
        } else if (value === "6") {
            return true;
        } else if (value === "7") {
            return true;
        } else if (value === "8") {
            return true;
        } else if (value === "9") {
            return true;
        } else {
            return false; 
        }
        
    }
    function updatescreen(){
        $(".screen").html(curr.substring(0,10));
        
    }
    $(".screen").text("0");
    $("li").on("click", function() {  
        var btnp = $(this).html();
        console.log(btnp);
        if(btnp==="C"){
            curr="0";
            prev=0;
            result=0;
        }
        else if(isNumber(btnp)){
            if(curr==="0"){
                curr=btnp;
            }
            else{
                curr+=btnp;
            }
        }
        else if(btnp==="Back"){
            if(curr.length===1){
                curr="0";
            }
            if(curr!=="0"){
                curr=curr.substring(0,curr.length-1);
            }
        }
        else if(btnp==="+/-"){
           if(curr[0]!=="-"){
            curr="-"+curr;
           }
           else{
            curr=curr.substring(1);
           }
        }
        else if(btnp==="%"){
            var laura=parseFloat(curr);
            laura=laura/100;
            curr=laura.toString();
        }
        else if(btnp==="sqrt"){
            var laura=parseFloat(curr);
            laura=Math.sqrt(laura);
            curr=laura.toString();
        }
        else if(btnp==="1/x"){
            var laura=parseFloat(curr);
            laura=1/laura;
            curr=laura.toString();
        }
        else if(btnp==="+"){
            prev=curr;
            operation="+";
            curr="0";
            console.log(prev);

             }

        updatescreen();
        
    });
   

});
