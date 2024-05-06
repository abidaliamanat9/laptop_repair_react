import '../assets/style/styles.css'
export const SelectBox = ({ options, onhange }) => (
    <select onChange={onhange} defaultValue={'Select a Location'}>
        {options.map((item) => (
            <option value={item.title} key={item.title}>
                {item.title}
            </option>
        ))}
    </select>
)
