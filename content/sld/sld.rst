Spin-lattice dynamics
=====================

For ASD simulations, the minimal set of input files consists of ``inpsd.dat``, a ``posfile``,
a ``momfile``, and a ``jfile``. In order to set up a SLD simulation with UppASD, this set of
input files need to be augmented with a number of files, namely a ``phonfile``, an ``llfile``,
and the coupling constants for a cross coupling Hamiltonian such as the third order
spin-spin-displacement Hamiltonian contained in an ``mmlfile``.

In these exercises you will explore how a spin-lattice coupled systems can be set up for
simulation with UppASD. The first two systems are a magnetic dimer and a magnetic trimer.
For these systems input files are provided in two variants, either with the full set of
interactions specified, or with only the irreducible set of interactions are specified.
In the latter case the point group operations that are activated with the ``sym`` flag
are used to work out the full set of couplings.

Exercise 1: SLD simulation of a dimer
-------------------------------------

In this example we are modeling a spin-lattice coupled magnetic dimer, with zero lattice
damping and zero Gilbert damping, using velocity-Verlet or fixed-point iteration
implicit midpoint solver. The full expressions for the Hamiltonian, the effective magnetic
fields, and the interatomic forces are contained in Eqs. 27-31 in Ref. [Hellsvik2019]_. 

The main input file ``inpsd.dat`` contains a number of additional blocks

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/inpsd.dat

The  ``posfile`` contains the positions of the atoms in terms of basis vector coordinates in the unit cell.

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/posfile

The ``momfile`` contains the magnetic moments of the atoms in the unit cell.

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/momfile

The ``jfile.nosym`` contains the exchange couplings within the system.

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/jfile.nosym

The ``phonfile`` file contains ionic masses, initial displacements and velocities.
The first column is the ``site`` number, the second the atom ``type``,
the third the ``atomic mass`` in atomic mass units, the 4-6th the Cartesian components
of the initial displacements, the 7-9th columns the Cartesian components of the velocities.

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/phonfile

The ``llfile`` file contains the harmonic force constants.
The first column is the ``site`` number, (not used), the 3rd-5th the interaction vectors
(dependent on ``maptype``), and the 6-15th columns the components of the harmonic force
constants in the order of *xx*, *xy*, *xz*, *yx*, *yy*, *yz*, *zx*, *zy*, *zz*.

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/llfile.nosym

The ``mmlfile`` contains the spin-lattice coupling (SLC) constants
[see Eqs. 6-9 in Ref. [Hellsvik2019]_]. The columns from first row are:
site number (atom i), site number of nearest neighbour mapping (atom j),
interaction vectors for nearest neighbour site (j-th) and displaced (k-th)
atom depending on maptype. The columns from the second, third and fourth rows are:
9 components of SLC constants for the displacement of k-th atom along x, y, z respectively.
The ordering of SLC components in each row are [xx, yx, zx, xy, yy, zy, xz, yz, zz].
For a dimer, the SLC constants are of :math:`A_{iji}` type, *i.e.* the displacement is always
on one of the two atoms that are exchange coupled, given that no third site is present.

.. literalinclude:: DimerSLD/DimerpuSLDcoupled/mmlfile.nosym

* Run a simulation for the example ``DimerSLD/DimerpuSLDcoupled``. Which output files are generated?
* Plot the time trajectories of the energies that are written to the file ``lattenergy.scnobase.out``. How do the energies evolve in time? Compare for Fig. 2 in [Hellsvik2019]_.
* Plot the time trajectories of spins (``trajectory.scnobase.001.1.out``, ``trajectory.scnobase.002.1.out``), and displacements (``disptraj.scnobase.1.1.out``, ``disptraj.scnobase.2.1.out``). How do magnetic precession frequencies evolve in time? Compare for Fig. 3 in [Hellsvik2019]_.
* Compare the input files contained in ``DimerSLD/DimerpuSLDcoupledSym`` with ``DimerSLD/DimerpuSLDcoupled``. How do they differ? Verify that the same Hamiltonians are set up within the UppASD simulation by comparing the ``struct.scnobase.out``, the ``lldata.scnobase.ou``, and the ``mmldata.scnobase.out`` files for the two different cases.

Exercise 2: SLD simulation for trimer
-------------------------------------

TrimerSLD      # Trimer SLD, atomic units, with different MML coupling,
               # either of :math:`A_{iji}` type or of :math:`A_{ijk}` type.
               # optional use of point group symmetries for the couplings

Exercise 3: Phonon and magnon spectra for bcc Fe
------------------------------------------------

bccFeSLD       # bcc Fe with MM, LL and MML coupling. Uses cutoff in LL interaction

	       # Variants available in the runbccFe*.sh scripts

	       # Gronbech-Jensen-Farago velocity-Verlet solver (initial and/or measurement phase)
	       # Canonical velocity rescaling (measurement phase)
	       # Fixed-point iteration implicit midpoint solver (measurement phase)
