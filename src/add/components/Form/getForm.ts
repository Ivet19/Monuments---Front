const getNewMonumentForm = (): HTMLElement => {
  const form = document.createElement("form") as HTMLFormElement;

  form.classList.add("new-monument-form");

  form.innerHTML = `
  <h2>Please fill out the following form to create a new monument:</h2> 
  <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>

    <div>
      <label for="description">Description</label>
      <textarea id="description" name="description" required></textarea>
    </div>

    <div>
      <label for="imageUrl">Image URL</label>
      <input type="url" id="imageUrl" name="imageUrl" required />
    </div>

    <div>
      <label for="country">Country</label>
      <input type="text" id="country" name="country" required />
    </div>

    <div>
      <label for="city">City</label>
      <input type="text" id="city" name="city" required />
    </div>

    <button class="form__button" type="submit">Add monument</button>
  </form>
`;

  return form;
};

export default getNewMonumentForm;
