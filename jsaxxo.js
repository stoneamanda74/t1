外链999!wailian999！

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163kdqdifhg.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163oellgswi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ilytvjfe.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jskdzltg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163obgmmzgq.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163hwxarqph.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ngcwnlcf.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163xuwdjqmu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jftptcrt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163iqrmmvmk.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163eeyrcgmg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163nynkzbzg.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163zyfecysx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163yeffigey.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163igafxkdc.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163xgtmwwsh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163sxbbnmaa.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yitrtcld.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163yplkypoe.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163orfrekav.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ggymxhvv.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163xlcthclr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163iohqrfuc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163xfpdhdtt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163sdiwljpm.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163otbmpegx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ukypavqf.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163guhobukp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163tqzfashm.html

[Q22] 排序
来源：http://www.xuanzx.com/163dnpkyrue.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163klzutyhs.html

[Q23] 分页
来源：http://www.sxryk.cn/163zgjucnzq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163njmvkanc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163jvekifwq.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lvrervdz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163lnacyfsr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hlmwqrbq.html

[Q26] 计数
来源：http://www.sxryk.cn/163xhccsnpj.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xwhvldkg.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kujhxvck.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163huxclscg.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rmdbwcjr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163mkcqdgiz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ribkxisi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163amggrert.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163shdvewbw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kmriojpt.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163jxfypmgo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163imjdzfbf.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163wueqwynn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pwmrzrey.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xcivdxtp.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163cekkxeta.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163zngreeqr.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163dhdirkhs.html

SELECT * FROM (
来源：http://www.sxryk.cn/163eaaisyyy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gcbfaprp.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163wxrpztmi.html

[Q35] 内连接
来源：http://www.xuanzx.com/163xhpkkcnt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ndggqrpl.html

[Q36] 左连接
来源：http://www.xuanzx.com/163znngiuyv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163olbwmrrs.html

[Q37] 右连接
来源：http://www.xuanzx.com/163psywagpz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163steedafk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ruvxbdgw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ntksciqw.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163erfcccyt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163lxqapmfh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kgeycqyn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163gopmvcsn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163zzlgwzja.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163tjlndmdj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gufbusnt.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163apzhygml.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163btokkulb.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163embkracs.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163xvxgpmts.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163qngabbgy.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163mfxvigpa.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163grpkxjzy.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163qdxvpnca.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163tueztxdm.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163shtncjwp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163fdpxtdyl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163vpzlqxhx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ikuojkwh.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163hlordtly.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kgxpvood.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163gigbxdpp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163khmhqrel.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163sysklwqw.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tpeqszjj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163gsympdjt.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163lnzmbbze.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vieubgjq.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fmhyibtg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163nbhbpekb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163kmtyddxc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163cgmlgfni.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163cihxlinc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163efuxnswb.html

[Q54] 清空表
来源：http://www.xuanzx.com/163hpljezrc.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163lvsbxhlr.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163jklywrik.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wtxvifyr.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163prlxkxsa.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kvegmmwa.html

[Q57] 行号
来源：http://www.xuanzx.com/163ploxsboy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163nwhmzgbn.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163wauaccmo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163sfotzpct.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vpvravod.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163hitqsign.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163cmjpcmsl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163gobqsppl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163laqnatgp.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163hejdcykk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163uzadzmuy.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163fhsjsgxj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oezkiwhh.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ajgsbsdq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163brhucrij.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163edigkzgj.html

COMMIT;
来源：http://www.sxryk.cn/163myureyjv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163gpzzlvku.html

ROLLBACK;
来源：http://www.aibaodan.cn/163gidbfpts.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163twqykovg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163srjgcpwn.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163sbvjwrin.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rnexhdhd.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163tjhktslx.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zgwbznna.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ucsgolps.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163nmfvhinx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ewdyhuis.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ryqpjuwm.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163urspszpj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cmrdmunn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163birgaedp.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zrohmvud.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ywjamrux.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163fqkaqhgy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163xmrjqxjp.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163jnthesjg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ztmybucb.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163zcednvil.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163bbbjsift.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163epovfcld.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163tzlcuyus.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lunmqrxz.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163kauvhrjv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ohsfhsct.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163lwjcfoqh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jbqlwpia.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163inpvanus.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163frodzxsg.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163xrtwmlpe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ktqoybfu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163pjuhkesi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163kqraszda.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ssridwxn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163fuwyjtdb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zahcfucs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163xiqwvbjg.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163pzwlylkd.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163afzxymek.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163zxgpkpib.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163hdqllywr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163vhegsgtv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163bzbaekcy.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163yhehohxr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163yrjigbtl.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163bmzmwslh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163mpvalhqp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163jussexfh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163pxccmkvk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163asenkrdz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163umrpcwde.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163fkvmbbpb.html

================================================================================
来源：http://www.aibaodan.cn/163uxfihtoh.html

R. Bash 专题
来源：http://www.xuanzx.com/163vgedrrvk.html

================================================================================
来源：http://www.sxryk.cn/163rawvxtgx.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163fknpapxb.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163bgtxwwoa.html

set -euo pipefail
来源：http://www.aibaodan.cn/163wgiidwjy.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163lqbrwifr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fobsyrrw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163pyzavzdv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163xihnnxtz.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163gztulvct.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mcvwocmd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jzkzojyz.html

name="${1:-default}"
来源：http://www.xuanzx.com/163txnmokcd.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163jdavbpmi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ojohpuse.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163blkjiwfl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vppwashr.html

[R08] 数值比较
来源：http://www.sxryk.cn/163vvrhplet.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163saptnqjd.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163xxywrppf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gkmifpxa.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163gtxrxlee.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163lvafcdwq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qdzyjpoc.html

case "$1" in
来源：http://www.sxryk.cn/163ueojbeyj.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163fnvnxmxk.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163uericopx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qthoojzu.html

esac
来源：http://www.sxryk.cn/163hunvuvqv.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cseidhac.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tqzruocm.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163oevsnnmr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pcoxbikk.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163luykflcn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163evbynpbp.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ulzvpgug.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163qousxnrq.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163gsonxoec.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163jvcasqop.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163yrirqlwi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163cvpegmyn.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163lqeqlvem.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163wexmdued.html

[R19] 数组长度
来源：http://www.sxryk.cn/163urpjpemi.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kmmbcgmk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163iydcrolo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163umawovoy.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163revidphq.html

echo "${#s}"
来源：http://www.sxryk.cn/163dtdehsuo.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163pgbbfrzc.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163uczmcwey.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163znerefaj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163pwjntdut.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163mydvnedp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ejjyyqrs.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163fdyzoeym.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163xrapdrbe.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163qowzeccv.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163mvfwgzwz.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163bmkfoups.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163isqxstjt.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163izbvstqd.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163tmcwipti.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hjlcnvts.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163stobdxif.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163tgyyrypf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163qxrqkcjv.html

[R31] 局部变量
来源：http://www.sxryk.cn/163lmyjzfad.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163osatwqyf.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163dcwbbzzn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163indptvqb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wybdxjkl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163crbrzcjr.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163lwufopzf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163uxicqkcq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ltnrimeg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163flzshfkp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hzerufgn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163spmddkqw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163cigxgjnj.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mzeihrxk.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hekflulr.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mqqiatgw.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163anuwebmi.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163lvdwfllu.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163tibxbjlx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163kpmtvqbm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163rqouzgfw.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163upqhtiuv.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ysbnqkmu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wmwajzzr.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163zipwfudq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163scvviypn.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163pmshikio.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163lqpxhelz.html

[R45] 批量删除
来源：http://www.xuanzx.com/163cabexvio.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163thmefaly.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163etzhkcvq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wekgqcdr.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ubncxhse.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ffeivcah.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163nkinoayv.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ncxhwpvq.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xqncoltt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163brurseqz.html

[R50] awk 求和
来源：http://www.xuanzx.com/163terfoizy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163gfzivujs.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163txkrrpgo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zjuxjlox.html

[R52] 统计行数
来源：http://www.sxryk.cn/163spmzmsmx.html

wc -l a.txt
来源：http://www.sxryk.cn/163fpydvvah.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163prbnwwxi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cnjknhqa.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163phnamfoo.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163xwbctqqw.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163safiicfp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163gxjyexsb.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163htmldjsh.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163bzbwtrfo.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163gxyqvgac.html


<!-- 参考信息 -->