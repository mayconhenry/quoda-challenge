var request = require ('request');
var cheerio = require ('cheerio');

request ('http://www.cnpq.br/web/guest/licitacoes', function(err, res, body){
    if (err) console.log('Erro: ' + err);
    var $ = cheerio.load(body);

    $(".table-cell .licitacoes").each(function () { 
      console.log("========================================================");
        $contLicitacoes = $(".cont_licitacoes", $(this));
        console.log("Name:" + $(".titLicitacao", $(this)).text());
        console.log(' ');
        console.log($(".cont_licitacoes", $(this)).text()); 
        console.log(' ');
        console.log("Stating date: " + $(".data_licitacao", $(this)).text());
        console.log('-----------------------------------------------------');
        console.log("Attachment: ");
        $(".download-list a", $(this)).each(function () {
          console.log("----> Name: " + $(this).text());
          console.log("----> File: " + $(this).attr('href'));
          console.log(' ');
        });
    });
});