外链999!wailian999！

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lncismpi.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rtwuxxuy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163tuwpovwx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163pegecpse.html

);
来源：http://www.aibaodan.cn/163lkyfmvuo.html

[Q03] 增加列
来源：http://www.sxryk.cn/163teoqvvqf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163dkxnxxra.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163estcpnnj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163fkxpztjf.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ewisizqt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163qupsnywm.html

[Q06] 删除列
来源：http://www.xuanzx.com/163smcvtqlf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163pnyaochh.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qetgozgv.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163kxyosllf.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163rtzgedfx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163seosqrov.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163pajwmhet.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ykdsrujm.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163dxxvblsv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163sovuvpzh.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163lhvwutgf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163nqcumgcp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163syfdzvxm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ofpxvapl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163skahkmaq.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163cjwpadgp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ofdpjqfg.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fccbodqi.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ygddpfni.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163esptdaey.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bzpqzppo.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163othpvxbl.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163czjhkwwo.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qmowbajz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163svlgtvrx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163oqwkfemi.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mrqvlduw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ylfyxnnc.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163mwwytaei.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163gdpodkri.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163iofaidvk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jrmtsanm.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163dwdeykew.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jamooaro.html

[Q22] 排序
来源：http://www.aibaodan.cn/163udnwdnuv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163fgbsfuib.html

[Q23] 分页
来源：http://www.sxryk.cn/163aohdwyfr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163tulvilao.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lmeqskzr.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163nadlnlzp.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163hpzeeegk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163sasyqhoz.html

[Q26] 计数
来源：http://www.xuanzx.com/163tzbzinik.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163lvlpknpf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163squynkpe.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163azfnrwrq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163cgofmqmn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163bjadxnun.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163omraxddi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163gszyhtlb.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163owjusubu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pmlhmena.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163uozepvmx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lpvfbbhv.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163mgxnerub.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ojcxuhvu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rcccgipm.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163gdnywzxo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163chxurqvi.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163cvevnlml.html

SELECT * FROM (
来源：http://www.xuanzx.com/163qlzfhqsi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163xudcmskk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163csodjydz.html

[Q35] 内连接
来源：http://www.xuanzx.com/163xwupnyfb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163uqhfycwh.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mmvbikbx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jocvsxkb.html

[Q37] 右连接
来源：http://www.xuanzx.com/163gdvdnate.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163hkwvpotq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163pamvwssv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ympmxrqz.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wtrujndy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yocsbhfa.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kcfqodqm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163jbuvncqu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163xxmfusdx.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163eepbihzz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163lmsxgjan.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163etdawajx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163mfonjhia.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163egjsrjtc.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163stxhqtdv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163fqtpaliv.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163pqvhaimv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163bedrtydh.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163edebmmxg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zindzile.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lukqbfls.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163enlwtfxb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163qdgeargm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pmqhnejc.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163dbaooeey.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163wmhecfzw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163cavnjjvl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ozvswmfa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ijctpxyh.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163afthjlmv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163axtvrfgj.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163cpikbbhg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163kqmlwljl.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163munqinno.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163mkxdkkzg.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163jiaeuemg.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163esrimgpm.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163caqrgvmk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ashjpblh.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163riwixazp.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163hkpjzxnk.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163yturfrsa.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163kbtlxprb.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163jiokgxxw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163mipttiry.html

[Q57] 行号
来源：http://www.aibaodan.cn/163lmyqaxsq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163djmrkjqh.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qdufughv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ufodlroz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163nladhjwz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163yrbvjejl.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163kbqghnaj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ejgwbemr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163zwbpvqlw.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163krausaek.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163zumzmnut.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163sxlescpt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kdvamyfo.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163gxqfqeaa.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163tjftiazb.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163izajugxw.html

COMMIT;
来源：http://www.sxryk.cn/163plonnowo.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163gcyupost.html

ROLLBACK;
来源：http://www.sxryk.cn/163asnosqtz.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163pjjjpgvf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163tshvfihp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163wcajotfd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163pnvndpgs.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ayuesfyg.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ealmzryb.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163dzsyakmr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qorgvosy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163furdlfpt.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163pdcjetdg.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163slahbufm.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ewlodeba.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fpxidqwf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163pzmyryuq.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qdamjpvq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163jwqlpzvb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163renhodle.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wirthbmr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163yjylmvup.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jijdllge.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163wuwwdoep.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163mceyricu.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vfeczmjr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163khgrdnvh.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163vvgummek.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163hyuvzofs.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163uxhyfxbx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163bhbcuotd.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163fofhkwhy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ajhcsbrf.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163gtvrpdcw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163qnvjobiq.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ospxokpa.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163uevnkgzr.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ilxzhfkv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163abixabzk.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163kixegafw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163gnosoeiy.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163zvssipac.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163jrhhesdx.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163yghwogze.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163brjeccto.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xhlvhogl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163fcqinovb.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163wouccwfn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163fnqqnbqi.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163iyjfeskz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163btjzloht.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163efldmcft.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163amuvaoqa.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163muvmayvk.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163diimtjxr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163cowhvhgs.html

================================================================================
来源：http://www.sxryk.cn/163snbhmyee.html

R. Bash 专题
来源：http://www.aibaodan.cn/163zmlwalnc.html

================================================================================
来源：http://www.xuanzx.com/163eogziust.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163agysjmrq.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163sfslwbds.html

set -euo pipefail
来源：http://www.xuanzx.com/163ftanxkxv.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163kedzkjas.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163racorlgb.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jybdpwvf.html

readonly PI=3.14
来源：http://www.xuanzx.com/163lhwydssj.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hhitxbtq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163xmpbxzmd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163iffervos.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163pifynwjv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163htembupr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163rmplpyon.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163zwrxiufc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163upqcbndn.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xegsrvth.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163zbahcrlm.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163hjydmank.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163aqkguwzh.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163odkkqibg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163rungeofn.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163zzejubie.html

case "$1" in
来源：http://www.xuanzx.com/163wwpnkyvb.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163qdjuvewn.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ktvxyiec.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163hfauiwdg.html

esac
来源：http://www.aibaodan.cn/163wxxumsxh.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163fjllctlw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163jnxjhlta.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163unlhbxvy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pvsyuypo.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163klwnpskl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163amyvftwd.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163yiewvayz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163azofagns.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163qqmljekf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163zjqqouee.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163zsuzswip.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xcvryikh.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163cbnjmlhz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hocavsgn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vsorcevv.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kgdovsej.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qtcwetpd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163myyselat.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163altwkixk.html

echo "${#s}"
来源：http://www.xuanzx.com/163ptkvlbwj.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ahqveqpt.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163eipjukxf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163vppaypuw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163vpbjhxpg.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163cpwsfwla.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163xsxcjhct.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ckivnunx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pgiuweth.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zicidfzi.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163sovdquoz.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zgujzedr.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163giiexqif.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pytlkrvt.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163icefcodp.html

[R29] 定义函数
来源：http://www.xuanzx.com/163hdbrymrr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163wzigrhfk.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163palfxwro.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ohivigkn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163erhgdnir.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ovdtzyue.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163hzudhgvw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163brqdfaxe.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163meuxfxto.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163mirsmnik.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vessaowo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zisgfnxt.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163nnmsdpfz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163heyvrdif.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jgdglfgy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jpvmzlwk.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163uevaigsk.html

files=$(ls -1)
来源：http://www.sxryk.cn/163eazznyna.html

[R38] 管道串联
来源：http://www.xuanzx.com/163snbbolva.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163iwdfzoqj.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kdfqmcjr.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nppsujol.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163onoyzvmu.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163msidworo.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nnmludan.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163qlhxjocq.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163fmaclgpi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163kijyonnb.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163zlyvazkq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163wdllgppi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163sxzuieqv.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163mshkfaqd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163oamgnycq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163kvnrtceb.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163frhfbjgx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163hlodxxdi.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ulscojgl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163fmwdplsa.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163woihhowm.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163rffzfxwv.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163sfynrvzk.html


<!-- 参考信息 -->