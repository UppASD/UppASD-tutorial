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

the  ``posfile`` The file contains the positions of the atoms in terms of basis vector coordinates in the unit cell.

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/posfile

the ``momfile`` The file contains the magnetic moments of the atoms in the unit cell.

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/momfile

the ``jfile.nosym`` The file contains the exchange couplings within the system.

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/jfile.nosym

The ``phonfile`` File contains ionic masses, initial displacements and velocities. The columns are : site number, atom type, atomic mass, initial displacements and velocities in three different directions x, y, z.

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/phonfile

The ``llfile.nosym`` File contains the harmonic force constants for a lattice. The columns are : site number, (not used), interaction vectors depending on maptype, 9 components of the harmonic force constants in the order of [xx, xy, xz, yx, yy, yz, zx, zy, zz].

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/llfile.nosym

The ``mmlfile.nosym`` File contains the spin-lattice coupling (SLC) constants [see Eqs. 6-9 in Ref. [Hellsvik2019]_]. The columns from first row are : site number (atom i), site number of nearest neighbour mapping (atom j), interaction vectors for nearest neighbour site  (j-th) and displaced (k-th) atom depending on maptype. The columns from the second, third and fourth rows are : 9 components of SLC constants for the displacement of k-th atom along x, y, z respecively. The ordering of SLC components in each row are [xx, yx, zx, xy, yy, zy, xz, yz, zz]. For DimerSLD, the SLC constants are of :math:`A_{iji}` type.

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
