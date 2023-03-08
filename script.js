//-------------下記を実装するとcssのクリックが発火しなくなります-----------------
// const check__label__color = document.querySelectorAll('.checkbox');
// check__label__color.forEach(element=>{
//     element.addEventListener('click',(e)=>{
//         e.preventDefault();
//         element.classList.toggle('blue');
//     })
// })
//---------------以上----------------------//

//-------モーダル---------
const modal = document.querySelector('.modal-container');
const modalClose = document.querySelector('.js-close');
const maindayo = document.querySelector('.main');

function showModal() {
    modal.style.display="block";
    maindayo.classList.add('main__none');
}
modalClose.addEventListener('click',closeModal);
function closeModal(){
    modal.style.display ="none";
    location.reload();
    maindayo.classList.remove('main__none');
}

//ここから
const link_share = document.querySelector('#link_share');
link_share.addEventListener('click',(event)=>{
    const shareButton = document.querySelector('#share');
    if(shareButton.checked) {
        const twitterMessage = document.getElementById('twitterMessage');
        link_share.href = `https://twitter.com/intent/tweet?&text=${twitterMessage.value};`
    }else{
        event.preventDefault();
    }
    const formRapper = document.querySelector('#formRapper');
    formRapper.innerHTML ="";
    document.querySelector('.js-record').style.display ="none";
    const loading_back = document.createElement('div');
    
    loading_back.id='loading__back';
    
    formRapper.appendChild(loading_back);
    const loading__front = document.createElement('div');
    loading__front.id = 'loading__front';
    loading_back.appendChild(loading__front);
    setTimeout(done,2500);
    // setTimeout(done,2);
});
function done() {
    formRapper.innerHTML ='';
    const completeMessage = document.createElement('div');
    completeMessage.id = 'completeMessage';
    completeMessage.className = 'complete';
    const awesome = document.createElement('p');
    awesome.id = 'awesome';
    awesome.className = 'awesome';
    awesome.innerHTML = 'AWESOME!';
    completeMessage.appendChild(awesome);
    const mark = document.createElement('div');
    mark.id = 'mark';
    completeMessage.appendChild(mark);
    const message = document.createElement('div')
    message.id = 'message__done';
    message.innerHTML = '記録・登録<br>完了しました'
    completeMessage.appendChild(message);
    formRapper.appendChild(completeMessage);
}

/*---------グラフ--------*/
google.charts.load("current",{packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1(){
    const date = new google.visualization.DataTable();
    date.addColumn("string","day");
    date.addColumn("number","hour");
    date.addRows([
        ["",3],
        ["2",4],
        ["",5],
        ["4",3],
        ["",3],
        ["6",0],
        ["",0],
        ["8",4],
        ["",2],
        ["10",2],
        ["",8],
        ["12",8],
        ["",2],
        ["14",2],
        ["",1],
        ["16",7],
        ["",4],
        ["18",4],
        ["",3],
        ["20",3],
        ["",2],
        ["22",2],
        ["",6],
        ["24",2],
        ["",1],
        ["26",1],
        ["",1],
        ["28",1],
        ["",7],
        ["30",8],
    ]);
    const options = {
        chartArea:{width:"70%",height:"70%"},
        legend:{position:"none"},
        color:["#20bdde"],
        vAxis: {
            format:"#h",
            ticks:[0,2,4,6,8],
        },
        // scales:{
        //     yAxes:{
        //         grid:{
        //             display: false,
        //         }
        //     }
        // },
        // grid: {
        //     yAxis: {
        //         lines: {
        //             show: false 
        //         },
        //     },
        // }
        scales:{
            yAxes: [{
                display: true,
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
    const chart = new google.visualization.ColumnChart(
        document.getElementById('chart__div')
    );
    chart.draw(date,options)
}


//-----------学習言語パート--------------
// api load
google.load("visualization","1.0",{packages:["corechart"]});
//callback
google.setOnLoadCallback(drawChart);

//グラフ用 function
function drawChart(){
// ドーナツ共通オプション
    const donuts_options ={
        fontName:"sans-serif",
        colors:[
            "#0345ec",
            "#0f71bd",
            "#20bdde",
            "#3ccefe",
            "#b29ef3",
            "#6d46ec",
            "#4a17ef",
            "#3105c0",
        ],
        legend:{position:"none"},
        tooltip:{
            textStyle:{bold:"false",fontSize:12},
        },
        pieSliceText:"percentage",
        pieSliceTextStyle:{fontSize:15},
        pieHole:0.4,
        backgroundColor:"transparent",
        chartArea:{width:"90%",height:"100%"},
    };


const study_language_date = new google.visualization.arrayToDataTable([
    ["",""],
    ["HTML",30],
    ["CSS",20],
    ["JavaScript",10],
    ["PHP",5],
    ["Laravel",5],
    ["SQL",20],
    ["SHELL",20],
    ["その他",10],
]);

const study_language_chart = new google.visualization.PieChart(
    document.getElementById("study_language_chart")
);
study_language_chart.draw(study_language_date,donuts_options);



const study_contents_chart_regend = new google.visualization.arrayToDataTable([
        ["",""],
        ["ドットインストール",42],
        ["N予備校",33],
        ["POSSE課題",25],
    ])
const study_contents_chart = new google.visualization.PieChart(
    document.getElementById("study_contents_chart")
);
study_contents_chart.draw(study_contents_chart_regend,donuts_options)
}
