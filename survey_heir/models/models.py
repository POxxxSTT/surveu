# -*- coding: utf-8 -*-

from odoo import models, fields, api


class survey_heir(models.Model):
    _inherit = 'survey.label'
    # _name = 'survey_heir.survey_heir'

    comments = fields.Char(string='Comments')
    quizz_mark = fields.Float(string='Score for this choice', default=0.0)


class survey_quizz(models.Model):
    _inherit = 'survey.survey'

    replace_quizz = fields.Boolean("Quizz Mode", default=True)
    comment_answer = fields.Selection([
        ('do_not_display', ' не отображать'),
        ('display', 'отображать'),
        ('end_of_test', 'в конеце теста')], string='Comment on the answer', default='do_not_display')

    def isEmail(self):
        print "hello"

# default=True
