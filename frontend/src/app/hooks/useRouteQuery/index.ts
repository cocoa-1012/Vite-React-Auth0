import { useMemo } from 'react'

import useLocation from '../useLocation'

function useRouteQuery() {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [ search ])
}

export default useRouteQuery
