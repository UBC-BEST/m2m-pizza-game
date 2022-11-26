import Matter from 'matter-js';


const Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine;

    touches.filter(t => t.type === 'press')
    .forEach(t => {
        // response to touch
    })

    Matter.Engine.update(engine, time.delta);

    return entities;
}

export default Physics;