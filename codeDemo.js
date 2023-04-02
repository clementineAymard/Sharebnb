function _buildCriteria(filterBy) {
    console.log('BACKEND FILTER: ', filterBy)
    const criteria = {}
    if (filterBy.loc) {
        const locCriteria = { $regex: filterBy.loc, $options: 'i' }
        criteria.$or = [
            {
                "loc.country": locCriteria
            },
            {
                "loc.city": locCriteria
            }
        ]
    }
    if (filterBy.adults && filterBy.children && filterBy.infants) {
        const capacityCriteria = parseInt(filterBy.adults) + parseInt(filterBy.children) + parseInt(filterBy.infants)
        criteria.capacity = { $gte: capacityCriteria }
    }
    if (filterBy.adults && filterBy.children && !filterBy.infants) {
        const capacityCriteria = parseInt(filterBy.adults) + parseInt(filterBy.children)
        criteria.capacity = { $gte: capacityCriteria }
    }
    if (filterBy.adults && filterBy.infants && !filterBy.children) {
        const capacityCriteria = parseInt(filterBy.adults) + parseInt(filterBy.infants)
        criteria.capacity = { $gte: capacityCriteria }
    }
    if (filterBy.category) {
        criteria.labels = filterBy.category
    }
    return criteria
}