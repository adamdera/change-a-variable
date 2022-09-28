//  Created by: Adam Derango
//  
//  Date: september 28
//  
//  This sets the hungryness level to 0 on start
let hungryness = 0
//  Created by: Adam Derango
//  
//  Date: september 28
//  
//  This adds 1 to the hungryness each time you press A 
//  and resets the counter to zero each time you press B
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        hungryness = hungryness + 1
        basic.showNumber(hungryness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungryness = 0
        basic.showNumber(hungryness)
    }
    
})
