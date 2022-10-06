Switching
=========

Introduction
---------------
The time-integrated amount of data and stored information is doubled roughly every
18 months and, since the majority of the world’s information is stored in magnetic media,
the possibility writing and retrieving information in a magnetic material at ever greater
speed and with lower energy consumption has obvious benefits for our society. Hence,
the simple switching of a magnetic unit, a bit, is a crucial process which defines how efficiently information can be stored and retrieved from a magnetic memory. In the following exercises, you will use the code UppASD to perform magnetic switching simulation with several setups. Please find more simulation details in ``task.txt`` in each task folder.


TASK1
-----------------
The magnetization direction of sample can be manipulated by applying an external magnetic field with the desired orientation. In this exercise you will apply a magnetic field to switch the magnetization direction of macrospin and bcc Fe from **+z** to **-z** direction. Set the flag ``hfield`` to turn on the magnetic field. Plot the average magnetization of **z** component as a function of time, compare the switching time of the magnetic field with different strength. Find out whether the switching process of bccFe behaves like a macrospin?

TASK2
------------------------
* Damping enters the LLG equation as a phenomenological term, which denotes the energy and angular momentum dissipation from the magnetic system to the environment. The magnetic switching is heavily dependent on the damping. In this exercise you can modify the damping of system by the flag ``damping``, fix the magnetic field and compare the switching time of macrospin with different damping. 

* To switch a magnetic system, one needs to overcome the energy barrier, which is determined by system’s magnetic anisotropy and the volume of the system. In actual device, the energy barrier can stablize system's magnetic order. However, huge energy barrier will induce higher power consumption to manipulate the magnetism in device. In this assignment, you will explore the magnetic switching process with different magnetic anisotropy. Use the flag ``anisotropy`` combined with an external file storing the magnetic anisotropy parameter of system to manipulate the magnetic anisotropy, compare how different magnetic anisotropy affects the switching time.

* Magnetic islands



TASK3
------------------------
In this exercise, you will perform the simulation on precessional switching. Here you will use the flag ``do_bpulse`` to control the type of field pulse,   Set ``do_bpulse 2`` since we use the Gaussian pulse in this exercise. Then modify the parameter of pulse center and width of pulse for Gaussian in the file named ``bpulsefile``. Plot the average magnetization of **z** component as a function of time and compare the switching process of different pulse.


TASK4 
------------------------
In this case, we do not want to reverse the magnetization of the whole system but instead only change the magnetic configuration of selected domains. A more efficient way to move domain walls in a magnetic system is to drive an electrical current through the system. When the spin polarized current passes through a domain wall, where the magnetization direction changes, the spins of the charge carriers will align with the changed magnetization and, as a result, there will be a transfer of angular momentum between the passing current and the localized moments in the domain wall. 

In this exercise, use the provided restart file to study the motion of a domain wall (set  ``Initmag 4`` and ``restartfile ./restart.DOMAIN.DW)`` apply a spin polarized current to the sample(``stt A`` and  ``jvec jx jy jz``). Visualize the domain wall motion dynamics of the system by UppASD GUI, for that you need to set ``do_tottraj Y`` to get the spin configuration of each sampling step.  



