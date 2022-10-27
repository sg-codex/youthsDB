// 모바일 체크 true면 모바일
function Mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } // 헤더 포커스 이벤트
  
  
  var headerListName = Array.prototype.slice.call(document.querySelectorAll('.header__menu > li > a'));
  var headerlastA = Array.prototype.slice.call(document.querySelectorAll('.header__step2:last-child'));
  
  if (Mobile()) {// 모바일일 경우
    var _loop = function _loop(i) {
      var e = headerListName[i];
      e.addEventListener('click', function () {
        if (e.parentNode.classList.contains('header-active')) {
          headerListName.forEach(function (a) {
            a.parentNode.classList.remove('header-active');
          });
        } else {
          headerListName.forEach(function (a) {
            a.parentNode.classList.remove('header-active');
          });
          e.parentNode.classList.add('header-active');
        }
      });
    };
    
    for (var i = 0; i < headerListName.length; i++) {
      _loop(i);
    }
  } else {// 모바일 아닐 경우
    var _loop2 = function _loop2(_i) {
      var e = headerlastA[_i];
      e.addEventListener('focusout', function () {
        e.parentNode.parentNode.classList.remove('header-active');
      });
    };
  
    
    for (var _i = 0; _i < headerlastA.length; _i++) {
      _loop2(_i);
    }
  
    var _loop3 = function _loop3(_i2) {
      var e = headerListName[_i2];
      e.addEventListener('focus', function () {
        headerListName.forEach(function (a) {
          a.parentNode.classList.remove('header-active');
        });
        e.parentNode.classList.add('header-active');
      });
      e.addEventListener('mouseleave', function () {
        headerListName.forEach(function (a) {
          a.parentNode.classList.remove('header-active');
        });
      });
    };
  
    for (var _i2 = 0; _i2 < headerListName.length; _i2++) {
      _loop3(_i2);
    }
  } // 헤더 포커스 이벤트 끝
  // datepicker
  
  
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
  
  function modalOn(modal) {
    $('.' + modal).fadeIn();
    if (Mobile()){// 모바일일 경우
      $('body').css('overflow','hidden')
    }
  }
  
  $(function () {
    //  모달
    $(".modal-close-btn").click(function () {
      if($(this).hasClass('close')) {
        $(this)
        .parent()
        .parent()
        .parent()
        .fadeOut();
      } else {
        $(".modal").fadeOut();
      }
      $('body').css('overflow','auto')
    }); 

  // 취소 버튼
  $('.alert-popup .alert-close').on('click', function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .fadeOut();

      $('body').css('overflow','auto')
  });

  // 모든 팝업창 닫기 버튼
  $('.alert-popup .all-close').on('click', function() {
        $(".modal").fadeOut();
    $('body').removeClass('o-y-hidden');
  });

    
    // datepicker
  
    $('.date-nomal').datepicker();
  });
  $(function() {
    // a 태그 이벤트 막기
    $('a.openPopup').on('click', function(e){
      e.preventDefault();
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


  });

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




  $(document).ready(function(){

      // 모바일 메뉴 토글
		$(".menu-step1").click(function(){
      if($(this).hasClass("menu-on")){
        $(".menu-step1").removeClass('menu-on')
      }else{
        $(".menu-step1").removeClass('menu-on')
        $(this).addClass('menu-on')
      }
		});

    //체크박스 전체 선택 해제
    $("#ch-all").click(function() {
      if($("#ch-all").is(":checked")) $("input[name=table-check]").prop("checked", true);
      else $("input[name=table-check]").prop("checked", false);
    });
  
    $("input[name=table-check]").click(function() {
      var total = $("input[name=table-check]").length;
      var checked = $("input[name=table-check]:checked").length;
  
      if(total != checked) $("#ch-all").prop("checked", false);
      else $("#ch-all").prop("checked", true); 
    });


    // Q&A
    $(".question").click(function(){
      if($(this).hasClass("active")){
        $(".question").removeClass('active')
      }else{
        $(".question").removeClass('active')
        $(this).addClass('active')
      }
		});


    // 이메일 직접입력
    $('#emailId').change(function(){
      $("#emailId option:selected").each(function () {
       console.log('ss');
       
       if($(this).val()== '1'){ //직접입력일 경우
          $("#inputId").val('');                        //값 초기화
          $("#inputId").attr("disabled",false); //활성화
          $("#inputId").attr("required",true); //필수값받도록 변경
          $("#inputId").css("display",'block'); //활성화
          $("#inputId").focus(); //직접입력 창 포커스

       }else{ //직접입력이 아닐경우
          // $("#inputId").val($(this).text());      //선택값 입력
          $("#inputId").attr("disabled",true); //비활성화
          $("#inputId").attr("required",false); //필수값 안받도록 변경
          $("#inputId").css("display",'none'); //활성화

       }
      });
   });
	});



