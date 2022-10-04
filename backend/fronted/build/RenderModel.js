"use strict";
class RenderModel {
    static RenderPage(playersArr) {
        this.emptyPlayers();
        this.renderPlayers(playersArr);
    }
    static emptyPlayers() {
        $(".players-container").empty();
    }
    static emptyDreamTeam() {
        $(".dreamTeam-container").empty();
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
}
