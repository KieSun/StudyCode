//
//  ViewController.swift
//  AdressTableView
//
//  Created by yck on 2016/11/2.
//  Copyright © 2016年 AdressTableView. All rights reserved.
//

import UIKit

class ViewController: UITableViewController {
    
    let adressArray = ["Bear", "李白", "杜牧", "陶渊明", "诗人", "人", "Black Swan", "Buffalo", "Camel", "Cockatoo", "Dog", "Donkey", "Emu", "Giraffe", "Greater Rhea", "Hippopotamus", "Horse", "Koala", "Lion", "Llama", "Manatus", "Meerkat", "Panda", "Peacock", "Pig", "Platypus", "Polar Bear", "Rhinoceros", "Seagull", "Tasmania Devil", "Whale", "Whale Shark", "Wombat", "711"]
    
    var adressDict = [String: [String]]()
    var sectionTitleArray = [String]()

    override func viewDidLoad() {
        super.viewDidLoad()
        
        creatData()
    }

    private func creatData() {
        
        let queue = DispatchQueue(label:"address")
        
        queue.async { [weak self] in
            
            
            guard let `self` = self else { return }
            
            self.adressArray.forEach {
                
                let firstC = $0.substring(to: $0.index($0.startIndex, offsetBy: 1))
                let key = self.getFirstCapitalFromString(firstC)
                
                if var value = self.adressDict[key] {
                    
                    value.append($0)
                    self.adressDict[key] = value
                }else {
                    self.adressDict[key] = [$0]
                }
            }
            
            self.sectionTitleArray = [String](self.adressDict.keys)
            self.sectionTitleArray.sort(by: { $0 < $1 })
            
            if self.sectionTitleArray.contains("*") {
                self.sectionTitleArray.removeFirst()
                self.sectionTitleArray.insert("*", at: self.sectionTitleArray.endIndex)
            }
            
            DispatchQueue.main.async {
                self.tableView.reloadData()
            }
            
        }
    }
    
    private  func getFirstCapitalFromString(_ aString: String) -> String {

        let mutableString = NSMutableString(string: aString)
        CFStringTransform(mutableString as CFMutableString, nil, kCFStringTransformToLatin, false)
        let pinyinString = mutableString.folding(options: String.CompareOptions.diacriticInsensitive, locale: NSLocale.current)
        let capitalPinYin = polyphoneHandle(nameString: aString, pinyinString: pinyinString).uppercased()
        let firstString = capitalPinYin.substring(to: capitalPinYin.index(capitalPinYin.startIndex, offsetBy:1))
        let regexA = "^[A-Z]$"
        let predA = NSPredicate.init(format: "SELF MATCHES %@", regexA)
        return predA.evaluate(with: firstString) ? firstString : "*"
    }
    
    private func polyphoneHandle(nameString:String, pinyinString:String) -> String {
        if nameString.hasPrefix("曾") {return "zeng"}
        if nameString.hasPrefix("厦") {return "xia"}
        if nameString.hasPrefix("重") {return "chong"}
        if nameString.hasPrefix("翟") {return "zhai"}
        if nameString.hasPrefix("单") {return "shan"}
        if nameString.hasPrefix("缪") {return "miao"}
        
        return pinyinString;
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell")! as UITableViewCell
        
        let key = sectionTitleArray[indexPath.section]
        
        if let value = adressDict[key] {
            cell.textLabel?.text = value[indexPath.row]
        }
        
        return cell
    }
    
    override func numberOfSections(in tableView: UITableView) -> Int {
        return sectionTitleArray.count
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        let key = sectionTitleArray[section]
        
        guard let value = adressDict[key] else {
            return 0
        }
        
        return value.count
    }
    
    override func sectionIndexTitles(for tableView: UITableView) -> [String]? {
        return sectionTitleArray
    }
    
    override func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return sectionTitleArray[section]
    }
}

