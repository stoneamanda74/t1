外链999!wailian999！

);
来源：http://www.sxryk.cn/163tqczabci.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jzqpadks.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163cejxcvrq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163uqfyptvy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163lpyjqqsb.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163tvaqzppd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163nqunvspy.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ekyxxohz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163kojtujbp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163gavqsufn.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zbfjqrtw.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ybpzsolv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163mvspbpcu.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163uvzbalfk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163rzgwaajb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163vhifwwyz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163rdjysbao.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163lmnxbxfd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163pykxjurj.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163wloupool.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163psdptfoi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163lfwrluzg.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163rdzrskys.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163uizqrkxf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163sgwacqea.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163xgmeatyh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163hnanumwy.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ykumegrc.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163iysvcuvu.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163lseigbtf.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163qqxeqvry.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ttfnplpv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163fywgzplo.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163whwkgrme.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zvpbtcup.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163zcfxdrkq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163jfzmtqjh.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163spwdigmj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163enqxxddr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163shbngtft.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163tlkbxhky.html

[Q22] 排序
来源：http://www.sxryk.cn/163xaqxaiba.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jkebjuzx.html

[Q23] 分页
来源：http://www.aibaodan.cn/163tdqifuyd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163avvhqqfw.html

[Q24] 去重
来源：http://www.xuanzx.com/163daohfhpc.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163wwfaymev.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163eoovppnn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163indwoxit.html

[Q26] 计数
来源：http://www.sxryk.cn/163jrudqtuu.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163uelrijhs.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163plqexiqg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163blvgzoto.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163amdiocup.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163qbktybpn.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163flcasqsk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kijolmqa.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ekgiorpf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bakczrfw.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163sijznylk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ykpucihu.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163mkvxrycv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lfapspum.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163phfnrloj.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163fnsmtibt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163lxnjlrsi.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163zpjfpvue.html

SELECT * FROM (
来源：http://www.xuanzx.com/163mjyqvkoq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163mposaogk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163yasgcyxt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nnmqvzed.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yupvefvh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163msidbqpx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uyqgszhr.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163mlayvlml.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163qmadhjuj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163yclpjkdx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163jhgzabna.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163vzypanjw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163thirxzeq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163hjctheit.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163zrzjzqpe.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163inihglom.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163vyucwwhh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163yosxzlfa.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163upvzdyyw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163medjidtn.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163gjkehnyz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163xtubkucy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fptahioe.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163rqlbdasg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163qexbyudr.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zzysyjmq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163cgyjxouj.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163flmeugwr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mthqmmoc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ikbtrgat.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cijarfgs.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163mvitoxtm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jfftdzoz.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163cqxgabmt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163vauelrhc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163mixvfjjr.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163yzorkmtq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163dqmollqo.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zrrqduhy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163vufqgulx.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163hwgyamxc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fxvgmeyi.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163azrwqxyo.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163bvldygvo.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163jpmfmyto.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uulrzyyo.html

[Q54] 清空表
来源：http://www.sxryk.cn/163tqbqigyf.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ofmxpojl.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vgltteuq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163vnieegpn.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163cgfgrdkg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163dbuqizuz.html

[Q57] 行号
来源：http://www.sxryk.cn/163otibchax.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163kdbuiatj.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qtlmijjm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163fhnkotbk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163fplgwohl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163veyilpbn.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163oudjfjce.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vccrcwyg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163mkvihldz.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rcknwyxb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163mbjiqiut.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fnqtlbug.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163enqagcjz.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163lyvjdzxw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ndnordjm.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163rnudssxq.html

COMMIT;
来源：http://www.xuanzx.com/163kckgujaz.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163pvfhvoxq.html

ROLLBACK;
来源：http://www.sxryk.cn/163lvoicama.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163fwcmuivf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163kxpujwwb.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163avllpivy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163kigyowlm.html

[Q68] 保存点
来源：http://www.xuanzx.com/163cxrehzbi.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mnlvqutj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163eqvjbmnm.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163yxytczbu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163melyhbjm.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163jhinynxh.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xijtlqhv.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163vzvhjeeq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163bwwevmjd.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163trsoguwo.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ktwxhalz.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qnlrtlla.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163sebquysm.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ocawmhmk.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163srnodsje.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163bofoopwa.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bativevt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163kquotrlt.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163hnntiapc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163txvdnvbf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163stxqguas.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rgrlydbi.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163zhagctcn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163nufockat.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ldtqpufg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163umklpssr.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163kwcaxack.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163xwbyftlx.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163juelxagn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ctflklaz.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163eieuptfm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163eqmwdfbx.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163enwssqhf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163rpinmzjc.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163bzbxsjue.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163xmumqork.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163sxklbnun.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163xtxmodpg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163epbaidzk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ffpqvfnb.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163nhwedusr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163voerynww.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163aigkrjul.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mtpcvogo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163gnpqahwr.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163fudgyblo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163xifmzjij.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163bourcthr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163iywlopgc.html

================================================================================
来源：http://www.sxryk.cn/163ldiqqsko.html

R. Bash 专题
来源：http://www.sxryk.cn/163cwbgmstb.html

================================================================================
来源：http://www.xuanzx.com/163wppvnzus.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ubfpzzlj.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163buulaxfe.html

set -euo pipefail
来源：http://www.xuanzx.com/163izeoohts.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163mvtoihtt.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163cxrwlvxv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163dazfksgi.html

readonly PI=3.14
来源：http://www.xuanzx.com/163lltfrwhi.html

[R04] 位置参数
来源：http://www.sxryk.cn/163zbyiutaa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163pgwsntoa.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163poddjpwy.html

name="${1:-default}"
来源：http://www.sxryk.cn/163fhwnioxc.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163djuwaacg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163zqyuoqcl.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163rjcmzayd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163jtcnjkjc.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163grxgyfvs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163bmljyolv.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163pcrgcppk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vasqiybx.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163revcgrax.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xqvnwgkh.html

[R11] case 多分支
来源：http://www.xuanzx.com/163thqbsttl.html

case "$1" in
来源：http://www.xuanzx.com/163rokhjvup.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163zvdzrilf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163epxvwhsr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163oaskzsvn.html

esac
来源：http://www.xuanzx.com/163xyfxvrvw.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163lvfokndh.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163axztwnqb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ijzibdvu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mzpypqxb.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ieeozkjm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lwhuvbkt.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163klphgkcu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163hfjilyyl.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hoaccwpg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163rqoplvjb.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163bhtngnzs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163mxcuhrah.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163tvtupizs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163deamykcz.html

[R19] 数组长度
来源：http://www.xuanzx.com/163pbmfcmcn.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163yggshbuc.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163seknqlwb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163eggilxge.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163dbgwviiz.html

echo "${#s}"
来源：http://www.sxryk.cn/163dhpytvum.html

[R22] 截取子串
来源：http://www.xuanzx.com/163akgcfypi.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163blrjodgh.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fxodplkf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hnzqshlz.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163yshvlvtd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vrhfdfgf.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163jfqixbwh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163vgptogqf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wrdyqyec.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163dnzzwjey.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ilqzgtjj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163iihxvdmz.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zizdaltr.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163zeifwhvb.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163dmgnpbwo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163oaicxfop.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163bzhdungw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163jtgoaoaz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163vxgclsim.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163mlockpkk.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163yceyrbml.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163brlwvkrh.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163vjbhkpzy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163rateopzt.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163sggqnwjw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163llrtaqdw.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163vhlumdga.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163iiivvxaz.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163mlaryjtk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163siswioib.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qshbsuqp.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163dmopgxgm.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163kmfdbnoo.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ctuskwci.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163kcrrhopp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163lojvcdmx.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163elfbrctn.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163bxkeecig.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163usvdfcup.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xunkoyku.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mtuumkkq.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ufximfvc.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163yixkqrjo.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xiyivndi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bqpfunip.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163eoxxpxal.html

[R45] 批量删除
来源：http://www.xuanzx.com/163hlcqtvzl.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163sjvfqcuc.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ymzzlsgp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163usbxvhql.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tvjpgkjq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wrztluhi.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163czoqbwjz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163trawgpoe.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163povslusj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163gxbkxrji.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163gtnfxrfl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nacjqwbf.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bxpeyfxi.html


<!-- 参考信息 -->