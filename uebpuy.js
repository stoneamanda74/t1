外链999!wailian999！

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163gdjettbi.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163zcukuiwu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163rmwqpdyp.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163hslxcgjh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bpgkmgzr.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163xsaxyces.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fdhjyxnt.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zeyrouvp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zoygdklg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hnuuulou.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163nkaijtgz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163dwlxewds.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163oihhnipq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163xdmoxnml.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cefycwyu.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ifkpbfhk.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163yqgdsqih.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163baueqhzz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pyvdsubm.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163gubhgolj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163giahrjwb.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163yiyefvrb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163vimxilmj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163bfslllag.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ttuahtbj.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dlspnlay.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163lngzeasw.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163pgntptao.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163mhjscdfb.html

[Q22] 排序
来源：http://www.sxryk.cn/163jxfzygqi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163wissilbm.html

[Q23] 分页
来源：http://www.sxryk.cn/163tkrpirgp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ntsdoexy.html

[Q24] 去重
来源：http://www.aibaodan.cn/163bqnkhial.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163wyqaguco.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163nkwvmiig.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163vgvuqvsu.html

[Q26] 计数
来源：http://www.xuanzx.com/163lixlkgry.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163vndkaiml.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163olzgkmdn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163nnomylgc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qqoqguwe.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163lwkcmxnk.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163lirgjbfg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163vfzcplbb.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163zgkzpmaa.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zgvogecw.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163mkorfbvy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163cfaqoeps.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163zswljcva.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rrnvjkxm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163vweugrzr.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163pfckqjge.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163fnqntytl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163sepclqsi.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163uljiwonz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163lqoqlwqi.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fyvzyjty.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ugvfymko.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zeazzkqa.html

[Q36] 左连接
来源：http://www.xuanzx.com/163yqrspchw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163nsdbjfuc.html

[Q37] 右连接
来源：http://www.xuanzx.com/163qurvtukh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163lxgkebxw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163adivumbz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163bobtzvgy.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163pfptyayl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163bblfmoga.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163eitsyyin.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163itgtndjs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163xobmuwkx.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163rzaulqhu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163chwywqgj.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163srfyrwax.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ajmcoiom.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jdhizjzk.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163zsaiplwu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163trltspmh.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163shtzrobj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163disvkcbl.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163jgbfmqnd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163hnrqptvt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lvljtosc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bnpdqblf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wtjjzwcf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hrhjhixw.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163zcdankzb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163eamvyoxh.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163euopuxwh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163oaqfkpdm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ekbdisys.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ogairfen.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163yjeeletk.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163trfzinmr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163rmboolek.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163uvafodgy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163bauzaeny.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163iuikutig.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163neytjxfg.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163zczfvvjl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163iefvgrof.html

[Q54] 清空表
来源：http://www.sxryk.cn/163iltalsxa.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163meeliswk.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163qxlluplw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163rvpkhufd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163pnezgctc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163qujgaurd.html

[Q57] 行号
来源：http://www.sxryk.cn/163rxzloigu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163wvxzukzv.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ebswrgqr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163wlwfmixb.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163okozcuis.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163nfxdexrw.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163dgiglbjp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ueahxvfd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163tcivvvgb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163vigzvang.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163benaegqr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163nhicdhbg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ntgxrahk.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163pxekncnx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163jjlkqddx.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163jzgvaiuc.html

COMMIT;
来源：http://www.aibaodan.cn/163uyysbzsz.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bjixivdn.html

ROLLBACK;
来源：http://www.aibaodan.cn/163mdsfvzrd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163lhsivvhm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163aakadfrx.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163nlsncklq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163xjkkqjlg.html

[Q68] 保存点
来源：http://www.xuanzx.com/163haymalzz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jyqxhtqb.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163afbwsaay.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zitxjnvc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163wbamwrol.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163fffploab.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163jvncrlzw.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jrrzwjun.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163jhceqtmm.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xshhgudk.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163uzgnushu.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ntqywbwq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163baishqko.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163njzojsuq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163dadkuvhz.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163tdbwrspv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163hihznafk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163fozfseyu.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163wsnfaklw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ugpfizfh.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zxfglpgq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163yrwqcjtm.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163kuotouwh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163erjvfjmv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ufpvbwtf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163hsiklkfv.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163uynqosfg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163fpgcvzqw.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mbnspzuv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163dvednwpq.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163tlafqpot.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163uhifqabp.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163kesdfbev.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ndtgrngk.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163yduxrupu.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163roytlsdu.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jrktysqg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163cembkrxq.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163batxwiyk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ilpjbpyp.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163igwmiwic.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ymtouebf.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163gaxbydnz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163pwybdiow.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163inrjffgi.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163tzgpxxfv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163dutfdrgd.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163riioujni.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163fxlrtktp.html

================================================================================
来源：http://www.aibaodan.cn/163bhpdudnq.html

R. Bash 专题
来源：http://www.sxryk.cn/163ntrqqfti.html

================================================================================
来源：http://www.aibaodan.cn/163uvgwuyqi.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163gkzwbeim.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jqoyxljj.html

set -euo pipefail
来源：http://www.sxryk.cn/163tydlmadr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ktilwlym.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163nrqpihyp.html

[R03] 只读变量
来源：http://www.sxryk.cn/163znmiqfqu.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vakvvtai.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163blbjaako.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jlirmixs.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163lhuipjmp.html

name="${1:-default}"
来源：http://www.sxryk.cn/163abkrtdig.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163cmioviih.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163owhdxens.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163lsvmyawc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163upedxipl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163mrluppgo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163rvaazedx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163lldggibl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163sypurwgy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163eedrekpg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163bxiwdkyr.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cancvddt.html

case "$1" in
来源：http://www.xuanzx.com/163zabkdahp.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163lfrvmgcd.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ilrrxavd.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163dhhxehga.html

esac
来源：http://www.xuanzx.com/163nnyhslpp.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163kgywlzli.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163jdtbyxby.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163glqofzzj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163uipdgxru.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163omvlfhss.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163myauvnwe.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163iamzezjs.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163wekcuyjh.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163zsmtytcd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163nnojdsea.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163znjlzpnr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163gubnfbuk.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163rdqhyhmi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163bsxfqojm.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163itclsgtt.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163nokwyady.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163gzvqashf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163cmyqfhuz.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163fnolesvx.html

echo "${#s}"
来源：http://www.aibaodan.cn/163zrusragh.html

[R22] 截取子串
来源：http://www.sxryk.cn/163refjfcei.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163gthpovjx.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163khjwelrw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ixfvhdxy.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163chhctcxz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qpqlerde.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163kfnvskxr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163uhhqcesi.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ucyftush.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163brsauyjl.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163wlmhlcrx.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163dynlpdmq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163psfnfvvb.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jnskimdi.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vqbzbxrk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163aqauabyf.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163sksahuyv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hjunzrru.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ujrswgeq.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jpbokesm.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163lkcsqqxy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163iauhbmzt.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163fuhgicvh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163uhisbwzk.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qldfgfks.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163djyvgkjc.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163yzchqoei.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163kiyqvkce.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hfunzzey.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163szftitfz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163chukcwjf.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163xffagziv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163dtftrsmk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163yhlzdvkg.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lesgntco.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163brtuaffk.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ziwmufji.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163oqqwevsr.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163tghdktma.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163txczxrhr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163egwzgimo.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163zfvcgtov.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163aucdluym.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163xhvmnfoz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163upqmocjm.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163tsrwzqhy.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163yntdmbmb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163arpdatdf.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jflvthzb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163mpgxahmv.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163uqsfxrdn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163pdylpfer.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163qdbcrfbd.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163jedhtsdb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163hhqccwff.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ajommjli.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163iyoirrfh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163lgwxhabv.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163nyzqisdp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163avqwnljk.html

[R52] 统计行数
来源：http://www.xuanzx.com/163wjgpvcog.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ltdgpzbz.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163iswolrdq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163tdgoqbph.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163hxokzdeg.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163cjgramok.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163jexvowbf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163zkbdhscc.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163njehhqkt.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163okrjxeis.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163wauwiyeh.html


<!-- 参考信息 -->