外链999!wailian999！

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163liquuwyt.html

);
来源：http://www.xuanzx.com/163atqoffmw.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hprlqlhp.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163oautkdob.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rnjkxpuc.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163zygcgcoo.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163edneogkl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163xyczxcol.html

);
来源：http://www.sxryk.cn/163puusfpkl.html

[Q03] 增加列
来源：http://www.xuanzx.com/163retiktpd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163qdiwizzj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163dvnivapr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163paslpnrz.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zzzbufjk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163mbijvhoz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163wtebmzab.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ndamgarn.html

[Q07] 删除表
来源：http://www.xuanzx.com/163mpldexdz.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163vamlmkzc.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163wlqjruju.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163uordbcrc.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163wsslqzqz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163edbwqcxw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163pmmxasyi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ftewzrtn.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lggtgsvu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163wyrcbdmg.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163suzhjemr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163pkbnszwo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163xsfzmcqg.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163gzhktcxk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163qmgqszsq.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fgkzlwyb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163znruwyze.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ryaxnirs.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163urufqfcf.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163gxciroeg.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163uyfqedxi.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163eziizggh.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163koufzqbt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163nvtnoutz.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163whlqwnsa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163unxxyduj.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163aifhoseu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163blezahar.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163oooxozye.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163fcogwyrq.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163uplidukx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163zvgvhhwx.html

[Q22] 排序
来源：http://www.sxryk.cn/163kjbvewpg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163fjdqsprp.html

[Q23] 分页
来源：http://www.xuanzx.com/163yfpsoere.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163qmshrqog.html

[Q24] 去重
来源：http://www.sxryk.cn/163yxhginzw.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163akibxosb.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163umdlzfsm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163tgodvpgu.html

[Q26] 计数
来源：http://www.aibaodan.cn/163yfahpskt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163vnbfjlvb.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163rpgkveqx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rcvlikjp.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163xdvpbmaw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lelweujr.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163emwlkmlq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163fnaainlc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163dhpxsdtw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dvyymafg.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163geywgejm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ymyahfaw.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163xbbwjlcj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wpgmccga.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163pdowezqo.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163afimunfo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163dhxzohov.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163pmbjshio.html

SELECT * FROM (
来源：http://www.xuanzx.com/163toopvulv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163fzotrsey.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163odzzvolu.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163gymuztoa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gfdjnoww.html

[Q36] 左连接
来源：http://www.sxryk.cn/163dlbnysvm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163eirnzcjs.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163avdwfvwv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ychxysvc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163pgaeugtw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163bbtzogly.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163lynwckiw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163morkrgms.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163nzspmqlq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163wucbjgoc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ziesmgcv.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163xbzyucdm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163nzbgvduz.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163mezsehkp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163xpifsfna.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ywhyfsao.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163tncgungx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163nsoehtrd.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rkfuswko.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hpflspom.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163stevrhgu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bnuwlkvn.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ecsdthhx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dmljdwvn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163yymiskwa.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163abehnokq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163sbrpowwt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163lqcykwbn.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163hpolhxmf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163egtcpsjv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163nrnmcdto.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163woirbmgf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163bzjamgtd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ohqgeauo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ciqzoezv.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163wdbaanaa.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xbrphwbn.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hbfhpzul.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163agejdris.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163kbtapyzr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163lgxdtner.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qtnhbfgu.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163apjbboug.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163lksfqyek.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zvblvrhi.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ciuqkljs.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163tlokotrz.html

[Q57] 行号
来源：http://www.sxryk.cn/163hffndcim.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rukmvutc.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zhoylbhd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qqguujpr.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163awwvsbmp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163dstpgqpt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163yhfqgann.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163oppfdmuf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163pfstnzku.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163wbusdcnr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ymwrsswj.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qyqwimwr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163podrjydl.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163oboxhcvl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163dprgevzx.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163qeimkjrb.html

COMMIT;
来源：http://www.aibaodan.cn/163mweaylvj.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163yeoeuyxz.html

ROLLBACK;
来源：http://www.xuanzx.com/163vyfqulxp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163mtkgaqqk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163iaiobynb.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163zjcfayrr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163oauzkqwt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163eywgybhf.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163awmxeqyw.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163bimbdchs.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qdsupjet.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hdfoezpi.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163khfppfkr.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fncppvzc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ubslaons.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163rslasvpw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163zhtqpiir.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163onaudtym.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163owgxxhfs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163xmxrsstp.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163odsgczll.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ouvhomwd.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163bgnkqsyv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163rbamtbuz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163eizndbtl.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163vyyycuyb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ixxgnuwi.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163flojsyhj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163kwogcfuf.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163rauwugcj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163jbesgveq.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163uienvclx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163jatlzyge.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163gwzmyvxz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ewhhbwhl.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ptxhvsnj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gjpwpyfq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163fmkkixxl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pvhrnwco.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163mrhllrzr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163uqqnozui.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ljnfcupw.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163cjxhnznm.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zqlrvlfz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163shjxhbte.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163yozggusf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zokmzwgq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ludzaagy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gldvfcts.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163vkifhooz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163iwybgitf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163tcuuackz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lyvancwy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163nbtzybne.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163gxhkfbxh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163bmuescex.html

================================================================================
来源：http://www.aibaodan.cn/163rpdubtel.html

R. Bash 专题
来源：http://www.sxryk.cn/163sdfqxcfc.html

================================================================================
来源：http://www.sxryk.cn/163hevnxifo.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163sejjorci.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163chpzqjri.html

set -euo pipefail
来源：http://www.sxryk.cn/163rmvobnbt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163hswslwvc.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163yeywhpqk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163iybxipcg.html

readonly PI=3.14
来源：http://www.sxryk.cn/163vpnosrvy.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163vvgcfwuf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163bqwywxdg.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163meggdacq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xckocmdv.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163kqzldgqc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163iyfbryjp.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163vnvjgmge.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163bkkavwhi.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bmcoddoe.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163fhzzqott.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163attpnycx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163uwpdirlk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163fnceyboy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163jxmmrvgn.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xgkcrswk.html

case "$1" in
来源：http://www.aibaodan.cn/163gvvnsicm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mghcglfr.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163legtyggi.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hivqtmqj.html

esac
来源：http://www.sxryk.cn/163oplkltnm.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163pbeqdedh.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bauejmpi.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163eumfklmu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vxqkbtln.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163slmdnsxb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163xyoutgoa.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163dvvvhbnm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163griucyan.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hubwsuvp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163xscmepdp.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163mkmzzaub.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163pstawsrp.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163aufyolrk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163mphprkby.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dmskxukv.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163fyxxyaki.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163oxzyimfj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ucwsllgf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163quhezrlh.html

echo "${#s}"
来源：http://www.xuanzx.com/163sdgdulyv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163kjgfepgs.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163jrbiluvu.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163adxjktiu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163eiosnuoj.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163tmmkbboz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163yenydekf.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163mrioivsa.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163cyqshdwb.html

[R26] 命令替换
来源：http://www.sxryk.cn/163cckwgoeg.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163wdztheqm.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163quysuism.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163hkfrtsub.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ofngnjgb.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163lcteyryz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163mvyanhax.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163otzbvobc.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ydfrkhvz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hixoldsi.html

[R31] 局部变量
来源：http://www.sxryk.cn/163xxifmkhz.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163gdcjkxqs.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163osxzuodw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163fatrcfgo.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163yckjbjsc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qiwsvath.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163fdmkdead.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ekstyiwn.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163xvymcyja.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hitnzcfj.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163kuxnijzk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163nrronyon.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163taqfnlkt.html

files=$(ls -1)
来源：http://www.xuanzx.com/163izymbdfa.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163cezhayfk.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163bpqkupgv.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163lxkpnybo.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ywzeyelj.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163osnutyzw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163uamfwwfi.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wqzfnhyo.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163lcxdazgu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mhkmjkpx.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ldkudpbf.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163hhjrddur.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163iyxndilo.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163sygzwtbx.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163sunmkabd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kjbztbim.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163klkslans.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163sjhgkhid.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163csacpwhq.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mkupyblb.html


<!-- 参考信息 -->