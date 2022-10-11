Finite temperatures
===================


Statistics
----------
In this exercise we will investigate how statistics affect simulated measurables.

A single spin with an uniaxial anisotropy has a bi-stable, Ising like, magnetic state. At finite temperatures the stability of the magnetic state is not finite
but follows an exponential (Arrhenius) relaxation behaviour. As seen in the lecture, ensemble averaging can be crucial for the analysis of such systems.

 * Investigate the amount of statistics that is needed to say something relevant about the life time of the magnetic state of the system. 
 
 * Does the need of statistics change with system parameters? (temperature, anisotropy, external field)

 * Extra: Can you fit the relaxation behaviour to an `Arrhenius function <https://en.wikipedia.org/wiki/Arrhenius_equation>`_? 

You can do a similar analysis for a finite 1d-chain by either modifying the single spin example, or 
starting from the `SimpleSystems/HeisChain <https://github.com/UppASD/UppASD/tree/master/examples/SimpleSystems/HeisChain>`_ example.

 * Is there a difference by performing ensemble averaging compared to just increasing the system size?

 * Does the exchange interaction magnitude affect the stability of the spin chains?

An accessible article for those interested in spin chains and statistics can be found here: `A. Vindigni Inorganica Chimica Acta, 361 3731 (2008) <https://www.sciencedirect.com/science/article/abs/pii/S0020169308001588>`_.



Thermalization
--------------
In this exercise the thermalization rates in spin simulations will be investigated. 

As mentioned in the lecture, thermalising the system before performing measurements is crucial for ensuring relevant results. 
Here we will investigate this for a simple cubic model system.

The initial ``inpsd.dat`` file looks as follows 

.. literalinclude:: SimpleCubic/inpsd.dat

and the almost trivial ``posfile`` and ``momfile`` are written as 

.. literalinclude:: SimpleCubic/posfile
.. literalinclude:: SimpleCubic/momfile

The ``jfile``, that will be changed during the exercise initially can look like

.. literalinclude:: SimpleCubic/jfile

i.e. including nearest and next-nearest neighbours on the cubic lattice. Notice that since ``sym 1`` is given in ``inpsd.dat``, the ``jfile`` can be kept to a minimum of two lines.

 * Starting with the inputs as defined above, vary the simulation method and damping (where applicable) to investigate the thermalization rate of the system.

 * Is the thermalization faster when going from low to high temperatures or vice versa? Anything particular happening around Tc?

 * Change the sign of the next-nearest neighbour and redo the study. Is the magnetization a good measurable for determining the thermalization now?

Phase diagrams
--------------


Minimization
------------
