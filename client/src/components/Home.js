import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room Id is generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both fields are required");
      return;
    }
    navigate(`/editor/${roomId}`, { state: { username } });
    toast.success("Room is created");
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-2 mb-5 bg-light rounded">
            <div className="card-body text-center bg-dark">
              <img
                src="/images/CodeSpaceTitle.png"
                alt="Logo"
                className="img-fluid mx-auto d-block"
                style={{ maxWidth: "200px", 
                  marginTop:"5px",
                }}
              />
              <h4 className="card-title text-light mb-4  mt-4">
                Welcome To Code-Space.....
              </h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="card bg-dark text-light">
                    <div className="card-body">
                      <h5 className="card-title">Join a Room</h5>
                      <div className="form-group">
                        <input
                          /*style={{
                            backgroundColor: "white",
                            color: "grey",
                          }}*/
                          type="text"
                          value={roomId}
                          onChange={(e) => setRoomId(e.target.value)}
                          className="form-control mb-2"
                          placeholder="ROOM ID"
                          onKeyUp={handleInputEnter}
                        />
                      </div>
                      <div className="form-group bg-dark">
                        <input
                          /*style={{
                            backgroundColor: "white",
                            color: "grey",
                          }}*/
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="form-control mb-2"
                          placeholder="USERNAME"
                          onKeyUp={handleInputEnter}
                        />
                      </div>
                      <button
                        onClick={joinRoom}
                        className="btn btn-primary btn-lg btn-block"
                      >
                        JOIN
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="card bg-dark text-light">
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"white"}}>Create a New Room</h5>
                      <p className="mt-3 text-light " >
                        <h5 style={{color:"white"}}>Don't have a room ID? Create{" "}</h5>
                        <button
                          onClick={generateRoomId}
                          className="btn btn-success "
                          style={{ cursor: "pointer" }}
                        >
                          {" "}
                          New Room{" "}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
