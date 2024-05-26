import './Time.css';

const Time = (props) => {
    return (
        <section className='time' style={{ backgroundColor: props.corDoCard }}>
            <h3 style={{ borderColor: props.corDoFundo }}>{props.nome}</h3>
        </section>
    );
};

export default Time;