外链999!wailian999！

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dccyrigu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163sabjktcp.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163uvwmxaaw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ugsaydcm.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xlujyqkv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163gamruhad.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163mfxbhexa.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163upbtopja.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163qpkxoxxm.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vwnocpai.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ivhrzpga.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163xzqvybkj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163tbbbhvbk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163eiluacfp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163epazdbih.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163kldcbykd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163vdjfzeqo.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163wtvnnafs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163zniadzig.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163dhxzvzqv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163bigkokuo.html

[Q22] 排序
来源：http://www.aibaodan.cn/163aoklwxpi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163fidjiaqc.html

[Q23] 分页
来源：http://www.sxryk.cn/163fewklxrk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163hiskqunu.html

[Q24] 去重
来源：http://www.xuanzx.com/163gxjeziqq.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163xxisakqw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pyeiycfp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ekltdqoz.html

[Q26] 计数
来源：http://www.sxryk.cn/163glhywnue.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163bhdtdcwd.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163lzsnuzyp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xtrzjejx.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dfldchki.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163kskatvxj.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163mifaanjs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xhpfupoi.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163hzmcrsep.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yktfhvzo.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163imtkpfxe.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ymzrwhuv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vrlszldi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pjchoesx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xwyfejqi.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ukyrctyw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rwnlqsvj.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163agqmowki.html

SELECT * FROM (
来源：http://www.xuanzx.com/163dkgnmacq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163aiaulghp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163qkjejvvu.html

[Q35] 内连接
来源：http://www.sxryk.cn/163nobeylwk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wgcwzifc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163hqsdiheq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mwekpyqq.html

[Q37] 右连接
来源：http://www.xuanzx.com/163qeketasl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jhkrkcnr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163zxikmgva.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163rnexbxnu.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163evnfqtvb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163trrpfndw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qtjrlewa.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163mtlkztdy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163whmhmntl.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mcbwvqfz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ltdhadza.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163fijjydpm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163rnuffuiq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163qihyifpz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163sokxlxxy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163jbjlbbhy.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dqwhfhet.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163fpuazggx.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163qoyknuap.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ykhpbhwg.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163zcrhwgom.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ipbmjltj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163xjwgtqnh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ppafkdnu.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163guuottah.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163hlhxbfyp.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163uliejwpc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163xaipgjqg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163upvaqkja.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163glujpsjp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ungtsrpg.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163iyjtoibp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163fqaxeafz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163sfzcobni.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qvskagxb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163jycmhaob.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163awsnqojn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vagisboi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163kjosuqzl.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163iyiqefgw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163smpzbkec.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163soilwwzg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163znbeqxlj.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163pjzfsuwt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163jhxrrlrp.html

[Q57] 行号
来源：http://www.sxryk.cn/163ggxrdnrv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163fppgxrtu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163wwvsehys.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163bncqbkjy.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163bokmizqc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163glrzltjq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163lfvtfzsg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163nhveudky.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163zwlcudek.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163penedzcr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ppnaebhx.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163rlljhxyk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gevbteps.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163egqoyojw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163wlyaaklo.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163yqvgfkjt.html

COMMIT;
来源：http://www.sxryk.cn/163augfldfj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163fjiwglng.html

ROLLBACK;
来源：http://www.sxryk.cn/163isllqscd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163uccgznvg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nfwrvahl.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ogxamjae.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163zhzgugis.html

[Q68] 保存点
来源：http://www.sxryk.cn/163doyydjwk.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ihogqegm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163nmwdizzd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163lyksncfj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163xsrlepct.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163dzytbdwn.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jwjilnad.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163utdsmcdd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163earfxdhu.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163sdxrtytr.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163scwzluzs.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163liapvbfb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163xjnuhtwz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163pzzxfwuh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zsbjltsk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163rskkjopl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163cebcwxpd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xqxcbjax.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163qubwnhdc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163sicecppe.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163cnquckfl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zcrhuzmb.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163zgqglqms.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qpivofad.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163jucxmghq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ibxbabhd.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163sxygnryg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163kwzddtos.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163izrdtcpi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rykchvdq.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163czjzieof.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163rxbefbzy.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zaqiwntz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163heoisaas.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163kcfbmpcm.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mwzjakaq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bmxujhco.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163icsjawrw.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xkhjydww.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163yoejvcfg.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163msnykzht.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163bqeudvto.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163tndczwve.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ocmncaby.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163jmtigpbs.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163kgktmxgt.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163igdosvel.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163crlqkpoq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wboqbyjj.html

================================================================================
来源：http://www.xuanzx.com/163xlsydhft.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ttymgtrl.html

================================================================================
来源：http://www.sxryk.cn/163kwtvdaid.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163uqglshsv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163vsbhevbt.html

set -euo pipefail
来源：http://www.aibaodan.cn/163rtzledxn.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163mcuaarpi.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163nzzyazmz.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tfxgiooi.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163mlamfogc.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jbxywgsz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163jmvwppdb.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ajkdtzpd.html

name="${1:-default}"
来源：http://www.xuanzx.com/163abxtdejf.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163foyixalb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163patehxyg.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163chvmrtju.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163manwgide.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163cjkthmxw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163svtlhjjs.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163recjkhmg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163swlvprnm.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163tfenrhke.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163qgdpdyyb.html

[R11] case 多分支
来源：http://www.xuanzx.com/163tdbdrthf.html

case "$1" in
来源：http://www.sxryk.cn/163nirwhpgr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163igjpkiob.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163sqeiosal.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163lidehhxb.html

esac
来源：http://www.xuanzx.com/163qfbcuanz.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163czbzzcxd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hafcktzr.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163kgdpegxm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vjrhtiej.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163bcfrzdnr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163kemtskgm.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163edvzaism.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ynvhzbzs.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ctwtwhjq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ofahnqxz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ykzomxgg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jbklaxnw.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163hlhhhctg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rwvcnzzv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gpgpyfzx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163zrrivnzo.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163sbygazds.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163afwzirik.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163mpasynbj.html

echo "${#s}"
来源：http://www.xuanzx.com/163otwwneag.html

[R22] 截取子串
来源：http://www.xuanzx.com/163vviwokcf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163avjcmsgl.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163bbzknqzo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163oudzdkpu.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163fsvjoasb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163bjpavyaw.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ljrmfgwx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163arorkrqi.html

[R26] 命令替换
来源：http://www.sxryk.cn/163vxxvnbgi.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163awerrnsz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163cosotydb.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163pszkyhrx.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163usymveup.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163praqamhm.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xzccrwer.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163govuwqvu.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163uqpntmye.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163zlmwnufj.html

[R31] 局部变量
来源：http://www.sxryk.cn/163pjxmmanp.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163hddjyirr.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163edffvpbb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xklpsodk.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163lteljojx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hljklfzr.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bsodgjwm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hmxyhdrm.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163yelzhwdk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163fkwgkoec.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163urxqzbbf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jkfyxetn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163szlenckd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163clrdomkz.html

[R38] 管道串联
来源：http://www.xuanzx.com/163kvkxlaby.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163febwcswl.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163qiixilzp.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163luvrbvam.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cgfyhzir.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qynulmga.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ivsdjjzi.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163edpqsuwq.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163uispiiyc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ucpoqvdq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ucurifam.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163dscikmqr.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ryvbfdov.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fyfsyxol.html

[R45] 批量删除
来源：http://www.sxryk.cn/163prydooyn.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163abjxtisu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163frsteghc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163qjjzqlub.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ydbfbmbm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ujpyrmfi.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hnceqsfa.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163oocyhwxu.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163bkxvbakr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163jzjlwuek.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163mbhxdwlv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163pwzybkuf.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163paualjxz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mgsqksoa.html

[R52] 统计行数
来源：http://www.xuanzx.com/163zhgljkjh.html

wc -l a.txt
来源：http://www.xuanzx.com/163revbjdei.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163pbnsbrjj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lygmofcr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ifoncqju.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163bjnwmgsz.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qeimwphy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163lcjztimk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163noqstosv.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163hbctcxol.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163agojrxcv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163djmjiars.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fqwhxlpi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ezqfzypj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hpxggyxk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ohijrlfw.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163hisflcgi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163pcefcgsk.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163vbnpomua.html


<!-- 参考信息 -->