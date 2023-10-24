// Problem 1

function sumOfDistinctElements(set1, set2) {
    // Create a new Set to store distinct elements
    const distinctElements = new Set();

    // Iterate through the elements of set1 and add them to the distinctElements Set
    for (const element of set1) {
        distinctElements.add(element);
    }

    // Iterate through the elements of set2 and add them to the distinctElements Set
    for (const element of set2) {
        distinctElements.add(element);
    }

    // Calculate the sum of distinct elements
    let sum = 0;
    for (const element of distinctElements) {
        sum += element;
    }

    return sum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const output = sumOfDistinctElements(set1, set2);
console.log(output); // Output: 13

// Problem 2

// Function to calculate the dot product of two vectors
function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length.");
    }

    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }

    return result;
}

// Function to check if two vectors are orthogonal
function areVectorsOrthogonal(v1, v2) {
    const product = dotProduct(v1, v2);
    return product === 0;
}

// Algorithm to check orthogonal property for n pairs of vectors
function checkOrthogonalityForPairs(vectorPairs) {
    for (const [v1, v2] of vectorPairs) {
        const isOrthogonal = areVectorsOrthogonal(v1, v2);

        if (isOrthogonal) {
            console.log("The vectors are orthogonal.");
        } else {
            console.log("The vectors are not orthogonal.");
        }
    }
}

// Example usage:
const vectorPairs = [
    [[1, 0], [0, 1]],   // Orthogonal vectors
    [[2, 3], [-3, 2]],  // Orthogonal vectors
    [[1, 2], [3, 4]]    // Non-orthogonal vectors
];

checkOrthogonalityForPairs(vectorPairs);
