

// 데이트 피커
$.datepicker.setDefaults({
  dateFormat: 'yy-mm-dd',
  prevText: '이전 달',
  nextText: '다음 달',
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  showMonthAfterYear: true,
  yearSuffix: '년'
});

$(function() {
  $('.datepicker').datepicker();
});

/* ============================================================ 
* 팝업
* ============================================================ */
function openPopup(popupname) {
  $("." + popupname).fadeIn(300);
  $('body').addClass('o-y-hidden');
}
// a 태그 이벤트 막기
$(function() {
  $('a.openPopup').on('click', function(e){
    e.preventDefault();
  });
});

// 셀렉트 박스 거절&승인 팝업
function openSelectPopup(select) {
  var val = $(select).val();
  if(val == '거절') {
    $(".alert-cancel").fadeIn(300);
  } 
  if(val == '승인') {
    $(".alert-confirm").fadeIn(300);
  }
  return;
}

// 파일추가
function addDel(a, that){ 
  var $this = $(a);
  var $thisFileList = $this.parents('.file-list');
  $thisFileList.remove();
  var $thisInput = $(that);
  var $fileList = $thisInput.siblings('.file-list')

  if($fileList.length < 1){
     $thisInput.siblings('.file-empty-list').css('display','block');
  }
}

// input 값 초기화
function valueReset(btn) {
  $(btn).siblings('input').val("");
  $(btn).siblings('input').attr('disabled', false);
}

// input 숫자 타입 최대길이 설정
function maxLength(object){
  var iptVal = object.val();
  if(iptVal.length > object.maxLength) {
    object.value = iptVal.substring(0, object.maxLength);
  }
}




$(function() {

  /* ============================================================ 
  * 프린트 설정
  * ============================================================ */
  $("#btn_print").click(function() {
		jQuery(".print-area").printThis({
			 debug: false,               // show the iframe for debugging

			 importCSS: true,            // import page CSS

			 importStyle: false,         // import style tags

			 printContainer: true,       // grab outer container as well as the contents of the selector

			 loadCSS: "./../css/style.css",  // path to additional css file - us an array [] for multiple

			 pageTitle: "",              // add title to print page

			 removeInline: false,        // remove all inline styles from print elements

			 printDelay: 333,            // variable print delay

			 header: null,               // prefix to html

			 footer: null,               // postfix to html

			 base: false,                // preserve the BASE tag, or accept a string for the URL

			 formValues: true,           // preserve input/form values

			 canvas: false,              // copy canvas elements (experimental)

			 doctypeString: '...',       // enter a different doctype for older markup

			 removeScripts: false        // remove script tags from print content
		});
  });

  /* ============================================================ 
  * 팝업 닫기
  * ============================================================ */
  
  // 팝업 닫기 시, 스크롤 활성화 유무 결정
  function popupsDisplayCheck( $doms, asyncTime ) {
    setTimeout(function() {
         var popupsDisplayCheck = $doms.attr('style').includes('none;');

         if(popupsDisplayCheck) {
            $('body').removeClass(o_y_hidden);
         };
      }, asyncTime);
  };
  
  // 닫기 버튼
  $('.popupWrapper .close').on('click', function() {

    $(this)
      .parent()
      .parent()
      .parent()
      .fadeOut(300);

      popupsDisplayCheck($('.popupWrapper'), 300);
  });
  
  // 취소 버튼
  $('.alert-popup .alert-close').on('click', function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .fadeOut(300);

      popupsDisplayCheck($('.alert-popup'), 300);
  });

  // 모든 팝업창 닫기 버튼
  $('.alert-popup .all-close').on('click', function() {
    $('.popupWrapper').fadeOut(300);
    $('body').removeClass(o_y_hidden);
  });

  /* ============================================================ 
  * 클래스 전역 변수
  * ============================================================ */
  var active = 'active'; // 클래스 active
  var openGnb = 'openGnb'; // 클래스 openGnb
  var toggleAct = 'toggle_active'; // 토글 active
  var asideToggleAct = 'asideToggleAct'; // 우측 메뉴 active
  var o_y_hidden = 'o-y-hidden'; 


   // 반응형 모바일 및 데스크탑 스크롤 활성화 유무 결정
  function responsiveOverflow(windowWidth) {
      var $body = $('body');
      var $wrap = $('.wrap');

      if(windowWidth < 1024){
         if($wrap.hasClass(active)) {
            $body.addClass(o_y_hidden);
         }
      } else {
         $body.removeClass(o_y_hidden);
      }
  };

  //왼쪽 메뉴 토글
   $(window).resize(function() {
      responsiveOverflow(window.innerWidth);
   });

   $('#btn_menuOpen').on('click', function(){
      $('.menu > li').removeClass(active);
      $('.menu > li').children('.menu-depth2').slideUp(300);
      $(this)
         .parent()
         .parent()
         .toggleClass(active);
          
      responsiveOverflow(window.innerWidth);
  });


   $('.menu-depth2').hide();

   $('.menu > li').on('click', function(){
      $('.menu > li').not($(this)).removeClass(active);
      $('.menu > li').not($(this)).children('.menu-depth2').slideUp(300);
      $(this)
        .parent()
        .parent()
        .parent()
        .addClass(active);
      $('.menu-depth2', this).slideToggle(300);
      $(this).toggleClass(active);
   });

   // 상단 메뉴
   $('#btn_user').on('click', function() {
       $('.user-menu').toggleClass(active);
   });

  $('.menu > li > a').on('click', function(e){
      e.preventDefault();
  });

  $('#content').on('click', function(){
    $('.wrap').removeClass(active);
    $('.menu-depth2').slideUp(300);
    $('.menu > li').removeClass(active);
    $('body').removeClass('o-y-hidden');
  });


  // 모바일 메뉴
  $('#m-menu-close').on('click', function(){
    $(this)
      .parent()
      .parent()
      .parent()
      .removeClass(active);
      $('body').removeClass('o-y-hidden');
  });
  $('.m-menu > ul > li').on('click', function(){
    $(this).addClass(active);
    $('.m-menu > ul > li').not(this).removeClass(active);
  });
  

  // 이메일 주소
  $('#email-select').on('change', function(){
    var $input = $('#email-ipt');

    $("#email-select option:selected").each(function () {     
      if($(this).val() == 'direct') {
          $input.val(''); 
          $input.attr("disabled", false);
          $input.css('display', 'inline-block');
          $input.focus();
      } else { 
          $input.val($(this).text());
          $input.attr("disabled", true); 
          $input.css('display', 'none');
      }
    });
 });


  // 체크박스 전체 선택 
  var $allCheckInput = $('.allChk'); // 전체선택 Input selector
  var targetInputs = 'input[name^="check_"]'; // name값으로 감지할 input 선택

   $allCheckInput.on('change', function() {
      if($(this).is(':checked')) {
         $(targetInputs).prop('checked', true);
      } else {
         $(targetInputs).prop('checked', false);
      }
   });

   $(targetInputs).on('change', function() {
         var checkInputLength = $(targetInputs + ':checked').length;

         if(checkInputLength != $(targetInputs).length ) {
            $allCheckInput.prop('checked', false);
         } else {
            $allCheckInput.prop('checked', true);
         }
   });

  // 전체 체크 그룹별로 함수 = 수정 및 추가하기
  var $tableParent = $('div[id^="table"]');

  $tableParent.on('click', function() {
      var getId = $(this).attr('id');
      var inputElements = $('#'+ getId + " " +"input[data-group^=" + getId + "]").length;
      var checkedInputs = $('#'+ getId + " " +"input[data-group^=" + getId + "]:checked").length;
      var parentInput = $("input[name^=" + getId + "]");

         console.log(inputElements, 'inputElements');
         console.log(checkedInputs, 'checkedInputs');
         console.log(parentInput, 'parentInput')

      if(inputElements === checkedInputs) {
        parentInput.attr('checked', true);
      } else {
        parentInput.attr('checked', false);
      }
  });




  // 관리자 - 회원등록 - 회원정보 입력: 체크박스 선택 시 내용 보이기
  // $('input[name=chkType01]').on('click', function(){
  //   $('input[name=chkType01]').not(this).prop("checked", false);
  //   if($('.chkInside').prop('checked')) {
  //     $('.chkOrgani').prop('checked', true);
  //     $('.chkYouths').prop('disabled', true);
  //   } else {
  //     if($('.chkPublic').prop('checked') && $('.chkYouths').prop('checked')) {
  //       $('.type-youths').addClass(active);
  //       $('.type-inner').removeClass(active);
  //     } else {
  //       $('.type-inner').addClass(active);
  //       $('.type-youths').removeClass(active);
  //     }
  //   }
  // });
  
  // $('input[name=chkType02]').on('click', function(){
  //   $('input[name=chkType02]').not(this).prop("checked", false);
  //   if($('.chkPublic').prop('checked') && $('.chkYouths').prop('checked')) {
  //     $('.type-youths').addClass(active);
  //     $('.type-inner').removeClass(active);
  //   } else {
  //     $('.type-inner').addClass(active);
  //     $('.type-youths').removeClass(active);
  //   }
  // });

  var $sType = $('input:checkbox[name="subscriptionType"]');
  var $mType = $('input:checkbox[name="memberType"]');

  $sType.on('click', function(){
    
    $sType.not(this).prop("checked", false);
    $mType.each(function() {
      if (this.value == "chkInside") { //값 비교
        $mType.
        this.checked = true; //checked 처리
       }
    });
  });

  // 관리자 - 회원관리 - 회원등록 : 가입유형 체크박스 필터
   $('.adm-chkBox.readOnly-label').on('click', function() {
      return false;
   });

   $('input[name="subscriptionType"]').on('change', function() {
      var inputId = $(this).attr('id');
      var thisChecked = $('#' + inputId).is(':checked');
      var $chkOrgani = $('#chkOrgani');
      var $chkYouths = $('#chkYouths');

      if(!thisChecked) {
         $chkOrgani.prop('disabled', true).prop('checked', false);
         $chkYouths.prop('disabled', true).prop('checked', false);
      } else {
         if(inputId === 'chkPublic') {
            $chkOrgani.prop('disabled', false).prop('checked', true);
            $chkYouths.prop('disabled', false).prop('checked', true);
         } else {
            $chkOrgani.prop('disabled', false).prop('checked', true);
            $chkYouths.prop('disabled', true).prop('checked', false);
         }
      }
   });





   // 체크박스 갯수 제한
   function appendInputs(thisInput, thatInputName, inputId, title, count) {

    if(thatInputName !== 'chk-limit') {
       return;
    }

    var appendTarget =$("[data-limit*='limit']");
    var toggleEffect = thisInput.is(':checked');

    
    if (count >= 1) {
       $('[data-template*=limit-template]').css('display', 'none');
    } else {
       $('[data-template*=limit-template]').css('display', 'block');
    }
    
    if(toggleEffect) {
       appendTarget.append(
          "<li>" +
             "<div class='list-cont'>" +
                "<label for=" + inputId + "_elm" + ">" + title +"</label>" +
             "</div>" +
             "<div class='list-cont txt-left'>" +
                "<input type='text' id=" + inputId + "_elm" + " name=" + inputId + "_elm" + "  class='input01' placeholder='상세 분야를 작성해주세요'/>" +
             "</div>" +
          "</li>"
       );
    } else {
       $('#' + inputId + "_elm").parent().parent().remove();
    }
   };



   $('input[type="checkbox"]').on('change', function() {
      var $this = $(this);
      var inputName = $this.attr('name');
      var inputId = $this.attr('id');
      var label = $this.siblings('label');
      var getLabelText = label.text();
      var $allInputs= $('#' + inputName + " input[type='checkbox']");
      var $notCheckedInputs= $('#' + inputName + " input[type='checkbox']:not(:checked)");
      var allInputsState = $('#' + inputName + " input[type='checkbox']:checked");

      if(allInputsState.length === 3){
         $notCheckedInputs.attr('disabled', true);
      } else {
         $allInputs.attr('disabled', false);
      };
      if(allInputsState.length <= 3) {
         appendInputs($this, inputName, inputId, getLabelText, allInputsState.length);
      }
   });

   function filterChecked($this, ) {

   } 

  // 툴팁 on/off 
  $('.ico-tooltip').on('click', function(){
    $(this)
      .parent()
      .addClass('active');
  });
  $('.tooltip .btn-close').on('click', function(){
    $(this)
      .parent()
      .parent()
      .parent()
      .removeClass('active');
  });



  // 생년월일 형식
  // 숫자만 입력되도록
  $("#isBirthday").keypress(function(event) {
    if (event.which < 48 || event.which > 57) {
      event.preventDefault();
    }
  });

  var RegNotNum = /[^0-9]/g;
   
  var prev = ""; // 이전 값 백업용
  $("#isBirthday").keyup(function() {

    var date = this.value;

    date = date.replace(RegNotNum, ''); // 숫자만 남기기

    if (date == "" || date == null || date.length < 5) {
      this.value = date;
      return;
    }

    var DataFormat;
    var RegDateFmt;

    // 날짜 포맷(yyyy-mm-dd) 만들기 
    if (date.length <= 6) {
      DataFormat = "$1.$2"; // 포맷(-)을 바꾸려면 이곳을 변경
      RegDateFmt = /([0-9]{4})([0-9]+)/;
    } else if (date.length <= 8) {
      DataFormat = "$1.$2.$3"; // 포맷(-)을 바꾸려면 이곳을 변경
      RegDateFmt = /([0-9]{4})([0-9]{2})([0-9]+)/;
    }

    date = date.replace(RegDateFmt, DataFormat);

    this.value = date;

    // 모두 입력됐을 경우 날짜 유효성 확인
    if (date.length == 10) {

      var isVaild = true;

      if (isNaN(Date.parse(date))) {
        // 유효 날짜 확인 여부
        isVaild = false;
      } else {

        // 년, 월, 일 0 이상 여부 확인
        var date_sp = date.split("-");
        date_sp.forEach(function(sp) {
          if (parseInt(sp) == 0) {
            isVaild = false;
          }
        });

        // 마지막 일 확인
        var last = new Date(new Date(date).getFullYear(), new Date(date).getMonth() + 1, 0);
        // 일이 달의 마지막날을 초과했을 경우 다음달로 자동 전환되는 현상이 있음 (예-2월 30일 -> 3월 1일)
        if (parseInt(date_sp[1]) != last.getMonth() + 1) {
          var date_sp2 = date_sp.slice(0);
          date_sp2[2] = '01';
          var date2 = date_sp2.join("-");
          last = new Date(new Date(date2).getFullYear(), new Date(date2).getMonth() + 1, 0);
        }
        if (last.getDate() < parseInt(date_sp[2])) {
          isVaild = false;
        }
      }

      if (!isVaild) {
        alert("잘못된 날짜입니다. \n다시 입력하세요.");
        this.value = "";
        this.focus();
        return;
      }
    }
  }).focusin(function() {
    prev = this.value;
  }).focusout(function() {
    // 정상 포맷이 아닌 채 입력 도중 나왔을 경우 값 복구
    var RegDateFmt = /([0-9]{4}).([0-9]{2}).([0-9]+)/; // 포맷(-)을 바꾸려면 이곳을 변경
    if (!RegDateFmt.test(this.value)) {
      this.value = prev;
    }
  });


  // 요소 추가&삭제
  var index = 1;
  // 제외어 추가
  $(document).on('click', '.btn-add-exclude', function(){
    if(index === 9) {
      alert("10개까지 추가 가능합니다.");
      return false;
    }
    index++;

    $(this)
      .parent('.exclude-wrap')
      .after(
        '<div class="input-wrap exclude-wrap clearfix">' +
          '<select name="" id="">'+
            '<option value="출신학교">출신학교</option>'+
            '<option value="출신학과">출신학과</option>'+
            '<option value="직장명">직장명</option>'+
            '<option value="기타">기타</option>'+
          '</select>'+
          '<input type="text" name="" id="" class="w70" placeholder="제외어">'+
          '<button type="button" class="btn btn-style-gr btn-rm-exclude">삭제</button>'+
          '<button type="button" class="btn btn-add-exclude">추가</button>'+
        '</div>'
      );
  });
  
  // 제외어 삭제
  $(document).on('click', '.btn-rm-exclude', function(){
    $(this)
      .parent()
      .not('div.fixWrap')
      .remove();
    index--;
  });


  // 학력 추가
  $(document).on('click', '.add-btn1', function(){
    if(index === 9) {
      alert("10개까지 추가 가능합니다.");
      return false;
    }
    index++;

    $(this)
    .prev()
    .before(
      '<ul class="flex-wrap">'+
        '<li class="f-left">'+
            '<div class="list-tit">'+
                '<label for="">학교명</label>'+
            '</div>'+
            '<div class="list-cont">'+
                '<div class="input-wrap">'+
                    '<input type="text" name="" id="" class="inputw80" value="" placeholder="학교명">'+
                '</div>'+
            '</div>'+
        '</li>'+
        '<li class="f-left">'+
            '<div class="list-tit">'+
                '<label for="">학과ㆍ전공명</label>'+
            '</div>'+
            '<div class="list-cont">'+
                '<div class="input-wrap">'+
                    '<input type="text" name="" id="" class="inputw80" placeholder="학과ㆍ전공명">'+
                '</div>'+
            '</div>'+
        '</li>'+
        '<li class="f-left">'+
            '<div class="list-tit">'+
                '학위 종류'+
            '</div>'+
            '<div class="list-cont">'+
                '<select name="" id="">'+
                    '<option value="선택" selected="" disabled="">선택</option>'+
                    '<option value="1">1</option>'+
                '</select>'+
            '</div>'+
        '</li>'+
        '<li class="f-left">'+
            '<div class="list-tit">'+
                '상태'+
            '</div>'+
            '<div class="list-cont">'+
                '<select name="" id="">'+
                    '<option value="선택" selected="" disabled="">선택</option>'+
                    '<option value="1">1</option>'+
                '</select>'+
            '</div>'+
        '</li>'+
    '</ul>'
    );
  });

  
  // 날짜 최소 최대 지정
  function fromToDate(num, val) {
    $('#fromDate'+num+val).datepicker();
    $('#fromDate'+num+val).datepicker("option", "maxDate", $('#toDate'+num+val).val());
    $('#fromDate'+num+val).datepicker("option", "onClose", function ( selectedDate ) {
      $('#toDate'+num+val).datepicker( "option", "minDate", selectedDate );
    });
  
    $('#toDate'+num+val).datepicker();
    $('#toDate'+num+val).datepicker("option", "minDate", $('#fromDate'+num+val).val());
    $('#toDate'+num+val).datepicker("option", "onClose", function ( selectedDate ) {
      $('#fromDate'+num+val).datepicker( "option", "maxDate", selectedDate );
    });
  }
  fromToDate('1-','1');
  fromToDate('2-','1');
  fromToDate('3-','1');

  // 경력 추가
  $(document).on('click', '.add-btn2', function(){
    if(index === 9) {
      alert("10개까지 추가 가능합니다.");
      return false;
    }
    index++;

    $(this)
    .prev()
    .before(
      '<ul class="flex-wrap">'+
          '<li class="f-left">'+
              '<div class="list-tit">'+
                  '<label for="">직장명</label>'+
              '</div>'+
              '<div class="list-cont">'+
                  '<div class="input-wrap">'+
                      '<input type="text" name="" id="" class="inputw80" value="" placeholder="직장명">'+
                  '</div>'+
              '</div>'+
          '</li>'+
          '<li class="f-left">'+
              '<div class="list-tit">'+
                  '<label for="">부서명</label>'+
              '</div>'+
              '<div class="list-cont">'+
                  '<div class="input-wrap">'+
                      '<input type="text" name="" id="" class="inputw80" placeholder="부서명">'+
                  '</div>'+
              '</div>'+
          '</li>'+
          '<li class="f-left">'+
              '<div class="list-tit">'+                                            
                  '<label for="">근무기간</label>'+
              '</div>'+
              '<div class="list-cont">'+
                  '<input type="text" id="fromDate1-'+ index +'" class="" placeholder="시작연월">'+
                  '<span>~</span>'+
                  '<input type="text" id="toDate1-'+ index +'" class="" placeholder="종료연월">'+
              '</div>'+
          '</li>'+
          '<li class="f-left">'+
              '<div class="list-tit">'+                                           
                  '<label for="">직위</label>'+
              '</div>'+
              '<div class="list-cont">'+
                  '<div class="input-wrap">'+
                      '<input type="text" name="" id="" class="inputw80" placeholder="직위">'+
                  '</div>'+
              '</div>'+
          '</li>'+
          '<li>'+
              '<div class="list-tit">'+
                  '<label for="">주요업무</label>'+
              '</div>'+
              '<div class="list-cont">'+
                  '<div class="input-wrap">'+
                      '<input type="text" name="" id="" class="inputw100" placeholder="주요업무를 작성해주세요.">'+
                  '</div>'+
              '</div>'+
          '</li>'+
      '</ul>'
    );
    fromToDate('1-',index);
  });

  // 활동 추가
  $(document).on('click', '.add-btn3', function(){
    if(index === 9) {
      alert("10개까지 추가 가능합니다.");
      return false;
    }
    index++;

    $(this)
    .prev()
    .before(
      '<ul class="flex-wrap">'+
          '<li class="f-left">'+
              '<div class="list-tit">'+
                  '<label for="">상세분야</label>'+
              '</div>'+
              '<div class="list-cont">'+
                  '<div class="input-wrap">'+
                      '<input type="text" name="" id="" placeholder="상세 분야">'+
                  '</div>'+
              '</div>'+
          '</li>'+
          '<li class="f-left">'+
              '<div class="list-tit">'+
                  '<label for="">비고</label>'+
              '</div>'+
              '<div class="list-cont">'+
                  '<div class="input-wrap">'+
                      '<input type="text" name="" id="" placeholder="비고">'+
                  '</div>'+
              '</div>'+
          '</li>'+
          '<li>'+
              '<div class="list-tit">'+
                  '<label for="">활동기간</label>'+
              '</div>'+
              '<div class="list-cont">'+
                  '<input type="text" id="fromDate2-'+ index +'" class="" placeholder="시작연월">'+
                  '<span>~</span>'+
                  '<input type="text" id="toDate2-'+ index +'" class="" placeholder="종료연월">'+
              '</div>'+
          '</li>'+
          '<li>'+
             '<div class="list-tit">'+
                  '<label for="">주요내용</label>'+
              '</div>'+
              '<div class="list-cont">'+
                  '<div class="input-wrap">'+
                      '<input type="text" name="" id="" class="inputw100" placeholder="주요내용을 작성해 주세요">'+
                 '</div>'+
              '</div>'+
          '</li>'+
      '</ul>'
    );
    fromToDate('2-',index);
  });

  // 주요 결과물 추가
  $(document).on('click', '.add-btn4', function(){
    if(index === 9) {
      alert("10개까지 추가 가능합니다.");
      return false;
    }
    index++;

    $(this)
    .prev()
    .before(
      '<ul class="flex-wrap">'+
        '<li class="f-left">'+
            '<div class="list-tit">'+
                '<label for="">구분</label>'+
            '</div>'+
            '<div class="list-cont">'+
                '<div class="input-wrap">'+
                    '<input type="text" name="" id="" placeholder="논문/저서 등">'+
                '</div>'+
            '</div>'+
        '</li>'+
        '<li class="f-left">'+
            '<div class="list-tit lh0">'+
                '<label for="datepicker3-1">연월<br><span>(발간,취득,등록,수상일)</span></label>'+
           '</div>'+
            '<div class="list-cont">'+
                '<input type="text" id="datepicker3-'+ index +'" class="datepicker" placeholder="선택">'+
            '</div>'+
        '</li>'+
        '<li class="f-left">'+
            '<div class="list-tit">'+
                '<label for="">제목</label>'+
            '</div>'+
            '<div class="list-cont">'+
                '<div class="input-wrap">'+
                    '<input type="text" name="" id="" class="inputw100" placeholder="명칭">'+
                '</div>'+
            '</div>'+
        '</li>'+
        '<li class="f-left">'+
            '<div class="list-tit">'+
                '<label for="">발급ㆍ수여기관</label>'+
            '</div>'+
            '<div class="list-cont">'+
                '<div class="input-wrap">'+
                    '<input type="text" name="" id="" placeholder="기관명">'+
                '</div>'+
            '</div>'+
        '</li>'+
    '</ul>'
    );
    $(".datepicker").datepicker();
  });



  // 인재 등록 추가한 리스트 삭제
  $(document).on('click', '.rmv-btn', function(){    
    $(this)
      .prev()
      .not('.fixWrap')
      .remove();
    index--;
  });
  

  // 표 내용 셀 비활성화 시 클래스 추가
  if ($('.table-wrap.result-table-wrap tr').hasClass('inact')) {
    $('.table-wrap.result-table-wrap tr.inact .btn').attr('href', "#");
  }







  // 퀵메뉴  
  // 상단으로 이동
  $('#btn-top').on('click', function(e) {
    e.preventDefault();
    $('.popup-con.youths-info-con').animate({ scrollTop : 0 }, 500);
  });

  // 퀵메뉴 클릭 시 클래스 추가
  $('.quickList li').on('click', function(){
    $(this)
      .siblings()
      .removeClass('on');
    $(this).addClass('on');

  });

    
  // 파일추가
  $('.fileUp').on('input',function(e){
    var that = $(this).attr('id')
    var files = $(this)[0].files;
    var multipleType = e.target.multiple;
    var fileValue = $(this).val().split("\\");
    var fileName = fileValue[fileValue.length-1];
    var fileListLength = $(this).siblings('.file-list').length + 1;

    if($(this).val() === '') return;

    $(this).siblings('.file-empty-list').css('display','none');

    if (multipleType) {
       if(fileListLength > 10){
          alert("파일 업로드 최대 개수는 10개 입니다.");
          return;
       } else {
          for(var i = 0; i < files.length; i++) {
             console.log(files[i])
             $(this).parent().append(        
                "<div class='file-list'>"+
                "<div>" +
                   "<p>" + files[i].name + " </p>"+
                   "<button type='button' class='btn-file-del' onclick='addDel(this, "+ that +")';>삭제</button>"+
                "</div>" +
                "</div>"        
             ); 
          }
       };
    } else {
       if(fileListLength > 1){
          alert("파일 업로드 최대 개수는 1개 입니다.");
          return;
       } else {
          $(this).parent().append(        
             "<div class='file-list'>"+
             "<div>" +
                "<p>" + fileName + " </p>"+
                "<button type='button' class='btn-file-del' onclick='addDel(this, "+ that +")';>삭제</button>"+
             "</div>" +
             "</div>"        
          ); 
       };
    }
});

  // 탭 
  var $TabList = $('.tab-list li');
  var $tabBox = $('.tabBox');
  var tabOn = 'tab-on'

  $TabList.first().addClass(tabOn);
  $tabBox.hide();
  $tabBox.first().show();

  $TabList.click(function(e){
      e.preventDefault();
      $TabList.removeClass(tabOn);
      $(this).addClass(tabOn);
      $tabBox.hide();
      
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).show();
  });

  // 글자수 제한 및 체크
  $('#textarea-count').on('keyup', function(){
    var content = $(this).val();

    if(content.length == 0 || content == ''){
      $(this)
        .siblings([0])
        .children('span.blue')
        .text('0');
    } else {
      $(this)
        .siblings([0])
        .children('span.blue')
        .text(content.length);
    }

    if(content.length > 1000) {
      $(this).val($(this).val().substring(0,1000));
      alert("1,000자까지 입력 가능합니다.");
    }

  });

  // 승인 및 거절 시 셀렉트 박스 스타일 변경



  // 관리자 - 회원 목록 toggle
  $('.user-list li').on('click', function(){
    $(this).toggleClass(active);
  });

  // 회원 토글
  var schUserList = $('.schUser-box .box-cont > li');
  schUserList.on('click', function(){
    schUserList.not($(this)).removeClass(active);
    schUserList.not($(this)).children('.menu-depth2').slideUp(300);
    $(this)
      .parent()
      .parent()
      .parent()
      .addClass(active);
    $('.menu-depth2', this).slideToggle(300);
    $(this).toggleClass(active);
 });
});
