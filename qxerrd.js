外链999!wailian999！

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163uwrgznoc.html

);
来源：http://www.sxryk.cn/163zpsqeohp.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163inetebzi.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163onjsrrgt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cczzawre.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163qubamqau.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163mlvdhrqv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ojxgggmq.html

);
来源：http://www.xuanzx.com/163waiygvjx.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163zpnkjmbh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ewlrbfwb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163cxqnpykm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163jghtufff.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qbismxhu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163cgabumak.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163zstqdbyr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163exyxhdfr.html

[Q07] 删除表
来源：http://www.sxryk.cn/163rogxsvke.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ocqahayc.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ytbdosvj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163jhqqqfda.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163zaskhykb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163twycmqjj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163rxwncyxj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163rvwpugif.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163yjpzotow.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163iqnokxcs.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163qoitnuvz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ukgpmtst.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163kuqzzilv.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163iaeekllw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tkhjzpcm.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ddttelfb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163gihlzjqy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wyjxrafi.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cjzkvvfc.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163trpfshmp.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bguhsykq.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ohilvxgc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fmyprpft.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163atryxmok.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bsxqubwu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xnslmkwj.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163mmmgodcs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163tjddfogt.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163irdqsrhv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163tocdelfz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163gqsswaqe.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163bqrollsg.html

[Q22] 排序
来源：http://www.aibaodan.cn/163srruldam.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163orinybfz.html

[Q23] 分页
来源：http://www.aibaodan.cn/163exztbzan.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163wlawnmeo.html

[Q24] 去重
来源：http://www.xuanzx.com/163alzsqpso.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ogmltopl.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gqivwhyj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163izlshsnd.html

[Q26] 计数
来源：http://www.sxryk.cn/163kdcpjwrq.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wjkwlfps.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163pwtquykt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163nbwkxgtj.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163sjevlkxp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163duslxncy.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163sfuzsyoc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163qmugbjcs.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163loqvxmnp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rcptokel.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163iiyexxsq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rjjpxued.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163xjtvbzzw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zpaavbqx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163uuxbygil.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163wsiwrjfc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163fktcmzqn.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hbhjkkwu.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163prvmyxmy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ajhqihlr.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163sznyqdkz.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163hlwhdkvh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mzvqnieq.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mlwfsszx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wqsnngwg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ywbaeosr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163klgjfwom.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cfuwwizi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163glvcbndb.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163gbvxvipx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163rbovmhho.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ksgvteho.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163wnqewuyo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163msywvrhf.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zdeljtho.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163zybffbqr.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163jielsmrv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163bygfgjjo.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163lfillgmi.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163zrkbgwuw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163lgzoefmz.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163xbolpytv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ovvfhzrs.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163szggvkny.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163cdfnnyvg.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163tyacqtmw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cdjwawwz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163kqchczhh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pxipvtqr.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163hipcljxk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163sdrabzvi.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163hrufycwl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163sippopdc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163uefjmfhn.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163irtotgsa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163fhdtekxk.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qhokqjxa.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163myzggjep.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ulvvtbgi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163bhkxpclu.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163zpquglbl.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xdoktwtx.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163tagloqqo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163qqxzucth.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ipplzdrn.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jtadykic.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163vqvoergm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163tqakeoga.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163fownlrfz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163wcnjlgyz.html

[Q57] 行号
来源：http://www.aibaodan.cn/163kbundywl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jewkntft.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163cbeiwzvl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163aeibpcli.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ohjjqdtc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163flznltfp.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163zwsotfbi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163mhahasoy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xsjesnjh.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163lwvvsdic.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163vobjlbvh.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163wbnkhxfa.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163htlemrqm.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ymkhblai.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mrknlzsl.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163hnzlbzlg.html

COMMIT;
来源：http://www.xuanzx.com/163djsethwm.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163siudsmia.html

ROLLBACK;
来源：http://www.sxryk.cn/163xubwryde.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163hltvtudo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163lrzxntyn.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163mibdonrz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163oecatrre.html

[Q68] 保存点
来源：http://www.xuanzx.com/163jemcspbc.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163fmkaervq.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ggsrzait.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163stiouzci.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vojqepjz.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163nlgrbluz.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163uvimingr.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163uixiajog.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163fpbivdxr.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163byhwztnx.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163cakrmgae.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163gdrgckdq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163gorqtvuo.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zkgfnfft.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163fhzlhjee.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163skhtufgh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163risyukra.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gegqhokh.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163dljkhvww.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163kbsrndrf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163qxhwlgca.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163etggqfoq.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fwnpggpb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163thrugrew.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163kpxzbxhd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ttystazl.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163lgiipvdd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163otpifglz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163wzyxupwc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163tjrunfuf.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163mbnapiyl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163hosxcbdl.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163rvvcloce.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163fxjnivbf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163jfptnqef.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163etokovoa.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163nsdeotqc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163sjauaycs.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163rlokszsv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fdmbnksf.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163xboikqnb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163bqppeevr.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cifshfgs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fgfrfmih.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163kuytirfu.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163llhrscit.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ybgndjji.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163vkvphrap.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163jbynuegc.html

================================================================================
来源：http://www.sxryk.cn/163cblhjcqr.html

R. Bash 专题
来源：http://www.xuanzx.com/163nfiofnbw.html

================================================================================
来源：http://www.xuanzx.com/163xslsxzvg.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163mqruayvd.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163cqttbbbv.html

set -euo pipefail
来源：http://www.xuanzx.com/163ssgvgxej.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163swbyskyr.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hytdmwjd.html

[R03] 只读变量
来源：http://www.xuanzx.com/163kdompoks.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163tmxihqob.html

[R04] 位置参数
来源：http://www.xuanzx.com/163qejmtqjk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ifxjctpx.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163tqycdvgv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163vukhzbrm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163dxjlglvs.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163murstmgx.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163otjhveyp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163axykidnj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163zfirrpbu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163lqkirhis.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qruxhpvt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163wpawpcrh.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163mbgakfkz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163alhxhhdj.html

[R11] case 多分支
来源：http://www.xuanzx.com/163bkgixvfr.html

case "$1" in
来源：http://www.sxryk.cn/163fvfgvraf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163kulwkeia.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163damjewzb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163jnuqehiy.html

esac
来源：http://www.aibaodan.cn/163txewhupc.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wxbwpoys.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163yjgjmvoa.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163afdvjkax.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163uicygrjy.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163wywqrbku.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163nmefhnmf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163lmrpmaau.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163godbwljr.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163somgsnkh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163avozwrjc.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163kgrknrde.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163yeqghvpv.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163pxpzjgbj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163fenoahbn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163pkupbmax.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163esozbfda.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qhbzlxly.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163uevpslts.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163fmpuzjak.html

echo "${#s}"
来源：http://www.sxryk.cn/163zerhauav.html

[R22] 截取子串
来源：http://www.sxryk.cn/163nxymwqrz.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163znjexmok.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163xboogwfv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163numuiubp.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163wmqpqnxn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163kqgxpitz.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vleabint.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163arvcdptr.html

[R26] 命令替换
来源：http://www.sxryk.cn/163fwjigugb.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163pmsltxmz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163bapfipmc.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163akznwhoi.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dbgmlcul.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163vvyvgcdw.html

[R29] 定义函数
来源：http://www.sxryk.cn/163tiulxfst.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163cwittapk.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163idnvxtcd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ennjuznp.html

[R31] 局部变量
来源：http://www.sxryk.cn/163abmmqiuj.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ghdkoziq.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163bbykqcap.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163dbzadmra.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163kcwdjgna.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ttpnwwzs.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163lcmkyjje.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163snrsyjoo.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hkxyawpk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163dxgbfsvn.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163yzfkijvh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163tsbbzova.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163asitrbia.html

files=$(ls -1)
来源：http://www.xuanzx.com/163hyovrvtf.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ajenimci.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163frbklkcw.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163vpckirth.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163knowdcui.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ezuvtjwb.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163wokleyem.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163uaxvwuvm.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163qzreplgl.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163hqnnxtrs.html

wc -l < a.txt
来源：http://www.sxryk.cn/163kstwkulw.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163odbaiwdv.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163mjlzwqyj.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163zvnzghnj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163cpgqtzdq.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vpgilwta.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163udvvehva.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163anjtliio.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163fdqjbtmw.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163sshdsbxm.html


<!-- 参考信息 -->