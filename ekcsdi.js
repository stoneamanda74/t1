外链999!wailian999！

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163btjtssbt.html

);
来源：http://www.sxryk.cn/163bflwbcqw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163tmxjhdwn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163gdfepyei.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163kfazxbje.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163zuulzntm.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ywnwlxxy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ncylojxp.html

);
来源：http://www.xuanzx.com/163ukfxmnov.html

[Q03] 增加列
来源：http://www.sxryk.cn/163euxcjawj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163iskkmvmi.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pialreau.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163hwxazdxb.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163vgxhkdbn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rwctahwv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163iduzatex.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163apmaotdc.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163wjkkcsub.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163eknfnbqe.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163nrritayb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ugskzzel.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163kcgftbzh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jvgytbsc.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163tuuhndcc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163imeuwdoi.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163zgemlxpn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163yjwtorcx.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163cnqlvemq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163bhzxazdk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163obgfsdoq.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xplxansw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163wfxoroys.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163pylrfffs.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ivwmcrzt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zyyezrop.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163zxxppnqr.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163osbymsbs.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163jqkcrcgi.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tuvojiwd.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163hmzfyqgp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163dgrsavlk.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163yjmgfgrt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163vctyyrxp.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163aududina.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163vfntezmx.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163kotqqcnn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163akpzvwhl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163turemtqn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163javaynuq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163gjqtnlez.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163dtqablfk.html

[Q23] 分页
来源：http://www.xuanzx.com/163cswkyqzr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163wropehgd.html

[Q24] 去重
来源：http://www.sxryk.cn/163zaisbwwe.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163xhjiusno.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ffwzlxdw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163gaghwzel.html

[Q26] 计数
来源：http://www.sxryk.cn/163uzpvfcou.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hzxrwred.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163qtvvjvqq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163biyzpqll.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163tvhvtkcu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163wtatonsn.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163epntjemw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163tpnvbtyn.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ofsfhlje.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ppaetohw.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163hevyzxgd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163grovqlmm.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163btdmhsuw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hfzhtymn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163udemsgzd.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163qodnzsak.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163chobqpgo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163lyzirrar.html

SELECT * FROM (
来源：http://www.sxryk.cn/163poqbmmjz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163pkztkoeb.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163dxtftcon.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163awqrqtqg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ijnzmsoa.html

[Q36] 左连接
来源：http://www.sxryk.cn/163adnmgioc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vovgmycn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zuytnxub.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163agsoqfxo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163uvgjcgsb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zprfugfu.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163xqsgaahq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163gmkcbazf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163uirixaxs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163yydvbfat.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ybfvzovn.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bvnllwfj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163nlxuwavl.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ojiaqyqw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ecwyjpgd.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gbmsbijw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163satgzdmi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ilysvwhy.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163gclmzvri.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163lkggcwvf.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163bazrqmft.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163wwuaxiqg.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163emkgwdos.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163iabwngxn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163thtbuddc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yrjbsezm.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163dgkrqjpz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163exotwyag.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163oepgfgfc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163sdhmpzld.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163miyxdiwv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163mhrgeuqo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163bsfxkwyh.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163tvbriqhg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163zuzhpqzc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163uozvsopu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163nieajvfq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163fevpsmti.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163epijqekw.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163avpapmtu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163mvqdtmpg.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163shpechlp.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163vnovyidq.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163udgqjjli.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163dsqrbidr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163cuygxpst.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163icdltbng.html

[Q57] 行号
来源：http://www.sxryk.cn/163vqfblxzu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163cyygjsrt.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163cricvhlv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vyaqvrsh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163dlkgtovp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163tqxrnilk.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163gfldhjde.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163adqdtsfr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163imixhdxt.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163rwawlhpj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163kygxqjwb.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163qvdqbkii.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163worrpfsd.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ygewtabk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ysetphtm.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ncpkllwp.html

COMMIT;
来源：http://www.aibaodan.cn/163tdijxaik.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163pjfqvpug.html

ROLLBACK;
来源：http://www.sxryk.cn/163goamhotr.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163jwnuaxxi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163eglgmiui.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163kltldycz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fomfegli.html

[Q68] 保存点
来源：http://www.xuanzx.com/163igyvcgwp.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163tpbszxiu.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163czwoyimo.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ztozchst.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163zhwjcstw.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163fbciwpbu.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ufjoxfkj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163mtsavlco.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163usoxrool.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163htddemij.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163meqfbdfl.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163vxsrvrqn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163gllufzso.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163bslkuwbs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163vslbcjhj.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163afhohjvh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wpyqedwh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163mjdqjysx.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163vfywwhkp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163zywzbxwg.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163bhkoaczl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163uojktygx.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ywvrdhvh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163mcgvckdc.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163oayshure.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163hbapufev.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163cnzcyjcw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163gpndnxha.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jwqzprgr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163dorojafj.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jvhpxtxf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163aqoyitqb.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163twlnuvyy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163exjnhwfb.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vzohoaav.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163todhlsis.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ebxvyvwq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ilrgkmyn.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163mgxtkfqa.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ujbinaed.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163xfdzmkpt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163bnrlxapt.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163tpufatwc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163gdufttya.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qrjoaowx.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163spaaijep.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163doqkawkk.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wtkwqcuo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vnnhlsrs.html

================================================================================
来源：http://www.sxryk.cn/163agtopjuu.html

R. Bash 专题
来源：http://www.xuanzx.com/163asfvasfy.html

================================================================================
来源：http://www.xuanzx.com/163wtkzcsdh.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kcicrwcg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hsylpqzv.html

set -euo pipefail
来源：http://www.xuanzx.com/163pqfsrjvr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163pytfdkkf.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ycirnokp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qxwvmmuk.html

readonly PI=3.14
来源：http://www.sxryk.cn/163rgjibccm.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163vsnwxesx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jfhojoke.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163piucstix.html

name="${1:-default}"
来源：http://www.xuanzx.com/163wfbhleem.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163cijvdiao.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163hfqgqduk.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163eiljzvxd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163vdvixqla.html

[R08] 数值比较
来源：http://www.sxryk.cn/163cujqvpjl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163clezztha.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163kvrbjonq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163yraaotzs.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163rbxalfom.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xklshwkh.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163pbygxuex.html

case "$1" in
来源：http://www.xuanzx.com/163ksfoutri.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163yiaqfvia.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163rweiavqp.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163brifauzb.html

esac
来源：http://www.xuanzx.com/163nuqenoul.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163hbmaqocv.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163nxwbdhze.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163yvdtmgjn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163tscbttbd.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cqmzjnro.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163cjbvypdk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ypcaavwg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163rewmbiru.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163urcpevrl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163humcwqmw.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163xrwwavxz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163aiwbopah.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163erttkfwf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zwputgiz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ygsloeih.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163xmfjejsv.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163cogmzmua.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163zmhnmxhr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163mjfmvuvm.html

echo "${#s}"
来源：http://www.xuanzx.com/163fwebkzdz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163kemtvxhl.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163lgtgswjj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163qwccarmt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163hobveqgt.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qejblwjh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163xypketun.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xtjetfiz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163fjwszlph.html

[R26] 命令替换
来源：http://www.xuanzx.com/163uzvdjnpk.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163mfbtzfnc.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fnljpwsq.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163hympcafs.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bcyrpuor.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163gjhidbid.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ufwbkqvm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163gvkfvvwz.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163nqkyepqd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gmbfsqrh.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163rbyamzsn.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mrualecd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163xyjvqmvw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163iagjmlox.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163bhivhawr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163tqtjnfqi.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ozdjrfsc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163yqtnhgqi.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163wvbjlkzp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ertdhksr.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163imqjelkh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ddpobaku.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tkwwcaum.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163yuuljnek.html

[R38] 管道串联
来源：http://www.sxryk.cn/163xqviuhic.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mhswsiie.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ahttdrrg.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163rcslpftn.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qbtouict.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xujchpkt.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163uftrficz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163hrssgfgf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qpkdjkws.html

wc -l < a.txt
来源：http://www.sxryk.cn/163gdhfivzc.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163biwgomal.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163dkctwzev.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163qksrthaj.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163vimkjprq.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ygtfldjp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163avhqzwwj.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163yhfqswms.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jzhgznsz.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ihlewjnp.html


<!-- 参考信息 -->