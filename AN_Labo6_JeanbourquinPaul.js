/*
 *    Numerical Algorithm - 6nd Labo.
 *   	Paul Jeanbourquin, INF2dlm-a.
 *    15.05.2017
 */

 /*
  *   simultate(prey_born, prey_mortality, predator_born, predator_mortality, init_pred, init_prey, h, n)
  *     prey_born :         natality coeficient of preys.
  *     prey_mortality:     mortality coeficient of preys.
  *     predator_born :     natality coeficient of predators.
  *     predator_mortality: mortality coeficient of predators.
  *     init_pred :         initial number of predators.
  *     init_prey :         initial number of prey.s
  *     h :                 time difference.
  *     n :                 iteration number.
  */

function simulate(prey_born, prey_mortality, predator_born, predator_mortality, init_pred, init_prey, h, n){

	// Alogirthm.

	// Init SDDs and variables.

  /*
   *  As we can't use float number as array indexes, I decide to use three array.
   *  Datas which are connected are to the same index.
   *    Example : prey[j] is prey(time[j]) (same for predator).
   */

	let prey = [];
	let predator = [];
	let time = [];

	// Initial state (t=0).

	prey[0] = init_prey;
	predator[0] = init_pred;
	time[0] = 0;

	// t>0.

	for(let i=1;i<n;i++){
    // Prey(t=i*h).
		nprey = prey[i-1] + h * ((prey_born*prey[i-1]) - (prey_mortality*prey[i-1]*predator[i-1]));
		prey.push(nprey);

    // Predator(t=i*h).
		npredator = predator[i-1] + h * ( (predator_born*predator[i-1]*prey[i-1]) - (predator_mortality*predator[i-1]));
		predator.push(npredator);

    // Time(t=i*h).
		time.push(i*h);
	}

	// Return section.

	let ret = {};
	ret['prey'] = prey;
	ret['predator'] = predator;
	ret['time'] = time;
	return ret;
}
