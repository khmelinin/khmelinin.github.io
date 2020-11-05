function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

function selectWeek(week)
{
    switch(week){
            
            case 1:
                document.getElementById("Mon1").style.color="red";
                document.getElementById("Mon1").style.textDecoration="underline";
                
                document.getElementById("Mon2").style.color="red";
                document.getElementById("Mon2").style.textDecoration="underline";
                
                week="Monday";
                break;
            
            case 2:
                document.getElementById("Tue1").style.color="red";
                document.getElementById("Tue1").style.textDecoration="underline";
                
                document.getElementById("Tue2").style.color="red";
                document.getElementById("Tue2").style.textDecoration="underline";
                
                week="Tuesday";
                break;
            
            case 3:
                document.getElementById("Wed1").style.color="red";
                document.getElementById("Wed1").style.textDecoration="underline";
                
                document.getElementById("Wed2").style.color="red";
                document.getElementById("Wed2").style.textDecoration="underline";
                
                week="Wednesday";
                break;
            
            case 4:
                document.getElementById("Thu1").style.color="red";
                document.getElementById("Thu1").style.textDecoration="underline";
                
                document.getElementById("Thu2").style.color="red";
                document.getElementById("Thu2").style.textDecoration="underline";
                
                week="Thursday";
                break;
            
            case 5:
                document.getElementById("Fri1").style.color="red";
                document.getElementById("Fri1").style.textDecoration="underline";
                
                document.getElementById("Fri2").style.color="red";
                document.getElementById("Fri2").style.textDecoration="underline";
                
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