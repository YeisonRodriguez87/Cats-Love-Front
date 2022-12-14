import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailsCat } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Row, Col } from "react-bootstrap";
import Loading from "./Loading";
import NavBar from "./NavBar";
import styles from "./Details.module.css";

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailCat = useSelector((state) => state.details);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    dispatch(getDetailsCat(id));
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [dispatch, id]);

  return (
    <>
      <NavBar />
      {loader ? (
        <Loading />
      ) : (
        <Container fluid className={styles.container}>
          <Row>
            <Col className="col-lg-6 col-12 mt-0 mb-5">
              <img
                alt="foto perfil"
                src={detailCat.imagen}
                className={styles.imgCat}
              />
            </Col>

            <Col className="col-lg-6 col-12 mt-lg-5 mt-1 mb-lg-0 mb-4">
              <p>
                <strong>Nombre:</strong> {detailCat.nombre}
              </p>
              <p>
                <strong>Edad:</strong>{" "}
                {parseInt(detailCat.edad).toLocaleString()} meses
              </p>
              <p>
                <strong>Sexo:</strong> {detailCat.sexo}
              </p>
              <p>
                <strong>Ciudad:</strong> {detailCat.ciudad}
              </p>
              <p>
                <strong>Altura:</strong>{" "}
                {parseInt(detailCat.altura).toLocaleString()} centímetros
              </p>
              <p>
                <strong>Peso:</strong>{" "}
                {parseInt(detailCat.peso).toLocaleString()} kilogramos
              </p>
              <p>
                <strong>Teléfono:</strong> {parseInt(detailCat.telefono)}
              </p>
              <p>
                <strong>Descripción:</strong> {detailCat.descripcion}
              </p>
              <Link to="/home">
                <Button variant="info">Volver</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
