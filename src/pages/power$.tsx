import { Col, Row, Typography } from "antd";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

import BasicLayout from "@/layouts/BasicLayout";

const Home: React.FC = () => {
  return (
    <BasicLayout pageTitle="Quest Board" pageDescription="Find your next adventure">
      <Typography.Title level={3} className="text-center">
        Quest Board
      </Typography.Title>
      <Row justify="center">
        <Col span={16} xs={22} sm={22} md={18} lg={16}>
          <PowerBIEmbed
            embedConfig={{
              type: "report", // Supported types: report, dashboard, tile, visual and qna
              id: "c34c6ef0-150e-4b55-9527-753117fbfbe8",
              // embedUrl:
              //   "https://app.powerbi.com/reportEmbed?reportId=c34c6ef0-150e-4b55-9527-753117fbfbe8&autoAuth=true&ctid=58ca37a9-d0db-47bc-bf48-6a0eeedb4a24",
              accessToken:
                "H4sIAAAAAAAEAC2WtQ7sCBZE_-WlHsnQxpEmMLaZOTMzs1f779sabXxvVKo6Vf_5YyZPPyX5n7__TFEUUSwkWvcgEuvJwjETL0dRxlYNd5L_VGUfcCj_xCyg2oYVSS9_BcJWRGlT-sAts27cJnTZ2e5ztasaCSS0DM_EzZUCO6321MgRZ4e4iBQZrZa4yVvytog4eotL8SVtoG-KZYoa78Wo2s5tgXqDGMnOERvTokCtAYUBjacKclmJTrO-LdzDLF9ymsSpgsJja1uBvIfkgEIJWQCtvAqwlR4ZbkKBO--apCPSYaay3r9ARdZyn3pY-476OtXoZNrERwe_9VopId0i8ABC9bS33z20m2ujG-te95vKg6b3MKmtLVtTzUh-S_UztXdk57y89kQjen6j7fuHrXTXUuNky_TsKq6gNLbtLPSNgZF829AEOXNzL-b4U0vCfHVn8mBVZ21bWI0OijinRmF6vOskGRD9-B2ujeuRCiPWpStvu2_7OunllLtPJ6WboemXXGIHd8_pN8r1cjNBftzuhJKegpfISRJUs-aozeWvI3wAEPQpEGFtWsWU4OXHJT6mutGYCBuFarFuNq_YIpEfnGz4VQXRmDh6wvYkndnEnDSMjJY-t4PM4lDb12daPnLt4pMXf6GuRdAZZT3FHJHWqXxayi83gjx_9EYLo6jsaYkRoEAAJA7vudgnz_mM2kqtz1fo7Zq01G8WA4wbMUa9KqHanMadBlvR1qgu198vBiXAyoOjTQ1fzlGjpFT2dKFiZ-Wli0IYtx1CdaU33yo1xDjPjYPnS94w3bxz2Ukr3B7H9IkQZBFCjr_JjI5jQAIJnyOc1r0kp5nqfNStqUrnVKg47YJTleAKJQnPNaAfCF1Kicddlnq6SR_lmm0TR2Z7dNQ1BFa6BMN4086mzWvMzE2b41bZpoVBfV6l33Gq4W1Fa5tyZ0Y-ouz6aBoORjtopIYh26JL2xVPAeSOyC0PtCKI53fBZIx-rOWpycztUaLInXK7xHpAga8Oi_Hnkl5VyeQzBB56NW6dXBTfn-0VBrx1twwrZ6RQEZ4WSZoii48ZTbvDeaBYBdWW9f0c37CbgQKaS4WcMGlGo933EbapIqrmi41g8ebtruysaJUoU1tfKSWgwGyQa_hmRv5cUJsdrYn3XTMAEpoarx431XcCfe97ZSJJKbABzaM7EY_LAFY2pLMKwEqj9QYYxBIqVbrJlSXkR0a6VQ3wSblL9K_IiUF1G4yz5qDMr0XTisB-zdpy09vs3GBWiUbbWs1C3EV_knNbinoAwEIqh2a-s9o529IikNqPQGSLG0vjgTy9syKcZT_Sgn3WpiAO51hMWbjvYOlQS4iV-STnj-fs1NWh6lLwHW0UNizPZuKXdQ_kTDAqAlFRWv3VeOqOG-Njpzo3rDHbjMDR9DzDkPmUE_je69LYyc5Se6bMc_OTofDKvPUSMuedO9TN--bx1TpxLLHtNnL0hzTSk2muHYW1ePJulKJYffxVse0KTa5gGtVgz6dMlaMvbu_AgQdImTXpIrNA9JFhbPGNYpU2Z2uPBvdajPabMRK8PkXF46g5DGrhtXKGDYfLjdoGa76GyvPS02lu8XCtd7Z7ZJmRKStQ6nKZ2bK7C3gGUjHtk1FGsh2R2qghU17u9-EX27ZBaPn1g6WS4OPMmxh9KcJj3D2tVNX9RjgPY8ycwSOxv01N5vSh5phapnaf-ivi1cwXrdcXwpE6fM2Ol20346m91c93ws9ctE-45324ZWh_RCiih83SGU4GWUnCydR2JhNXn7-3GJuqgDDOGaXtqRwAdcU6oAQV_VHk_CEWVbCh8cb64AJ21jowQURZ3YZVXpRedMrmkXYLqWpgT-Zt-hflYuesDbTNTf2ZQnzYJK1tJg0fkjASldzJ_g1IQd6h9ZhGfRGqpNueSrGfw41yuXMa4wA-gpVTDSZ9H7Urv3LK_HrEvxrnVv0B00gtdIUkZYPlxRYaIIHohvGRB5VpuFlVXa9tvkFZDQnQqD5rjYUKDq5zI7T9hA3oDxAZtFZbREOyiDcKItU0DNfuHX3DcMv5KiC5JqbZg9Uf93N4FCEUFHnTQBsjpmYfrMzXAKam9gOYXXQ0-jUR2K5VqR-ZLkg3z6ME7lUnjNo2w5fGjhw9YF3m9ktS4kIswRyfnAulZuKTohH-CymKssFsPyd1VZKzqOjIfmxNmEivL7I3SJw28H5qg5c1DT93JbAOO2MLriJ4TOI3dX1kIRj1NG7CVjeqIlWa6qPv4ewjNPJ7uuuCvoyRHEYCVFrM9HoFswenzBj8KZZKTjMkhBOCOMfYr6ih5APfIEI3WIPn56eo0xRCeGLNdI8XZy4eEAQ1yLz5jPuobwnqcmh4tBRCZvKLw_5laueJkONeh7DgZrBX2fYGRuFp4TWWEg1If_UXmyFat212j1lz03kslEzQCCh7s98-vUALyx2yn9SnG4LB6pqZyHU3qVVcR15cIwJZ2iGAXStKnT2DtBXM0Nhn97edb1nifXF2c6xys58fQFs7sRLMYGMVPw0QAuyJ3VOGIbYF8gV6X2U3sBOmBPxxDqqgBO5QhcOC3wAOxld6dcrJeCrSitmNsCoW44T-oJ-znVXElO-PeTU-iU9Q6YiYaZI_umfY0ADU5nuXx6IqqeGPfUIzmF3__PPnrz_s-sz7pBTPbybKWiYRoMuPr53ciasooxdfKQK9-8N5QdJiqT8L0E68_Cxy3zIw-hw4Z8TftY4QdrtknFTghcXKe99HP7HLUQpjCnT-s4YiUbz9cetfnwF2_HPh942SXMzClo3g-uh6oUzWY4NG6dYCY2uaKBq2yJLaHQynN-RCfLcy6dZbjw1EGRSfiCtY7UmPHgLoL8wtGnX2HO-viyVYc4ilO-vk1mwFMDLvrM9sEmM5QIDmjQqDidt9J-PQ9upj0Ea1MLXfmQgpZjN0gQICt_AlqdbutfLqo0e_7ET3Qm9r1Eh447Dpx-ZvMSIB5u_9FxGWqKGP5YElMIxfBzsfO-LQQ-BwKGrWW_y_zM9c_zDu_1TGQdlhViYxd_iWltkO6DoprH-_nKYak_1Yi99bu2AodZPzTO1WJ9RucdyJUfan4niHPdw7XI4ZRVouTgXU6XhtfJwcP9mkIMKWPjMUXkCaw8E_tMVXYy3WRXMsiD8Rz7DId1Yi1AejRpMiud15bifJ8rBrpRyvL0Vj1KUAW7Nf-mS4jq4InV04mYiRRkZ01PMAERwbrLGBXZmayXFZ_bu0zb6dtTA0wTTkP9dMFQs550MWhcIREvX0Al0kFPULiVzqCjlb1NalEphIzhXynhvZKtABBxsTVnB9IaTnO6970MbFoJplPXOjoLKb66N2B1oeFoeZk372DkBkPZTjM0sYgKFKsRgKnuhbVrPxycswMB2YkvnBBqwUvkeD-Ffm__4PvCMhPRoNAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUFGUklDQS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19",
              tokenType: models.TokenType.Embed,
              // settings: {
              //   panes: {
              //     filters: {
              //       expanded: false,
              //       visible: false,
              //     },
              //   },
              //   background: models.BackgroundType.Transparent,
              // },
            }}
            eventHandlers={
              new Map([
                [
                  "loaded",
                  function () {
                    console.log("Report loaded");
                  },
                ],
                [
                  "rendered",
                  function () {
                    console.log("Report rendered");
                  },
                ],
                [
                  "error",
                  function (event) {
                    console.log(event.detail);
                  },
                ],
              ])
            }
            cssClassName="report-style-class"
            // getEmbeddedComponent={(embeddedReport) => {
            //   this.report = embeddedReport as Report;
            // }}
          />
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default Home;
