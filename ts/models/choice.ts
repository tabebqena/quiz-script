import { MediaList } from "./mediaList";

interface INumber {
    isInteger: Function
}
declare var Number: INumber;

export class Choice {
    private _id: number;
    private _text: string;
    private _mediaList: MediaList;

    constructor(id: number, text: string, mediaList: MediaList) {
        let valid = Choice.validateEmpty(id, text, mediaList)
        if (!valid.valid) {
            throw valid.error
        }
        this._id = id;
        this._text = text || "";
        this._mediaList = mediaList || new MediaList(null);
    }
    // id
    get id() {
        return this._id;
    }
    // no setter for id
    // text
    set text(text) {
        if (typeof (text) !== "string") {
            throw "Invalid text type " + typeof (text)
        }
        this._text = text;
    }
    get text() {
        return this._text;
    }
    // media
    set mediaList(mediaList) {
        if (MediaList.isValid(mediaList).valid) {
            this._mediaList = mediaList;
        }
    }

    get mediaList() {
        return this._mediaList;
    }

    get isChoice() {
        return true
    }

    static toDict(choice) {
        return {
            "id": choice.id,
            "text": choice.text,
            "mediaList": choice.mediaList.toList()
        }
    }

    static toJson(choice) {
        return JSON.stringify(Choice.toDict(choice))
    }

    static fromDict(d) {
        return new Choice(d["id"], d["text"], new MediaList(d["mediaList"]))
    }

    static fromJson(json) {
        return Choice.fromDict(JSON.parse(json))
    }

    static validateEmpty(id, text, mediaList) {
        if (id === null || id === undefined || id === NaN || !Number.isInteger(id)) {
            return { valid: false, error: "ID Error: " + id }
        }
        if (typeof (text) !== "string") {
            return { valid: false, error: "Invalid text type " + typeof (text) }
        }

        if (mediaList) {
            let v = MediaList.isValid(mediaList)
            if (!v.valid) {
                return { valid: false, error: "Invalid media list: " + v.error }
            }
        }
        return { valid: true }
    }

    validateFull() {
        let valid = Choice.validateEmpty(this.id, this.text, this.mediaList)
        if (!valid.valid) {
            return valid
        }

        if (!this.text || this.text === "") {
            return { valid: false, error: "Invalid text" }
        }

        if (this.mediaList) {
            let v = MediaList.isValid(this.mediaList)
            if (!v.valid) {
                return { valid: false, error: "Invalid media list: " + v.error }
            }
        }
        return { valid: true }
    }
}

