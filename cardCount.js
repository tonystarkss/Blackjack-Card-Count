function cc(card) {
    switch(card) {
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
 //Switch statement for the card function that counts the cards based on which case is called

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;


}
//Bet if card count is greater or hold bet if not & return count 


cc(2); cc('J'); cc(10); cc('K'); cc('A');
console.log(cc(4)); 
//Output results on declared cards
