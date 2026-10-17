外链999!wailian999！

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kpygxdxh.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163mjvyrtoq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163dszubvdu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ztgaghqg.html

);
来源：http://www.sxryk.cn/163vmduchbz.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ijdsbgcc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163gptnysvy.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163lberowuh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163phsboley.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163cdgonvza.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163mqbttcwz.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163atrfudpe.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163uvneogxj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163zqrjcspr.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zyjeybsg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163uyvwuoqd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163hyzoaqwy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163xelplyyc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163lejjiinl.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163sfpfofzw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163syvgxnqx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163fqomhupa.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163biweolzf.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163anyxyfzi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dotinuwg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163bnomshuz.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163gouztdte.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163nuumxfdz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163yvrkbirg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163rrpfmvzw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163dblhalfv.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163apqrjrix.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163eztdyiyy.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163izhudwqx.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ujgopaef.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163opydhjog.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163abqfteov.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163fhjhrmdk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qufgoumr.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163lceblmfg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163acdlgrvr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163mhvgcswt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ckpeakpk.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163rbgrfvim.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163dgnafirl.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fykeudle.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163sttlxvwt.html

[Q23] 分页
来源：http://www.sxryk.cn/163qbujvhah.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163coqzpcok.html

[Q24] 去重
来源：http://www.aibaodan.cn/163kiyifjbw.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xbtruxcz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163lvcpbxzu.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163dzaonbgq.html

[Q26] 计数
来源：http://www.xuanzx.com/163kzjcgepu.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163odqmejta.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qmqdqbmj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163lktowvch.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163yzhuyavy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163trmulvra.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qxtqmgpz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163zakrfkyp.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163mdhvobmy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tfqdazfu.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ifqdroyp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163uurpiyxe.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gwvylyqe.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163epowzvjn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163tvzdumgo.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dmveqdwz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163hddfmabg.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gxkvdsyt.html

SELECT * FROM (
来源：http://www.xuanzx.com/163mcrlmkfq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vzwqdavg.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163qxycemxa.html

[Q35] 内连接
来源：http://www.xuanzx.com/163qgfgfcsb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ppwlnbou.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163lpzzyavk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rnbiobsz.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163bllyzvdb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hwoxrkbi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163piimmbfs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163npevumqs.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qidgwonk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163lthmqpjl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163wbsxfquy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163avmfuzpr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ctdrtlju.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163xqlepdti.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163esmvyhrc.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163vzuhsvjt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163wcmjtzvj.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ygizfblf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163bmotxudb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ygxrikfa.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163xpahxswn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163xtakosxi.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jcnfmngf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163tzehdrnw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163acvarewz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ubcdutzb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163qfcuxdte.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tufxrrof.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163zoduuzzc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cpneejiz.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163wptbdipn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163hgyfeiyj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163erzqqilo.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163zyulvria.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163jqdgdbms.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163tenywpuz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163cichdjub.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163jpgtridd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163toymaiym.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dpkorjcp.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163szwyhqeb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fryovsgt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ljorxtim.html

[Q54] 清空表
来源：http://www.xuanzx.com/163alprxbgy.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ucupugwx.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163aueqnjvo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163gpztrevy.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163wcfnerqz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163fnqdxszo.html

[Q57] 行号
来源：http://www.xuanzx.com/163zwnzzgws.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163jqkssuna.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qpbmflxz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163spljhaxg.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163cysetcqj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163enuiyjjw.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163elwwgrpa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hsdepeoc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163idgnjggg.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163hyenvzau.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163cmiibplh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163xpfftzzu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qxqoyckt.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163nnljqrur.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163qwdvfqxj.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163jnakytai.html

COMMIT;
来源：http://www.xuanzx.com/163jikqorlt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163njevigfz.html

ROLLBACK;
来源：http://www.aibaodan.cn/163fvthlwjd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163bjgwwbyu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ogponken.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163kezqavji.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163pzjmxula.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ucgetcgr.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lbceltcj.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ztfmcmeo.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163tbqvgwwk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163fnmgxutc.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163rzhzqimi.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163lqhagxup.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163iyubedtv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163zlldsczq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163obruncbc.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ilirefol.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163mimrrvdl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163oljwtdai.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ujdnktab.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163savzpwyq.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163crngwoca.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163kwfhzsax.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163mcxkimyf.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163rzgbusxo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163biklkinf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qscqtpzg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zqmqapyr.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163imwlwaxh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163acdvftfx.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163qrgvbexs.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163pdzfeaxl.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163vudwputm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163bhxfuodu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rtemqjnc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163spsujlfq.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163czicgybm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163vwnshbhx.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163vgusviow.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163sjwvqzzg.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mnyqfxfd.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ffakydgx.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163sdxvongm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rwcvfypi.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163fwielwxn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163psdrzdna.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163uvpaxglx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163oqlqozgr.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ykecbeey.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163dklfprjn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163wdjynsoy.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ahogvupd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163syuwyeca.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163tovgtkws.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163jxdzlbje.html

================================================================================
来源：http://www.aibaodan.cn/163fymdnnoa.html

R. Bash 专题
来源：http://www.xuanzx.com/163linidaey.html

================================================================================
来源：http://www.sxryk.cn/163mzgklevq.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163zxsklofl.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jwlodcqc.html

set -euo pipefail
来源：http://www.sxryk.cn/163yyafewtd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163julalfzk.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163mwpfgwkm.html

[R03] 只读变量
来源：http://www.xuanzx.com/163nesffugl.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gzhmddks.html

[R04] 位置参数
来源：http://www.xuanzx.com/163wvrbnpie.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163txqbuodl.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163pimadnvx.html

name="${1:-default}"
来源：http://www.sxryk.cn/163yhyikhaj.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ahdohegg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163yackjyiv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163czsxssbt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163lwkladjp.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xrjfahqj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163vomltnko.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163llllgtlt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163rzwjcxhy.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163wthxylop.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163icjjaccr.html

[R11] case 多分支
来源：http://www.xuanzx.com/163wnqocfwt.html

case "$1" in
来源：http://www.xuanzx.com/163plwsywmh.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163orkuqjkb.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163fjskczag.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163sgceecpi.html

esac
来源：http://www.sxryk.cn/163jvzfrgqp.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163gusuwcsq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vejmlzzx.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163pucbtnuu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163hczljktk.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qwrmlamq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163yqrdkkri.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163nhqcqjlj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163yeomocxs.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rbxipkms.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163swgxedfu.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163psyjexoy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163nchgfxtu.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163cgipgetq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163psbdumhz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163xkrephga.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163gduazuxj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wfwnzhju.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163yzrujqbu.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163utjpyyxb.html

echo "${#s}"
来源：http://www.sxryk.cn/163chqzazqz.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ugkpwlnd.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163vhjbowtc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163fkvcydly.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tjjqwocc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163osupfeym.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163izedvnej.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163sdkbarrn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ywwgutqj.html

[R26] 命令替换
来源：http://www.sxryk.cn/163zzgamcfj.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163tgmauwsk.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ycyslwbh.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163rxjimhmj.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163xjmqvzuc.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163dbqvmwft.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bocnpmmm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163omkicmwe.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163lbvrzhmd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jfldxjgi.html

[R31] 局部变量
来源：http://www.xuanzx.com/163zcstwhdl.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163bmffaxjy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163gunnvwtm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163fldnxhhp.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nkjubgfc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163vvxmgoii.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qwdoxrns.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cswuqjao.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163segbwaam.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163qklnwgew.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163yfgglmjc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163iksctgdn.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163sorwlcby.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163uxqsiccl.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xrhnyivc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wjqnxcew.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163lgtcpfwk.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163iiuqldpi.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163imdtticn.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qtdlzqtf.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ibkwwubq.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163bgmmxdrk.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163tifgkvnh.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lfqldaaj.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163uibwgvat.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163snbrgpyb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163szrjfemp.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163rxdfgouc.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163bxkizmcl.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163sroekpew.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163eojvtfob.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qhndncqg.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jthkvlio.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163hzkyqtik.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ajwfnukq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163mhhqgtzz.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163olricmko.html


<!-- 参考信息 -->