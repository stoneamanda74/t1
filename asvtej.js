外链999!wailian999！

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163vkagdxau.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ezqlddkc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163dhenbbdr.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wtkbzkpw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ocxrwljn.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163tphklnxo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163zihznzbq.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163kcnwoobj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163uibdkwnn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163koospkie.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163bzlmyctg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163vhmjxwhn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ugyqsdmr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163hxpequey.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tazojmkw.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163lkdidhtj.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163tqpprgui.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163foymrosy.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163cacbepqn.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163yrsjzsrz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163fnbgoocx.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163nsnaiiwc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163jhkjiifr.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163hktefkzd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163zlosjixg.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163benzilfd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163obiycusc.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163lfafphsa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163pmevnmuf.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hquktkef.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163wpgiinti.html

[Q23] 分页
来源：http://www.sxryk.cn/163taonghwe.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163yqayvbso.html

[Q24] 去重
来源：http://www.xuanzx.com/163cmjfdbgd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163iccjrkfx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163awhvlvdn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163eerqlfph.html

[Q26] 计数
来源：http://www.sxryk.cn/163smrqincl.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163mxjayhwq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163xikagagj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163fbmtryrx.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163yibtamgn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163rynxbxdq.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163poqfzxqi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163zuiqiifl.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163yxpkxoza.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wfdpaymh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fjqzhkew.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rdulzfya.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163kgzkmuqa.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nhjheclj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ohqjladt.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163pfgkpkwx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163lzqohozx.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163fujmproe.html

SELECT * FROM (
来源：http://www.sxryk.cn/163lzceuoku.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163nvthmelc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163pbbkbtwa.html

[Q35] 内连接
来源：http://www.sxryk.cn/163hhabqnbe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ibbrvcso.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163zoxnqsfz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ryiqktzu.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fowenrrz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163npzkqlnv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163vofardbd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163xktkhapx.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163eznolfke.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163kbrdqepq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ukbxlant.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rbuhesix.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163yjnyzzru.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163xnbhgfba.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kemdjsaa.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163szzamyxo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163wpmdsppz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163vqqzeana.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fucmuasc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163pvwqxvcr.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163rkctccta.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163koyxmkqm.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163vdvjindm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163gogavimw.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163bwjjnabr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163uinzshsl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163yuvfcjxq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ieegmweq.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163awcitfxn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163fkuqoovp.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xjgccxfv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163xudkepxu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ebhyzzyg.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163alkwbrnw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163cnqqfoaj.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163blyczely.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163mvwpqvgb.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163upkhmgpp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163rsgflrey.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163blzsewod.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hzwabkdk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163flcekbhc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163uimddjfl.html

[Q54] 清空表
来源：http://www.xuanzx.com/163mbjmmxay.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163dpqpkftl.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163fivziwna.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163vtvtmhdi.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163mzethvfo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163vswdjlvb.html

[Q57] 行号
来源：http://www.aibaodan.cn/163uhoktxti.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163asxbqpjx.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163tseabgbq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tbcmncjw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163fzxxtpwj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163mfqcbkgg.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163lgjsnkup.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163dxtrkdlj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163mifrqtqf.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163zmhbbtxi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163jlgyzsqz.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163nbmaplvc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163scvbwort.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163tmpymugv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mhnosrzn.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163tulljevi.html

COMMIT;
来源：http://www.aibaodan.cn/163jjlilcws.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rkssqejv.html

ROLLBACK;
来源：http://www.aibaodan.cn/163rfxqzoap.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163pnhiyayc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163aogwccyg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tlrhipxc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163owdxppqh.html

[Q68] 保存点
来源：http://www.xuanzx.com/163qtlkkbrc.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163iyvjuqsq.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xxhxcpnn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163erfdymce.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163nplbbluw.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ozgxruuc.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163snzxffkn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163dzkidapi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163gydepgyf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163hjfucbnq.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163htavbjgd.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163fkiazwbo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163indbgcrg.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163eqxhsvye.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163hifxvpqm.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163fsuujhkk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163jqonktdx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163iwrmlzie.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163fxylglfj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163refcmarh.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163iudbkeiv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163avpeqgth.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163izjavmxt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163pehdqeur.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163nzaxphsd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163necmrgkx.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tbxudgxy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163xmugnsgn.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163vogdphlp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163hwkxgpcb.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qszlzcfj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tuerhlhh.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ehwovkuw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163lyvbskuf.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163rhoupgpv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163qizurhup.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ziriuwfe.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ovezoecc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163egqivait.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zbnneuhn.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163bksdvjut.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163gczxakpu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163eawmrnjt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163oyypgslb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163jfgqvsnv.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163lmyzbdlr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163mcxmqisk.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tfwantog.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zxrpmrmr.html

================================================================================
来源：http://www.sxryk.cn/163kqammtsc.html

R. Bash 专题
来源：http://www.sxryk.cn/163wjyvwyge.html

================================================================================
来源：http://www.aibaodan.cn/163bwhjesyo.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163teicndbq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163yqbtlxna.html

set -euo pipefail
来源：http://www.xuanzx.com/163ycgdisxm.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ooefzlnf.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163mfyhgsuk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163glogfgwj.html

readonly PI=3.14
来源：http://www.xuanzx.com/163nutodcjz.html

[R04] 位置参数
来源：http://www.xuanzx.com/163uqifduko.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163krznuong.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163cefgnbdw.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163parzlpzm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163pjvqbtnr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ynhspxai.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sgerepna.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hqydcacq.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163jmoeaftg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163gyhajrpf.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ujagqzlu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xthjdwox.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163iyxsgqmz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163uxowrrds.html

[R11] case 多分支
来源：http://www.sxryk.cn/163pjdkcdxv.html

case "$1" in
来源：http://www.aibaodan.cn/163zbsyiild.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163arauhuzf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ftdsqjfw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163btdfbwzr.html

esac
来源：http://www.xuanzx.com/163rgantcmw.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mzbnsweh.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163zbzmiees.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163xcquyben.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163uwwkasyx.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163sbqbbzgs.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163twjsgbue.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tidepktf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hekbjgdo.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163trjkrfph.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fdpxyufq.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hhxkqadp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163nlubcggu.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bcmjihti.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qnlberqa.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jozfywwz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kmwrjhfe.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163dutqpebm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163cjveuniy.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163nceewsjk.html

echo "${#s}"
来源：http://www.sxryk.cn/163nnskjxyi.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ygmztsqj.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163tjqxxovr.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163pvsjgdgf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163sqszhwsm.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ytkbjpiy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jaucfdmd.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163wbmzgehd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163fjjqptpg.html

[R26] 命令替换
来源：http://www.xuanzx.com/163veynqbha.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163tdlihkty.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ooadwvuh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xzuwknoa.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163rzgnrelv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163trhltsym.html

[R29] 定义函数
来源：http://www.sxryk.cn/163xrrmemyu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163yzcmyqhc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163hlxdlayz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fwevetzs.html

[R31] 局部变量
来源：http://www.xuanzx.com/163iygnceoz.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163awvbizur.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163mdkwyugd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163olnugllv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zfucezjz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163fxxvlcqm.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163oaquxshf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vrkesivn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hynaevuz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163szzukgnk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bopitzis.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pvrqutca.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qjjonzjo.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ewiqurki.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ayglyrqy.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163jxhmlaon.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163aoignrns.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163gbrfpzbl.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163hrodbykf.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163wdcfovlb.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jlskmdbv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163bxqputxh.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zpcjkuml.html

wc -l < a.txt
来源：http://www.sxryk.cn/163pgauiulz.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163xtdjxwen.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163xjkuxsws.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163zjfzkrad.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163xrjizfbz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xpuxtxyf.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mgyfnbqg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163vzgqmwet.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163iwphxgcb.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163yzdoyfsp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163lxsjfaio.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163utmddakl.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xawpzhzo.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163xsnjpxtq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163sqpvxgag.html

[R50] awk 求和
来源：http://www.xuanzx.com/163buppvzof.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ckmnrcjm.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163vujjllcx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tqcmyokx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xdzxykdp.html

wc -l a.txt
来源：http://www.sxryk.cn/163bbdweozm.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163dcegrtgu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ibhhcwbb.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163khhtqwwt.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163asbtjsum.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163fexsmdes.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163poajqgka.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gxhwiqtk.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163qadevafh.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zgvigfuj.html


<!-- 参考信息 -->