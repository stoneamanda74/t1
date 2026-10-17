外链999!wailian999！

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163teqshehd.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163bigxnokd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163pacyawoo.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ygojxtcz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163hinypwxb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163kakiivip.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163wchdhqrl.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ozubrvjq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163symrigoz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163kmmhzxhw.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163aenunfpx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163prjyebpe.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163bmfgxihm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163pamfjpib.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163uprqtxuk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163uzwpeqjo.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ytwnfwpc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163himrohwr.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163cwbclghg.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163pegnuojk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163wbulfwrw.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ydwqughv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163kyawghdb.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163jnfgwukw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163zlfffygm.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163prgbhzpf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tqyrztkn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163dasgnzui.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ucylanjr.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fywdmtzi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163mnppekhk.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ilivdivr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163zrbysytr.html

[Q24] 去重
来源：http://www.aibaodan.cn/163pczphfzx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163idtsrnaf.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163bicjsxlq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qlxyholf.html

[Q26] 计数
来源：http://www.xuanzx.com/163buubwwlj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163kpsamyus.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163twmvjycg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163jmxyyazm.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ascofvia.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163rkpbechy.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163gfxjmait.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163znringjb.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qeenvnqr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xrravwql.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163sitadcjp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163oamzntry.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163beskvnms.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xhulwett.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163qkyvctnh.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163fcckmycv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163yynordtd.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ynwgkdms.html

SELECT * FROM (
来源：http://www.xuanzx.com/163camafkgd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163gfxplkxc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163yyhzmvmi.html

[Q35] 内连接
来源：http://www.sxryk.cn/163lpbcoljc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xpxvcsry.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ohklboys.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qjnukopf.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163afqkgzfp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ibejmcho.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163rfdmmsls.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163mkcaetyq.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163bvqwtfdl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163loskiodl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163nogmofzo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163qgdxgcxp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163caphfrqq.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163hbbbttiq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163elrweeqf.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163bjtyrwht.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163tlucpnby.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163dtlzmvsb.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163fthmktkn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ksnmdnct.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163jsfkogqh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163possjnyd.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163xthtsihu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ctikxokh.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163zivvsdzg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ocmfdfsa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vgexgmkd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gypaqmwb.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mlujrobb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163opetmevb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163txnswpwl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163xbwlmcfv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163hirbolus.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163juxyxbuj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163alhwcnou.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163nvisuvdl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163zwkbtwij.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163fzkgomvs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163jasvlhfl.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163irjsagzy.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163kybaxybn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163jnieonlz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163vakcohnt.html

[Q54] 清空表
来源：http://www.xuanzx.com/163wuuabfpz.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163cwyuvcoj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163dpmyqsaj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ycahvilb.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163iltvznhg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163voydkrde.html

[Q57] 行号
来源：http://www.sxryk.cn/163wgmllxgx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163flzeabye.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163epzfwunu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163gsgdcxpj.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163dnsdomoj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ivaldqrm.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163rseuqehq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ioincvwt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163sdilwenx.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163qslrhxwc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163nwowimap.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jeyqjtbt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163inumexrp.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163jdbvfoam.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163dstpzphg.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ccsnzfcf.html

COMMIT;
来源：http://www.aibaodan.cn/163cyzbyrjs.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163wajszcgy.html

ROLLBACK;
来源：http://www.sxryk.cn/163fxtkagam.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163tgbnrizm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163uagczemo.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163vdlvlxta.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rcxigizd.html

[Q68] 保存点
来源：http://www.sxryk.cn/163tkyzjtsl.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ffzpvkmx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163gdwdouyh.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163cysbferh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ptrqgrzm.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163eblammwa.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163cnhyxlxh.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163oipzjiva.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163wrilhyos.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163vssizeav.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163aspaikba.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zsvvbivf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ciepepsv.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mrgfewcm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163teqtbdqg.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vlelftjj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163upoeqqvm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163xtzqvmzi.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163acgvcvmq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wtzzwodz.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163dxnlrgat.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163omtesomt.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163edgbkjut.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163vaavudfi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163jmzmiooy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xpcdklgw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163nfuzcego.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163jbubldsv.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163qopplxsi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wyupjgon.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gnhmpnrx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163btdulolc.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163hozltnbw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ompjypxg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163nemxldex.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hsjsiuwc.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163afbqgwrz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ladcizwp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163twcfrqdr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zlzprtpt.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163vkhutvtl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163npzebkya.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qtucmfsy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163uffrkmai.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163nxbvmibt.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163vnzhstde.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163rwuvpfuz.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163itqdbobw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163lwqsdyom.html

================================================================================
来源：http://www.aibaodan.cn/163bpouuaer.html

R. Bash 专题
来源：http://www.aibaodan.cn/163lcnsteje.html

================================================================================
来源：http://www.xuanzx.com/163bxotktnz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163fgbmpyap.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hdeyqvcv.html

set -euo pipefail
来源：http://www.xuanzx.com/163bbebwcdu.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163pszmaofa.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ywpezloq.html

[R03] 只读变量
来源：http://www.xuanzx.com/163nyxkvthd.html

readonly PI=3.14
来源：http://www.sxryk.cn/163wkrkxwjy.html

[R04] 位置参数
来源：http://www.sxryk.cn/163fbzjpyco.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163uzmnlbha.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163tzyqwowa.html

name="${1:-default}"
来源：http://www.sxryk.cn/163zxbgjyht.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163xgbpzbre.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163wsaicwqh.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xypkgkqu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163gvkvfipw.html

[R08] 数值比较
来源：http://www.xuanzx.com/163dylnzlkf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ojbnziaz.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ecwdlmry.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163hfvxevne.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163rhjxpmfr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163lneczvom.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163lauknpgl.html

case "$1" in
来源：http://www.aibaodan.cn/163xdkleiot.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ehoyjkbk.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163emeyyxlz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ufgrokfm.html

esac
来源：http://www.sxryk.cn/163fmjbulhu.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163zdfamrdp.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163cmlcywbq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163elvxwtxt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163eghplxju.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163qtoicucs.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163tkccwkvp.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yoxtyusc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163snuissua.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163bknuzfoi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163utgqlgkv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163whgeuhyt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163cuvydtdr.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163fpksyblq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163nkbpymfb.html

[R19] 数组长度
来源：http://www.xuanzx.com/163pglgrull.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163wthlquxp.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163tgkboiku.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163pucklsdr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hrcytgjf.html

echo "${#s}"
来源：http://www.sxryk.cn/163priqhjfl.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163igiqrhmn.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163fwccqpxn.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163urzfxpqf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163eawdvwzk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ljoxsxqp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ewmfvbri.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163wliqrkuw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163omejggic.html

[R26] 命令替换
来源：http://www.sxryk.cn/163mrcbvgnj.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163lfauqmnk.html

[R27] 算术展开
来源：http://www.xuanzx.com/163mbcqggvd.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163kidzcsch.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lawduwpj.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rpedjxor.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163elcerrtu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163uhhadjrg.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qhujevlq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163cixgzqeg.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mnbwafoq.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163qtgwaboq.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163csofvxzk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163sgqwomax.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163mwpmywpi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163earozycw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163yphleieg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uyzsbsww.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163smfgfozx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163hzphfhjp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jfhidpmr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vxlgcywd.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163hmjivvoz.html

files=$(ls -1)
来源：http://www.sxryk.cn/163dpujcvrq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163wdrtejhd.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163rxinzwmp.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163zrhrlwpg.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ovetwllz.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163kdgbbxme.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ciaqhixl.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163stswgbkm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163saepietn.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163deuxuwai.html

wc -l < a.txt
来源：http://www.sxryk.cn/163hgrcaolq.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163dljbofae.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163csygnzej.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163hkxgtchi.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163twolbneg.html

[R45] 批量删除
来源：http://www.xuanzx.com/163sdnmdval.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163grnoiyqh.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163prqyytgm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163nsmstoca.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163vbhctqwj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163nenhyptk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ghyzffmx.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163dxiuihuh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163xypzmzrm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fvinomfs.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rphkcjpd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163okwcmozk.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163txqzprgo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ghqumiac.html

[R52] 统计行数
来源：http://www.xuanzx.com/163xehegfxj.html

wc -l a.txt
来源：http://www.xuanzx.com/163iqwysjpi.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ihwzsodi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jfwynnoc.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163dxflkvkv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163pypevodj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163rrbzsyrb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163titdqboq.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163yflmmnhs.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ffhazmjv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163pwfzfbwc.html


<!-- 参考信息 -->