外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ewaqdhdi.html

[Q07] 删除表
来源：http://www.sxryk.cn/163tyaoxicw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wzziqiyq.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jeiwvqhw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163eumdcpal.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163mywejqas.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163nahclejt.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163iowivqpf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163xptmxyvl.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163yeyxhpey.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163xvonimqx.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163lrlblxtc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ytsnecmu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ivjouhfu.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163dwbzcbvb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163szoufdun.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163pjwxngxu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163yzqggwil.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163fixpuwgu.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163cugxcnkq.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163xdwoiuiw.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163wcanxeli.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163fspqwvaa.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163alcajseb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qixsgowk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163nivqtdgp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zlqmapay.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163yuuvnlba.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163qqgyxpwv.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163aoreukff.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ztdjfxcj.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163vqkanfpn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163tehswvqt.html

[Q22] 排序
来源：http://www.aibaodan.cn/163teopzmeu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163yaubtfmx.html

[Q23] 分页
来源：http://www.xuanzx.com/163kblbpopc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ztactihm.html

[Q24] 去重
来源：http://www.aibaodan.cn/163gcpwqaih.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163louptscp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qwnsmxmz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163fwwlubhd.html

[Q26] 计数
来源：http://www.sxryk.cn/163pgamzjnu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163npmthwpm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kzlobejd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163eyndqpsh.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ozktlrgn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163fnnaskwk.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163vtgserna.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163gvdtgfho.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ungpyypc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ebkhlmkd.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qxmsncbz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163xpakmcot.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qgxxjdmz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163eijcfhvb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163loebkcic.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jgtijjju.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ytftavvf.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163cozihcvf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jvwujkpd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163iefbwpyb.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qsocipss.html

[Q35] 内连接
来源：http://www.sxryk.cn/163tbtdaesp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dojoqrbr.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fhcvgral.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bghoklwt.html

[Q37] 右连接
来源：http://www.xuanzx.com/163pappggef.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163keppbuyl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163mxfrswht.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163pampmlav.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ivwqjkvp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163kwkrqrgt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ynkybmik.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163dcbxdmfd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163tbkqrsvu.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163nbscuyav.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163efvppjix.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163bgyzajrf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163leieggyu.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163zvkdoara.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163txciaqqg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xdhueiyy.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ohmmznnw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163pdizfqxb.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163xkfnpvud.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163asnnwkfm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163heiorwry.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163eoyhgzvb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zejvfeup.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vadzfsuw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163atpfvymg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163doojpjvb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163dpyjzdhf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163mycrpbwe.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163sdudeqls.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163aflhbgnf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163uezcjeui.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zkhzhwrf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163nrnfoyiw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xqkwzhax.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163diujmuax.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163qwcfcucz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163wntjgglp.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163diysolhu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163hbsmvwsh.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163lagopmjj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ziqftbwa.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163usfrpwrv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qutidtqa.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zisypmjs.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163znzidpvj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163kqkotoyx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rnfiyowl.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163kkdgfpfm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163nqhixgur.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163nezwfxxx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163swbaagtv.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163knsbzumy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163kweyelvb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163nckwhmcl.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jixavawu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163wpycszoc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163iqdmpkds.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ricrdsdx.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163bdbyfhls.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163qvlhkdyt.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163umxlwznu.html

COMMIT;
来源：http://www.sxryk.cn/163jaaphzsn.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163jubrghcb.html

ROLLBACK;
来源：http://www.aibaodan.cn/163fekgfxui.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163sebtsusm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qezmfral.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163txhlozsy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zyypewxg.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ajpwfulm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163xjyyfmtt.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ualsswub.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163cpusyeyr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163coppqdsz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ycktuqxp.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163hvhcdkpb.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163erfvkoud.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163jtvrgrpi.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163huufytkd.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vsvmvlsj.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ryujghik.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zzsosrjz.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163vyjzwcmp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163dqwgsdwi.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163dylgtmum.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163fdqnzzlq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163dwcgbztc.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163qespksie.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163yetwdrld.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163shxubrso.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vxlvopjx.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163dmpfohde.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jxtyoncb.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163hkxaappq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163syhlfvqc.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gvuqvony.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163vtvautgl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163vvnniohu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163lhispwkm.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ecqmnggr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163laxpvxas.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163itlaiqyb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163gouzkdwp.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163mhcksfgq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163wvhedmwl.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163cwimfsue.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163gpzyvdvc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163whakgacb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163cxhxzwiq.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163pskryeer.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163bczbtgis.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163rjwqbxwl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fxdeagyy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vtrrbzgf.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163aqvyvoso.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163xzuyotnv.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163sthzrghk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163dituahqm.html

================================================================================
来源：http://www.aibaodan.cn/163joohtvgs.html

R. Bash 专题
来源：http://www.aibaodan.cn/163oxrciicc.html

================================================================================
来源：http://www.aibaodan.cn/163kkhvbowe.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163incqmggs.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163pvllrakx.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ogilsyxx.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163tlomipde.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ksjycxsr.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ftyusojh.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163bjcilyhm.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163boaxclvr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163tgvcdytq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163cplotlkv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163waqyzzvi.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163nbvttrsj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163iabpcwee.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163prhtswwj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fhkrtklq.html

[R08] 数值比较
来源：http://www.sxryk.cn/163nyvqohoe.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163tayiuskw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163sjobtltg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qczxlnim.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163pjsfkqjh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163yznecouw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qpidoywu.html

case "$1" in
来源：http://www.xuanzx.com/163jqiemkhs.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ukbzzpjp.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dzigequq.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163gnzkrhns.html

esac
来源：http://www.xuanzx.com/163qrfoecfa.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163gvpnjgok.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163glpetofw.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ieudmglu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163sqciavvf.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nxycjelc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163zoiexaaz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163lioqibir.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ohnqkhaq.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163gaefcjxk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163uolkdary.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163rlqsizyi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163uaeqbuma.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163jmpgpgsu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rmoohtmj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163cinneodo.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ralrditd.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hsriofpj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163rndycpzw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163zeensfhb.html

echo "${#s}"
来源：http://www.aibaodan.cn/163bnmsmlob.html

[R22] 截取子串
来源：http://www.sxryk.cn/163inqwkuch.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163uqcnrywa.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xxawnjrq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163yanqfvhi.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163icdeetzo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163wcepvaco.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163vzqptwvd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ckhxongz.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fdoaeauj.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vxdduhov.html

[R27] 算术展开
来源：http://www.sxryk.cn/163rujrvfif.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ksuryhzj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163lstuirnp.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163edpfkwbv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163nxplthkj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dxlujmwl.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163dlrmxzxw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fpwveapm.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163tbvujsiv.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163wpfstxve.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163llotzlrq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ztgsatmh.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163uwmlmklw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163yeelnuor.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163lsomcuaz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zjpvfjet.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163mzigpuiz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nbgrrfni.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163sjgwqekz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163dttituik.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ufzgsltb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163udesyitd.html

[R38] 管道串联
来源：http://www.xuanzx.com/163vtuwizhj.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zfohrkiq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163evyiklpt.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163gpzhjxng.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cqeobbhp.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163pkbhegli.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163muafaanj.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163uoopiobo.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163tpvdpsor.html

wc -l < a.txt
来源：http://www.sxryk.cn/163npoemveb.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vpdbobxz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163umjdldok.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163gmchbxvv.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163liianara.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ytodzyio.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163cfvnlhzr.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163dhxvfbrx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163zzvxygow.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163mecfjtkm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ooketwzm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163zvldlrze.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163yqqrfwpc.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163hsvkhucb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163byzelmjf.html

[R50] awk 求和
来源：http://www.xuanzx.com/163hbqnuehl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163dmgitwmt.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ajdelkyu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163njsukelz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163kgnoyxci.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bxdvvvaw.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163naanpakw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163koxmhqfj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163yafimgts.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163rzszrtxm.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163rkifexul.html


<!-- 参考信息 -->