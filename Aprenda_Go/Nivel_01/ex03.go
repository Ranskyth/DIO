package main 

import(
	"fmt"
)

var x1 = 42
var y1 = "Jorn"
var z1 = false

func Ex03(){
	r := fmt.Sprintf("%v\t%v\t%v\t",x1, y1, z1)
	fmt.Println(r)
}