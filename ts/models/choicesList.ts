import { onlyUnique } from '../utils';
import { Choice } from './choice';

export class ChoicesList {
    private _choicesList: Choice[];

    constructor(input) {
        this._choicesList = []
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
        } else {
            this._choicesList = []
        }
    }


    addChoice(choice: Choice) {
        if (!choice.isChoice) {
            throw "Invalid choice" + choice
        }

        this._choicesList.push(choice)
        this._choicesList = this.choicesList.filter(onlyUnique)
    }

    removeChoice(index: number) {
        this._choicesList.splice(index, 1);
    }

    getChoiceIndex(choice: Choice) {
        return this._choicesList.indexOf(choice)
    }

    getChoice(index: number) {
        return this._choicesList[index]
    }


    clear() {
        this._choicesList = []
    }

    get choicesList() {
        return this._choicesList
    }

    fromList(list) {
        for (var x = 0; x < list.length; x++) {
            var choice = Choice.fromDict(list[x])
            this.addChoice(choice)
        }
        return this.choicesList;
    }

    fromJson(j) {
        const list = JSON.parse(j)
        return this.fromList(list)
    }

    toList() {
        const res = []
        const choices = this.choicesList;
        for (var x = 0; x < choices.length; x++) {
            res.push(Choice.toDict(choices[x]))
        }
        return res;
    }

    toJson() {
        return JSON.stringify(this.toList())
    }

    isChoiceList() {
        return true
    }

    get length() {
        return this._choicesList.length
    }

    static isValid(choicesList: ChoicesList) {
        if (!choicesList.isChoiceList()) {
            return { valid: false, error: "Invalid Choices List" }
        }
        const choices: Array<Choice> = choicesList.choicesList
        for (var x = 0; x < choices.length; x++) {
            var m = choices[x]
            if (!m.isChoice) {
                return { valid: false, error: "Invalid Choice" + m }
            }
            let v = Choice.validateEmpty(m.id, m.text, m.mediaList)
            if (!v.valid) {
                return v
            }
        }
        return { valid: true };
    }
}