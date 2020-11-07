import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

import styles from '../header/Header.module.scss'

const SearchBar = ({ filter, onFilterChange, onClose }) => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <AnimatePresence>
            <motion.div
                className={ styles.searchBar }
                key='search-bar'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <input
                    className={ styles.inpSearch }
                    value={ filter }
                    onChange={ e => onFilterChange(e.target.value) }
                    placeholder='Buscar'
                    ref={ inputRef }
                />

                <span
                    className={ `fas fa-times ${ styles.closeSearchBtn }` }
                    onClick={ () => { onClose() } }
                />
            </motion.div>
        </AnimatePresence>
    )
}

SearchBar.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default SearchBar
