import SilhouetteIcon from "@/components/common/icons/SilhouetteIcon";
import styles from "./LoginSection.module.scss"
import Textfield from "@/components/common/textfield/Textfield";
import Button from "@/components/common/button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import API_URLS from "@/constants/apiUrls";
import api from "@/utils/api";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Loading from "@/components/common/loading/Loading";
import { useAuth } from "@/contexts/AuthContext";

interface LoginData {
    email: string;
    password: string;
}

const RegisterSection = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginData>();
    const router = useRouter();
    const auth = useAuth();


    const onSubmit = async (data: LoginData) => {
        try {
            const res = await api.post(API_URLS.LOGIN, data)
            if (res.data.status) {
                console.log(auth);

                auth?.setUserSession(res.data?.data?.registered_email || "")
                toast.success(res?.data.message || "Login Succesful.");
                router.push("/")
            }

        } catch (error) {
            if (error && typeof error === 'string') toast.error(error);
        }
    }
    return (
        <section className={styles["register-section"]}>
            <div className={styles["register-section__card"]}>
                <div className={styles["register-section__user-icon"]}>
                    <SilhouetteIcon width="20.27" height="27.2" />
                </div>

                <h1>Login to Existing User</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Textfield
                        label="Email *"
                        placeholder="example@gmail.com"
                        error={errors["email"]?.message}
                        {...register("email", { required: "email is required" })}
                    />
                    <Textfield
                        label="Password *"
                        type="password"
                        placeholder="**************"
                        error={errors["password"]?.message}
                        {...register("password", { required: "password is required" }
                        )}
                    />

                    <div className={styles["register-section__other"]}>
                        <div className={styles["register-section__remember-me"]}>
                            <input type="checkbox" id="remember-me" name="remember-me" value="remember-me " />
                            <label htmlFor="remember-me">Remember Login Info </label>
                        </div>

                        <Link href="/">Forgot Password?</Link>
                    </div>

                    <Button disabled={isSubmitting} className={styles["register-section__login-btn"]} size="lg" variant="primary">
                        {isSubmitting && <Loading />}
                        Login
                    </Button>

                    <p className={styles["register-section__register-desc"]}>Don’t have an account? <Link href={"/register"}>Create Account</Link> </p>
                </form>

            </div>

        </section>
    );
}

export default RegisterSection;