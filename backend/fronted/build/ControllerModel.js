"use strict";
class ControllerModel {
    constructor() {
        this.dataOfplayerArr = new NBADataModel();
        this.startIndex = 0;
        this.endIndex = 6;
    }
    addOnClicksToButtons() {
        $("#getTeam-btn").on("click", () => {
            this.startIndex = 0;
            this.endIndex = 6;
            this.dataOfplayerArr
                .FetchPlayerByTeamAndYear(
                    String($("#team-name").val()),
                    Number($("#year").val())
                )
                .then(() => {
                    RenderModel.RenderPage(
                        this.dataOfplayerArr.playerArr.slice(
                            this.startIndex,
                            this.endIndex
                        )
                    );
                });
        });
        $(".players").on("click", ".btn-left", () => {
            if (this.startIndex !== 0) {
                this.startIndex--;
                this.endIndex--;
                RenderModel.RenderPage(
                    this.dataOfplayerArr.playerArr.slice(
                        this.startIndex,
                        this.endIndex
                    )
                );
            }
        });
        $(".players").on("click", ".btn-right", () => {
            if (this.endIndex !== this.dataOfplayerArr.playerArr.length - 1) {
                this.startIndex++;
                this.endIndex++;
                RenderModel.RenderPage(
                    this.dataOfplayerArr.playerArr.slice(
                        this.startIndex,
                        this.endIndex
                    )
                );
            }
        });
    }
}
