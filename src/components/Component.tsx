import useJsonFetch from '../hooks/useJsonFetch.js'

export default function Component({ url }) {
  const [ data, loading, error ] = useJsonFetch(url)

  return (
    <div className="component">
      { loading ? <span>Загрузка...</span> : error ? <span>Ошибка загрузки!</span> : <span>Успех!</span> }
    </div>
  )
}