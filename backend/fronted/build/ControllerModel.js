"use strict";
class ControllerModel {
    constructor() {
        this.dataOfplayerArr = new NBADataModel();
        this.startIndex = 0;
        this.endIndex = 6;
        this.flagBirthday = false;
    }
    getDreamTeam() {
        this.dataOfplayerArr.FetchDreamTeam().then(() => {
            RenderModel.emptyDreamTeam();
            RenderModel.renderDreamTeam(this.dataOfplayerArr.dreamTeamArr);
        });
    }
    addOnClicksToButtons() {
        const self = this;
        $("#getTeam-btn").on("click", () => {
            this.startIndex = 0;
            this.endIndex = 6;
            if ($(".form-check-input:checked").val() == "on") {
                this.dataOfplayerArr
                    .FetchActivePlayerByTeamAndYear(String($("#team-name").val()), Number($("#year").val()))
                    .then(() => {
                    RenderModel.RenderPage(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
                });
            }
            else {
                this.dataOfplayerArr
                    .FetchPlayerByTeamAndYear(String($("#team-name").val()), Number($("#year").val()))
                    .then(() => {
                    RenderModel.RenderPage(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
                });
            }
        });
        $("#birthday-filter-btn").on("click", () => {
            this.flagBirthday = !this.flagBirthday;
            this.startIndex = 0;
            this.endIndex = 6;
            if (this.flagBirthday === true) {
                this.dataOfplayerArr.GetPlayersWithBirthDatesArr();
                RenderModel.RenderPage(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
                $("#birthday-filter-btn").html(`<i class="bi bi-funnel-fill"></i> Unfilter`);
            }
            else {
                RenderModel.RenderPage(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
                $("#birthday-filter-btn").html(`<i class="bi bi-funnel"></i> Filter by birthday`);
            }
        });
        $(".players").on("click", ".add-player", function () {
            const card = $(this).closest(".card");
            const newPlayerToDreamTeam = {
                firstName: card.find(".player-first-name").text(),
                lastName: card.find(".player-last-name").text(),
                pos: card.find(".pos").text(),
                jersey: Number(card.find(".jersey").text()),
                isActive: Boolean(card.attr("data-isActive")),
                birth: card.attr("data-birth") || "",
                teamId: Number(card.attr("data-teamID")),
            };
            self.dataOfplayerArr
                .AddPlayerToDreamTeam(newPlayerToDreamTeam)
                .then(() => {
                RenderModel.emptyDreamTeam();
                RenderModel.renderDreamTeam(self.dataOfplayerArr.dreamTeamArr);
            });
        });
        $(".players").on("click", ".delete-player", function () {
            const card = $(this).closest(".card");
            self.dataOfplayerArr
                .DeletePlayerFromDreamTeam(card.find(".player-first-name").text(), card.find(".player-last-name").text())
                .then(() => {
                RenderModel.emptyDreamTeam();
                RenderModel.renderDreamTeam(self.dataOfplayerArr.dreamTeamArr);
            });
        });
        $(".players").on("click", ".btn-left", () => {
            if (this.startIndex !== 0) {
                this.startIndex--;
                this.endIndex--;
                RenderModel.RenderPage(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
            }
        });
        $(".players").on("click", ".btn-right", () => {
            if (this.endIndex !== this.dataOfplayerArr.playerArr.length - 1) {
                this.startIndex++;
                this.endIndex++;
                RenderModel.RenderPage(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
            }
        });
    }
}
