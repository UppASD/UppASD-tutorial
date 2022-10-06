import numpy as np
import matplotlib.pyplot as plt


fig, ax = plt.subplots()


Mz=np.genfromtxt('Field-1000/averages.bccFe100.out')
ax.plot(Mz[:,0],Mz[:,3],label='B=-1000 T')

Mz=np.genfromtxt('Field-1500/averages.bccFe100.out')
ax.plot(Mz[:,0],Mz[:,3],label='B=-1500 T')

Mz=np.genfromtxt('Field-2000/averages.bccFe100.out')
ax.plot(Mz[:,0],Mz[:,3],label='B=-2000 T')

Mz=np.genfromtxt('Field-2500/averages.bccFe100.out')
ax.plot(Mz[:,0],Mz[:,3],label='B=-2500 T')

Mz=np.genfromtxt('Field-3000/averages.bccFe100.out')
ax.plot(Mz[:,0],Mz[:,3],label='B=-3000 T')

plt.ylabel(r'Mz($\mu_{B}$)')
plt.xlabel('Steps')

plt.legend()
plt.savefig('Switching.png')
