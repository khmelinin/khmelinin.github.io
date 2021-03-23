function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

function which_week(){
    calendar = Calendar.getInstance();
    var day = calendar.get(Calendar.WEEK_OF_YEAR);
    if(day%2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function selectWeek(week)
{
    if(!which_week)
    {
        document.getElementById("Week1").style.color="red";
        document.getElementById("Week1").style.textShadow= "black 1.3px 1.3px 0, black -1.3px -1.3px 0, black -1.3px 1.3px 0, black 1.3px -1.3px 0";
        switch(week){
                
                case 1:
                    week_style("Mon1");
                    week="Monday";
                    break;
                
                case 2:
                    week_style("Tue1");
                    week="Tuesday";
                    break;
                
                case 3:
                    week_style("Wed1");
                    week="Wednesday";
                    break;
                
                case 4:
                    week_style("Thu1");
                    week="Thursday";
                    break;
                
                case 5:
                    week_style("Fri1");
                    week="Friday";
                    break;
                
                
                default:
                    week="WeekEnds";
                    break;
            }
        }
        else
        {
            document.getElementById("Week2").style.color="red";
            document.getElementById("Week2").style.textShadow= "black 1.3px 1.3px 0, black -1.3px -1.3px 0, black -1.3px 1.3px 0, black 1.3px -1.3px 0";
            switch(week){
                
                case 1:
                    week_style("Mon2");
                    week="Monday";
                    break;
                
                case 2:
                    week_style("Tue2");
                    week="Tuesday";
                    break;
                
                case 3:
                    week_style("Wed2");
                    week="Wednesday";
                    break;
                
                case 4:
                    week_style("Thu2");
                    week="Thursday";
                    break;
                
                case 5:
                    week_style("Fri2");
                    week="Friday";
                    break;
                
                
                default:
                    week="WeekEnds";
                    break;
            }
        }
    return week;
}

function week_style(weekName){
    document.getElementById(weekName).style.color="red";
    document.getElementById(weekName).style.textDecoration="underline";
    document.getElementById("div"+weekName).style.marginRight = "44%"
    document.getElementById("div"+weekName).style.backgroundColor="rgb(230,230,230)";
    document.getElementById("div"+weekName).style.border = "black dashed 1px";
}

function date_time1()
    {
        var current_datetime = new Date();
        
        var week=selectWeek(current_datetime.getDay());

        return week;
    }

function date_time2()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();

        if(month=="03" && day=="08")
        {
            document.getElementById("img1").src = "img/bruh_bw_08_03.png";
        }
        if(month=="02" && day=="23")
        {
            document.getElementById("img1").src = "img/bruh_bw_23_02.png";
        }
        if(month=="12" && day>=24 || month=="01" && day<=08)
        {
            document.getElementById("img1").src = "img/bruh_bw_xmas.png";
            document.body.style.backgroundImage = "url('img/snow.gif')";
        }
        if(month=="10" && day>=29)
        {
            document.getElementById("img1").src = "img/bruh_bw_halloween.png";
        }
        

        return day+"."+month+"."+year;
    }

function date_time3()
    {
        var current_datetime = new Date();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        //var seconds = zero_first_format(current_datetime.getSeconds());
        

        return " | "+hours+":"+minutes+" | ";
    }

document.getElementById("time1").innerHTML = date_time1();
document.getElementById("time2").innerHTML = date_time2();
document.getElementById("time3").innerHTML = date_time3();

$( "a:contains('Лек')" ).css( "text-shadow", "lightgreen 0.4px 0.4px 0, lightgreen -0.4px -0.4px 0, lightgreen -0.4px 0.4px 0, lightgreen 0.4px -0.4px 0" );
$( "a:contains('Лек')" ).css( "color", "black" );

$( "a:contains('Прак')" ).css( "text-shadow", "gold 0.4px 0.4px 0, gold -0.4px -0.4px 0, gold -0.4px 0.4px 0, gold 0.4px -0.4px 0" );
$( "a:contains('Прак')" ).css( "color", "black" );

$( "a:contains('Лаб')" ).css( "text-shadow", "red 0.3px 0.3px 0, red -0.3px -0.3px 0, red -0.3px 1px 0, red 0.3px -0.3px 0" );
$( "a:contains('Лаб')" ).css( "color", "rgb(40,40,40)" );

