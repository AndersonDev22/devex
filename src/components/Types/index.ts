export interface ICamera {
  id: number
  name: string
  rover_id: number
  full_name: string
}

export interface IRover {
  id: number
  name: string
  landing_date: string
  launch_date: string
  status: string
}

export interface IPhotos {
  id: number
  sol: number
  camera: ICamera
  img_src: string
  earth_date: string
  rover: IRover
}

export interface IPosts {
  photos?: IPhotos[]
}
