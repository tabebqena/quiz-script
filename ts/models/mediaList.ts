import { MediaItem } from "./mediaItem";

export class MediaList {
    private _mediaList: MediaItem[];

    constructor(input) {
        this._mediaList = []
        if (input) {
            if (input.constructor === Array) {
                this.fromList(input)
            } else {
                try {
                    JSON.parse(input)
                    this.fromJson(input)
                } catch (err) {
                    throw "Invalid input " + typeof (input)
                }
            }
            //throw "Invalid input " + typeof (input)
        } else {
            this._mediaList = []
        }
    }

    addMediaItem(item) {
        if (!MediaItem.isMedia(item) || !MediaItem.validateEmpty(item.type, item.url)) {
            throw "Invalid item" + item
        }
        this._mediaList.push(item)
    }

    removeMediaItem(index: number) {
        this._mediaList.splice(index, 1);
    }

    getItemIndex(item: MediaItem) {
        return this._mediaList.indexOf(item)
    }

    getMediaItem(index: number) {
        return this._mediaList[index]
    }

    get mediaList() {
        return this._mediaList
    }

    fromList(list) {
        for (var x = 0; x < list.length; x++) {
            var media_item = MediaItem.from(list[x])
            this.addMediaItem(media_item)
        }
        return this.mediaList;
    }

    fromJson(j) {
        const list = JSON.parse(j)
        this.fromList(list)
        return this.mediaList;
    }

    toList() {
        const res = []
        const medias = this.mediaList;
        for (var x = 0; x < medias.length; x++) {
            res.push(MediaItem.toDict(medias[x]))
        }
        return res;
    }

    toJson() {
        return JSON.stringify(this.toList())
    }

    isMediaList() {
        return true
    }

    get length() {
        return this._mediaList.length
    }

    static isValid(mediaList: MediaList) {

        if (!mediaList.isMediaList()) {
            return { valid: false, error: "Invalid Media List. Not media list" }
        }

        const medias: Array<MediaItem> = mediaList.mediaList
        for (var x = 0; x < medias.length; x++) {
            var m = medias[x]
            console.log(m)
            console.log(m.isMediaItem())
            if (!m.isMediaItem()) {
                return { valid: false, error: "Invalid Media Item:" + m }
            }
            let v = MediaItem.validateEmpty(m.type, m.url)
            console.log(v)
            if (!v.valid) {
                return v
            }
        }
        return { valid: true };
    }
}