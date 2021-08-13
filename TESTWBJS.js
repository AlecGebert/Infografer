   
 jQuery(document).ready(function($){
  
    //if(window.location.href.indexOf('demo')!=-1)
    //    $('#demo-inf').css({
     //      display: 'block'
     //  })

  var templates = [
        'frame16.png',
        'frame18.png',
        'frame19.png',
        'frame20.png',
        'frame31.png.png'
    ];
        
    $('#demo-test').click(function(){
        
        
        var articul=$('#art').val(), //метод используется главным образом для получения или установки значений элементов формы. При вызове на несуществующий элемент она вернет undefined.
            art1part=articul.substr(0,4),
            iRand=Math.floor(Math.random() * templates.length);
            $button=$(this);
            
        console.log(templates[iRand]);
        
        
        $.ajax({
            url: 'https://images.wbstatic.net/big/new/'+art1part+'0000/'+articul+'-1.jpg',
            success: function(resp){
                console.log('yes');
                $('#error-msg').css({
                    display: 'none'
                })
                $('#demo-result').css({
                    display: 'block'
                });
                
                $('#photo-from-wb').css({
                    background: 'url("https://images.wbstatic.net/big/new/'+art1part+'0000/'+articul+'-1.jpg") no-repeat 50% 50%',
                    display: 'block'
                });
                
                
                 $('#template').css({
                    background: 'url("https://files.myguru.ru/site-templates/'+templates[iRand]+'") no-repeat 50% 50%',
                    display: 'block'
                 });
                
                $('.t-btn').html('Другой шаблон');
                $('input[name=sku]').val(articul).parents('form:first').find('button:first').click();


            },
            error: function(){
                $('#demo-result').css({
                    display: 'block'
                });
                
                $('#error-msg').css({
                    display: 'block'
                })
                
                $('#template').css({
                    display: 'none'
                })
                 $('#photo-from-wb').css({
                     display: 'none'
                })
                
            }
        })
        
       
        return false;
    });
    
});

 $("#btn").click(function() {
     $('#txt2').text($("#txt1").val());
 });

 $("#btn2").click(function() {
     $('#txt4').text($("#txt3").val());
 });
        
    
    

