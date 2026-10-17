外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163lffjcnau.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ccevnnkx.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163rxsilelb.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163wilximsg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163aokttued.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163aekjzzgh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ussgumog.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163enfoncbb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163wzyzkrei.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163jaghjwgv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163roqdvgcf.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163cqtdkpab.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ivfkwnbq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163rxeojvce.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163odmvjexc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ffipwklk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163yfcvbjux.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163yifnggjw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163qsxpfcku.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nuerviwu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ormyfnds.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163pqbkxgos.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163brazedos.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163wjbzopqx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163yrzzbexa.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ehlwlqan.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mxixhskw.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zxeauwig.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163rkofjsdt.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163bhuswoam.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163injmjztn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ygtuyjhd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163hrmwktkn.html

[Q22] 排序
来源：http://www.xuanzx.com/163uwrlgnjo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163rusdyqhn.html

[Q23] 分页
来源：http://www.xuanzx.com/163ihjugxal.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163zvfvnqak.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ucvcufiu.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163juaqxkrw.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163hrucfeuo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163pjmonkri.html

[Q26] 计数
来源：http://www.aibaodan.cn/163inslcgzy.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163oaojsepa.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163xvdhtxkt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ifnbciyk.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163yqlwnaxo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163vetvlgei.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163gomqmitb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163jqlbpdmz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163bnugxffi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jupjcmjl.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163wqheyyhl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163dxnbfgtz.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163kvxcacxq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163chsjsekp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163gppmfmyb.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xnnnmgis.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163jxdeqbxo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ntsxpeoq.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163xckegjvx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163hltkziqx.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163kmnzztpw.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163eqoyaumy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ymfkiwym.html

[Q36] 左连接
来源：http://www.sxryk.cn/163llshcvoh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163yzvaaxhk.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pxazuzxh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163lyntszuk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163dkhemkxo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163izndgxwv.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163etckjbjj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163eqxiadqk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xjnqhycj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163tszopbee.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163qhjjyvnw.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163oqjczpxk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163bfatjbzg.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wskjmmoa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163tfvqnhog.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163eklthfju.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163shyrealv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163rwjfxwwv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163nimzqazs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163jyerkunn.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163uypfuamb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163fkukqogf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163lslnucyg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tqplswoo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163gbvbnvfw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163isohawpm.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163skpkzcwn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ykecbmlb.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163kdsxrbwz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163rrzuqmgw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163plxghkzf.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163qlynifak.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163czwflern.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163pnovuuwu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163bpudjiqo.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163byiztesz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163oykfidqn.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163daumlkwc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163znlfohtl.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163xvrhuuno.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163avutpgdz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163oodvzzxk.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163lzlbpjks.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163aclogkoc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ybltcfua.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163kbbosbqi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163hfiqyoii.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ojbdlccr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ximiyepw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163gbcunahc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qkwpmmvm.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163bqbjuzoh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wccfuyom.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163mmlzjosj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163btigixzi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163lojhfcig.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163egetuvzp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yksyysop.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163siwermlz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qmcrmvsk.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163gjpghvxa.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163qlwcxedd.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163tqjefvla.html

COMMIT;
来源：http://www.xuanzx.com/163jdfvhzjw.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ezxdbixi.html

ROLLBACK;
来源：http://www.sxryk.cn/163cqpwqpim.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gdhxmvon.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ltkkdycn.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163uzqcckyg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rdpccrqx.html

[Q68] 保存点
来源：http://www.sxryk.cn/163cuflaxfp.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163hytelgpi.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163aqbfrmcz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ulgwivyj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163crpouyea.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hejapdsl.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163aqbffemt.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163gspuryvm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163zbjgpvxx.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163quwgzase.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ttnxjxvr.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163wzuegkev.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163qnhzcvbr.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163kqjcbvao.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163eilyjjxz.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vqbrfqgn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163thrjhxvl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163yfbkavld.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163kelpyuco.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rsuziqiq.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163cakvymfx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163hjbmxzzo.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nkqyppnc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163srfssyku.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163gvulpubd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qxgbrygp.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163tahloxzj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163pvbzcglg.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163czpbkvpj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163scmbmzfj.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163mqivbsik.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163mciplyrp.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ladrrkux.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ffttgngv.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163fjylrssz.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hhuhlqgg.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lrqylzlb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vxucisbj.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xjtfaqri.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163dpcqmbje.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163icpwgrij.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163wykgnbqe.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163drxmfnyu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163asbyhmuw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163szohsinf.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ddiggeww.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163htkzljym.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163jilxxxfa.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163snizowbx.html

================================================================================
来源：http://www.aibaodan.cn/163jwkcrukf.html

R. Bash 专题
来源：http://www.xuanzx.com/163vtukpqob.html

================================================================================
来源：http://www.sxryk.cn/163qxsstavm.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163qyjpsxpo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163qgvaenmw.html

set -euo pipefail
来源：http://www.sxryk.cn/163gtgbquvh.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rgirfhmy.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hrepiphg.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ypzulqni.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jpqmowpl.html

[R04] 位置参数
来源：http://www.sxryk.cn/163stzxgddj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163tbfakgrf.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ugnexchm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163hjzhyjve.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ssbytzvn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163lpvnfubi.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163swggayia.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wbvavhjf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163vfiwntdj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163mmywobfi.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163bvzktwde.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163valkqmtt.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nykwhjsk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163mogcdzrw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163lochurnt.html

case "$1" in
来源：http://www.xuanzx.com/163rljtuixs.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dnhexzid.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163szvkgzpc.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pxsbrqof.html

esac
来源：http://www.sxryk.cn/163ktqnnjwh.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163efqlrlxb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163omksmjui.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163tybevbqs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163yyaunzmv.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ttcdiwff.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163bjojdyve.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163wkexuvwt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163qqewlonw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163axbghurr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hrgahebc.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ucifleff.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vzkugkyr.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163adlxeuiw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mitsmgbg.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ofnejgpv.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163vpfgctey.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163liclyibl.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qntlbqzd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163lcdrnwhp.html

echo "${#s}"
来源：http://www.aibaodan.cn/163jltgwayw.html

[R22] 截取子串
来源：http://www.sxryk.cn/163opkwnssc.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ennmdfpo.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163xiudimsq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jvnezguh.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ajkchssq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163yzawwbqt.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163buubkevz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163wdngmrfa.html

[R26] 命令替换
来源：http://www.xuanzx.com/163cziocikf.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ekqpbiam.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163tupjhmid.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163pygqclaz.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163nsudbuih.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163jukpztan.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wakutkwr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163cwrpujzk.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163fgdaxrca.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xpzitznc.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163kebdlikb.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163aqjcdkof.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163sbhqnona.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163rpbzwmog.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163glgzsgbx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xohxnssp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163owlfehax.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dxzzjmcv.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ledhwdic.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jdtqjrbw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163mtkquffp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163flwuvwzw.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kiahjeoi.html

files=$(ls -1)
来源：http://www.xuanzx.com/163lzxnjwco.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163tkvllygw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pzghgqsi.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kigyhzgf.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163tvhglxph.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ifoopnxd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dvrcqqjt.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163extlcvhc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163pwrtewpa.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163anxfnstx.html

wc -l < a.txt
来源：http://www.xuanzx.com/163vnesntbh.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mljxsejw.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163wncgjglh.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163nbjoszsc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gucccode.html

[R45] 批量删除
来源：http://www.xuanzx.com/163uijqapdj.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ncpfhbbu.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zauzwbso.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163hjqrdcql.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163bkveuemo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163pckwjrlp.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163dajhptab.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163onnyisvu.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mgboueix.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vqdncvya.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163zglceusa.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163nimqdtvk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163aahspmyt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163fxyadrgg.html

[R52] 统计行数
来源：http://www.xuanzx.com/163qwhqdmpj.html

wc -l a.txt
来源：http://www.sxryk.cn/163llxtznbq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163kctteajx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ntonadmv.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xgazdkzf.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163mbqalkcm.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163bxvcgmrt.html


<!-- 参考信息 -->