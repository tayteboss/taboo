import {CaseIcon} from '@sanity/icons'
import {imageObject, selectMediaTypeObject, videoObject} from '../objects'

export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  icon: CaseIcon,
  preview: {
    select: {
      subtitle: 'tagline',
      title: 'title',
    },
  },
  fields: [
    {
      title: 'Client',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Tag',
      name: 'tag',
      type: 'string',
    },
    {
      title: 'Thumbnail Media',
      name: 'thumbnailMedia',
      type: 'object',
      fields: [
        selectMediaTypeObject,
        {
          ...imageObject,
          hidden: ({document}: any) => document?.thumbnailMedia?.mediaType !== 'image',
        },
        {
          ...videoObject,
          hidden: ({document}: any) => document?.thumbnailMedia?.mediaType !== 'video',
        },
      ],
    },
    {
      title: 'Thumbnail Ratio',
      name: 'thumbnailRatio',
      type: 'string',
      options: {
        list: [
          {title: '1:1', value: '1:1'},
          {title: '16:9', value: '16:9'},
          {title: '9:16', value: '9:16'},
          {title: '4:3', value: '4:3'},
        ],
        layout: 'dropdown',
      },
    },
  ],
}
