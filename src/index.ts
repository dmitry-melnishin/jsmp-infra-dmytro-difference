import diff from 'lodash.difference';

const difference = (arrayA: any[], arrayB: any[]) => {
    return diff(arrayA, arrayB);
};

export default difference;
