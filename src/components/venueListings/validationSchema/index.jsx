import * as yup from 'yup';

/*
  validation schema with yup, reusable
*/

const listingSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  media: yup
    .array()
    .of(yup.string().url())
    .transform((value, originalValue) => {
      if (originalValue && originalValue.length === 0) {
        return undefined;
      }
      return value;
    }),
  price: yup.number().positive().required(),
  maxGuests: yup.number().positive().required(),
  rating: yup.number().max(5).default(0),
  meta: yup.object().shape({
    wifi: yup.boolean().required(),
    parking: yup.boolean().required(),
    breakfast: yup.boolean().required(),
    pets: yup.boolean().required(),
  }),
  location: yup.object().shape({
    address: yup.string(),
    city: yup.string(),
    zip: yup.string(),
    country: yup.string(),
    continent: yup.string(),
  }),
});

export default listingSchema;
