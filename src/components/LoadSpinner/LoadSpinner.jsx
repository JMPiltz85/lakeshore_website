import './LoadSpinner.css'

export default function LoadSpinner(props){


    let loadClass = props.isLoading ? 'lds-hourglass': '';
    let msgClass = props.isLoading ? 'showMsg': 'hideMsg';



    return(

        <div>
            <span className={msgClass}> {props.message}</span>

            <div className={loadClass}></div>

        </div>

    )
} 