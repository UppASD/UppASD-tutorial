#!/bin/bash
#export DYLD_LIBRARY_PATH="/opt/intel/lib:/opt/intel/compilers_and_libraries_2016.3.170/mac/mkl/lib:/opt/intel/compilers_and_libraries_2016.2.146/mac/compiler/lib:$DYLD_LIBRARY_PATH"
mypath=/Users/bin

simid=`grep 'simid' inpsd.dat  | awk '{print $2}'`

iname=`ls -l sqw.*.out* | tail -1 | awk '{ print $NF }'`
if [[ "$iname" == sqw.*.out.gz ]]; then
    zcat $iname > sqw.dat
else
    cat $iname > sqw.dat
fi

#Set of variables needed to be able to run decode.f90
dim1=`tail -1 sqw.dat | awk '{ print $1 }' `
dim2=`tail -1 sqw.dat | awk '{ print $5 }' `
dim2half=`tail -1 sqw.dat | awk '{ print $5/2 }' `

echo $dim1 $dim2 > tmp1
$mypath/decodeSopt.x < tmp1

#Printing the arrays that will be used to plot the different directions
awk '{ print $3 }' sqw.norm.dat > sqw.arr_x
awk '{ print $4 }' sqw.norm.dat > sqw.arr_y
awk '{ print $5 }' sqw.norm.dat > sqw.arr_z
awk '{ print $6 }' sqw.norm.dat > sqw.arr_t

$mypath/col2arr.awk sqw.arr_x $dim2half | $mypath/flip.awk > sqw.mat_x
$mypath/col2arr.awk sqw.arr_y $dim2half | $mypath/flip.awk > sqw.mat_y
$mypath/col2arr.awk sqw.arr_z $dim2half | $mypath/flip.awk > sqw.mat_z
$mypath/col2arr.awk sqw.arr_t $dim2half | $mypath/flip.awk > sqw.mat_t

#Removing the auxiliary files
rm -f sqw.dat tmp1 sqw.arr_x sqw.arr_y sqw.arr_z sqw.arr_t
