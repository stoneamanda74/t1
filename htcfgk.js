外链999!wailian999！

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163oguyyfzr.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qukppvel.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163fcbcdmyp.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xwkroikj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rdsnfofq.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ahrkstma.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ngjqjxto.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163tkzplslw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163vmlgfnpf.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163qbkoctlg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xezprref.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163cxwfakiv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lldtvzrc.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163wtmmddeb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163knfskunj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ycxdqdju.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ndeiloos.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163tvpphhba.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163gppdfuwb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ezxxckbz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163acfxdyim.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163dagtcnrf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163kzgwhjys.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163zjowpjpx.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qzlblnuz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163aabqqkor.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163hwyosxki.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163qdrhqkwe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163svhypckc.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163idyyeyll.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163lvrqmknx.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wercfcze.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163citnpvyn.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qjuhbyzl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163yccfpfny.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163lpsoofet.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mbbfbkza.html

[Q22] 排序
来源：http://www.aibaodan.cn/163wjpshiow.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163khhswuyu.html

[Q23] 分页
来源：http://www.xuanzx.com/163ixkcqdzv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pjnosxkv.html

[Q24] 去重
来源：http://www.sxryk.cn/163tewryvgm.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163loagruzi.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163myksjukf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163cziqmrmt.html

[Q26] 计数
来源：http://www.sxryk.cn/163mcuckixu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163frszvzzz.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ebwfhtyv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163pdmcqyfj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163omavufoz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163tynauvtq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bbfvtujd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163amumarbp.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163pnjezxfn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wwzmigmk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163avmszahf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ebnombns.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163bolvlxvb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pnsmsdvm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163iduhlraj.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163uajzjsoz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163fmuockcd.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163mpphgfmq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163npqqzgnc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163tysfcugj.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163mmvogpit.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dotwpayd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163oazfbwhn.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163pzlkgzbt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zjrbwzeo.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163mbeplrtt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163oljviloi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163xpddxwsp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tkwufzca.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163zidsqgkv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163utprmcdn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163mcfpcsmc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163pgywzogf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qmkkimvz.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pstkhlif.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ojrkqfvm.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163cldiqjjy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163dzbwycdf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163radlkqnn.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ngyhaicy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163vshwvbrm.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163tmazrlbe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163goeiidey.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163dhtyeymk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163oxnkjmgk.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lczcryfj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zuteqjcm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163gihkwpjh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163onlfuror.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ueubduwk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163sgmpdbgc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163elvnfbad.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163zgeoovse.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163lidwopbo.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163erjbrdog.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163faaezono.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163egptvsdn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163rktwphym.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163oihskvtj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fvuwtruy.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163jlyoolom.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163gsalflxb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163kqlbenrp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163elfyjjvu.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ecmejrzk.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ogvzeold.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ioxhwcvd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mgbtjfag.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ndkmlhzt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163efpnpalh.html

[Q57] 行号
来源：http://www.xuanzx.com/163hqzllpxv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163bdlcgzmr.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163lxosohea.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163zzdufhnb.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ntprtqmr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163cyehgeii.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163brdqarjz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163mpunclwj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163dqcagvkw.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163clrtxxbz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163eczidwvf.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163grtllrya.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bvnomzqr.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163telucldw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163dbhqnipk.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163wlpxyoic.html

COMMIT;
来源：http://www.aibaodan.cn/163kmilwlhg.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163qykqnvee.html

ROLLBACK;
来源：http://www.sxryk.cn/163zpszdkvi.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163lhdmljph.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163awzkiqeo.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163kdolcpod.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163cervtxou.html

[Q68] 保存点
来源：http://www.sxryk.cn/163auuarnnt.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163sjzmnubp.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163zhuyfmva.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163pacypctz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163bqiwgalf.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ifkomvif.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163dagwukjv.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163xlwtjfba.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163bvewnfim.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163snxactze.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163pfgzqjfj.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163zrthevin.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163rnhnzmbg.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ypekwfmo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163bzpovhly.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ksugveey.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163plzqiysk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163auavyeud.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163fwhorvvp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163lfilvvrv.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ujygskso.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rgovafpf.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163dvjxkzyg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hwfgjoyr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fdyxtunp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163hyjujarh.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163xqhqgozf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ptsqbicz.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163lpjxdceu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163eplcrjao.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163pkwwnres.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163pzqedzru.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163rsdmucux.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ulrqlced.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163evrizhvx.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163zjgbuyoo.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qmpkajfw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163btdnipbo.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163mcjhkirk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163oycqnroj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163hhlhgagb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163mfeghfnu.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163fhtgvlsn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mbbzhgnw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ntkjeory.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jjvtgihl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163cguorqmt.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163vkeutpck.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ambejtkg.html

================================================================================
来源：http://www.aibaodan.cn/163aiawuobs.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fteudcgc.html

================================================================================
来源：http://www.sxryk.cn/163bhnezcrn.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163qlcoygez.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163uuuwvefh.html

set -euo pipefail
来源：http://www.sxryk.cn/163vindqsyg.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163onaizqhd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163gtcnqsmg.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hbyjhkmt.html

readonly PI=3.14
来源：http://www.xuanzx.com/163lpmdjwvx.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163iwkrhdve.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fpmklafi.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163tppvtzzb.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mnpfkdnm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163sillsrme.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163nyzgcfnu.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163puoigdlz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163aawwefuu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163lnjslmng.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163euqvnint.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163hwzeqrkt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163veysfaxp.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163gyhmuodp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163tiyvdvbq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163enijierc.html

case "$1" in
来源：http://www.xuanzx.com/163vxaanoki.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163cknhtanv.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163knxfyjsm.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163dtyoswym.html

esac
来源：http://www.xuanzx.com/163jjyqqufx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163memdvalu.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bxuktzeh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jrumwway.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jaeyybph.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163mzveurtb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163khumfxjb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163vouipatg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163jqhlgmju.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163yrzapuyj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163yugzyypu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163syvhqwms.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163kybzoxrr.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163pkcjlinn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163dhczuktq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163axmbxrim.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163hnockifz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163okmvfpbe.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163geqmaspl.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163yfaocuiy.html

echo "${#s}"
来源：http://www.sxryk.cn/163fvldcbpt.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163tfeusmad.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163bfrcjzzs.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163sbnesqfg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163zctvebsc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163itmsiroj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163yegjydkv.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163qzkltxid.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163uvqdobtc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163idfnzrso.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163gaurjyxt.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163zoxpxxod.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163nzwfjcjy.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jmknvtiw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163kjctxdxx.html

[R29] 定义函数
来源：http://www.sxryk.cn/163xtxkwsfu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ecgqdhaa.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163glkxgkuz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163awrjoejk.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rizoguxd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163hrwnwhkq.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163bzpxtpgk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163dqkukkqy.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163uedfahnb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163wokmnoko.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ggqmcawa.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163sarzwfuo.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163radcvsdy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163fjnfdask.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163rrjmiick.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ihmwuzqr.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163djtsnbhj.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xmhctopq.html

[R38] 管道串联
来源：http://www.sxryk.cn/163yxarfzxr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163cyciiscj.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163eswjofqg.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163kmatmhgs.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163dcjwsvoa.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163lptlsxlc.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163mecmdymz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163iyufqjoy.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163tnrknpel.html

wc -l < a.txt
来源：http://www.xuanzx.com/163mwnwjspb.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163gqnovjcg.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hzhwukxs.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163csklrdnv.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ygcebirs.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163vuepsxns.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jahgnuhf.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163dqhmlbrt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163yikfeaay.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163juaawxyd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lotmwwvs.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163yimbeopr.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163jaassqjf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163zgqngsxd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163znfsfopa.html

[R50] awk 求和
来源：http://www.xuanzx.com/163cnkblrta.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ihfwmfwc.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163pbyfyfep.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163hvwiepqu.html

[R52] 统计行数
来源：http://www.xuanzx.com/163tpvtgcle.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fftkmggq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gmhffjqu.html


<!-- 参考信息 -->