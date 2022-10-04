class RenderModel {
    public static RenderPage(playersArr: Player[]) {
        this.emptyPlayers();
        this.renderPlayers(playersArr);
    }
    private static emptyPlayers() {
        $(".players-container").empty();
    }
    public static emptyDreamTeam() {
        $(".dreamTeam-container").empty();
    }
    private static renderPlayers(playersArr: Player[]) {
        const userhtml = $("#players-template").html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template({ playersArr: playersArr });
        $(".players-container").append(newHTML);
    }
    public static renderDreamTeam(dreamTeamArr: Player[]) {
        const userhtml = $("#dreamTeam-template").html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template({ dreamTeamArr: dreamTeamArr });
        $(".dreamTeam-container").append(newHTML);
    }
}
