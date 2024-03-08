import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Computer
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="Price" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="Stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Color" />
          <label>size</label>
          <input type="text" name="size" placeholder="Size" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
            <option value="kitchen">Kitchen</option>
          </select>
          <label>Description</label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            rows={10}
            placeholder="Description"
          />
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
