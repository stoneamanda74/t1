外链999!wailian999！

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163emneqqtx.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rfkwjpqx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hhhwhand.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wqdxxgzs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163qwpuzgwu.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ekwrhrhx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163mkdfldno.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163uzbbowvl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163crjcqmrl.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163rcckstzs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163doosssbl.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163rrmaegkk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nnbrrpvu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163auuchalq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163beakyymz.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ahijzcjo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163rwukgzqa.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ykndhrnc.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163iypahegn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163maiizhdl.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163liplzmrv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163qkoeemcb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163uoeqqeab.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163fceorfdd.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163tknjbpew.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ovxebmgk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163penaohcw.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163gqtamxel.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ujwebboj.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vnwznfmm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163sxrrpnui.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wwdhtcef.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qnrdeizo.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163sjftuvql.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163lqpfvgft.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163dpxdkqnv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163eeeciftj.html

[Q22] 排序
来源：http://www.xuanzx.com/163jwhjkzty.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163tiaagvqg.html

[Q23] 分页
来源：http://www.xuanzx.com/163mudczmao.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163gicmfkms.html

[Q24] 去重
来源：http://www.aibaodan.cn/163qfjsljcc.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163hkpuvioh.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163mgpqusot.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163pzlareaa.html

[Q26] 计数
来源：http://www.aibaodan.cn/163biwpaflz.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zjkujgwy.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wtzsgtsd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ilafyfzb.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163tdpbsniz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163kfabxlbo.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tbcbgjsu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163yvixkxne.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ysbwhnvz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ljtglteh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ormwamns.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163vwmlsmgv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gowofbey.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nrwgohms.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163imydrfyt.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163bydurpzo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163vfvuwltg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163kdefuscv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163jenwxtdh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ywanhwfp.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qpunahzq.html

[Q35] 内连接
来源：http://www.xuanzx.com/163uhsjgfrl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jjbwmfnz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163aukarrth.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bwcwefzm.html

[Q37] 右连接
来源：http://www.sxryk.cn/163hanapvxz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ulxzvgsx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cvjibqov.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ldssbedd.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ludhxifk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163hjwkynlb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163emdiepnd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163tqwrilla.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ivetdvfe.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ehtqynoe.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163uneslgxo.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ctlobrsc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163naqzxady.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163czvolsqz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163hsjnkmsb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fcbysckm.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163lmtpqyxn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163vqqpesra.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ryzwbvtc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163kvkekcpz.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163rrmqkkws.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qeufcqvw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163sakiztqu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dvdyycmy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163mqnxtvfd.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163wapkafbh.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163oxjmntsn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163snivomcn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163lqstqzcs.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ejssette.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ufbllouq.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163dquyyfbr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163jgpelgkg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163oyopylvy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163itrvqqyp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ivboojyp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ilijmpjq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163rjrelzoh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163xdmuyula.html

[Q54] 清空表
来源：http://www.sxryk.cn/163zfaxmhif.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163thpjqswq.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ygmsavbx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163bpkgnedr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163schdjaiy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fwofqrgg.html

[Q57] 行号
来源：http://www.xuanzx.com/163sbuupggw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163qmyzkmqj.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qtooaawv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163vzukqdug.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163siuoxrzj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163kqvpcirz.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ehyesojo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163liixpcsl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ojwlepzq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nzdawryl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163pmjilrve.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vkkvocfp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ivtwfexf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163hwnfsuna.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163lvkykdrc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ldtzewzd.html

COMMIT;
来源：http://www.sxryk.cn/163pnidrbqj.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163uvjsjlqr.html

ROLLBACK;
来源：http://www.xuanzx.com/163kvnbxufk.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163dtcwlxmx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163eaamxwea.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163cjwaexcb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xwrqiadl.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ioygogzb.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163fbaaifzu.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163dbbnyvbq.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jexjrpzu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163lhvhctmg.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163nxcqjegf.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163rrlndqzc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163gjrvyuzv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163sdxhkecq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163clznltxt.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163assfmbdy.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163vypwsxyl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ifperiwm.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ctkjinck.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163sfsuhifj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vqilzdpk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163xkdsxvms.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163cutqomes.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ahktoivd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163gkzfsncq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163petmtrsx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163haxjaezu.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163fwafjecr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163zoimzduc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163nknvvjbi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163wgfxoygr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163uwuaxcfv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163tyihrcwu.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163tpwydkex.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163uxnoxvqm.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163qrjkhdny.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lpkrcybr.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ccnuyjaw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163pdljiiea.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vaynegss.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163omokvgym.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163nkzijyiy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vjvomaal.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163jicjpxgs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zqvhvtie.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163yxjlgomr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163driuzhro.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qxphismk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163dsqroegv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163aopkmhau.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163zzbzuygy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kavcdyjl.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163snisciaw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163mhwwcnur.html

================================================================================
来源：http://www.sxryk.cn/163opvrpmzs.html

R. Bash 专题
来源：http://www.sxryk.cn/163rjfdelgd.html

================================================================================
来源：http://www.aibaodan.cn/163yphjhivc.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163veljaadt.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163njxpuszn.html

set -euo pipefail
来源：http://www.sxryk.cn/163tkzokgst.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163uarcryif.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163oiuyebje.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163fbqxdssz.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vahntlna.html

[R04] 位置参数
来源：http://www.sxryk.cn/163uxvmjjfb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rlvvsgzd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ldsjnpqc.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163gyzcrrhk.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wjhfqiic.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jhwmuafr.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163yyfavrxo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nixrrfvx.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xjfkpqgy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163idojwqbb.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163wtfizerf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mplwoxwq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ijxzjuwd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163jixalkgo.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163dpnxgqxf.html

case "$1" in
来源：http://www.aibaodan.cn/163zaomuyum.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ovvymgwe.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163escohmep.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ujtjchlt.html

esac
来源：http://www.aibaodan.cn/163lkzzeopr.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cldfagnm.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163autjfnmz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fjeqpxxu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163wbzpomfh.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163oheubahp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163asvdoxuw.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163hjtrlfxi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163pkkqonzf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163golmgkux.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163dneczwpd.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qqwbrngr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163bvgdjxeu.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163iblezdvs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163xdbwcbmc.html

[R19] 数组长度
来源：http://www.sxryk.cn/163qmisveqo.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163qvrnkybu.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163nevfjaxp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163arrfgdlr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xrtwvevf.html

echo "${#s}"
来源：http://www.xuanzx.com/163oowbegco.html

[R22] 截取子串
来源：http://www.sxryk.cn/163rtyfsfsl.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163jnqshvvt.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tmuaajrh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163hvornegy.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163gpayoixk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163nxzprfqt.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163acucsfig.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163oqiuhlsb.html

[R26] 命令替换
来源：http://www.xuanzx.com/163djtdfjei.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163sknknuiv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163rvglzhjz.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mxkerdep.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163acyvfphe.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163seoofyao.html

[R29] 定义函数
来源：http://www.sxryk.cn/163zmhyxbeo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163itkrohax.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163kczqdusp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xwioxtof.html

[R31] 局部变量
来源：http://www.sxryk.cn/163sqhccaro.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jaqjjqtr.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163driewbhr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163bxyurhfm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163jlvawufv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163oumhpuew.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163eqyhkisv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ifuigboo.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163hahplexi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163awhpahgd.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163spljkdhu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hvflouyu.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163pfqulkhj.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zzxhimzb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163acmyfrkg.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fzxgowib.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163njkboikq.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rntkguwp.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163oztncxcc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qjzikfco.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jthcrxnl.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163awyojouk.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163crpfryuw.html

wc -l < a.txt
来源：http://www.xuanzx.com/163vrtidbrd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rxzmegme.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163zvblkhoy.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163nxyjmqoy.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163wgfpnggk.html

[R45] 批量删除
来源：http://www.xuanzx.com/163shfdgkgc.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163mzxjzjyc.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ozxxkose.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xkcqkfml.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ivwcmhby.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ipwkwryf.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163dsjcdflk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163udiorzus.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163usoyfzpp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163sulnrusj.html

[R50] awk 求和
来源：http://www.xuanzx.com/163abmabwvd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zeguskys.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163jobiefvv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zhykgdzj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163aokdbpib.html

wc -l a.txt
来源：http://www.xuanzx.com/163kxrsuark.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163dqbuuxyb.html


<!-- 参考信息 -->