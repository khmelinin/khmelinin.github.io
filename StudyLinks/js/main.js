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
    if(which_week)
    switch(week){
            
            case 1:
                document.getElementById("Mon1").style.color="red";
                document.getElementById("Mon1").style.textDecoration="underline";
                document.getElementById("divMon1").style.border="solid 1px black";
                
                week="Monday";
                break;
            
            case 2:
                document.getElementById("Tue1").style.color="red";
                document.getElementById("Tue1").style.textDecoration="underline";
                document.getElementById("divTue1").style.border="solid 1px black";
                
                week="Tuesday";
                break;
            
            case 3:
                document.getElementById("Wed1").style.color="red";
                document.getElementById("Wed1").style.textDecoration="underline";
                document.getElementById("divWed1").style.border="solid 1px black";
                
                week="Wednesday";
                break;
            
            case 4:
                document.getElementById("Thu1").style.color="red";
                document.getElementById("Thu1").style.textDecoration="underline";
                document.getElementById("divThu1").style.border="solid 1px black";
                
                week="Thursday";
                break;
            
            case 5:
                document.getElementById("Fri1").style.color="red";
                document.getElementById("Fri1").style.textDecoration="underline";
                document.getElementById("divFri1").style.border="solid 1px black";
                
                week="Friday";
                break;
            
            
            default:
                week="WeekEnds";
                break;
        }
        else
        switch(week){
            
            case 1:
                document.getElementById("Mon2").style.color="red";
                document.getElementById("Mon2").style.textDecoration="underline";
                document.getElementById("divMon2").style.border="solid 1px black";
                
                week="Monday";
                break;
            
            case 2:
                document.getElementById("Tue2").style.color="red";
                document.getElementById("Tue2").style.textDecoration="underline";
                document.getElementById("divTue2").style.border="solid 1px black";
                
                week="Tuesday";
                break;
            
            case 3:
                document.getElementById("Wed2").style.color="red";
                document.getElementById("Wed2").style.textDecoration="underline";
                document.getElementById("divWed2").style.border="solid 1px black";
                
                week="Wednesday";
                break;
            
            case 4:
                document.getElementById("Thu2").style.color="red";
                document.getElementById("Thu2").style.textDecoration="underline";
                document.getElementById("divThu2").style.border="solid 1px black";
                
                week="Thursday";
                break;
            
            case 5:
                document.getElementById("Fri2").style.color="red";
                document.getElementById("Fri2").style.textDecoration="underline";
                document.getElementById("divFri2").style.border="solid 1px black";
                
                week="Friday";
                break;
            
            
            default:
                week="WeekEnds";
                break;
        }
    return week;
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

$( "a:contains('Лаб')" ).css( "text-shadow", "red 0.4px 0.4px 0, red -0.4px -0.4px 0, red -0.4px 1px 0, red 0.4px -0.4px 0" );
$( "a:contains('Лаб')" ).css( "color", "black" );

