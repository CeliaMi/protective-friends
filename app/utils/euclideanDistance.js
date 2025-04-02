const birds = [
    { name: "Perdiz", profile: [0,0,0,0,0] },
    { name: "Abubilla", profile: [0,0,0,0,0] },
    { name: "Pito real", profile: [0,0,0,0,0] },
    { name: "verdecillo", profile: [0,0,0,0,0] },
    { name: "Milano real", profile: [0,0,0,0,0] },
    { name: "Cigúeña negra", profile: [0,0,0,0,0] },
];

// to calculate Euclidean distance
function calculateDistance(userProfile, birdProfile) {
    let sum = 0;
    for (let i = 0; i < userProfile.length; i++) {
        sum += Math.pow(userProfile[i] - birdProfile[i], 2); // (x - y)^2
    }
    return Math.sqrt(sum);
}

// to find the most similar bird
function findClosestBird(userResponses) {
    let closestBird = null;
    let minDistance = Infinity;

    for (const bird of birds) {
        const distance = calculateDistance(userResponses, bird.profile);
        if (distance < minDistance) {
            minDistance = distance;
            closestBird = bird;
        }
    }

    return closestBird;
}

// const userResponses = [1, 2, 2, 2, 1, 2, 1, 2];
// const result = findClosestBird(userResponses);
//console.log(`Your bird is: ${result.name}`);