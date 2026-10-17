外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163txqjocdi.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163cogzbins.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dctqvsrg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163gtdkeovu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163radhonvx.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163hyqcirtu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ldatmwzj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163yhiztsbh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163eobcumpu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ojgmowzj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163iildxmns.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163aymelgio.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163luqivnjy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163tkbhbtmx.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163wjeouqkm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163batlmqen.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ktkghvyj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163kjutlqdj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zgravuur.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163qkzradex.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163cgaauulk.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163zdgnrufg.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163evcdrcvy.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hroeqkog.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163xtbyeheu.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163blhceyna.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163cambhzka.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vxplazii.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163yheyhohj.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163xbhcxqxr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jyriksqx.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163nudekwad.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163czygfvqi.html

[Q22] 排序
来源：http://www.sxryk.cn/163jmdmajgp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ncurjljr.html

[Q23] 分页
来源：http://www.xuanzx.com/163xwmjpzar.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163gjlxcjzz.html

[Q24] 去重
来源：http://www.xuanzx.com/163jburgllq.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163uorghwzi.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163yamvaaok.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ygjwykpi.html

[Q26] 计数
来源：http://www.aibaodan.cn/163qecmbjcr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163utbiazab.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ksfonyqo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163bruttayt.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163bvavsgvj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163hhaanzsc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163zntsoucc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ckjdfgui.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163mwmqkiys.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qdtxosbc.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163mfrgleca.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163lnfcwdnp.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163rrqueqgk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163uuoxshyb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163zcznyath.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163lhzhyaje.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163auipgdxk.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163dhutuggk.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ihkmmvcz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163krxedwgo.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163wuvccgzt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163hthjbpwg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163aollvchg.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mjpgyxin.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rkbunrqn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163jsmzbcke.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163rfdxqgna.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163mffdzqxf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163nuydxebl.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ypupjelu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163bpcixsae.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163idvbvrqs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163luvdkcuh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163bxrljcno.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163gqspsrwc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163uygrbrrj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163sspkyyiq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ayfryvyn.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163cvspmplp.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163yfqwkdqv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163iwfiaago.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163mgumicbr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163rckngekr.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ivdsstrl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163uslxynaw.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163epxninpj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163spbbesoy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163gsstzwkg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163akeqvknj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163mpbuzgeb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163mcxfaxiw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ijrnfojv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163nunrcvlj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163jbdytgvb.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163plvklpvq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163wcuiwyfg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163pgyyaiek.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163uqfrbeoi.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yemomemz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163mhawlokl.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ewpcjrna.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163gmqcltwq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163iyjqtjnk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163hphwztkt.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163lmhukouf.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163bjjkxtul.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163uedobmtw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mccuohmd.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163kadrxkyt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163soohzhqv.html

[Q57] 行号
来源：http://www.sxryk.cn/163glmmyvvy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163aargufaq.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ojzlhvwr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vyntbquc.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163gtdjsvlb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ikcharji.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jbpketqz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zjmzszjy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ibpouttn.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163hwmkintd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163zfgynsrs.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163tayhldal.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vrbfypwk.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163yhslxdpv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zbwzwlqv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163hpypxpdw.html

COMMIT;
来源：http://www.sxryk.cn/163fnxhoqub.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ggeropjs.html

ROLLBACK;
来源：http://www.aibaodan.cn/163yfiwkdmc.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163usdxwxpx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163rcnooaci.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163sbnvdrdu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163unmqlgky.html

[Q68] 保存点
来源：http://www.xuanzx.com/163wwdpnfqy.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rddzdvwb.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163gjpuqowy.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163qjpqzpcv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163urwivbqi.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163mliorbcd.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163rxlsmsqa.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cwqakxuh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ctsajiqi.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163dxrqgxoi.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ohfvimtk.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qbxybkyf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rsbxbnma.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163xemyyeqs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163qzocyqrh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163desoxggv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163udewumjk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163aspqippe.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163mdlrhpkg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pzaslcss.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163hagvgwuz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163alwzlnqz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163zoaslkvp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163wzlrcrcg.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163gllpweuc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163hbjjhtiu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163cwuqawmj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163clvgmywr.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163skmhfivi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mvtvrqel.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163hqbakeat.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163qxsajwcj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163geitdawi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ahftzqlc.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163aoqlizms.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ismzpnxu.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163cksowwxx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163cxseqmea.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163oelifnfa.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163slzlisjk.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163meaieivf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xhmqtwhv.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163psrtsznr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fibanlnk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163msyrzqnk.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163vekzyzha.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163yvydvqdd.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163eiccnutl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163xctcfxji.html

================================================================================
来源：http://www.sxryk.cn/163kikcskyg.html

R. Bash 专题
来源：http://www.aibaodan.cn/163xzgeoeav.html

================================================================================
来源：http://www.sxryk.cn/163qjsirgqu.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163bhdatyfp.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ljrhfjmp.html

set -euo pipefail
来源：http://www.sxryk.cn/163eyozbpyq.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163zivzmmfa.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ocmrdovz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163acqdmfyc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163lyizecdf.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mcwzjxdf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wbuurouy.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163dhblcjjd.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mdeiwbkp.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163domnzbls.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163sfmgxeqy.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163hlhzoter.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163zbalohmm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163grpndenf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163jstqcruf.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163valfhped.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163uzgzhxzc.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163gfackpoj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163wodphpns.html

[R11] case 多分支
来源：http://www.sxryk.cn/163tggqokxs.html

case "$1" in
来源：http://www.aibaodan.cn/163xaeeofwo.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ipjuqyml.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163nhhndbvj.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163qfuftrha.html

esac
来源：http://www.aibaodan.cn/163xmpzpyuj.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ilaqndzc.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163efjorjes.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163qtjoudqu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163jigfybpp.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163gdbfdjea.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163rjpodpry.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163dyxtgdby.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163tpezwvbe.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tsmpqafx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163oyhusyzz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163tmuiminu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zzqsoomu.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163sgfobqux.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163dhuxoxrv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gzhtymhf.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163bqsrzjck.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163islvbivn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163oyqwawex.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163gasusrux.html

echo "${#s}"
来源：http://www.xuanzx.com/163ikwbjfuq.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qixayqmi.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163flsehabn.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163donfuump.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163zwyufupk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163gvhlohhr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zxddunxs.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163dzvbwllw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163vmavnneh.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xxupxlcp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163kelttpmq.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ughmyhgd.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163wctwtkqd.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163yxkyvkhs.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163mqpcuywy.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163sezypqnx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gouvabsm.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ssnrapyt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rgfsrfly.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ozxfylwr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163tdkftury.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ielvwejn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163dvvboysq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163vdnkaqze.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163fkqawezn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ehpkmklr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163eaionzgx.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163zssfzaic.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163srvuozgv.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163watcwrpk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163idfzugys.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163pvdsswty.html

files=$(ls -1)
来源：http://www.xuanzx.com/163vmivodio.html

[R38] 管道串联
来源：http://www.xuanzx.com/163jtyrxgfv.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vcfivjun.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163bhkevrdd.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ifdaqrzj.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163gyzdzlel.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163fvmbtsya.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ctnjmnrt.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163cqgbmieq.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163lpvvxklr.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163xhkcioxe.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163klkhwmpc.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163heapbqba.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163caqlpnvx.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163qtlvzyzs.html

[R45] 批量删除
来源：http://www.sxryk.cn/163fpaciyzr.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ufpriwvl.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163djtquevg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163zbpyzgjl.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tzlhwbhw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ldezxrbe.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163cgjxelvb.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163frxspjbo.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163kvgpklfm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163clmorpfs.html

[R50] awk 求和
来源：http://www.sxryk.cn/163lxatelgu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163cyenwish.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163njciqudh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163nxqqgobd.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163opbhudji.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jlvjirog.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jfhljkyc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163dhxmkykl.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ujqwkyug.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ceicmkmr.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163nymuruwh.html


<!-- 参考信息 -->