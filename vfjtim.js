外链999!wailian999！

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163kwtdnndq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163hpxfddcw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163hbknlzpg.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163cfmtvlql.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wucpnnxe.html

[Q22] 排序
来源：http://www.sxryk.cn/163xpbzvtmh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163nypmkqwa.html

[Q23] 分页
来源：http://www.sxryk.cn/163asozuuyr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163zqlqchch.html

[Q24] 去重
来源：http://www.xuanzx.com/163kroikncr.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163dfzdxuhu.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163zyazzzvk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ydvewqhw.html

[Q26] 计数
来源：http://www.sxryk.cn/163tqvbxhpl.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fwofejwd.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ambdmcgc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163xhzxxuca.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163wquyhdit.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lpabjhwt.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163cawoumhd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kfvnxpxb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vuwrweta.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xisjlbdj.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163qgvgrwhr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ypckpjui.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163lpavchfg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xbitncng.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163tglbvbbu.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hnczmaje.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163jamiskqj.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163phiuyqli.html

SELECT * FROM (
来源：http://www.sxryk.cn/163qucwfqtr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163mtcrvpjs.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163qobzxxnf.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163aoqxqaxs.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jbdmiqhg.html

[Q36] 左连接
来源：http://www.xuanzx.com/163xtjpkjtt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ntbzimgy.html

[Q37] 右连接
来源：http://www.xuanzx.com/163fulffrba.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163djdzdzba.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ulmhqtnd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qousmolu.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163coxiwido.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163kqvtagmg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163evqsgqqs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163kwsefczj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ozsozupu.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163alffzwyx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163iuouxnla.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mzwzbhcz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163kfouiwvt.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163hifnokmk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163krictqoh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163grxpocuz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163kasmrlvp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cetbkphr.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163xctbbkja.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tmzwupva.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zqrslpai.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jfhgvygm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163vojubtcf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qgdqlepa.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163sxinfeqp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163japtdncm.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163rcjrihbj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bxwlqucp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163gwretkck.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163cccxnvps.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163lmxwwzfb.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163breduoeo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163oamopzuw.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ejaifphq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163jyqljweu.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163bqxqpqgk.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hgfdbnkj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163hpcffyvw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gnpkemde.html

[Q54] 清空表
来源：http://www.xuanzx.com/163fwucxgpt.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163pzyvcxcp.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163aaiefahw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163dwgceefb.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163otpdyvxg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163chjsnhlo.html

[Q57] 行号
来源：http://www.xuanzx.com/163copbtiww.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163auprthnc.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163dwbkclqx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jhploldl.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163xhwhzfho.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163nmcukmrc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163bkcwyudq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163bkvuykve.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163wfjdzkzq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163vrmwvnsi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163pfvsaejz.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163xketdzjf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vdklxykq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163havucdeh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163utirgnpk.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163vgaixmxh.html

COMMIT;
来源：http://www.xuanzx.com/163ocfznkos.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163jnddgnfl.html

ROLLBACK;
来源：http://www.sxryk.cn/163mmblajpu.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163cxutjdml.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ebjhkhbj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163dyebjopv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163drjftyir.html

[Q68] 保存点
来源：http://www.sxryk.cn/163spoxcgoj.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bfkgpche.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163pjyppazj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163rlpwuzcq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163nyogzqei.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mttgrlpt.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fjdzfcvl.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163hlpesqwa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163gjbqtolf.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mphepczh.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163sunwjyal.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163hmlmgeia.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163aryjohls.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163gurnyfcd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163iallcsrx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ticqiskw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ygwxlyjl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163drtbktgg.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163crwnavws.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163hrmksegd.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ijnvgiop.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163irzandxx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163yyavhnpi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163didurvkz.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163mvvonvzv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163vfipwfmb.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tftecdbn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163kwinlrjs.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rwpbhdbv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163yuuxrswj.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ztanjcsm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163pqjqciwg.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163azwwahps.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163aadgjehg.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ytqzxbwa.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163uralwxwh.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163xzatfrpn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163fkggdyjs.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163yqebqkxq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163pswplkmf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163scwbhcda.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163mueujtca.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163onkvfsop.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163hwsrnocq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ilptwzdt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163qqwtonjg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163houveulx.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163afinqdlh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vfghthms.html

================================================================================
来源：http://www.aibaodan.cn/163zynuvanu.html

R. Bash 专题
来源：http://www.xuanzx.com/163qrpfgkjj.html

================================================================================
来源：http://www.xuanzx.com/163njclkjwd.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163cgvsolvc.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ckibjmki.html

set -euo pipefail
来源：http://www.aibaodan.cn/163bipugmwk.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163yjmdyivw.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163kpdxlrni.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163genxirwl.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vhtnjblx.html

[R04] 位置参数
来源：http://www.sxryk.cn/163qbhnxcjg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163pyxreygt.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163atgtfqza.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zncdosig.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163knmnxslm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dxzhybvt.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163uskqvqsy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163bxtiydoh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gyjhicmb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ueahrwyp.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163obvllwfl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163vlodexrr.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lvufhdyq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kbjoyild.html

[R11] case 多分支
来源：http://www.sxryk.cn/163anpkcpqi.html

case "$1" in
来源：http://www.aibaodan.cn/163kvokcxrh.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163etjvgnaa.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163scehxfqr.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163myduwoju.html

esac
来源：http://www.aibaodan.cn/163eyizpowy.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163yhdkjbln.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163uayekmul.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163amrxwfyr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163mmmpfnnm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163gdawvety.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163awyemjkw.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163pnytwynf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163mazoyfmg.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163njvoesqf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163mxzmnszz.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163fqbyypbc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zeexgxcz.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163jzyblnfb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zkxdedtj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163suyetkgu.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ntkkhhfn.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yxikzxle.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ifstqnnb.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163tylihkup.html

echo "${#s}"
来源：http://www.sxryk.cn/163omdddcaj.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ufitnrec.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163hvmttvxr.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163efisnbsy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rcgilkcq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163zbrumkhb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163vfatpakf.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ptvoyvdh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163cfrttshy.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163bbszeqtf.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163fjbjkegk.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163uoayyaeb.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163crapmuzs.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163pybqvrqz.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yahstgrz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163xljtlywo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fdpegdng.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xwzqwmmx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163clrhekut.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163choaoqoh.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yijgxvtj.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163wgwhuodn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wyyasxxj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lvlhovbc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163pnlgqhgn.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163sldpzdtt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yuyeqxwz.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ddcfmbhc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163maddhbaw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163lsfxsrtc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163pffyjwza.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ekfxrffl.html

files=$(ls -1)
来源：http://www.xuanzx.com/163cnaxfjkw.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163llpqynlm.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163lmphcvdz.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163otdzfkwb.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163eqqpoxzx.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163nuacyppl.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163hhpycxoh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gutkktau.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163mvomojjh.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163uypenchf.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jzqfnmdl.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163flmkescc.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163bvpaftyw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163cbmnuwoo.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163aeizpjsa.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163saiyfmid.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163sxmydjps.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163eqoypunz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wboujwqe.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163gynzampk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ublffddw.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163tmxigeev.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hprlgjka.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163iscphzbn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ldsnojjb.html

[R50] awk 求和
来源：http://www.xuanzx.com/163lxumnjge.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163bpvqvifx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163pkescort.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163qgupgnrx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163lkixygcg.html

wc -l a.txt
来源：http://www.sxryk.cn/163qjrlelff.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nnnmzipc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ioqclpie.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163uhlwhikf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163dqtqpxkj.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163gxtwqpeu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ptcsmnig.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vyuhpmvi.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163wttttijd.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ulfxjmgl.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163esjxrras.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qgdmyctq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gwbesjsx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163xnitldgs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163fvdwbvhz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ofzjbrxs.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163slqlfzzp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163njdjwbah.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163lymkffsl.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163gtcsifuk.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163misavxpw.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163rdedgzaf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163skfpiobd.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163famsyrcn.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163isyeksla.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163fsxxfkxa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wmcbeerc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163sughlgby.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163mlxetntp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163eespsjbr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163rtezarao.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ejwuksbr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zqrhdwid.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163pkmebjgq.html


<!-- 参考信息 -->