

function Calculate (){
    let Bill_Amount = parseFloat(document.getElementsByTagName('input')[0].value);
    let Percentage_Tip = parseFloat(document.getElementsByTagName('input')[1].value);
    let Tip_Amount = document.getElementsByClassName('Tip_Amount')[0];
   if((Bill_Amount == NaN || Bill_Amount == 0 || Bill_Amount == null)&&(Tip_Amount == NaN || Tip_Amount == 0 || Tip_Amount == null)){
    document.getElementsByClassName('.Outputcotainer')[0].innerText = "Please Enter Valid Bill Amount and Tip Ammount"
    setTimeout(()=>{
        document.getElementsByClassName('.Outputcotainer')[0].innerText = "";
    }
    ,2000
    )


   }else if(Bill_Amount == NaN || Bill_Amount == 0 || Bill_Amount == null){
        document.getElementsByClassName('.Outputcotainer')[0].innerText = "Please Enter Valid Bill Amount"
        setTimeout(()=>{
            document.getElementsByClassName('.Outputcotainer')[0].innerText = "";
        }
        ,2000
        )
    }else if(Percentage_Tip == NaN || Percentage_Tip == 0 || Percentage_Tip == null){
        document.getElementsByClassName('.Outputcontainer')[0].innerText = "Please Enter Valid Tip Amount"
        setTimeout(()=>{
            document.getElementsByClassName('.Outputcotainer')[0].innerText = "";
        }
        ,2000
        )
    
    }else{
        let calculatedTip = parseInt( Percentage_Tip/100 * Bill_Amount);
        Tip_Amount.innerText = `$ ${calculatedTip}`;

        let calculatedTotal = Bill_Amount + calculatedTip ;
        console.log(
            document.getElementsByClassName('Total')[0].innerText = '$' + calculatedTotal 
        );
    }

    
    
}

