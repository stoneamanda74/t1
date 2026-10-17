外链999!wailian999！

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163kkddrzue.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ayeawsao.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163vjuvdmqs.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163jqmqrlrx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163brohtspt.html

[Q26] 计数
来源：http://www.aibaodan.cn/163qpayjxfa.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163xnknqytw.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163kgayzjgp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163bwrdiujs.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qrfhrtql.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vvvdxvyt.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ixgajigl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163zpuhosdx.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ibtxzmfe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cqbtkikd.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ktjxdbxb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kmlrclia.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163tkqhkecw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nlhqhwou.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163trmcosdy.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163duounxtv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163nfwzkwws.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xctpuvky.html

SELECT * FROM (
来源：http://www.xuanzx.com/163oxtmwvnr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ssbrbeoq.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163xfhfzlze.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nxjatomj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qzyuxcgf.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163wvfzbdyf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rtlmqdmn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163gtxppdtl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163jqkqelyh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ejnfvzhd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ihmkejjf.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163bvookxml.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163lcnjebnt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163dxapitul.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163hjhntlks.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163zftzwidp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wmksxtve.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163rlmvhskr.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mdvwprug.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163vpbgttqb.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163dtteqyur.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163mvvcgmge.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ljdotmsa.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163rvzbqoii.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ltjulmqf.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163aozwnndd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163pgpsetto.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dcdyplqs.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qvqkxpxj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hxayjzgf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hjbgnawy.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163baedjleb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zhxirjpb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163emwxvcbp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163anxcvthl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163lioyvvef.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163yplpmgxh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163lzojkuns.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163onnqpghx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163cygbxocm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163rflonzda.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163egfbwawn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163sgbmmvfb.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163huisvjbv.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163pkzuuytv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mdlaaojl.html

[Q54] 清空表
来源：http://www.xuanzx.com/163sivpcyjx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163wlhoygyd.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163jsiihyep.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163fegzhxkh.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163dtzbmwzo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163puwtemsd.html

[Q57] 行号
来源：http://www.sxryk.cn/163yhrhtbch.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dajxbsxc.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163atwblehg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163rnueoxiq.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163oegzfllo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163cyqvydzu.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163xzbiaysy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163kdoifyua.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ljiuosdv.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163tpgxfyoi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163gqxjbkof.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163pitmhbtm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sbtxguln.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163pfruhjjf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ghgdkfry.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163zphfcuia.html

COMMIT;
来源：http://www.xuanzx.com/163rzeexyit.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ftbedbjl.html

ROLLBACK;
来源：http://www.sxryk.cn/163yxpxpcxg.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163egkuparj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yemkyovv.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163mzpopjvo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163myaocqgl.html

[Q68] 保存点
来源：http://www.sxryk.cn/163bygdgxab.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163rgyrkdrd.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163mqjfacci.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163oejpvjvd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163qyeuwpyp.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xocxipqw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163cqiuhexa.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163fcdwqikc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163svxiitnd.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163amrlauby.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163oilnfafa.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xcfzsvmr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ufgungua.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163hkfpyfid.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nmegyafk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163btlbydtz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163wbivaovj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163lyxnvsat.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163yeygqvzm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163vvjspxxs.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jfaffssd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163msmjmldt.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163tckispwl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163yifrizhr.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163eqknlfdc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163poznzkiw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ifutmrlz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163bnmceagt.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163drkfidln.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163bsddfjqg.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163kejlbjiw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163anqmdmsz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163mggcvrao.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xqigpfdf.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163qhphpyzs.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ultstajd.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jydbpyxg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163peileuzh.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163aezfwzcp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163bbqodaaq.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163jptjseax.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163wkhuptjp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163shckcbtk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163glzqznwy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fsabzjng.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163alrwseon.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163rwtfqqmo.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lwhhpksb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ejdanakl.html

================================================================================
来源：http://www.aibaodan.cn/163ztmjdocy.html

R. Bash 专题
来源：http://www.sxryk.cn/163deesaqya.html

================================================================================
来源：http://www.sxryk.cn/163fazxqucz.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163jikkbngx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163fjjrygpm.html

set -euo pipefail
来源：http://www.xuanzx.com/163tnososls.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jgnkckih.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163yjmkvcym.html

[R03] 只读变量
来源：http://www.sxryk.cn/163edzhivje.html

readonly PI=3.14
来源：http://www.sxryk.cn/163vsgbxcsm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163prayvftp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163baewpqij.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ztgdgstf.html

name="${1:-default}"
来源：http://www.xuanzx.com/163fogjfjed.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163bsuzptwv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163qbyddxxn.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163splkhuco.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hquggzev.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163slbdzpqp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163zekdrsuw.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163inogrwei.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163pqnknbmx.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163hudbrdxy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163uzqnonjr.html

[R11] case 多分支
来源：http://www.xuanzx.com/163leyphjan.html

case "$1" in
来源：http://www.sxryk.cn/163owczthwq.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163wcxiewhw.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163cyywlida.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163zctszfjr.html

esac
来源：http://www.xuanzx.com/163yqsrwhbl.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163giqzirwh.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bhlpsthl.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bdpshtmf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163xhmofxzx.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163lyntkbtg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163fgktfjyt.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163favrttui.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mhhbnskf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163mwwjqebr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tmrjzddj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163rilvxiez.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163fjyhrcaj.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163mztitnby.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163cbpawkor.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163aetndxge.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jwligbaf.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163tiboxyqv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ybhhvvpz.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163qtoyfrtg.html

echo "${#s}"
来源：http://www.xuanzx.com/163yggitxep.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163cuvusnzi.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lqkdqjxp.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xunjgfhf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ibjipvje.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163lacbnvnj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mjbaitmc.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163szqjfrah.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163zuazkjhk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163qntpdgbl.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163pdecbdqv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ojgaboqa.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163sbgxiwkq.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163vzeqiygw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163xjdmzylr.html

[R29] 定义函数
来源：http://www.sxryk.cn/163jajqvugl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163xpjkiobm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163fwnddjsg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163zpplragh.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163jgwikwfc.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163juggmvvx.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163tuqctlvj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163gnzdtsmj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tvfbsvpk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163nmnxmolt.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163dqapzfxq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qqktkvex.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163gmnwnpsq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ymghekve.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163mnbpfsso.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ssxgthbm.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ajezsdik.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qvwgyqrm.html

[R38] 管道串联
来源：http://www.xuanzx.com/163zhgtasbh.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163rlfslvwv.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jlwkoxaj.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163nmsoelbl.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ugkwzmsm.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zbknmjpj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pljhnfjv.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mangylme.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qzoogeco.html

wc -l < a.txt
来源：http://www.xuanzx.com/163yduugmgh.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163pbpqvkkm.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163icqqliqw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ddugmize.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163lugshlfn.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zvnjgtef.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gyldmimv.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163xgjhqezf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kqlxvhdq.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xzfvqigf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163mwcephbm.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163aomhssdy.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163umijtyjd.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zhlkgotk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cpiitmwt.html

[R50] awk 求和
来源：http://www.xuanzx.com/163oxlpvnha.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163pckjevrk.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163hjrkafva.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163uwpguzeb.html

[R52] 统计行数
来源：http://www.xuanzx.com/163vhqmgjjo.html

wc -l a.txt
来源：http://www.sxryk.cn/163iyvoxmxb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163zmpeoydn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163xyvnqofe.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163nhmffetm.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163cynpcdez.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ysewikyl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163urbdpbec.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163jmqfzygy.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163vvgeqwvu.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163tusahkan.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nxrrwrfc.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163dgeafhib.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163zxtudnaq.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163muvfjykb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163hsosfuvv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163mnjfvdgq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163imvuqbyg.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163neqwjkxj.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163asuhzmqr.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163kubvqzpp.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163clsqorni.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163fvlyxbwe.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163vksjjdya.html

[R64] 结束进程
来源：http://www.xuanzx.com/163newnunhf.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163hixllham.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163zutrgvni.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ysbwxtbg.html

[R66] 定时任务
来源：http://www.xuanzx.com/163oroiksaa.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ltwbdwax.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pukcajvj.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ylemihgk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163veqoqbtn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163dcduaqpc.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163paatbois.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163yjjhlygw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163tsdudzkk.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jkdmuejh.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163eswhfjib.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163kinzbndj.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163noueyldi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qjtsigtc.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163yuancmhu.html


<!-- 参考信息 -->