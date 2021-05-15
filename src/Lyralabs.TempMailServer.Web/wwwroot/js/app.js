﻿window.TempMailServer = {
    InitializeAutoSelect: function () {
        let input = document.querySelector('.email-textbox');

        if (input === null) {
            return;
        }

        ['focus', 'mouseup'].forEach(event => input.addEventListener(event, function (e) {
            e.target.select();
            return false;
        }));
    }
};