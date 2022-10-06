

for Bext in -1000 -1500 -2000 -2500 -3000
do
 mkdir Field$Bext/
 echo "External field: " $Bext
 cp Base_macrospin/* Field$Bext/
 cd Field$Bext
 sed -i "s/Bext/$Bext/g" inpsd.dat
 echo -e "Performing simulation for bfield $bfield"
 /proj/kthdelin/users/x_zhilu/UppASD_1216_version/UppASD_fp_mipoint/source/sd > out.log 
 echo -e "done"
 cd ..
 
done
exit
