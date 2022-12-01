```html
<!DOCTYPE html>
<html>

<head>
    <!-- Content Type Meta tag -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <!--Responsive Viewport Meta tag-->
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <title>Todo list app</title>

    <!-- Roboto font embed -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">

    <!-- Stylesheets -->
    <style>
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
            margin: 0;
            padding: 0;
            border: 0;
            vertical-align: baseline
        }

        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
            display: block
        }

        body,
        html {
            width: 100%;
            height: 100%
        }

        body {
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-text-size-adjust: none;
            margin: 0;
            padding: 0;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
        }

        ol,
        ul {
            list-style: none
        }

        hr {
            border: 0;
            height: 1px;
            background: #ccc
        }

        blockquote,
        q {
            quotes: none
        }

        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
            content: '';
            content: none
        }

        table {
            border-collapse: collapse;
            border-spacing: 0
        }

        * {
            margin: 0;
            padding: 0;
            list-style: none;
            box-sizing: border-box
        }

        html,
        input,
        select,
        textarea,
        button,
        a {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
        }
    </style>
    <style>
        @charset "UTF-8";

        body {
            background: #edf0f1;
            padding: 80px 0 0 0;
        }

        body,
        input,
        button {
            font-family: 'Roboto', sans-serif;
        }

        .noFill {
            fill: none;
        }

        header {
            width: 100%;
            height: 80px;

            position: fixed;
            padding: 15px;
            top: 0;
            left: 0;
            z-index: 5;

            background: #25b99a;
            box-shadow: 0px 2px 4px rgba(44, 62, 80, 0.15);
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        }

        header input {
            width: 100%;
            height: 50px;
            float: left;
            color: #fff;
            font-size: 15px;
            font-weight: 400;
            text-indent: 18px;
            padding: 0 60px 0 0;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 5px 25px 25px 5px;
            border: 0px;
            box-shadow: none;
            outline: none;

            -webkit-appearance: none;
            -moz-appearance: none;
        }

        header input::-webkit-input-placeholder {
            color: rgba(255, 255, 255, 0.75);
        }

        header input:-moz-input-placeholder {
            color: rgba(255, 255, 255, 0.75);
        }

        header input::-moz-input-placeholder {
            color: rgba(255, 255, 255, 0.75);
        }

        header input:-ms-input-placeholder {
            color: rgba(255, 255, 255, 0.75);
        }

        header button {
            width: 50px;
            height: 50px;

            position: absolute;
            top: 15px;
            right: 15px;
            z-index: 2;

            border-radius: 25px;
            background: #fff;
            border: 0px;
            box-shadow: none;
            outline: none;
            cursor: pointer;

            -webkit-appearance: none;
            -moz-appearance: none;
        }

        header button svg {
            width: 16px;
            height: 16px;

            position: absolute;
            top: 50%;
            left: 50%;

            margin: -8px 0 0 -8px;
        }

        header button svg .fill {
            fill: #25b99a;
        }

        .container {
            width: 100%;
            float: left;
            padding: 15px;
        }

        ul.todo {
            width: 100%;
            float: left;
        }

        ul.todo li {
            width: 100%;
            min-height: 50px;
            float: left;
            font-size: 14px;
            font-weight: 500;
            color: #444;
            line-height: 22px;

            background: #fff;
            border-radius: 5px;
            position: relative;
            box-shadow: 0px 1px 2px rgba(44, 62, 80, 0.10);
            margin: 0 0 10px 0;
            padding: 14px 100px 14px 14px;
            word-break: break-word;
        }

        ul.todo li:last-of-type {
            margin: 0;
        }

        ul.todo li .buttons {
            width: 100px;
            height: 50px;

            position: absolute;
            top: 0;
            right: 0;
        }

        ul.todo li .buttons button {
            width: 50px;
            height: 50px;
            float: left;
            background: none;
            position: relative;
            border: 0px;
            box-shadow: none;
            outline: none;
            cursor: pointer;

            -webkit-appearance: none;
            -moz-appearance: none;
        }

        ul.todo li .buttons button:last-of-type:before {
            content: '';
            width: 1px;
            height: 30px;
            background: #edf0f1;

            position: absolute;
            top: 10px;
            left: 0;
        }

        ul.todo li .buttons button svg {
            width: 22px;
            height: 22px;

            position: absolute;
            top: 50%;
            left: 50%;

            margin: -11px 0 0 -11px;
        }

        ul.todo li .buttons button.complete svg {
            border-radius: 11px;
            border: 1.5px solid #25b99a;

            transition: background 0.2s ease;
        }

        ul.todo#completed li .buttons button.complete svg {
            background: #25b99a;
            border: 0px;
        }

        ul.todo:not(#completed) li .buttons button.complete:hover svg {
            background: rgba(37, 185, 154, 0.75);
        }

        ul.todo:not(#completed) li .buttons button.complete:hover svg .fill {
            fill: #fff;
        }

        ul.todo#completed li .buttons button.complete svg .fill {
            fill: #fff;
        }

        ul.todo li .buttons button svg .fill {
            transition: fill 0.2s ease;
        }

        ul.todo li .buttons button.remove svg .fill {
            fill: #c0cecb;
        }

        ul.todo li .buttons button.remove:hover svg .fill {
            fill: #e85656;
        }

        ul.todo li .buttons button.complete svg .fill {
            fill: #25b99a;
        }

        ul.todo#completed {
            position: relative;
            padding: 60px 0 0 0;
        }

        ul.todo#completed:before {
            content: '';
            width: 150px;
            height: 1px;
            background: #d8e5e0;

            position: absolute;
            top: 30px;
            left: 50%;

            margin: 0 0 0 -75px;
        }

        ul.todo#todo:empty:after {
            content: 'You have nothing to-do!';
            margin: 15px 0 0 0;
        }

        ul.todo#completed:empty:after {
            content: 'You have yet to complete any tasks.';
        }

        ul.todo#todo:after,
        ul.todo#completed:after {
            width: 100%;
            display: block;
            text-align: center;
            font-size: 12px;
            color: #aaa;
        }
    </style>
</head>

<body>

    <header>
        <input type="text" placeholder="Enter an activity.." id="item">
        <button id="add">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
                <g>
                    <path class="fill" d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z" />
                </g>
            </svg>
        </button>
    </header>

    <div class="container">
        <!-- Uncompleted tasks -->
        <ul class="todo" id="todo"></ul>

        <!-- Completed tasks -->
        <ul class="todo" id="completed"></ul>
    </div>

    <!-- JavaScripts -->
    <script>
        var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
            todo: [],
            completed: []
        };

        // Remove and complete icons in SVG format
        var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
        var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

        renderTodoList();

        // User clicked on the add button
        // If there is any text inside the item field, add that text to the todo list
        document.getElementById('add').addEventListener('click', function() {
            var value = document.getElementById('item').value;
            if (value) {
                addItem(value);
            }
        });

        document.getElementById('item').addEventListener('keydown', function(e) {
            var value = this.value;
            if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
                addItem(value);
            }
        });

        function addItem(value) {
            addItemToDOM(value);
            document.getElementById('item').value = '';

            data.todo.push(value);
            dataObjectUpdated();
        }

        function renderTodoList() {
            if (!data.todo.length && !data.completed.length) return;

            for (var i = 0; i < data.todo.length; i++) {
                var value = data.todo[i];
                addItemToDOM(value);
            }

            for (var j = 0; j < data.completed.length; j++) {
                var value = data.completed[j];
                addItemToDOM(value, true);
            }
        }

        function dataObjectUpdated() {
            localStorage.setItem('todoList', JSON.stringify(data));
        }

        function removeItem() {
            var item = this.parentNode.parentNode;
            var parent = item.parentNode;
            var id = parent.id;
            var value = item.innerText;

            if (id === 'todo') {
                data.todo.splice(data.todo.indexOf(value), 1);
            } else {
                data.completed.splice(data.completed.indexOf(value), 1);
            }
            dataObjectUpdated();

            parent.removeChild(item);
        }

        function completeItem() {
            var item = this.parentNode.parentNode;
            var parent = item.parentNode;
            var id = parent.id;
            var value = item.innerText;

            if (id === 'todo') {
                data.todo.splice(data.todo.indexOf(value), 1);
                data.completed.push(value);
            } else {
                data.completed.splice(data.completed.indexOf(value), 1);
                data.todo.push(value);
            }
            dataObjectUpdated();

            // Check if the item should be added to the completed list or to re-added to the todo list
            var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

            parent.removeChild(item);
            target.insertBefore(item, target.childNodes[0]);
        }

        // Adds a new item to the todo list
        function addItemToDOM(text, completed) {
            var list = (completed) ? document.getElementById('completed') : document.getElementById('todo');

            var item = document.createElement('li');
            item.innerText = text;

            var buttons = document.createElement('div');
            buttons.classList.add('buttons');

            var remove = document.createElement('button');
            remove.classList.add('remove');
            remove.innerHTML = removeSVG;

            // Add click event for removing the item
            remove.addEventListener('click', removeItem);

            var complete = document.createElement('button');
            complete.classList.add('complete');
            complete.innerHTML = completeSVG;

            // Add click event for completing the item
            complete.addEventListener('click', completeItem);

            buttons.appendChild(remove);
            buttons.appendChild(complete);
            item.appendChild(buttons);

            list.insertBefore(item, list.childNodes[0]);
        }
    </script>
</body>

</html>
```