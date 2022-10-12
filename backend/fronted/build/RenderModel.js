"use strict";
class RenderModel {
    static RenderPlayers(playersArr) {
        this.emptyPlayers();
        this.renderPlayers(playersArr);
    }
    static RenderDreamTeam(playersArr) {
        this.emptyDreamTeam();
        this.renderDreamTeam(playersArr);
    }
    static RenderFilterButton() {
        $("#birthday-filter-btn").html(`<i class="bi bi-funnel"></i> Filter by birthday`);
    }
    static RenderUnfilterButton() {
        $("#birthday-filter-btn").html(`<i class="bi bi-funnel-fill"></i> Unfilter`);
    }
    static emptyPlayers() {
        $(".players-container").empty();
    }
    static renderPlayers(playersArr) {
        const userhtml = $("#players-template").html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template({ playersArr: playersArr });
        $(".players-container").append(newHTML);
    }
    static renderDreamTeam(dreamTeamArr) {
        const userhtml = $("#dreamTeam-template").html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template({ dreamTeamArr: dreamTeamArr });
        $(".dreamTeam-container").append(newHTML);
    }
    static emptyDreamTeam() {
        $(".dreamTeam-container").empty();
    }
}
