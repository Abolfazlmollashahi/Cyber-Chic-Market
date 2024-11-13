const categoryValidator = yup.object({
  title: yup
    .string()
    .required("Category title is required")
    .trim()
    .max(255, "Category title cannot exceed 255 characters"),
  href: yup
    .string()
    .required("Category slug is required")
    .trim()
    .matches(
      /^[a-z0-9_-]+$/,
      "Slug can only contain lowercase letters(a-z), numbers(0-9),underscore (_), and hyphens (-)"
    )
    .max(255, "Category slug cannot exceed 255 characters"),
});

module.exports = { categoryValidator };
