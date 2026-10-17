外链999!wailian999！

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rhiuhbww.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163qwtucrco.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163payerrnp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163dajoudwc.html

);
来源：http://www.xuanzx.com/163cdgfviyf.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ltkmofiy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163awidxmaf.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163iojyllgt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163amnbrvvh.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163twajfjln.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163zsgeywff.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163caqqslqx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163exllhodo.html

[Q07] 删除表
来源：http://www.xuanzx.com/163hoaqzccs.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163mxrdtyuq.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163vzbcmnva.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163sqbfblyq.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163oqqnugcc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163skkmzxat.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163oqlhkucm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163agbihvla.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163djfvpqbl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163tazvwiww.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163nvenzrdc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163bxbvewku.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163zarnciuu.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163qquavmlm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fecnmaev.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163thgvpyxw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163csdahxyd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163bqtwuadt.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nenqllvo.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163pgwdpkvo.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163aibpbhvy.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163hqjnemuo.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163leeeqekf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163rwscuwtf.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ifhuigni.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163msfpspno.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163mrsecciv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163jqkesowo.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163gkrzzznd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yunuywni.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163irfwbioa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nypgnlwq.html

[Q22] 排序
来源：http://www.xuanzx.com/163qzfcabmo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163czreyorh.html

[Q23] 分页
来源：http://www.aibaodan.cn/163fhfiznfx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lpmgylls.html

[Q24] 去重
来源：http://www.xuanzx.com/163ooypflfb.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163vamqujst.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ltfowzho.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163pnqjlwts.html

[Q26] 计数
来源：http://www.sxryk.cn/163jgywlwkb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163lnbygczn.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163xbrpsrca.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rfynabel.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ulezexfc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163buspovhw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163kjlogmdv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ykijuiqa.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163atifybad.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qmafiklm.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163lcqyhitt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163yyzresdl.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ddmeqojx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wrhjsqnm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xxcrfrad.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163vizidifo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163xsqsyrgn.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163kqxcilgd.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xpyltdjo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163yaqbubee.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163wllrfiod.html

[Q35] 内连接
来源：http://www.sxryk.cn/163wmyabtsa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cbsrxxdn.html

[Q36] 左连接
来源：http://www.xuanzx.com/163xweelajc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ervkeseo.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ljrmmmpj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163udqlkvor.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163pchcquyy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163bulszegk.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163gstjheor.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163jvumwjzw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163wrulnebf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163igaajifo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163kerrqugb.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163psvhhfsd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163xbepznjz.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163tpcfjcxs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163xurrmghh.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163rueesbep.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163lmvlafud.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163rvbsjmqg.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rldbwviq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163fnwrdaya.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163hgtgtjyl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vrwpnebh.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163dheoqcro.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pjnjtnwr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163tzlxhxsy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bycaxtuk.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163fxiccegw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163niezyjkh.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163wfaowrkt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163zzvhzfne.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163oqwusauk.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163prdlohsi.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163abnlrylk.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163woktcqcf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ptxhmxro.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163oqhlmydi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ctlghgir.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rncaxjgo.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ahnifksr.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163xdjpwour.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163nvsvpvsq.html

[Q54] 清空表
来源：http://www.sxryk.cn/163afqbmwvu.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163okfzhvwu.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163vrcxqkjy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ggslwewv.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163rqufsulx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163weemejzy.html

[Q57] 行号
来源：http://www.xuanzx.com/163ttkddbgt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163kbeddzkp.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qicjaunc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163dabgjing.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ojiloqgt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wrfcbmkf.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163hpcfwqui.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163oksmcgmu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163xspegukw.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163pifbalnc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qtuydfzk.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fflasklk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163aekohhng.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163oodonbwx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163cojtvikg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163zokulyva.html

COMMIT;
来源：http://www.xuanzx.com/163mssmkoqu.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ezaxqhoz.html

ROLLBACK;
来源：http://www.sxryk.cn/163hlgiekli.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163sdzsmfqs.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163icznmugp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163miywznsl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163natgshmt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cgquvseo.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163dkzcjywt.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163cfstyzvn.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163bfixsnko.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hpbckyou.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163iglripvd.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163qtzcgdux.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163icubajwu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163misazvuk.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163potkrdof.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163sedycxkg.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163mzganaxj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163fcfooisa.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163rgtfyryd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163eycroifj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lumbdmwg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163subpgeab.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163yinqltrt.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ijlepzsk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163uonfdqjx.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163fthbayrv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163qmcpmqap.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163vlnhzvww.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163vtgymfdu.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163bcszrnul.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163jvgkcnha.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163fychqjta.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163kdjchqbl.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163wllmkxmk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163pjccjtsh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163gxvkdawv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163hzzpvuqn.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163twixsmix.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163cziausnt.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163vkffyuhv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163altgpyoz.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163zddtkwmr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zepgbjjv.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163uqeqkqsx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163oaifotqb.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163iytkvakx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vheorjwp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163gjhhaijl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163lpgrvfnm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xairyqvx.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163gsbbymkj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163icojmwhr.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163lhtidoye.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163kjwknczl.html

================================================================================
来源：http://www.sxryk.cn/163daxmnmjq.html

R. Bash 专题
来源：http://www.sxryk.cn/163fqfdnwgb.html

================================================================================
来源：http://www.aibaodan.cn/163asyvsknp.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163olcrubpo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163oyewvszi.html

set -euo pipefail
来源：http://www.sxryk.cn/163kersmtnq.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ceslarcb.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163kemyjrec.html

[R03] 只读变量
来源：http://www.xuanzx.com/163rpldweir.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163zcggfvsa.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ulmdcygo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163teoxvcqu.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163faytxaij.html

name="${1:-default}"
来源：http://www.sxryk.cn/163canutqok.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hdizuokh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163barrzvgg.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wiwthqae.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fylmuayb.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zwrmuxus.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163oobarpid.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163gzymaxnp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163uhfjnrfa.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yjcqjegb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163pmydjkjs.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qmsihdqb.html

case "$1" in
来源：http://www.sxryk.cn/163ijisshsd.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163lznvqujl.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163eqmvhadv.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163mcybymvs.html

esac
来源：http://www.sxryk.cn/163ououmupo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rpnynosh.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rjngzfxd.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wjanfxgb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163utvrundb.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163aivoziei.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163dyrrgbql.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163xlnzrxcg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163marlfaiy.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163uzaoxsua.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ewvhcldk.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163wdozjeva.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hlaliush.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163pitkvsjd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163hznjgogj.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163uoitenbs.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163zpdvwfuz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163stnqovmz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163lsctfduk.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163xiekiyyy.html

echo "${#s}"
来源：http://www.sxryk.cn/163heqzgcox.html

[R22] 截取子串
来源：http://www.sxryk.cn/163txnhscco.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fpvoklnl.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ioutlogd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163mleremdd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163slippeti.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163yomzzujx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163uddveilr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ivfrhrfi.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163qvflkylo.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163uoyrvuqf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163qwzxwcjj.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xtxdqpia.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dsedfxub.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163njivhlqi.html

[R29] 定义函数
来源：http://www.sxryk.cn/163pqfqwnlm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vxlaxqtx.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163agznpifp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ktdfukpf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163eoohnbav.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163knxnapvn.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ismnzirl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ctlmqflo.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163eomfdxiw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163sxjhimeh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163konahqfm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fhvvhzdf.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zycresmj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163duiljaom.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wfdozecx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163gycwljco.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163nmtaipgz.html

files=$(ls -1)
来源：http://www.xuanzx.com/163yfglseum.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163cuhwxdsw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163njkzwarg.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163koasdhnx.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ajnvdvjl.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jpdsmudm.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zhqumsfo.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163fmorsgtp.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163lzmegdnu.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163vpvhdjvs.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ooyfshgo.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163racfyxxx.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163juoybpny.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163qqwmkqiz.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163crwzbyrr.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163cuhskdsi.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163trbbucnh.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jojffyqd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163yidgckcb.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fsayidxu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163bsslcell.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163vyeqpoov.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163irvwtclu.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163cpruzlel.html


<!-- 参考信息 -->