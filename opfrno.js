外链999!wailian999！

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163xuvyxugi.html

[Q22] 排序
来源：http://www.aibaodan.cn/163scdoyjgf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163faiczlxw.html

[Q23] 分页
来源：http://www.sxryk.cn/163dqsfnljj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163oavngkkp.html

[Q24] 去重
来源：http://www.sxryk.cn/163umzwcnyx.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163lccfzoou.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163eywwqtxk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163zvhxbyhz.html

[Q26] 计数
来源：http://www.sxryk.cn/163ytfluqgj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163cibkrxma.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163hhnhfujc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ftxdwyrw.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163fjeiipzh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163qmteqxhq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163twmjmpax.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ybivxndp.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163zjpvcztj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mshdraov.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163hshalejc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163pggsvfcq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163unzefywm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163destgxyu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163lkhtjlps.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163hnymgxag.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163itcoqoey.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163xanngptu.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cfsmfqmv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163iksfbkry.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163loewamgu.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ttrhlcfl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ruhgcnmt.html

[Q36] 左连接
来源：http://www.xuanzx.com/163gtsznhsp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nsbeerfk.html

[Q37] 右连接
来源：http://www.xuanzx.com/163qocztpuz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163qtxrjfrc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163uirgssxx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ksvhyohx.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163afjqppwi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163tsomkrui.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ctfykuuh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163unbxlwlz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lmnjnbry.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163usndkmnw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163euxnesah.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qkvueppn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ufmkvqvf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163fhnrascf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163eabdweej.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hrvlpmgd.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163rvorypqt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163qitaelze.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163eygahbjd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zgrrybqk.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163giilnrzq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kirxlzbk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ovnxppvt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vxgjjfcy.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163kekxxjbw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zyfbtkqa.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163vgndmzws.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163sntyuxbu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fzpxgdpn.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ocvtqkus.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163gjasduyz.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ueuldxdo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163eypuijzt.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163uuocbjwr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163gebwatwz.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163vfydyome.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163oxnbgqxq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163pmagnfls.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163cmlhmspy.html

[Q54] 清空表
来源：http://www.xuanzx.com/163jowvlawb.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163wyyifzkj.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ubouzbga.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cucgypxg.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163kilikelm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163wexbhlzx.html

[Q57] 行号
来源：http://www.xuanzx.com/163dmaacjkk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163kgndewui.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163omyrrelc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163zpmimqqm.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163uxwulrjl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163cteapicp.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163fuujqfkr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163nmyeteem.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163yfwocawp.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mtuimnuu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163fjaupcyg.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163lnppvdbj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163daqjnkmf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ambbtunq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163iyihqrno.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ubtyoheq.html

COMMIT;
来源：http://www.sxryk.cn/163hxzkduqf.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163tqsuzbcf.html

ROLLBACK;
来源：http://www.sxryk.cn/163xbrkiitn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163aplunbdy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163wxqekhme.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163nxuimgsg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fzyvxdku.html

[Q68] 保存点
来源：http://www.xuanzx.com/163nqwjoinw.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ufcqopyw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xedhefxs.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163bxhynwal.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163pdrokofu.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ywqvgvqa.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163lqxlnxsc.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163fypjpwzq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163kfyhyjnk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ulyocxss.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vwfaauzy.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ophrzlkd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wbjaeoaj.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163aaasrwej.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163konkyiyz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163blhbmzzo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163heofmgtz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163cwbshmdp.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163wprtrwqk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jjktlvzq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163zwtgyyoe.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vqhooxdt.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163rrrhasru.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163gpqszqpn.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rxrzmyzy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163pfgnbraw.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163cedvexfr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163wkhamlpr.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163dbqbaody.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163hyqfjgfm.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gykasklm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163uuloghgr.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163bzlzcqpq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163nqmrcsim.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163dhiitksn.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ehuixbqd.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163hgtetqly.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dqsyzbma.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163onfrpdsn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wbnfdnmn.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163nqehuaqq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163jejmfybq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163nblokvcc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163rltzvrdx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163brjdavvq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163wuoubhup.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163yzsymecr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163uknedeqb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163pbpdvrhl.html

================================================================================
来源：http://www.aibaodan.cn/163igpykenk.html

R. Bash 专题
来源：http://www.xuanzx.com/163zipfhidu.html

================================================================================
来源：http://www.aibaodan.cn/163yitymkcg.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163gsqpryxj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163uezmzweo.html

set -euo pipefail
来源：http://www.sxryk.cn/163svntbpym.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163zykqnflu.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163zvpuswbf.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ivtytehr.html

readonly PI=3.14
来源：http://www.sxryk.cn/163mealekhn.html

[R04] 位置参数
来源：http://www.xuanzx.com/163yzhbheni.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ebnajusj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163pienlzbz.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163mhipmryi.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163arvdyzxs.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dipfipjm.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163geflslsm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163rjpcbgqm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163sbdetozq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163adewygud.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163rgpbdgii.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mfnpwumv.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ymlsytdu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163kipwxobd.html

[R11] case 多分支
来源：http://www.xuanzx.com/163swjvsydf.html

case "$1" in
来源：http://www.aibaodan.cn/163lmlkvwkv.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163zrhuqivk.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mkpbknhe.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ukprxykb.html

esac
来源：http://www.sxryk.cn/163mbdxfkmc.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163yyudcyaq.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163kvhofvnv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163chicsnjr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zadwbbex.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163prudyzdv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qwohnhup.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163zckzyloc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zbixrhtw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163kyhrcxny.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163etijajmu.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hiljpuqo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163smvqenwv.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163fftyymrt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vkzkpsol.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hlzznvou.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163vjygspbt.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163pvscmqfa.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ysvwnvdk.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wntaffop.html

echo "${#s}"
来源：http://www.xuanzx.com/163mieomuej.html

[R22] 截取子串
来源：http://www.xuanzx.com/163eqczixjc.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163dmpzbvcb.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qqipjwnz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163pynfeuii.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163faegljom.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163owftflej.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163urzccsrt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ecnpnlop.html

[R26] 命令替换
来源：http://www.xuanzx.com/163hjzkytro.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163gjgbpono.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ietzuswx.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163fglyyjnb.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163mwhbggpw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163josvumvt.html

[R29] 定义函数
来源：http://www.sxryk.cn/163tkrrylgg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yhoxsvvl.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wpketwqv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163hxhetmcn.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fwyrhgnb.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163vubllesg.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163zgtnjcan.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163zxhaygoy.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163aoylyjjq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163sfkulvvx.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163sytlstjd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ulasskuy.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163nisyfswb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163uajmvxiz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163nmspjofj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163maxsesak.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163vsrzhlqr.html

files=$(ls -1)
来源：http://www.sxryk.cn/163gahwywvz.html

[R38] 管道串联
来源：http://www.sxryk.cn/163dpovdjoe.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163shrugnjo.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xkesivnx.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163evyremga.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163qaeakbun.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163pcebtjgl.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163qozuqgsn.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163lbpgslkz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163snngljlg.html

wc -l < a.txt
来源：http://www.xuanzx.com/163evotnbgn.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ewguwjhb.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163vhczvhyl.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163attsurdc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163whnojwzz.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163bsiechbb.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163pkciynvg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jomrktko.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163gxvandth.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163vfepouax.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ggjuvsyr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163pxnunrzs.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163hgoocxzw.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mtardqsh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163pfkzuqvz.html

[R50] awk 求和
来源：http://www.sxryk.cn/163hnnlsuxn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kjnaujst.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163syqwcvlz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ykwnnesp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163bszxlxgu.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bzgkxkhv.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163kjsahsjy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163iolophcb.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163qmmlbvcl.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ivrbeluk.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163bcoeekmv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163arjdmscy.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163sjfhfcyz.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163vovjmrzp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163juhdgrez.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163dbmqkmdq.html

[R58] 下载文件
来源：http://www.xuanzx.com/163rqtejomc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ulxuthhy.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ollpitss.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163pqywdrfx.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163fldfvfaw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163hpvutyug.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163fligyyil.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163cxhwieqh.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163kszqrvxl.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163eweopqmf.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163jlcbbzfu.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163bnftqhms.html

[R64] 结束进程
来源：http://www.xuanzx.com/163oeelwaie.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163txcusctm.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ufmsgtne.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163svywssly.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163aujtriav.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163elkmwccb.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163eqkgtsnw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163kearpqcf.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163xhqzuqbl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163xnidvjad.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163kttbbkxc.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163srfblwju.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163entaqlyr.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163rylfbtzv.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163pjggxxtk.html


<!-- 参考信息 -->