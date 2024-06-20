$(function(){
        $('.login button').click(function(){
        var num = $('#id').val()
        if(num == ''){
            alert('나이를 입력하세요')
        }
        else if(num < 20) {
            alert('미성년자 입니다')
        }
        else if(num >= 20){
            alert('성인 입니다')
        }
        else{
            alert('숫자를 입력해주세요')
        }
    })
})

