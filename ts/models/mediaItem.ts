
export const MEDIA_TYPE = Object.freeze({
    IMAGE: "IMAGE",
    AUDIO: "AUDIO",
    YOUTUBE: "YOUTUBE",
});

export class MediaItem {
    private _type: any;
    private _url: any;
    constructor(type, url) {
        const valid = MediaItem.validateEmpty(type, url)
        if (!valid.valid) {
            throw valid.error
        }
        this._type = type;
        this._url = url;
    }

    set type(type) {
        if (!MEDIA_TYPE.hasOwnProperty(type)) {
            throw "Invalid type"
        }
        this._type = type
    }

    get type() {
        return this._type;
    }

    set url(url) {
        if (typeof (url) !== "string") {
            throw "Invalid url type " + typeof (url)
        }
        this._url = url;
    }

    get url() {
        return this._url
    }

    isMediaItem() {
        return true
    }

    static validateEmpty(type, url) {
        if (typeof (type) !== "string") {
            return {
                valid: false, error: "Invalid type" + typeof (type)
                    + " url: " + url
            }
        }
        return { valid: true }

    }

    validateFull() {
        let valid = MediaItem.validateEmpty(this.type, this.url)
        if (!valid.valid) {
            return valid
        }
        if (!this.type) {
            return { valid: false, error: "Invalid type" }
        }
        if (!this.url) {
            return { valid: false, error: "Invalid url" }
        }

        return { valid: true }
    }

    static isMedia(m) {
        return m instanceof (MediaItem)
    }

    static fromDict(d) {
        return new MediaItem(d["type"], d["url"])
    }

    static fromJson(j) {
        const d = JSON.parse(j)
        return MediaItem.fromDict(d)
    }

    static from(input) {
        try {
            const j = JSON.stringify(input)
            return MediaItem.fromJson(j)
        } catch (e) {
            return MediaItem.fromDict(input)
        }
    }

    static toDict(mediaItem) {
        return { "type": mediaItem.type, "url": mediaItem.url }
    }

    static toJson(json) {
        return JSON.stringify(MediaItem.toDict(json))
    }



}

