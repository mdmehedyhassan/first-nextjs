
import Button from "@/app/components/Button";
import Image from "next/image";
import viniImage from '@/public/images/image2.jpg';


export default function Mission() {
  return (
    <main>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam laudantium nam minima corporis doloribus ipsam repudiandae minus, architecto doloremque eum reiciendis recusandae, eos commodi distinctio explicabo voluptatum voluptatem error aliquam iste illo. Nesciunt sit eos, ad fugiat eligendi quidem excepturi repudiandae odio reiciendis facilis deleniti sed? Voluptates quisquam nam ullam nostrum pariatur! Sunt beatae hic aspernatur facere delectus labore unde tempora iusto, modi sequi repellat itaque enim expedita laboriosam voluptate, ea commodi praesentium officiis dicta quas ipsum repellendus natus assumenda! Vel voluptatibus, sapiente debitis nam laboriosam omnis? Quod odio exercitationem recusandae autem eius deleniti ut repellendus architecto voluptatibus corrupti.</div>
        <Image placeholder="blur" src={viniImage} alt="Vini" />
        <Button/>
    </main>
  )
}
