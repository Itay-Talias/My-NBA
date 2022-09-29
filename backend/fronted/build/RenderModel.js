"use strict";
class RenderModel {
    static RenderPage(playersArr) {
        this.emptyPlayers();
        this.renderPlayers(playersArr);
    }
    static emptyPlayers() {
        $(".players-container").empty();
    }
    static renderPlayers(playersArr) {
        const userhtml = $("#players-template").html();
        var template = Handlebars.compile(userhtml);
        const newHTML = template({ playersArr: playersArr });
        $(".players-container").append(newHTML);
    }
}
