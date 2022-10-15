"use strict";
class ControllerModel {
    constructor() {
        this.dataOfplayerArr = new NBADataModel();
        this.startIndex = 0;
        this.endIndex = 6;
        this.flagBirthday = false;
    }
    AddListenersToHTML() {
        this.addOnClickToGetPlayers();
        this.addOnClickToFilterButton();
        this.addOnClickToAddPlayerButton();
        this.addOnClickToDeletePlayerButton();
        this.addOnClickToLeftRightButtons();
        this.addOnErrorToPicturePlayer();
        this.addOnClickCardToStats();
        this.addRemoveStatsLisener();
    }
    addOnClickToLeftRightButtons() {
        $(".players").on("click", ".btn-left", () => {
            if (this.startIndex !== 0) {
                this.startIndex--;
                this.endIndex--;
                RenderModel.RenderPlayers(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
            }
        });
        $(".players").on("click", ".btn-right", () => {
            if (this.endIndex !== this.dataOfplayerArr.playerArr.length - 1) {
                this.startIndex++;
                this.endIndex++;
                RenderModel.RenderPlayers(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
            }
        });
    }
    addOnClickToGetPlayers() {
        $("#getTeam-btn").on("click", () => {
            this.startIndex = 0;
            this.endIndex = 6;
            if ($(".form-check-input:checked").val() == "on") {
                this.dataOfplayerArr
                    .FetchActivePlayerByTeamAndYear(String($("#team-name").val()), Number($("#year").val()))
                    .then(() => {
                    RenderModel.RenderPlayers(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
                });
            }
            else {
                this.dataOfplayerArr
                    .FetchPlayerByTeamAndYear(String($("#team-name").val()), Number($("#year").val()))
                    .then(() => {
                    RenderModel.RenderPlayers(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
                });
            }
        });
    }
    addOnClickToFilterButton() {
        $("#birthday-filter-btn").on("click", () => {
            this.flagBirthday = !this.flagBirthday;
            this.startIndex = 0;
            this.endIndex = 6;
            if (this.flagBirthday === true) {
                this.dataOfplayerArr.GetPlayersWithBirthDatesArr();
                RenderModel.RenderPlayers(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
                RenderModel.RenderUnfilterButton();
            }
            else {
                this.dataOfplayerArr
                    .FetchActivePlayerByTeamAndYear(String($("#team-name").val()), Number($("#year").val()))
                    .then(() => {
                    RenderModel.RenderPlayers(this.dataOfplayerArr.playerArr.slice(this.startIndex, this.endIndex));
                });
                RenderModel.RenderFilterButton();
            }
        });
    }
    addOnClickToAddPlayerButton() {
        const self = this;
        $(".players").on("click", ".add-player", function (event) {
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
                RenderModel.RenderDreamTeam(self.dataOfplayerArr.dreamTeamArr);
            });
            event.stopPropagation();
        });
    }
    addOnClickToDeletePlayerButton() {
        const self = this;
        $(".players").on("click", ".delete-player", function () {
            const card = $(this).closest(".card");
            self.dataOfplayerArr
                .DeletePlayerFromDreamTeam(card.find(".player-first-name").text(), card.find(".player-last-name").text())
                .then(() => {
                RenderModel.RenderDreamTeam(self.dataOfplayerArr.dreamTeamArr);
            });
        });
    }
    addOnErrorToPicturePlayer() {
        $(".card-img-top").on("error", function (event) {
            $(".card-img-top").attr("src", "https://he.wikipedia.org/wiki/NBA#/media/%D7%A7%D7%95%D7%91%D7%A5:NBALogo.svg");
            $(".card-img-top").attr("onerror", null);
        });
    }
    addOnClickCardToStats() {
        const self = this;
        $(".players").on("click", ".player-card", function () {
            const card = $(this).closest(".card");
            const firstName = card.find(".player-first-name").text();
            const lastName = card.find(".player-last-name").text();
            NBADataModel.GetPlayerStatsByFullName(firstName, lastName).then((playerStats) => {
                console.log(playerStats);
                RenderModel.RenderPlayerStats(playerStats);
            });
        });
    }
    addRemoveStatsLisener() {
        $(".players").on("mouseleave", ".player-card", function () {
            RenderModel.EmptyPlayerStats();
        });
    }
}
