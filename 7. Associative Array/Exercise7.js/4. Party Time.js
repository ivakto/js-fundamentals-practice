function solve(input) {

    let partyIndex = input.indexOf('PARTY');
    let invitedGuests = input.slice(0, partyIndex);
    let arrivedGuests = input.slice(partyIndex + 1);

    let vip = [];
    let regular = [];

    function isVip(str) {
        return str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57;
    }

    for (let guest of invitedGuests) {
        if (isVip(guest)) {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    for (let guest of arrivedGuests) {
        if (vip.includes(guest)) {
            vip.splice(vip.indexOf(guest), 1); // Премахваме го от списъка, защото вече е присъствал
        } 
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }

    let totalGuests = vip.length + regular.length;
    console.log(totalGuests);

    vip.forEach(guest => console.log(guest));
    regular.forEach(guest => console.log(guest));

}