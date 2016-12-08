//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

typealias Distance = Double

struct Position {
    
    var x: Double
    var y: Double
}

struct Ship {
    
    var position: Position
    var firingRange: Distance
    var unsafeRange: Distance
}

extension Position {
    
    func inRange(range: Distance) -> Bool {
        
        return sqrt(x * x + y * y) <= range
    }
    
    var length: Double {
        return sqrt(x * x + y * y)
    }
    
    func minus(p: Position) -> Position {
        
        return Position(x: x - p.x, y: y - p.y)
    }
}

extension Ship {
    
    func canEngageShip(target: Ship, friendly: Ship) -> Bool {
        
        let targetDistance = target.position.minus(p: position).length
        let friendlyDistance = friendly.position.minus(p: position).length
        
        return targetDistance <= firingRange && targetDistance > unsafeRange && friendlyDistance > unsafeRange
    }
}

typealias Region = (Position) -> Bool

func circle(radius: Distance) -> Region {
    
    return { $0.length <= radius }
}

func circle2(radius: Distance, center: Position) -> Region {
    
    return { $0.minus(p: center).length <= radius }
}

func shift(region: @escaping Region, offset: Position) -> Region {
    
    return { region($0.minus(p: offset)) }
}