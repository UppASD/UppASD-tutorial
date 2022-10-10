Switching
=========

Introduction
---------------
The time-integrated amount of data and stored information is doubled roughly every 18 months and, since the majority of the world’s information is stored in magnetic media, the possibility writing and retrieving information in a magnetic material at ever greater
speed and with lower energy consumption has obvious benefits for our society. Hence, the simple switching of a magnetic unit, a bit, is a crucial process which defines how efficiently information can be stored and retrieved from a magnetic memory. In the following exercises, you will use the code UppASD to perform magnetic switching simulation with several setups. There are 4 tasks in total, please find the inputs for the 4 tasks in the folders TASK1-4.


TASK1
-----------------
* The magnetization direction of sample can be manipulated by applying an external magnetic field with the desired orientation. In this exercise you will apply a magnetic field to switch the magnetization direction of macrospin and bcc Fe from **+z** to **-z** direction. 

All the input files are in the Folder ``TASK1``, use the flag ``hfield`` in ``inpsd.dat`` to control the strength as well as the direction of magnetic field.
Here you will switch the magnetization direction of 
a macrospin and bcc Fe  from **+z** to **-z** direction, compare the switching 
time with external field ``-1000 ,-1500 ,-2000, -2500, -3000 Tesla``.
You can directly use the script ``switching.sh`` to complete this simulation. Finally, use the plotting script ``plot.gnu`` or ``plot.py`` to plot the 
average magnetization of **z** component as a function of time
for each magnetic field and compare them. Keep in mind that the external field in this simulation
is incrediblely huge, here we use huge magnetic field to accelerate our simulation. 

After that, you can try different Jij in ``jfile`` of bccFe and compare 
whether different set of Jij affects the switching process? Read the maunal and find out where you need to modify in the ``jfile``.

Do you think the switching process of bccFe behaves like a macrospin? Try to explain it 
from the output ``moment.bccFe100.out``.

TASK2
------------------------
* Damping enters the LLG equation as a phenomenological term, which denotes the energy and angular momentum dissipation from the magnetic system to the environment. The magnetic switching is heavily dependent on the damping. 
In this exercise you will compare the switching time of a macrospin with different damping. 

Use the flag ``damping`` in ``inpsd.dat`` to control the damping parameter in LLG equation. Here you still switch the magnetization direction of 
the macrospin from **+z** to **-z** direction, compare the switching 
time with damping ``0.2 ,0.4, 0.6, 0.8, 1.0``. Finally, plot the 
average magnetization of **z** component as a function of time
for system with each damping and see how different damping affects the switching process(Here you can try to modify the python plot script in **TASK1**). 

Keep in mind that the damping value in real materials is 
usually in the order of **1e^⁻3** or **1e^⁻4**, here we use huge 
damping to accelerate our simulation.

* To switch a magnetic system, one needs to overcome the energy barrier, which is determined by system’s magnetic anisotropy and the volume of the system. In actual device, the energy barrier can stablize system's magnetic order. However, huge energy barrier will induce higher power consumption to manipulate the magnetism in device. In this assignment, you will explore the magnetic switching process of macrospin with different magnetic anisotropy. 

Use the flag ``anisotropy`` in ``inpsd.dat`` combined with an external
file named ``kfile`` storing the magnetic anisotropy
parameter of system to manipulate the magnetic anisotropy parameter.
Here still switch the magnetization direction of 
macrospin from **+z** to **-z** direction, compare the switching 
time with anisotropy ``K1=-0.02 ,-0.2, -0.4``. Read the maunal and find out where you need to modify in the ``kfile``.
Plot the  average magnetization of **z** component as a function of time
for system with each magnetic anisotropy and see the effect of anisotropy on switching.



TASK3
------------------------
In this exercise, you will simulate the precessional switching which has been introduced in the talk. 

Here you will use the flag ``do_bpulse`` in ``inpsd.dat`` to control the type of field pulse(The pulse type like square pulse, square pulse with exponential head and tail,
Gaussian pulse,exponentially decaying pulse have been implemented in UppASD). Here you will use the Gaussian pulse in this exercise, so set ``do_bpulse 2``. 
Then modify the parameter of pulse center and width of pulse for Gaussian in the file named ``bpulsefile``.
Plot the average magnetization of **z** component as a function of time and compare the switching process of different pulse.



TASK4 
------------------------
* Magnetic memory devices have been studied extensively in the past years. The IBM racetrack memory being one of the prime examples of this. This device relies on the movement of a magnetic texture connecting two magnetic domains with different orientation. This texture is known as a domain wall. To move this wall a spin polarized current can be applied to the system exerting a torque over the texture forcing it to move. In this exercise, you will simulate the precessional switching. 

In this task, use the flag ``Initmag 4`` and ``restartfile ./restart.DOMAIN.DW`` to initialize spin configuration of 
the system. Then turn on the STT flag by ``stt A`` and define the polarized direction of current by ``jvec jx jy jz``. Visualize the domain wall motion dynamics of the
system by UppASD GUI, for that you need to set ``do tottraj Y`` to get the trajectory of each spin at each sampling step. You can play with the flag ``jvec`` to manipulate the direction of domain motion.





