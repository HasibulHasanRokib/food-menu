const Item = ({ foods }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {foods.map((food) => {
            const { id, name, img, price, dsc,category } = food;
            return (
              <>
                <div className="col-md-3" key={id}>
                  <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p>{category.toUpperCase()}</p>
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{dsc}</p>
                      <p className="card-text">${price}</p>
                      <a
                        href="#"
                        onClick={() => {
                          alert("Thank you sir, Enjoy your food.");
                        }}
                        className="btn btn-primary"
                      >
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Item;
