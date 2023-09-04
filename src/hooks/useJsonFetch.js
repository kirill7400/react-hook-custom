import {useEffect, useState} from "react";
import axios from "axios";

export default function useJsonFetch(url, opt) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error]
}