#! /usr/bin/gnuplot

set terminal pngcairo enhanced size 2560,1600
set output 'Switching.png'
unset grid
set style line 1 lt -1 lc rgb "#7fc97f" lw 3 pt 1 ps 2 
set style line 2 lt  0 lc rgb "#beaed4" lw 3 pt 4 ps 2  
set style line 3 lt  1 lc rgb "#fdc086" lw 3 pt 6 ps 2  
set style line 4 lt  2 lc rgb "#386cb0" lw 3 pt 8 ps 2 
set style line 5 lt  3 lc rgb "#f0027f" lw 3 pt 10 ps 2 
set style line 6 lt  4 lc rgb "#bf5b17" lw 3 pt 12 ps 2 
set style line 7 lt  5 lc rgb "#666666" lw 3 pt 27 ps 2  
set tics font ",30"

set key font ",10"
set key spacing 5

set size 0.9,0.9
set origin 0.05, 0.05
set border 15 lw 5
set xlabel "Time [fs]" font ", 60" offset 0,-3,0
unset title
set yrange [-3.00:3.00]
set ylabel "M_z" font ",60" offset -6,0,0
set key center right font ",30"
plot "./Field-1000/averages.bccFe100.out" u ($1*1e-16/1e-15):4 w lp ls 1 ti "B=-1000 T", "./Field-1500/averages.bccFe100.out" u ($1*1e-16/1e-15):4 w lp ls 2 ti "B=-1500 T","./Field-2000/averages.bccFe100.out" u ($1*1e-16/1e-15):4 w lp ls 3 ti "B=-2000 T","./Field-2500/averages.bccFe100.out" u ($1*1e-16/1e-15):4 w lp ls 4 ti "B=-2500 T","./Field-3000/averages.bccFe100.out" u ($1*1e-16/1e-15):4 w lp ls 5 ti "B=-3000 T",
