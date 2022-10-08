Building and running UppASD
===========================

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

UppASD on Dardel
---------------

To build UppASD on the HPE Cray EX supercomputer
`Dardel <https://www.pdc.kth.se/hpc-services/computing-systems/about-dardel-1.1053338>`_
with a Gnu toolchain and the Cray compiler wrappers

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

UppASD on Tetralith
-------------------

To build UppASD on the Intel Xeon based supercomputer
`Tetralith <https://www.nsc.liu.se/systems/tetralith/>`_
with an Intel toolchain

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
