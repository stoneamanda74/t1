外链999!wailian999！

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bvidtbwn.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jdsmadxj.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163bdfntwje.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163xdjootkz.html

);
来源：http://www.sxryk.cn/163owinikpv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163agzdndse.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163fmxrddpw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163esozbqxw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163jklarhtp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163evgcwbwd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163oysfbzas.html

[Q06] 删除列
来源：http://www.xuanzx.com/163bhaeyyhq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ogpngjqt.html

[Q07] 删除表
来源：http://www.sxryk.cn/163wohhbimf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163rrvsooyi.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163webjgocp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163tdjgpgca.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163dydxvdmx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xnvxntdu.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163kdmvdiqd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163gkzeezfu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163wmitjfpg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163yntxjkxd.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163qyblqauh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163zgkykkxy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163jfpngepm.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163iglfxdpd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163uwandjrt.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163jsrdujxm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163tbfsddjl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163stxijcqv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163urgzmgjl.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163efainutu.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163reyjunxr.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163efqauprj.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163gkjkgwzg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163hlynxrfd.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ojhtlnee.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163fbouxrap.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163gorwdxrv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ekiekxzy.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163enkbqera.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163hbjgnnbr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ahjolmtp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jffqvtym.html

[Q22] 排序
来源：http://www.sxryk.cn/163gtmywciy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163zlzbpuli.html

[Q23] 分页
来源：http://www.sxryk.cn/163shtkfdaw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163rgsropwf.html

[Q24] 去重
来源：http://www.xuanzx.com/163momvfeui.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vlxmmzwp.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ewpiukvx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163nnbtsztp.html

[Q26] 计数
来源：http://www.xuanzx.com/163lpgtimwf.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163tchbwdsq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163horaazat.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ssziqumb.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ofsfnaqw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163zomizbjq.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163jqavbubh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ksrjowuf.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ibnutuzq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zunpmszh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163nnvvtkss.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hallljjc.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163jmbulhxk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mdsqrvyv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163hirslwnk.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163jzhbpkwg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163evfgyjow.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163vquayzjz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163oojrrpre.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vlyahnjb.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vitlkxsp.html

[Q35] 内连接
来源：http://www.xuanzx.com/163iawcpsfm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ugeapsbb.html

[Q36] 左连接
来源：http://www.sxryk.cn/163zkqagpci.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rtdkzkrx.html

[Q37] 右连接
来源：http://www.xuanzx.com/163lfvwtiaj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163pjesnpdy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163gomofbki.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163llrijdco.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163dejbzbfc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163lpdejoem.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163czdegdbz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163wyfzifpu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163dnpyidfz.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bfxerorz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163qaaqtawr.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163eukzutwk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kseyldmu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163bdnuggyu.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wrdbtawo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163kihvblqa.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163rhnvfdie.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163kvsdvaeq.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ktczvkni.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ifxhxwaq.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163attxowff.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163baafmbqg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ziphrjwh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163inxwbtku.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163sctruztz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163clwrgpqc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163gabkfvwg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163cziqanzu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163uwnqwtse.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163gjigmkqg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163hzczlfng.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ttiotmyr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163dnjgqkgq.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163zgyipjdl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163kmjeypep.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163szksmppv.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163jwsnhffh.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xbfdqtzt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163feqosfpn.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nypjkagy.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163iwcapwyn.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163yyidjkly.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cfmxdqlh.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163hfpmbvte.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fuxfzbty.html

[Q57] 行号
来源：http://www.aibaodan.cn/163kjtjnddd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163szbwruaf.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xavkhber.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163nomdqsdk.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ywzcrnsc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bjcbewrb.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ehnbscut.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163cnmdceow.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hwatukin.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163xdbcvuaq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163pikekblz.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163oxcpxjuz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mtqkpnpi.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163auigoogi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163jrpjwndr.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163seyunygl.html

COMMIT;
来源：http://www.sxryk.cn/163locfpimm.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163zwyrrhhy.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vtryumpa.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163oguvbjcc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163wlqzrhlq.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163mgvfhqgx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163grjbvjgg.html

[Q68] 保存点
来源：http://www.xuanzx.com/163lmrrygzz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163kmytqlur.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163qkdeyyti.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163xrvcutez.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163dszysfba.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ejxtrvqg.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hroyidss.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ftmqvzcr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163nauelwwb.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163tmzetqpf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163lcwunefl.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163fjryhnmy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163tzszgnst.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163fseskeub.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163qqeqlnmg.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163scteqdpl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163vbeslmef.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vitukncn.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163thhxflwz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163zomehwde.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163aptkachx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163oybhjlhg.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163bxsjgtrw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qfrjjmxf.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xvviosrt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163crqwvzuu.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163rrpzuodc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163jpvpwuzp.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xzmdyuqu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163okbwboix.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163mibminpa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163zpsucrzy.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163bvbcfham.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163zflcpmya.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163uesxkgik.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ynimbugz.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163jxpqcvxr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bijpttyk.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163obpwhomx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163uiwnnexd.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163hmxjrfco.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ukhyfrbj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163vgifyijb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163eghiylco.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163kpkiqqlh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163gavogyey.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163cdyfiqre.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ohepxlwo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zhmzxqvf.html

================================================================================
来源：http://www.sxryk.cn/163diiecqzd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163jfllpklx.html

================================================================================
来源：http://www.sxryk.cn/163gngxinov.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163osxeyuwn.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163yoyruhfs.html

set -euo pipefail
来源：http://www.aibaodan.cn/163yghjvxhg.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163entqibym.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163flzdtfff.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163qkfdbxyr.html

readonly PI=3.14
来源：http://www.xuanzx.com/163kfblggko.html

[R04] 位置参数
来源：http://www.xuanzx.com/163tipyamoe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163lfykpizz.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163upvcewof.html

name="${1:-default}"
来源：http://www.xuanzx.com/163tuxuhwyt.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ryttvsoo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163uioaagbz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163oswcmzgl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163mqaaasje.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fhctaign.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ixxpdwur.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163cokqnljm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163bpsorcmo.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163aurhlchs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163khwffowd.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163goidrbqi.html

case "$1" in
来源：http://www.sxryk.cn/163xspqpfjx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163jwgnvfpj.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ritkogjh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pxolffjd.html

esac
来源：http://www.aibaodan.cn/163dbyzsbcl.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163hndxxxbc.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163lwgfwgxo.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163sqimauml.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163kxocdjry.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tnnlkpsm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163iesezqvp.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163miebynml.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jfzmmfpr.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163qftbutbz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163lfkomwbs.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163etbynfjf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163douvvecv.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163rdojxyzn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163mikmfvor.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163rwcxngdn.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kyzzrtzy.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jjdxnfov.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qvruybex.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163qqvhnggk.html

echo "${#s}"
来源：http://www.aibaodan.cn/163yafgxedz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vopdjelv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163khqnuztx.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163fxmryxjc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163vliqdbfl.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163hrqsfidu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163nphvpdbm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163nzoakoxs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163yhioeuxm.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bpppsizx.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ptcsxfxp.html

[R27] 算术展开
来源：http://www.sxryk.cn/163xocophvh.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163kiuevezc.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163isgucyiy.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163cgyzyeft.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zkxjnkde.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163mdtrioup.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163zcgmsmba.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163yveuvixw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163arkncdld.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163inhpoxap.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wqxcrxzj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163izuluxcp.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163efagwnow.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163odjwaswx.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163csllzdfi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jwwxbptx.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kssokyxs.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163hlomrgnv.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163qgnaovfs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zbuluvbc.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163eqvwnnzy.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vhnjsjkk.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ruddkhfe.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163xlzvemzi.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163tnhlrzmu.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163kpmwiapv.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vdkghasn.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163fqiiufoc.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163annpqrbp.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fhtpvnee.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163knijxkbb.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163zqjtrhnz.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163sxkjtjvp.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163fgslmgfy.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ewfvhuqo.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163qefieryu.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163byoyyupd.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163brovrtsj.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zkwqznjj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163dbzxixva.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163iehzptpv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163vapldnyl.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zjpwkndq.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163elwthgnk.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ynakxnxl.html


<!-- 参考信息 -->