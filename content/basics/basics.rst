UppASD on supercomputers
========================

The source code of UppASD is distributed on https://github.com/UppASD/UppASD
along with documentation and a growing set of examples. To obtain the code,
download and unpack a release

.. code-block:: bash

  wget https://github.com/UppASD/UppASD/archive/refs/tags/v6.0.1.tar.gz
  tar xvzf v6.0.1.tar.gz
  cd UppASD

or clone the git repository

.. code-block:: bash

  git clone https://github.com/UppASD/UppASD.git
  cd UppASD

UppASD can be built and run on desktop and laptop computers, as well as on
supercomputers. General advice on how to build UppASD can be found in the
user manual. In this section is provided instructions on how to build and
run the program on two different supercomputers

UppASD on Dardel
----------------

UppASD is available on the HPE Cray EX supercomputer
`Dardel <https://www.pdc.kth.se/hpc-services/computing-systems/about-dardel-1.1053338>`_
as a centrally installed software
`UppASD  <https://www.pdc.kth.se/software/software/UppASD/index_general.html>`_.

To build UppASD on Dardel with a Gnu toolchain and the Cray compiler wrappers

.. code-block:: bash

  ml PrgEnv-gnu/8.2.0
  make deps
  make gfortran-ftn

Run one of the testsuites, for instance *asd-tests*

.. code-block:: bash

  make asd-tests

To set up a Python environment for the graphical user interface, the first step
is to follow instructions on how to
`load and activate Anaconda on Dardel. <https://www.pdc.kth.se/software/software/python/cpe21.11/3.8.8/index_using.html>`_
A conda environment can then be built with

.. code-block:: bash

  ml PDC/21.11
  ml Anaconda3/2021.05
  source ~/conda.init.sh
  conda create --name ASD_GUI_env python=3.6 vtk=8.1.0 numpy scipy matplotlib yaml pyyaml pandas jsoncpp=1.8.3 tbb=2020.2
  conda activate ASD_GUI_env

UppASD can be run on nodes allocated for interactive use, or as batch jobs.
To request 4 cores on the shared partition of Dardel for one hour, use the command

.. code-block:: bash

  salloc -n 4 -t 1:00:00 -p shared -A <project name>

where ``project name`` needs to be replaced with the name of an active compute project.

At the UppASD Autumn School 20222, reservations have been set up for dedicated nodes.
To request 8 cores on the reserved nodes for one hour, use the command

.. code-block:: bash

  salloc -n 8 -t 1:00:00 -p shared -A edu22.uppasd --reservation=uppasd-2022-10-11

where in the name of the reservation, the date needs to be set to *today*.


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

  #!/bin/bash -l
  # The -l above is required to get the full environment with modules

  # Set the allocation to be charged for this job
  # not required if you have set a default allocation
  #SBATCH -A <project name>

  # The name of the script is myjob
  #SBATCH -J myjob

  # 2 hours wall-clock time will be given to this job
  #SBATCH -t 02:00:00

  # The number of cores requested
  #SBATCH -n 16

  export OMP_NUM_THREADS=16

  echo "Script initiated at `date` on `hostname`"

  # The executable sd needs to be in the PATH
  sd > out.log

  echo "Script finished at `date` on `hostname`"


UppASD on Tetralith
-------------------

UppASD is available on the Intel Xeon based supercomputer
`Tetralith <https://www.nsc.liu.se/systems/tetralith/>`_
as a centrally installed software
`UppASD  <https://www.nsc.liu.se/software/catalogue/tetralith/modules/uppasd.html>`_.

To build UppASD on Tetralith with an Intel toolchain

.. code-block:: bash

  ml buildenv-intel/2018a-eb
  make deps
  make ifort

Run one of the testsuites, for instance *asd-tests*

.. code-block:: bash

  make asd-tests

To set up a Python environment for the graphical user interface

.. code-block:: bash

  ml Anaconda/2020.07-nsc1
  conda create --name ASD_GUI_env python=3.6 vtk=8.1.0 numpy scipy matplotlib yaml pyyaml pandas jsoncpp=1.8.3 tbb=2020.2
  conda activate ASD_GUI_env
  # Set the environment variable
  export MESA_GL_VERSION_OVERRIDE=3.3

Exercises
---------

Exercise 1
^^^^^^^^^^

The code is parallelized over shared memory using OpenMP threading. In this
exercise you will explore how the computational performance of UppASD depends
on problem size and on the number of CPU cores. With weak scaling is meant the
computational effiency when changing the number of cores in proportion with
the problem size. With strong scaling is meant the computational effiency when
changing the number of cores for a fixed problem size.

The systems

* Exercise 1: Weak scaling for ``NX 12``, ``NY 12``, ``NX 12``:math:`c`, where :math:`nc` is the number CPU cores, ranging from 1 to 16.

* Exercise 2: Strong scaling for ``NX 24``, ``NY 24``, ``NZ 24``, when varying the number of CPU cores :math:`nc` in the range from 1 to 16.
