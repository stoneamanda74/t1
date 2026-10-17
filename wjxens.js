外链999!wailian999！

);
来源：http://www.sxryk.cn/163dlaybwyu.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163zwgzwepl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ahhtezff.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163mofuazce.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163cdlpaive.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163azewskli.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163samyifqg.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ezkkdocu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163dymhxvuh.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ylemonpx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163bxhrcxwc.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163atyepufa.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163kswyymuy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163hojfpwud.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163odeqibyw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ylrzyxim.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163hoxxwllr.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163downjirr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ixjuoius.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163fsproaof.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163djaxefok.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163tdvqofkm.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163cogtelkb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ykdgfwjp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163qudpoffl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163eyuoaown.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163eqsbjsgb.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163aaragtct.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163lvfqwamk.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163efcbakix.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163yarjurae.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163suqnnitv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163xehhspkc.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ylffuxtx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hgagjvlc.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163flujifun.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163gvycsvvn.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163pzvzhcjf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ygqzskgm.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163cwwrrsij.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163wnystfbd.html

[Q22] 排序
来源：http://www.aibaodan.cn/163trqdysnd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163wxzjhwry.html

[Q23] 分页
来源：http://www.xuanzx.com/163raxdjlfe.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163hhhkbaha.html

[Q24] 去重
来源：http://www.sxryk.cn/163ldtllqof.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163cqkjiupv.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163qhcajhnm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163pygvazrr.html

[Q26] 计数
来源：http://www.xuanzx.com/163imitizgw.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163mqpybllj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163uipdcjeg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163tvwukgen.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163nsdrfjmz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163vjnmndkt.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163cqunvgln.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163lfnaystd.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163jhkxpwqa.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ekycsnda.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163rqpauuwy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hrkfuekr.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163xmfbcxcz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kpahpjpd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163thhraiau.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ixrohcqs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163cjukevtc.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163qlycmqkv.html

SELECT * FROM (
来源：http://www.sxryk.cn/163spwwcecz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163umgligdu.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163tcxzzgcn.html

[Q35] 内连接
来源：http://www.sxryk.cn/163brvnfzbl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bjcaqdhj.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tlkhytpj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vikpliuw.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163unedsntl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163gdjuzcla.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163srqqened.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163hilowbnz.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163paacjfvp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163quwapuwt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163hwztdyyb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163tgtrudbw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163jwhlqqzd.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163inezlvdp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163kjngttyh.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qvenwlta.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163odekfqcs.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163bwpwpwdv.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163nufuhnwj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jgkulwsk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163kkwfwvyh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cpxevdct.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163utukfdxy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jvfnxxat.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163nprvlyqi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ypopirro.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163tjgthgdv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163siommjad.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163sgzxjuny.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163hbwgbdxu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163gmveylri.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163vdxlqoqx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163irnvcejt.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163gezoauwq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163pekpfyfd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163fphrrgmv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163maidgwph.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163dlkturkd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ldawfoit.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163qhevwbvo.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163krikjgup.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163jnzbcoye.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163zqfusqkf.html

[Q54] 清空表
来源：http://www.xuanzx.com/163duinvapt.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163sketjrmq.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163qarcylmz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163pzpnnhaa.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fklepybh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163cbikkwfh.html

[Q57] 行号
来源：http://www.sxryk.cn/163jxfpwcum.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163feposlmp.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163hyeuedje.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163fuqenrey.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163adwigrju.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bkxpscmd.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163znogkffq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jhgcafzs.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ackdsoke.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ujufijwn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yvmobtii.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163uhfuogcs.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163uleceznl.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163frlgpebx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163qsgcowuj.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163jvvtuwwn.html

COMMIT;
来源：http://www.sxryk.cn/163oqskncaa.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163impqgpeq.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ilrqlnup.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163syulnhqv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kmbxosvu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163kkghxcey.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163pudesntc.html

[Q68] 保存点
来源：http://www.xuanzx.com/163cqbfzrxq.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ghogcmvk.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163lzutkpfx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163pahmnekp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163xcvsdgjx.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163igchivwk.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163btuvmkom.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163yfmdxvqe.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ricepyax.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163kduonjry.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163jkexazvs.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163rwgmzdhd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163nyigthql.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163iexqauvr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163sdrjrxob.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163monutboi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163tqvmjxkf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163tjdfnuhv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163okjfabus.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163nuytjblq.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163lvrupqat.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163zdsrkglu.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163eoxdilxr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163imtrxnsc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163aulrvbyh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163hgkjxnum.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xgxspjdi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163qkplkwlj.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163tsirdjty.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163efzgczal.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163svarotjy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163peuujjdb.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163mspeluyw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163puwabhxn.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163klvezlmx.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mmrvchfs.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bcxvpdut.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163rnixqawg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163evfzzagz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163wtruoqxd.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163veqypdfq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163jpazyufl.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163yamsxocd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163pgxftjju.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ihflikok.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163dzqgxlgg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163rnwvrvcq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163syfuuvkt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163qqialsrg.html

================================================================================
来源：http://www.xuanzx.com/163wsbwwgho.html

R. Bash 专题
来源：http://www.sxryk.cn/163lqbvozti.html

================================================================================
来源：http://www.xuanzx.com/163ehvwjasn.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163znyevtyp.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163wwgocvwx.html

set -euo pipefail
来源：http://www.sxryk.cn/163vfgguuwb.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163aqwtsqop.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rgoxvtdk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163aeazkxea.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rguctjxu.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ycdohosl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gjesxyts.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163nabqjduo.html

name="${1:-default}"
来源：http://www.sxryk.cn/163qaqcpcxc.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163fcushufn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vakhyvyl.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163fgkaehxw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kwevxbfq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163cckdqbsd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163zbeouncb.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163xqxvocib.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163bmhqjape.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wxnezwhf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163fwydeckv.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163kvfqwtib.html

case "$1" in
来源：http://www.xuanzx.com/163oeujhavj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163pmzgrztv.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163jkpfgwyb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163opafmyar.html

esac
来源：http://www.sxryk.cn/163ugahptpi.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163tkkdzfvv.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163mchaevbm.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163rgoivajd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163njqoiigl.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163qptqwsdc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163nevprkqm.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163zbgbqymt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163bheycfkc.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163nubpmwnn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163lvfpcdnt.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ihdcqkme.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rrrjftsv.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163sbnnybwm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163zriqncrv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163udeddpjz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163lipjvjnf.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163zabwbrpn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163grzcivrb.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163mmptpoxq.html

echo "${#s}"
来源：http://www.xuanzx.com/163cshflxap.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qniplvdf.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163idntjqul.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163tkdbgxds.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rdnsmvot.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163waslbyhi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163suuwzubu.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163qpionjjd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vwybbail.html

[R26] 命令替换
来源：http://www.xuanzx.com/163vooisict.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163jzobxesf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163yboqulqh.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163kotkaauz.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163cyxxnxld.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tctgfdoc.html

[R29] 定义函数
来源：http://www.xuanzx.com/163mfjgzpwm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163gvsxbhia.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163kebhsyvw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163wizeforp.html

[R31] 局部变量
来源：http://www.xuanzx.com/163hxxdnwmk.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163rhfmsjqf.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163opittlad.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163lzhbjofo.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163pdvpgffx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163gxnqymrf.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163portbpbp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163evtxeayd.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163juipswvn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ljyfpbyp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gqlvjhfi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163dpxoefcu.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163zrryqock.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ftnjurih.html

[R38] 管道串联
来源：http://www.sxryk.cn/163iyqbommn.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xtobular.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vyuiefnh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163txpzolvv.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163yvrzfjqd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zxjmwfec.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163lbwluyij.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jnekvstr.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163aypdhlzw.html

wc -l < a.txt
来源：http://www.xuanzx.com/163hixmclvz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ogsyugpp.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163qpqetxxn.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163mwovivfb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ytsiqdqj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163gkcwqbfn.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163myilcnnu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163rxxzvnoc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163hbabyxux.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163rtzaprui.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163agkndmnj.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xygckqws.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163jmgvsnkn.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163mxuhlpbl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ipjexrll.html

[R50] awk 求和
来源：http://www.xuanzx.com/163yaboqzyy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163fjysftdg.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163kjcxpmdc.html


<!-- 参考信息 -->