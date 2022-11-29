import React from 'react'

function OptionsT({ us }) {
  const empty = {name: "nada", id: "nadanada"}
  return (
    <>
         <option value={empty.name} key={empty.id} id={empty.id}>Select a user</option>
         {us.map((u) => <option value={u.name} key={u.name} id={u.id}>{u.name}</option>)}
    </>
  )
}

export default OptionsT