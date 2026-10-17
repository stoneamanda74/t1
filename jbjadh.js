外链999!wailian999！

);
来源：http://www.xuanzx.com/163yftouzji.html

[Q03] 增加列
来源：http://www.xuanzx.com/163gzhkdhkw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163kjixpzcl.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qowfurds.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ujzjmdyx.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163wpgvjuba.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163icslvjzk.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ujgpbekr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163pahdrpsb.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163obeyvbri.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kekzuxuz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163hnqeuahl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163sqktrhyt.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gbknezie.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ipdyzoee.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163pkqmxxbc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163eyxmtqhf.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163kxaiuxiy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ujswrqzw.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163xckysjbv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163vbwtnbrk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163rbglfkdc.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163eyxpxidv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163hizpexbn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ofafcpjx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163qjxfsgij.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163kwppxoww.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mmsqkwoj.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163khdarrbx.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163gmxpbxqi.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163jdjwfwdp.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163kawcqnsd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163urswwtgj.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163hmhivknr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163pzzrcyro.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163yvaexawi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qzmvamba.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163tgozhhjq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dwvjbyfu.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qjjhckop.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163sghvjjpx.html

[Q22] 排序
来源：http://www.xuanzx.com/163hxoramty.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163kstcwkaq.html

[Q23] 分页
来源：http://www.sxryk.cn/163ucaesgwe.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163inynhmgc.html

[Q24] 去重
来源：http://www.sxryk.cn/163teosjjdi.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163kbsidfhr.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163tdhfcoed.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163irmhzunp.html

[Q26] 计数
来源：http://www.aibaodan.cn/163qpvesvyv.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163vlqrrynp.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vrfulldg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qekvnhvl.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163rebmjyni.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163jkcnvsho.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163yretqwak.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ivzvwcwq.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wunguoni.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kuwvjivo.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163wofkkyla.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163uhsbdqqj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163pwucwdkc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kemwosae.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ewwtcirl.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vuuhmqbh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163entdeuod.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163rhjrcfxy.html

SELECT * FROM (
来源：http://www.sxryk.cn/163rmazkafr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163phkgynbr.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163dtqmtaeh.html

[Q35] 内连接
来源：http://www.sxryk.cn/163qglhdwgk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163heponhmb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163uhklsgrm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rnkgcruy.html

[Q37] 右连接
来源：http://www.sxryk.cn/163mnsjwntk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163vzwkkilb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163yjdzlvfk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163fncyqmkh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163yhrvrixa.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163omdapcry.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163axfwmpdy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163olsoeijz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163vprgcvzh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163fgvbdwpt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ryrvwtqi.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163bnfxxkor.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163fnamkkus.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163pbojvofz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163mknbggpc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163otxcyyvv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163clupyhez.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163gkmrwmuy.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163aenlkiah.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ditdkcrv.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163emrbwmhb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163kpzutlhm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163bpcxhowb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wnerasmy.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163iyizhcxv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ufczvdda.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163tlbgwxcj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163shedtkrv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163hpkvclpv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163uxepqipk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163wlvjaoad.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163pisfdavl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163lowtbmod.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163xgqhhwok.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163yrgwxapk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163nherfnao.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163sgwvikma.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163kwcwmxmd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163wipkesin.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163wyovwqdf.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163vxkmhptw.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163duxeemzy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163hlqljawk.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zxcajjdt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163lnmdoevd.html

[Q57] 行号
来源：http://www.xuanzx.com/163xubgojxh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163spiegmim.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163gchnqkvf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163khqmbomy.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163lmhtttxq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163widdkkvh.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163wwmqodnt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jevobxmz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163thibbbof.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163oddrrwty.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163asytaqvb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163jkeqncvk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rfpdcwrr.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163yjxbfldc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163pusjjqkg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163obadopuk.html

COMMIT;
来源：http://www.aibaodan.cn/163kcofysku.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163yoxkvllx.html

ROLLBACK;
来源：http://www.aibaodan.cn/163zxnkrnmz.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163baqcnwtq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163muqcbjii.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ezdkhdgc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jtoruhzk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ccmhonac.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163orauiigo.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rylgmihv.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163tilhvlpf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163dqoqswyv.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163rwypstqv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ikkxpopc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163yrfgcuro.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ahrkeatr.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163lziydruu.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163gpjsqfls.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ksdslbug.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zyldwmft.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ktjljhmm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163lxkaiusu.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163xsxqutzk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163vcslioqk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163eqxizjqh.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jylpcxio.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163fimawjqs.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ugbronia.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163jamxekyv.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qrparfuh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163mogmmlkk.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vfnfidvx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163fsybdkgo.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ysbjxknc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163gwbgdqoq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163bbnxsllo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vumeywio.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163lsvfpghs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163bilmskwk.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163kcszfoon.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163tpbbpoit.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163xrzeetlv.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163bdcciiry.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lzdzvley.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163waztuhwu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bnvloico.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xgdjncbi.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163szmcoepx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vfbgzduu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qhbmupoq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kozoqbdk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163tflovxfg.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163etohlfaf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163wlfmbowm.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163otxiivsy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ruqugbld.html

================================================================================
来源：http://www.sxryk.cn/163tkblzyuz.html

R. Bash 专题
来源：http://www.aibaodan.cn/163dwsmhifz.html

================================================================================
来源：http://www.sxryk.cn/163xrrbsnav.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163uskjzsnj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ejgoqrzd.html

set -euo pipefail
来源：http://www.xuanzx.com/163apoofpwy.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163skqxhzhn.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163kwdrbjoq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tgntdqhq.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163kxztafyg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ahdnnumv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wpwlnbbc.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163zgonidiz.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ueatubud.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163fatjhrub.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vwnvwlcw.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163foorbfyy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163avinysng.html

[R08] 数值比较
来源：http://www.sxryk.cn/163dwdsicvr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163yfbgayoc.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163nsbffsju.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163kcesczzx.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163autrngsv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163qdnetere.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gfscmvfc.html

case "$1" in
来源：http://www.sxryk.cn/163dndepjhx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jjnbohnr.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163vxgbejdq.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ooebppzk.html

esac
来源：http://www.sxryk.cn/163joraslem.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163thsznvim.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163hpdmfion.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163orzhsovs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ezrvzrfc.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163dojdgcur.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163smkspscd.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163urjduynq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163boqzkomk.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163lfwdpper.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xifxljhu.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163qbjioyds.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163kjudykyo.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163tlwivgra.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163swmufltn.html

[R19] 数组长度
来源：http://www.xuanzx.com/163repgjoqo.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163camknxnk.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163xfxnukol.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163gdeqhoio.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163pgfeyqmf.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ivblvjby.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163emscaymx.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mosgfqel.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ykizyerh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163txnelkpw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rzgigfoo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163zktqpmkn.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163jstrstpb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163gixdowpk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ytsuiywq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163xuzdkuvy.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fkcwufor.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163lanqqppq.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163odpobqul.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163spczybey.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163fjtikoky.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163bxezsbsf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163rkcfezxj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163fznbdsco.html

[R31] 局部变量
来源：http://www.xuanzx.com/163dvfixrhd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163uasezkvu.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163qubtosvu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163tikryklh.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ahhbouau.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kpcrfmao.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ipdziocw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163cfwipyyd.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163hubxxhvl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163uoxhxsbv.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jykjzfiv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vcrtbpfg.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163swxpxtsb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163tdoyjtjb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hrbmkmgo.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163fyfvugal.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163irndzfsb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163uypdoxrp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163mjapgyfr.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163tmbccufm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fkcmehap.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163yekyqwlj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163celjkbka.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dvupaqjz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163tmfkaaat.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163czpefjqw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163lxbakekw.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163rqdohjto.html

[R45] 批量删除
来源：http://www.sxryk.cn/163rojqkbpy.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163hucedfrm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163nckwjunb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163xmxtclxi.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163usgowwim.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163boyycjpt.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fhanlysj.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163bpozaoil.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163mtnnnxyb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163knxurjjx.html

[R50] awk 求和
来源：http://www.sxryk.cn/163vwqzmequ.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163izyobsyt.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163pculfwpi.html


<!-- 参考信息 -->