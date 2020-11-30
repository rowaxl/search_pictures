import { useState, useEffect } from 'react'

import { searchImagesByQuery, getImageDetail } from '../api/ImageClient'

export const useSearchImages = (query, page = 1) => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const callGetImage = async (query, page) => {
      setLoading(true)
      const { data } = await searchImagesByQuery(query, page)

      setTimeout(() => {
        setResult(data.results)
        setTotalPages(data.total_pages)
        setLoading(false)
      }, 2000)
    }

    callGetImage(query, page)
  }, [query, page])

  if (!query || !page) {
    return [[], 0, false]
  }

  return [result, totalPages, loading]
}

export const useGetImageDetail = (id) => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  useEffect(() => {
    const callGetImage = async (id) => {
      if (!id) return

      setLoading(true)
      const { data } = await getImageDetail(id)

      setTimeout(() => {
        console.log(data)
        setResult(data)
        setLoading(false)
      }, 1000)
    }

    callGetImage(id)
  }, [id])


  if (!id) {
    return [null, false]
  }

  return [result, loading]
}