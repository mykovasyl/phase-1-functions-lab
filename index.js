
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation);
}

function distanceFromHqInFeet(distFromHq) {
    return Math.abs(42 - distFromHq) * 264;
}

function distanceTravelledInFeet(hqLocation, pickupLocation) {
    return Math.abs(hqLocation - pickupLocation) * 264;
}

function calculatesFarePrice(start, destination) {
    let rideDistance = Math.abs(start - destination) * 264;
    if ((rideDistance < 400)) {
        return 0;
    } else if ((rideDistance >= 400 && rideDistance <= 2000)) {
        return (rideDistance - 400) * 0.02;
    } else if ((rideDistance > 2000 && rideDistance <= 2500)) {
        return 25;
    } else {
        return `cannot travel that far`;
    }
}