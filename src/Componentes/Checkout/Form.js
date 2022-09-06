import "./Checkout.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { useForm } from "react-hook-form";

const Form = ({ createOrder }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const { buyer, setBuyer } = useContext(CartContext);
  const { firstName, lastName, email, address, phone } = buyer;

  const handleChange = (e) => {
    e.preventDefault();
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    console.log(onSubmit);
  };

  return (
    <div>
      <form
        className="paymentForm"
        id="form"
        onSubmit={handleSubmit(onSubmit && createOrder)}
      >
        <input
          {...register("firstName", { required: true })}
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={firstName}
          onChange={handleChange}
        />
        {errors?.firstName && <p> ⚠ Campo obligatorio</p>}
        <input
          {...register("lastName", { required: true, maxLength: 10 })}
          type="text"
          name="lastName"
          onChange={handleChange}
          value={lastName}
          placeholder="Apellido"
        />
        {errors.lastName?.type === "required" && <p>⚠ Campo obligatorio</p>}
        <input
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errors.email?.type === "required" && <p>⚠ Campo obligatorio</p>}
        {errors.email?.type === "patern" && <p>⚠ Formato de email no válido</p>}
        <input
          {...register("address", { required: true, maxLength: 10 })}
          type="text"
          placeholder="Dirección"
          name="address"
          value={address}
          onChange={handleChange}
        />
        {errors.address?.type === "required" && <p>⚠ Campo obligatorio</p>}
        <input
          {...register("phone", {
            required: true,
            pattern: /^[0-9+-]+$/,
            maxLength: 12,
          })}
          type="text"
          placeholder="Teléfono"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        {errors.phone?.type === "required" && <p>⚠ Campo obligatorio</p>}
        {errors.phone?.type === "patern" && (
          <p>⚠ Formato de teléfono no válido</p>
        )}
        <button type="submit" className="btn btn-success">
          Generar Orden
        </button>
      </form>
    </div>
  );
};

export default Form;
