//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

func ??<T>(op: T?, defualt: () -> T) -> T {
    
    if let x = op {
        return x
    }else {
        return defualt()
    }
}