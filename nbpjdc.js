外链999!wailian999！

);
来源：http://www.xuanzx.com/163lllasgvc.html

[Q03] 增加列
来源：http://www.sxryk.cn/163taiigvny.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163srrrjjzb.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163epidebuz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163tkqefycb.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ppwjmaxp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163keyektbf.html

[Q06] 删除列
来源：http://www.xuanzx.com/163euniufck.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xwlbnizp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163hfxzimrv.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ilyhftbq.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163xodixfub.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163yldhaovy.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163cvqoswlr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163yuwppfql.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163uujulagg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163gwivwwof.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163viizgiqd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163sxpevjmp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163dyofxrac.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163oxatbsnt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dnfbxgia.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163gzrwqsiz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ghkptanv.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163exwgxjmq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163dkiooflp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163bulsigbi.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bqtvhirh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hzntpgqi.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jaiqhdgu.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163halcgcot.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163gghymomi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163mymawjbl.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163uioemndu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ckrwcnsn.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163fngkuoiu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163dikxxluq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163luublprb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rowyatsn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xmbvnxfi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163vclotivn.html

[Q22] 排序
来源：http://www.xuanzx.com/163yrdnwyby.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xmmfsacq.html

[Q23] 分页
来源：http://www.aibaodan.cn/163wpykhpzq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163egtaoncu.html

[Q24] 去重
来源：http://www.xuanzx.com/163lbvhbylk.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163fmingaqn.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163psgqyjob.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163bpdeaxxu.html

[Q26] 计数
来源：http://www.sxryk.cn/163ydkmdupc.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ncnhrldm.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vvajnyho.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163geusikmn.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163phhvribg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163eevbtbhi.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163hatxbuum.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ufyxunxy.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rmffkiwq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rqbksfem.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ujswhqbu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163wezqgukm.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zbarnvbe.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vgbapsmy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163jakczhxg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163deosgzse.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163rbyagbxe.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163aecqlhsr.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163terrglbb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ytmzlsnd.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163nwvgjfhj.html

[Q35] 内连接
来源：http://www.sxryk.cn/163fcjfbimz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bbgmajzm.html

[Q36] 左连接
来源：http://www.xuanzx.com/163nfkzodpx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ysxhiwmw.html

[Q37] 右连接
来源：http://www.sxryk.cn/163tygxsujj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163sxypclrr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163durrnzvc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163sbfjilfy.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163rfpraarq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163qzwidxlv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163uezawxkm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ovrjqfel.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qwyoktgd.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163elxmdwzx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hdbqlnow.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163oifvynil.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ueopsnau.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163elqaempm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wddlhwoj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xybviuwd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163yveptobt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163otiaejmd.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jrjvbymf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163asfslohb.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163byovpcqw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163miwjmbdg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wyqshqpf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gdpjztiw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163rvhhnsta.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163dxvffsvl.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163hhksgaoq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163fxcnvbmw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163gqsbhigw.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163dyomtzbn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163mnutqypc.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163rwrdqgjc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163wsmuajnc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wimfgjbg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zgzfdzxv.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163gepcmfjl.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163diuzkjcf.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fjzplnzd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163egklrzli.html

[Q54] 清空表
来源：http://www.sxryk.cn/163fmowvzul.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163jdfisclf.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163bljxfche.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163lqhsiljs.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163xkrazzof.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163xgaquzxx.html

[Q57] 行号
来源：http://www.aibaodan.cn/163joksuuvh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163fmlziknt.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163mimshivu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vulvxwfx.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163zgkfechx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kzduyvmv.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163czxqotsn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163yiuywhxj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163chioryis.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ftjyylcf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163spuvflsh.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qutybppl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vbfibmbx.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163likuueuw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rllrlafj.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163gysxmxqh.html

COMMIT;
来源：http://www.xuanzx.com/163nsydffjm.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163jzwwgrqa.html

ROLLBACK;
来源：http://www.aibaodan.cn/163pebcyumd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163tqrbyeaa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163utimydvz.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163kjisqsnf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163iftgklcp.html

[Q68] 保存点
来源：http://www.xuanzx.com/163orruetsq.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ackgbirm.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163wxadtjkg.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163riikmzwm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vjoiffrr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163oykzbknc.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fwbzcbkc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bczaanbt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ecvxtjxg.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163qtcuyegd.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163cgykvtga.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163utivfvwc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zicvgmzf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163shxycmln.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163pukxxznb.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163gijneqsd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163bogphico.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163nbqmmhoa.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163dsizzrwk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ebyapvva.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163nycjtkhs.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163kgqwdawy.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163rfvorwax.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qtpbwtga.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163qwywgiul.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zauucqjo.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163vwpdyqqe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hrbmuaow.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rwhnwunl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163oazubpug.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163wbzvkksr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163huwhcbtk.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163bnzfsrwn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ufpshyxb.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163zmnonjpr.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163uelpopsg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163tolheldr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163wtlixdem.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ukntznmc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ruxevvtn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163vtkvsryu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163rjhaflqg.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163tkcopakk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163zvqzvgoy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163axxknmbk.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163mzhkdpgf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163wzvpbksi.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163crfvrhpo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163yfgstipl.html

================================================================================
来源：http://www.xuanzx.com/163kjrjlzto.html

R. Bash 专题
来源：http://www.xuanzx.com/163eugcqwvj.html

================================================================================
来源：http://www.xuanzx.com/163yifxzkho.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163jwdbcnui.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163zygnscul.html

set -euo pipefail
来源：http://www.sxryk.cn/163cmzjkjsj.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wmpjhvcd.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163vawvsnge.html

[R03] 只读变量
来源：http://www.xuanzx.com/163csikoxoq.html

readonly PI=3.14
来源：http://www.xuanzx.com/163yzxtjnhe.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ahqdlkon.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163cmbccnqp.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dqxtguvj.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163kneacjsu.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163rnydicab.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xpyejaop.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163sqxblcum.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163vzgsdgou.html

[R08] 数值比较
来源：http://www.sxryk.cn/163njlwwsur.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163jrageqml.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163lnasnxud.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163oknfaehb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163akcbbbcu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xlwzbgkn.html

[R11] case 多分支
来源：http://www.xuanzx.com/163wpvsohei.html

case "$1" in
来源：http://www.aibaodan.cn/163ghgikccx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163viiviwyq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163jgxfpkbv.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xzofqvch.html

esac
来源：http://www.sxryk.cn/163yictxceu.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ncxelxjf.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tmkzhozs.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163vmxargod.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vanommiq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ghrenxmz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163rvimqlny.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163gryuchbn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ysnvgveh.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zgjppzja.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ohrcmfpd.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vxpljfpj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163vntloxxk.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ejuxqeye.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hhwwkzxs.html

[R19] 数组长度
来源：http://www.xuanzx.com/163gjjvyxhd.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163sbzzqtam.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163pvuscqij.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ghotobix.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jkrrxexp.html

echo "${#s}"
来源：http://www.xuanzx.com/163xginjjrz.html

[R22] 截取子串
来源：http://www.xuanzx.com/163pluvuqxa.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163rjtgvdsk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kelnlzkf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163bhyeyfua.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163psdekcpn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163bosluhud.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163itvbgnch.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163urqhnyvc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163aznodejg.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163epsbyjyo.html

[R27] 算术展开
来源：http://www.sxryk.cn/163bzxotbdv.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163nixcytnl.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163phloenkj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tqiofoig.html

[R29] 定义函数
来源：http://www.sxryk.cn/163mawvzqku.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163tyxbtjpy.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163vwaslxoq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163iqkglfgs.html

[R31] 局部变量
来源：http://www.xuanzx.com/163vdlzxpls.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163aayinbja.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163okmfqkfr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163nmcayect.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163bhbjsdub.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163kkcyvqqy.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163fjfttuyr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rgezlkcp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163porcbeaa.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ehwjavob.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163duosnixe.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163eernrmbl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mtoqhtki.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vrwkhtbx.html

[R38] 管道串联
来源：http://www.xuanzx.com/163mjdwxysa.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163inpkyhqc.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163wbltddvd.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xlqqarya.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163mvdjnfxa.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163sgkfrmrd.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163sgmjjuwu.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163bkxesumg.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163livfifmo.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163uqqvdfbq.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163xhedozxm.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163tkyzwawe.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163gveuxkeq.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163jwtexwhh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qrqavqux.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ohpkwovy.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163obukbjhp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cwlbertg.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ozamuqsk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163bbowcbmi.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163lgcwocmg.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163usumwifg.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163gxujsfdx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ehbsioqf.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ptjmbenc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163svjqxzry.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163qefvhhmy.html


<!-- 参考信息 -->