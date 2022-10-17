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
var maxAppend = 1;
function addDel(a){ 
    $(a).closest('.file-sel').remove(); 
    maxAppend --;

    if(maxAppend == 1){
        $('.file-not-sel').css('display','block')
    }
}

// input 값 초기화
function valueReset(btn) {
  $(btn).siblings('input').val("");
  $(btn).siblings('input').attr('disabled', false);
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
  // 닫기 버튼
  $('.popupWrapper .close').on('click', function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .fadeOut(300);

    $('body').removeClass('o-y-hidden');
  });
  
  // 취소 버튼
  $('.alert-popup .alert-close').on('click', function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .fadeOut(300);

    $('body').removeClass('o-y-hidden');
  });

  // 모든 팝업창 닫기 버튼
  $('.alert-popup .all-close').on('click', function() {
    $('.popupWrapper').fadeOut(300);
    $('body').removeClass('o-y-hidden');
  });

  /* ============================================================ 
  * 클래스 전역 변수
  * ============================================================ */
  var active = 'active'; // 클래스 active
  var openGnb = 'openGnb'; // 클래스 openGnb
  var toggleAct = 'toggle_active'; // 토글 active
  var asideToggleAct = 'asideToggleAct'; // 우측 메뉴 active

  //왼쪽 메뉴 토글
   $(window).resize(function() {
    if(window.innerWidth < 1024){
      if($('.wrap').hasClass(active)) {
        $('body').addClass('o-y-hidden');
      }
    }
    $('#btn_menuOpen').on('click', function(){
        $('.menu > li').removeClass(active);
        $('.menu > li').children('.menu-depth2').slideUp(300);
        $(this)
            .parent()
            .parent()
            .toggleClass(active);
        $('body').addClass('o-y-hidden');
    });
   }).resize();

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

  $allCheckInput.on('change', function(){
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
      if(inputElements === checkedInputs) {
        parentInput.attr('checked', true);
      } else {
        parentInput.attr('checked', false);
      }
  });




  // 체크박스 하나만 선택
  // var $oneChkParent = $('div[id^="oneChkWrap"]');

  // $oneChkParent.on('click', function(){
  //   var getId = $(this).attr('id');
  //   var inputElements = $('#' + getId + " " + "input[data-group^=" + getId + "]").length;
  //   var checkedInputs = $('#' + getId + " " + "input[data-group^=" + getId + "]:checked").length;



  // });
  






  $('input[name=onechk]').on('click',function() {
    $('input[name=onechk]').not(this).prop("checked", false);
  });
  $('input[name=onechk2]').on('click',function() {
    $('input[name=onechk2]').not(this).prop("checked", false);
  });


  // 관리자 - 회원등록 - 회원정보 입력: 체크박스 선택 시 내용 보이기
  $('input[name=chkType01]').on('click', function(){
    $('input[name=chkType01]').not(this).prop("checked", false);
    if($('.chkPublic').prop('checked') && $('.chkYouths').prop('checked')) {
      $('.type-youths').addClass(active);
      $('.type-inner').removeClass(active);
    } else {
      $('.type-inner').addClass(active);
      $('.type-youths').removeClass(active);
    }
  });
  
  $('input[name=chkType02]').on('click', function(){
    $('input[name=chkType02]').not(this).prop("checked", false);
    if($('.chkPublic').prop('checked') && $('.chkYouths').prop('checked')) {
      $('.type-youths').addClass(active);
      $('.type-inner').removeClass(active);
    } else {
      $('.type-inner').addClass(active);
      $('.type-youths').removeClass(active);
    }
  });







  // 체크박스 갯수 제한
  var chkbox = 'input[name="chk-limit"]';
  $(chkbox).on('change', function(){
      if($(chkbox + ':checked').length === 3){
          $(chkbox + ':not(:checked)').attr('disabled', true);
      } else {
          $(chkbox).attr('disabled', false);
      }
  });



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
                    '<input type="text" name="" id="" class="input02" value="" placeholder="학교명">'+
                '</div>'+
            '</div>'+
        '</li>'+
        '<li class="f-left">'+
            '<div class="list-tit">'+
                '<label for="">학과ㆍ전공명</label>'+
            '</div>'+
            '<div class="list-cont">'+
                '<div class="input-wrap">'+
                    '<input type="text" name="" id="" class="input02" placeholder="학과ㆍ전공명">'+
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



  // 인재 등록 추가한 리스트 삭제
  $(document).on('click', '.rmv-btn', function(){    
    $(this)
      .prev()
      .not('.fixWrap')
      .remove();
    index--;
  });
  







  // 퀵메뉴
  var youthsPopupWrap = $('.popup-con.youths-info-con');
  var quickMenu = $('#quickMenu .quickList');
  
  // 상단으로 이동
  $('#btn-top').on('click', function(e) {
    e.preventDefault();
    youthsPopupWrap.animate({ scrollTop : 0 }, 500);
  });

  // 퀵메뉴 클릭 시 클래스 추가
  $('.quickList li').on('click', function(){
    $(this)
      .siblings()
      .removeClass('on');
    $(this).addClass('on');

  });

    
  // 파일추가
  $('#fileUp').on('input',function(){ 
    var fileValue = $("#fileUp").val().split("\\");
    var fileName = fileValue[fileValue.length-1];
    $('.file-not-sel').css('display','none');

    if(maxAppend > 10){
      alert("파일 업로드 최대 개수는 10개 입니다.");
      return;
    } else {
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


});


  // 데이트 피커
  $(function() {
    $( "#datepicker" ).datepicker({
      dateFormat: "yy-mm-dd",
      minDate: 0,
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
});

// 데이트 피커 - 기간 설정
$(function() {
    var dateFormat = "yy-mm-dd",
    from = $( "#fromDate" )
      .datepicker({
        dateFormat: "yy-mm-dd",
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#toDate" ).datepicker({
      dateFormat: "yy-mm-dd",
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
});