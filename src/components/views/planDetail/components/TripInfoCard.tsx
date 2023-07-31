import { type TripType } from '@/types/plan'

interface TripInfoCardProps {
  title: string
  startDate: string
  endDate: string
  tags: string
}

const TripInfoCard = ({ title, startDate, endDate, tags }: TripInfoCardProps) => {
  return (
    <>
      <h1 className='mb-1 text-2xl font-bold'>{title}</h1>
      <span className='mb-2 inline-block text-neutral-400'>
        {startDate} ~ {endDate}
      </span>
      <div className='mb-4 flex gap-1'>
        {Object.entries(JSON.parse(tags) as TripType).map(([, values]) =>
          values.map((value) => (
            <span className='rounded-full bg-blue-500 px-3 py-1 text-white' key={value}>
              {value}
            </span>
          ))
        )}
      </div>
    </>
  )
}

export default TripInfoCard
