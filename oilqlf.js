外链999!wailian999！

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zcczdnlk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bcmwtpba.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163bkswwaya.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163qxynhbkf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163rnipswdt.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ewhrenkq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163evghqkfc.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163epnmkqak.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163mtmvcvbm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ggfgioxv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qqwmmpzv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163krhyjjhf.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163tlcsbvry.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163apzktiau.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163usngyzwo.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163pagewjxf.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163mpfnhvmp.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163sjdltrep.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nwanrafe.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163dnfhfjap.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163sdnlitkz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163pcqxjjyg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163nxgtvqso.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ucabsgbk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163axngfwjs.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163lydkwfdk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163prtjajre.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163yrohajlh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163gylfzwpi.html

[Q22] 排序
来源：http://www.xuanzx.com/163cfeckbti.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163kurlbdip.html

[Q23] 分页
来源：http://www.aibaodan.cn/163shrohdjk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ogdyqvml.html

[Q24] 去重
来源：http://www.aibaodan.cn/163usmjindr.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163lnrtqrhd.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fxyvjsxz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163bamscuin.html

[Q26] 计数
来源：http://www.sxryk.cn/163uzppndmg.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163gkhlovbh.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ihixejkn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rxlarzeo.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rquuimox.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163oxabhovc.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ooplafzo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163pxuvqbii.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163sdjnycbn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gzxmfeae.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163cobseypv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163boqbubap.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163hghrtrpl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rvdjpkvk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xrcvbbmr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163fxruvznz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ljernggl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163eopesble.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163gagknbrp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163sjeenudo.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163yyililcy.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163hrefahji.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bxhpigfk.html

[Q36] 左连接
来源：http://www.xuanzx.com/163huslhyxe.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mgsjglad.html

[Q37] 右连接
来源：http://www.sxryk.cn/163dsccmrgb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163gbsalxyl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163clnpurcy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ouuuaroy.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163jmmepjjo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ahmhclmf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163pxfsakwg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163fahbxawd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163xuywuuog.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163hbkquqbd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163esyxwwgs.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163bdyeeueh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163nhwhsskg.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zfciwdqk.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wxqhjlfe.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ddtwhvfs.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163fxxrlafz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163jwiduyys.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163smlzkwwf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tpxizrle.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163hxtkkxnz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zcwepwsg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163nluyicek.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163iebvdzwg.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163qqtefbvn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163fdhqoixk.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163eztwiowu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163avqxqvjc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163rgopaksi.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ttlhhurr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163osnlcgdk.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163dwipxmgv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163slgovaed.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163whkcfeeg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163aldbwjuj.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163fygrjwqd.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163fdvfstpg.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163aqplknmx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163aggmznby.html

[Q54] 清空表
来源：http://www.xuanzx.com/163cfpdgqlp.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163sgremdwd.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163jdxerrfb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163nzgsmjqe.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163luxzacss.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xgcburek.html

[Q57] 行号
来源：http://www.aibaodan.cn/163tyoxbhts.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163cxctqpkh.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163icgqlxtl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163gajghymd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163pmtuqech.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xwkhlccn.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163optzkult.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ecbatmev.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rltrmsjk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ocwktbkm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163jtnigiao.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163grylxnza.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qkpycron.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163cmkgqlgd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163viyicwbc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163xnswxyey.html

COMMIT;
来源：http://www.aibaodan.cn/163mlcsdgpz.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ecmhxamp.html

ROLLBACK;
来源：http://www.xuanzx.com/163xtsbulcg.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163jerxrrsi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163hejxcams.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163sfwcxrrg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163hohjvear.html

[Q68] 保存点
来源：http://www.xuanzx.com/163fdxlteio.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163qcishohn.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ttshluov.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qeqiughj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163udgunywp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jivglagh.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xzqsnxch.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mtoeutpp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163vbcvztqp.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163sudbfdhm.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163aeyuxfcn.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163utyoqxkb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163slpaaywy.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163yltfciqv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163nzeouzur.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163losggzpi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163txdgsvkg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163spzgqycb.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163sfbtrjph.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jpoenaaj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163bhpsbrwu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zubrahlt.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ydedfpmp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163uiiwkdzl.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ctdwxjzh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ayboipbm.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163jzaaexmg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ahxsptjo.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163wcioxvfg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hzcwnrvt.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hnskspqy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kqtjivan.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lhjzamiu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163honctghn.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163icymmnqs.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163enlpbfvl.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ixyqtysk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163sxvhpojq.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ketesjwm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ajjmdjea.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163hakqdruu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163invhliuq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163pidvjahe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163gtrpenba.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163hppwoovp.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qghniraq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163reqvbykd.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163sagigegq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163gwqbkmgl.html

================================================================================
来源：http://www.xuanzx.com/163gkwxwwtm.html

R. Bash 专题
来源：http://www.xuanzx.com/163iqqzkayj.html

================================================================================
来源：http://www.aibaodan.cn/163ukpywdrg.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163wyblioyx.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163kykqdcdw.html

set -euo pipefail
来源：http://www.aibaodan.cn/163tarwhumb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163pxyhdgef.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ncbqcfym.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ujbbferk.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ozuyhnnu.html

[R04] 位置参数
来源：http://www.xuanzx.com/163qqacrglv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163cktulpfy.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163fyjlpwiu.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163hhpriobt.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163lboayuet.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163gqjmjfzg.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ogxrlcgu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163apypoxoo.html

[R08] 数值比较
来源：http://www.xuanzx.com/163irbjpjkl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163wahyilbm.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163zvzaaimg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163jkjpfqpp.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uqvmnaoe.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qmewzxlq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163vxygosvs.html

case "$1" in
来源：http://www.xuanzx.com/163wnsqyzlq.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163rayhsrva.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163veammyno.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qyerlipx.html

esac
来源：http://www.aibaodan.cn/163sfboreoq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163pbhoxfjk.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rodptnyi.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163semawfzh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gkjgrvlz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163frvndnke.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163llydwzwd.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163qpuwsroj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163vgxprwmf.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tvbvhtfm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163gstcbwdf.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163dphqttmh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jrvvkyak.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163johwlaih.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qfuhotjq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hzllofwy.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163kcoknooe.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163dduzmyot.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163jhaegbzv.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ttauqhit.html

echo "${#s}"
来源：http://www.sxryk.cn/163isjrhuep.html

[R22] 截取子串
来源：http://www.xuanzx.com/163vopwcsvo.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ehhbukqi.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163jcydvysa.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ulsstlmi.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163gzguechl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ciwiidub.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163srurprof.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163lnugqkhc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163dalrmqrv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wmualljc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163knnjqspw.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163fyxnfnjl.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ymacjktu.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jfhqutbr.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163prqrycwz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yncosxaa.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163zafeuvck.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fdyzgxtv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163cgrgiezs.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xehjzvyk.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163cymmtgqh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xsubnsss.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163jgqxsysd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163vifccxcw.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163vpfvzqsu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xlfvoxee.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ywmwhcab.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163fcvrbhux.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ffxychoo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163zvxbpcli.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163uunfnuul.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ckplyvxy.html

[R38] 管道串联
来源：http://www.xuanzx.com/163jzaypogo.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163obafduqy.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lssgefau.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163eifgdmwc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ircdhstj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ggrjecrq.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163fehfcggw.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163jevlacgm.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163cxlpjeki.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wjnmnfna.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163phgtytiz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163sczgegen.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163crchuxhi.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163jtpvqcpx.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ffonsadq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dlxjniqd.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ncsaucbx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ykgbrfia.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mqfeayqh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163puboupxa.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163okbgbdfz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163vxwxklbw.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163sshrxblq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ginmkbim.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163plobupmn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ltmagocg.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163rrvlkzyh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ihzjevvv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163otjuuzsq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ctfjlqcd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163xkksykyu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163rcsggfsz.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ggavwokh.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ckaapgix.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163jqfdabgc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rsnbacyp.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163srxwtivm.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163jthhkijp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163sztukizs.html


<!-- 参考信息 -->