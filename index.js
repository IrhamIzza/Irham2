function search() {
    $("#search-button").on("click", function () {
        $.ajax({
          url: "https://imdb.iamidiotareyoutoo.com/search",
          method: "GET",
          data: {
            q: $("#search-input").val(),
          },
          success: function (result) {
            if (result.ok == true) {
              let hasil = result.description;
              $('#movie-list').html('')
              hasil.forEach(function (item) {
              //   var title = item["#TITLE"];
                $("#movie-list").append(`
                  <div class="col-6 col-md-4">
                      <div class="card mb-3">
                          <img src="`+ item['#IMG_POSTER'] +`" class="card-img-top img-fluid" alt="...">
                          <div class="card-body">
                              <h5 class="card-title">`+ item['#AKA'] +`</h5>
                              <p class="card-text"><span class="fw-bold">Actors :</span> `+ item['#ACTORS']+` </p>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary search-detail" data-id="`+item['#IMDB_ID']+`" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                            </button>

                          </div>
                      </div>
                  </div>
                      `);
              });
            } else {
      
            }
          },
          
        });
      });    
}
search()
$('#movie-list').on("click",'.search-detail',function () {
    let data_id = $(this).data('id')
    $.ajax({
        url: "https://imdb.iamidiotareyoutoo.com/search",
        method: "GET",
        data: {
          tt: data_id,
        },
        success : function (result) {
        let short = result['short']
            $('.modal-content').html(
                `
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">`+short.name+`</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-4 ">
                            <img src="`+short.image+`" alt="" class="img-fluid">
                        </div>
                        <div class="col-8">
                            <p><span class="fw-bold">Description :</span> `+short.description+`</p>
                            <p><span class="fw-bold">Content Rating :</span> `+short.contentRating+`</p>
                            <p><span class="fw-bold">Genre : </span>`+short.genre+`</p>
                            <p><span class="fw-bold">Released : </span>`+short.datePublished+`</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                `
            )
        }
    })
})

$('#cocok-submit').on('click', function () {
  let nama1 = $('#nama1').val().toLowerCase()
  let nama2 = $('#nama2').val().toLowerCase()
  let cocok = nama1 == 'ilyas' && nama2 == 'anne' || nama1 == 'anne' && nama2 == 'ilyas' 
  let Tcocok = nama1 == 'irham' && nama2 == 'salma' || nama1 == 'salma' && nama2 == 'irham' 

  function cek() {
    if (nama1 == 'daren'||nama1 == 'irham'||nama1 == 'ilyas'||nama1 == 'dika') {
      if (nama2 == 'daren'||nama2 == 'irham'||nama2 == 'ilyas'||nama2 == 'dika') {
        return true
      }else{ return false }
    }else{
      return false
    }
  }
  console.log(cek())
  function hitung() {
    let hitung = Math.round(Math.random()*100)
    return hitung 
  }
  function hitungCocok() {
    let hitung = Math.round(Math.random() * 20) + 80;
    return hitung 
  }
  function hitungTidak() {
    let hitung = Math.round(Math.random() * 20);
    return hitung 
  }

  if(cek() == true) {
    $('#cocok-hasil').html(`
      DILARANG JOMOK `)
  }else if(Tcocok) {
    $('#cocok-hasil').html(`
      Hasil : `+ hitungTidak() +` 
      %`)
  }else if (cocok) {
    $('#cocok-hasil').html(`
      Hasil : `+ hitungCocok() +` 
      %`)
  } else {
    $('#cocok-hasil').html(`
      Hasil : `+ hitung() +` 
      %`)
  }

})