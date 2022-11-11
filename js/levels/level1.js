let level1;

function initLevel() {
 level1 = new Level(
        createLevelBabyChickens(),
        createLevelNormalChickens(),
        createLevelClouds(),
        createLevelBackground(),
        createLevelCoins(),
        createLevelBottles(),
        createLevelHearts()
    )
}


function createLevelBabyChickens() {
    return [
            new BabyChicken(100),
            new BabyChicken(120),
            new BabyChicken(130),
            new BabyChicken(140),
            new BabyChicken(150),
            new BabyChicken(160),
            new BabyChicken(170),
            new BabyChicken(180),
            new BabyChicken(200)
    ];
}


function createLevelNormalChickens() {
    return [
            new Chicken(200),
            new Chicken(210),
            new Chicken(220),
            new Chicken(230),
            new Chicken(240),
            new Chicken(250),
            new Chicken(260),
            new Chicken(270),
            new Chicken(280)
    ];
}


function createLevelClouds() {
    return [
            new Clouds(0, 0),
            new Clouds(1, 500),
            new Clouds(0, 1000),
            new Clouds(1, 1500),
            new Clouds(0, 2000),
            new Clouds(1, 2500),
            new Clouds(0, 3000),
            new Clouds(1, 3500),
            new Clouds(0, 4000),
            new Clouds(1, 4500),
            new Clouds(0, 5000),
            new Clouds(1, 5500),
            new Clouds(0, 6000),
            new Clouds(1, 6500),
            new Clouds(0, 7000),
            new Clouds(1, 7500),
            new Clouds(0, 8000),
            new Clouds(1, 8500),
            new Clouds(0, 9000),
            new Clouds(1, 9500),
            new Clouds(0, 10000),
            new Clouds(1, 10500),
            new Clouds(0, 11000),
            new Clouds(1, 11500),
            new Clouds(0, 12000),
            new Clouds(1, 12500),
            new Clouds(0, 13000),
            new Clouds(1, 13500),
            new Clouds(0, 14000)
    ];
}


function createLevelBackground() {
    return [
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
    
            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
    
            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
    
            new BackgroundObject('img/5_background/layers/air.png', 719*2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),
    
            new BackgroundObject('img/5_background/layers/air.png', 719*3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3),
    
            new BackgroundObject('img/5_background/layers/air.png', 719*4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*4),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*4),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*4),
    
            new BackgroundObject('img/5_background/layers/air.png', 719*5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*5),
    
            new BackgroundObject('img/5_background/layers/air.png', 719*6),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*6),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*6),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*6),
    
            new BackgroundObject('img/5_background/layers/air.png', 719*7),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*7),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*7),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*7),
        
            new BackgroundObject('img/5_background/layers/air.png', 719*8),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*8),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*8)
    ];
}


function createLevelCoins() {
    return [
            new Coin(360, 230),
            new Coin(400, 170),
            new Coin(450, 110),
            new Coin(500, 170),
            new Coin(550, 230),
            new Coin(1300, 100),
            new Coin(1700, 50),
            new Coin(1800, 50),
            new Coin(1900, 50),
            new Coin(2000, 50),
            new Coin(2925, 105),
            new Coin(2925, 20),
            new Coin(3025, 20),
            new Coin(3025, 105),
            new Coin(4000, 100),
            new Coin(4000, 150),
            new Coin(4000, 200)
    ];
}


function createLevelBottles() {
    return [
            new Bottle(1, 300, 360),
            new Bottle(2, 500, 360),
            new Bottle(0, 1000, 100),
            new Bottle(0, 1000, 155),
            new Bottle(0, 1000, 215),
            new Bottle(0, 1050, 100),
            new Bottle(0, 1050, 155),
            new Bottle(0, 1050, 215),
            new Bottle(1, 1600, 360),
            new Bottle(2, 2000, 360),
            new Bottle(0, 3500, 100),
            new Bottle(0, 3500, 155),
            new Bottle(0, 3500, 215),
            new Bottle(0, 3550, 100),
            new Bottle(0, 3550, 155),
            new Bottle(0, 3550, 215),
            new Bottle(1, 4000, 360),
            new Bottle(2, 4200, 360),
            new Bottle(0, 5000, 100),
            new Bottle(0, 5000, 155),
            new Bottle(0, 5000, 215),
            new Bottle(0, 5050, 100),
            new Bottle(0, 5050, 155),
            new Bottle(0, 5050, 215),
            new Bottle(1, 4500, 360),
            new Bottle(2, 4600, 360),
            new Bottle(1, 3800, 360),
            new Bottle(2, 800, 360)
    ];
}


function createLevelHearts() {
    return [
            new Heart(3000, 80)
    ];
}