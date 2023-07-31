let endDate="25 March 2023 12:00 PM"



let input=document.querySelectorAll('.input')
function set_date(){
    document.querySelector('.date').innerHTML=endDate
    let end=new Date(endDate)
    let new1=new Date()
    let sec=Math.floor((end-new1)/1000)
    let min=Math.floor(sec/60)
    let hour=Math.floor(min/60)
    let day=Math.floor(hour/24)

    input[0].value=day
    input[1].value=hour-day*24
    input[2].value=min-hour*60
    input[3].value=sec-min*60
}
set_date()
setInterval(set_date,1000)

document.querySelector('#input').addEventListener('keyup',function(e){
    console.log(e.key)
    if(e.key=="Enter"){
        console.log(this.value)
        endDate=this.value
        set_date()
        setInterval(set_date,1000)
        this.value=""
    }
})