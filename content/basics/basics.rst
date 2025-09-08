Introduction
============

Code distribution
-----------------

The source code of UppASD is distributed on https://github.com/UppASD/UppASD
along with documentation and a growing set of examples. To obtain the code,
download and unpack a release

.. code-block:: bash

  wget https://github.com/UppASD/UppASD/archive/refs/tags/v6.0.2.tar.gz
  tar xvzf v6.0.2.tar.gz
  cd UppASD

or clone the git repository

.. code-block:: bash

  git clone https://github.com/UppASD/UppASD.git
  cd UppASD

UppASD on supercomputers
------------------------

UppASD can be built and run on desktop and laptop computers, as well as on
supercomputers. General advice on how to build UppASD can be found in the
user manual. In this section is provided instructions on how to build and
run the program on two different supercomputers, and with two different
compiler toolchains.

UppASD on Dardel
^^^^^^^^^^^^^^^^

UppASD is available on the HPE Cray EX supercomputer
`Dardel <https://www.pdc.kth.se/hpc-services/computing-systems/about-dardel-1.1053338>`_
as a centrally installed software
`UppASD  <https://support.pdc.kth.se/doc/applications/uppasd/>`_.

To build UppASD on Dardel with a Gnu toolchain and the Cray compiler wrappers

.. code-block:: bash

  ml PrgEnv-gnu/8.6.0
  ml cmake/4.0.1
  mkdir buildGnu
  cd buildGnu
  cmake ..
  make -j 8

Run one of the testsuites, for instance *test*

.. code-block:: bash

  make test

To set up a Python environment for the graphical user interface, the preferred route is
to use Python venv or virtualenv and install with pip.

.. code-block:: bash

  ml cray-python/3.11.7
  python -m venv asd_gui_env
  . asd_gui_env/bin/activate
  pip install numpy matplotlib pyyaml pandas pyqt6==6.4.2 pyqt6-qt6==6.4.2 vtk
  cd ASD_GUI
  pip install .

UppASD can be run on nodes allocated for interactive use, or as batch jobs.
To request 4 cores on the shared partition of Dardel for one hour, use the command

.. code-block:: bash

  salloc -n 4 -t 1:00:00 -p shared -A <project name>

where ``project name`` needs to be replaced with the name of an active compute project.

A typical output will look like

.. code-block:: bash

  salloc: Granted job allocation 591571
  salloc: Waiting for resource configuration
  salloc: Nodes nid001015 are ready for job

Node nid001015 is now yours for the next hour. You can login to the reserved
node via the login node

.. code-block:: bash

  ssh -X nid001015

To run UppASD simulation as a batch job on 16 cores, and walltime 2 hours,
you can use the template jobscript

.. code-block:: bash

  #!/bin/bash
  #SBATCH -A <project name>     # Set the allocation to be charged for this job
  #SBATCH -J myjob              # The name of the script is myjob
  #SBATCH -t 02:00:00           # 2 hours wall-clock time
  #SBATCH -p shared             # The partition
  #SBATCH -N 1                  # Number of nodes
  #SBATCH -n 1                  # Number of tasks
  #SBATCH -c 16                 # Number of cpus per task

  export OMP_NUM_THREADS=16

  echo "Script initiated at `date` on `hostname`"

  # The executable sd needs to be in the PATH
  sd > out.log

  echo "Script finished at `date` on `hostname`"

UppASD on Tetralith
^^^^^^^^^^^^^^^^^^^

UppASD is available on the Intel Xeon based supercomputer
`Tetralith <https://www.nsc.liu.se/systems/tetralith/>`_
as a centrally installed software
`UppASD  <https://www.nsc.liu.se/software/catalogue/tetralith/modules/uppasd.html>`_.

To build UppASD on Tetralith with an Intel toolchain

.. code-block:: bash

  ml buildenv-intel/2023a-eb
  mkdir buildGnu
  cd buildGnu
  cmake ..
  make -j 8

Run one of the testsuites, for instance *test*

.. code-block:: bash

  make test

To set up a Python environment for the graphical user interface

.. code-block:: bash

  ml Python/3.11.5-env-hpc1-gcc-2023b-eb
  python -m venv asd_gui_env
  . asd_gui_env/bin/activate
  pip install asd_gui

UppASD can be run on nodes allocated for interactive use, or as batch jobs.
To request 1 node on Tetralith for 1 hour, use the command

.. code-block:: bash

  interactive -N 1 --exclusive -t 01:00:00 -A <project name>

where ``project name`` needs to be replaced with the name of an active compute project.

To run UppASD simulation as a batch job on 32 cores, and walltime 1 hour,
you can use the template jobscript

.. code-block:: bash

  #!/bin/sh
  #SBATCH -J myjob
  #SBATCH -t 00-01:00:00
  #SBATCH -N 1
  #SBATCH --exclusive
  #SBATCH -A <project name>

  export OMP_NUM_THREADS=32

  echo "Script initiated at `date` on `hostname`"

  # The executable sd needs to be in the PATH
  sd > out.log

  echo "Script finished at `date` on `hostname`"

Exercises
---------

Exercise 1: Build code, first simulations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this first exercise you will build UppASD, run a first simulation, and visually inspect the spin dynamics with the GUI.

* Build the UppASD executable from source on either a personal computer or on a supercomputer.

* Set up a Python environment for the GUI using either virtual environments or conda.

* Run a simulation for the two-dimensional system in ``examples/SimpleSystems/fcc001``.

.. code-block:: bash

  # Work on own computer or in interactive session on a supercomputer

  # Go to the fcc directory
  cd examples/SimpleSystems/fcc001

  # Set number of OpenMP threads.
  export OMP_NUM_THREADS=8   # value depending on hardware and on use case

  # Launch the calculation with the sd executable. From the fcc001 directory
  # the relative path is
  ../../../bin/sd

* Inspect the spin configuration for ``fcc001`` with the GUI. Work with either the *restart.MLfcc001.out* file or the *moments.MLfcc001.out* file.

.. code-block:: bash

  # Start the GUI by typing
  asd_gui

Exercise 2: Phase diagram for bcc Fe
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Atomistic spin dynamics simulations with Langevin dynamics can be used to investigate
the thermal properties of materials. In this exercise you will investigate how the
magnetic order parameter, the heat capacity, the susceptibility depends on temperature.
Input files and scripts for bcc Fe can be found in ``examples/PhaseDiagrams/bccFe-Tsweep``.

* Run the sweep over temperature with the ``runme.sh`` script. What kind of simulations is run?

* Examine the results by using the printM.sh and the plot.gnu scripts. The latter is a script for Gnuplot.

* Change the inpsd.dat so that you can the temperature sweep as an ASD simulation, instead of an MC simulation. Compare the results with each other, and with Fig. 2 of [Skubic2008]_.
* Run additional simulations for different cell sizes. Use the Binder cumulant crossing approach to determine the critical temperature.

Exercise 3: Weak and strong scaling
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The UppASD code is parallelized over shared memory using OpenMP threading. In this
exercise you will explore how the computational performance of UppASD depends
on problem size and on the number of CPU cores. With weak scaling is meant the
computational effiency when changing the number of cores in proportion with
the problem size. With strong scaling is meant the computational effiency when
changing the number of cores for a fixed problem size.

In the exercise you will investigate strong and weak scaling for a simulation of
bulk in FeCo in ordered B2 structure. Input files for the system can found in
``examples/Mappings/FeCo/B2``.

* Investigate the strong scaling for ``NX 24``, ``NY 24``, ``NZ 24``, when varying the number of CPU cores :math:`nc` in the range from 1 to 32.

* Investigate the weak scaling for ``NX 24``, ``NY 24``, ``NX 12``:math:`c`, where :math:`nc` is the number CPU cores, ranging from 1 to 32.

Exercise 4: Important control parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The key to performing relevant ASD simulation is to ensure that the eqations of motion are
integrated properly, and that the simulation does indeed describe the system of choice properly.
For the equations of motion, the choice of solver and the simulation time step are the controlling parameters.

In this exercise you will investigate the effect that the choice of the simulation time step has on the resulting measurables.

First consider a single spin in an external field. Inputs that can be used for this system is found in ``examples/SimpleSystems/SingleSpin/BASE``.

Note that here you need to edit the contents of the ``inpsd.dat`` file so copy the inputs to a directory outside of the example folder structure before
performing any edits. 

Solvers that can be considered are the semi-implicit midpoint solver (``sde_algh 1``), the cartesian Heun solver (``sde_algh 4``) and the Depondt solver (``sde_algh 5``) 

* Investigate the conservative properties for a single spin in an effective field and how it depends on solver, field strength and simulation time step.

* Modify the system so you have two spins coupled with an exchange interaction J.  Do the same investigation as for the single spin but with varying exchange interaction J instead of external field.
