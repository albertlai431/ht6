import React, { Component } from "react";

// Helper
import SelectList from "../common/SelectList";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      coverage: "",
      education: "",
      employment: "",
      gender: "",
      location: "",
      martial: "",
      policy: "",
      age: "",
      country: "",
      income: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const registerData = {
      coverage: this.state.coverage,
      education: this.state.education,
      employment: this.state.employment,
      gender: this.state.gender,
      location: this.state.location,
      martial: this.state.martial,
      policy: this.state.policy,
      age: this.state.age,
      country: this.state.country,
      income: this.state.income
    };

    console.log(registerData);
  };

  render() {
    const coverageOptions = [
      { label: "Select Plan", value: "None" },
      { label: "Basic", value: "0" },
      { label: "Extended", value: "1" },
      { label: "Premium", value: "2" }
    ];

    const educationOptions = [
      { label: "Select Education", value: "None" },
      { label: "High School", value: "0" },
      { label: "College", value: "1" },
      { label: "Bachelor", value: "2" },
      { label: "Masters", value: "3" },
      { label: "Doctor", value: "4" }
    ];

    const employmentOptions = [
      { label: "Select Employment", value: "None" },
      { label: "Employed", value: "0" },
      { label: "Unemployed", value: "1" },
      { label: "Medical Leave", value: "2" },
      { label: "Disabled", value: "3" },
      { label: "Retired", value: "4" }
    ];

    const genderOptions = [
      { label: "Select Gender", value: "None" },
      { label: "Male", value: "0" },
      { label: "Female", value: "1" },
      { label: "Other", value: "2" }
    ];

    const locationOptions = [
      { label: "Select Location", value: "None" },
      { label: "Rural", value: "0" },
      { label: "Suburban", value: "1" },
      { label: "Urban", value: "2" }
    ];

    const martialOptions = [
      { label: "Select Martial", value: "None" },
      { label: "Married", value: "0" },
      { label: "Single", value: "1" }
    ];

    const policyOptions = [
      { label: "Select Policy Type", value: "None" },
      { label: "Personal Auto", value: "0" },
      { label: "Corporate Auto", value: "1" },
      { label: "Special Auto", value: "2" }
    ];

    return (
      <div className="container pt-5" style={{ paddingBottom: "100px" }}>
        <h3 className="font-weight-bold text-center">Sign Up</h3>

        <form onSubmit={this.onSubmit} className="pt-3">
          <div class="row">
            <div class="col">
              <label for="formGroupExampleInput">Enter Age</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter a Number"
                name="age"
                value={this.state.age}
                onChange={this.onChange}
              />
            </div>
            <div class="col">
              <label for="formGroupExampleInput">Enter Country</label>
              <input
                type="text"
                class="form-control"
                placeholder="Country Name"
                name="country"
                value={this.state.country}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="pt-3">
            <div className="row">
              <div className="col">
                <label for="formGroupExampleInput">Choose Insurance Plan</label>
                <SelectList
                  name="coverage"
                  placeholder="coverage"
                  value={this.state.coverage}
                  onChange={this.onChange}
                  options={coverageOptions}
                />
              </div>
              <div className="col">
                <label for="formGroupExampleInput">Education</label>
                <SelectList
                  name="education"
                  placeholder="education"
                  value={this.state.education}
                  onChange={this.onChange}
                  options={educationOptions}
                />
              </div>
            </div>
          </div>

          <div className="pt-3">
            <div className="row">
              <div className="col">
                <label for="formGroupExampleInput">Employment</label>
                <SelectList
                  name="employment"
                  placeholder="employment"
                  value={this.state.employment}
                  onChange={this.onChange}
                  options={employmentOptions}
                />
              </div>
              <div className="col">
                <label for="formGroupExampleInput">Gender</label>
                <SelectList
                  name="gender"
                  placeholder="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={genderOptions}
                />
              </div>
            </div>
          </div>

          <div className="pt-3">
            <div className="row">
              <div className="col">
                <label for="formGroupExampleInput">Income</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ex. 100000"
                  name="income"
                  value={this.state.income}
                  onChange={this.onChange}
                />
              </div>
              <div className="col">
                <label for="formGroupExampleInput">Location</label>
                <SelectList
                  name="location"
                  placeholder="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  options={locationOptions}
                />
              </div>
            </div>
          </div>

          <div className="pt-3">
            <div className="row">
              <div className="col">
                <label for="formGroupExampleInput">Martial Status</label>
                <SelectList
                  name="martial"
                  placeholder="martial"
                  value={this.state.martial}
                  onChange={this.onChange}
                  options={martialOptions}
                />
              </div>
              <div className="col">
                <label for="formGroupExampleInput">Policy Type</label>
                <SelectList
                  name="policy"
                  placeholder="policy"
                  value={this.state.policy}
                  onChange={this.onChange}
                  options={policyOptions}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "#6c63ff", borderRadius: "20px" }}
          >
            <span className="pl-2 pr-2" style={{ color: "white" }}>
              Sign Up
            </span>
          </button>
        </form>
      </div>
    );
  }
}

export default Form;