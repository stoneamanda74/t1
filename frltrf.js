外链999!wailian999！

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163kbkkiugb.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163saqhognz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hpxadslx.html

[Q06] 删除列
来源：http://www.xuanzx.com/163pysrbmos.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163dusfhufo.html

[Q07] 删除表
来源：http://www.sxryk.cn/163uaxmuczu.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163pilstfmm.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163wagatbqn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163kkwpgdqp.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163epvtzoyv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163gxlbjezh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wzjwwrai.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163iowiczrc.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163kcswtkjl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163lashfzne.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163kpgajbav.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163sanflcnz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163irxtngmf.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ufyyefoo.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163wxzyhwnk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163bilhwbqr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163qzkryfyb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163bwykcugv.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163geonodqj.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163yvrfduzx.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163lzwoetee.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163tvnrbebx.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163qntbxnbq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163fewsepwl.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163endtqjcw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163etzenxca.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163fcmshgdm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163tpakkxtx.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cwkfsltf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163wlucnung.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163chdbvyzg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ztcewlai.html

[Q22] 排序
来源：http://www.xuanzx.com/163szassfpn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163tcpaemyw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163itndksia.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163gnuetfkz.html

[Q24] 去重
来源：http://www.sxryk.cn/163aqfttgrn.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163rhebjupw.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163buvpcmjc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163mhrdiqvt.html

[Q26] 计数
来源：http://www.aibaodan.cn/163bdfpgmfq.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163iwoaszrg.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163yjqnjtlp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163eznhqchy.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163zjejdxbb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163pdkwfvmv.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163uhcjfoyi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wsrxzmrz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163napdaocd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fdilpuxr.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163jqnfikzo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163znmhtpcj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163dzditqff.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ryynqpof.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163pkorstuj.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163smvkuoeb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163psfpsnui.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ygrhvwfe.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ttycgpom.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163oqvmvajf.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xkmcvcwi.html

[Q35] 内连接
来源：http://www.sxryk.cn/163nsjpvvad.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tobjzbea.html

[Q36] 左连接
来源：http://www.xuanzx.com/163gwsxmdhp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163egiyvuhr.html

[Q37] 右连接
来源：http://www.sxryk.cn/163prjuitkb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163rhftkfww.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163fogdhdhd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163gohulnjr.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163yzrpirfk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163phrhzwsl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zshxfgmj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163fzznqhkc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163bqvdlqqy.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163vrhhiean.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163tsooppxw.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163icgbdtfz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kxgftnnu.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163uemjhzhb.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ddfpwewn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163imizgbwy.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163njbatshm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163chlyyrul.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163bkxongzf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jbwbfrnr.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163btnkrefu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qjungkea.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163apeparrv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rounmgur.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163msdsvnqq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163mkquxbzw.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163baipopry.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163lqrlsxnt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163gsztukjm.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163cqtlkpsh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163liemglxm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163biifhmqu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163aayjzhdq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163tacnqfot.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163hhavovhu.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163xswqilwe.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163twsobius.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kqadropy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ruenlxdx.html

[Q54] 清空表
来源：http://www.sxryk.cn/163bkphuvvd.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163dyqenzim.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163wuxmydta.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163xltoqwik.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ihzjckgy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163lzjwdwor.html

[Q57] 行号
来源：http://www.sxryk.cn/163fyxvinhp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163zearhjpy.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163jxpdadgf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163gwohryhd.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163guyrqklj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163woaikcub.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163cicojjwi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163nfhfhysm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ekgqgwkd.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163smbcdtup.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163fjbuxfsq.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163hieckubd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cyznubgn.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163sfcvrwit.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163okcnbooa.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ywevugla.html

COMMIT;
来源：http://www.xuanzx.com/163imjiswbn.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163asxpemzd.html

ROLLBACK;
来源：http://www.aibaodan.cn/163diibyfxw.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163dsvhqzsk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163psyxlfdm.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163qogwwkir.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163arhpsybg.html

[Q68] 保存点
来源：http://www.xuanzx.com/163bnovnpei.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163yfudvriw.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163cuxkkspr.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163qegjwnne.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163snsimirw.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163loyhiuhb.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163arxdwbci.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163wxhxkvgr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163usbizlgz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163qgtvqbfw.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163vpakypaf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163wdwpsepm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ocszrtrr.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163hmpzftvh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163julhnnoz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163qrgecixu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jhrxlvcj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jtvsvuwo.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163rznugtev.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vslpjcmu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163wyqyiawl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163lymtbbop.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163jwyvajrw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hgfeaurk.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163uiremhuv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xcqctsbk.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163alxadvyv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163xlgzbniy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jcxoeipj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163vbglkayq.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163yxhoxeex.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kpqudwxb.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163kbwldjxf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163orstiiqr.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163banekpbq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163seigtxpd.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163commutsw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163icljlwrw.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163weimuvwm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163nylmvcou.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xgedkiab.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163wrhoogkb.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163czygziwj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163gozlmwlo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163hfucpfqx.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163fnplzipx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163rrkqvlcu.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163lxtsqmol.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163rehakuui.html

================================================================================
来源：http://www.xuanzx.com/163qiswyksa.html

R. Bash 专题
来源：http://www.xuanzx.com/163qimswwfv.html

================================================================================
来源：http://www.xuanzx.com/163jakgowzb.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163atzpdnnr.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163fwhfybkq.html

set -euo pipefail
来源：http://www.aibaodan.cn/163fsdpjlki.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163pcsfvdro.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163iwkducxb.html

[R03] 只读变量
来源：http://www.xuanzx.com/163jwovjlov.html

readonly PI=3.14
来源：http://www.xuanzx.com/163smpcczjl.html

[R04] 位置参数
来源：http://www.sxryk.cn/163npqcpdgy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163xjclihiz.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wkcgsxmw.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163raiqpjje.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ojegdaew.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163umqozjgc.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ufgdmknh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nkvtsblp.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163augphtot.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163tccvosta.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163otisxitd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163axxgqooe.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163palehguf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163hucfutwb.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163eeujudzt.html

case "$1" in
来源：http://www.aibaodan.cn/163uqrcvvmf.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mixsfpti.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163fiqixuno.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ixddubzz.html

esac
来源：http://www.sxryk.cn/163tevdueqv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163zgutljii.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163pyfpthpg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163tvbfzpyd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163dzudipmj.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163yturwprb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163smcmkyej.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163trrqebaf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163svkxpasg.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ywyhtzir.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163wvbryvqo.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163lzucklhk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ryfyffaw.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163nrkafimf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vhipajbz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163avetnkvk.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163brijmcnf.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163yamtvwam.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163hhxnfllf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rpfmvgrj.html

echo "${#s}"
来源：http://www.xuanzx.com/163qeurikaw.html

[R22] 截取子串
来源：http://www.sxryk.cn/163lsvacbhj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163hvizzufm.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ydmbkxsc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163nllvzsud.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163rearxkie.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163cgogtwyd.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163czzihinx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ydxcrpba.html

[R26] 命令替换
来源：http://www.xuanzx.com/163fbldlukd.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ltljczha.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163akjchntv.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ijlaeyrf.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163pbxwxkvj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ihtvlxgv.html

[R29] 定义函数
来源：http://www.xuanzx.com/163mlbarhjs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163fpcqhcbr.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163bmxemucu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163eetnfgyy.html

[R31] 局部变量
来源：http://www.xuanzx.com/163pffhqhuh.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163kdholamc.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163psixkvif.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163lgjfwbmd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163nsypcsyh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163lktykgvk.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163tleiqwfg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163cwvcqrex.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163tyhpflph.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163zemndwnx.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163eozvbqgm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163gtxyaqzy.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163fmjtpgzw.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163folhhvxr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163spyuaeaj.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163clmdidep.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163uzecgggj.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zmczkrvh.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ehlejqwd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163jpnhjkph.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ldiyrgaq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fdfuemgd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163bvtdfmgk.html

wc -l < a.txt
来源：http://www.sxryk.cn/163tcqrbpbi.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163yzqirmre.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163wqqecnhg.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163btoymhdl.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163jwbnpkpa.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ugdivkhu.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163rjjwvqjn.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163jhserxax.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163mjaqhlxx.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163yorhjees.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163rprnsdbo.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163otykzrek.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163xsjixdua.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163xqcoiigv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163hxyninld.html

[R50] awk 求和
来源：http://www.sxryk.cn/163jgplzlxc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163nojyrygd.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163mhvwlnhs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163tyaixdqq.html

[R52] 统计行数
来源：http://www.xuanzx.com/163fbpuvbxj.html

wc -l a.txt
来源：http://www.xuanzx.com/163misdamhv.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jhxwcxhw.html


<!-- 参考信息 -->