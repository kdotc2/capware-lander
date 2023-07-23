import React from 'react'

type Props = {
  title: string
  description: string
  path?: string
  image?: string
}

function ItemCard({ title, description, path, image }: Props) {
  return (
    <div className="prose rounded-lg border p-5 sm:max-w-[400px]">
      {image && (
        <div className="-mt-8">
          <img src={image} className="h-[240px] w-[400px] rounded-md object-cover" alt={title} />
        </div>
      )}

      <div className="-mb-2 flex items-center gap-3">
        {path && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d={path} />
          </svg>
        )}
        <span className="font-medium">{title}</span>
      </div>
      <p className="">{description}</p>
    </div>
  )
}

export default ItemCard
