import "./home.css"
import banner from "../../images/hero-img.png"
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import useProducts from "../../hooks/useProducts";
import Product from "../product/Product";


const Home = () => {
    // Custom Hook for load Courses
    const [products] = useProducts();
    return (
        <div>
            {/* ================ Start Banner Section ==============*/}
            <div className="d-flex bg-color p-5">
                <div className="mx-auto my-auto">
                    <h1 className="fontbig text-left">Build Skills with Online Courses from expert instructor</h1>
                    <InputGroup className="w-75">
                        <FormControl
                            placeholder="What do you want to learn?"
                        />
                        <Button variant="outline-secondary">
                            Search
                        </Button>
                    </InputGroup>
                </div>
                <div className="col-md-6">
                    <img src={banner} alt="" />
                </div>
            </div>
            {/* ================ End Banner Section ==============*/}

            {/*============== Top Courses Section Start =============*/}
            <div>
                <h1 className="text-center p-3">Our Popular Courses</h1>
                <Row xs={1} md={4} className="container mx-auto g-4">
                    {
                        products.slice(0, 4).map(product => <Product key={product.id} product={product}></Product>)
                    }
                </Row>
            </div>
            {/*============= Top Courses Section End =================*/}
        </div>
    );
};

export default Home;