import "./page.css";
import "./contact.css";
import React, { useEffect } from "react";

export default function Contact() {
  function messageSend() {
    // If it's not Contact Page(with form), this function doesn't work
    var form = document.querySelector("form.gform");
    if (!form) return false;

    // get all data in form and return object
    function getFormData(form) {
      var elements = form.elements;
      var honeypot;

      var fields = Object.keys(elements)
        .filter(function (k) {
          if (elements[k].name === "honeypot") {
            honeypot = elements[k].value;
            return false;
          }
          return true;
        })
        .map(function (k) {
          if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
          } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
          }
        })
        .filter(function (item, pos, self) {
          return self.indexOf(item) === pos && item;
        });

      var formData = {};
      fields.forEach(function (name) {
        var element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(", ");
        }
      });

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

      return { data: formData, honeypot: honeypot };
    }
    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
    function handleFormSubmit(event) {
      // handles form submit without any jquery
      event.preventDefault(); // we are submitting via xhr below
      var form = event.target;
      var formData = getFormData(form);
      var data = formData.data;

      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        return false;
      }

      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          var formElements = form.querySelector(".form-elements");
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
        }
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data)
        .map(function (k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        })
        .join("&");
      xhr.send(encoded);
    }
    form.addEventListener("submit", handleFormSubmit, false);
  }
  useEffect(() => {
    messageSend();
  });
  return (
    <main className="contact content-t">
      <div className="contact-container">
        <div>
          <h2>Contact</h2>
        </div>
        <div className="contact-mail-box">
          <form
            className="gform"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbzOeR2Dn89FlROJUOiT2uyh8HeAYkXdahtAKW_91Hpi_m98qJX0TxMcx2WM5ZlcoGLr/exec"
          >
            <div className="form-elements">
              <input type="text" name="name" placeholder=" Full Name" />
              <br />
              <br />
              <textarea
                name="message"
                rows="10"
                placeholder="Your Message"
              ></textarea>
              <br />
              <br />
              <input type="text" name="email" placeholder=" Email Address" />
              <br />
              <br />
              <button className="contact-button">
                <i className="fa fa-paper-plane"></i>&nbsp;Send
              </button>
            </div>
            <div className="thankyou_message" style={{ display: "none" }}>
              <h3>Thanks</h3>
              <p>I will get back to you soon!</p>
              <br />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
