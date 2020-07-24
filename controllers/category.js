const Category = require("../models/Category");
const Position = require("../models/Position");
const errorHandler = require("../utils/errorHandler");

module.exports.getAll = async (request, response) => {
  try {
    const categories = await Category.find({ user: request.user.id });
    response.status(200).json(categories);
  } catch (error) {
    errorHandler(response, error);
  }
};

module.exports.getById = async (request, response) => {
  try {
    const category = await Category.findById(request.params.id);
    response.status(200).json(category);
  } catch (error) {
    errorHandler(response, error);
  }
};

module.exports.remove = async (request, response) => {
  try {
    await Category.remove({ _id: request.params.id });
    await Position.remove({ category: request.params.id });
    response.status(200).json({ message: "Категория была удалена" });
  } catch (error) {
    errorHandler(response, error);
  }
};

module.exports.create = async (request, response) => {
  try {
    const category = await new Category({
      name: request.body.name,
      image: request.file ? request.file.path : "",
      user: request.user.id,
    });

    await category.save();
    response.status(201).json(category);
  } catch (error) {
    errorHandler(response, error);
  }
};

module.exports.edit = async (request, response) => {
  const uploadedCategory = {
    name: request.body.name,
  };

  if (request.file) {
    uploadedCategory.image = request.file.path;
  }

  try {
    const category = await Category.findOneAndUpdate(
      { _id: request.params.id },
      { $set: uploadedCategory },
      { new: true }
    );

    response.status(200).json(category);
  } catch (error) {
    errorHandler(response, error);
  }
};
