外链999!wailian999！

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jqmwcaym.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163pcnjfenm.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rojcqqky.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163iyaaunyk.html

);
来源：http://www.aibaodan.cn/163ptddosat.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ffwrsify.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163dzzzbjoi.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163lipxrlsz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163tbzaywqf.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163zfhlyeyh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163riqeawia.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ttulvkuf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163lealziec.html

[Q07] 删除表
来源：http://www.sxryk.cn/163zvnmwgux.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ycxycekr.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ihkywuyt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163sgtwyvnl.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163xsazssap.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163mvachnfc.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163xxjqmxdr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163zbozdyoa.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163icehsiwu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163kymtjiod.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163kejrzlco.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163hlheifmk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163oevipqhh.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163sdhojwnl.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tejbscec.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163iinplsss.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163wlgnqlqg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163itevdmha.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163nlzmhjti.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ubbqkgws.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163amptyvje.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163bwdxxzvj.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ehhjlllb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163tihuxvok.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163azdshyjv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163rulcztct.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fzdmecdv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163inirbcgr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163tmcbmdod.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dqwftecz.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ajkpwrjw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163qjnyxojr.html

[Q22] 排序
来源：http://www.sxryk.cn/163hlvrquwa.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163xeadieuq.html

[Q23] 分页
来源：http://www.aibaodan.cn/163vxtwbqvs.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mrhddmho.html

[Q24] 去重
来源：http://www.sxryk.cn/163nodabxpt.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163vytwcbzr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ljbldehp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ixbzhjuw.html

[Q26] 计数
来源：http://www.sxryk.cn/163pembvhgs.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163cgwfhzgf.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qhozznsq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163thwrxbvt.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dwaklhlj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163pjecbich.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163yebxmuhg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163jfxjymsd.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163fpdmeoak.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mrcdxflx.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163zjyrwcej.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ykyjmtds.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163wjregjvq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kofouoyb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163foruslrv.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163tziwdoxq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ynqcgbct.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ulkguzeu.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163kxzkpsum.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163thvzubpe.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163bteuhpzh.html

[Q35] 内连接
来源：http://www.sxryk.cn/163buiabtuf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163iqmwyyre.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ngstomws.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qhizuuss.html

[Q37] 右连接
来源：http://www.sxryk.cn/163mahgbwps.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ltbybefg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163awgjudmd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163trwiokel.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kzgphsdz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163dwbefvoj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bjyfcucl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rntmcybe.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qhgjspcr.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163oddcuidp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163yotuecjy.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163pmneippv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jyvogdlo.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ojjeyqcx.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163hmgmchiz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fukeoczj.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163cfxfrnux.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163wmkxtspa.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163tedukdlq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163wuqbthth.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163htgmxici.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cgunttfa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163bruchjbo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vclacmht.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ygiomtwo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163wdjbhsrn.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163esydtocz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163dwvgqsei.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163yrhxefhj.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gfncefsq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163gqyjptfe.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163wlhojqxb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163fpawjabe.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163zkbuzrak.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163cboqnije.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ibtgiivd.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163dkxcxyiv.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163srrfxrlr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163flabbhtj.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ixcxfvgb.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163uivaadhj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163brrthhsm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ypcczzdz.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163aoeuljhv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163rxgbfluz.html

[Q57] 行号
来源：http://www.xuanzx.com/163hrtjexam.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163mhnthvde.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163kleuuscy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163gwpawxfn.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163nihbfnqf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ptrzrhdk.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163aontvnsk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163aolqaref.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mxecsdex.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163czolckwq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163bimmskhg.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163goofisrf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jujuajhw.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163gcoyldhy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163hgkpnlzz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ygddaikt.html

COMMIT;
来源：http://www.aibaodan.cn/163adnyjjgm.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163iagkytba.html

ROLLBACK;
来源：http://www.xuanzx.com/163nfzkxtxs.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163aqfowbxm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bcxlthdb.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zisrabbu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163zwiyymlb.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163apcsstxc.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163cflbqkxf.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163dxkgxqze.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163fqbcysti.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cnaxjkea.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163eicqofex.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163tujpmjnj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163iqkpyoiv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163qchrwecg.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163zqydqyli.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ipnrtqha.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163qmocqzer.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163itymrnnz.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163uwokriym.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163dtvlgrxn.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ekzsozwd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163azhmdozl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163nnfhkiun.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163lpaynxrt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gigmoqpu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163mezdczmb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163urhwrtrw.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163bupwskkr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163fulxwiiu.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163uwnvfuqh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163nzatxhct.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163fcoszmsz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163gaqxqihp.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163hijrejgt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163uqxeuzeh.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163dxhbknyi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163axmoueiu.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163onabtduw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wdbvlwag.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163rjsloezr.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163rumplcrn.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ycyesspy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ophbxsps.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163usuuoaty.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163eljwfofn.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ralgsawb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163itnixpha.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qqwikpfg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163jdcukkjd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163sqkoyjta.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163alkkozoo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163yurssypj.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163muwlcynz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163njioieli.html

================================================================================
来源：http://www.aibaodan.cn/163qbethmkj.html

R. Bash 专题
来源：http://www.sxryk.cn/163hhnsyosh.html

================================================================================
来源：http://www.xuanzx.com/163slbvfefv.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163kcyeuemg.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163nijfwrow.html

set -euo pipefail
来源：http://www.aibaodan.cn/163nabuqgpc.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163obufrqoz.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163swgmtgup.html

[R03] 只读变量
来源：http://www.sxryk.cn/163eaaohtnv.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jhiugvum.html

[R04] 位置参数
来源：http://www.sxryk.cn/163anhpynpu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163qpyzjmgp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ozxadjum.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zlpffgtw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wdajymkh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ypdsnqlg.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kmwsforl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fmtghwpz.html

[R08] 数值比较
来源：http://www.sxryk.cn/163mgsgovzr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163fjtekdzz.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163whkhtfpk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163luxyfirq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163kceetuap.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163znlzryvu.html

[R11] case 多分支
来源：http://www.sxryk.cn/163loelwqdt.html

case "$1" in
来源：http://www.sxryk.cn/163jqagxehp.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163jybguwmp.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163etjwgkez.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163djcwkpyg.html

esac
来源：http://www.xuanzx.com/163oxzgkjih.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ewodrzxt.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163aurzymav.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163molqeefm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pudfklrv.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163jomcjocc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163npronuav.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kbmuviqi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163seipuisd.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163dsfyzxuv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ncusqlxb.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163edzixmuc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163weiljqev.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163dadhhobc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163alncgkqs.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xzmeuvjb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163cyhyegow.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bscewtka.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163sbvtaihx.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163bhchckuw.html

echo "${#s}"
来源：http://www.sxryk.cn/163augfvxjy.html

[R22] 截取子串
来源：http://www.xuanzx.com/163chzcflki.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163brqwzdrr.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163putimobl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163bzloaaig.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163lhsqtzyj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163peolofcm.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xuevvleb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qbtlrptl.html

[R26] 命令替换
来源：http://www.xuanzx.com/163sdmoiohe.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163sobnffxc.html

[R27] 算术展开
来源：http://www.sxryk.cn/163brlmzvhi.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ndiadeey.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163lwwjpmgm.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qbiweonm.html

[R29] 定义函数
来源：http://www.xuanzx.com/163cqycxtjz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163oyfohyqq.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163cuhponpz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163atyvfdgv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163nuiunodm.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163dwrnhwmp.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163bydjvffv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163cztsixbm.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163aencwlpe.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jjwlknff.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163oacidudp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lbyaffgs.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163luixidwg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163gnswthsp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163iekcdxap.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pnnhqthr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ylrihguq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jehivqcm.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163tonekhuv.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163aqfidthb.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163gxzcsetn.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163jhdowmxj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163bfcgqshy.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163avrrbfyh.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ppfdlvoy.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163qsmzniri.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163dcqjqbcl.html

wc -l < a.txt
来源：http://www.sxryk.cn/163wbahnhys.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163lyodycfu.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163dqffmqbe.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163tzabwrjg.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fpkfejeh.html

[R45] 批量删除
来源：http://www.xuanzx.com/163wwpztfpk.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163tbuqrkqp.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163tvjtycsw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cmwmzhmx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jweaiwcy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163tgjlcyxs.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163cjysimss.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163sgjuqtyo.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163hfmavsnh.html


<!-- 参考信息 -->