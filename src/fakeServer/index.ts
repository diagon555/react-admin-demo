/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (type: string) => {
    switch (type) {
        case 'graphql':
            return import('./graphql').then(factory => factory.default());
        default:
            return import('./rest').then(factory => factory.default());
    }
};
