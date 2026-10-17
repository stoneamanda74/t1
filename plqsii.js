外链999!wailian999！

CREATE TABLE users (
来源：http://www.sxryk.cn/163rcxbrmrg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qejqhvxw.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163anrohvpd.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fackbeta.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163kalfcmuc.html

);
来源：http://www.aibaodan.cn/163wuedkisf.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163yxlpdmtq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fttwiysx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mppmctgi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kaianzwk.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hehpirdu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163yxdklxkj.html

);
来源：http://www.xuanzx.com/163xtysjqga.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163nknwtgon.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163abdqjspk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rvuusitv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163vkhvipfu.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ypdayfoi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163cswbksrz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163htiiehqz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ylzxpybe.html

[Q07] 删除表
来源：http://www.sxryk.cn/163foneflwt.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163hpagrfzv.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163wgdkcfxu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163cultpiaf.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ngddviaf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163vdafytmi.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163bqeiuetq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163cssdyjhr.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163iebqhhsj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163nijxuibw.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fhzvqjzq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163fumfslxf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163dbxloedu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163wmmtbbyz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163qdprtkpr.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ixkkulbp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lnpolugk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163olmqnpiu.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163xfdnlqsf.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163djvwsggf.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163imlnmgbd.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163gtndevwo.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163saswmohb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163zdbmtlid.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163qjqzhxsj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163dfvnlbfr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163mgevdvao.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163suuzcqta.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163fzummsaj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163vyzdzzsp.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ywgltonv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163avqodiji.html

[Q22] 排序
来源：http://www.sxryk.cn/163ubcxpcqs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ehbzdzvg.html

[Q23] 分页
来源：http://www.xuanzx.com/163pgwotlgu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163jekqjttw.html

[Q24] 去重
来源：http://www.sxryk.cn/163cmhkvztd.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163bcaicjsc.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163myrfvuum.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ezxjxduz.html

[Q26] 计数
来源：http://www.xuanzx.com/163vgbzmkad.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163rbawbqle.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163lkqhyvfa.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163lrlinzsn.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163qygygrnp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163msasgvxq.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163xylsblzh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163uaaqgfhk.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ghvzarkw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163snpgpyqg.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163kxyirlab.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163riqrowra.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163krdugndq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kwlzbyin.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163vhffkxwz.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163gpbqkoev.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163reiijwlu.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163zadbrlsh.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163svusdeip.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163cccgfoim.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163zkdhecxs.html

[Q35] 内连接
来源：http://www.sxryk.cn/163llmuvvii.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nujyxxwz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163auzyzouv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163epwdhheh.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163qxncgwhv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ngngqafe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qwpxyozs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ykfoynci.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ipjfaaat.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163qntnjzwo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163mhazwutd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163dkyidsct.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163vtahaevi.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163vpkdaioo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163gdstraxf.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163jjgrfzoj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163mqvjmzwz.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163nnhfkrye.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163yjhgiunl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163qqnjjdwl.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163qdpevzxm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163thmwqvam.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163phqrmqan.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163kgcywget.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163esxrhzhp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163kkacmkgc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163zhjprjpx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mqcyinyx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163hdmkuasd.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163xyyahxzj.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163oapqnpbd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163nsjanukg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163cjiuxijh.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163lhsxpgyz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163afgwewjy.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163uqvsowho.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163csyazypt.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163nrdxxsau.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163wocfmifv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163crzphivk.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163dmxcncyb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163honnxtdo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163iwmbupbk.html

[Q54] 清空表
来源：http://www.xuanzx.com/163wcjcdjip.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ehxdyzfx.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163rssosbvf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163itzrvgzi.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163vsrjsosd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kyjkoinz.html

[Q57] 行号
来源：http://www.xuanzx.com/163pdrzmcdu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163byyxtnlz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ntxityru.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163oqlollxc.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ynoxukri.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163espbylqk.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163dxvulhpr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163cuwbynwj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163pfklwiuw.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163nqyzndrv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163awnnkkvh.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gkaxrurc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163shrbbccb.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ogvfikck.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163gjiibejd.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163kvqmzkhm.html

COMMIT;
来源：http://www.sxryk.cn/163cykfettt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163xzkjnvmd.html

ROLLBACK;
来源：http://www.aibaodan.cn/163azyfxefk.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163cdpfvxhf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163otqwwszm.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zofqqmnf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lmpgmzqo.html

[Q68] 保存点
来源：http://www.sxryk.cn/163fczgzjrt.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ydyiraux.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163delsngxi.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163knhfgjya.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163euycbhpt.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163wiabwtuo.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163khbticmh.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163cydbvbkd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163zoxuiqfc.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163fphyqfkl.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163lezkedww.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163caovjwcu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ccizqqya.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163pcoziebn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zdqjmcrt.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163yhzcjaxk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163tnzqjxkf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ultmkufr.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163xsfcytvc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163kdvtqbpe.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ddlkcyfp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rljfkiit.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163btdzckkf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163islpzofg.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163qpbvdwfb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163djfsocjl.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163mlusmche.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ipturiij.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ndfbhfxj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163btfpuixw.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163szdlfuiz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163yecdmlgg.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163xgoybjld.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ulswolcd.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163utrvogve.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163gguvnkmq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163frcxnaqr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163bvmychjl.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163szhaoear.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163whpkkrvy.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163cynmpjbg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163cmpezmqb.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163bylrrbuu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163adupwgcc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ughnppzw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163pfpeiihw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163fpvmlixg.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163eiiliiyk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xwedqbam.html

================================================================================
来源：http://www.xuanzx.com/163dzcpcdwk.html

R. Bash 专题
来源：http://www.aibaodan.cn/163gpmlomfa.html

================================================================================
来源：http://www.aibaodan.cn/163ujzfcqqz.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163igtuzgxa.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163isexeutw.html

set -euo pipefail
来源：http://www.aibaodan.cn/163lmlfpiuh.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163xlaaupbc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163vioqgwtl.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163wpilywxp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163uialfevs.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163egxcysan.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163qhwkgqsd.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163kxqsifqb.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wvruyxfh.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ztvcikao.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ykrpgtlz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ohrtuxki.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163bjpwjacm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163zqkacnuo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163tpkagnqy.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163gxzbdzmw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163aykgnidn.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nalsnlyb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163pczyavqj.html

[R11] case 多分支
来源：http://www.sxryk.cn/163oderxxke.html

case "$1" in
来源：http://www.sxryk.cn/163erhlvwtr.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163czpwsypk.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ywpfuhgi.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163aogwxrbb.html

esac
来源：http://www.sxryk.cn/163vfbdobng.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163zjrvitkr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hzzxsfyn.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163eheprrwo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163aayzgrim.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163pshmnufn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ntxmqgjd.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ymjcwkrt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163oqmmdbmv.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163tmhgedam.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fvujcqnz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ruztbgyc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163mhcrdqxc.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163dilxrtgw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lshgttif.html

[R19] 数组长度
来源：http://www.sxryk.cn/163kakwhrks.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163gtccemoz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163zrggfzrz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163btuwjbbx.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163qycpsovv.html

echo "${#s}"
来源：http://www.xuanzx.com/163zbrppjoz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163neluupov.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163vgbqwotl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163xwabgbzt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163okhemwwt.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163otyndpis.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mmgpgqll.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163efibqbho.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163kukhoeno.html

[R26] 命令替换
来源：http://www.xuanzx.com/163eotztijp.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ftbqcshw.html

[R27] 算术展开
来源：http://www.xuanzx.com/163syurnlkn.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163thgkdsmm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ysxxknpu.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163rgsxyvuj.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hdxhsdmc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fxchkwra.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163enhdxwic.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163vchgxrap.html

[R31] 局部变量
来源：http://www.sxryk.cn/163arucxlzb.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163zumjgoty.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163nqhbfcnf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163amauiqnx.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163jppodvdr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163txuwzere.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163fvzndtgc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dylgytwy.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163iedwvzky.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163qgrzyjrd.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hnhjoqii.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163humygaln.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163eazxcych.html

files=$(ls -1)
来源：http://www.sxryk.cn/163yfxussuf.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163obljbttc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163oysfjroi.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163gbygdiay.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163uytsqkdi.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163rpqyoidr.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163lgzmmbwi.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163lulgjlwd.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163sjfuixhw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163aigaetzu.html

wc -l < a.txt
来源：http://www.sxryk.cn/163eyutxzgi.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nfvagpls.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163lxnprutu.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163wgojjtgs.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163jajrpank.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zeakumrt.html


<!-- 参考信息 -->