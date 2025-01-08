var $form = $('form#Rename_this'),
url = 'https://docs.google.com/spreadsheets/d/1eweoJ9-eoWIeXkrilnuTC2z3U3cFVdCgD1_ZpWrTHQk'

$.validate({
  lang: 'en'
});

$('#Rename_this').on('submit', function(e) {
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
    data: $('#Rename_this').serialize(),
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