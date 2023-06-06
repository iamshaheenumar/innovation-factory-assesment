import styles from "./RegisterSection.module.scss"
import Textfield from "@/components/common/textfield/Textfield";
import Button from "@/components/common/button/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import api from "@/utils/api";
import API_URLS from "@/constants/apiUrls";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Loading from "../../common/loading/Loading";

interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const RegisterSection = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<RegisterData>();
    const router = useRouter();

    const onSubmit = async ({ confirmPassword, ...data }: RegisterData) => {
        try {
            const res = await api.post(API_URLS.REGISTER, data)
            if (res.data.status) {
                toast.success(res?.data.message || "Registration Succesful.");

                router.push("/login")
            }

        } catch (error) {
            if (error && typeof error === 'string') toast.error(error);
        }
    }

    return (
        <section className={styles["register-section"]}>
            <div className={styles["register-section__card"]}>
                <h1>Register for New User</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Textfield
                        label="First Name *"
                        placeholder="first name"
                        error={errors["firstName"]?.message}
                        {...register("firstName", { required: "first name is required" })}
                    />
                    <Textfield
                        label="Last Name *"
                        placeholder="last name"
                        error={errors["lastName"]?.message}
                        {...register("lastName", { required: "last name is required" })}
                    />
                    <Textfield
                        label="Email *"
                        placeholder="example@gmail.com"
                        error={errors["email"]?.message}
                        {...register("email", { required: "email is required" })}
                    />
                    <Textfield
                        label="Phone *"
                        placeholder="+971500500500"
                        error={errors["phone"]?.message}
                        type="tel"
                        {...register("phone", { required: "phone is required" })}
                    />
                    <Textfield
                        label="Password *"
                        type="password"
                        placeholder="**************"
                        error={errors["password"]?.message}
                        {...register("password",
                            {
                                required: "password is required",
                                minLength: { value: 8, message: "password must be atleast 8 characters" }
                            }
                        )}
                    />
                    <Textfield
                        label="Confirm Password *"
                        type="password" placeholder="**************"
                        error={errors["confirmPassword"]?.message}
                        {...register("confirmPassword",
                            {
                                required: "confirm password is required",
                                validate: (val: string) => {
                                    if (watch('password') != val) {
                                        return "your passwords do no match";
                                    }
                                },
                            })}
                    />

                    <div className={styles["register-section__other"]}>
                        <div className={styles["register-section__agree-terms"]}>
                            <input type="checkbox" id="agree-terms" name="agree-terms" value="agree-terms" />
                            <label htmlFor="agree-terms">i agree to the terms of service and privacy policy </label>
                        </div>
                    </div>

                    <Button disabled={isSubmitting} className={styles["register-section__submit-btn"]} size="lg" variant="primary">
                        {isSubmitting && <Loading />}
                        Register
                    </Button>

                    <p className={styles["register-section__desc"]}>already have an account? <Link href={"/login"}>Log In</Link> </p>
                </form>

            </div>

        </section>
    );
}

export default RegisterSection;