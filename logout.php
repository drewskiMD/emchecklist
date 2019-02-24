<?php
session_start();
session_unset($_SESSION['uid']);
session_destroy();
header('Location: ' . "./"); ?>