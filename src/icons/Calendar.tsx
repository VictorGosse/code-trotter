import React from 'react'

type Props = {
  height: string
  width: string
}

const Calendar = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 96v80h-96v-80h96zM176 352v-80h96v80h-96zm96 32v80h-96v-80h96zm-128-32H48v-80h96v80zm32-112v-80h96v80h-96zm128 32h96v80h-96v-80zM144 160v80H48v-80h96zM48 458v-74h96v80H54c-3.3 0-6-2.7-6-6zm346 6h-90v-80h96v74c0 3.3-2.7 6-6 6z" />
  </svg>
)

export default Calendar
