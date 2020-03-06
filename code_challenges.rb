# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.





fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def oddSort arr
    #create an empty array to store odd numbers
    finalArr = []
    #loop to shovel odd numbers to the array
    arr.map do |value|
        if value.class == Integer && value.abs()%2 == 1
            finalArr << value
        end
    end
    #sort the array in ascending order
    return finalArr.sort
end
p oddSort fullArr1
p oddSort fullArr2

# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
#create a bike class
class Bike
    #initialize with model wheels and frame size
    def initialize model, frame_size
        @model = model
        @frame_size = frame_size
        @wheels = 2
    end
    #create a getter method to display informations
    def get_info
        "The #{@model} bike has #{@wheels} wheels and a #{@frame_size}cm frame."
    end
end

my_bike = Bike.new "Trek", 168
p my_bike.get_info




# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

#add a method to ring bell
class Bike
    def ring_bell
        'Beep beep!'
    end
end

p my_bike.ring_bell

# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

#add a method to set speed default at 0
class Bike
    
    def speed
        @speed = 0
    end
end
p my_bike.speed

# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

class Bike
    #create method to pedel faster, increase the speed
    def pedal_faster x
        @speed += x
    end
    #create method to brake, decrease the speed
    def brake y
        #make sure no negative speed
        if @speed < y
            @speed = 0
        else
            @speed -= y
        end
    end
end
p my_bike.pedal_faster 10
p my_bike.brake 15



# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
