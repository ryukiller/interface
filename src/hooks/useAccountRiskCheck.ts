import { sendEvent } from 'components/analytics'
import { useEffect } from 'react'
import { ApplicationModal, setOpenModal } from 'state/application/reducer'
import { useAppDispatch } from 'state/hooks'

export default function useAccountRiskCheck(account: string | null | undefined) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (account) {
      const headers = new Headers({ 'Content-Type': 'application/json' })
      fetch('https://screening-worker.Ariswap.workers.dev', {
        method: 'POST',
        headers,
        body: JSON.stringify({ address: account }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.block) {
            dispatch(setOpenModal(ApplicationModal.BLOCKED_ACCOUNT))
            sendEvent({
              category: 'Address Screening',
              action: 'blocked',
              label: account,
            })
          }
        })
        .catch(() => {
          dispatch(setOpenModal(null))
        })
    }
  }, [account, dispatch])
}
