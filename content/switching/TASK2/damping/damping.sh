#!bin/bash
for alpha in 0.2 0.4 0.6 0.8 1.0
do
 mkdir Damping$alpha
 echo "Gilbert damping: " $alpha
 cp Base/* Damping$alpha
 cd Damping$alpha
 sed -i "s/DAMPING/$alpha/g" inpsd.dat
 echo -e "Performing simulation for damping $alpha"
 /proj/kthdelin/users/x_zhilu/UppASD_1216_version/UppASD_fp_mipoint/source/sd > out.log 
 echo -e "done"
 cd ..
 
done
exit
