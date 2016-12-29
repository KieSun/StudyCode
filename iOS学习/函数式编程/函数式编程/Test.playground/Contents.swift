//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

func pluslsCommutative(x: Int, y: Int) -> Bool {
    
    return x + y == y + x
}

protocol Arbitrary {
    
    static func arbitrary() -> Self
}

extension Int: Arbitrary {
    
    static func arbitrary() -> Int {
        
        return Int(arc4random())
    }
}

