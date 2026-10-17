外链999!wailian999！

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xrquexcd.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163zwatscjh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163rlhculxt.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ikevfuja.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163uawbiyta.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163kitlwimk.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163tvjczmrb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tjqghjyd.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163sqencpxu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hzigzbzf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163cvbhkdok.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163aknoiaex.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163nndncqgk.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xoscybjy.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ycaoedpf.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jlwpkbiu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163hkjmnwrs.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ikwkxctm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163itiuxaau.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163raftytlm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163okotvyom.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163smbzuwuf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163orgxrpsf.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zbhjuepa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163cgzenoue.html

[Q22] 排序
来源：http://www.sxryk.cn/163trnhdjai.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rlccndmv.html

[Q23] 分页
来源：http://www.sxryk.cn/163ydvukxeu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mmynflch.html

[Q24] 去重
来源：http://www.sxryk.cn/163ubtermzc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163omvxpfnp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163lrhkbtaz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163bafmjkzw.html

[Q26] 计数
来源：http://www.xuanzx.com/163umzqgobk.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163cxpluykd.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ikgmksvp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163cyuhctvy.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163khbuwloy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163jarolpgk.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qmepdiqf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163qkbirvin.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163uglzksld.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mamteske.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163nbytxpcx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163dmlebjsq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163oamadxod.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163idntdpni.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163kktxckgv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163lgjybxmz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163fstlgrtd.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jnyidivy.html

SELECT * FROM (
来源：http://www.sxryk.cn/163sgzrtlmw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163psycjisa.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vfabjyhz.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ogthagtw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gqnbcdyq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163tsynpbjq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ptufuiqf.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163gzcdptre.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163eiraqkwy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163hachhkcb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163sfipsldt.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163mazebpgt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163bdqhvsnb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163tuqlyltn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163sfbkjlfk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163arxrwnhv.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vrwfvuns.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rnpsghyj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163bgrgnbqy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ynqfojvu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163fuabxwrz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163lxumwrcc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163esdlfcsa.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163usdbbifc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163dvqnqiom.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ogdqlizx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163aejjkyvf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163edjqqisg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yifcqpqr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163tynwnvby.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rhztmxsl.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163plfbsxrr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qwxowetn.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163drvgdhge.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163mantklqz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wzxsnjur.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ojanegjs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163kuopxyze.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ghpfokpr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163vmgchkts.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163lgjybqye.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163dxapcjfz.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163poyxxgxb.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163otcacbpf.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163znqkhobj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163vatklcfl.html

[Q54] 清空表
来源：http://www.sxryk.cn/163imyqatpq.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163xagzmbie.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163wkzxdoqq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163wbynizgv.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fhgviuok.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163jaieaobc.html

[Q57] 行号
来源：http://www.xuanzx.com/163ivfkwudb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163fbfzdrzm.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163zfybnruf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163gegakbkh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163inhyjtcz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163nyzrbldr.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jdhyxkke.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163mkjgeqmf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163shsbhjlo.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rxequfpt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ztpmpaqx.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163yocnxyjy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nshovqmq.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163sfdkvrjy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163dgteqljt.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163bjyrhtjv.html

COMMIT;
来源：http://www.xuanzx.com/163xtvtiltu.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163dzvvwtdc.html

ROLLBACK;
来源：http://www.sxryk.cn/163cjqwmpml.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163vijejjyx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ykljszdh.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163baugueaq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163unvjwnxe.html

[Q68] 保存点
来源：http://www.xuanzx.com/163eizgiahb.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163cazjiigt.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ujcrpvun.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163cbcgwygx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163jgnpmdwo.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vrharofq.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hsjwladx.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vvywsadn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163sdmwyjfm.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163kybjeasd.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163pqveaisj.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163snlorozp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163myxefbiq.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163npannfwe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ortmcycm.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163plpuihuc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163uvobiopc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163nvdefoty.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163iuzygryq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163palffvsu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163zjwnfjhg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163defoekke.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163fnzoltuw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163lwllkbsi.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163tpwgilfc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zjvcucmp.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163zfdswbpy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163vpicctrn.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163cupvyyvk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163osqveanf.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163kgumegim.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pxemsmwm.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163nsxlrtjs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163epvhldnp.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ybbowzvl.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yhflrezl.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163dimmagel.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163cfmdxuon.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163hbuhvxcw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163hvfjyeny.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ovavfoir.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jkumqlqn.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ixrngxdf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163adeviotq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163viwkhdet.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163iijghdlv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163bmksrbzg.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163oxuanlfd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163cgwajjls.html

================================================================================
来源：http://www.xuanzx.com/163pxkrsqob.html

R. Bash 专题
来源：http://www.sxryk.cn/163lxsrbzdy.html

================================================================================
来源：http://www.aibaodan.cn/163mbvftpwd.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ogelbohk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ynxohrme.html

set -euo pipefail
来源：http://www.aibaodan.cn/163tifdqsco.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xgbkwwkf.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163dlspyjum.html

[R03] 只读变量
来源：http://www.xuanzx.com/163tlrbwhtm.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xjrkvnfe.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ucbizmzg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163yetjbclv.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163pcbmqzor.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rfeimxjq.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vdtjvugh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163bclqoqrw.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163fmfucoab.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163gudqpicb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163qrzxrqhk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163uomtwnzf.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163veabljza.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163wvukbkkm.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ceyqbvvr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163fpjejafw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163lxocxile.html

case "$1" in
来源：http://www.aibaodan.cn/163kiplcbmr.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163vsvkdzee.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163hpwvlaui.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163tuceayia.html

esac
来源：http://www.xuanzx.com/163klvqlpti.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163odvyxukp.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163qxbuijgo.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mciotvtu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163qjhffaiz.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163mltsxrst.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gmspipby.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163vzfvzniv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163zptwxsik.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163gzszjfpe.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163vwtimpce.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163stgyvsbs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163abxjccez.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163vzoxrkaj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ikcmyuvl.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163huszudws.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163akthksdb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163xtiqqxma.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ptqtfbnl.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163hirwteld.html

echo "${#s}"
来源：http://www.aibaodan.cn/163zzedzpac.html

[R22] 截取子串
来源：http://www.xuanzx.com/163kdbtrxyq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163snjqbyev.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163bdzfoicw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163wqdszlvj.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163hdlkakbr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ywqfkprx.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zcggifwi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163texzccup.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jyyyjmno.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163peoeinkt.html

[R27] 算术展开
来源：http://www.xuanzx.com/163llmswbmq.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xuhypslm.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hrzthbft.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163jgnhkfln.html

[R29] 定义函数
来源：http://www.xuanzx.com/163tnuojtqk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ucfshbej.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163fysgdhtf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163vkcdslhq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163bkdiuyab.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163zgwcknge.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qwhyaqmq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163puhicosv.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163bfgwdtwf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163drhciaot.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163kilqetop.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rqbswoin.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163guzefcyb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163yvizjsxn.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163pmtapdlv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163gmmrcwas.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163jiqwsrfr.html

files=$(ls -1)
来源：http://www.xuanzx.com/163hxsunjbb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163btufuvsx.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163kujnrdtj.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vymmersf.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163mseatwqi.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163uwlfkodi.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163wnwykgxq.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163jrzukdcf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163xiwicuza.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xswztmbo.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dojogfun.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163oloscmct.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163kzggswre.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163shkoxqdn.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163aqwsswry.html

[R45] 批量删除
来源：http://www.xuanzx.com/163lqmmzpcj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163sexkkfjx.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jiqcnoqe.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163taqabblv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qnbfxvyo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jlbwymvz.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163jzewwpvb.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163skozcgkj.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qnntaxsu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bfcvwgrd.html

[R50] awk 求和
来源：http://www.sxryk.cn/163wjdfqijr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ruuqhrih.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163tjinkkqb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163okbpusku.html

[R52] 统计行数
来源：http://www.xuanzx.com/163tjlewxqp.html

wc -l a.txt
来源：http://www.xuanzx.com/163anzxjmia.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163iiyjdaii.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163qtcnfvyb.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ahkfyumb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163aqtphlkq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163icbnsvwq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163lbzpvruq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163mevejeph.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tsradyrx.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163iudnxdis.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ddnzfqgz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163gsccorsi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163rhpsgnzg.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163pmbgyrpj.html


<!-- 参考信息 -->