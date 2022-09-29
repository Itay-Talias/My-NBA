class RenderModel {
    public static RenderPage(playersArr: Player[]) {
        this.emptyPlayers();
        this.renderPlayers(playersArr);
    }
    private static emptyPlayers() {
        $(".players-container").empty();
    }
    private static renderPlayers(playersArr: Player[]) {
        const userhtml = $("#players-template").html();
        var template = Handlebars.compile(userhtml);
        const newHTML = template({ playersArr: playersArr });
        $(".players-container").append(newHTML);
    }
}
