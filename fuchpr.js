外链999!wailian999！

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163bhduydvf.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163nkkbrlgh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163cqnyixiz.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163vdwvfffa.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163pyvrqqah.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163nninagys.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163zbccfyna.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163hhjrgeve.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163mngfguoj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jmhhwwrh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ecmuaiai.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163pdrnlrxe.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163rpnyzvwb.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163eiiozfuc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163nwwkfcth.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163vngclfnt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163oluvuboc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mcenjiut.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163npavnppd.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163briyegdy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163cfiamnfj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163sesroamo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163hfqoyhgq.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ryeikklu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163msnjgnpr.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ulblmyhh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163roqaeiua.html

[Q23] 分页
来源：http://www.sxryk.cn/163rsdkdxly.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163bsonkumu.html

[Q24] 去重
来源：http://www.sxryk.cn/163axeqekpc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163vxjshefn.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ldphcknv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ekgixkpd.html

[Q26] 计数
来源：http://www.sxryk.cn/163qygodplt.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ywtsxzzq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163zlkoixzi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rulsfgaf.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163vsormivm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163waumasyw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163qpwpqgef.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163nltgadmv.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163nvqhmtoy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qtzmsfnb.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163sxcrpvqr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wlipshwr.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163jfbegvkc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dzdokhxb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163omimcpxn.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163mliuprzu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163brxdjgxy.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163plljmrwt.html

SELECT * FROM (
来源：http://www.sxryk.cn/163yznezznw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ypvumkyo.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163kjftfmoz.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163jlxaiclu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163duhotxhx.html

[Q36] 左连接
来源：http://www.xuanzx.com/163axzkgwpa.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vjbytpsd.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wfvesqpt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zsylcbys.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163afjsljpk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163cqsssyoa.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163obynvhis.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ijrshagr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wifuvwpl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163rihgkrlu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163bjqcvjzs.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ocvzyxnl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hjwtncau.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163tvhegjws.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163hnnlwznz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163drnrbrhm.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163hvlpwyoz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163oeltjsbv.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163bsjgbzvj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163nyddxvke.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163prwksopr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ifhqofms.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tdoljcun.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163inmlisvk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163sybfrhjd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163toduefif.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wxmdfatn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163tojaumab.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163wiomiwls.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163yyeokjbv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163jnvergec.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ctmlozth.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qjtyqbbj.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163kfylhvey.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163hmgqkdmi.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163bgnbvhdu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163uycoozne.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163raxgyhlx.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163fhahnnqg.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163hdvwabfm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163lnekvpkf.html

[Q54] 清空表
来源：http://www.xuanzx.com/163bpruormf.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163kupfhfvm.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163qoutmnwd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163chfsuhsq.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163tcrmboyq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ahwjlhkb.html

[Q57] 行号
来源：http://www.aibaodan.cn/163rtqkvoca.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163sfumpkal.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163hmszuppo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163lqtufxfw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163axgaoctx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jdtoadid.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ewwyulbj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163jyibajit.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163vqsnopuf.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163rzrozucf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163matvgtnm.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163blojflux.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zrynklas.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vikzodtl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163aormexps.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163alnoslcs.html

COMMIT;
来源：http://www.aibaodan.cn/163jaeglulx.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ljcmkdip.html

ROLLBACK;
来源：http://www.aibaodan.cn/163omvwfhqj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163qplmqpjg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163dtrjvnwq.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163mninkaey.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163aclbfgsp.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cxdvtgoe.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163itlaaxrp.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163tprztjei.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163mifsgvpf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163taybyuep.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163eanvjjvn.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163hydacxst.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ckirxvnw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163nuppsixh.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163bckefclc.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xaqxvudq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163rwzaksoi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163scdxqoty.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ghwpilqc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163qxokihez.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163vssxwtor.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163wqfdtlqm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163wavpopqg.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163elugqpzu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163cqfecmsw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163hzckbujv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163regajxim.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163vfiktsva.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163iobpqtkk.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163dodvcliz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163rkcfhxnw.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163biujvaok.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163vutllahk.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163nxnbqcjx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ljuraqdu.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163esaxtgoh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163jzkrgcxv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163vwypfrqs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163gylgxtap.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163rorsokmy.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163jdebfdzg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163sdpidaqq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163dlvtjghi.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163lbxjtrbx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xlaxqizv.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163mczfdqrv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ticnmzye.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163krnowdul.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163znruwkin.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163jynjqtfz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163pyfdekrj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163lvihiror.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163aqzwbfuc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163doxljtdt.html

================================================================================
来源：http://www.aibaodan.cn/163fupfrdmh.html

R. Bash 专题
来源：http://www.aibaodan.cn/163helbceac.html

================================================================================
来源：http://www.sxryk.cn/163lcnxodwt.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163qbgwctaw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163muusbvpz.html

set -euo pipefail
来源：http://www.xuanzx.com/163gyjurmkk.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163vtdtuwmz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163tmpoajlu.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ekmozpmv.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163zwveyitg.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qrxxuiaz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jjcynock.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163cshdmkpd.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mqviydlq.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163synofkip.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163syprfndp.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163kpitckcl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163cykulkdz.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ihzhbmlw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163nrnuadjg.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163cfelvhij.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ukvufubx.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163rojsaorv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163slwjsyih.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163steuqufm.html

case "$1" in
来源：http://www.xuanzx.com/163wpflwhvv.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163fihjkqna.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163teellpyw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163rtnanyfy.html

esac
来源：http://www.aibaodan.cn/163vmqiekhd.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163hnsnzjdu.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163fgxsixnt.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163prxqnhyc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ibfwzoyy.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ipqtfmmd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163jylszkto.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ouzyblff.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ttuexaqa.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163wutkhpfp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163qywgtwbz.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163xxwhxbnu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xmivgkha.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163spjhcqcs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163dngvemkr.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ezsthzbu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163xecvuyxj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163udwclkwy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163mpfxzwhp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163qqqmknhj.html

echo "${#s}"
来源：http://www.sxryk.cn/163zsrpruqq.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163udxnwbhs.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rtqbanfi.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163uwfuodvd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163sjlkdlzy.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163pwuxnzyg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163xirwhwhn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vqemferv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163jcuvrsnv.html

[R26] 命令替换
来源：http://www.xuanzx.com/163wlqhwmqu.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163nuinojhs.html

[R27] 算术展开
来源：http://www.sxryk.cn/163uajfbcdt.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163zxsbqzqt.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163spnotmqm.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163asvtusfl.html

[R29] 定义函数
来源：http://www.sxryk.cn/163drrvjpde.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ucfqrnos.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163bdjgskct.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163yorqdrej.html

[R31] 局部变量
来源：http://www.xuanzx.com/163gpfygrqd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163sizvacds.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163hmrmrmbm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163fqpfmzwo.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163xtfaguvg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xapoyoql.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xlniiiko.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zddienkp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xttpkfoq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163susdrefe.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163mgdvvtyl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rvpxuxye.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rhdzlcfs.html

files=$(ls -1)
来源：http://www.sxryk.cn/163fvmamxez.html

[R38] 管道串联
来源：http://www.sxryk.cn/163tljpicqj.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163jdxcsfmk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163dywajshc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163vsiubwwp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163fscsqzuu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163tntxqetr.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ejsucknt.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163bjahhtqg.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163upcodvzd.html

wc -l < a.txt
来源：http://www.sxryk.cn/163nfbtwebn.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163epfkcfzh.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163lrjsguic.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163umtoaleh.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ixwhqagz.html

[R45] 批量删除
来源：http://www.xuanzx.com/163tbwscbau.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163qprtoouv.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163woxaqjjm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fxwtqxts.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163bykxqpkp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163homzbkpg.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163tqqtxlnm.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163omwnwcfy.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163tgylmkhy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163aknxunoy.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mnldwkgu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nykhdyjp.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163wldgvtck.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163uzdnlrjo.html

[R52] 统计行数
来源：http://www.sxryk.cn/163szqftckw.html

wc -l a.txt
来源：http://www.xuanzx.com/163qcyhdivy.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163mjenhfka.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163doipnmbv.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163cgnlmtdt.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163dxwhnqkq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jbdxqesy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163blhlscmn.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163paxjbrxk.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ljfcysjv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163xnxuidut.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163witabojr.html

[R58] 下载文件
来源：http://www.xuanzx.com/163tqjxrrkg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yqhzmmvz.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163xsrvgiat.html


<!-- 参考信息 -->