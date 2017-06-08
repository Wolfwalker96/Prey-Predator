/*
 *    Numerical Algorithm - 6nd Labo.
 *   	Paul Jeanbourquin, INF2dlm-a.
 *    15.05.2017
 */
 
function simulate(prey_born, prey_mortality, predator_born, predator_mortality, init_pred, init_prey, h, n){

	// Alogirthm.

	// Init SDDs and variables.

	let prey = [];
	let predator = [];
	let time = [];

	// Initial state (t=0).

	prey[0] = init_prey;
	predator[0] = init_pred;
	time[0] = 0;

	// t>0.

	for(let i=1;i<n;i++){
		nprey = prey[i-1] + h * ((prey_born*prey[i-1]) - (prey_mortality*prey[i-1]*predator[i-1]));
		prey.push(nprey);
		npredator = predator[i-1] + h * ( (predator_born*predator[i-1]*prey[i-1]) - (predator_mortality*predator[i-1]));
		predator.push(npredator);
		time.push(i*h);
	}

	// Return.

	let ret = [];
	ret['prey'] = prey;
	ret['predator'] = predator;
	ret['time'] = time;
	return ret;
}
