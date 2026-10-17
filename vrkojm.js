外链999!wailian999！

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163fxrsjgzj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163qhbewkoq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163siuttiez.html

[Q06] 删除列
来源：http://www.xuanzx.com/163fijxdogu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163iojslsad.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163dyiocake.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163glafckil.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163bictzxxx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163nyoxdnqp.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163glrvltig.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163wzzznqht.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163heeblgfo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163hmwyzpgl.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163iwlxylhm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pivsdyqx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163qolvymxo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ewhafwtj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163xswxnufe.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ygwtnzus.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163qqbyqeqz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163pnbsfikc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163pbiiwjcp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163czgokyon.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163pqkpmocl.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163puvkalsj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bkrorwva.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163urkheyfa.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163pkqmzled.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163kloqmuxl.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163okmyiypg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163gzuntjwr.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163cczgdrow.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163jswvfcrj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163cbtdfniy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163gnrfzcwi.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163niqvuzjo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163zxunyluz.html

[Q22] 排序
来源：http://www.sxryk.cn/163mvujdqfu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163bhrcwzom.html

[Q23] 分页
来源：http://www.xuanzx.com/163bhjxmhlz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163xskquaym.html

[Q24] 去重
来源：http://www.sxryk.cn/163yvezepln.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pfquyewg.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163znorvrbb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163utohends.html

[Q26] 计数
来源：http://www.aibaodan.cn/163sapcgiuv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163dvtydmrk.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163pdmrjrmk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xihfjyut.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163lwstwbkx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163jytunngz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163fhumnrke.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kjgbywql.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163eiajleep.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xqjqigwu.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163tjevkszo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163tpwzcyog.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163lwnjnrnf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163luhlkwna.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163nghwsays.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163gmtqtxsc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163cchjfhgg.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163faqkdmwb.html

SELECT * FROM (
来源：http://www.xuanzx.com/163lzmakymg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163xlpkxaxf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hivnmedy.html

[Q35] 内连接
来源：http://www.sxryk.cn/163iuqyzukf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163efbjgtnh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vgqrfwwd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163arlynkds.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tibxutlb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163fmnbbddv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163vostynjy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163nvruatlz.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163mwhxwypz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163dfgngpxt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163iftqajpj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163hkvazqfv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163tkyoyyfg.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tipgijhi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163tojvgism.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163liebbple.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163jrvrvuvj.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163etodnhkt.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vbuqzkus.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163pkmlhdqk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wunpwasq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163rntaqkzi.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163nfzaavhq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163rypyxjxd.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163lypqgrrp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163somfcptd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163qmfmueel.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rhmeqxjn.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ciiuvsba.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163vcqliumu.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163bchdyqgx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hlarmxrt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ivisozeu.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ivtqmwtk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vvjpwbpy.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163hqgtaebd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vbpnydir.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163vdwiaoez.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163yiyyfsmt.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163pcloztvu.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163eablqcin.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163qqoensky.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163izntlvhr.html

[Q54] 清空表
来源：http://www.sxryk.cn/163hpnijpzy.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163pxhzkaqy.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ruloiyho.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163adykyxtt.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ubzjowyv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163qhftpwqo.html

[Q57] 行号
来源：http://www.xuanzx.com/163laijycie.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163oxtzjjbw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163vmarhtii.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ssiqayby.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163eleawqds.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163uoeqwoxq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163wqmzfakq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163iyogxokc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ngyponth.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163grvzzdul.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163jlkfneou.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163owdntfsj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fnublbfb.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163zyisgqoy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163cunvovut.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163abtmtore.html

COMMIT;
来源：http://www.aibaodan.cn/163ozkznwwj.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163dzqvptli.html

ROLLBACK;
来源：http://www.sxryk.cn/163jjektfve.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163agwueevb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yjniosfm.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163syjtvcpz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163grxsltww.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ejyqmuul.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163tyqeptol.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vhtmksok.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ddfajgsn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163nvlpmydm.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163khaniawh.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163uuvykolx.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163uqngzxov.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163smcthmfi.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163mguktiir.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163iuuqufud.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163elsijadj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163wokdqqhk.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163vvozcbef.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163pijvfmdh.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163gspqddck.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163qdhgndlv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163tbjbnocs.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163tuhhvfwp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163czvxjokp.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163dcqouhpe.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163teyrfzie.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163szecnuls.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163whjuiqhj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163avueltge.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163gtidshei.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vmdwtspz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163tgbxfhkk.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163sryfmrnp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163nkldgzgz.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163kirwubze.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lsrsbpry.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163rjpnhjfp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163jymqfwla.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163fymbmrll.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163fsctlkzq.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163hcebnzsd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163zlyphmdq.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163nxyycxwb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163aclutipk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mrdythbm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jonyvtzi.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163betashmh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163hiziwtsy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163jxahmyzw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ufqzcyga.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163zmqlbnhn.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163swnbfpsh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163lozrhxdl.html

================================================================================
来源：http://www.sxryk.cn/163emgdpwhq.html

R. Bash 专题
来源：http://www.xuanzx.com/163cuxfieex.html

================================================================================
来源：http://www.xuanzx.com/163xhfamxnc.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163wlbpyryk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163hbdhskhb.html

set -euo pipefail
来源：http://www.xuanzx.com/163fnvgpblh.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163pkpstrux.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163eoqgjwhc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jeodotnz.html

readonly PI=3.14
来源：http://www.sxryk.cn/163xzjyfpdm.html

[R04] 位置参数
来源：http://www.xuanzx.com/163cktjgijn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ozlmhdhd.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163zrkrkolz.html

name="${1:-default}"
来源：http://www.xuanzx.com/163drcdnxdo.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163gwmbfebq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163hnywniry.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163aqbyoqom.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163btictnqo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163uelvszfw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163xuqucszk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163vrdzulkn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gfwhtvoq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163lyxsxgpl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163kkrejygu.html

[R11] case 多分支
来源：http://www.sxryk.cn/163xzwqxeia.html

case "$1" in
来源：http://www.sxryk.cn/163syjdumws.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163zkjklwbe.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163tpjsxsca.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hojqzyfm.html

esac
来源：http://www.xuanzx.com/163jtskacil.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163gyfjavuv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163cuehubbo.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163axduaofy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163sdhzlqme.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xehgofva.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163cljlhysm.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163acrjpuky.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ghxqwowr.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163urwhqanb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ydmdvqrp.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163tnldlxww.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163mkxylzlf.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163couasjvy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163xzvykelf.html

[R19] 数组长度
来源：http://www.sxryk.cn/163xxmtzqey.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kgxlugyx.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163zwtkxfgb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163wraxtmqm.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163yibvjkef.html

echo "${#s}"
来源：http://www.aibaodan.cn/163uwpnabfs.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ixsurdzf.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163slcothmg.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163nxfxpekk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163mowmuqqj.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qunfkzax.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qezelqot.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163fnsnvgho.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163iphpyyhk.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ypbdmhba.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163bzpkrczl.html

[R27] 算术展开
来源：http://www.xuanzx.com/163amgmexvv.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163gctxcduv.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163eqdbqoyn.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tlttkefv.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163tdtsmfmt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163snrlxjxb.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163pouaellg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ygmyvucj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163gukizvmu.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163krbshvzo.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163tqzvgfcs.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163jegsitps.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ayaxlazg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xerbfglv.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163iwqwgthy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rfoygegh.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163bdyqfjws.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qegwolpw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163wkgwgmjs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rhlscqsd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vxzuccbl.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wlukpzur.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163atomfwxw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dgqifmmp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163wvjckxyv.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pxdxrxhp.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163skqhgyfd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lqfhbwnj.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nibmjmey.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163yzdgsqpj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163jvoejyib.html

wc -l < a.txt
来源：http://www.sxryk.cn/163zxkjcack.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163dltpscqr.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163dntmcjjf.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qjoahdmz.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163uwbcjstj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163tnpdbcli.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qenskcds.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zglehknc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163onkixela.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163odnyniho.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163iyqqeboe.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163njvfagga.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ynvouesr.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163iawiugjr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163rhmcfnzh.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qwpkkyeb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163yrgcojdh.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163yxdlquoj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zbdkaqbj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163yjvyabqo.html

wc -l a.txt
来源：http://www.sxryk.cn/163bpfptkdv.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163xtlzzzqs.html


<!-- 参考信息 -->