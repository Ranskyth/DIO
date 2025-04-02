package main

import (
	"fmt"
)

type teste1 int

var y2 teste1

func Ex05(){

	x := 0

	fmt.Println(x)

	y2 = 43

	x = int(y2)

	fmt.Println(x)
}