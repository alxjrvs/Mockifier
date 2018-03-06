import * as _ from 'lodash';

enum Probability {
    Random = 5,
    High = 8,
    Low = 2
}

const randomBox = (p: Probability) => _.random(1, 10) <= p;
const isCapitalized = (c: string) => c === _.capitalize(c);
const smartLowerCase = (c: string) => {
    const lowerCase = _.lowerCase(c);
    if (lowerCase.length === 0) {
        return c;
    } else {
        return lowerCase;
    }
};

const randomlyCase = (c: string, p: Probability) => {
    if (randomBox(p)) {
        return _.capitalize(c);
    } else {
        return smartLowerCase(c);
    }
};

const probabilityOfCapitalization = (char: string, prevChar: string) => {
    if (_.isUndefined(prevChar)) {
        return Probability.Random;
    } else if (isCapitalized(prevChar)) {
        return Probability.Low;
    } else {
        return Probability.High;
    }
};

const mockCharacter = (c: string, p: Probability) => {
    switch (_.capitalize(c)) {
        case 'L':
            return 'L';
        case 'I':
            return 'i';
        default:
            return randomlyCase(c, p);
    }
};

const mockMap = (character: string, index: number, array: string[]) => {
    const prevCharacter = array[index - 1];
    return mockCharacter(
        character, 
        probabilityOfCapitalization(character, prevCharacter)
    );
};

const mockEngine = (text: string): string => {
    return text.
        split('').
        map(mockMap).
        join('');
};

export default mockEngine;
