// boilerplate code

import Matter from 'matter-js';
import Pizza from '../components/Pizza';
import * as Constants from './constants';


export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false});
    let world = engine.world;

    return {
        physics: {engine, world},
        Pizza: Pizza(world, 'brown', {x: Constants.SCREEN_WIDTH / 2, y: Constants.SCREEN_HEIGHT / 2}, {height: 50, width: 50}),
    }
}