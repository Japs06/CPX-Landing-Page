var $form = $('Sheet1'),
url = 'https://script.google.com/macros/s/AKfycbyfVNI5eovwnRB8xvm-Bd4gi0xrTsuO7FwshdA_vt2345uHwAvuuP1cubTiza9T_U9Gcg/exec'

$.validate({
  lang: 'en'
});

$('Sheet1').on('submit', function(e) {
  e.preventDefault();
  
  const el = $(this);
  const submitButton = $(el).find('button');

  const name = el.find('input[name="name"]').val();
  const email = el.find('input[name="email"]').val();
  const phone = el.find('input[name="phone"]').val();
  const primary_domain = el.find('input[name="primary_domain"]').val();


  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    data: $('Sheet1').serialize(),
    beforeSend: function(){
      submitButton.attr('disabled',true);
      submitButton.text('sending....');
    },
    success:function(data) {
      swal("Thank you for submit your data!", "", "success");
      submitButton.attr('disabled',false);
      submitButton.text('Submit');
    } 
  });
})
</script>
 <script>
 new WOW().init();
</script>

 <script type="text/javascript">
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
     e.preventDefault();

     document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
     });
 });
});
