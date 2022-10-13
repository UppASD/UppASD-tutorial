import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl
plt.style.use('default')
plt.rc("figure", facecolor="white")

mtraj1=np.genfromtxt("trajectory.scnobase.001.1.out")
mtraj2=np.genfromtxt("trajectory.scnobase.002.1.out")
utraj1=np.genfromtxt("disptraj.scnobase.1.1.out")
utraj2=np.genfromtxt("disptraj.scnobase.1.1.out")
lattenergy=np.genfromtxt("lattenergy.scnobase.out")
t0=0
t1=2001

# Plot the spin trajectories
fig_mtraj = plt.figure()
ax1 = fig_mtraj.add_subplot(111)
ax1.plot(mtraj1[t0:t1,0],mtraj1[t0:t1,2], c='r', linestyle='--',linewidth=2.0)
ax1.plot(mtraj1[t0:t1,0],mtraj1[t0:t1,3], c='g', linestyle='--',linewidth=2.0)
ax1.plot(mtraj1[t0:t1,0],mtraj1[t0:t1,4], c='b', linestyle='--',linewidth=2.0)
ax1.axis('tight')
#plt.xlim([-12,12])
#plt.ylim([0,80])
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.legend(['mx', 'my', 'mz'], fontsize=16)
plt.show()
fig_mtraj.savefig('figmtraj1.png', format='png', dpi=100)

# Plot the displacement trajectories
fig_utraj = plt.figure()
ax1 = fig_utraj.add_subplot(111)
ax1.plot(utraj1[t0:t1,0],utraj1[t0:t1,2], c='r', linestyle='--',linewidth=2.0)
ax1.plot(utraj1[t0:t1,0],utraj1[t0:t1,3], c='g', linestyle='--',linewidth=2.0)
ax1.plot(utraj1[t0:t1,0],utraj1[t0:t1,4], c='b', linestyle='--',linewidth=2.0)
ax1.axis('tight')
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.legend(['ux', 'uy', 'uz'], fontsize=16)
plt.show()
fig_mtraj.savefig('figmtraj1.png', format='png', dpi=100)

# Plot the energies of the SLD Hamiltonian
fig_etraj = plt.figure()
ax1 = fig_etraj.add_subplot(111)
# Iter.     ld_potenrg      sd_potenrg      sld_potenrg     totpot_enrg     kin_enrg        tot_enrg       ionic temp   
ax1.plot(lattenergy[t0:t1,0],lattenergy[t0:t1,1], c='r', linestyle='--',linewidth=2.0)
ax1.plot(lattenergy[t0:t1,0],lattenergy[t0:t1,2], c='g', linestyle='--',linewidth=2.0)
ax1.plot(lattenergy[t0:t1,0],lattenergy[t0:t1,3], c='b', linestyle='--',linewidth=2.0)
ax1.plot(lattenergy[t0:t1,0],lattenergy[t0:t1,5], c='m', linestyle='--',linewidth=2.0)
ax1.plot(lattenergy[t0:t1,0],lattenergy[t0:t1,6], c='k', linestyle='--',linewidth=2.0)
ax1.axis('tight')
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.legend(['LL', 'SS', 'SSL', 'KIN', 'TOT'], fontsize=16)
plt.show()
fig_etraj.savefig('figetraj.png', format='png', dpi=100)
