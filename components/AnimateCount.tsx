'use client'
import CountUp from 'react-countup'

type Props = {
    amount: number

}
const AnimateCount = ({ amount }: Props) => {
    return (
        <p>
            <CountUp
                className='w-full text-white'
                end={amount}
                duration={2}
                separator=','
                prefix='$'
                decimals={2}
            />
        </p>
    )
}

export default AnimateCount