import "./Onboarding.css"
import { SelectComponent } from "../components/SelectComponent/SelectComponent"
import { useForm } from "react-hook-form"
import { useState } from "react"
export function Onboarding() {
  const [inviteList, setInviteList] = useState([{}])
  function addInvite(e) {
    setInviteList([...inviteList, {}])
  }

  function onSubmit(data) {
    console.log(data)
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const select1 = {
    placeholder: "",
    valueList: [
      { value: "Astronomy" },
      { value: "Biology" },
      { value: "Chemistry" },
      { value: "Physics" },
      { value: "Computer Science" },
      { value: "Environmental Science" },
      { value: "Neuroscience" },
      { value: "Genetics" },
      { value: "Psychology" },
      { value: "Nanotechnology" },
    ],
    updateValue: () => {},
  }

  const select2 = {
    placeholder: "",
    valueList: [
      { value: "Principal Investigator (PI)" },
      { value: "Co-Investigator (Co-I)" },
      { value: "Research Associate" },
      { value: "Research Assistant" },
      { value: "Lab Technician" },
      { value: "Data Analysts/Statisticians" },
      { value: "Administrative Staff" },
    ],
    updateValue: () => {},
  }

  const select3 = {
    placeholder: "",
    valueList: [{ value: "Personal Use" }, { value: "Part of A Team" }],
    updateValue: () => {},
  }

  const select4 = {
    placeholder: "",
    valueList: [
      { value: "Organization" },
      { value: "Integration" },
      { value: "Multimedia Support" },
      { value: "Task Management" },
    ],
    updateValue: () => {},
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <section className="form__section" id="section1">
          <fieldset className="fieldset">
            <h2 className="title title--large">Welcome!</h2>
            <h2 className="title">
              We'd love to know a bit more about you to provide you the best
              experience possible.
            </h2>
            <label className="title">How do you plan to use Scipot?</label>
            <SelectComponent className="select" {...select3} />
            <label className="title">What brings you to Scipot?</label>
            <SelectComponent {...select4} />
            <h2 className="title title--small fieldset__page-counter">1/3</h2>
          </fieldset>
        </section>
        <section className="form__section" id="section2">
          <fieldset className="fieldset">
            <h2 className="title title--large">Great!</h2>
            <h2 className="title">
              Could you tell us a bit more about the work you do?
            </h2>
            <label className="title">What is your area of research?</label>
            <SelectComponent {...select1} />
            <label className="title">What is your role?</label>
            <SelectComponent {...select2} />
            <h2 className="title title--small fieldset__page-counter">2/3</h2>
          </fieldset>
        </section>
        <section className="form__section">
          <fieldset className="fieldset">
            <h2 className="title">
              Scipot supports collaboration with others.
            </h2>
            <h2 className="title">Invite your team or join one.</h2>
            <label className="title title--small">Invitation Link</label>
            <input
              placeholder="Invitation Link"
              className="input"
              type="text"
            />
            <label className="title title--small">Email</label>

            <div className="divider__line"></div>
            <h2 className="title divider__title">OR</h2>
            <div className="divider__line"></div>
            {inviteList.map((elem) => {
              return <input placeholder="Email" className="input" type="text" />
            })}
            <button
              onClick={(e) => {
                addInvite()
              }}
              className="btn add-invite"
            >
              Add Invite
            </button>
            <h2 className="title title--small fieldset__page-counter">3/3</h2>
          </fieldset>
        </section>
      </form>
    </div>
  )
}
