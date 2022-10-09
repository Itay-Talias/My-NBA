const NBAController = new ControllerModel();

NBAController.addOnClicksToButtons();
NBAController.getDreamTeam();

$(".card-img-top").on("error", function (event) {
    $(".card-img-top").attr(
        "src",
        "https://he.wikipedia.org/wiki/NBA#/media/%D7%A7%D7%95%D7%91%D7%A5:NBALogo.svg"
    );
    $(".card-img-top").attr("onerror", null);
});
