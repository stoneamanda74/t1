外链999!wailian999！

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163fyczeiwv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163gvqwufym.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ouunjajd.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163bwlxynig.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163hcmnkpor.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163jhfsckum.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163xmiupwxf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163fcifdxzg.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163kfuygyet.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lcrzxxgv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163kjieqdey.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ynivuydt.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163sjkiesow.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163trlznffm.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163zpuqnqio.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163bramiosg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vqfgajgs.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163pnmpdvkk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ioamcwdy.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kjjhwsjc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163nicvyuye.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163hmgrcjyy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163taxxxviv.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163bagzbryd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163cmjlklwd.html

[Q22] 排序
来源：http://www.aibaodan.cn/163qhinyssf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163mrjtouvr.html

[Q23] 分页
来源：http://www.aibaodan.cn/163oxvybfql.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163nzntkbtx.html

[Q24] 去重
来源：http://www.aibaodan.cn/163tqodbgym.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163houszejk.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163dusnicsk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163psdxujlr.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ypawnomp.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163tknwhahh.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163hpyuqhqr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163oaaebiue.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163wxyaeyny.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163iupqzknt.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163sgsiigcr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ivlwlpbo.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163zkkcoovi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163phmsgxco.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163hixtibng.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163padccjqc.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163fiyxaceu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gwmveesk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xitnvejc.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163sneomcwb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163aucucbzq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163hzncmroi.html

SELECT * FROM (
来源：http://www.xuanzx.com/163urebkcqv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163zpffpper.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163wzabcjis.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vsykqfxy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yjwsacjr.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163djfnpfdq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163acqrhrke.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hjfxxjfd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163pkpdctxr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mvqmkmjl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163konvmowm.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163maotazjc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163wruhcqdd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163cprrpwgf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163cnxturwc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nbjubgft.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163fueukyke.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163cdpjrrwd.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163kercimvv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lvjpmoll.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163vxyyozic.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ndwncatd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ymedlmgx.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163dmrnmess.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163mwbeumcm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163wibanncx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163mkdyxvoe.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163fdtapkav.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163skgxkbjr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163bomfqass.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xgbtzxwv.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163qtpfkfxp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163uuikbzvo.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163oaudqsav.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163byukfozt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163kpytnlxn.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163wnicifik.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163wghycikh.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163mnnjcwwq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163iezyowjb.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ayjoaril.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163wsjdobub.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163wxhlivyd.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xqiviord.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163vwsrsosh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163xsjmzkym.html

[Q54] 清空表
来源：http://www.sxryk.cn/163xvzlbiwl.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qqvagqtr.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ecogkwqb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163sspbddvf.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163vkjpbuwz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163asnhoxzb.html

[Q57] 行号
来源：http://www.aibaodan.cn/163kzwafzjo.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163krggxyhm.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ntqukrza.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tiwswldu.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163aoppblyg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163rvrmdjwc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lvhdnbzw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163hscqbzuf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163snonywlt.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163xitbecsp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yzxolujd.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ukkgugnt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163iytvbnxa.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163joymyrju.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163qyerduos.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163wdyvqdfy.html

COMMIT;
来源：http://www.aibaodan.cn/163ryidzdra.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163yeymlykf.html

ROLLBACK;
来源：http://www.xuanzx.com/163wsecyqrh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163fdkfdpmp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ytxlgmcc.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163nfgjdfdx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dqjkudpb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163mgafyhqt.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ieywvtsd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163torkisge.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163iigbobss.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ytdmvivp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163mfzammvl.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163kbmbhgfo.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163zwpvfqih.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163nscvygfr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mbrdhudl.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163cfawudej.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163cpwcjyez.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163gtdusofp.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163konbjkeb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163odxuczxl.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163rdwzmxlz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163dheonpxg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163qhlcycve.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163txstraoj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163pghsnapo.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163hdadfxbz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ftywtuhi.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ytdyrwks.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163grsldvvj.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163lkhpahjz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xcbcvnkd.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163whnlfmiq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163dnvogiaj.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mniywhqe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163irikhhdk.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163dpncjkrl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163bughzhkz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163rfxbyrlo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163rgrxftgc.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lzooufnd.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163wyyswgpv.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163jxnmqhbu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163grxtxzxj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163pdbngyay.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ejibiudo.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163geepqvcy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163noezjzlz.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ydxasojx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163djzeylzq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qlvgupcr.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ohrtwdni.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163csjoriql.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ampuvkxk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163gwhynsge.html

================================================================================
来源：http://www.sxryk.cn/163pgcsrbgd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163bxuyuwjf.html

================================================================================
来源：http://www.sxryk.cn/163lpodzbcj.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163atjteway.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163kkkljnth.html

set -euo pipefail
来源：http://www.xuanzx.com/163ytoebuxp.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163amijcnti.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163hnvequbk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163dgqvrwdk.html

readonly PI=3.14
来源：http://www.xuanzx.com/163tkabxhnz.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bahiojlg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gwnvadqd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163hcjuxrui.html

name="${1:-default}"
来源：http://www.xuanzx.com/163nwenorew.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163uvzrqnzo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163anwbdmla.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163pjlpenii.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163fefrocxt.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163whnlrdqh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163layyqual.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ngrriiae.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xnkmouck.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163pqadskud.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vdhnnhqt.html

[R11] case 多分支
来源：http://www.xuanzx.com/163erviloao.html

case "$1" in
来源：http://www.sxryk.cn/163vrentypy.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163anmwqtyr.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163pwqkdqmz.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ajnrxpjt.html

esac
来源：http://www.aibaodan.cn/163zjutpiar.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ncybdajn.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163dkferjey.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163abefqjpg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163khyneswk.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ooncissx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163grrmcooc.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uhrxvuqi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163fjgihauu.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163wifnfpgg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ldjraetd.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hdhpvmam.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163gcvurfcy.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163nopqhoeb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163tnryprfa.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163bdxnszud.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163wxerllbg.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163nkxfpskz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163bvxltllp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163liqkxhtp.html

echo "${#s}"
来源：http://www.sxryk.cn/163nlmbiwcu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163rethffoh.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163dxtkihzs.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163aidrzeli.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163waguoiej.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163zxkqnpwy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163yosyxicz.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163djtsbnmc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163dltbkpxc.html

[R26] 命令替换
来源：http://www.sxryk.cn/163moqqfjjg.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xfdqnfze.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163edcdtoua.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163vhcwjnae.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163wyrxjego.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ampjeehr.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kvjbgcyi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vnibauvy.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163gjgofqdj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163gbiledqd.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163aquuqswz.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163qsihslbg.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163prvdpmto.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qjcuiezn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zuneaqfu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163kqrqdrkq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163spgnduka.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zilsfcpz.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163isxafeqr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163nyovljzs.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163mqpxizvn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163psvzmndk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163dneqhkcq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vmuvfhul.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ycflkciw.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163pjdbesql.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jekeautl.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163rigfzshp.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gqslogce.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qexwpqup.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163qjhcqrti.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163tvvxtkli.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163zfkeorrr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163fmgpckld.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163fflfgccr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163mxkycdkh.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ytjpweyb.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163jqatmeln.html

[R45] 批量删除
来源：http://www.xuanzx.com/163lucqqrfa.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163gvweyapl.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163blckbgxu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163qstkfjby.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163phsflwrz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jbcatvul.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163dawdilea.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163xqtwywhb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163zxlqhche.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163fdzdkhbm.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163isjrvgpy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163bqaackwq.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163kxmghfeg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ftddsmzo.html

[R52] 统计行数
来源：http://www.xuanzx.com/163jdgdgbsl.html

wc -l a.txt
来源：http://www.xuanzx.com/163wmphrxmr.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163sglyddtn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163pjhjouww.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163mazdcsql.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jkztlvcq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163cfkqlfpe.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163dvizaocf.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rhxvcise.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163dvsskqvw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163hagpzkab.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163bbmkdmtf.html

[R58] 下载文件
来源：http://www.sxryk.cn/163zmtokcvs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163dknicbjd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wcpjxpyr.html


<!-- 参考信息 -->