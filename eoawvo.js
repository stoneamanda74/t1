外链999!wailian999！

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163fqctekzz.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163cuxwcxee.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163fvbxiyvw.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ctndloaw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163lputamvh.html

[Q07] 删除表
来源：http://www.sxryk.cn/163jugiizmi.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wgqevmii.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ztvntnab.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163mxnunjix.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163bpndwesh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163shnapcqn.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163caxgvnzd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163wlrnavak.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163xxasveum.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ekjevhci.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163tuscdhyq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163xwijqncm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163giqyneuo.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163hevocdtd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hyfsgmfv.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ncqxzsvb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163giqfsqjw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163obtzkrfx.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163psehevgb.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163nfgwfzto.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163iofswwfs.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163tbjtjdbr.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163wwcjxwzd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163iiizjiyd.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163pcsqgovv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163bqmqrqzx.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163dqtgbzkb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163gzawudpt.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163pclwgylr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163cjlqkflu.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163jsbbfdge.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163omwmbvcp.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fnioobdh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163roovubjw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163aruxhckd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163bdjxoczi.html

[Q24] 去重
来源：http://www.aibaodan.cn/163vytairuu.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163htbvkxnx.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163rbrmlsxv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ctlamkbv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163tcfdetds.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163tekdpoug.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163giohevqj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163exggvmuf.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163afwjaozc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163gsxydeur.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ycupztdc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163brdgeinx.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163afjkurzz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qsiqtidp.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163vymvevjy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163queauvkz.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163cviejeaa.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qsdxaaps.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163clatusfx.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163sywwebvm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163towdznvk.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163pibaanyr.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163yozqxpsb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163uqhanwto.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163lwooqbyd.html

[Q35] 内连接
来源：http://www.xuanzx.com/163jbiglree.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wzentjgy.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163xhctihrt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163idlvhjjz.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kdyewpwe.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163nmzhotfv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163robbykyz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163gsafkfrz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163vxawjmze.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163toamwjyq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bgljbcbj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163cbyaiocy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163uhtrkebw.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163mfehhafi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163nhgdjkts.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163lqqcgkyi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ubztbvxt.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xvmyrplp.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ejycylgi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163laixtxkg.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163lohpfdyv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ucjunsjp.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163tksptwaj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jruqatas.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163qvkmdqir.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bjslevhp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163yitdiory.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qlxplujw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163staguwbn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163hbdwrjgg.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163amzquhog.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jnqstgme.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wlapkmkc.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163agfmkkiy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163bzacmijn.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163veknxsli.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163pakrcyyc.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ovkksimk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xbztpxzk.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163nmnkrmug.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163wgmwyzcb.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163feadohgn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163pwehuciu.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163nhdatezx.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163dqcrgdjx.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163smkifswc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163qrrluwhn.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163wvpyococ.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163hdwjipto.html

[Q57] 行号
来源：http://www.sxryk.cn/163cyaekntd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163scfkimhp.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163nlhxbvyz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ymgpvczb.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163redwpzzp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163vrpcytji.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163zeoxfltv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jslgowjc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163lnxiqreo.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163tvvgzhmn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163auegeisr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163nmyfivcm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yhxwfwyd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163adftjqpe.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163dzjbkrva.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163dvfihgnt.html

COMMIT;
来源：http://www.aibaodan.cn/163iqzfzxif.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wizflton.html

ROLLBACK;
来源：http://www.xuanzx.com/163ivevrgjl.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163fhfbnszb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163iplejskf.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ozkeqwab.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163idepprcj.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163xyivgsnp.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163gwxguvcy.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rxcufkkq.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ikshnsul.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163dtpmpmgc.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vvtzfsax.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zxtjyrvt.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vxyhhbsv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163efafuhkf.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ghlyyilg.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163haopfydv.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zbxxjlzy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163vlupavqc.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163szvqtkdy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163zgtnkpup.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163yjmfbtpy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163nthskfpj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163utlrjixy.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163mowbsjie.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163piwamgtk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163vmccalms.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163bmzyhygs.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163avpcqfcz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hiaoqzom.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163nwuefyzy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163sbintrpa.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163bterkmkp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163szdegqng.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ylmbrspx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163uiwuqxva.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163pyuvgcsz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163vvckyljg.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ftvrzbty.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163bkqfkyro.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163aeptewwt.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163rarxntra.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163hzonpftl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ozodimke.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163zhtkwaml.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163qqjstydz.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163jwuoslcw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163mbzckbba.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163zwofkfrc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163pmbjsosz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163trugrmcu.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163zeiajhqt.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ducjmnfy.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163eyywhjfg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vfjxrlcq.html

================================================================================
来源：http://www.xuanzx.com/163ufzpjqeh.html

R. Bash 专题
来源：http://www.xuanzx.com/163uozuhsmm.html

================================================================================
来源：http://www.sxryk.cn/163cfegbyda.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163dfjumvqe.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ayfuglns.html

set -euo pipefail
来源：http://www.sxryk.cn/163anrnikvd.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ftyehqtl.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163mbaaiejw.html

[R03] 只读变量
来源：http://www.sxryk.cn/163voxtgzqi.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ajuvyunc.html

[R04] 位置参数
来源：http://www.xuanzx.com/163drmhgtxe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163krdgavov.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163nnfaoxdp.html

name="${1:-default}"
来源：http://www.sxryk.cn/163gdiemamw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163jrpwchor.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vyeprdzv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163tlhojmpb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nxybqxxx.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xteuxqlr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163dzsmkbiu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jziohjig.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vqtmycmt.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163cekqavhl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kerfkjih.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163wzeyjpcl.html

case "$1" in
来源：http://www.aibaodan.cn/163mhhnhhxc.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ocrooros.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163qcpxmlyf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163yurwflii.html

esac
来源：http://www.sxryk.cn/163rbdczmcu.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vyjxwdjg.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163folbtkod.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163tzxrqgsi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163uucbsodq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163hhtpcuni.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163qiginvsw.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163tbxgmzfo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163dcyonijq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xwxkjaja.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wmvnogeo.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163kyytbzjl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ihofscjb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ocdmjxnl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163szhapogo.html

[R19] 数组长度
来源：http://www.sxryk.cn/163isitozlr.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jejuqhly.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163mfrgqoyd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163rwzsvgdl.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163hrvvovak.html

echo "${#s}"
来源：http://www.aibaodan.cn/163nzcjepei.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mmcvfxwr.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163jcglzalq.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163kcygpjue.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163thamxico.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163tmuupems.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163erwrustw.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163mzewilag.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ztfgfaqw.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ucqpojjv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163qythberb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163guupowem.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vbogkegm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ccgrwdhp.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163mwdarysv.html

[R29] 定义函数
来源：http://www.xuanzx.com/163yowfslos.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163bmlerywb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163dkfcazpt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163pnmasciy.html

[R31] 局部变量
来源：http://www.sxryk.cn/163uzskmfpr.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163zhovwqdt.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163tmdwcyds.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163nuxtqfdp.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ybtgpfjl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163roycdhkv.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163lndqmzcy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ycrodktn.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163dwtecjem.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163admkdgnt.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163lgjevdck.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163puwertcv.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163jzjoqakk.html

files=$(ls -1)
来源：http://www.sxryk.cn/163iiqjakco.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163cmbbqjbe.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163rilorftz.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163nqzqxtmj.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163eyqqonxo.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163iyreavvc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163oefejrwq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jlgulxkq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163lvripzmc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163klcqaoux.html

wc -l < a.txt
来源：http://www.xuanzx.com/163szfbwmuo.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163lqzabisw.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163msetphwv.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163bybcauob.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163esaauxzg.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163aaagshvf.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163fssbzxjm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163fdhloryk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163xkhjpjvt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163kphmxvcw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163mycgeyiw.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163iqnfkukm.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163pmzwukjr.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163dwhxfpdf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163lxnzpbuh.html

[R50] awk 求和
来源：http://www.xuanzx.com/163qjzldpam.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163gitqpbrl.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nkgvqpdn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163glufgjew.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ppkpbvnd.html

wc -l a.txt
来源：http://www.sxryk.cn/163yqhhyygv.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163jjeigkzj.html


<!-- 参考信息 -->