while True:
    if input.acceleration(Dimension.X) > 30:
        light.show_animation(light.rainbowAnimation, 500)
    elif input.acceleration(Dimension.Y) > 30: 
        light.show_animation(light.rainbowAnimation, 500)
    else: 
        light.clear()
