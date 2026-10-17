外链999!wailian999！

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163moqczsce.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163kqvbdwfu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ktowmeyk.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163hnonfeti.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163nbhqkehm.html

[Q22] 排序
来源：http://www.sxryk.cn/163pornbvbi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163xvmogxzr.html

[Q23] 分页
来源：http://www.aibaodan.cn/163kxoewrmj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163uakddkhb.html

[Q24] 去重
来源：http://www.xuanzx.com/163qjwhyvva.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163dhncvoly.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ngnvmkxj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163cnfsdlfe.html

[Q26] 计数
来源：http://www.aibaodan.cn/163iujnyiwm.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163kzcjydvq.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163vkzewgje.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ocdenpbt.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163qadftxpb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163typwihxz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163paipkkky.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gaucvrdw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163oproeumb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dbzewqjy.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163dhwuknur.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ysaxtcwo.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163miueizdg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kisyhduu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163kkjuqcdc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163xugvrngp.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163calixfwe.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hjaukols.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vtprvlex.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163udntsdiv.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163yqociqtu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ptrkkprf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wdbwiglu.html

[Q36] 左连接
来源：http://www.sxryk.cn/163pacqxdov.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gwcexjuy.html

[Q37] 右连接
来源：http://www.xuanzx.com/163hedzizgv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163sanpscan.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ktlmvvgn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163qjmktmmy.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xsqhyvli.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163qgbytfoj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163uurkzgto.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163lorllysp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163cifyweia.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vmwrcoob.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163wydhuxkj.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ecqexolj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163nztqjjzn.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163saysffpz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163oectkclc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163bnphhzit.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163glpejbhp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163aavgxmmv.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163cdwizorx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163mxnrdfxw.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163jukrwsfa.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lazbfuvi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163hymcuyub.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163sdttdoyf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ihuijoub.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jhekxjqd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163izvwiens.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163zwoavphx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163mfzmmiwl.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163lvyivysr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163lmbupwvl.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163svusgmju.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163rkwqkloj.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ddwxnynk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ztgkjzdf.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163brvokcce.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163zxeftyol.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163qpqeqtqy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163kkhttzwu.html

[Q54] 清空表
来源：http://www.sxryk.cn/163cwfcjyjq.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163sgkgrdit.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163fmgvjvse.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wihiisuh.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ygvywldu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kgwfzlsp.html

[Q57] 行号
来源：http://www.xuanzx.com/163rhkcereq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163kgdrprgq.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163xcvciyyq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163wibimhyb.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ekpgdtjn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163vwrsjzfw.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163htmqfgph.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vonfwjzy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yfillnkk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163afzknpbl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163vbzwryvt.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163pgzxunim.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ksnhbzxm.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ekisafci.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163gajncdbp.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163zvqfpyia.html

COMMIT;
来源：http://www.xuanzx.com/163whahinbd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163oejojjoq.html

ROLLBACK;
来源：http://www.xuanzx.com/163sjwprsgm.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ztujtklj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163fpelfxto.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163plnksymw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163sjyaedgm.html

[Q68] 保存点
来源：http://www.xuanzx.com/163cwhwqgue.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163kqvetkeo.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163eouhdphw.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zmxaansa.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163iepjyeky.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163wmueafyi.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163jpatkypr.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163qtzvillv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163bheqrfov.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163suyefjsv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163igudtzen.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hmpitxks.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163lqsitwde.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163lfhjqris.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mbypycxq.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163gyhiabal.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jhqamsgs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bdnjzgbs.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163pazkgefx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ckmahlkd.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163okquneav.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163mranspen.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ohfcxxbr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ejzlcbgm.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163iphrdesh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163geartwfs.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ohqcxsdo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163dcwbgoeh.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163suwvaave.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163jqwvcjug.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163metfuvnd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163fzmqakap.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163fbezqfhq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ngrrljbh.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vdajjmpg.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163xkhvflgi.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vzruupmt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163euhgsfhp.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163fhmthsmc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fstihpbv.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mwqkoplb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xbaskrsc.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163nvktsvbh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163smcscyey.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163eltuygop.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xsrjluuk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163zvkfkvox.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163qrvooweg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163edvgeuwf.html

================================================================================
来源：http://www.aibaodan.cn/163cnqgwdzt.html

R. Bash 专题
来源：http://www.aibaodan.cn/163okgomvep.html

================================================================================
来源：http://www.aibaodan.cn/163sjjaqqsh.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ojkgcuvr.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163yaipaitc.html

set -euo pipefail
来源：http://www.aibaodan.cn/163kqkeuqvc.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163grpfdfhs.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ucxkpagp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ckthleit.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ycswyodb.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163vznxauaa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163yywshxjf.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163gemyxhcr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ttjicpyg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wzcuatbk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163eztettab.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zdikoiul.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163voqmdyuu.html

[R08] 数值比较
来源：http://www.sxryk.cn/163axhqwprf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163hnqqssto.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bhjpjoil.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163dmppvtdx.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163azlibyxz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163aujtaigc.html

[R11] case 多分支
来源：http://www.sxryk.cn/163tmgfirhw.html

case "$1" in
来源：http://www.sxryk.cn/163dzokdjwy.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163lebwkvld.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163adkejnfk.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ytzaznzz.html

esac
来源：http://www.sxryk.cn/163przrijuy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xtmauxmv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163devfsion.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163qebmxvan.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163txbprkmq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xgpeldpg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163mnvxawgz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163psjpawyn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ztyvegfx.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zjeeqrtz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163fnoovlrv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163lfkwoomv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163hpjlsvll.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163lymtazrs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hkhicebw.html

[R19] 数组长度
来源：http://www.sxryk.cn/163npknycne.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163gnsygkxt.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163vsvuptvi.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163psydcbka.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163roswlcka.html

echo "${#s}"
来源：http://www.sxryk.cn/163ukyowchz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163erhcfkxr.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163hznxxxus.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163sgnfbzjk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163qvxmnnuk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163vwdklzcm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jxhaahjm.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163bmykdvjr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163qpuxzfma.html

[R26] 命令替换
来源：http://www.xuanzx.com/163qgiavkng.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163klragblw.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163gmzvotmo.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163edjaxzyo.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163zlaykdfa.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rmqlnbja.html

[R29] 定义函数
来源：http://www.xuanzx.com/163xpesgqts.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163nacbvhfj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163yhlycxkv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gbncklfm.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163wpsrurnu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163satutzft.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163gvygttko.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163fzhnoiud.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163htprzjxi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163corobcqi.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163fysfestk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ypeqkinm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163rkmeielp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163fjznkwkm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163vekhczkv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zcdlgtnt.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qqmtreeg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163hntbmyup.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163sizvsfhv.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ulycbxuh.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163oqvnbnpz.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163kaaqjnlv.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163qlgxvgge.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vggqwura.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nkjuucws.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163bvrpyjeg.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zfatrlry.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163wqtsopmg.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163fdmzkhoq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hmywryzl.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163aietqcyc.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163msmsiwuy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163rizyhkwd.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gggxcxfu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163etljwxbv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wogxtbrf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163riuxsrak.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163dvuataim.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163vfnzgmqo.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hjjzwzso.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ebcsxsla.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ibizdmpg.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ntkwxnus.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163lvmyvxzi.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163asvkvqcv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163tqbguqng.html

[R52] 统计行数
来源：http://www.xuanzx.com/163lbxmruph.html

wc -l a.txt
来源：http://www.aibaodan.cn/163kxzgpvcx.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163yevhqcxy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163nbmwhyrd.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163kisqbpgs.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163kumxamra.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163oeamgjwg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163wpomvcyo.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163tqnoqszi.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163wrjnijgk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163wnwrjjbv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163zqvgyhmh.html

[R58] 下载文件
来源：http://www.sxryk.cn/163fwuhkocw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163jrpryosm.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163prmrfwbz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163jhkywzwc.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163kzlhszpw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ggdwaatp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163mdiqhqjs.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163lwewjsvx.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163upsrditf.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163kirtipyc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163nwxwsmov.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hedhfhaa.html

[R64] 结束进程
来源：http://www.sxryk.cn/163dmapddjb.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163pajmpanl.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hjstfdfu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dfpoqevb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163bxkzpidu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163jwnjdkgs.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qxdsbqfw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nittbmwt.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163gmglatuz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163lfcowcse.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163cnfnbscg.html


<!-- 参考信息 -->