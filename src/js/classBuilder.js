export default (baseClass) => {
    return (subClass) => `${baseClass}_${subClass}`
}