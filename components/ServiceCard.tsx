type Props = {
  service: any;
  onClick: () => void;
};

export default function ServiceCard({
  service,
  onClick,
}: Props) {

  return (

    <div
      onClick={onClick}
      className="
group
relative
overflow-hidden
rounded-3xl
border border-cyan-500/10
bg-gradient-to-br
from-[#08111f]
via-[#0b1020]
to-[#12112a]
backdrop-blur-xl
p-5 sm:p-8
hover:border-cyan-400
transition-all
duration-500
hover:-translate-y-2
hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
"
    >

      <div
        className="
absolute
inset-0
bg-gradient-to-br
from-cyan-500/10
to-purple-500/10
opacity-0
group-hover:opacity-100
transition
"
      />

      <div className="relative z-10">

        <div
          className="
text-4xl
sm:text-5xl
mb-4
animate-bounce
"
        >
          {service.icon}
        </div>

        <h3 className="
text-xl
sm:text-2xl
font-bold
text-white
leading-tight
">
          {service.title}
        </h3>

        <p className="text-gray-400 mt-4">
          {service.description}
        </p>

        <ul className="mt-6 space-y-2">

          {(service.features || []).map(
            (item: string) => (

              <li
                key={item}
                className="text-cyan-300"
              >
                ✓ {item}
              </li>

            )
          )}

        </ul>

        <button
          className="
mt-6
w-full
sm:w-auto
px-5
py-3
rounded-xl
bg-cyan-500
text-black
font-semibold
hover:scale-105
transition
"
        >
          View Details →
        </button>

      </div>

    </div>

  );
}