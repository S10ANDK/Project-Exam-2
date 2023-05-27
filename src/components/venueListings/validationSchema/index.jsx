import * as yup from 'yup';

/*
  validation schema with yup, reusable
*/

const listingSchema = yup.object().shape({
  name: yup.string().trim().required(),
  description: yup.string().trim().required(),
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
    address: yup.string().trim(),
    city: yup.string().trim(),
    zip: yup.string().trim(),
    country: yup.string().trim(),
    continent: yup.string().trim(),
  }),
});

export default listingSchema;
