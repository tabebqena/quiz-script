import { onlyUnique } from '../utils';
import { Choice } from './choice';

export class ChoicesList {
    private _choices_list: Choice[];

    constructor(input) {
        this._choices_list = []
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
        } else {
            this._choices_list = []
        }
    }


    add_choice(choice: Choice) {
        if (!choice.is_choice) {
            throw "Invalid choice" + choice
        }

        this._choices_list.push(choice)
        this._choices_list = this.choices_list.filter(onlyUnique)
    }

    remove_choice(index: number) {
        this._choices_list.splice(index, 1);
    }

    get_choice_index(choice: Choice) {
        return this._choices_list.indexOf(choice)
    }

    get_choice(index: number) {
        return this._choices_list[index]
    }


    clear() {
        this._choices_list = []
    }

    get choices_list() {
        return this._choices_list
    }

    from_list(list) {
        for (var x = 0; x < list.length; x++) {
            var choice = Choice.from_dict(list[x])
            this.add_choice(choice)
        }
        return this.choices_list;
    }

    from_json(j) {
        const list = JSON.parse(j)
        return this.from_list(list)
    }

    to_list() {
        const res = []
        const choices = this.choices_list;
        for (var x = 0; x < choices.length; x++) {
            res.push(Choice.to_dict(choices[x]))
        }
        return res;
    }

    to_json() {
        return JSON.stringify(this.to_list())
    }

    is_choice_list() {
        return true
    }

    get length() {
        return this._choices_list.length
    }

    static is_valid(choices_list: ChoicesList) {
        if (!choices_list.is_choice_list()) {
            return { valid: false, error: "Invalid Choices List" }
        }
        const choices: Array<Choice> = choices_list.choices_list
        for (var x = 0; x < choices.length; x++) {
            var m = choices[x]
            if (!m.is_choice) {
                return { valid: false, error: "Invalid Choice" + m }
            }
            let v = Choice.validate_empty(m.id, m.text, m.media_list)
            if (!v.valid) {
                return v
            }
        }
        return { valid: true };
    }
}