外链999!wailian999！

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ixnxveal.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163fmgqbtse.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163hnldochl.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163llpxnksx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163rpabiklt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163guooxdyz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163frueznph.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ijobmlhf.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ulrowcen.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ltzplqoq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163vddwjpgn.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ivouusyo.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163uvszqogi.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163chshpkvi.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163tqytjbwk.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163exwmhiif.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163xfupjcox.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bkrzjbsl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163baotkhsz.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163jnzcotzs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163fklcnslf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163nybohifu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163dnkabgnr.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163vgrrhojo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163fkuytngi.html

[Q22] 排序
来源：http://www.sxryk.cn/163xjgojuzb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163nwqyurbn.html

[Q23] 分页
来源：http://www.xuanzx.com/163ntziunxh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163lnranssu.html

[Q24] 去重
来源：http://www.sxryk.cn/163zyfdimny.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163azjlxlio.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ilxndgpp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163soscxgxk.html

[Q26] 计数
来源：http://www.sxryk.cn/163aksuiuba.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163upcemttm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jjjevfla.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163idmgwqlf.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163funtnkhv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163zckafdid.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163gwadlobd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jwedahxm.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163jgoutlgl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vjoygrbu.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ysujcjrg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163jkstnhtm.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163geqbyzkg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gbodgdpx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ljeitpei.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ndfnvfnk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163fjcsgtkg.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163drkauhfz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163gahglltx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ilhzijnn.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163uzkmzzzs.html

[Q35] 内连接
来源：http://www.xuanzx.com/163duxsmkga.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jagtqwdm.html

[Q36] 左连接
来源：http://www.sxryk.cn/163jhuimueh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hcymawww.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ohqvywqg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ewhzbjtf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163fxvyeqdo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ayfyxwbq.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163oibesixg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163bcdrxpiy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163cjpspkqc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163seupkoda.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163pyzimsch.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163oirazdou.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163skjrkaas.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163usajdhqo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163wskiyywu.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163jevhjmnm.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163iqfccdjl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163wozgeucr.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ipnnokpe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163pjhdadhy.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ptuqwncs.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rzezesos.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163pjrxdjzz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163fxkimhal.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163fylddizo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163kjidbsok.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163vvqnvrmg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vsrritot.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163bmfrbglg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163qxoxwcfn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163utwiobnv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163luvfbknn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163tdtyiyge.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163akwxidfg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163utrykzam.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rjoplzpa.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163aghwlvdh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163uythmnvg.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163gonvybon.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163qxvffvgr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163yatjlurp.html

[Q54] 清空表
来源：http://www.xuanzx.com/163xlizbqyx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163eviocpjx.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163wdayyddc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163yuxvcayo.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163yurqhptn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163earfqkzo.html

[Q57] 行号
来源：http://www.xuanzx.com/163mixskwqe.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163dmxsbpam.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163quqesrbx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163mkvtxwim.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jhjeejhj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163uezhyumn.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tyjbuukn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mxnuwedy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163muovjtfb.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163fmzajlfu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163gxjjnwhl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qzvpcgrm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nhhyjymf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163cekoontl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163kcsjyhyx.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163wzlemlho.html

COMMIT;
来源：http://www.xuanzx.com/163rkbsjbro.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163lfghtkkf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163mbnqrmem.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163inwvkkqm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163glmzhtjo.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163hdgneikd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zqjffwfb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163keasyilc.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163foaywmad.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163gzkzmnvy.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163vssgxknb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163jjigjesr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163rpvncfnh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163tnhfljbf.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kjqxtitt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163gkrdddes.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163fxxwjzxm.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163vnndcbgh.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163uotlqzqh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163yoqzimcb.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163qdjxbfnm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163nypkezli.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163tqamncxn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163burzsimh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vnlsioxn.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163neclgcja.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163bxqjhonf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163lotlwlzu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ugyjthqw.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163inrzwulo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163lwlxzfpt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163kuzlcjpp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163gfvnmfcg.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163puwzsclu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163byzgjulk.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163fxvltvua.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163fufsuawj.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163rdycnzkb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163scqasbzc.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163llmvrudl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163swcatlnn.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163tovmqsxv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163rlognpfp.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hamaiotg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163qlltgzei.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163khddrlpe.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163nvmisypn.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163mbevnzxs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163pnicwpsu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163jrnnqpfy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163srxstidm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163bgbvrwkh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163epsqwnfe.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163gdzyuywy.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lijjxgvm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163uawxqhdl.html

================================================================================
来源：http://www.aibaodan.cn/163deiuetoc.html

R. Bash 专题
来源：http://www.xuanzx.com/163jjoeeeon.html

================================================================================
来源：http://www.aibaodan.cn/163jcwgdcei.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qhbzvint.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163quxwoull.html

set -euo pipefail
来源：http://www.aibaodan.cn/163txwafpok.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163qjxuyvpe.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163uoyfimyb.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hlcqkhzv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dpxctxqr.html

[R04] 位置参数
来源：http://www.xuanzx.com/163sbvwbzwo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163arhbedip.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163yqtnlais.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rqorqabq.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163heajodsu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dothiyoq.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163olvmodnm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163tyzsmkpq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lfnotwol.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ggzwqbik.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zqcbqefp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mvwntnon.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163kxlygbrs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163aicuryoe.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tgkwmhrc.html

case "$1" in
来源：http://www.aibaodan.cn/163iszivdzh.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163hbgcyvwo.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163eypzdrrj.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163admehorm.html

esac
来源：http://www.sxryk.cn/163czcbkmpi.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163azpnnhfx.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tjwfizbm.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163bkihcann.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163bwjxjpzl.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cvfbdond.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163vvjlkvyu.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wnfoowts.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163yhwzvuaz.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163lbmmfqoz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163gazvmkgi.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jgiskkzh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163phqffdtt.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163knwouypu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163gwilpdlw.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dfxqtwvn.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163jisfyrpm.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qludenid.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163wzkvibog.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163whcloujq.html

echo "${#s}"
来源：http://www.aibaodan.cn/163gfyyupwp.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163etwnxegm.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163podmcswk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163iotebbly.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163lcsmuifg.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163xxhgwcae.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163gjazmthj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ivdopazy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ybcdpeqp.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dgeojoys.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163lmrjogxb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163jdmniycn.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mxjlvtwk.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163kptcnxdl.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163fexzolsx.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ubwqramt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rdlzhqgn.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rxmmeqgw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163tsabqwmy.html

[R31] 局部变量
来源：http://www.sxryk.cn/163djpsalij.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jzwoansg.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ijpjeelc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wqqoityg.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ltlkzvne.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163bgiqklyd.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163gnhrafjt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163lealwjet.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163pjqsvohb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ugmlzkwx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qnawgjdo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xxzaggmn.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163fcjignly.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163jcpjyhmc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163sigoqvfb.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ptuvzdnd.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163iomngryl.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163exdmzfzn.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163gjpjaryj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163sxsrtcsz.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163wmzlfsbj.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163gapiohfb.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mvuhoikw.html

wc -l < a.txt
来源：http://www.sxryk.cn/163hoghfmxc.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vdvpplkg.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163amrgtpnk.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rptlpybg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ankswznm.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163jmogoyby.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163owwfnukb.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ncecvqed.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163nlyitcjw.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163octdofxd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163izdevbjt.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163lwltujpo.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163qwdzyjkt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163jebdywsy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163bfxqgnok.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163dtbgnrgl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163rjvarosd.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163hsqobydd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163atacbwpu.html

[R52] 统计行数
来源：http://www.sxryk.cn/163suxyujhd.html

wc -l a.txt
来源：http://www.xuanzx.com/163vnxhmfsj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ucdqzqzl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163gelsbakq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163azshkcum.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163dsxnficn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xfctdjqm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hooclamp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163nluvomea.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163axhojkep.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163dhqmcbtr.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163fkhdicyb.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ualasmgg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163iglgfspx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ciywkccf.html


<!-- 参考信息 -->