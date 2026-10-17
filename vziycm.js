外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163jbhcouax.html

[Q07] 删除表
来源：http://www.sxryk.cn/163klejlrpk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163emcwkajg.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fhhzphoi.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tknffpqe.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ovygngxs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163giaoejma.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163dtjjgyoi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jkcmtmyb.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hciqrgyo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ltbdbkka.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ztwnjjlj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163bhgtiqtz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163hgkymhyl.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163gyzfsquv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xfmrdrru.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163vyujywkw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163dthyinso.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163cdaocjom.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163sxsuvbpb.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163yvwrlkdd.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ohfulhei.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163qfkhcvxe.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ptntomep.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wyfbmezy.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163grdchlxx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163shuyepkw.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163mwupiipe.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pmvrjqav.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163elwfebxm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163utfsdgso.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163veludsmf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163atfxbsmo.html

[Q22] 排序
来源：http://www.aibaodan.cn/163dydculwk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hunxmyfe.html

[Q23] 分页
来源：http://www.aibaodan.cn/163uhpnmeer.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ucmazugs.html

[Q24] 去重
来源：http://www.xuanzx.com/163pnagneyi.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ighsuonh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163sqnhdjnj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163hobezepb.html

[Q26] 计数
来源：http://www.aibaodan.cn/163dpykznud.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163qygvfbyd.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qntlluki.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163yqgmonot.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163achqiiux.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163avomfrkp.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163gihcoksa.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163zlqkdmcr.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163mqjypcnz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cxkkdagt.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163pehmtefv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163rpfpouze.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163irsvwsrn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iwmouyha.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163afwfgqjb.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163nzspghrz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mwqfomtk.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163pcxkpbbo.html

SELECT * FROM (
来源：http://www.xuanzx.com/163rpokqegc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163fptczuwp.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163nvilaqgq.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163wkhngukd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163whpehylv.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163jmyzjcqv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wzowdukb.html

[Q37] 右连接
来源：http://www.sxryk.cn/163lylfjxyv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ookvthpd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163meitgaps.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163lsjvanyo.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163orywxebq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163vhpvptiy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zxmcaofi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163njxjydfe.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163xpvqicpj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163fvztwjdn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163voebcxqf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163najulcvc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163izmctfrx.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163vfmuotqc.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163nqncijuv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163uiyokwxc.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163fmeknsdo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163kpmaoelk.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163bvrtelbz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163bdxdevdw.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163thpyskgr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163khkmhugv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163smncpmpc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vbyiuijz.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163xrpupguy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163crktridd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jzijeczo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163teekpvqt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163cxrvljkt.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163mapabrku.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163dzmqxago.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163begnmrrh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163acyqddrj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ysfxtgjo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wrlbtdze.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163tlhrvikr.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163lhbllcnf.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163nszsqjfd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bgznpviz.html

[Q54] 清空表
来源：http://www.sxryk.cn/163vecwpsgk.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163hxpjppce.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163vpwnannw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ktdscgam.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163lysyawfv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kwzqtrrn.html

[Q57] 行号
来源：http://www.xuanzx.com/163creqxkgs.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163unhzqkpy.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ufmffzlp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ppymvlph.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163bitmqodw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163sklpjbjq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jafqihyv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163irtcxnak.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163nchncnob.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163tkxfwwhp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163hkfkklys.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163xkvhbypp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vtyngbnd.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163andockhi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ifqdsuzm.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163muujgori.html

COMMIT;
来源：http://www.sxryk.cn/163xkmjixlg.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163tucfwjuz.html

ROLLBACK;
来源：http://www.sxryk.cn/163mzgvhuxi.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163anewocml.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163uxfkksfq.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pvvljrcp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163fmzdrlhy.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163hfkjuwzz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mrohtche.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163mbuqviwj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163oechmgbu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163dsxgeors.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163thmqicfk.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163awkkihpz.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zacvnvxn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163igwsnwrf.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163mosmurgz.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163qzcisjdr.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163xgzyxlwy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163yqfjxeoq.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163jbiktmpi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163catzkxer.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qohinxcx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163hvoydzsm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163akyscoak.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163yevetlft.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163juejdjip.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qmqewkpp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163rayzoloy.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163htjifgdo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163obhphcgn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163dtvllynt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163fqroktyu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163rpipxsel.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163xgbgqxnf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163diqnhhsp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163roobemfw.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163aqwfiwql.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tjvxcmmg.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vfniggop.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ierhcorw.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kggjgdig.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163iaxmsqbo.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163hvbkwyxq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163rqhrlays.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163kkzqaslj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163newznndl.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mmogdelv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163kclbysek.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163cokufxgk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163blifsidm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163snhmltdh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163tzcntmfx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ovzslfzp.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xgwqkopy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xsbagdbt.html

================================================================================
来源：http://www.xuanzx.com/163abnbjjdl.html

R. Bash 专题
来源：http://www.sxryk.cn/163ptitbklx.html

================================================================================
来源：http://www.sxryk.cn/163cuwetexo.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163acxvsqjn.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163beyzawlw.html

set -euo pipefail
来源：http://www.sxryk.cn/163xafnnwkb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163vuzohwos.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163knjdlaqq.html

[R03] 只读变量
来源：http://www.sxryk.cn/163nygrdugj.html

readonly PI=3.14
来源：http://www.xuanzx.com/163wbcwvasy.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ommiwfyh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vacuzzxi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163isdivcii.html

name="${1:-default}"
来源：http://www.sxryk.cn/163hnmkhwtb.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163syrqyxcr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163hnbjmpyf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kahkodfn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163wxiwioxy.html

[R08] 数值比较
来源：http://www.sxryk.cn/163kibsmjoq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163dzypllyx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163yazfrxwy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163elzeqlvj.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163cmxuarhd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ehvdkjfk.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ufwfpqmr.html

case "$1" in
来源：http://www.sxryk.cn/163sygycxtc.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163jfrifmlc.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163zbnaspdt.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163uemorvrr.html

esac
来源：http://www.sxryk.cn/163dgpeedih.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163astlchyj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163odqyxubf.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163vbckfxbl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pamrazit.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tpzysgjb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163vmpazgyv.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163afddincj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pzzvikia.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xhxyxlft.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163xwtfjeiu.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qqyjcnqn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ibkhprzk.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163tftnkoqx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163oegzvuoh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163cvgxyznq.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wolamptg.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163tquzhvrc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ogsijorm.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163cgpnjmjh.html

echo "${#s}"
来源：http://www.xuanzx.com/163fljpzlos.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163sqsnizxv.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163hzrfffeu.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163dwpfbpam.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ipvsvzyk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163akqnzzrn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163adgpmsof.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163qmjzhfbn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163dszzexid.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163bkjxxasf.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163erebjznw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163haotzwkk.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163amvyaesx.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163nhizephf.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ndpzzspq.html

[R29] 定义函数
来源：http://www.xuanzx.com/163mbfbsuqc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163tvsfidku.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163uytunxju.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163uwjjwfqr.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ltgdkquh.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163pljyepdt.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163vqsgvmus.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163cwcvqdaf.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163pxslcjoa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163kvasobpt.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163nwnydgiv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fphsbacy.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ygnqzqon.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ivvsolyy.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163jzdhjerl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163izfwhilb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163abcctczw.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163svosfsqt.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bhvxzrga.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163pmhkjnnq.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163cusdncep.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163yubtkozg.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163yjqnzukp.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163yjexdkim.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163bogywvfg.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ydqegikn.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163jgslwgvg.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vxgekjrd.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163tdkbtegl.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ptvajesw.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ktnykoie.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163evmhooke.html

[R45] 批量删除
来源：http://www.sxryk.cn/163kuyfghaz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163pwaabchj.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163unutpbut.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lsblfwbx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jiadevnt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163llohjien.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163vvjgzsgt.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163kiulbjnv.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ypfhwbfu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vljjacyd.html

[R50] awk 求和
来源：http://www.xuanzx.com/163lnnkyrso.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163rzakbdqp.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163scifmszn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zzeevagn.html

[R52] 统计行数
来源：http://www.xuanzx.com/163apmnuesz.html

wc -l a.txt
来源：http://www.xuanzx.com/163ssmdtczw.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163rpymwvfz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163lspzfszt.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163nywhmybt.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163qheebwwn.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163nrujffll.html


<!-- 参考信息 -->