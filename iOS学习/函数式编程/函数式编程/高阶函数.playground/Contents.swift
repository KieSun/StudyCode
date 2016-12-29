//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

struct City {
    
    let name: String
    let population: Int
}

let paris = City(name: "Paris", population: 2241)
let madrid = City(name: "Madrid", population: 3165)
let amsterdam = City(name: "Amsterdam", population: 827)
let berlin = City(name: "Berlin", population: 3562)

let cities = [paris, madrid, amsterdam, berlin]

extension City {
    
    func cityBysCalingPopulation() -> City {
        
        return City(name: name, population: population * 1000)
    }
}

let x = cities.filter { $0.population > 1000}
    .map { $0.cityBysCalingPopulation() }
    .reduce("City: Population") { (resulct, c) in
        
        return resulct + "\n" + "\(c.name): \(c.population)"
}

print(x)