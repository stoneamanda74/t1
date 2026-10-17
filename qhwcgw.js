外链999!wailian999！

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ezanirqq.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163bcgftpsb.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163huewvpfa.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163igeahqjx.html

);
来源：http://www.xuanzx.com/163hakdifmy.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163xpgtldjo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163nsemphzf.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163paifvveu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163aekzquhc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163bvzncude.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163joznkxbr.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qyqaiqxy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163tpaauccb.html

[Q07] 删除表
来源：http://www.sxryk.cn/163echuwyic.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163udawcqxr.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163uvocztkv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163uqcvakoc.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163vndlbjho.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ebigsipv.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163uxktnqqj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ibkmkwgh.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hsfscrpr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163wmfydjne.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ovdraipp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163uopsmhqn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163bzkzuksy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wgjlzors.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163wsugjujk.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163tzvejvnd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163rcxefyoj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163kicmwdgv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163wlsjtmwj.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zqqnoprn.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163jlekmyfm.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163uatequdn.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163pogtduas.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163qkhtcpyd.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163wmtujlwl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163kqjfaaoj.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cbklcdou.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wdmlxejh.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163caikivcz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yqyewlvi.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163vyiihqaz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163afzinjic.html

[Q22] 排序
来源：http://www.aibaodan.cn/163sojcnuln.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163tbcoznbs.html

[Q23] 分页
来源：http://www.aibaodan.cn/163eevkxvac.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qnmseajn.html

[Q24] 去重
来源：http://www.sxryk.cn/163iwktlzvf.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163skbkjmsi.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163xornoiow.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163muzpttvq.html

[Q26] 计数
来源：http://www.xuanzx.com/163khpukhhx.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hwrteygd.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163chsuhibj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163cwpvmiuo.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163defygalg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163utilxqpl.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163vddfyyxh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163xgffjpsm.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163foxcmklu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qpteqhzd.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163alziqhsc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ldevquax.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gjrwmfuh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hcditxpv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163hgkpunxv.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163nzggpofs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163rlkqmiqk.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ixzwxokx.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163trnbxjbq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163fqedvklk.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163drsmedml.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163iukentdv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vsspacgm.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mphmtlpr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zpnzdvlf.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163rrcctmjn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163spnttfim.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163vwvqrcwd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163cibztvcs.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163udewvurj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163qysqdexd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163tkuvovzb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163zsywqssy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ltdgiwph.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163spjsgtmk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163qwdudjuo.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mpwjzfyi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163aivzsrbr.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163dgerwvlu.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163duktvyhw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ttyjykux.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163zamgixcq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163awrcugwk.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163rndvasdt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dhvjcxae.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163colnwjoq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163fqpxfogp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163cligjntc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fuvvojhd.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163kbizpwba.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163kuoqsdyn.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163gpxuvylk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163daeqktox.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163cmnvaqvg.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163cavtsxlk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ptslpkqk.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163cqqlgavq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163yfjjoxgm.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ajpmdmlj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jcpkbbno.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163dtmlnzdz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163clvutswi.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163qnklclcs.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163joopqazo.html

[Q54] 清空表
来源：http://www.sxryk.cn/163azxwoksh.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163itjflfdm.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163skeclhpr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163wvuuzarm.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ptazyylv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163nhnlocja.html

[Q57] 行号
来源：http://www.aibaodan.cn/163gqbzofgw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163uvvgankt.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163gnpdqdqj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163behxkbqd.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163syntlupy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163fkfrewfa.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163aeyudswo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163fmcqoeem.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163irdivarj.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163xsfsiapk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163czupadpx.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163bmsgmlop.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gcnfautp.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163bjfbdqud.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163hwnfkfon.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ezarskoq.html

COMMIT;
来源：http://www.sxryk.cn/163lswtxgpe.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163zobemmoa.html

ROLLBACK;
来源：http://www.sxryk.cn/163smphiark.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163wbvtwmfe.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163dppzjziu.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xrppnyes.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rvvgefat.html

[Q68] 保存点
来源：http://www.sxryk.cn/163trufvfzu.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163cyyjqwcn.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xbgoowro.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163pnbbxbxf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163bahuqbns.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163rhnrxaqa.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163sufikeko.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163irzodutr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ewgqursq.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rkphsmab.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163bvbaxtnw.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163cjaxakqm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lvbdhumh.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163yroimkyw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163evxhnume.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163olsteejl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163tykbkjnv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163nwfhfrft.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163kxunykta.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163hnxifuxs.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163syazvnwm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163outnjdrx.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163iplhvrzc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163muprekxd.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163gwmbpwjx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lcrhnolr.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163whsywtur.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ivmrodut.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rfgilmux.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ulgcxafo.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163bpmelwbx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163xgqcfspw.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163imdxrmkh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163elgvumeh.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jcziimlh.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163bgcocigo.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163pbzkvnqb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zgkujfzn.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163cvxwwzha.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ktelgvbk.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163jdmwgsdx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163bwkjintb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ykkvvgcz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163hfhounlm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163zcrcsskq.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jcvdmsmh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163xgfacpwz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ajwbmejp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163acqlriix.html

================================================================================
来源：http://www.xuanzx.com/163bkxgtven.html

R. Bash 专题
来源：http://www.aibaodan.cn/163clpwejhk.html

================================================================================
来源：http://www.aibaodan.cn/163wzvpudyj.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163uuotiwov.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163wnviauxa.html

set -euo pipefail
来源：http://www.sxryk.cn/163zwxwarwi.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163denivyrn.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163wvhhutfo.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163auvcxtlg.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dxxucryt.html

[R04] 位置参数
来源：http://www.sxryk.cn/163vrlxrssc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163fdyrbino.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vblnkiss.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163dtmmprbr.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163syqhzyyd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163gvbqzqcg.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163xrotvwno.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163idadibyi.html

[R08] 数值比较
来源：http://www.sxryk.cn/163tboiorly.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wxsqzise.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163dmpapeqs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163uvgcisxd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ujbyxxjl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163kvqqbgcu.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qrnwicbt.html

case "$1" in
来源：http://www.xuanzx.com/163lxsgwzqw.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163aoqfasmu.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163badmbvue.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163coqzzeqf.html

esac
来源：http://www.aibaodan.cn/163udoajhgb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163fzwpkatr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163pqcehjff.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163bqqupjaw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163irfkzetc.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163potuybyi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163iuphexci.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rhodqqws.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ciawulbz.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163pmjrmsjn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163deiacgaa.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ktqphtuq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163cvcpwhrc.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jkiaprjw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163twhmdmum.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163yrmeswau.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163swpiadkt.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qmezrtid.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163brxlszhy.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ndkwcamj.html

echo "${#s}"
来源：http://www.xuanzx.com/163abfwmbyr.html

[R22] 截取子串
来源：http://www.xuanzx.com/163uqlujglh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163fzjlcbel.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163potvdnnz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163uvpvopws.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163xahzbthc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ojdxmzyh.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163humflofx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163gpdmayeq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ccklnpzd.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vqbmuknk.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ayltacgs.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ziuobpei.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163bhjyvwmx.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163znxxmomh.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ltwsiccg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163iprhndzr.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163oetgadsi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163pkqyvhsd.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163afdwzyvk.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ebkwdfts.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163pcwdvcri.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163gpqynvit.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tbrgsbtt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163yudsfbxb.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163mujnagao.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pjrjljmj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ohjokqiy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163xcprxikw.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163iciqinrz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163wncavwpt.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163yberunus.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ligczhje.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zkvmjbsn.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ksajqauh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qjyilwyt.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163pmzdnlvn.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ntvkbsar.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163uypxuucd.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ulwgndkx.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fdlenkew.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163lfacodgi.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ahekqfuk.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nojwcxfr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163eaxzxzzf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163cwlpnxhb.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163bsiankhq.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163pmcsrcli.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163jzzbvhbo.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ejhkrfgq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163bhhlmbbe.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fjtdxjso.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xhwvyagh.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ktigdtoz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163lpfjkwow.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163cwhmpjih.html


<!-- 参考信息 -->