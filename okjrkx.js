外链999!wailian999！

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163spiqbmbo.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163muovspnr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163teigjoxk.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163dzeklczh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lrhaaujr.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163sgjukjik.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163tydcdewo.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163kwljrcmh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163osxdzylf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qlwgujhb.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163dygkqgpw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163txzhudzx.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163wbvpcsni.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163twikehrh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163vfposgpq.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163wwpnemeo.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qvtnlmnw.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ujriorgt.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163yxfjrrum.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163iborpupb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zkilfoqb.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163zgighczr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163aipwderq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ahslocfi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163seljzayt.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163luwkarve.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163otxlkosu.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163kfeqovqw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163tqlgkzqe.html

[Q22] 排序
来源：http://www.aibaodan.cn/163akzuffai.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jmbachtl.html

[Q23] 分页
来源：http://www.xuanzx.com/163uzismcmt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163iqpolcqy.html

[Q24] 去重
来源：http://www.xuanzx.com/163xfaoigyu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163tppjxlfp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163hbzhmlcl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163sprifxkf.html

[Q26] 计数
来源：http://www.xuanzx.com/163cgszsifv.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163dzbjlnhm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163qlhvbwgy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wxwjcohz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163fcvwkfon.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163hscuyree.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163dlkomapu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163qhtvhmeo.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163fgxfflol.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163bgdelmpy.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ahrxqjgb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kdjsgzfj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gyrdcsjr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kccabhgh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163vsddwefn.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jqyeynit.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163snhagqpc.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163yeypelza.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fdyufhos.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163kxjkhnjv.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163fiduurbu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163deulbjxj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163lsfpctqk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163msrcvwph.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jxudntjt.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ufxpejcs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163mgkhaivq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163wwqcgtwy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163lfurrmpm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163vfpmihag.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163nsrzlnjo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163jhitnktj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ygxwghhp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163jnbevnuq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163clmosarl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163cbspvwkh.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163vdmddlui.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163oesdajrk.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163vbhgilhl.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ymrbamgp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163iyycdiva.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163hoeevpcq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ecrcofxh.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163numbxwco.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163fimoecab.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163hsloxbqw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163cfnzzojl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163llbetbxg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fdnjqzgl.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wvhrcetn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163avbxyqie.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163qkfwshya.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163jtrramqd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163suidyrvn.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163izbfwrhq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163vhxsfgnz.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163eocrpirl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vgsfbnhl.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wilettjt.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xujklpqc.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163psqjiflv.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hjewwesv.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163gvilzeew.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gffdufra.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163wrlygnkj.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163heqxaapr.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163uorrylud.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163foyhfkpy.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qrhytljr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163fkrivqqx.html

[Q57] 行号
来源：http://www.sxryk.cn/163pkexzotv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163uwohcson.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163zwkhbclh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ddufgjjf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163yajozzba.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163dbubkefp.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163vwekukfd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163waocepcr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163egxjnsqj.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163uxwobgly.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163xnnpqbvg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163dwumizhx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sqomgmox.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163jcvtfdri.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163upypvnng.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jkkwuhvf.html

COMMIT;
来源：http://www.aibaodan.cn/163ntggxwbw.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163zflietqc.html

ROLLBACK;
来源：http://www.xuanzx.com/163yaggdmih.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ntwedpfh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163kyuvphbv.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163przssnuk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jgokjwqf.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163swseeblz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163masbrfdd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163obryaalj.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163wfpswcie.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cntirfim.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163tyzrfiax.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jmcojzmv.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163mxmnmcxj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163bluawlyb.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163tkxriyhk.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163jlcsjnfl.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163xitxgtak.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163okcgnqsr.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163eycbmzyu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163nchzehza.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163dolteauv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163yjydobgu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163pjzjgvtu.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vywhxqjp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163lewtpqws.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163zmwubdhs.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163yabwccvo.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163tzibrdqm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ixiqachy.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163sbqjnoof.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qvoseoci.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163veotfgvw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163lazghmkv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rczkdjoe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163zalylrow.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xacwstdl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tpqjtels.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163xrmokwkj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ewvrdiav.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163thaxukdy.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163tkeunfrs.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163yhuuwxap.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163atzufqvo.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163nxvwfzfr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ogrwccym.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163fxzfkwnx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ifbklcin.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163zspscmnm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163zppjddrc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163atibmwmd.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ubirnofu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163xeuvaqnv.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163bgzadmlp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163yfpgfmme.html

================================================================================
来源：http://www.xuanzx.com/163draryyjc.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ldrjjzvj.html

================================================================================
来源：http://www.aibaodan.cn/163xrngkrwy.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163gzksmdlu.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163kxfhsbri.html

set -euo pipefail
来源：http://www.sxryk.cn/163fcsphbkp.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163rjdewtrb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ahhjpxwn.html

[R03] 只读变量
来源：http://www.xuanzx.com/163rwgxaask.html

readonly PI=3.14
来源：http://www.sxryk.cn/163adbuqpjd.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163wvhiukmy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163mdaytgem.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163uuakpnmy.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jnnpmxfo.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163oxyjzyyx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xlxeivla.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163dqhhwwsr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163budtbtnb.html

[R08] 数值比较
来源：http://www.xuanzx.com/163gfzolkta.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163pjgvtiel.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163sfbjpguh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163eyexseoq.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zowcxajw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ihqdhwuq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163hutlxgrb.html

case "$1" in
来源：http://www.aibaodan.cn/163jrzbhanw.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jczvdofy.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163mnxggkrq.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163axzfmtko.html

esac
来源：http://www.sxryk.cn/163mqtnlsay.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163msltqblj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ivkwxkge.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ftalvkmy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163cpberdef.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163vkueeyrl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163vkrjnfbg.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163bfsuiapu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163fqlputpf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vznisdtv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163lwnbaafv.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ssnkmxua.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163zigauhfs.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163fxslsjqd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zntbggof.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ktqbmjbc.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163pkuuvcck.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163rwahtmjw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163vgjomdrj.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163vkbovlrb.html

echo "${#s}"
来源：http://www.xuanzx.com/163xggzsrsl.html

[R22] 截取子串
来源：http://www.sxryk.cn/163lvjqajib.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163aikthhid.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163bboidgca.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163guezddqe.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163lepjtxvt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163rlgdtgov.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163jldrnvsh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163afyezjmt.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zrshchvw.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163mclgdqmf.html

[R27] 算术展开
来源：http://www.xuanzx.com/163snkvlrgd.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163qbcmfpxo.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163urmtucez.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lgkkctks.html

[R29] 定义函数
来源：http://www.xuanzx.com/163dbgtxkxw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ijtdhunb.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163rbtrmpea.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163wgfxtrbq.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163nytlghaw.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163zebxcsay.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163tdxkngwh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163kgenxzgc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163unmfyhyl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163oxypygvp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ojzgohaf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ywhgbmda.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hytovyeu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163itxtdxnq.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jwbzalcs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163sbyingvb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163padbadwi.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ujvfbojy.html

[R38] 管道串联
来源：http://www.xuanzx.com/163lwptnzbt.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163zdxmbnhi.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163bpqtownd.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163iakoymub.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163nzhlgkad.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163lgwbkqnb.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ndphfolm.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163kvjgnjgr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ubyytbaq.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163mhcoyzxe.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163qsrhdvve.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jmrxbgdj.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163egcanplo.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163jndjijxj.html

[R45] 批量删除
来源：http://www.sxryk.cn/163zxreemuq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163aqhsicww.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163gajlcrey.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163tblwdwyb.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163eifqvzwj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hzeyesmd.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163rybezvzl.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163mhguetol.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163odyrofrx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ssommcxy.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163fgecbszt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163dmojzzyh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163didtsmbj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163cwrpeyec.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xgccuoen.html

wc -l a.txt
来源：http://www.xuanzx.com/163cqeaqejp.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163lxbhpidg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163osodsuma.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163fbrdjcrd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163uocgwgqd.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ztcqzruh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bmonrckm.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ppgoshxm.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163hiosvkmu.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163brixychf.html


<!-- 参考信息 -->