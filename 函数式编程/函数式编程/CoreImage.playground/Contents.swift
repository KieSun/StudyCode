//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

typealias Filter = (CIImage) -> CIImage

func blur(radius: Double) -> Filter {
    
    return { image in
        
        let paramterers = [kCIInputRadiusKey: radius, kCIInputImageKey: image] as [String : Any]
        
        guard let filter = CIFilter.init(name: "CIGaussianBlur", withInputParameters: paramterers) else {
            fatalError()
        }
        
        guard let outputImage = filter.outputImage else {
            fatalError()
        }
        
        return outputImage
    }
}

func colorGenerator(color: UIColor) -> Filter {
    
    return { _ in
        
        let color = CIColor.init(color: color)
        
        let paramterers = [kCIInputColorKey: color]
        
        guard let filter = CIFilter.init(name: "CIConstantColorGenerator", withInputParameters: paramterers) else {
            fatalError()
        }
        
        guard let outputImage = filter.outputImage else {
            fatalError()
        }
        
        return outputImage
    }
}

func compositeSourceOver(overlay: CIImage) -> Filter {
    
    return { image in
        
        let paramterers = [kCIInputBackgroundImageKey: image, kCIInputImageKey: overlay]
        
        guard let filter = CIFilter.init(name: "CISourceOverCompositing", withInputParameters: paramterers) else {
            fatalError()
        }
        
        guard let outputImage = filter.outputImage else {
            fatalError()
        }
        
        let cropRect = image.extent
        
        return outputImage.cropping(to: cropRect)
        
    }
}

func colorOverlay(color: UIColor) -> Filter {
    
    return { image in
        
        let overlay = colorGenerator(color: color)(image)
        
        return compositeSourceOver(overlay: overlay)(image)
    }
}

