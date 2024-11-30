import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";



export const ModalTrash = ({show, onClose, onDelete}) => {
    if(!show) return null;
      



    return(
        <div class="modal d-block" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Are you sure?</h5>
              <button type="button" class="btn-close" onClick={onClose} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>If you delete this, the entire universe will go down!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" onClick={() => onClose()} data-bs-dismiss="modal">oh no!</button>
              <button type="button" onClick={() => onDelete()} class="btn btn-secondary">yes baby!</button>
            </div>
          </div>
        </div>
      </div>
    )
}