import { MediaItem } from "./mediaItem";

export class MediaList {
    private _media_list: MediaItem[];

    constructor(input) {
        this._media_list = []
        if (input) {
            if (input.constructor === Array) {
                this.from_list(input)
            } else {
                try {
                    JSON.parse(input)
                    this.from_json(input)
                } catch (err) {
                    throw "Invalid input " + typeof (input)
                }
            }
            //throw "Invalid input " + typeof (input)
        } else {
            this._media_list = []
        }
    }

    add_media_item(item) {
        if (!MediaItem.isMedia(item) || !MediaItem.validate_empty(item.type, item.url)) {
            throw "Invalid item" + item
        }
        this._media_list.push(item)
    }

    remove_media_item(index: number) {
        this._media_list.splice(index, 1);
    }

    get_item_index(item: MediaItem) {
        return this._media_list.indexOf(item)
    }

    get_media_item(index: number) {
        return this._media_list[index]
    }

    get media_list() {
        return this._media_list
    }

    from_list(list) {
        for (var x = 0; x < list.length; x++) {
            var media_item = MediaItem.from(list[x])
            this.add_media_item(media_item)
        }
        return this.media_list;
    }

    from_json(j) {
        const list = JSON.parse(j)
        this.from_list(list)
        return this.media_list;
    }

    to_list() {
        const res = []
        const medias = this.media_list;
        for (var x = 0; x < medias.length; x++) {
            res.push(MediaItem.to_dict(medias[x]))
        }
        return res;
    }

    to_json() {
        return JSON.stringify(this.to_list())
    }

    is_media_list() {
        return true
    }

    get length() {
        return this._media_list.length
    }

    static is_valid(media_list: MediaList) {

        if (!media_list.is_media_list()) {
            return { valid: false, error: "Invalid Media List. Not media list" }
        }

        const medias: Array<MediaItem> = media_list.media_list
        for (var x = 0; x < medias.length; x++) {
            var m = medias[x]
            console.log(m)
            console.log(m.is_media_item())
            if (!m.is_media_item()) {
                return { valid: false, error: "Invalid Media Item:" + m }
            }
            let v = MediaItem.validate_empty(m.type, m.url)
            console.log(v)
            if (!v.valid) {
                return v
            }
        }
        return { valid: true };
    }
}