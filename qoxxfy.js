外链999!wailian999！

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163lxkyfpqj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163wwagcpfk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163lxfivyhs.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163kcfwwtrp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163wxmeiqko.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163joeegyso.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ahiqumdz.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163brgdfdbr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163sidhamzl.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qxmrhoel.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163cndzlyos.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163lzeueikz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163swnmspsb.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ouvbsfcs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163uecctbyn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ctepfvag.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163jizvoqcx.html

[Q22] 排序
来源：http://www.xuanzx.com/163idaqrvos.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163yomnuusb.html

[Q23] 分页
来源：http://www.xuanzx.com/163fvuejxeo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ltsusmxj.html

[Q24] 去重
来源：http://www.sxryk.cn/163gmqtjryj.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163gdxelupc.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fcjvlzho.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163mnjpmroc.html

[Q26] 计数
来源：http://www.xuanzx.com/163xskugsmu.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hawgfles.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163nzkplcuv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163bhxswyyu.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163urpnvfwk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163djlbvxgy.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163erzrppcu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163sdvybkpn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163hjfcvzwg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163llayzjpf.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163llqftzwz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ilbqfbmg.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163kvwnbwka.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lpnjrkmw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163qjxhfszx.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163esaqewpz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bufbmbhd.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163qzztmpfp.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163nducxgwh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163iscgvlio.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163mbhnqgrz.html

[Q35] 内连接
来源：http://www.sxryk.cn/163wctdlbmy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xjzjuoxx.html

[Q36] 左连接
来源：http://www.sxryk.cn/163nxxgkedr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hvdywcqk.html

[Q37] 右连接
来源：http://www.xuanzx.com/163riddsqfn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163xxlviskn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163pyedolhn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qbfufkve.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163yrfnxtdp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163liqbihob.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wsaqqurr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163oknzbhck.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163rpnlcrbu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163nwszeuow.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163nzslnitk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163aqfusxfe.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163sleavqbd.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163evwehugd.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163bbounziw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xkummqve.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163htlfjyto.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hlnvgkgg.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163xmxaqjxm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163gcciuhha.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163wvznkutv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xzupajag.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163rnoqstmn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bpcqsqmv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163doguscvm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qcgrxded.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163nuvohmqq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163yvmaqipo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wprnjlrx.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163rdrvozuu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xtxyewqk.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163cxyvzfop.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163zvytvaps.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hfyjubbl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163aealqayg.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ccehpbrn.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xumstaph.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163nabxctvj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163wuwileav.html

[Q54] 清空表
来源：http://www.xuanzx.com/163hmcjzkiz.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163uqhtfgvl.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163junqygfz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163rrtdhlgh.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163rzabkrxf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163orkiafqm.html

[Q57] 行号
来源：http://www.aibaodan.cn/163xgkaohnu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163crqkfwnu.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163gjbkajoh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163novcjkxu.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163cctcpjce.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163nffcjxzj.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163uiafxhou.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163acgmhvgc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163nruatvuk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163dmpjkhvv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163cyagvwxm.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163aejrxhiv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ahsxthqb.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163onjudmgc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163zvvwaacy.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163fuzlvwef.html

COMMIT;
来源：http://www.xuanzx.com/163ktjqjcoj.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163rphwabol.html

ROLLBACK;
来源：http://www.xuanzx.com/163rmprtgmg.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163zvrfepxn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163jfgunlcu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163iiexedbe.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163lomerdzt.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ibltxytl.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163wsqxxrvw.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163oozsirou.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163mbvcsgkn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163wkjjikqb.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xwsmunsy.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163mtmhschj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zxqszhse.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ghxpynkk.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xecvpzki.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163dndijlff.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163bqmgphiu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163bpfdgiua.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163kkefxvvb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163xcvaevaz.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lpzddigh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163iunftgmh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163mavntgtc.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163fmplrqhs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163oxzlltiq.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163eorpktjq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kordcaof.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163gpoeijmn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163mqaltcqw.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163xrhmridv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xdbusvnc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163iulfujls.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ykzsnoqo.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163hvvnhfty.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163zujuuobk.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163xgyoqasd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163vshbhbiq.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ejjpibcq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163zbsuchgc.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ljhjhaal.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163bmxrqmey.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163fxaeggzl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ldcadunb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163qqzrwmmf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163xsbqokpt.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163puvdmgdv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163itlvhyll.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163btpfqyzh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ltbbmpos.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163gpuskrqb.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163kcwyiurh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163yggctqed.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163shhfoega.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zyjgfnby.html

================================================================================
来源：http://www.sxryk.cn/163zqaorhxa.html

R. Bash 专题
来源：http://www.sxryk.cn/163ysqwbkwr.html

================================================================================
来源：http://www.aibaodan.cn/163dgmnzueu.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163dqltwpsr.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163vcuqwmoa.html

set -euo pipefail
来源：http://www.aibaodan.cn/163kfrmlbir.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ibveuxzs.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163aimwdhsu.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jtqcfpcp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163angjltam.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kopusxxy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ejwjstqq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163bmbocieh.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ojaqgogh.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163iknefhtt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163oahiafnw.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ysvfpews.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163epdfboeo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163zpgjddmn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163uoyxniax.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163adgdkqfl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163tdvhpwow.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163fapwwbat.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xkeppdsv.html

[R11] case 多分支
来源：http://www.sxryk.cn/163dhujyplv.html

case "$1" in
来源：http://www.sxryk.cn/163bvpmqykk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jnbykycs.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163xflrxngm.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kfdnxeux.html

esac
来源：http://www.sxryk.cn/163wloeatbx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163wbtdstbi.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ultkmazf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163csmfnpqv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163gsqqxaew.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163alvraqtq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163toaffoef.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163csrgrrsj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163asxftltg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163pckigrik.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163fasqwzgm.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163cgtmbswc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163lsolxrco.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163hxommqje.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163gfuiflcy.html

[R19] 数组长度
来源：http://www.xuanzx.com/163hgqxgwzm.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163pjanowrc.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163vsyossux.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163whmcandv.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163upizfatq.html

echo "${#s}"
来源：http://www.xuanzx.com/163ogvrzqfw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ikkiruqe.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163dmshuehr.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163jjeqknak.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163bgqvbugc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ieipmzdj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163owjvgpoc.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163cokjbkjr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hjxmmuga.html

[R26] 命令替换
来源：http://www.xuanzx.com/163orfptafg.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163cvbfcyfd.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kptimobe.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ohyvhhbj.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ekskdszq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163skcfjhkq.html

[R29] 定义函数
来源：http://www.xuanzx.com/163cehanlqi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163srmdtnma.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163crmajgao.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hjkwrwmj.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fhdyqwnn.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163qgmqtomu.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163htflkllz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163rksqsdif.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163azvnlupt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163qthsbfhu.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163vlxlrevx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zwkfmjke.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163babwdjdw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163krlnlikl.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163tfjdrldr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163fnqxqsdl.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163nwgefkeh.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163emfewhnp.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wxbvbfzz.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rfemzkeo.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163wjihecle.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dwsrniul.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cfaxhicj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163gshfkojv.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wtxgxzes.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163njjhqwpp.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163dtgnmggg.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163skhaxote.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163yhgltkfb.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163erfhqxtp.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vgupdckh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ovbhslnd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163skqsntzv.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mqegmdzp.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163bdtcwxma.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163cjbxbrpv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ywqqnqkw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ngxvydxr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163vnzedbfk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163bujvdyks.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163rgeuufnv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ooxdbwpl.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163sggzjiaf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ahxrskzd.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163sbjdpyhw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163yemafqls.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vfarssnf.html

wc -l a.txt
来源：http://www.sxryk.cn/163ldrwfnad.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xtkhdfnr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163fspgtiej.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163sjbmcbsj.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163cxvhxqfi.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jrxvhpoh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163fyyfimtr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163uukixnaq.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163dhzbywxm.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163yseegept.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163pamzkzih.html

[R58] 下载文件
来源：http://www.sxryk.cn/163mcqlblju.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163cucezyev.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fzagthti.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163kblhthew.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163picvbjpi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jndaodnm.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ybppciue.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ngntlkej.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163pautppas.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163berknnpr.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ddaakhsp.html


<!-- 参考信息 -->