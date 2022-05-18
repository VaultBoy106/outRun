class Data {
    constructor() {
        this.arr = [
            "The very first production electric car was built in 1884 by English inventor, Thomas Parker.",
            "Electric cars are so quiet that from July 2019, a new EU rule meant that all new electric and hybrid cars are legally required to emit an artificial noise so that they can be more easily heard.",
            "An interesting new feature of Tesla cars is the recently introduced ‘Dog Mode’. Drivers with pets in the car can use the Overheat Cabin Protection function to keep the car at a cool temperature for pets left inside",
            "All-electric cars have regenerative braking which means that every time you break, some electricity goes back into the battery.",
            "As of May 2019, the number of public charge points outnumber petrol stations in the UK. What about us ?",
            "Electric cars could actually be thought of as battery on wheels. With the right equipment, it is possible to use the electricity in a car battery to supply your own home.",
            "Breathing batheries could give ranges of up to 500 miles.",
            "Electric vehicles are even used on the moon!",
            "The average cost of charging an electric car at home is just £4 for 100 miles of charge",
            "The current prediction is that an electric car battery will last 10-20 years before they need to be replaced",
            "EV sales have increased 119% compared to last year.",
            "If you have access to a DC fast-charger you’ll get a battery from empty to full in approximately six to eight hours."
           
        ]
        this.get_val()
        
    }
    get_val() {
        return Math.floor(Math.random() * this.arr.length) 
    }
}

