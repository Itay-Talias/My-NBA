class RenderModel {
    public static RenderPlayers(playersArr: Player[]) {
        this.emptyContainer("players");
        this.renderContainer({ playersArr: playersArr }, "players");
    }
    public static RenderDreamTeam(playersArr: Player[]) {
        this.emptyContainer("dreamTeam");
        this.renderContainer({ dreamTeamArr: playersArr }, "dreamTeam");
    }
    public static RenderPlayerStats(playersStats: object) {
        this.renderContainer(playersStats, "player-stats");
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
    public static EmptyPlayerStats() {
        this.emptyContainer("player-stats");
    }
    private static renderContainer(
        objectToRender: object,
        containerName: string
    ) {
        const userhtml = $(`#${containerName}-template`).html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template(objectToRender);
        $(`.${containerName}-container`).append(newHTML);
    }
    private static emptyContainer(containerName: string) {
        $(`.${containerName}-container`).empty();
    }
}
