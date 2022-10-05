Spin-lattice dynamics
=====================

SLD simulation of a dimer
-------------------------
In this example we are modeling a spin-lattice coupled magnetic dimer, with zero lattice
damping and zero Gilbert damping, using velocity-Verlet or fixed-point iteration
implicit midpoint solver. The full expressions for the Hamiltonian, the effective magnetic
fields, and the interatomic forces are contained in Eqs. 27-31 in Ref. [Hellsvik2019]_. 

The main input file ``inpsd.dat``

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/inpsd.dat

the  ``posfile``

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/posfile

the ``momfile``

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/momfile

the ``jfile.nosym``

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/jfile.nosym

The ``phonfile``

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/phonfile

The ``llfile.nosym``

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/llfile.nosym

The ``mmlfile.nosym``

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/mmlfile.nosym

SLD simulation for trimer
-------------------------
TrimerSLD      # Trimer SLD, atomic units, with different MML coupling,
               # either of :math:`A_{iji}` type or of :math:`A_{ijk}` type.
               # optional use of point group symmetries for the couplings

bcc Fe
------
bccFeSLD       # bcc Fe with MM, LL and MML coupling. Uses cutoff in LL interaction

	       # Variants available in the runbccFe*.sh scripts

	       # Gronbech-Jensen-Farago velocity-Verlet solver (initial and/or measurement phase)
	       # Canonical velocity rescaling (measurement phase)
	       # Fixed-point iteration implicit midpoint solver (measurement phase)
