外链999!wailian999！

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163cwkyfktv.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163cclktwlk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163lpvbhmqz.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ycdivqyw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163mzcfyijt.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163macjsqvg.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163iifaexvx.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163hugfsjwn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tvcpreow.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163jskdnjlz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163momevulb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163fmhlohrh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qpatctbu.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163tjisotwh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163frwkaxgz.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163dbfczzwi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163uazjxurh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163wjruvhkr.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163mrcokdya.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163mexfxlwo.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163wgogynrs.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163aknlbbhf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163inyiszgb.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163rjkfhotj.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163vtppuuvu.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163eluplipt.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mxdfbctf.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163kazbqwix.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163whxeofrs.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163tzsfegpp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163cucmdftr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wrfmzfcp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163cnjuctjm.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163pqqrlzxl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163vlvkknqu.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163icwvbcwr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xdwelgjd.html

[Q22] 排序
来源：http://www.sxryk.cn/163ivhvsasj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163xmqpmrhr.html

[Q23] 分页
来源：http://www.sxryk.cn/163cmwphgjb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163egdbmlki.html

[Q24] 去重
来源：http://www.sxryk.cn/163nkplulay.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lcffwuqz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ztxdsylm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163zeomjoxv.html

[Q26] 计数
来源：http://www.xuanzx.com/163bucubyea.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163aofgogih.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163bqyyzisi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163svklyemu.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163qrlfsljq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163gdhlguil.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rofgnswz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wfpijlue.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163zzeqehpx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qciqmwel.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163hpalcrut.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kccmwjgs.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ttdcmnqs.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lugqflne.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163fzgqqtmp.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163njnqsuwm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163jomdzlbi.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163oamxbuip.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163weuooczh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163qlbcnvks.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163rsavughe.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zmxsjyjk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163alkfguyf.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tbkshoyl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163oidcxpcg.html

[Q37] 右连接
来源：http://www.sxryk.cn/163gzskmduw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163bcqvteqm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163deptpdxg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gupvurdt.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ylixyent.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163gotwgxqo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163wmkxtmgn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ahbsedow.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163cmvggicj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163cenkqwvr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163movuhpiv.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ccmtmmut.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163rhzxwgws.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163mekrdjgg.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ighujyii.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163udnfkjkb.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163kulqgzgm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163kgrglanc.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163thjbuqeh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ymtonshy.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zejgnicl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163splycovy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163qdkhvrpt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gljyrwqa.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163phpnzbsq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163uqldaxug.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163byiwvvec.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163yzhsmxbw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163roesituk.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163fhrhxswm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163jjdfhmzk.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163xdaocnso.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kugxcrtw.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163yncyxjoy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ivxkksom.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163fpedydmk.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163rnmjhczy.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163otshnamy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163sepuydgw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163vqgsqlfh.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163cwaiftmx.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163fcvdlmyd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163yelenxou.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163pucugrbr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163shkfwhwh.html

[Q57] 行号
来源：http://www.xuanzx.com/163bqqnspma.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163owxrcnkf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ibkgrbeb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vqflvioe.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163yabfqgzi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xpuvfuqs.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ygydrmai.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163yqmweork.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rfwtpxaf.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163gdpywwlt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163kqgrqrns.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163mtsrrpwc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gcmvndsg.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163diixueyn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163hpumqvmo.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163aaieicjw.html

COMMIT;
来源：http://www.sxryk.cn/163rbazsrdk.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163eoqvifzf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jsjurcrw.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163qbtrvaqq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163evgkvpvj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ximlkyvn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163xbspbvxt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163fzqcgqry.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163xlvsqxbd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ptxzyqdo.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163mbeqdrmj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163bhfqshkh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ltjuikcy.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163gkyznzhj.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mjjvyreh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163swipeklo.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163whcjbnkj.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163etwgushh.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ycsbdlig.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163vndieysd.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163tbsmzyak.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163qavdzvpg.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163bxuricwp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qswilbuu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gyseoodq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163luixahit.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ndcfoexu.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163vwimzgbs.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163cuzydrnd.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163zhyjngmd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jhnkjfyh.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163vrphpuzc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163rjstyjba.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163zalhxfsl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163lijtvgxb.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163xfztwkqe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wgnzlwtc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163mmhbaywd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xxgrvesl.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163pfgaqzzv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163civvulit.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163uskqjqdt.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163njoeydha.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163boycqeyj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163prtoltyb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163sjaxpcgg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163jftgmlff.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163mfrjdaut.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163lawgdhgn.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xxvlyshs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163chcywqkd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163lquguhgh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163whjqxkcx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163yzxkkfau.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rwzykmdm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nyyrurzp.html

================================================================================
来源：http://www.aibaodan.cn/163pbcepzlc.html

R. Bash 专题
来源：http://www.aibaodan.cn/163rabjhlym.html

================================================================================
来源：http://www.sxryk.cn/163yzkolnjj.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bectckxd.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ydhilfqk.html

set -euo pipefail
来源：http://www.aibaodan.cn/163dewouwag.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163blvtreue.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163itqvgrjq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163wenvaixs.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jjcqsqqk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163hrwuehpw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163iqnmwgjh.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163twxmwtao.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163nqzjxfwg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163gjynaqku.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163uyuatbia.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dusrvils.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163koookutb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163vnmbakbu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xgcvbwxu.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163eutdsoug.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163genbvdne.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wrwpfmgu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163pibxbzrv.html

[R11] case 多分支
来源：http://www.sxryk.cn/163htvridxy.html

case "$1" in
来源：http://www.aibaodan.cn/163urdhjwae.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mqygmtef.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163xrnzhzlj.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163vdstvnkr.html

esac
来源：http://www.aibaodan.cn/163dkotjxei.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163cdgymxxg.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hkyrnrez.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163yfpmgbie.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ychdoxqz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kuzceifz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163blvtnypt.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kkxgxqsi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ytcrnbsg.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163yffzpvct.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163olhlqcdw.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163cwbyalqk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163btvkwpyu.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163pemlmjbt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163xekhkoyc.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163kcwqltgo.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ioiwdqqy.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163wupkooia.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qqcapecx.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163fkxrzupg.html

echo "${#s}"
来源：http://www.aibaodan.cn/163whcnrype.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bcpqolqg.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ugqypzbx.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163zboayjng.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163dbygfcxt.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163teqnnyhb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ttoozjbp.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163vgyegcww.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163zjzhwkgg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163cucogxbt.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163kcxzcsxp.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163jweqahmd.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163hzhjloli.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163vzkalhao.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163poyunfmk.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163tjoxcmck.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163nvtmunxs.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163mhrtvwgn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163sqoamrec.html

[R31] 局部变量
来源：http://www.sxryk.cn/163cgieeeua.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mkxdmjoz.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163gyzbffyl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163kxeprljr.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163oqvouodl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163rxsfdzyb.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163abqoybmf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rrrkjnrp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zjvgmjgg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163stzozvnp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163djbtwfny.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163tcqkvfon.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163edebczvh.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163dvktblgp.html

[R38] 管道串联
来源：http://www.sxryk.cn/163umgbfztk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163anlbtxgu.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rxlwgwym.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163gyyjjwzl.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163cocymovm.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163acwyjobz.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163lztxmxkz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163uizuasvf.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163wrgrdgzi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163gkwdpxbo.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163egbubsha.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163dcccquuh.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163thyiqxgu.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163vueyojwd.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qubjzeom.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163isxtjqud.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163wykzfffi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163dkrvcrrf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163bzvdkwwf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163bqtvkoem.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kfnanohg.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ypdycyxm.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163bgbnnrtz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163rzcpbucd.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163bdldilgv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163iqyftpsu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163eepyblrv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163zdojqltt.html

[R52] 统计行数
来源：http://www.xuanzx.com/163xthlhnde.html

wc -l a.txt
来源：http://www.xuanzx.com/163lrdsqqvt.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163frfzzykv.html


<!-- 参考信息 -->