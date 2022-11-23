 $(document).ready(function() {
//로컬에서 배열을 가지고 옴
var buylist = JSON.parse(localStorage.getItem('buyList'));
console.log(buylist);
//동적테이블
var listrow = document.querySelector('#listrow');

//함수로 바꿔서
function buy(){
    var tbody = '';
    for (var i = 0; i < buylist.length; i++) {
        //tbody += members[i].makeHtml(i);

        if(!buylist[i].isdrink) {
            console.log('푸드', buylist[i]);
            
            tbody += '<tbody>';
            tbody += '<tr>';
            tbody += ' <td rowspan="2">' + buylist[i].name + '</td>';
            tbody += ' <td>' + buylist[i].price + '원</td>';
            tbody += ' </tr>';
            tbody += ' <tr>';
            tbody += '<td class="t_right">';
            tbody += '<img class="plus" src="../img/icon/plus.png" id="'+i+'">';
            tbody += '<div class="num1" >'+buylist[i].count+'</div>';
            tbody += '<img class="minus" src="../img/icon/minus.png" id="'+10000+i+'">';
            tbody += '</td>';
            tbody += '</tr>';
            tbody += '</tbody>';

            listrow.innerHTML = tbody;

        } else {
            console.log('음료', buylist[i]);

            tbody += '<tr>';
            tbody += ' <td>' + buylist[i].name + '</td>';
            tbody += ' <td>' + buylist[i].price + '원</td>';
            tbody += ' </tr>';
            tbody += ' <tr>';
            tbody += ' <td style="font-size:0.8em">(' + buylist[i].hotice +'/'+buylist[i].size+')</td>';
            tbody += '<td class="t_right">';
            tbody += '<img class="plus" src="../img/icon/plus.png" id="'+i+'"> ';
            tbody += ' <div class="num1" >'+buylist[i].count+'</div> ';
            tbody += ' <img class="minus" src="../img/icon/minus.png" id="'+10000+i+'">';
            tbody += '</td>';
            tbody += '</tr>';

            listrow.innerHTML = tbody;    

        }
    }
}
     
buy();


//선택 삭제
$('#delete').click(function(){
        alert("준비중입니다^^");
});
     
//전체 삭제
$('#reset').click(function(){
    localStorage.clear();
    location.reload();
});
     
     
//버튼

$(".plus").click(function() {
    var now = Number(this.id);

    buylist[now].count+=1;
    console.log(buylist[now]);
    localStorage.setItem('buyList', JSON.stringify(buylist));
    buy();
    location.reload();

 
});
$(".minus").click(function() {
   var now = Number(this.id)-100000;
    buylist[now].count-=1;
    localStorage.setItem('buyList', JSON.stringify(buylist));
    console.log(buylist);
    buy();
    location.reload();
 

});


//금액부분
var money =0; 
var sum = 0;

for(var i = 0; i < buylist.length; i++) {

    money = Number(buylist[i].count)*Number(buylist[i].price);
    sum+=money;
}

text3.innerHTML=sum+'원';


//주문하기 버튼
$('#order').click(function(){
    location.replace('../cafe/pay');   
   localStorage.setItem('buyList', JSON.stringify(buylist));
});
     
});