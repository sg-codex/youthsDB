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

function openSelectPopup(popupname) {
  if($('select.selectPopup').val() == '거절') {
    $("." + popupname).fadeIn(300);
  }
}


$(function() {
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

  /* ============================================================ 
  * 클래스 전역 변수
  * ============================================================ */
  var active = 'active'; // 클래스 active
  var openGnb = 'openGnb'; // 클래스 openGnb
  var toggleAct = 'toggle_active'; // 토글 active
  var asideToggleAct = 'asideToggleAct'; // 우측 메뉴 active

  /* ============================================================ 
  * 왼쪽 메뉴 토글
  * ============================================================ */
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
    });
    $('.m-menu > ul > li').on('click', function(){
      $(this).addClass(active);
      $('.m-menu > ul > li').not(this).removeClass(active);
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

    // 셀렉트 박스 커스텀 (임시) 
    $('.selectBox').on('click', function(){
      $('.selectBox').not($(this)).removeClass(active);
      $(this).toggleClass(active);
    });


    // 체크박스 전체 선택 
    var allChk = $('.allChk');
    var check = $('input[name=check]');

    allChk.on('click', function(){
      if(allChk.is(':checked')) {
        check.prop('checked', true);
      } else {
        check.prop('checked', false);
      }
    });

    check.on('click', function(){
      var total = check.length;
      var checked = $('input[name=check]:checked').length;

      if( total != checked ) {
        allChk.prop('checked', false); 
      } else {
        allChk.prop('checked', true);
      }

    });

    // 체크박스 갯수 제한 - 기존 기능 사라짐. 주석 처리
    // var chkbox = $('input[name=interest]');
    // $(chkbox).change(function(){
    //     if($('input[name=interest]:checkbox:checked').length === 5){
    //         $(':checkbox:not(:checked)').attr('disabled', 'disabled');
    //     } else {
    //         $('input[name=interest]:checkbox').removeAttr('disabled');
    //     }
    // });



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

    // 제외어 추가&삭제
    var index = 0;

    $(document).on('click', '.btn-add-exclude', function(){

      if(index === 9) {
        alert("10개까지 추가 가능합니다.");
        return false;
      }

      var newExcludeWrap = '<div class="input-wrap exclude-wrap clearfix"><select name="" id=""><option value="출신학교">출신학교</option><option value="출신학과">출신학과</option><option value="직장명">직장명</option><option value="기타">기타</option></select><input type="text" name="" id="" class="w70" placeholder="제외어"><button type="button" class="btn btn-style-gr btn-rm-exclude">삭제</button><button type="button" class="btn btn-add-exclude">추가</button></div>';

      $(this)
        .parent('.exclude-wrap')
        .after(newExcludeWrap);

      index+=1;

    });

    $(document).on('click', '.btn-rm-exclude', function(){
      $(this)
        .parent()
        .not('div.fixWrap')
        .remove();
    });




    // 퀵메뉴
    var youthsPopupWrap = $('.popup-con.youths-info-con');
    var youthsConBox = $('.markedYouthsPopup .con-box');
    var quickMenu = $('#quickMenu .quickList');
    var quickMenu_height = quickMenu.outerHeight();
    
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


});