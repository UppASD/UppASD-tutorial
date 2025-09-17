import numpy as np
import matplotlib.pyplot as pp
import matplotlib.colors as colors
import matplotlib as mpl
from matplotlib.collections import LineCollection
pp.style.use('default')
pp.rc("figure", facecolor="white")

# Load the normalized phase diagram
mt=np.genfromtxt("thermal.norm.dat")
na=mt.shape
#print(na)

#Plot phase diagram
fig_mt = pp.figure()
ax1 = fig_mt.add_subplot(111)
#ax1.set_title("Adiabatic magnon spectrum")    
ax1.set_xlabel('Temperature (K)')
ax1.set_ylabel('Normalized observable')
#ax1.set_xticks([])
#for x in range(1,na[1]-1):
#      ax1.plot(mt[:,0],mt[:,x])
ax1.plot(mt[:,0],mt[:,1],label='M')
ax1.plot(mt[:,0],mt[:,2],label='U4')
ax1.plot(mt[:,0],mt[:,3],label='Xi')
ax1.plot(mt[:,0],mt[:,4],label='Cv')
ax1.axis('tight')
ax1.legend()
pp.show()
fig_mt.savefig('mt.png', format='png', dpi=200)
