const ConvertDurationToTimestamp = (duration: string): number => {
  let time = 0
  const hours = duration.match(/(\d+)H/)
  const minutes = duration.match(/(\d+)M/)
  const seconds = duration.match(/(\d+)S/)

  if (hours) time += parseInt(hours[1]) * 3600
  if (minutes) time += parseInt(minutes[1]) * 60
  if (seconds) time += parseInt(seconds[1])

  return time * 1000
}

const pad = (num: number, places: number, padString = '0'): string => {
  return String(num).padStart(places, padString)
}

const ConvertTimestampToString = (timestamp: number): string => {
  const hours = Math.floor(timestamp / 1000 / 60 / 60) % 24
  const minutes = Math.floor(timestamp / 1000 / 60) % 60
  const seconds = Math.floor(timestamp / 1000) % 60

  return `${hours >= 0 ? pad(hours, 2) : pad(0, 2)}:${
    minutes >= 0 ? pad(minutes, 2) : pad(0, 2)
  }:${seconds >= 0 ? pad(seconds, 2) : pad(0, 2)}`
}

export { ConvertDurationToTimestamp, ConvertTimestampToString }
