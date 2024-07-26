

function objectKeys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

console.log(objectKeys({a: 5, b: '34344'}))