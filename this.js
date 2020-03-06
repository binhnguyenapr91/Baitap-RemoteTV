const STRING_POWER_ON = "pwOn";
const TV_STATE_ON = true;
const TV_STATE_OFF = false;
const DEFAULT_CHANGE_VALUE = 1;
const DEFAULT_CHANNEL = 1;
const DEFAULT_VOLUME = 1;
const STRING_CHANNEL_UP = "chUp";
const STRING_CHANNEL_DOWN = "chDown";
const STRING_ALERT_IS_TV_OFF = "Turn the TV ON";
const STRING_VOLUME_UP = "vlUp";
const STRING_VOLUME_DOWN = "vlDown";

function Remote(tv) {
    this.turnOnOff = function (powerAction) {
        if (powerAction === STRING_POWER_ON) {
            tv.status = TV_STATE_ON;
        } else tv.status = TV_STATE_OFF;
        tv.showInfo();
    };

    this.switchChannel = function (channelAction) {
        tv.jumpChannel(channelAction);
        tv.showInfo();
    };

    this.switchVolume = function (volumeAction) {
        tv.jumpVolume(volumeAction);
        tv.showInfo();
    }
}
let TV = function () {
    this.channel = DEFAULT_CHANNEL;
    this.volume = DEFAULT_VOLUME;
    this.status = TV_STATE_OFF;


    this.jumpChannel = function (channelAction) {
        if (this.status) {
            if (channelAction === STRING_CHANNEL_UP) {
                this.channel += DEFAULT_CHANGE_VALUE;
            } else if (channelAction === STRING_CHANNEL_DOWN) {
                this.channel -= DEFAULT_CHANGE_VALUE;
            }
        } else alert(STRING_ALERT_IS_TV_OFF);
    };

    this.jumpVolume = function (volumeAction) {
        if (this.status) {
            if (volumeAction === STRING_VOLUME_UP) {
                this.volume += DEFAULT_CHANGE_VALUE;
            } else if (volumeAction === STRING_VOLUME_DOWN) {
                this.volume -= DEFAULT_CHANGE_VALUE;
            }
        } else alert(STRING_ALERT_IS_TV_OFF);
    };

    this.showInfo = function () {
        document.getElementById("status").innerHTML = this.status;
        document.getElementById("channel").innerHTML = this.channel;
        document.getElementById("volume").innerHTML = this.volume;

    }
};

let tv = new TV();
let remote = new Remote(tv);
tv.showInfo();