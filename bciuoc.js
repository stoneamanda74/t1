外链999!wailian999！

);
来源：http://www.sxryk.cn/163ropizvjp.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163mvolpjbr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163mylgdrlf.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163nilpsjbk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jislghbj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xmrgimsp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ryuaigdr.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163rdqnvniu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163cwbdmzyw.html

[Q07] 删除表
来源：http://www.xuanzx.com/163uqosgnhd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163msdgqnul.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163aojqygyb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163bxfdvouq.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ikyfqvqr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jsthegra.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163mdzcfali.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mquczswe.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163mgphrpea.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163lpwhonjl.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ptrdergb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163xgjzbsjs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163cvhxfyaq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163kmoemwka.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163dxyvquew.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163bnzjizpk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163xrvgxpaa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ewsdkmxf.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163szqzqxrt.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163slgikdkd.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yyjxonrp.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163iwhxvamj.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163cvmetlge.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vnjrqdtg.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163dhzemqzw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qowkajaf.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163nhtrmxpw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163blmmgliq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163aurmskfl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163wqoaijdu.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163gsmwdsmp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nawxecmu.html

[Q22] 排序
来源：http://www.xuanzx.com/163jvcaqqvd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163bczdbozn.html

[Q23] 分页
来源：http://www.xuanzx.com/163nhudktee.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163dqvsobuy.html

[Q24] 去重
来源：http://www.xuanzx.com/163rkulsmkf.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163cgeoonoc.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ftqhhnto.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ucbdkgcv.html

[Q26] 计数
来源：http://www.sxryk.cn/163jxtgusqc.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163nfbrknfv.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163gjdxjpyv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163pvxsbfyi.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163olonvqbj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ptnntjsm.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163effgwwik.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163levpgeic.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163agaifufk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gnthwqqv.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163htrsjurw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kmjoyjyl.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zwimoajt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gyzvzaup.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163phhupflv.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163nthcvrke.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163qoynogap.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163dfaejlyb.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ehuqfpbh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ecuzjhiz.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163avylsnyp.html

[Q35] 内连接
来源：http://www.xuanzx.com/163lnauthac.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ulllqpjj.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ekotbxwx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nrongxwl.html

[Q37] 右连接
来源：http://www.xuanzx.com/163vlldrcwa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jqahjuha.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163swqsdpbp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163hggfppeg.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163lrpoouwx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163vahkmcvs.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163fwhqsqnp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163upfflifn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163sorkwrut.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163brozsota.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163wtphycvr.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163psrmwrsq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zulezjdp.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163maljatet.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wqivtbje.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163evcoeyyp.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163grdektwi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163snkmkuxe.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163mazetxmu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163uiqgktts.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163eycbvvmo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163eqlxfssr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163qttlurhr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163axsthjst.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163vwgtqwws.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xtguqaec.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163asyktrxf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qseybajf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163auvjvbyz.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163sfhckjpg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163hztskghi.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qbwyevhm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163skzoxnfy.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163qiwafyqu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ndisiwjc.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163eopafutm.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163jbtydbih.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163bffxiudh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163fkpjluov.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163kyajsxdo.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163xsiiaslz.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163zburimsv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ugidcxcb.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163jycvrnqp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163arylwidd.html

[Q57] 行号
来源：http://www.sxryk.cn/163qxrjnhss.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ucwkmcme.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163qqrkzsgf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163dolqdjyd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qmlhsaep.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163fhjwrtlp.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ytxflquu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163pivjxuaf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163rkgczozn.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ovpogeil.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163anfrxris.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163gqutqtwq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ygxdnfux.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163tahjtaap.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vgzniiyx.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163idkfmnsg.html

COMMIT;
来源：http://www.xuanzx.com/163sttfriyq.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163figmnhbw.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vrehsujd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hfaigcru.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163bwnfyeul.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163bujswlts.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163frpkuztt.html

[Q68] 保存点
来源：http://www.xuanzx.com/163iqogseqv.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163djoydgil.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163yegzmprv.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163otvwvarw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163cfywzsad.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ejcbbibk.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163vumqnens.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bwsdzjbo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ohsyvwih.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163etndbmnp.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163lekqwxoz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163apywdrbg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ukfnfkbz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163leqvvzee.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163olryqpij.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163usgnihty.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163hzaqqyxe.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gqhjwemy.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wvymirwj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163hfuleoux.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163dpmknpqr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163lugjfrur.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163hrslxeuc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163befgvmpk.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qfvwqiwj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163vixajeux.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163kkzefrgg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163syaqdnsk.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ntqkgkli.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ykbbpjmp.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qmgizfwk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nkfeitbi.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163hkmxjndn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163nsedbmlq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163znijxrsp.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163psvbntya.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ohrlqalp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ichgwhaz.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bnouxovw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163hymmyule.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163vbfqgrqc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163prlbmxkp.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163yxqvsjhp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163aczvrhjo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163elgfvzvk.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mkafxkcf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163vlondfsz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163jshqlbme.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163isudxjpn.html

================================================================================
来源：http://www.xuanzx.com/163exmzzuvs.html

R. Bash 专题
来源：http://www.sxryk.cn/163gildmeia.html

================================================================================
来源：http://www.aibaodan.cn/163vldwgokr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163shnalorx.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qfavllmh.html

set -euo pipefail
来源：http://www.sxryk.cn/163xgqzeilp.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163pcwxvgxt.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163fpqbulnc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163zgiladcl.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rdkpstzf.html

[R04] 位置参数
来源：http://www.sxryk.cn/163plyolwzb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163belkqxzi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163tajfmxfs.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163sznyryrb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163earnektn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163znubozcb.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163nnoejznl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163dmflhfhf.html

[R08] 数值比较
来源：http://www.xuanzx.com/163kjbatjkd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ehvrgcoj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163dislipqg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163lwyvnrbs.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163qqwfalov.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ubdfqaqt.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tjcikpqu.html

case "$1" in
来源：http://www.sxryk.cn/163syeyecta.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163lkpvcoqr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163skcecyay.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163cqdfoapr.html

esac
来源：http://www.xuanzx.com/163nqyvcjsl.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163snigvkgm.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163pkzmnasl.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hsxkmswo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ydlxfehv.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163acjlrruh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lptjcldv.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ogujfego.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163avwiljzf.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163mrcfetvt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zrhwwaak.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163aobgjrhz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163sqjvqcwz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ahbzlmpk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163oqlambrq.html

[R19] 数组长度
来源：http://www.xuanzx.com/163mlkwpfdc.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ueqtzdgn.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163iuhguxlv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163flsisent.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163qjvkfdux.html

echo "${#s}"
来源：http://www.sxryk.cn/163wzojyqiq.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ezdtpuek.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163couygbeh.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ousonwsk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ffltsxly.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163icbuldxm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163nkelmptk.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163nliqjept.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163cmewlanz.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rcftlukc.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163llrrrzgp.html

[R27] 算术展开
来源：http://www.sxryk.cn/163amlenuzl.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163abhbowom.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ezyxujfm.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bbyeoxfk.html

[R29] 定义函数
来源：http://www.xuanzx.com/163yuxxpuxu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163nmilcsgl.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163arhgevfe.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zsnqaoyq.html

[R31] 局部变量
来源：http://www.xuanzx.com/163anbazcxg.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163kftbezru.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ytsurrib.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163updviprc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rzfgxnxt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ryivvfds.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mtdvsasr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163otzduuox.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163hxtvhreh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ouxaolgc.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163rnyfogjp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wnshjiza.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163pljtngqy.html

files=$(ls -1)
来源：http://www.sxryk.cn/163iajdzzrf.html

[R38] 管道串联
来源：http://www.sxryk.cn/163qqvxlwkk.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163msvnznxa.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163cevhbmae.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163nlrunbha.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vdpgodjl.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163rkhsyior.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163yeglvegj.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fcdwpuud.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mavjkwzv.html

wc -l < a.txt
来源：http://www.sxryk.cn/163wtfgtode.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163suioqoub.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ahvsiyxr.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163egnlthmc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163uuvtucfx.html

[R45] 批量删除
来源：http://www.sxryk.cn/163tyczoedu.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163rtlimxfe.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163nklitvru.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ttesvzzj.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kryjfvrb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163pnhcjcnu.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163bhquvwbe.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163gcjkiufz.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163xzjwgxip.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163kutaqvrx.html

[R50] awk 求和
来源：http://www.xuanzx.com/163drglvanf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hjmqtxcg.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163iykfpzng.html


<!-- 参考信息 -->