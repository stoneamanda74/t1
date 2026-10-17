外链999!wailian999！

CREATE TABLE users (
来源：http://www.sxryk.cn/163cvevpsjm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163urczebpt.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163eykgdtta.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163lyvmataz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163qveqrqhw.html

);
来源：http://www.sxryk.cn/163qbjfargb.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wiytbbkm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163skinezwi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mqygsddy.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163yevxykrc.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163iofaxcsm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163qlhuojaj.html

);
来源：http://www.aibaodan.cn/163plptwaec.html

[Q03] 增加列
来源：http://www.xuanzx.com/163fmawvnpx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163jxcrebiz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163abkqbdxv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vmkteoef.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163zkbfnqwf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163asoqvivd.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ucdkklld.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163fwczmhgs.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163nhvamcau.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163iedsuyxr.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ruhkxbpt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ujqnrbae.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163rfuevvtq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163bhihblja.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163bpyotaup.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nefhdfoc.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ydjnjvyz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163thxjtheb.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163snbuiyrd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xtaqqwpd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ossktxhk.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wathfkwr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163kffqppdf.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163wzlltkoy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ivfeikti.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163rbontzll.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163sskprznn.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163yjcuiily.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163myrhnnph.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163axntekov.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hpgngsye.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163wozpefsr.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ircrbsvp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163nuixlccj.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163rehwwisc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hjhgymhh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163xatlcabe.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163smcfujtx.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163eydiuocm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163cmugnaij.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ovtsezqe.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163lnjmxcmp.html

[Q23] 分页
来源：http://www.xuanzx.com/163tjzdpbhh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163wfnouolj.html

[Q24] 去重
来源：http://www.xuanzx.com/163ybzoxgqx.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ajmrkuyd.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ckpmtjbp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163eemeratr.html

[Q26] 计数
来源：http://www.aibaodan.cn/163brbuyylz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163eilqvtdr.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zbfcylle.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163yiawwbec.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ojndmmhv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ceezwfdg.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163peudtwus.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163fnavohfc.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163cfmrjiqr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tmwwcdsi.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163scmelajj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163mrqpijow.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163rtarfjsq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rriyizyu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163dlwjmpml.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163efplqotk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163kxrympjt.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163xaqgxeta.html

SELECT * FROM (
来源：http://www.xuanzx.com/163hstfkufr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163sbwpkwok.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163leawahyt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163stbntoik.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pfmgvocd.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163jnkvwfiu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163fgfhnqai.html

[Q37] 右连接
来源：http://www.sxryk.cn/163nihjcrvn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163iprvimrj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163wtruifdg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163bysnoahu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xejsxhtd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163mbqhjrko.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163dmnmbekj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163rxlzkyxj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163tvblpjyp.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mqmyykdc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163njsmhwdn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ddlxkxsn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163wxhbeiqo.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163oubcnidv.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163yflxvdqg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ofszjibg.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163qyqbfqfn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163yfdxtcpf.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163hmsavzgp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163fwnjheac.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dqasvmss.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fiefuzqz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163eybeeqby.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163uouiihpq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ccdpcyhz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163aodyxefa.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163utxqzvlt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163osvbgqtt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163defwietx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dloybijx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163gqzsixto.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ggamadvv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163uqethxcs.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163chtjuqvz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163zewuqozx.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163qemaeysa.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hgzlgdtj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163uayxgrpf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163oqeazobz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163earlbpmz.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163sngfddxg.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163jgcnwxda.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ylwfgcbz.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163kkktqpig.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163pnrwxgfj.html

[Q57] 行号
来源：http://www.xuanzx.com/163qjcqqjxj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163sfugqxut.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163suhhofhs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163dkqgzzwl.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163lzymtclu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163evylwxva.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hsutoftb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163txiiwnyl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163fidhatfd.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163lojujuoj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163bhputiaa.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163aehszigp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163soeshqct.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163lwfhylyz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163youvqrhy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163jrnjzmit.html

COMMIT;
来源：http://www.sxryk.cn/163krheylfu.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ieyqmdka.html

ROLLBACK;
来源：http://www.sxryk.cn/163kmotbegb.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163mdobrike.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163tfptfopn.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ujxaansu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163yigmrauk.html

[Q68] 保存点
来源：http://www.xuanzx.com/163fwhbbqqh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163famxnmty.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vwcyjrxx.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163stuvyzle.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163usjjqjga.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mtkrbxfu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163lweobqbi.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163hxkwmxqa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163tszgylmq.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163lbinytny.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hnjmdygu.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163svuwgvzu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163igzsdiww.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163adekoouf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mwnbzygd.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163htuaiwlf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163fayvxeqn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dfqzupui.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163rqharvyb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vubybqxd.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163tdojxdpn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163kbfeksss.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163dvowupxq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163menrxqoo.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yiyxiqyo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163nodfcdjz.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163romqdpwm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163pinqyifh.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ognliift.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ppxcqvsq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163msylvmbl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wfgraccg.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163dfzwfiwl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163spvgxhdl.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163kuqshmty.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ohbmpqwa.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163pfmayoin.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163jtguuzop.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163lkyrzeep.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163smxqrwip.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163wzvkpmtq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ooiqsnia.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163utisayxw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163nafkegle.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163dtjcxymy.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lbfsoeqa.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ndvpuadx.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wgwlxmzh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163uxlmgmtj.html

================================================================================
来源：http://www.aibaodan.cn/163xvymlfnp.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wiisfcmq.html

================================================================================
来源：http://www.sxryk.cn/163mtkjnezc.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163glvyfckp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163vbeshhtk.html

set -euo pipefail
来源：http://www.aibaodan.cn/163yimsnrmt.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163dutiqfcy.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163xlcgewjl.html

[R03] 只读变量
来源：http://www.sxryk.cn/163irvrerxr.html

readonly PI=3.14
来源：http://www.xuanzx.com/163mulungpm.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163aanwrntp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163rdspswhh.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163cpigkkfb.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wsqbpbjh.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jpwpsznx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163chxfhopu.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163euzrcdyi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xhljeger.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163katkytlv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jwussbmv.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163xcuqrzzq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163aritrnrp.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163sqratunq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163dpgojfih.html

[R11] case 多分支
来源：http://www.xuanzx.com/163embamdpf.html

case "$1" in
来源：http://www.aibaodan.cn/163oyzwzgyz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mtapkyyx.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rubxxhuq.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163natgbtsb.html

esac
来源：http://www.aibaodan.cn/163ebujccph.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163sznkkoet.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163gdjyeben.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163zbnzcbrk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163qlfqbeey.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163weunvnmf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163chlqusdt.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163pxuphpcb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pwqmruyq.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163sytschih.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163arqirgpl.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163udjtehyh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xwxkouxn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163pmdlantp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163midfgzyz.html

[R19] 数组长度
来源：http://www.xuanzx.com/163atzkdfyq.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ixwaxitl.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hvnykvja.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163vwpwbixu.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163tmmqyvdv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163fxnycccf.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ffvqlouy.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163zgkdaduc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163fnubobhz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163zgdotcwp.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qadyjysw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163kknhwghq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163wnqlawzz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fpfgilnw.html

[R26] 命令替换
来源：http://www.sxryk.cn/163eomrgrcx.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163nfwcxosj.html

[R27] 算术展开
来源：http://www.xuanzx.com/163tzoxpbow.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vwsgunpx.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zzxpfmem.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mbzqorwf.html

[R29] 定义函数
来源：http://www.sxryk.cn/163vwzuwejm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wcarzgua.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163hpxagjzo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163jcapllxg.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zfumqxvn.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ggdrblzv.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163cbpcbndo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163siqvcbib.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163qquxvazf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qfeuvows.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163swmkrvjj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163sitvoqzb.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xbqpvyiq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163hqmpmypa.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163gbuirzgz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163cvewuzbx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163xgnyddmh.html

files=$(ls -1)
来源：http://www.xuanzx.com/163moitdpyx.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bnmepnal.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dwvodrqh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163wzrgabwe.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163kibawrst.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163iapjzlvy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163qyddwhha.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163sixvhnyz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163bolwqfmk.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163loasjhmu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163hpkaxwbq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163phmiowys.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163zubksoow.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163dyxnfmiy.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163pbwiytew.html

[R45] 批量删除
来源：http://www.sxryk.cn/163itsjgcxd.html


<!-- 参考信息 -->