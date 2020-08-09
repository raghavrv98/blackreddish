var express = require('express');

module.exports={
    showHome:function(req,res,next){
        res.render('index', { title: 'blackreddish' })
    },
    
    showPortfolio:function(req,res,next){
        res.render('portfolio', { title: 'Portfolio' })
    }
}
