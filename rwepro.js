外链999!wailian999！

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163jbjrirdd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163zaynxumx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163zsvnyidz.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163unwopxxy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163fqylsuff.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163grzncipq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ruckvpfw.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163amtdpdqb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163txpfhcru.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ozfepwtj.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163pmpgcnob.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163hpdlcyzt.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163icfokzsj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163zfpxkper.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163aujqdprv.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163neaqqneh.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ggytnvhw.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163izldevau.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ftabmldp.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163buqfnfnn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163zkivohag.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163bwypubys.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163yioxvsmj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163gaozibcz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163nrtuhxzh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163jmrloioe.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rabgziwd.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163rodppitt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163hfmrzcll.html

[Q22] 排序
来源：http://www.xuanzx.com/163wramtdgh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163qashbcdk.html

[Q23] 分页
来源：http://www.sxryk.cn/163bqkormlc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163mjvdrrkt.html

[Q24] 去重
来源：http://www.sxryk.cn/163ahppcchj.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163qumminxp.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ltccfytf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163imrayvzk.html

[Q26] 计数
来源：http://www.xuanzx.com/163mugbwlhg.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163jruwnxum.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163gupxqkne.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163wzcgmvka.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nuxucrsd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163boanipbf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163giqupaex.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jxwypfzs.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163wxdjgsap.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163espimmok.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163uyfgbpwa.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163jdczogqm.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163kmtvvcly.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163toxjewcg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xbimhsrb.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ofgmojjq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163oyzdpenl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163fpsvickk.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163eviddarx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163mfuuchfl.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vtvnmrdh.html

[Q35] 内连接
来源：http://www.sxryk.cn/163fjzjlxvk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ulfejhqt.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ywvkclrg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pviidfyu.html

[Q37] 右连接
来源：http://www.sxryk.cn/163npakjrae.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163qavribsz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163yaafvhwv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wbnrqlyu.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163uaapzsrn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163yjlbdlfj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qcaxctfe.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163bapxolmn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163jvkadlep.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163htbfjgew.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163vzmtvhlr.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qpldkotb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163obfztydr.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163imffnkrs.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wijmidpg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163umsirsqg.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163aahzanzy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163wzkggclc.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ixcfwmjd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163zddyginw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163jedmnqod.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gxikljos.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163xqgrzyoo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163atitrebz.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163hihuaycr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xwqavxce.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163izqsfbka.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163wxyunwsn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163myxmvkdd.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163yedcfgvq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163wibozfqq.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163buobylav.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163pghdsoid.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163nwpboxjo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163tibgwqyj.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163hsfzbtmw.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163gdobaauw.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xklllfxl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163scggyxqn.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163wbhmkshm.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163aiyxuhyv.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163fpwxrwhs.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zzizwhpg.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ywkimoji.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163dxbsjbdj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163oufznawg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xzwetbvl.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163vvhazmju.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163usfqrvvo.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163nsviiaus.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163zxlyvkob.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163zikibzex.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163klpcdorh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163hpqrcwdt.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mlyecbxb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163qoypyqnb.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163pifzjsnz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hpipcmai.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163uqohlagp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163xrtfwpkr.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163fbkuvsih.html

COMMIT;
来源：http://www.aibaodan.cn/163tzgtugvu.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163qslqdcyk.html

ROLLBACK;
来源：http://www.aibaodan.cn/163swvjnowi.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163usnzbpjk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ajzxhaoh.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163rwwgsrop.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ecyunqwe.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163algzfhws.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163bqbjveyh.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kvekiucb.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163rmzordlw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163neznrodp.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163drrgocnd.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xbiiqweo.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ghvfsnun.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163cetnojrn.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ouxxqqih.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163zyeydxov.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rtufibbx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vatdgicl.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163acpfmcmy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163tgdlsdkf.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163isyqmkof.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163bwiwjhqk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163zorairko.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163nwvcplsf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163nsjastqj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163tbuipset.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163wldfoxgg.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fswnrine.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163zirsztqi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163gpwfgiui.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kgjxhvcw.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ditpjiss.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163dgabpsse.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163pttysola.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163eucqstge.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163zjnvmxsm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163zdrlcwfl.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163mcrsnepy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ibjiecwp.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163djlrwrkc.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163pjehxoxe.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bafwdwuu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163imysjspd.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163whosbtbu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163szdajdxh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163jasvdrqh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gwookmtd.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163opwbydoc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163vqhfrkgw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ynqbcjor.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lafmfrrq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163bwxslhrh.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163pqtnzylc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nzuksbsp.html

================================================================================
来源：http://www.aibaodan.cn/163syyndjby.html

R. Bash 专题
来源：http://www.xuanzx.com/163zfypgmqz.html

================================================================================
来源：http://www.xuanzx.com/163ayzkimcf.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vaqajtjx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163wmeuihbb.html

set -euo pipefail
来源：http://www.aibaodan.cn/163zgaoopjg.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163baybnkkq.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163fzxnoipd.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163izzexdbd.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xlfznhfy.html

[R04] 位置参数
来源：http://www.xuanzx.com/163filjqdii.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163odixmzhb.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ozpfiwlz.html

name="${1:-default}"
来源：http://www.sxryk.cn/163rsnivqur.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163sgfjmmmr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163pmzjnvbo.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163lidgsleg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tcljgdll.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163rknsqzrh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jadoxbtg.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163wubawyqn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163vzvdrcsg.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ivqffnep.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163bdfshlbk.html

[R11] case 多分支
来源：http://www.sxryk.cn/163hfpzlyiw.html

case "$1" in
来源：http://www.aibaodan.cn/163zxvbuhkk.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hbyzhmgc.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163fxlglldj.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163tigggsog.html

esac
来源：http://www.aibaodan.cn/163emuyyrnd.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163arksfrwl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163lnpppbpk.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zrbemmkt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163bccaqbzh.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163itowdeqp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163gxooevos.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163vsnhirww.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163cqsqicgz.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hlxtmkxn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ychgmysv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163cbuzytod.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163bvyaqabz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ycdfncrn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163dqhpturk.html

[R19] 数组长度
来源：http://www.xuanzx.com/163doibzwll.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163rwafecdm.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163xspunnxg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163nrcrhxvl.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163njcemdii.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tywyrmhe.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pkagidks.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mwnouool.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163zthpihri.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163esnvfsqc.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163zxlpyjdu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163uxlffyak.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163tsllkphz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163nmqhmxcg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163lyircgua.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163dddkrvxm.html

[R27] 算术展开
来源：http://www.sxryk.cn/163dfizhtym.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163hwvgurtu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163emnhtwip.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163gntgwozw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163znkfplju.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163hwlqdtou.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163bulbirus.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163bbmnaxyt.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gpvjodaf.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163hzporxcn.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163spmpbodt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163wwjqtelc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163nxcjdnww.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163pkkrhkvh.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ukghtmhx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163nntnraax.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163rybuldxe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xexzlwri.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ogrkwbjc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ymdlmxbq.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163mtuhhwjp.html

files=$(ls -1)
来源：http://www.xuanzx.com/163nfernzje.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hdftbeec.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163kutpwhqx.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163eiwdeiyo.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163uazoeggh.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163mlkwvpvy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163midsomhn.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xtsdeuxq.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163bqjkpnbm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vdjwmugl.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vhfvpscz.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163twopaqsh.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vrdbptkv.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163umzkrndi.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rxjxsiyy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ogsafxgc.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163hjoasgxo.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163fxdjtujw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163gquoiyeb.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163aerksnjo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163llnumssw.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dcgkvpsv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163sufhplwx.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163dsrmhkfp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fpejmrqk.html

[R50] awk 求和
来源：http://www.xuanzx.com/163wwbdpwxg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ruipajer.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163puxojqef.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163blhpibmu.html

[R52] 统计行数
来源：http://www.sxryk.cn/163begxxssd.html

wc -l a.txt
来源：http://www.xuanzx.com/163hevvcrpf.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gdjjfvnx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163djhbmsvm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vusesevn.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163aehdklpg.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ensglbvw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163fspbzamb.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163pvsprfev.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xymbgael.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163zzllxqgr.html


<!-- 参考信息 -->