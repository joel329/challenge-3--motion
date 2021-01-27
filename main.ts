while (true) {
    if (input.acceleration(Dimension.X) > 30) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else if (input.acceleration(Dimension.Y) > 30) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.clear()
    }
    
}
