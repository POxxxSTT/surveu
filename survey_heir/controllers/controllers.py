# -*- coding: utf-8 -*-
from odoo import http

# class SurveyHeir(http.Controller):
#     @http.route('/survey_heir/survey_heir/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/survey_heir/survey_heir/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('survey_heir.listing', {
#             'root': '/survey_heir/survey_heir',
#             'objects': http.request.env['survey_heir.survey_heir'].search([]),
#         })

#     @http.route('/survey_heir/survey_heir/objects/<model("survey_heir.survey_heir"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('survey_heir.object', {
#             'object': obj
#         })