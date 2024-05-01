var orderTotal = 45; // Example order total
var isLoyaltyMember = true; // Example loyalty status
var distanceFromRestaurant = 3; // Example distance in miles

if (orderTotal >= 50) {
    console.log("Customer is eligible for free delivery.");
} 

else {

    if (isLoyaltyMember) {
        console.log("Customer is eligible for free delivery.");
    }
   
    else if (distanceFromRestaurant < 5) {
            console.log("Customer is eligible for free delivery.");
        } 
    else {
            console.log("Customer is not eligible for free delivery.");
        }
    
}
