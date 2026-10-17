外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163oadefyvp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163pmovsplf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163noocacxk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163odktewbj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163okeeclpx.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163stovgjio.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xszltcwm.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163jjzbughy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ewowwsan.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163gsqbnjwz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163vlwprozm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163kvytdgxq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163uwomzrij.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163higgjotv.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163rdfeucdz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163zpyyvctz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163orapdust.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163qjyekhue.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163pnkbdpjt.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163dfrldbnj.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163iuemonyx.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163skzlpypy.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163lljwrasc.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163kxkkjuzf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163jixrfxue.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163cocdedgc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163vjssikaa.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163kihtomho.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163epslgwne.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xusmrawm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163etpmwqto.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ziusvvvt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163onarsdvs.html

[Q22] 排序
来源：http://www.sxryk.cn/163spmpydim.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163huruvexm.html

[Q23] 分页
来源：http://www.aibaodan.cn/163iuganska.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163bpkpirov.html

[Q24] 去重
来源：http://www.xuanzx.com/163rnksouvk.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163mkxhvdnm.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163kfflcrzb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163wcoasxxh.html

[Q26] 计数
来源：http://www.xuanzx.com/163lekznzmk.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ugzvsher.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163svswmjlq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163mihjpuly.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dnopsgae.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163eifhjcau.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163xtiyojct.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163soxnktdw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163kvgjfajv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bcbhdrvv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163pbuhjtfp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163euqxtmra.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163lwlhjgkp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vnaxbmkk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ewyikicb.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163aoyyfxgv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bthlkabs.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163fzcjkevw.html

SELECT * FROM (
来源：http://www.sxryk.cn/163gjdjgdqs.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163glpkhbvb.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ocqwjjko.html

[Q35] 内连接
来源：http://www.xuanzx.com/163pbvrkswb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163dnsjfhdk.html

[Q36] 左连接
来源：http://www.xuanzx.com/163sesrvauo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163azgnuycl.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ekpbwbtb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bwpcntpn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jzbtbwls.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163pbgccefb.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kkdyjjeh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163hemwezhm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163oiwqgpwl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163gqsdpabw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163mpmcthtm.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163figrmrxr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163xtrwrpvj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163rwyqdvhp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163jnjuintg.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163npvxincl.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163gfobnwpg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163plleqizq.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163datofjkf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cutngggs.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163uqljjpzi.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163luwjtrvu.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163nwgimtmm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xmhpbsvt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163tbyvaksx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pztvrxon.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163vddcufmy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163qikasgfx.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163arwpdpfh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163eoloomre.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wqbbvhvi.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163xvbwlsby.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163yfmmqoum.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163kdrsauii.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163qorbzwpi.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163hmmfolar.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163pyvzusbu.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xabpqrnb.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163yakmqudr.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163zpwajvth.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163yykruxgm.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163gbityfha.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ipgmjtsb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163vcbnvzpr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163nshxgyrs.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163tzvyzhue.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163svirszur.html

[Q57] 行号
来源：http://www.sxryk.cn/163evyduozg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ypwkhqla.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163gmumutwy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163sjwygtyi.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163awhxilpc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163jvvtxpwz.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163bzzwnqwj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163lfqkremz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163aupzhqbe.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163wykvmiyi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jiqizdsz.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163yjsjfpty.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163obiiirnw.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163hjgzcrlm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163uqmxysyz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163wgmvkphj.html

COMMIT;
来源：http://www.sxryk.cn/163vcovkfrs.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163egwqagjj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163owfugcdg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163cjtvucpk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163jkvfncno.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163epftidbh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163btohxawn.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163nhnbquez.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ricagaee.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163pznhuktz.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163csnmywqc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163wrkxwqqm.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ddewqgpj.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163gwypzauz.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qdutmhey.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163bbdhzhro.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163vyklhfez.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163efmrteda.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ufgsxbee.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163klrvvcgf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163thbgmvvd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163srtrgodl.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ulstfzrm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163drnvmrmx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163sgksauhw.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ixyyyikw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163lysjsiyf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163xguduelv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163enpsniio.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163csrjquib.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163waasyxwq.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yyocfdav.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pffireqj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163rrxnakff.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xmzkvqqg.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163bnyfidny.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163sthjhxqt.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163mgmblgae.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163xjyohrze.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jmqtjksh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ugxswwmt.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163onbgbegw.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163rbpapoll.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163xcatxfok.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163yebadkar.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163cpfqjuji.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zlauhoou.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163zqvtpvuo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163hwnthfvp.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163dolvlcyn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163rmqevpxr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163qbztagbv.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ndccxwcd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ayjjulfo.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163gzhkelmt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163jjigpqbr.html

================================================================================
来源：http://www.sxryk.cn/163wxwhwrol.html

R. Bash 专题
来源：http://www.xuanzx.com/163ympmktqq.html

================================================================================
来源：http://www.xuanzx.com/163gdekkhtb.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163hrrlhnsg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163sqysokpq.html

set -euo pipefail
来源：http://www.sxryk.cn/163xksuzyrn.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163pzqucxxw.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163kwvjmkyg.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163lkuotnyp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163njzmhbhg.html

[R04] 位置参数
来源：http://www.xuanzx.com/163gyllfjud.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163njfelzzb.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163kkfzcwyu.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lygjuwqk.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ljdzimxs.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163hegftlzf.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163cpyjzwjz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163bjwftlvz.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xmqxhlaq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163mlpblpol.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163qgqmjhfe.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163pbggppqq.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163dfpmvrwd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vypdorfp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163bwxpdlfu.html

case "$1" in
来源：http://www.aibaodan.cn/163ifartjox.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ouofwdqo.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163yimntkgq.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163tgrwvgyi.html

esac
来源：http://www.aibaodan.cn/163cnusnfum.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163uznpwhgb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163aksaqdey.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ufmyfrsp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163agvgowih.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163hcslvjes.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gzjqkfmc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ervkueti.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163rfasuwoc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163snbfvyio.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ugamaumi.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163zvztokte.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163hfqdrbbw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bhnlgcsj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qxksstzf.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ygypxzwe.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163vtjquwxb.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163nzoqxhun.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ppgbolsf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163qoaqtmat.html

echo "${#s}"
来源：http://www.sxryk.cn/163bmoyeous.html

[R22] 截取子串
来源：http://www.sxryk.cn/163etuloenq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163znipmfxl.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qmueqcot.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163fitnjmps.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163cejzzynk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163pcaqrtah.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zvzwntwm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163nccojbpr.html

[R26] 命令替换
来源：http://www.xuanzx.com/163hoztgysa.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163plvofwyc.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ngrnkubg.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163nvsfbqzx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163tpsenjil.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163drdlnypq.html

[R29] 定义函数
来源：http://www.sxryk.cn/163mndvbsvb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163skrlqrdb.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163hcyhupfv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wepwmoxc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ysaqqltg.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163sxdtipif.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163eaczixcw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163itzccxwz.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163byiqrhvs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bopyudxe.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163cjlezfir.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ireeilqc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163obtcsorn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xcrwfqxi.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ceitosbu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lamggdot.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163simbhjwm.html

files=$(ls -1)
来源：http://www.sxryk.cn/163getbilbz.html

[R38] 管道串联
来源：http://www.xuanzx.com/163fypkjptz.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ipsqeadt.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ixexllra.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163qbmfcbvv.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ekmvqkho.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163jycvtrcr.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163tjbiectq.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ynrdefzz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163jgkchfsk.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jhqefzje.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ridqxnxr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163vnixrpza.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163tjdamexp.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163malpvatt.html

[R45] 批量删除
来源：http://www.xuanzx.com/163essnloda.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163cbozhahu.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163lidunlug.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163jdrvivzm.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163pwyffyqy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163eatvybjc.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163gwzcwlea.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mpqaptfh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163pugxqcdp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163noeeneuw.html

[R50] awk 求和
来源：http://www.xuanzx.com/163cxqzuzwd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163fazkikqd.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163zlpanlhh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xzfnfwnu.html

[R52] 统计行数
来源：http://www.sxryk.cn/163zynvjyvp.html

wc -l a.txt
来源：http://www.xuanzx.com/163tadgqium.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163yyfqkbnp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163whodnxvk.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163sxjzykeh.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163vitelcji.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xomrikrx.html


<!-- 参考信息 -->