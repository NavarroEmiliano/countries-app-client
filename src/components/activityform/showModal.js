const showModal = (status, message, setModal) => {
  if (status === 200) {
    setModal({
      show: true,
      message
    })

    setTimeout(() => {
      setModal({
        show: false,
        message: ''
      })
    }, 5000)
  }
}

export default showModal
