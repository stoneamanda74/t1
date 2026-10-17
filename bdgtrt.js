外链999!wailian999！

);
来源：http://www.sxryk.cn/163wgqrorok.html

[Q03] 增加列
来源：http://www.sxryk.cn/163hwqwerwm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163wcvlcqex.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163wasqdxxe.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163clsscawd.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163itewhlif.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163cypbdpfp.html

[Q06] 删除列
来源：http://www.xuanzx.com/163rsdbvyef.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163bxhfmeww.html

[Q07] 删除表
来源：http://www.xuanzx.com/163zfxqmgdu.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163osstvsuo.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xfrxvokw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163rqsdqivw.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163acwrzuvy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163upwnrube.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163rkuxdogj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163hscyoadb.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163njdprcuh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163usrjiqqq.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ooxozeyu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ejkqjnzp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163cmfbevmf.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163rvlmjtev.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163wdczfcbm.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fmenfyaz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163qtpvxgis.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163dnglnlkj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163dushjimq.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163aetnnoil.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163wjaccgtf.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163vjyczpcc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163wfulzfcl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ebvlsyss.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163rpwmjdve.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163gzupghov.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163dikmryhh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163zbfmvuyn.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163eqoplgkm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163cidpdhaz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ajfmkoyn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ktreifpn.html

[Q22] 排序
来源：http://www.xuanzx.com/163sztqmwho.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163bkjpacas.html

[Q23] 分页
来源：http://www.sxryk.cn/163fqsjtknu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163hnyzfcjl.html

[Q24] 去重
来源：http://www.sxryk.cn/163yphfdkcx.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163jzwbvtjt.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163gtqcnytt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163fkgqdngq.html

[Q26] 计数
来源：http://www.sxryk.cn/163uzvnljuf.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163gxjfhkcu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163vcuajenf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163neovkonn.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163zaamgrgp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163wsajsmbv.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ijhdhkyz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163cvdzpmav.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qpmhtofi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jinlsxte.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163tyaznmzl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163osydpgzv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163kdribnlm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gdvlvikq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vhaqfmpl.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163afmigvci.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163czvqhutd.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163dhtuyyxf.html

SELECT * FROM (
来源：http://www.xuanzx.com/163tfutksaq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163tpqugpsm.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163mvbuzyjh.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163epnigior.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tvynnhiz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fxyqvzfj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163queszuwe.html

[Q37] 右连接
来源：http://www.sxryk.cn/163uumyedjq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163vvnyehaw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163mnffwwfh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163hgyzcqrh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163llybjbmk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vrphrvdu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163fjiptnfc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163rjcaqcco.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163vxodeqam.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163dlaarwzo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163dlrqijtt.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163xzzisene.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163dcjqhwbh.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163axkdevuv.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163sfwlicvv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163qdxpfqdl.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163oqqjsxgf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163jzrwpeqt.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163dboffghc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rrjqorly.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163zbehhrwq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fanttexn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163gmzyfjqy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qrcieden.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ikkdzejc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ottjzpjs.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163wsfynknb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163avhtbcfs.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163gnjyanzh.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jzkftiso.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163zvsrznku.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163wmqkgpwq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ncldizjg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163zxwmcplv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ihkxlihz.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163aataqzib.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163gtimziza.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tqdutulu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163dfruqfrg.html

[Q54] 清空表
来源：http://www.sxryk.cn/163qswjhxqb.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fununuhz.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ccalsgdf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ndammaoy.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163gbwstolo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163wpzallgk.html

[Q57] 行号
来源：http://www.xuanzx.com/163bkhmyepj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nimpkrlx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163sslkfprq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163owkykytv.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ingpryid.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ukszvdwd.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163qnkwnsvk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163bdjipxuq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jtcclhzr.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ojlurebk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ibowqypn.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163rgmrvmew.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ygvnycto.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163iqtyyisv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163omvadany.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163fuwkbthv.html

COMMIT;
来源：http://www.aibaodan.cn/163zvcfllpt.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mivwoyfj.html

ROLLBACK;
来源：http://www.xuanzx.com/163acnalqvw.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163glbszuqp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163mhhyzfdq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163uavakznt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ydvicatq.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163henfpzeh.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ewtucgkj.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rljbejfu.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163zypepoyb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163nzsycwaa.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163mzhzofrf.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163txdtqdgt.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163hklgcsum.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ckpqykad.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163axcwqfsx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qwozsqbf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hzviuzzc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xwkxwljx.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163dbtgzrnu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163hqvgqrwd.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xajqikss.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163xcvbfmck.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hkmbeglx.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163fakquxwo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163dxigejiv.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163exlwjsju.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163spwtyrnq.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163dlwgzbko.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163zajeomjy.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163kzunahgk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163xmgacqxr.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163joefgbnm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163jfcndnph.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163xqpzbxqp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163jtklnnuk.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ynwlahuw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wjdjhsmc.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zqqhcols.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163rrwepolv.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163bichcigk.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163kcyivqug.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163uhicfuel.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163umgkfyax.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163twvzcsol.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163gynoyrei.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163eqbwsqdy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163rzobcinz.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163kqnviocz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163jbpnntbm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163smhhrrsu.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163waadyxsw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ymtdjqbj.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163gnaxwhon.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163cwhzoxor.html

================================================================================
来源：http://www.aibaodan.cn/163axftoqhb.html

R. Bash 专题
来源：http://www.xuanzx.com/163yuzytkba.html

================================================================================
来源：http://www.xuanzx.com/163bkehoyja.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jmpwijtt.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163yscpqszs.html

set -euo pipefail
来源：http://www.xuanzx.com/163wioznvqa.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163wjlyjmst.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fhsyuuzp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163yyciakeg.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163unwwykwg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ktcikazt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163zpnyxmys.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163fgsatqdc.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163icfltfeo.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wjddltwk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163rsqzkkdn.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163vbrvqllk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163hgellfij.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ylplhlxq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ijtzfeil.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163uvucgtay.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163tesobnei.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163lyicjkuw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163xcnvodnd.html

[R11] case 多分支
来源：http://www.sxryk.cn/163vhiknvaz.html

case "$1" in
来源：http://www.aibaodan.cn/163ofuqyqkg.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163sbuomkix.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lpjkhvhv.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163fnikieee.html

esac
来源：http://www.sxryk.cn/163rffajerd.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163npynlifp.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163zesrbmqz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163rjlnrxba.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163wbrejhmh.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163lnayurri.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163leogbrsv.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ivbvolxc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163axlvsiqa.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163dskyflgo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wnohxnfk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163nnbbcmjd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rihapkeo.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163jmrfdwtr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163mdycilno.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163cltkkshf.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163sotqlgdz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163hjomjmpn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163uibkowow.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163moyprywx.html

echo "${#s}"
来源：http://www.aibaodan.cn/163wdojpini.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163pynnetsz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163eykxpksd.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163wafmcfkj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163gfcletvq.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163nnlobrxf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163yztbpeyu.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163xikfmtvm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163xtdtqlqk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163hsslyicc.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163idogynhh.html

[R27] 算术展开
来源：http://www.xuanzx.com/163eyzerpqh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163wvnskusw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163nsqwpstc.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163acoepasu.html

[R29] 定义函数
来源：http://www.xuanzx.com/163gyongjfn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163kxuhuflr.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qltsfnbr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163mllejdyg.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ofobeesw.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163caasowlz.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163cnokejin.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163mhpvfbil.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163pcuxkfrl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163anifnxia.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163aojviiia.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fhmdxtxf.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qumucydq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nfhyjdps.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ojaiuyep.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163oiheypsl.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163iqlnvjsn.html

files=$(ls -1)
来源：http://www.sxryk.cn/163dijyycwj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163svlsccyn.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163rawofgge.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ovaqakwx.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zooukeiy.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hlyqdffn.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163foxtytrd.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163srqsjjdy.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163qihmwrzk.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163vqqdegaj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163qjhmsicw.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163shcqrlfp.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ockvwfyy.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163dbswonmo.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rtmvdmmi.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qmirbiar.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163kobyfxws.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163sikjunye.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163eldiyrxz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163bjfydkdl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163hwppjaob.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163oskgclld.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wdmmhtki.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163wgxlkzng.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163htbynwpi.html

[R50] awk 求和
来源：http://www.xuanzx.com/163avdxtyjn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nfkgsika.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hsypmmtt.html


<!-- 参考信息 -->