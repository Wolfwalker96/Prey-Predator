Numerical Algorithm - 6nd Laboratory Prey-Predator
==================================================

* Author : Paul Jeanbourquin, INF2dlm-a
* School : HE-Arc - Ingénierie (Neuchâtel, Switzerland)
* Date : 12th June, 2017
* [Online README](https://wolfwalker96.github.io/Prey-Predator/)
* [Online version](https://wolfwalker96.github.io/Prey-Predator/AN_Labo6_JeanbourquinPaul.html)

Objectives
----------

The objectives of this project is the implementation of the Prey-Predator
mathematical model in a programs written in JavaScript.

Method
------

### Differential equation solvation

I use the Euler method for estimate the values of the differential equation from
the models. For store the data, I decide to use three table linked together by
the index of their values.

User manual
-------------

### Simulation configuration

The user can configure the simulation by using the input in the middle bloc.

Files
-----

* **AN_Labo6_JeanbourquinPaul.html** Program view
* **AN_Labo6_JeanbourquinPaul.js**  Script
* **AN_Labo6_JeanbourquinPaul.pdf** Report of the laboratory
* **js/** Some useful libraries

Conclusion
----------

The simulation is rightly implemented. It gives the hoped values
with a little inaccuracy due to the Euler method.

To improve this program, we can use an more accurate method (as Runge for example).
