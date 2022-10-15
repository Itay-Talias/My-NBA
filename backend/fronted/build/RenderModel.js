"use strict";
class RenderModel {
    static RenderPlayers(playersArr) {
        this.emptyContainer("players");
        this.renderContainer({ playersArr: playersArr }, "players");
    }
    static RenderDreamTeam(playersArr) {
        this.emptyContainer("dreamTeam");
        this.renderContainer({ dreamTeamArr: playersArr }, "dreamTeam");
    }
    static RenderPlayerStats(playersStats) {
        this.renderContainer(playersStats, "player-stats");
    }
    static RenderFilterButton() {
        $("#birthday-filter-btn").html(`<i class="bi bi-funnel"></i> Filter by birthday`);
    }
    static RenderUnfilterButton() {
        $("#birthday-filter-btn").html(`<i class="bi bi-funnel-fill"></i> Unfilter`);
    }
    static EmptyPlayerStats() {
        this.emptyContainer("player-stats");
    }
    static renderContainer(objectToRender, containerName) {
        const userhtml = $(`#${containerName}-template`).html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template(objectToRender);
        $(`.${containerName}-container`).append(newHTML);
    }
    static emptyContainer(containerName) {
        $(`.${containerName}-container`).empty();
    }
}
