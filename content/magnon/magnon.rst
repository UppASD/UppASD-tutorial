.. contents:: Table of Contents
Tutorial 1
==========
Fe in bcc and fcc crystal structures
------------------------------------
Collinear magnon spectra and influence of uniaxial anisotropy
^^^^

This example shows how to calculate the spin wave spectrum of the standard examples Fe bcc and Fe fcc and to understand the influence of the number of atoms per unit cell on the spectra together with the influence of the uniaxial anisotropy.

Crystal & magnetic structure
^^^^
Using the lines below with the indicated files, the crystal and magnetic structure are readily available, so that an Fe bcc system is created.

::

  simid bccFe100
  ncell     10        10       10                 System size
  BC        P         P         P                 Boundary conditions (0=vacuum, P=periodic)
  cell      1.00000   0.00000   0.00000
           0.00000   1.00000   0.00000
           0.00000   0.00000   1.00000
  Sym       0      Symmetry of lattice (0 for no, 1 for cubic, 2 for 2d cubic, 3 for hexagonal)
  posfile    ./posfile
  momfile    ./momfile
  exchange   ./jfile
  anisotropy ./kfile
  do_prnstruct 2          Flag to print lattice structure (0=off/1=on/2=print only coordinates)

.. figure:: figures/tutorial1/fig1.png
Fig 1. Lattice and magnetic texture.

Thermalizing the system
^^^^
Using the lines below, the systems is driven to the ground state.

::

  ip_mode   M
  ip_mcanneal 1
  10000 0.001 1.00e-16 0.95
  
  mode      M
  Temp      0.001          K                      Temperature of the system
  hfield    0.00000   0.00000   0.00000           Static H field
  mcNstep   50000                                 MC steps

.. figure:: figures/tutorial1/fig2.png
Fig 2. Components of the energy versus number of iterations.

Spin wave spectrum
^^^^^

We calculate the spin wave spectrum (in this case, a collinear adiabatic magnon spectra (AMS)) at the list of Q points (qfile). Use qmaker script.

::

  do_ams Y                         Collinear Adiabatic magnon spectra
  qpoints D                        Direct coordinates
  qfile ./qfile                    Path along the high symmetry points in the reciprocal space

**The first Brilluoin zone of a body centered cubic lattice**

.. figure:: figures/tutorial1/fig3.png
Fig 3. Primitive and reciprocal lattice vectors in bcc.

.. figure:: figures/tutorial1/fig4.png
Fig 4. BCC 1st Brilluoin zone.

.. figure:: figures/tutorial1/fig5.png
Fig 5. High symmetry points.

Plotting the spectrum
^^^^
Use the UppASD graphical interface (ASDGUI) or the script enclosed in this course (plotsqw_course). Use option 2.

.. figure:: figures/tutorial1/fig6.png
Fig 6. Adiabatic magnon spectra.






