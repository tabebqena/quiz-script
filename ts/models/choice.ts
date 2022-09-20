import { MediaList } from "./mediaList"
 
interface INumber {
    isInteger: Function
}
declare var Number: INumber;

export class Choice {
    private _id : number;
    private _text: string;
    private _media_list: MediaList;

    constructor(id:number, text:string, media_list: MediaList) {
        let valid = Choice.validate_empty(id, text, media_list)
        if (! valid.valid){
            throw valid.error
        }
        this._id = id;
        this._text = text||"";
        this._media_list = media_list || new MediaList(null);
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
    set media_list(media_list) {
        if (MediaList.is_valid(media_list).valid){
            this._media_list = media_list;
        }                
    }

    get media_list() {
        return this._media_list;
    }

    get is_choice(){
        return true
    }

    static to_dict(choice) {
        return {
            "id": choice.id,
            "text": choice.text,
            "media_list": choice.media_list.to_list()
        }
    }

    static to_json(choice) {
        return JSON.stringify(Choice.to_dict(choice))
    }

    static from_dict(d) {
        return new Choice(d["id"], d["text"], new MediaList(d["media_list"]) )
    }

    static from_json(json) {
        return Choice.from_dict(JSON.parse(json))
    }

    static validate_empty(id, text, media_list) {
        if ( id === null ||  id === undefined || id === NaN || ! Number.isInteger(id)) {
            return {valid: false, error: "ID Error: " + id}
        }
        if (typeof (text) !== "string") {
            return { valid: false, error: "Invalid text type " + typeof (text) }
        }
        
        if ( media_list ){
            let v = MediaList.is_valid(media_list)
            if (! v.valid){
                return {valid: false, error: "Invalid media list: "+ v.error }
            }
        }
        return {valid: true}
    }

    validate_full() {
        let valid = Choice.validate_empty(this.id, this.text, this.media_list)
        if (!valid.valid){
            return valid
        }

        if (!this.text || this.text === "" ) {
            return { valid: false, error: "Invalid text" }
        }

        if (this.media_list ) {
            let v = MediaList.is_valid(this.media_list)
            if (! v.valid){
                return { valid: false, error: "Invalid media list: " + v.error }
            }
        }
        return {valid: true}
    }
}

