function changePresident(){

  //array holding the information for the presidents
let arr = [
{presidentNumber:45,firstName:'Donald',lastName:'Trump',imageName:'presidentTrump'},
{presidentNumber:44,firstName:'Barack',lastName:'Obama',imageName:'presidentObama'},
{presidentNumber:43,firstName:'George',lastName:'Bush',imageName:'presidentBush'}
]

//add the presidents in a list on the left hand side of the page
for (let i =0; i < arr.length; i++){
  $('ul').append('<li>'+ arr[i].presidentNumber + '. ' + 'President ' + arr[i].firstName + ' ' + arr[i].lastName+ '</li>')
}
  

}//end of changePresident


    $('ul').on('click','li', function(event){
      let arr = [
        {presidentNumber:45,firstName:'Donald',lastName:'Trump',imageName:'presidentTrump'},
        {presidentNumber:44,firstName:'Barack',lastName:'Obama',imageName:'presidentObama'},
        {presidentNumber:43,firstName:'George',lastName:'Bush',imageName:'presidentBush'}
        ]
        
        var imgSrc = ''
        var name = ''
     for (let i=0; i< arr.length;i++){
       
      item = $(this).text();

      if(item.includes(arr[i].lastName)){
      
        imgSrc = 'images/' + arr[i].imageName + '.jpeg'
        name = arr[i].lastName
        
        
      }
    
      

       }
       $('h2').text('President ' + name)
       $('.images img').attr('src', imgSrc)
     console.log(imgSrc)
        

    });
    



$(changePresident);

