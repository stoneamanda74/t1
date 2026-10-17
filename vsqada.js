外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163fouxgasq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163xlmbsked.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163gnfvpfoa.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163rdsqyspz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163jjofvvus.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jtrowchb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163xoavtbwi.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163dahbejjk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163sbbvyxsa.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163uykzwnvk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tyfrqhda.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163moandgjy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ueridkbr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ksrjemii.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hmwwznup.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fheusbbp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163yjfakdhh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163foxpwslg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163jabehpof.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163eobevczb.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hoqragim.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ndagzpxl.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163rxzemvoc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163avuemgvw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163vzmbgkzx.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jbomgdyi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163vyuircmi.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163iapinxcw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163vohsvkhc.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163aaolvzxp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163krapfknh.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163oysphgje.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qczvoczc.html

[Q22] 排序
来源：http://www.xuanzx.com/163fktalosv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163flgybyty.html

[Q23] 分页
来源：http://www.xuanzx.com/163hdelzise.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ctrsshqv.html

[Q24] 去重
来源：http://www.sxryk.cn/163vywjlsdv.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163mtrtbmja.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ttmqxfgc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qrnajgtj.html

[Q26] 计数
来源：http://www.aibaodan.cn/163yorwcgvn.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hdgnkkti.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163umxaxeep.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163jeqztxhx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163aodzjjmc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vfrjkgaj.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163oifpxnwx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163izulfnqp.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163kvkgkzdp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163htqpxyjd.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163lfwbxxcp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163umdmbckr.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163roidgqpe.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iqteulyf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163vmgoysrk.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163obgxuvng.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163rxllsbwx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ukunqwds.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ocseuple.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163nfxedqkl.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163iwjkfisw.html

[Q35] 内连接
来源：http://www.xuanzx.com/163dspkrtiu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163knxeuqyk.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163pmkvmutr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vkorcsgz.html

[Q37] 右连接
来源：http://www.xuanzx.com/163wgbxiqvf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kjbatutn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163wnzjmptw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xgrzrqdh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163zondfgom.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163jxuufcse.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163uditkenv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163gfumrcpc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163hndovmkx.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163fnvwzsjs.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rswkzbro.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mzfhdvoa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163xxoyrrrv.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163girpvkvw.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163kspphnan.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163letxspcy.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163pwnbrsca.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hrvdlvsy.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163whniriqy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163mbuhluib.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163yekoixbn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pwhfybik.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163icolxadt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vlrrrqhe.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mywuljzj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163vkguhqae.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163oqmsygrn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163qecupnna.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163uannvyip.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163mniyoizd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163czondurp.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163dknfvlsm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tllynqig.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163pqyxbqfe.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xfsvpmlq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163jojxield.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163usjszrru.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ttwgntwc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163pvqxfnps.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zbnotpya.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163utxizxvs.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163tyhaqwfk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163pdeoflgv.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163mlgeqsgj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163olnvacee.html

[Q57] 行号
来源：http://www.sxryk.cn/163wkgtmviw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163hbyjqkna.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163seynfsbo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ywmngwux.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163sxqqktrl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ydqsstcv.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ixahgayt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163fhycxndq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163nigwgirq.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163pcfoihii.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163oczwwaue.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163koygpouz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bdxqawkp.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163pfueyrcz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ymhqhgcv.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163gtbyasuy.html

COMMIT;
来源：http://www.xuanzx.com/163qnfwbgcv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163zouwalhz.html

ROLLBACK;
来源：http://www.xuanzx.com/163jxejcuoj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163hthpclvr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ektrfbah.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163geqyvxin.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163icsoeicz.html

[Q68] 保存点
来源：http://www.xuanzx.com/163qxcfnpvv.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163swzrosfm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163zeeblpql.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163urxgpjfs.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ndkufvcz.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hnjftuoz.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163mhqdnlwy.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163orcgeagw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ohbwufqm.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163phfgvnfo.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163jqfcsina.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ipmouwka.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ebrtztpw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163yzjqukcq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ykvcjigz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163bjkgygah.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163kevvvkny.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163pzakzwfx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163pkrjpdba.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163aykqqqor.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163wixgkaaq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kfuxdobk.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163xgwfduqs.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163oaxusgnw.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ywkwtqeq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163trqntcgo.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163dsespkvz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163wrnadblc.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163dgnxwyhi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163gqjllxqt.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163urnhcsou.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kccexvbg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163xabdticd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163uqfifcfs.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163tjbukxdw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163wbhwupkk.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163spkdsopz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163wbmwgrvm.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163jegjuhqu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mezrqbiy.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163erjdikjn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163dyrrgmoh.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ruagtosl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163rsjlpdhc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cofjtkro.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163runxkoof.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163juduxgiq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163byeplexg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163stylwrxz.html

================================================================================
来源：http://www.xuanzx.com/163gtvvhfvz.html

R. Bash 专题
来源：http://www.xuanzx.com/163iolbioqz.html

================================================================================
来源：http://www.sxryk.cn/163wdnzstaf.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163aknryqwo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gakylcum.html

set -euo pipefail
来源：http://www.xuanzx.com/163glqhpojp.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163gzugento.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163cdfvyqir.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ydmuktol.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cuhwhrng.html

[R04] 位置参数
来源：http://www.sxryk.cn/163afokhbyp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163zolsyqbq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163vweidtrm.html

name="${1:-default}"
来源：http://www.xuanzx.com/163wazkzzsu.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163arhaylqf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163niudwsuk.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163lvzgqjfr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jftqqaws.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xtssbzud.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wvzqeecs.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ncyvriik.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ygrvxvfn.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163stqzwzoi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163fcyhaess.html

[R11] case 多分支
来源：http://www.xuanzx.com/163sevwoqjl.html

case "$1" in
来源：http://www.sxryk.cn/163sszqgqqw.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163aspcvjkf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163bkmisgdj.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kxbcgyqn.html

esac
来源：http://www.xuanzx.com/163nvhorpsk.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mlhhvdqj.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ebepwwjc.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mgkyflhk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163lirusqqy.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fhmfklqu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163eehlsvng.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163okttlife.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163dishvyfk.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xqdtnpxo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ehfiufdh.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163dncrqjld.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163xbuprrol.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163uovoimsw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163dsngutme.html

[R19] 数组长度
来源：http://www.sxryk.cn/163rrgmqhtg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163jywsqcfm.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163yfkvqjhv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163imqvrgky.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163wckcbemc.html

echo "${#s}"
来源：http://www.sxryk.cn/163tatmysfa.html

[R22] 截取子串
来源：http://www.xuanzx.com/163yjbkynhi.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163eepovmey.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163nrudzcwg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rhjwfzli.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163uwetwvkp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163psujgsyh.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163nptfickc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163wehbliwg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ttvsqtgd.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163mcxwzcqp.html

[R27] 算术展开
来源：http://www.sxryk.cn/163unvtqepd.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163olbsmdxk.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163fssorgzz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163gdbkgqkh.html

[R29] 定义函数
来源：http://www.xuanzx.com/163hvrmecht.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163dfdamefb.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163vcbafhjo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163vkabkasc.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163rexsshua.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163hebnzzoh.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xronvgqh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163urspasru.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lvxvqmhf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163eckxayhp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163rdozetrt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xjcwvywb.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163esmqgnla.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163osupscoy.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163wcxkfrbj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hyunnmhj.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ocnsmolb.html

files=$(ls -1)
来源：http://www.xuanzx.com/163lrynyful.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hvthfhyv.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163btnjaxsk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163deodorhq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163qfxbntoo.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ntojpbsg.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wdxzkecj.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xyvitzfu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163nbuuoebt.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163iqryrood.html

wc -l < a.txt
来源：http://www.xuanzx.com/163tqblqqrn.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ycwgnwvb.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ehhtxpew.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163imsreetl.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lxmtrgln.html

[R45] 批量删除
来源：http://www.sxryk.cn/163zvnnitkc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163qdwbatbl.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163rhvphsor.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163msfbqnjd.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163epbnovqj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163xvahxuza.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163hpojqgte.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163cucfvzlq.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163gxbawsyq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dcxakbkp.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qutxqdpr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163irmxdecn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163gowhzbuv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wkxftewn.html

[R52] 统计行数
来源：http://www.xuanzx.com/163mxdlgqvz.html

wc -l a.txt
来源：http://www.aibaodan.cn/163oevozoqp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vpbnujtc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qdahvtna.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ohxhqhpc.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163xtofnqqz.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163gtjvgklj.html


<!-- 参考信息 -->