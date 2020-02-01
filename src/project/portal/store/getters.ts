export const getters = {
    initStateName: function (state:any):string {
        return state.name + '666';
    },
    getGetters(state:any,getter:any):string{
        return state.name+getter.initStateName
    }
}
