import { defineField, defineType } from 'sanity';

export const signup = defineType({
  name: 'signup',
  title: 'Sign Up',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
  ],
});
