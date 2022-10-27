


$(document).ready(function(){
     // 날짜 최소 최대 지정
    function startEndDate(num, val) {
            $('#sdate'+num+val).datepicker();
            $('#sdate'+num+val).datepicker("option", "maxDate", $('#edate'+num+val).val());
            $('#sdate'+num+val).datepicker("option", "onClose", function ( selectedDate ) {
                $('#edate'+num+val).datepicker( "option", "minDate", selectedDate );
            });
         
            $('#edate'+num+val).datepicker();
            $('#edate'+num+val).datepicker("option", "minDate", $('#sdate'+num+val).val());
            $('#edate'+num+val).datepicker("option", "onClose", function ( selectedDate ) {
                $('#sdate'+num+val).datepicker( "option", "maxDate", selectedDate );
            });
    }
    startEndDate('1-','1')
    startEndDate('2-','1')
    startEndDate('3-','1')




    // 추가횟수 초기화
    var addBtnVal1 = 1
    var addBtnVal2 = 1
    var addBtnVal3 = 1
    var addBtnVal4 = 1

    // 학력추가

    $('.add-btn1').click(function(){
        $('.add-btn1').parents('.btn-wrap').before(

            
            "<div class='box-wrap wrap-04 box-style'>"+
            "<div>"+
                    "<div class='b-item'>"+
                        "<label for=''>학교명</label>"+
                        "<input type='text' class='input-nomal w300' placeholder='학교명'>"+
                    "</div>"+
                   
                    "<div class='b-item'>"+
                        "<label for='' class='fit-content-lable'>학과/전공명</label>"+
                        "<input type='text' class='input-nomal w300' placeholder='학과/전공명'>"+
                    "</div>"+
                "</div>"+
                "<div>"+
                    "<div class='b-item'>"+
                        "<label for=''>학위 종류</label>"+
                        "<div>"+
                            "<select name='sel' id='degree' class='select-nomal w200'>"+
                                "<option value='선택'>선택</option>"+
                                "<option value='선택1'>선택1</option>"+
                                "<option value='선택2'>선택2</option>"+
                                "<option value='선택3'>선택3</option>"+
                            "</select>"+
                        "</div>"+
                    "</div>"+
                    "<div class='b-item'>"+
                        "<label for=''>상태</label>"+
                        "<div>"+
                            "<select name='sel' id='degree2' class='select-nomal w200'>"+
                                "<option value='선택'>선택</option>"+
                                "<option value='선택1'>선택1</option>"+
                                "<option value='선택2'>선택2</option>"+
                                "<option value='선택3'>선택3</option>"+
                            "</select>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
            

        )
    })

    // 근무경력 추가
    $('.add-btn2').click(function(){
        addBtnVal2 += 1
        $('.add-btn2').parents('.btn-wrap').before(

            
            "<div class='box-style wrap-05'>"+
                                        "<div>"+
                                            "<div class='b-item'>"+
                                                "<label for=''>직장명</label>"+
                                                "<input type='text' class='input-nomal w300 mr10' placeholder='직장명'>"+
                                                "<input type='text' class='input-nomal w300' placeholder='부서명'>"+
                                            "</div>"+
                                            "<div class='b-item'>"+
                                                "<label for=''>직위</label>"+
                                                "<input type='text' class='input-nomal w300' placeholder='직위'>"+
                                            "</div>"+
                                        "</div>"+
                                        "<div class='b-item b-item-06'>"+
                                            "<label for=''>근무기간</label>"+
                                            "<input type='text' id='sdate1-" + addBtnVal2 + "' class='date-nomal w300 ' placeholder='시작연월'>"+
                                            "<span>~</span>"+
                                            "<input type='text' id='edate1-" + addBtnVal2 + "' class='date-nomal w300 ' placeholder='종료연월'>"+
                                        "</div>"+
                                        "<div class='b-item'>"+
                                            "<label for=''>주요업무</label>"+
                                            "<input type='text' class='input-nomal w100p' placeholder='주요업무를 작성해 주세요'>"+
                                        "</div>"+
                                    "</div>"
            
        )
        startEndDate('1-',addBtnVal2)
    })

    // 주요활동사항 추가
    $('.add-btn3').click(function(){
        addBtnVal3 += 1
        $('.add-btn3').parents('.btn-wrap').before(

            
            "<div class='box-style wrap-05 wrap-06'>"+
                            "<div>"+
                                "<div class='b-item w100p'>"+
                                    "<label for=''>상세분야</label>"+
                                    "<input type='text' class='input-nomal w300 mr10 mr0' placeholder='상세 분야를 입력해 주세요'>"+
                                "</div>"+
                                "<div class='b-item b-item-06 b-item-07 m0'>"+
                                    "<label for=''>활동기간</label>"+
                                    "<input type='text' id='sdate2-" + addBtnVal3 + "' class='date-nomal w200 ' placeholder='날짜선택'>"+
                                    "<span>~</span>"+
                                    "<input type='text' id='edate2-" + addBtnVal3 + "' class='date-nomal w200 ' placeholder='날짜선택'>"+
                                "</div>"+
                            "</div>"+
                            "<div class='b-item'>"+
                                "<label for=''>주요내용</label>"+
                                "<input type='text' class='input-nomal w100p' placeholder='주요 내용을 작성해 주세요'>"+
                            "</div>"+
                            "<div class='b-item flex-divide align-items-start'>"+
                               "<div class='b-item fit-content'>"+
                                    "<label for=''>비고</label>"+
                                    "<input type='text' class='input-nomal w300' placeholder='비고'>"+
                               "</div>"+
                                "<p>※ 봉사활동, 정책기자단, SNS활동, 동아리, 프로젝트 등 다양한 활동을 기재하시기 바랍니다.</p>"+
                            "</div>"+
                        "</div>"
            
        )
        startEndDate('2-',addBtnVal3)
    })

    // 주요결과물 추가
    $('.add-btn4').click(function(){
        addBtnVal4 += 1
        $('.add-btn4').parents('.btn-wrap').before(

            
            "<div class='box-style wrap-05 wrap-06 wrap-08'>"+
                            "<div>"+
                                "<div class='b-item b-item-06 b-item-07 w100p'>"+
                                    "<label for=''>구분</label>"+
                                    "<input type='text' class='input-nomal w300' placeholder='구분'>"+
                                "</div>"+
                                "<div class='b-item b-item2'>"+
                                    "<label for='' class='mw-cus'>제목</label>"+
                                    "<input type='text' class='input-nomal w600' placeholder='명칭'>"+
                                "</div>"+
                            "</div>"+
                            "<div>"+
                                "<div class='b-item w100p'>"+
                                    "<label for=''>일자</label>"+
                                    "<input type='text'  id='date3-" + addBtnVal4 + " ' class='date-nomal w300' placeholder='연월 선택(발간,취득,등록,수상일)'>"+
                                "</div>"+
                                "<div class='b-item b-item-06 b-item-07 b-item-08'>"+
                                    "<label for='' class='mw-cus2  fit-content-lable'>발급ㆍ수여 기관</label>"+
                                    "<input type='text' class='input-nomal w300' placeholder='발급ㆍ수여 기관명'>"+
                                "</div>"+
                            "</div>"+
                        "</div>"
            
        )
    $('.date-nomal').datepicker();

    })

    // 체크박스 최대 개수 설정

    $('.check-max-3-1 > input').click(function(){ //직종 구분(전∙현직)

    var checkNum = $('.check-max-3-1 > input:checked').length;   //체크갯수 확인
    
    if(checkNum>3){
        alert('최대 3개까지 선택 가능합니다.')
        $(this).prop('checked', false);
    }
    });
    
    $('.check-max-3-2 > input').click(function(){ //관심분야

    var checkNum = $('.check-max-3-2 > input:checked').length;   //체크갯수 확인
    
    if(checkNum>3){
        alert('최대 3개까지 선택 가능합니다.')
        $(this).prop('checked', false);
    }
    });


})


// 파일추가
var maxAppend = 1;

function addDel(a){ 
    $(a).closest('.file-sel').remove(); 
    maxAppend --;

    if(maxAppend == 1){
        $('.file-not-sel').css('display','block')
    }
}

$(document).ready(function(){


$('#fileUp').on('input',function(){ 
    var fileValue = $("#fileUp").val().split("\\");
    var fileName = fileValue[fileValue.length-1];
    $('.file-not-sel').css('display','none')
if(maxAppend > 10){
    alert("파일 업로드 최대 개수는 10개 입니다.");
    return;
}else{
    $('.file-upload > div').append(
        
        "<div class='file-sel input-nomal w100p'>"+
                                    "<div>"+
                                        "<div></div>"+
                                        "<p>" + fileName + " </p>"+
                                        "<button type='button' onclick='addDel(this)';></button>"+
                                    "</div>"+
                                "</div>"
        
        ); 
    maxAppend ++;
}

});

})