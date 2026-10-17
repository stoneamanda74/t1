外链999!wailian999！

);
来源：http://www.sxryk.cn/163hebjbatg.html

[Q03] 增加列
来源：http://www.xuanzx.com/163uhpdjyeh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163eanxvohq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163otqvbcop.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163eltovexb.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163jkzkgzqj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163bjwicviy.html

[Q06] 删除列
来源：http://www.xuanzx.com/163lrctphnh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163jfkssgwu.html

[Q07] 删除表
来源：http://www.xuanzx.com/163otkvvkiv.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163vwvencku.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163dvxpklbm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163tcxazcwh.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163qiwcvfwm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163zevuoqof.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163upmvvvlh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nmvzzhfp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163yidkvrvw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163azmlunbp.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ohfgjizd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163uotqcsjy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163xfeyyixa.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163nbpobfvf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163crlcxllu.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163halnbnjw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ppqybaht.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ooeoqtpf.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ippdfack.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163erwpbyeb.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163tftashuq.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163irnizejt.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163wonnosxk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163xfbfjger.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163igrytojv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163boalolhy.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163charibfc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163mygaaiiq.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163vytdrbmt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163anubieon.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163bzcsnkxf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163pfzpposm.html

[Q22] 排序
来源：http://www.xuanzx.com/163plerowkh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163atsefxgx.html

[Q23] 分页
来源：http://www.xuanzx.com/163uxojdkvb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163jmrnkajn.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lfxlwkgh.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163svfvrqvl.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163loexnnha.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163okalwzfa.html

[Q26] 计数
来源：http://www.xuanzx.com/163vnavuquw.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163gtgplsfz.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163fvlvchto.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163lqpvrmys.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ofawrpvr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ekswfqnu.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163fbnmsxqw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163biaimtbq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163pevpuoun.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fplreaqi.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163orhefhln.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163xicxtvuw.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163epvompuh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ftdgkkmy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163svknrzmz.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163haeabvvo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163luyurtan.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163dbpgmdbw.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163uqpwgbmo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ognvjwvd.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163sbbxwham.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163zvklnqfe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hmlblxra.html

[Q36] 左连接
来源：http://www.xuanzx.com/163uewcnbid.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vtlkvkif.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163eypgwjgn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kuixmitf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163cqzkkjuv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jyxvrdta.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163iinapzls.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pcrhnlem.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wxhtjoka.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163czjgvdpi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163vipafzev.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163holoqhdg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163gflfzguh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163vnabvbfy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163fsdledwd.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jiapozpb.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163nhnrutou.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163kfzzmqrr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163dgyjibpx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163gvsewsyh.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163lgokzfwf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yjjeeiau.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163cjlzdatd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xrzxonht.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163buspxqhq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xmkrrvcy.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163yexzikfv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wbblrgqo.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163jziwdbqm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163qwyxqpql.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163xelkqxxl.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163rcyvdmcu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163anzwnawr.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163xlxjpsyv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ybqyfvph.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zeqyytrg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163wdypznxk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163gxlbdbks.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ivuslaee.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163cjssvvqm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163fgdobayw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163cfijxggi.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163iifeydcc.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163dyxearvh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163dcjmucov.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ghtrnmpn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xegbrnno.html

[Q57] 行号
来源：http://www.sxryk.cn/163wuhuhnpq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163vcifjmeb.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163nodujfhg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163rvqshjoy.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163wpnkmsid.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jbrjdgtp.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163thpccuvy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163qgtajznh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163eutostvm.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163fyhwlszp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163sbdzvevs.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163uqvuehsx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163iuxnqjqv.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163lcsvxuat.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163poufxngi.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163elvpwrcv.html

COMMIT;
来源：http://www.xuanzx.com/163rjdmlqxj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mwtmxzqq.html

ROLLBACK;
来源：http://www.aibaodan.cn/163obkqzolr.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163vbdkglpf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163mxskdmrx.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163hvpvqkwd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163tdglvzql.html

[Q68] 保存点
来源：http://www.sxryk.cn/163kjdijkmn.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163eejlvmck.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163yxxwsocz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163nqhlwuet.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163cqzaetaj.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163uwvednuy.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163bgrjfdvh.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163dysicwno.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163mgwnptmi.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rjtmqawq.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vtrdcoup.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163epoujzin.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163kekoshum.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163giipyjmj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163xanrbnny.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163aixgqcxa.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163dgmbzyly.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163nskqwxpb.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163kxytsuom.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163hxzpevmj.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ubqsukxt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163spzcurav.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163aobqxrkp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163fmerenqa.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163vszktqec.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163gmabesup.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163pdtfkcou.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163gkfmqvny.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zabxtdpj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163tygqieoa.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163pvmkmnod.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163npzwyysp.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163dvdmjkxj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163tzvmqezo.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163uzfdbtfw.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163kyjhdgaz.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163kwcdajsr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163onsvjxsb.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163skhgoact.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163dfttbshk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163pxlltuhf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163bnizhvdx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ssqguhai.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163mjbgafcr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163yallmwga.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163aqacsjoa.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163mxjvkqxs.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xihulapv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163izpsmjsw.html

================================================================================
来源：http://www.aibaodan.cn/163qdpvudou.html

R. Bash 专题
来源：http://www.sxryk.cn/163ylhzatit.html

================================================================================
来源：http://www.sxryk.cn/163mtulnscb.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163owzzmdvu.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163sphrnyzj.html

set -euo pipefail
来源：http://www.sxryk.cn/163pwszvrcb.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163hfmwprun.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163idsvwxvs.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ciypjysf.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163yejzgzoy.html

[R04] 位置参数
来源：http://www.xuanzx.com/163tenwtxgn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163eylygzmt.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163nlbxszps.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163itskvlmg.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163poiacfye.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163tiltntee.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qkyqxtxx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ypxrveng.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ybunqzsg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163houcthzz.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163esyudhtu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163nedotqza.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yocdhbgs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kdjhgytx.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ywyajjuo.html

case "$1" in
来源：http://www.xuanzx.com/163xmwfgzid.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163lbqixlmq.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wgiimcds.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163bifjjlif.html

esac
来源：http://www.sxryk.cn/163yxabdbgo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163guiikfcg.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163mzlmbdsv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163rgvthchh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163qpsanmpt.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nemvlgjr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ukjcaqdm.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qpxrclzo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163glizkdwc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zmycunnf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163bzekvlcm.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163eyhvvkim.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163tqkwsakb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163nhbspdde.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163psiptglv.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ycsurtzk.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163izawftam.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ivylhvcd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163hqrtuibs.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163iguxcqwu.html

echo "${#s}"
来源：http://www.aibaodan.cn/163immszhwc.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rjyzyysj.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163nfvndeuu.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fsmnpgpu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163qzhhroho.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163yjjdiaox.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ftdpznxe.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163wxckiazq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163txrkhtns.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163pmwutrrp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wflsqpsf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163slsknhjb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ievvcynu.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163kyxpamsz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mcnezepr.html

[R29] 定义函数
来源：http://www.sxryk.cn/163icorhzht.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ylztfxyu.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wcfehnhu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163cjzqetmx.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163myjrehml.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163nprvhgty.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163klabnpit.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163uocafgsl.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163vkeqktpa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163isfoafyr.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163rdvmyxfz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tpogefxj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zvfhdjbi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163scqhbqnt.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hyjamyuw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ixeroetq.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163kpauzsvw.html

files=$(ls -1)
来源：http://www.sxryk.cn/163sutyzaap.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pbskfzcv.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163duougwqq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163nuqibbka.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163yeonoqad.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163oismhnlx.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163blxxcojl.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163vlebxqdm.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163vciwugku.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163olzzjhkd.html

wc -l < a.txt
来源：http://www.xuanzx.com/163uwnipkej.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ugodcefm.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163viikozhw.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bqbwdzwq.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163cmazytee.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hyzzhzzr.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163hrpdyphk.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163duqjlzmu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ljqqiotk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xkwceoam.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163gqouvdbz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163tegppwsj.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xjrwpuhl.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163dnkrensq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163scznrfdj.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ppppayti.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163mkfuuzcc.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bddhhjyn.html


<!-- 参考信息 -->