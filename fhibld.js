外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163crjsuucm.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163rtmminjo.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ftqzqudq.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163wyfmveij.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163gkmbnqut.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163sxvizrly.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163kvyqbrlp.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163mttppvbj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163qmwccyqj.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163kxzogswp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wsabkmaz.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ctgeaxdj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163pezgfscj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wyedxxmy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163myqknotz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hrdwdaxd.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163pltofzkt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163zruquach.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wfjjehxx.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163eocamtpq.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163engvjlpd.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163sacybayl.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163jadvlpvh.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163vadnpudq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163evjtggpm.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163rtoqnjww.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163avlvioiy.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163sdvnahkz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qugjaanw.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ydljatdg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163pqfrehvp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163vbsgpaub.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163fpzpwgsk.html

[Q22] 排序
来源：http://www.sxryk.cn/163rawbufba.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163otayybaz.html

[Q23] 分页
来源：http://www.xuanzx.com/163fdtutcao.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163xehifcrq.html

[Q24] 去重
来源：http://www.sxryk.cn/163laatcrjr.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163uspjslys.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ykeyvvqr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163lvtfmddv.html

[Q26] 计数
来源：http://www.sxryk.cn/163ydrbvthf.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163pfncehqm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163mwanpbot.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jnuikvnv.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163jgqxhqla.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163uvfzvrmt.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163qijlulbz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163qojkzsnl.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vsuhenpk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fzecjuiq.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163mjdhohvi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163nteguvgh.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163qiudviuj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163iimtortx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163pcdmmhvz.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163tydkhgoq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163draosohz.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163dfhyjydg.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bjskdvhz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163kmlzdafy.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ystajbkj.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ataisglm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rbgslylt.html

[Q36] 左连接
来源：http://www.sxryk.cn/163amhqsmwa.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ilvmygjk.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163clmlnbmc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163cvnnyofv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mrqvpfse.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hdcntgru.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hbpxiudl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163rcgulcgt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163hjetaiqe.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163qhcvoodv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ycchauid.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ugccleia.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163dmarmgtk.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163bwqwdfzs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ljhoihhl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ogbmllpc.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163drrgavcm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jafblaru.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163taqvzzcm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xnrxvsds.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163elmvxwmf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163bzaspnro.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163xkbujymw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wtpjfiit.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163wcfawpmf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ijkyfswn.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wyzwmxvf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163esastjmy.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163funytswd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163cwfahgko.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kfkcpjfx.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ltceykqb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163psnoicwb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163kquielrj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163zrcfathd.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zjalwomw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163dxwigbda.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hybpqdks.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hjqbcqdr.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163svsqgfad.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ugbwpupb.html

[Q54] 清空表
来源：http://www.xuanzx.com/163gfjdeubw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qongkkvk.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vphqktio.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163zvzsyudi.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163hrlgpoco.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163qgiflypu.html

[Q57] 行号
来源：http://www.xuanzx.com/163xtipssmu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163tiqqpcyw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163cuerfajq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163oplzybjz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163rdbpfedk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163wpywcksk.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ovsarqyd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163prqkelev.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163kvwopeel.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163fjobvkvp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163btkpgocl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163widmrtvb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dawppzpp.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163neujfjzr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163mgiswzkp.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163yfurqifw.html

COMMIT;
来源：http://www.aibaodan.cn/163szozctzf.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vnwdklly.html

ROLLBACK;
来源：http://www.sxryk.cn/163ujlwqoxr.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163damzgqxl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163elnaapoz.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163xgvqfgcq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163khrxvlls.html

[Q68] 保存点
来源：http://www.xuanzx.com/163lpyjsrtm.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163vrutvuek.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xandxtmr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ddhyslnp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163wfuxwwqp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ywvnkmqj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ilhnntby.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163gmivpdby.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163zxrdbcwe.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163qkhxphgj.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163tcbzgpyc.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163spipeahk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163inxalcnl.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163wefmypjm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ibmvkllp.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163utmysmlw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163embcqukf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ucxfurvs.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163dhffcjuo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163mdkyfmim.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163paliaaft.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163tmmveybh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ctvudrpt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163vblmjdeg.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163qwpagiza.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163uksmfxxp.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163dgwlojiu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163bfuqsynn.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qwodbern.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163zxdhktbx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163pnhhlidy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163qjllzbrn.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163mdcnnjrv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163llinpuou.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ahwhland.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163kbsglsql.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zpckkebl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163tdpzothc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163sqfyfwfq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163kfwidhsf.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163zsmonefo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163dylngipg.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cnsokkep.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163lgqypxzy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163lbsblzyb.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ahahqxgt.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163hhvloqfp.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163gsqmzhxq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163jwabmgdr.html

================================================================================
来源：http://www.sxryk.cn/163asdsnjaj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163zmcrkqqn.html

================================================================================
来源：http://www.sxryk.cn/163jsbkhtxn.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rxdesebd.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163wwqkboyr.html

set -euo pipefail
来源：http://www.sxryk.cn/163vxmoloou.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163njwdxccw.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163duyfcdqq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163vqdyojkb.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163qsyhpbke.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163rkvhkqps.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ajbychuq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163fyicfqvg.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163irzwqecb.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163svymmats.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163nyntvkxq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163delcyqst.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ritderff.html

[R08] 数值比较
来源：http://www.xuanzx.com/163wqhcchqy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163hiekbqon.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163odgvzaka.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163othgekxf.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yugyzlxs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163bftmlizx.html

[R11] case 多分支
来源：http://www.sxryk.cn/163pvdgwamt.html

case "$1" in
来源：http://www.xuanzx.com/163voukmxvr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ichtekuq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163xowxucad.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163enswsnlm.html

esac
来源：http://www.aibaodan.cn/163cbhqgbts.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163fivoscvo.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163kgpcltsm.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163mxwzjhpp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163lltjltwy.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163epvupmld.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163danpknul.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163gdkpomhf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163salqncrw.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zgszfsyh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163tqyeyyhe.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163mosakrre.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163hnzhssmg.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wkofebkg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xegxsrql.html

[R19] 数组长度
来源：http://www.xuanzx.com/163oibcacct.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qmvxccyl.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163vitmeimj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163icaumqpx.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mxhhzocq.html

echo "${#s}"
来源：http://www.xuanzx.com/163alrqdkwd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163spbgybff.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163avqcnpbc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163acmpthrf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163nrtjxrrv.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163nqndhmgf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163jsqfqwuw.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163axzuxaew.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163jyevomuw.html

[R26] 命令替换
来源：http://www.xuanzx.com/163weyftwmi.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163amxoxbkd.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163tzycsnwj.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xaajzdvj.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163dvtjvnay.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tcmkgkez.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163tucopust.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zapwtflp.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163hncpgnia.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163iirhrphf.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163easroupp.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tacsdctr.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163kptqtbov.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ybffqnpc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163aagwkuwv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bzqksvfn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ujvlaicw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dxkalllz.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163dwmvghnq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163otutpfsu.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ispdsafm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163arqyjowa.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163txowkgrw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163txteqyna.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ueriyvyv.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163omyxmupp.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163woaqhvpr.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163rwkjwwnd.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cizdfhwd.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163isnuzvnb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163yngezwbz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163cyniobkb.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cjwkzemv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163zmabtmnn.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163qyhfwrag.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163tjypcbyz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lkfivhhg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163mspdslif.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163nfltroem.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kzdxbmrz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wxbclrag.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mopqztvh.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ryugrrec.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cosdeqgh.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163pyflhzez.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163tsvfzhlk.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163hwiwwxap.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ijagznfl.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vvkccezc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xrrkhkxr.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ffipeohg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xbtfhulc.html

[R52] 统计行数
来源：http://www.xuanzx.com/163zuywqjmq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jvncvsxz.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163otgwcizo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163rhyjzvtk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163gtakkhuf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163pvdiiyed.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163oehdahpc.html


<!-- 参考信息 -->