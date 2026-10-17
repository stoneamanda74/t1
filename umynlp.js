外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163krkazvrj.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163kmysflvb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163bowqttun.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163oqmxovxu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163enqnhfsp.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gimbmthl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163sylrcrth.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ncjlxeyk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163fwqkekmz.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163sjwlscji.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163vfgarmdp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ktaqjtzq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163vlvyxquh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163dkmqsdmt.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163bhxisyaf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163qbsnwycv.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163eypcnjje.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jvzcbkre.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wduxswvs.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163jwresuwd.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163msrbzvyi.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163tpjrxmfv.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xwzhidqa.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163egdmzqcy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163sqsvpcpc.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mekxqkpj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mzbdejif.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163mmhmiprh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163gixiiwai.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163yvpjvrvv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163hzhpxkzd.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ushsjhdw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163bgrxitkh.html

[Q22] 排序
来源：http://www.xuanzx.com/163tcnynmbt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163lqitfemh.html

[Q23] 分页
来源：http://www.aibaodan.cn/163gztxuwzz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163kfdxxmgq.html

[Q24] 去重
来源：http://www.xuanzx.com/163wahmojaf.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163rccbhphr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163cmbccvzn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163fnbobdgs.html

[Q26] 计数
来源：http://www.xuanzx.com/163lbtaguap.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163tavwdezy.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163teksehiy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ztbpyugb.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163tbsifsfl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163rymzmofo.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163uqfmkjbb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163accadxmf.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163lbljiygk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vynfzfav.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163vmdowdsr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163zqilorqk.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vfefrdqo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pjhsyodc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163evnnkxnd.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163czjzzluv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163wlsmuyuc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163gscdiirr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ufnowqzm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163swccnoab.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163jzfiwodc.html

[Q35] 内连接
来源：http://www.sxryk.cn/163hvtftnco.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fxzoukui.html

[Q36] 左连接
来源：http://www.xuanzx.com/163nkccxmms.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163aikhfndz.html

[Q37] 右连接
来源：http://www.sxryk.cn/163hxtptorf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163vinghwqw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163sawktskh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163khwtlnzh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163bgjvjhxd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163twrlsnpw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163clcpyuvo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163leeyneos.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163kuvfualm.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ngpmatff.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ngmcqdcf.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163umznzzen.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163zyuduqak.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wzvwnolp.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163uthfjzod.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163lndjahks.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163iuxoaqwx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163odcughty.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163nhpzjrst.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163cutjbaud.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163yyqbbhrr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pdiwvkgz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163hvxfpicb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hzoqnjyk.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ivaxwzvr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163mguwbvdg.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jlpthbkp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163blqewfir.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163uzrcwumc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163sjspiqfj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163litldfda.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163pqviyqzn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163wilrsjsq.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163weapdidr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ukmldnmi.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ssxtvugh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163iwvyagyv.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163uoixugpq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xmuqwoew.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163srnapcvz.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163tiutnhqw.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163iocchxbk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163keljempl.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163tsvpwlnx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163aexlttof.html

[Q57] 行号
来源：http://www.xuanzx.com/163gyzpjcmq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163nbrbwgtw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163bikmibrg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163gayjtvov.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163owurpknm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zaksatcg.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163uimkosxe.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163nqpzuqwa.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hjgehwpm.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rulyxwzb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163hugovrgl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163murzrfsz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yrxftaww.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163dcruyqsn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163xbfdxwsh.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163wquivrvm.html

COMMIT;
来源：http://www.aibaodan.cn/163qeupdefs.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163huzzjgsp.html

ROLLBACK;
来源：http://www.aibaodan.cn/163natzbtmr.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163iysgytrn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163xaaqhvtu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163hdlpwhcb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163qdlsdpkf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163aooxzohf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163envieblp.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163lnieakwr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163vvwqycdi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163lscisxds.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163izkegboz.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163jkmpnmok.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163kfmtplup.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163bzfsfznf.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163qddswjwm.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163tpgtlyos.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xircihcw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163sbprtvgf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163hytzryrg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163rpaillyc.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jeoamjbt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163grramaoc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163bnwvmvpz.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163bjrlecjn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163tibjhxma.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163lxqxlbkk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163bnypnpqx.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163keffjthx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163lxlkzrht.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163eyxbnegy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163pdzischk.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hqzplccv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163bquytxge.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rwfsbgfa.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163prtllqtx.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163seabvsml.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163mrdrhrbo.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ppgmsagq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163jzhmuglg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163wkhsiahi.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163idzineqg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ptvbavuu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ambowxtn.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163lrnnvomj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163qojrxmhc.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163felgeymn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163wwgcamrt.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163mcfcxigu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163itrswgqb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ukjchdop.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ujtlocjf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163fjxteutl.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ejzioxxx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163qboiumif.html

================================================================================
来源：http://www.sxryk.cn/163yrsvilcp.html

R. Bash 专题
来源：http://www.aibaodan.cn/163igfvhque.html

================================================================================
来源：http://www.aibaodan.cn/163evsajioa.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163csdfdxia.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163nkcswoqr.html

set -euo pipefail
来源：http://www.xuanzx.com/163hwadxxnj.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wnphcogc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163duujpqdh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163xdfrwiyr.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dcduhgca.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jljslnyt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163zrghaqza.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163mxodqwhl.html

name="${1:-default}"
来源：http://www.xuanzx.com/163zhsnxdox.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163xkbkjbzf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163clslageu.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kkvtjipw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mcaazkvs.html

[R08] 数值比较
来源：http://www.sxryk.cn/163fdktoaxo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163fhsrqhit.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163zhgvfouv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163kafemwkq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qderxyje.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163kbthmiwh.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qwcjgapf.html

case "$1" in
来源：http://www.aibaodan.cn/163lmtrjamp.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zjvhomkv.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163nwkvesqx.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xubfevvx.html

esac
来源：http://www.xuanzx.com/163hurgghaz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163caqttjdm.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163aewzhvlr.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163vxvottnu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163lcycincj.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163eibgxzqb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163wqwghiqx.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163pjymqrzm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163rfzfdgrf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163dydjrawc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163eboitmog.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xdbqvhch.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ryifacny.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qrwrgnbt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hfjdbdhh.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xzdhmgor.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163oimbdtyc.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163mqiovgtw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163eyckzcfd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ruhkuktg.html

echo "${#s}"
来源：http://www.sxryk.cn/163rogmtcmv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qdlrojjz.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163gqtmtfgm.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ycfyzvuh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163edqadlfc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hjvcvjko.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163yysibdpv.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ijdwcvwr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163frpzkubl.html

[R26] 命令替换
来源：http://www.sxryk.cn/163cbnihkxi.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163odiudwqe.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163cdrmxtik.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163gqclbmjf.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bpivutru.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qefzbmjh.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163vammmdyh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163oiibytxd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163gjcabsyo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163nsnfizqi.html

[R31] 局部变量
来源：http://www.xuanzx.com/163xpwshjjf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163znsmqfiz.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163unyzdfms.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163jbxjyczv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163hflzjapf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163gdqiazhe.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163agntexnq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bzicdnmj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163uxfuqkgc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163kmpjryxo.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jxadypbj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163phsjjabm.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163shcvyfmu.html

files=$(ls -1)
来源：http://www.xuanzx.com/163urdqjsee.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163lidaymax.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163hjvitqxv.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qdspjrzh.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163zokgspjn.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163kssezood.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163szoexssa.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163wezknczj.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wyjyaihr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ftxrsvyf.html

wc -l < a.txt
来源：http://www.sxryk.cn/163uwsssjlx.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163zaxmanih.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163uwsbccwo.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163xlgfahye.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163wipggxxk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xbkjokvb.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lgkzxpbd.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163pvwzhjyn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163jibmuyea.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163yqppahyk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ajalilye.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163vacuyfgp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bymhjjej.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163fnrpriru.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qqrkmvvv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163joxliyfr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163yakrunxf.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163prleppcr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163xtkmadyp.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163tdtlxgyz.html

wc -l a.txt
来源：http://www.aibaodan.cn/163crscerab.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lemlmpzn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163jtmehlxt.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163bbfxmyeb.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163lrfegwly.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qsytiaov.html


<!-- 参考信息 -->