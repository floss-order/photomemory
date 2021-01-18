import React from 'react'
import Select from 'react-select'
import propTypes from 'prop-types' 

function Dropdown({ options, value, onChange, ...attrs }) {
    const styles = {
        container: (provided) => ({
            ...provided,
            fontWeight: 500,
            fontSize: '1.5625rem',
            width: '13rem',
            color: 'var(--color-blue-violet)',
            cursor: 'pointer' 
        }),

        control: () => ({
            borderRadius: 10,
            padding: '1.25rem 1rem',
            backgroundColor: 'var(--color-blue-violet-light)'
        }),

        valueContainer: provided => ({
            ...provided,
            justifyContent: 'center'
        }),

        singleValue: () => ({
            color: 'var(--color-blue-violet)'
        }),
        
        menu: provided => ({
            ...provided,
            marginTop: '1.25rem',
            padding: '20px 0',
            borderRadius: 10
        }),

        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            padding: '0.75rem 1rem',
            color: 'var(--color-blue-violet)',
            backgroundColor: state.isFocused || state.isSelected ? 'var(--color-blue-violet-light)' : 'transparent',
            
            '&:hover, &:focus, &:active': {
                backgroundColor: 'var(--color-blue-violet-light)'
            },
        })
    }

    return (
        <Select
        styles={styles}
        components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
        }}
        options={options}
        isSearchable={false}
        value={value}
        onChange={onChange}
        {...attrs}
      />
    )
}

Dropdown.propTypes = {
    options: propTypes.arrayOf(propTypes.shape({
        value: propTypes.string,
        label: propTypes.string
    })),
    value: propTypes.string,
    onChange: propTypes.func
}

Dropdown.defaultProps = {
    options: {
        value: 'value',
        label: 'label'
    },
    value: 'value',
    onChange: () => {}
}

export default Dropdown
