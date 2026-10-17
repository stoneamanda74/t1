外链999!wailian999！

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mcdjtihd.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kwbqstrv.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163fywfbzhs.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163tamilrdq.html

);
来源：http://www.xuanzx.com/163mvqpmzny.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163rgqhoehm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163pcxybbqp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163xkcnzggf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163zsyunteb.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163xhvfzmlj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163owdufeie.html

[Q06] 删除列
来源：http://www.sxryk.cn/163tmmunwry.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ggkfsyil.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ecaxovvk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hrdsmpum.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163kvyaiwws.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ephoarcq.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163pbcqlsxh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163zaizaojt.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163pnrgluig.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xalidktg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tdikorov.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qexoqlwk.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jpcryoib.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163mlrpebnv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dqdvyazb.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163gusunmwd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163tqcyqoeo.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163qilaareh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163tripmata.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163sewipljm.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163mricvnvl.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163pcqrjqjp.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163mugbhahb.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163rsphgpyz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jtxuuivs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163cakutuja.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163shcrawbs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163vufehiyf.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163cosqnhwt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163oyholevv.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ujlibxrz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163fdgjpzsv.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163oqlwwuqy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163odwyedml.html

[Q22] 排序
来源：http://www.xuanzx.com/163bhodinpz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163nywpjpek.html

[Q23] 分页
来源：http://www.aibaodan.cn/163cmqaqjjr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qxccelop.html

[Q24] 去重
来源：http://www.aibaodan.cn/163vtwqpqli.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zfnmpsom.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163amywffvv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163fiudehyk.html

[Q26] 计数
来源：http://www.xuanzx.com/163bptfvcbw.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163nbgykygq.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163mmvzldrh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163uhhxfvet.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163qbhvmdzi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163tdgdtmva.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163kjfydiku.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163sniqqkod.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163kznzdkiq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qvwvhhha.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163lewqzvcb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kehtkmmk.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163hxybgghh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163buxcauqf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163sxhhlvpm.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rweicihb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163dqgemfnz.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163qogpvnli.html

SELECT * FROM (
来源：http://www.xuanzx.com/163qranlmoq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ogwjzvqk.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163zjjtcwer.html

[Q35] 内连接
来源：http://www.xuanzx.com/163eksojyki.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163dqfwxumz.html

[Q36] 左连接
来源：http://www.sxryk.cn/163pgshtnzb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163yawcqczo.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163etgtqadu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163booehiph.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163rzibcisk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jlzxmttr.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163eujmpboo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163dfijuvlo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xllujhhu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163yniplqwq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163kkdqkbir.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163twqhyess.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163jiyyzbuh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163zplwoeyk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163yvpqkikr.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ckjlsozf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163zfbsdrfw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ixhgwkfr.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163tmuzyygw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gzjrzksr.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163cpmyxail.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163sqenszcu.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163hilhsial.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cpcasvrv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ribshaqg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163zuxllfgi.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ulxcdnns.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163tlksrjxr.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163dfhznwen.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ejgfcqcd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163dacnkgtp.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163vuuiinax.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163kovcqokg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163nuovvsvf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163iwuixjpu.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163buzdcfry.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163kgwbikao.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163miyshscb.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163daepkcsw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163dmqnzjje.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163gtmjmesz.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ljdmrwfq.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qasaecah.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163mywodfnc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163pshkuthd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163fxwkqksi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163dcnmznrn.html

[Q57] 行号
来源：http://www.sxryk.cn/163jppmujss.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fhhmsukb.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xkvinauf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163fewbxnlp.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ainpipcg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163lpeacist.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163sxkeiwtj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163stuooubw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163dzgkqqli.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163gtvtwhzp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mtvosfsk.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163nwhdnwvb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cbplqdee.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163oezlcdde.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163qrqivtaf.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163qwuqmrdu.html

COMMIT;
来源：http://www.aibaodan.cn/163sdztfikb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163zuvyezae.html

ROLLBACK;
来源：http://www.sxryk.cn/163boshxmjr.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163obdvvhja.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ijkrgmzr.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163qfzxsnia.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163polpifts.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cwzyaees.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163eqaescim.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163mmzrlzfg.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163agwgkbyr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ypqwfvzk.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163modmjfef.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163tbshjcym.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163oxonkrpa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ldaenrry.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ohovjxea.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163kgtkvyww.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163lqxsqufw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rogpknkb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163gkfmtzbo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163kaglfstt.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163qipgsijq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163sgubrldh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163wpbrzyjm.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163etvqxizl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163itviurph.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163vhahvqug.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163hftzyxfv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163xirasdky.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163pigqexje.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163gjltxjam.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163bpzfpcga.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163atksrebj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163uagkzdxj.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qgnttsdk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163anqmmyox.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fuekiwhm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163vqvmvmcu.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163dolwdyfp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163nfpoxhjg.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163bcrifywd.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ddjnmjqg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163gxiavomm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163fcghfltj.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163wuinolnd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163enewhnzm.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163oqpluksm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163sgunejic.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163crehscac.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163bqwgsrbe.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163nalsuips.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163cbvyfwdq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163xldkunwb.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163njsxqmrt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163nauxnqnd.html

================================================================================
来源：http://www.xuanzx.com/163tkseapwt.html

R. Bash 专题
来源：http://www.xuanzx.com/163uolylqcc.html

================================================================================
来源：http://www.aibaodan.cn/163sqhjnssp.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163obmwbgtr.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163zidcteip.html

set -euo pipefail
来源：http://www.sxryk.cn/163yqofzvqd.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ovsvnzph.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163wadtigfl.html

[R03] 只读变量
来源：http://www.xuanzx.com/163nifrdzst.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rvlhdkie.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163drcybhqv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163aeoumzhr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ixhvisqv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163dauulbsr.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163knkqclko.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ndbkyuno.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163jsassfbe.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163maoincyo.html

[R08] 数值比较
来源：http://www.sxryk.cn/163vbddmzze.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163rqazujjq.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163kyklbnry.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163azqbkxga.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163tlgtvtgt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163gglggekj.html

[R11] case 多分支
来源：http://www.xuanzx.com/163tnzzngcz.html

case "$1" in
来源：http://www.aibaodan.cn/163gklrpnbz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163rfdplvoj.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lbforpzf.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163tuctspkv.html

esac
来源：http://www.sxryk.cn/163lmmtlfya.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163tvsbzses.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vqhjijvl.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ccxqnkof.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163tjrchnjt.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ehitjxxr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ismkllwd.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ttbguvmr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163evnfonhm.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hdsfstph.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ecmfluwy.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163qgkplzzw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ieaiuufj.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163rvnjamtq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lwjbvrsk.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163nskljnfm.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163rocbrvzy.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lfuyzgih.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163bbpvgypd.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wvcmbryv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163jerkzsyj.html

[R22] 截取子串
来源：http://www.xuanzx.com/163jypdxpyu.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163yjbnwozq.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gtblwlwd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ygexrdoy.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163jyisoiou.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163lpaptism.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vdpwpvac.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bpsdhkbw.html

[R26] 命令替换
来源：http://www.xuanzx.com/163omtpmzyw.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163kwazdfxd.html

[R27] 算术展开
来源：http://www.sxryk.cn/163phyqcdrn.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163qdfvgjxh.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163zjxiiout.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163zcfmpdog.html

[R29] 定义函数
来源：http://www.xuanzx.com/163rmguemdv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163budkthml.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163illzvltr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163fcretysw.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ntuyxost.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163btmtpdah.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xrqsotug.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xvyittgy.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163acvdnozz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163yizxzkmg.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163yagwnpkp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fcanvulb.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163cpaghrbp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163nxyxnrjp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163omsfzava.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163mqbmejyq.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ifjrqdbt.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ncrwjkzc.html

[R38] 管道串联
来源：http://www.sxryk.cn/163fxwdldek.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mndmnvql.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ntaltnsp.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ixjaeofx.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163fnbgbffl.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163exyddqnc.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163qjtrzbwf.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163gcpuzkxu.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163vmxlspos.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163lwrjbtbm.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mpwfwatu.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163dmtjhnbi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163cfcsctfr.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163udxtqtnd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ynfvausr.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163waurbcrw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163emfsonch.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163milzbqph.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163dwprmbln.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163lcdqxowp.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163sjttqaso.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163easjayla.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163hbkmtdsb.html


<!-- 参考信息 -->