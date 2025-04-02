package main

import(
	"fmt"
)

type teste int

var x2 teste

func Ex04(){
	fmt.Println()
	fmt.Printf("%T %v", x2, x2)
	x2 = 42
	fmt.Println()
	fmt.Printf("%T %v", x2,x2)
	fmt.Println()
}