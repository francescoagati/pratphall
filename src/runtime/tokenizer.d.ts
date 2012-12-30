///<reference path='all.ts' />

declare var T_ABSTRACT: number;
declare var T_AND_EQUAL: number;
declare var T_ARRAY: number;
declare var T_ARRAY_CAST: number;
declare var T_AS: number;
declare var T_BAD_CHARACTER: number;
declare var T_BOOLEAN_AND: number;
declare var T_BOOLEAN_OR: number;
declare var T_BOOL_CAST: number;
declare var T_BREAK: number;
declare var T_CALLABLE: number;
declare var T_CASE: number;
declare var T_CATCH: number;
declare var T_CHARACTER: number;
declare var T_CLASS: number;
declare var T_CLASS_C: number;
declare var T_CLONE: number;
declare var T_CLOSE_TAG: number;
declare var T_COMMENT: number;
declare var T_CONCAT_EQUAL: number;
declare var T_CONST: number;
declare var T_CONSTANT_ENCAPSED_STRING: number;
declare var T_CONTINUE: number;
declare var T_CURLY_OPEN: number;
declare var T_DEC: number;
declare var T_DECLARE: number;
declare var T_DEFAULT: number;
declare var T_DIR: number;
declare var T_DIV_EQUAL: number;
declare var T_DNUMBER: number;
declare var T_DOC_COMMENT: number;
declare var T_DO: number;
declare var T_DOLLAR_OPEN_CURLY_BRACES: number;
declare var T_DOUBLE_ARROW: number;
declare var T_DOUBLE_CAST: number;
declare var T_DOUBLE_COLON: number;
declare var T_ECHO: number;
declare var T_ELSE: number;
declare var T_ELSEIF: number;
declare var T_EMPTY: number;
declare var T_ENCAPSED_AND_WHITESPACE: number;
declare var T_ENDDECLARE: number;
declare var T_ENDFOR: number;
declare var T_ENDFOREACH: number;
declare var T_ENDIF: number;
declare var T_ENDSWITCH: number;
declare var T_ENDWHILE: number;
declare var T_END_HEREDOC: number;
declare var T_EVAL: number;
declare var T_EXIT: number;
declare var T_EXTENDS: number;
declare var T_FILE: number;
declare var T_FINAL: number;
declare var T_FOR: number;
declare var T_FOREACH: number;
declare var T_FUNCTION: number;
declare var T_FUNC_C: number;
declare var T_GLOBAL: number;
declare var T_GOTO: number;
declare var T_HALT_COMPILER: number;
declare var T_IF: number;
declare var T_IMPLEMENTS: number;
declare var T_INC: number;
declare var T_INCLUDE: number;
declare var T_INCLUDE_ONCE: number;
declare var T_INLINE_HTML: number;
declare var T_INSTANCEOF: number;
declare var T_INSTEADOF: number;
declare var T_INT_CAST: number;
declare var T_INTERFACE: number;
declare var T_ISSET: number;
declare var T_IS_EQUAL: number;
declare var T_IS_GREATER_OR_EQUAL: number;
declare var T_IS_IDENTICAL: number;
declare var T_IS_NOT_EQUAL: number;
declare var T_IS_NOT_IDENTICAL: number;
declare var T_IS_SMALLER_OR_EQUAL: number;
declare var T_LINE: number;
declare var T_LIST: number;
declare var T_LNUMBER: number;
declare var T_LOGICAL_AND: number;
declare var T_LOGICAL_OR: number;
declare var T_LOGICAL_XOR: number;
declare var T_METHOD_C: number;
declare var T_MINUS_EQUAL: number;
declare var T_ML_COMMENT: number;
declare var T_MOD_EQUAL: number;
declare var T_MUL_EQUAL: number;
declare var T_NAMESPACE: number;
declare var T_NS_C: number;
declare var T_NS_SEPARATOR: number;
declare var T_NEW: number;
declare var T_NUM_STRING: number;
declare var T_OBJECT_CAST: number;
declare var T_OBJECT_OPERATOR: number;
declare var T_OLD_FUNCTION: number;
declare var T_OPEN_TAG: number;
declare var T_OPEN_TAG_WITH_ECHO: number;
declare var T_OR_EQUAL: number;
declare var T_PAAMAYIM_NEKUDOTAYIM: number;
declare var T_PLUS_EQUAL: number;
declare var T_PRINT: number;
declare var T_PRIVATE: number;
declare var T_PUBLIC: number;
declare var T_PROTECTED: number;
declare var T_REQUIRE: number;
declare var T_REQUIRE_ONCE: number;
declare var T_RETURN: number;
declare var T_SL: number;
declare var T_SL_EQUAL: number;
declare var T_SR: number;
declare var T_SR_EQUAL: number;
declare var T_START_HEREDOC: number;
declare var T_STATIC: number;
declare var T_STRING: number;
declare var T_STRING_CAST: number;
declare var T_STRING_VARNAME: number;
declare var T_SWITCH: number;
declare var T_THROW: number;
declare var T_TRAIT: number;
declare var T_TRAIT_C: number;
declare var T_TRY: number;
declare var T_UNSET: number;
declare var T_UNSET_CAST: number;
declare var T_USE: number;
declare var T_VAR: number;
declare var T_VARIABLE: number;
declare var T_WHILE: number;
declare var T_WHITESPACE: number;
declare var T_XOR_EQUAL: number;

declare function token_get_all(source: string): Array;
declare function token_name(token: number): string;