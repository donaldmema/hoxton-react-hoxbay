import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../data/types";
import { getRandomColor } from "../helpers";

export function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="categories-container main-wrapper">
      <ul className="categories-container__list">
        {categories.map((category: Category) => (
          <li key={category.id}>
            <Link
              to={"/categories/" + category.id}
              style={{
                // @ts-ignore
                ["--random-colour"]: `${getRandomColor()}`,
              }}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
