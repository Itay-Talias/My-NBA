class RenderModel {
    public static RenderPlayers(playersArr: Player[]) {
        this.emptyPlayers();
        this.renderPlayers(playersArr);
    }
    public static RenderDreamTeam(playersArr: Player[]) {
        this.emptyDreamTeam();
        this.renderDreamTeam(playersArr);
    }
    public static RenderFilterButton() {
        $("#birthday-filter-btn").html(
            `<i class="bi bi-funnel"></i> Filter by birthday`
        );
    }
    public static RenderUnfilterButton() {
        $("#birthday-filter-btn").html(
            `<i class="bi bi-funnel-fill"></i> Unfilter`
        );
    }
    private static emptyPlayers() {
        $(".players-container").empty();
    }
    private static renderPlayers(playersArr: Player[]) {
        const userhtml = $("#players-template").html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template({ playersArr: playersArr });
        $(".players-container").append(newHTML);
    }
    private static renderDreamTeam(dreamTeamArr: Player[]) {
        const userhtml = $("#dreamTeam-template").html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template({ dreamTeamArr: dreamTeamArr });
        $(".dreamTeam-container").append(newHTML);
    }
    private static emptyDreamTeam() {
        $(".dreamTeam-container").empty();
    }
}
