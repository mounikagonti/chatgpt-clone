'use client'
import useSWR from 'swr'
import Select from 'react-select'

const fetchModels = () => fetch('/api/getEngines').then((res) => res.json())

const ModelSelection = () => {
  const {data: models, isLoading} = useSWR('models', fetchModels)
  const {data: model, mutate: setModel} = useSWR('model', {
    fallbackData: 'text-davinci-003',
  })
  return (
    <div className='modelSelection_wrapper'>
      <Select
        className='select'
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
          control: (state) => 'selectTag',
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  )
}

export default ModelSelection
