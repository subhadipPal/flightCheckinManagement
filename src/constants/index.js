export const GOOGLE_CLIENT_ID =
  '695639595546-90m1359ddlofvm6o0lbl4d4iaoisg0bp.apps.googleusercontent.com'
export const DEFAULT_ROLE_ID = 0
export const ADMIN_ROLE_ID = 1
export const STAFF_ROLE_ID = 2

export const ancServices = [
  'Extra Blanket',
  'Extra Pillow',
  'Vegan food',
  'Priority boarding',
  'Fast track security',
]

export const seatCols = ['A', 'B', 'C', 'D', 'E', 'F']

export const getSeatRows = (seatingCapacity) =>
  [...Array(seatingCapacity).keys()].map((val) => val + 1)
