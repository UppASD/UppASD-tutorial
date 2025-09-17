Basics
======

Building UppASD
---------------


Python environment for the GUI
------------------------------

The recommended way to set up the Python environment that is required
for the UppASD graphical user interface is to use either a Python
virtual environments or a conda environment.

First simulations
-----------------


UppASD on supercomputers
------------------------
UppASD can be run on supercomputers either on nodes allocated for interactive
use, or as batch jobs.

UppASD on Dardel
^^^^^^^^^^^^^^^^

To request 4 cores on the shared partition of Dardel for one hour, use the command
``salloc -n 4 -t 1:00:00 -A <project name> -p shared``, where ``project name``
needs to be replaced with the name of an active compute project.

The code is parallelized over shared memory using OpenMP threading. In this
exercise you will explore how the computational performance of UppASD depends
on problem size and on the number of CPU cores. With weak scaling is meant the
computational effiency when changing the number of cores in proportion with
the problem size. With strong scaling is meant the computational effiency when
changing the number of cores for a fixed problem size.

The systems

* Exercise 1: Weak scaling for ``NX 12``, ``NY 12``, ``NX 12``:math:`c`, where :math:`nc` is the number CPU cores, ranging from 1 to 16.

* Exercise 2: Strong scaling for ``NX 24``, ``NY 24``, ``NZ 24``, when varying the number of CPU cores :math:`nc` in the range from 1 to 16.
