var today = new Date();
var date = new Date();
function prevM() {//이전 달
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    showC(); //달력 cell 만들어 출력 
}

function nextM() {//다음 달
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    showC();
}

function showC() {//현재 달 달력 만들기
    var doMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    var day = 0;
    var Calendar = document.getElementById("calendar");
    var yearMonth = document.getElementById("yearMonth");
    yearMonth.innerHTML = today.getFullYear() + "-" + (today.getMonth() + 1) + "";
    while (Calendar.rows.length > 0) {
        Calendar.deleteRow(Calendar.rows.length - 1);
    }
    var row = null;
    row = Calendar.insertRow();
    var cnt = 0;
    for (i = 0; i < doMonth.getDay(); i++) {
        cell = row.insertCell();
        cnt += 1;
    }
    
    for (i = 1; i <= lastDate.getDate(); i++) {
        cell = row.insertCell();
        cell.innerHTML = i;
        cell.onclick=function(){
            rowClick(this.innerHTML);
        };
        cnt += 1;
        if (cnt % 7 == 1) {//일요일 계산
            cell.style.color = "#ff0000";
            cell.innerHTML = i;
            cell.onclick=function(){
                rowClick(this.innerHTML);
            };
            
            
        }
        if (cnt % 7 == 0) {//토요일 계산
            cell.style.color = "#0000ff";
            cell.innerHTML = i;
            row = calendar.insertRow();
            cell.onclick=function(){
                rowClick(this.innerHTML);
            };
            
        }
        /*오늘의 날짜에 색칠하기*/
        if (today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() && i == date.getDate()) {
            cell.style.backgroundColor = "red";
            cell.onmouseover=function(){
               this.style.backgroundColor = "#acacac";
            }
            cell.onmouseout=function(){
                this.style.backgroundColor = "red";
            }
                
        }


        if(today.getFullYear() == 2018 && today.getMonth()+1 == 3){
            if(i == 1 || i==6 || i==15){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==2 || i==5 || i==7 || i==8 || i==9 || i==14 || i==16 || i==22 || i==23 || i==28 || i==29 || i==30){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(i==21){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2018 && today.getMonth()+1 == 4){
            if(false){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==4 || i==7|| i==11|| i==12|| i==13|| i==14|| i==18|| i==21|| i==25|| i==26|| i==27|| i==28|| i==30){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(i==5|| i==6|| i==19|| i==20){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2018 && today.getMonth()+1 == 5){
            if(i == 5|| i==7|| i==8|| i==22){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==2|| i==3|| i==4|| i==9|| i==10|| i==11|| i==16|| i==18|| i==23|| i==24|| i==25|| i==28|| i==29|| i==30|| i==31){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(i==1|| i==15|| i==21){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2018 && today.getMonth()+1 == 6){
            if(i == 6|| i==13|| i==18|| i==25){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==1|| i==5|| i==7|| i==8|| i==11|| i==14|| i==15|| i==20|| i==21|| i==22|| i==24|| i==27|| i==28|| i==29){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(i==21){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2018 && today.getMonth()+1 == 7){
            if(i == 7|| i==23|| i==27){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==4|| i==5|| i==6|| i==9|| i==10|| i==11|| i==12|| i==13|| i==16|| i==18|| i==19|| i==20){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(i==17){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2018 && today.getMonth()+1 == 8){
            if(i == 7|| i==15|| i==23){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==22|| i==24|| i==29|| i==31){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(i==16|| i==17){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2018 && today.getMonth()+1 == 9){
            if(i == 8|| i==23|| i==24|| i==25|| i==26){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==5|| i==7|| i==12|| i==13|| i==14|| i==19|| i==28){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(false){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2018 && today.getMonth()+1 == 10){
            if(i == 1|| i==2|| i==3|| i==9|| i==23){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==5|| i==10|| i==12|| i==16|| i==17|| i==18|| i==19|| i==22|| i==24|| i==26|| i==31){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(i==8){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2018 && today.getMonth()+1 == 11){
            if(false){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==2|| i==6|| i==9|| i==15|| i==21|| i==23|| i==28|| i==29){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(i==7|| i==22){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2018 && today.getMonth()+1 == 12){
            if(i == 7|| i==22|| i==25){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==5|| i==11|| i==12||i==13|| i==14|| i==17|| i==18|| i==19|| i==20|| i==21|| i==24|| i==26|| i==27|| i==28){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(false){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2019 && today.getMonth()+1 == 1){
            if(i == 1|| i==6|| i==20){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==30){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(false){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2019 && today.getMonth()+1 == 2){
            if(i == 4|| i==5|| i==6|| i==19){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(i==8|| i==12|| i==14){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(false){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }


        if(today.getFullYear() == 2019 && today.getMonth()+1 == 3){
            if(i == 1|| i==6|| i==15|| i==21){
                cell.style.backgroundColor="#F29661";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#F29661";
                 }
            }
            if(false){
                cell.style.backgroundColor="#EDA0E3";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#EDA0E3";
                 }
            }
            if(false){
                cell.style.backgroundColor="#A3A0ED";
                cell.onmouseover=function(){
                    this.style.backgroundColor = "#acacac";
                 }
                 cell.onmouseout=function(){
                     this.style.backgroundColor = "#A3A0ED";
                 }
            }
        }
    }
   
}


function schedule(){
    alert('오늘의 일정!');
    rowClick(today.getDate());
}

function findday(y,m,d){
    var n=0
    var arr = new Array();
    for(let j=1;j<=32;j++){
        arr[n]= j;
        n++;
    }
    if(m==3 && y==2018){
        if(arr[0]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 삼일절');
        }
        else if(arr[1]==d){
            alert('학사일정 : (1)입학식, (2,3)시업식\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[4]==d){
            alert('학사일정 : 상견례\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[5]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 경칩');
        }
        else if(arr[6]==d){
            alert('학사일정 : 동아리 활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[7]==d){
            alert('학사일정 : (1,2,3)학력평가\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[8]==d){
            alert('학사일정 : (1,2,3)봉사활동사전교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[14]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 3.15 의거기념일');
        }
        else if(arr[15]==d){
            alert('학사일정 : (3)꽃동네사전교육, 1학기 학급정부회장 선거\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[20]==d){
            alert('학사일정 : 학부모 총회\n기념일 : 춘분');
        }
        else if(arr[21]==d){
            alert('학사일정 : (정3)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[22]==d){
            alert('학사일정 : (테1)학과특강\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[27]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[28]==d){
            alert('학사일정 : (웹3)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29]==d){
            alert('학사일정 : 1학기 간부수련회\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if(m==4 && y==2018){
        if(arr[3]==d){
            alert('학사일정 : (~4.9) 서울기능경기대회 / 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[4]==d){
            alert('학사일정 : (정1,2)학과체험학습\n기념일 : 식목일, 청명');
        }
        else if(arr[5]==d){
            alert('학사일정 : 교직원 성폭력예방 연수\n기념일 : 한식');
        }
        else if(arr[6]==d){
            alert('학사일정 : (1)건강검진\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[10]==d){
            alert('학사일정 : (3)학력평가, (3)취업프로그램\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[11]==d){
            alert('학사일정 : (테3)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[12]==d){
            alert('학사일정 : (멀1,2 / 6교시)체험학습\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13]==d){
            alert('학사일정 : (1)건강검진\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[17]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[18]==d){
            alert('(학사일정 : 멀3) 꽃동네 봉사활동, 창업아이템경진대회공모마감 \n기념일 : 4.19 혁명');
        }
        else if(arr[19]==d){
            alert('학사일정 : (2)꽃동네봉사활동사전교육\n기념일 : 곡우');
        }
        else if(arr[20]==d){
            alert('학사일정 : (1)건강검진\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[24]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[25]==d){
            alert('학사일정 : 중간고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[26]==d){
            alert('학사일정 : 중간고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[27]==d){
            alert('학사일정 : (1)건강검진\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29]==d){
            alert('학사일정 : 중간고사\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if(m==5&& y==2018){
        if(arr[0]==d){
            alert('학사일정 : 중간고사.\n기념일 : 근로자의날');
        }
        else if(arr[1]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[2]==d){
            alert('학사일정 : (정2)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[3]==d){
            alert('학사일정 : (1/6, 7교시)인성교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[4]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 어린이날, 입하');
        }
        else if(arr[6]==d){
            alert('학사일정 : 존재하지 않습니다\n기념일 : 대체 휴일');
        }
        else if(arr[7]==d){
            alert('학사일정 : 존재하지 않습니다\n기념일 : 어버이날');
        }
        else if(arr[8]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[9]==d){
            alert('학사일정 : (월요일 수업)요일변경\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[10]==d){
            alert('학사일정 : (1)모교방문\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[14]==d){
            alert('학사일정 : 멀티미디어과졸업전시회\n기념일 : 스승의날');
        }
        else if(arr[15]==d){
            alert('학사일정 :동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[17]==d){
            alert('학사일정 : 영어경시대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[20]==d){
            alert('학사일정 : 재량휴업일\n기념일 : 소만');
        }
        else if(arr[21]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 석가탄신일');
        }
        else if(arr[22]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[23]==d){
            alert('학사일정 : (소2)꽃동네봉사활동, 서울시상업경진대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[24]==d){
            alert('학사일정 : 체육대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[27]==d){
            alert('학사일정 : (1)수련회, (2)교육여행\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[28]==d){
            alert('학사일정 : (1)수련회, (2)교육여행\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29]==d){
            alert('학사일정 : (1)수련회, (2)교육여행\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[30]==d){
            alert('학사일정 : (1,2)재량휴업일\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if(m==6&& y==2018){
        if(arr[1-1]==d){
            alert('학사일정 : 수학경시대회\n기념일 : 존재하지 않습니다');
        }
        else if(arr[5-1]==d){
            alert('학사일정 : (정)모의해킹방어대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[6-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 현충일, 망종');
        }
        else if(arr[7-1]==d){
            alert('학사일정 : (3)수능모의평가, (테2)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[8-1]==d){
            alert('학사일정 : (수요일 수업)요일변경\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[11-1]==d){
            alert('학사일정 : 그래픽공모전 마감일\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 지방선거');
        }
        else if(arr[14-1]==d){
            alert('학사일정 : (멀2)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[15-1]==d){
            alert('학사일정 : (1)꽃동네봉사활동사전교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[18-1]==d){
            alert('학사일정 : 존재하지 않습니다\n기념일 : 단오');
        }
        else if(arr[20-1]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[21-1]==d){
            alert('학사일정 : (정1)꽃동네봉사활동\n기념일 : 하지');
        }
        else if(arr[22-1]==d){
            alert('학사일정 : 입학설명회(1차)\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[24-1]==d){
            alert('학사일정 : 개교기념일\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[25-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 6.25 한국 전쟁');
        }
        else if(arr[27-1]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[28-1]==d){
            alert('학사일정 : (소1)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29-1]==d){
            alert('학사일정 : 멀티미디어과 학과특강, 쇼핑몰구축경진대회\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if(m==7&&y==2018){
        if(arr[4-1]==d){
            alert('학사일정 : 동아리활동.\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[5-1]==d){
            alert('학사일정 : 기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[6-1]==d){
            alert('학사일정 : 기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[7-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 소서');
        }
        else if(arr[9-1]==d){
            alert('학사일정 : 기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[10-1]==d){
            alert('학사일정 : 기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[11-1]==d){
            alert('학사일정 : (3)학력평가, (3)취업프로그램\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[12-1]==d){
            alert('학사일정 : (테1)꽃동네봉사활동, (정)네트워크구축대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13-1]==d){
            alert('학사일정 : 봉사활동소감문쓰기, 학생회장 및 2학기 학급정부회장 선거\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[16-1]==d){
            alert('학사일정 : 꿈 . 끼 탐색주간\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[17-1]==d){
            alert('학사일정 : 꿈 . 끼 탐색주간, (1,2,3)산업안전교육\n기념일 : 제헌절, 초복');
        }
        else if(arr[18-1]==d){
            alert('학사일정 : 꿈 . 끼 탐색주간, 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[19-1]==d){
            alert('학사일정 : 꿈 . 끼 탐색주간, (멀1)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[20-1]==d){
            alert('학사일정 : 방학식\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[23-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 대서');
        }
        else if(arr[27-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 중복');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if(m==8&& y==2018){
        if(arr[7-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 입추');
        }
        else if(arr[15-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 광복절');
        }
        else if(arr[16-1]==d){
            alert('학사일정 : 개학식\n기념일 : 말복');
        }
        else if(arr[17-1]==d){
            alert('학사일정 : (1,2,3)음주약물예방교육\n기념일 : 칠석');
        }
        else if(arr[22-1]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[23-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 처서');
        }
        else if(arr[24-1]==d){
            alert('학사일정 : 선린축제\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29-1]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[31-1]==d){
            alert('학사일정 : 수학체험전\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if(m==9&& y==2018){
        if(arr[5-1]==d){
            alert('학사일정 : (1,2)학력평가, (3)수능모의평가\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[7-1]==d){
            alert('학사일정 : (멀1,2 6교시)체험학습, (테1)한국은행 경제교육, (테2) 학과특강\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[8-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 백로');
        }
        else if(arr[12-1]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13-1]==d){
            alert('학사일정 : 영상제작공모전 마감일\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[14-1]==d){
            alert('학사일정 : 2학기 간부수련회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[19-1]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[23-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 추분');
        }
        else if(arr[24-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 추석');
        }
        else if(arr[25-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 추석');
        }
        else if(arr[26-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 대체 휴일');
        }
        else if(arr[28-1]==d){
            alert('학사일정 : (3)산업안전교육.\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if(m==10&& y==2018){
        if(arr[1-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 국군의 날');
        }
        else if(arr[2-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 노인의 날');
        }
        else if(arr[3-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 개천절');
        }
        else if(arr[5-1]==d){
            alert('학사일정 : 전국기능경기대회(10.5~10.12).\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[8-1]==d){
            alert('학사일정 : 재량휴업일\n기념일 : 한로');
        }
        else if(arr[9-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 한글날');
        }
        else if(arr[10-1]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[12-1]==d){
            alert('학사일정 : (2)모교방문, (1/6, 7교시)인성교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[16-1]==d){
            alert('학사일정 : 학력평가\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[17-1]==d){
            alert('학사일정 : (1,2)중간고사, (3)졸업고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[18-1]==d){
            alert('학사일정 : (1,2)중간고사, (3)졸업고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[19-1]==d){
            alert('학사일정 : (1,2)중간고사, (3)졸업고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[22-1]==d){
            alert('학사일정 : (1,2)중간고사, (3)졸업고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[23-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 상경');
        }
        else if(arr[24-1]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[26-1]==d){
            alert('학사일정 : 입학설명회(2차), (테1)1사1교금육교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[31-1]==d){
            alert('학사일정 : 동아리활동.\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if(m==11&&y==2018){
        if(arr[2-1]==d){
            alert('학사일정 : 백일장\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[6-1]==d){
            alert('학사일정 : 기업연구논문경진대회공모마감.\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[7-1]==d){
            alert('학사일정 : 동아리활동.\n기념일 : 입동');
        }
        else if(arr[9-1]==d){
            alert('학사일정 : 멀티미디어과 학과특강.\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[15-1]==d){
            alert('학사일정 : (3)수학능력시험, (1,2)재량휴업일\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[21-1]==d){
            alert('학사일정 : (1,2) 학력평가\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[22-1]==d){
            alert('학사일정 : 직업기초능력평가, 사전 모의평가\n기념일 : 소설');
        }
        else if(arr[23-1]==d){
            alert('학사일정 : (멀티1,2 6교시)체험학습, (테1,2) 회계경진대회, (정1,2) 서버구축대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[28-1]==d){
            alert('학사일정 : 동아리활동.\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29-1]==d){
            alert('학사일정 : 재량휴업일, 특별전형면접일\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if(m==12&& y==2018){
        if(arr[5-1]==d){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[7-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 대설');
        }
        else if(arr[11-1]==d){
            alert('학사일정 : (1,2)기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[12-1]==d){
            alert('학사일정 : (1,2)기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13-1]==d){
            alert('학사일정 : (1,2)기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[14-1]==d){
            alert('학사일정 : (1,2)기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[17-1]==d){
            alert('학사일정 : 꿈 . 끼 탐색주간\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[18-1]==d){
            alert('학사일정 : 꿈 . 끼 탐색주간, (1,2)산업안전교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[19-1]==d){
            alert('학사일정 : 꿈 . 끼 탐색주간, 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[20-1]==d){
            alert('학사일정 : 직업기초능력평가\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[21-1]==d){
            alert('학사일정 : 봉사활동 소감문쓰기, 블로그공모전 마감, 금융경제시사상식경진대회, IOT아이디어 공모전\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[22-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 동지');
        }
        else if(arr[24-1]==d){
            alert('학사일정 : 꿈 . 끼 탐색주간, (테)학과종합발표회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[25-1]==d){
            alert('학사일정 : 존재하지 않습니다\n기념일 : 성탄절');
        }
        else if(arr[26-1]==d){
            alert('학사일정 : 꿈 . 끼 탐색주간, 동아리활동\n기념일 : 존재하지 않습니다');
        }
        else if(arr[27-1]==d){
            alert('학사일정 : 꿈 . 끼 탐색주간\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[28-1]==d){
            alert('학사일정 : 방학식\n기념일 : 존재하지 않습니다.');
        }
        else
        alert('일정이 존재하지 않습니다.');
    }

    if(m==1&& y==2019){
        if(arr[1-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 신정');
        }
        else if(arr[6-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 소한');
        }
        else if(arr[20-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 대한');
        }
        else if(arr[30-1]==d){
            alert('학사일정 : 개학식\n기념일 : 존재하지 않습니다.');
        }
        else
        alert('일정이 존재하지 않습니다.');
    }

    if(m==2&& y==2019){
        if(arr[4-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 입춘');
        }
        else if(arr[5-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 설날');
        }
        else if(arr[6-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 설날');
        }
        else if(arr[8-1]==d){
            alert('학사일정 : (정)학과종합발표회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[12-1]==d){
            alert('학사일정 : (3)졸업식, (1,2)재량휴업일\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[14-1]==d){
            alert('학사일정 : 종업식\n기념일 : 존재하지 않습니다');
        }
        else if(arr[19-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 우수, 정월대보름');
        }
        else
        alert('일정이 존재하지 않습니다.');
    }

    if(m==3 && y==2019){
        if(arr[1-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 삼일절');
        }
        else if(arr[6-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 경칩');
        }
        else if(arr[15-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 3.15 의거기념일');
        }
        else if(arr[21-1]==d){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 춘분');
        }
        else
        alert('일정이 존재하지 않습니다.')
    }
}











function rowClick(index){
    var n=0
    var arr = new Array();
    for(let j=1;j<=32;j++){
        arr[n]= j;
        n++;
    }
    if((today.getMonth()+1)==3 && today.getFullYear()==2018){
        if(arr[0]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 삼일절');
        }
        else if(arr[1]==index){
            alert('학사일정 : (1)입학식, (2,3)시업식\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[4]==index){
            alert('학사일정 : 상견례\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[5]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 경칩');
        }
        else if(arr[6]==index){
            alert('학사일정 : 동아리 활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[7]==index){
            alert('학사일정 : (1,2,3)학력평가\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[8]==index){
            alert('학사일정 : (1,2,3)봉사활동사전교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[14]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 3.15 의거기념일');
        }
        else if(arr[15]==index){
            alert('학사일정 : (3)꽃동네사전교육, 1학기 학급정부회장 선거\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[20]==index){
            alert('학사일정 : 학부모 총회\n기념일 : 춘분');
        }
        else if(arr[21]==index){
            alert('학사일정 : (정3)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[22]==index){
            alert('학사일정 : (테1)학과특강\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[27]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[28]==index){
            alert('학사일정 : (웹3)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29]==index){
            alert('학사일정 : 1학기 간부수련회\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==4&& today.getFullYear()==2018){
        if(arr[3]==index){
            alert('학사일정 : (~4.9) 서울기능경기대회 / 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[4]==index){
            alert('학사일정 : (정1,2)학과체험학습\n기념일 : 식목일, 청명');
        }
        else if(arr[5]==index){
            alert('학사일정 : 교직원 성폭력예방 연수\n기념일 : 한식');
        }
        else if(arr[6]==index){
            alert('학사일정 : (1)건강검진\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[10]==index){
            alert('학사일정 : (3)학력평가, (3)취업프로그램\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[11]==index){
            alert('학사일정 : (테3)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[12]==index){
            alert('학사일정 : (멀1,2 / 6교시)체험학습\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13]==index){
            alert('학사일정 : (1)건강검진\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[17]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[18]==index){
            alert('(학사일정 : 멀3) 꽃동네 봉사활동, 창업아이템경진대회공모마감 \n기념일 : 4.19 혁명');
        }
        else if(arr[19]==index){
            alert('학사일정 : (2)꽃동네봉사활동사전교육\n기념일 : 곡우');
        }
        else if(arr[20]==index){
            alert('학사일정 : (1)건강검진\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[24]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[25]==index){
            alert('학사일정 : 중간고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[26]==index){
            alert('학사일정 : 중간고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[27]==index){
            alert('학사일정 : (1)건강검진\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29]==index){
            alert('학사일정 : 중간고사\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==5&& today.getFullYear()==2018){
        if(arr[0]==index){
            alert('학사일정 : 중간고사.\n기념일 : 근로자의날');
        }
        else if(arr[1]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[2]==index){
            alert('학사일정 : (정2)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[3]==index){
            alert('학사일정 : (1/6, 7교시)인성교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[4]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 어린이날, 입하');
        }
        else if(arr[6]==index){
            alert('학사일정 : 존재하지 않습니다\n기념일 : 대체 휴일');
        }
        else if(arr[7]==index){
            alert('학사일정 : 존재하지 않습니다\n기념일 : 어버이날');
        }
        else if(arr[8]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[9]==index){
            alert('학사일정 : (월요일 수업)요일변경\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[10]==index){
            alert('학사일정 : (1)모교방문\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[14]==index){
            alert('학사일정 : 멀티미디어과졸업전시회\n기념일 : 스승의날');
        }
        else if(arr[15]==index){
            alert('학사일정 :동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[17]==index){
            alert('학사일정 : 영어경시대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[20]==index){
            alert('학사일정 : 재량휴업일\n기념일 : 소만');
        }
        else if(arr[21]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 석가탄신일');
        }
        else if(arr[22]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[23]==index){
            alert('학사일정 : (소2)꽃동네봉사활동, 서울시상업경진대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[24]==index){
            alert('학사일정 : 체육대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[27]==index){
            alert('학사일정 : (1)수련회, (2)교육여행\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[28]==index){
            alert('학사일정 : (1)수련회, (2)교육여행\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29]==index){
            alert('학사일정 : (1)수련회, (2)교육여행\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[30]==index){
            alert('학사일정 : (1,2)재량휴업일\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==6&& today.getFullYear()==2018){
        if(arr[1-1]==index){
            alert('학사일정 : 수학경시대회\n기념일 : 존재하지 않습니다');
        }
        else if(arr[5-1]==index){
            alert('학사일정 : (정)모의해킹방어대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[6-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 현충일, 망종');
        }
        else if(arr[7-1]==index){
            alert('학사일정 : (3)수능모의평가, (테2)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[8-1]==index){
            alert('학사일정 : (수요일 수업)요일변경\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[11-1]==index){
            alert('학사일정 : 그래픽공모전 마감일\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 지방선거');
        }
        else if(arr[14-1]==index){
            alert('학사일정 : (멀2)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[15-1]==index){
            alert('학사일정 : (1)꽃동네봉사활동사전교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[18-1]==index){
            alert('학사일정 : 존재하지 않습니다\n기념일 : 단오');
        }
        else if(arr[20-1]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[21-1]==index){
            alert('학사일정 : (정1)꽃동네봉사활동\n기념일 : 하지');
        }
        else if(arr[22-1]==index){
            alert('학사일정 : 입학설명회(1차)\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[24-1]==index){
            alert('학사일정 : 개교기념일\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[25-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 6.25 한국 전쟁');
        }
        else if(arr[27-1]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[28-1]==index){
            alert('학사일정 : (소1)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29-1]==index){
            alert('학사일정 : 멀티미디어과 학과특강, 쇼핑몰구축경진대회\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==7&& today.getFullYear()==2018){
        if(arr[4-1]==index){
            alert('학사일정 : 동아리활동.\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[5-1]==index){
            alert('학사일정 : 기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[6-1]==index){
            alert('학사일정 : 기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[7-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 소서');
        }
        else if(arr[9-1]==index){
            alert('학사일정 : 기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[10-1]==index){
            alert('학사일정 : 기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[11-1]==index){
            alert('학사일정 : (3)학력평가, (3)취업프로그램\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[12-1]==index){
            alert('학사일정 : (테1)꽃동네봉사활동, (정)네트워크구축대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13-1]==index){
            alert('학사일정 : 봉사활동소감문쓰기, 학생회장 및 2학기 학급정부회장 선거\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[16-1]==index){
            alert('학사일정 : 꿈 . 끼 탐색주간\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[17-1]==index){
            alert('학사일정 : 꿈 . 끼 탐색주간, (1,2,3)산업안전교육\n기념일 : 제헌절, 초복');
        }
        else if(arr[18-1]==index){
            alert('학사일정 : 꿈 . 끼 탐색주간, 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[19-1]==index){
            alert('학사일정 : 꿈 . 끼 탐색주간, (멀1)꽃동네봉사활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[20-1]==index){
            alert('학사일정 : 방학식\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[23-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 대서');
        }
        else if(arr[27-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 중복');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==8&& today.getFullYear()==2018){
        if(arr[7-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 입추');
        }
        else if(arr[15-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 광복절');
        }
        else if(arr[16-1]==index){
            alert('학사일정 : 개학식\n기념일 : 말복');
        }
        else if(arr[17-1]==index){
            alert('학사일정 : (1,2,3)음주약물예방교육\n기념일 : 칠석');
        }
        else if(arr[22-1]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[23-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 처서');
        }
        else if(arr[24-1]==index){
            alert('학사일정 : 선린축제\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29-1]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[31-1]==index){
            alert('학사일정 : 수학체험전\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==9&& today.getFullYear()==2018){
        if(arr[5-1]==index){
            alert('학사일정 : (1,2)학력평가, (3)수능모의평가\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[7-1]==index){
            alert('학사일정 : (멀1,2 6교시)체험학습, (테1)한국은행 경제교육, (테2) 학과특강\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[8-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 백로');
        }
        else if(arr[12-1]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13-1]==index){
            alert('학사일정 : 영상제작공모전 마감일\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[14-1]==index){
            alert('학사일정 : 2학기 간부수련회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[19-1]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[23-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 추분');
        }
        else if(arr[24-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 추석');
        }
        else if(arr[25-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 추석');
        }
        else if(arr[26-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 대체 휴일');
        }
        else if(arr[28-1]==index){
            alert('학사일정 : (3)산업안전교육.\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==10&& today.getFullYear()==2018){
        if(arr[1-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 국군의 날');
        }
        else if(arr[2-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 노인의 날');
        }
        else if(arr[3-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 개천절');
        }
        else if(arr[5-1]==index){
            alert('학사일정 : 전국기능경기대회(10.5~10.12).\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[8-1]==index){
            alert('학사일정 : 재량휴업일\n기념일 : 한로');
        }
        else if(arr[9-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 한글날');
        }
        else if(arr[10-1]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[12-1]==index){
            alert('학사일정 : (2)모교방문, (1/6, 7교시)인성교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[16-1]==index){
            alert('학사일정 : 학력평가\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[17-1]==index){
            alert('학사일정 : (1,2)중간고사, (3)졸업고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[18-1]==index){
            alert('학사일정 : (1,2)중간고사, (3)졸업고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[19-1]==index){
            alert('학사일정 : (1,2)중간고사, (3)졸업고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[22-1]==index){
            alert('학사일정 : (1,2)중간고사, (3)졸업고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[23-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 상경');
        }
        else if(arr[24-1]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[26-1]==index){
            alert('학사일정 : 입학설명회(2차), (테1)1사1교금육교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[31-1]==index){
            alert('학사일정 : 동아리활동.\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==11&& today.getFullYear()==2018){
        if(arr[2-1]==index){
            alert('학사일정 : 백일장\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[6-1]==index){
            alert('학사일정 : 기업연구논문경진대회공모마감.\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[7-1]==index){
            alert('학사일정 : 동아리활동.\n기념일 : 입동');
        }
        else if(arr[9-1]==index){
            alert('학사일정 : 멀티미디어과 학과특강.\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[15-1]==index){
            alert('학사일정 : (3)수학능력시험, (1,2)재량휴업일\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[21-1]==index){
            alert('학사일정 : (1,2) 학력평가\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[22-1]==index){
            alert('학사일정 : 직업기초능력평가, 사전 모의평가\n기념일 : 소설');
        }
        else if(arr[23-1]==index){
            alert('학사일정 : (멀티1,2 6교시)체험학습, (테1,2) 회계경진대회, (정1,2) 서버구축대회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[28-1]==index){
            alert('학사일정 : 동아리활동.\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[29-1]==index){
            alert('학사일정 : 재량휴업일, 특별전형면접일\n기념일 : 존재하지 않습니다.');
        }
        else alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==12&& today.getFullYear()==2018){
        if(arr[5-1]==index){
            alert('학사일정 : 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[7-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 대설');
        }
        else if(arr[11-1]==index){
            alert('학사일정 : (1,2)기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[12-1]==index){
            alert('학사일정 : (1,2)기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[13-1]==index){
            alert('학사일정 : (1,2)기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[14-1]==index){
            alert('학사일정 : (1,2)기말고사\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[17-1]==index){
            alert('학사일정 : 꿈 . 끼 탐색주간\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[18-1]==index){
            alert('학사일정 : 꿈 . 끼 탐색주간, (1,2)산업안전교육\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[19-1]==index){
            alert('학사일정 : 꿈 . 끼 탐색주간, 동아리활동\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[20-1]==index){
            alert('학사일정 : 직업기초능력평가\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[21-1]==index){
            alert('학사일정 : 봉사활동 소감문쓰기, 블로그공모전 마감, 금융경제시사상식경진대회, IOT아이디어 공모전\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[22-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 동지');
        }
        else if(arr[24-1]==index){
            alert('학사일정 : 꿈 . 끼 탐색주간, (테)학과종합발표회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[25-1]==index){
            alert('학사일정 : 존재하지 않습니다\n기념일 : 성탄절');
        }
        else if(arr[26-1]==index){
            alert('학사일정 : 꿈 . 끼 탐색주간, 동아리활동\n기념일 : 존재하지 않습니다');
        }
        else if(arr[27-1]==index){
            alert('학사일정 : 꿈 . 끼 탐색주간\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[28-1]==index){
            alert('학사일정 : 방학식\n기념일 : 존재하지 않습니다.');
        }
        else
        alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==1&& today.getFullYear()==2019){
        if(arr[1-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 신정');
        }
        else if(arr[6-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 소한');
        }
        else if(arr[20-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 대한');
        }
        else if(arr[30-1]==index){
            alert('학사일정 : 개학식\n기념일 : 존재하지 않습니다.');
        }
        else
        alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==2&& today.getFullYear()==2019){
        if(arr[4-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 입춘');
        }
        else if(arr[5-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 설날');
        }
        else if(arr[6-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 설날');
        }
        else if(arr[8-1]==index){
            alert('학사일정 : (정)학과종합발표회\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[12-1]==index){
            alert('학사일정 : (3)졸업식, (1,2)재량휴업일\n기념일 : 존재하지 않습니다.');
        }
        else if(arr[14-1]==index){
            alert('학사일정 : 종업식\n기념일 : 존재하지 않습니다');
        }
        else if(arr[19-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 우수, 정월대보름');
        }
        else
        alert('일정이 존재하지 않습니다.');
    }

    if((today.getMonth()+1)==3 && today.getFullYear()==2019){
        if(arr[1-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 삼일절');
        }
        else if(arr[6-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 경칩');
        }
        else if(arr[15-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 3.15 의거기념일');
        }
        else if(arr[21-1]==index){
            alert('학사일정 : 존재하지 않습니다.\n기념일 : 춘분');
        }
        else
        alert('일정이 존재하지 않습니다.')
    }
}