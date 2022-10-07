

rm -rf K*
for Kc in  -0.02 -0.2 -0.4
do
 mkdir K$Kc/
 echo "External field: " $Bext
 cp Base/* K$Kc/
 cd K$Kc
 sed -i "s/Kc/$Kc/g" kfile

 echo -e "Performing simulation for anisotropy $Kc"
 /UppASD/source/sd > out.log 
 echo -e "done"
 cd ..
 
done
exit
