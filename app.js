let objWork = {
    name: "Valeh Qasimov",
    age: 33,

    setAge (age2){
        if(age2 > 0){
            objWork.setAge.age2 = objWork.age
            console.log(objWork.setAge.age2);
        }else{
            console.log("yas duzgun qeyd edilmeyib");
            
        }

    },
    getYearsBeforeRetirement(){
        let retirement = 65
           if(objWork.setAge.age2 >= retirement){
              return "Qeyd edilen yaş pensiya yaşına uyğundur.";
              
           }else{
              let yearsAge = retirement - this.setAge.age2
             return yearsAge +" "+ "il sonra pensiya alacaq"            
           }
    }


}
console.log(objWork.age);

objWork.setAge(65)

objWork.getYearsBeforeRetirement()





