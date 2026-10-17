外链999!wailian999！

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163mnuztqnw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163bcpvwhpu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163lxahpssf.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163zeeodgza.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163cwyimxgz.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163zruqdasy.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163qpkvogap.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163xcvlqpqe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163otcgyrlp.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ckgyvlow.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163lvejeufr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163vgrzhjes.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163vsjvhrjt.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163bflvfrnx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rxxrtgxw.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jgboiuxk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163syijosnx.html

[Q22] 排序
来源：http://www.xuanzx.com/163dknkdndx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163exvfvikl.html

[Q23] 分页
来源：http://www.aibaodan.cn/163uwccutpm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163nrcxwwev.html

[Q24] 去重
来源：http://www.xuanzx.com/163syzicemn.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163aflbfdgd.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163hbeodqvq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163fppytquw.html

[Q26] 计数
来源：http://www.sxryk.cn/163lzmhcxmp.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163kamlmkuj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163glknmgbt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163dfubjmrq.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163frcrqadv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163vthmyzks.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ktimeixq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163nxzczrss.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163hwopclos.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qejzuwzm.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163qrtmpwdf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163pgiutxcy.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qwfkbsxq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jzlpiqir.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qshhqnhy.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163smnossmb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163qonwnyjf.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163wgdkjgxg.html

SELECT * FROM (
来源：http://www.xuanzx.com/163dyrbmldf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163bjiawyqa.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cybtkxkz.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163uqpisrpp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bcytypvv.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163htcncdgz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gssvlmur.html

[Q37] 右连接
来源：http://www.xuanzx.com/163acfaydev.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163sphlwgwn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163xbjnndrq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163mvghguaz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163isipskkk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163klaxvzhw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ioqdozxu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163pddzlder.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163bpwbyoiv.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163zjkmzmcn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163mwoyymtp.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163uvdnghty.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ycvulbvg.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ostrbwro.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vmgfasla.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fmtvmxxc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ylniraue.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163qobkcdhl.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zlyiupgi.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163jqjtywpk.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fcolodde.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gkfmuxad.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ltcvudyw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dzopgvuu.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163qmcrtelz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qpfwfwlq.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ybqbpszp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163cmsckljf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wpqkgeaq.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163rwuhdsis.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ffyqmrio.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163zbkmqcti.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ieeiffbw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163jydzglfl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qvpsvlsl.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163rnxwpbmn.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163uepbhijt.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fpnonlpo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163keqxitql.html

[Q54] 清空表
来源：http://www.sxryk.cn/163psbsijkx.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163kknmnpcg.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hundsdgr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163lxctcgfe.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163mpcvohhm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163fuycrptk.html

[Q57] 行号
来源：http://www.xuanzx.com/163qyapusad.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163fotusjur.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xpfmmlbs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xacfweek.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163eklogozc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wefbjcvp.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163mylypmjm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163bkousgbh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ovlizztt.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163neckuxxg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163nfkwtjpa.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163jrtemaqv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163effhpynr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163dxaoiiij.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rzeadlhq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ixmhfypp.html

COMMIT;
来源：http://www.xuanzx.com/163vmpugaei.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163grtwesnp.html

ROLLBACK;
来源：http://www.sxryk.cn/163ksschnga.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163wuvuqrvf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163pvsnxcmn.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tuopjvmt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163kbepzfqq.html

[Q68] 保存点
来源：http://www.xuanzx.com/163imfilxqs.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163uwqmkjtq.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163omeyybfe.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163qfhiswgj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163uupxbrnd.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xbwdfvxk.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163oczmnuqi.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163fdgsttpr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163cnbrpnzt.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ydzajmpz.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163dawspzyd.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163mgtuwvfs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163vmhkqemx.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163dwcevxqr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163eagpftlj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163cvynuuys.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ukxgbcoc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163atzqdvss.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163bpmpwvfz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163iohhjkwr.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163nanawptc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163zmgzgtes.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163xuvbzlsv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qsijbkjh.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ckgegunf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163zrkeijjg.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163lbqqghok.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163dwypzgak.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163pikalswe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163tyxhqouy.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ucwkriba.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163vatzddef.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xtxbejuy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163awysjoka.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163kuvmxhga.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lohbkqjg.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163iasoyhnm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163nvwozkzd.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163pyynutfz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163asismqge.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163znlgsnuk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163oayyzchk.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163dfiqgrkq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163trwxdcdw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163uhvpasia.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ilbmwwhu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163mweyuhde.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163uqzblyct.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ipuolkro.html

================================================================================
来源：http://www.sxryk.cn/163cczficyf.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ubsqizyk.html

================================================================================
来源：http://www.sxryk.cn/163kwssoats.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163vqvrcguo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ekjozytn.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mzdjjlyg.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163dralnjsq.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163vbxhutce.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163yoovanba.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gxcvzzjq.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163gnejxfmz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163nmttgbmj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ggnxrbyj.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wbwuiqcj.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tcoxfvti.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163uowpzkau.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163jgaufmsl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163snrnqjga.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ofdtxkxs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ptfvwhef.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163sjdqwnwl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163hnvysedm.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tyyrmeie.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163agbpqxqa.html

[R11] case 多分支
来源：http://www.sxryk.cn/163wegjtiim.html

case "$1" in
来源：http://www.sxryk.cn/163hscoxkkw.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163akqtbhnb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ljphjsew.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163tmrrnqyx.html

esac
来源：http://www.aibaodan.cn/163kjgnbgio.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163efwsuurc.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163zhmapjid.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ipawxjmh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163lczrzrqo.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xzwrpnnu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ocubpyop.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163aevyszez.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163esjflmni.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163dwrjbufr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163esyzboyj.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163atjafwyl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163eqysotlp.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163tqznhrbs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qgkggokv.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ulupmdtp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ogiwebus.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163zybqwlon.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163agsosqbd.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163uhhzxcyo.html

echo "${#s}"
来源：http://www.aibaodan.cn/163yoofomgp.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xhbfnueq.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163dohfoxqx.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163knruftlo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163nfdbphjg.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fbwawaci.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163joeramex.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163lsrqhksw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163vqzzhedj.html

[R26] 命令替换
来源：http://www.sxryk.cn/163mbgnatah.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163akgabxal.html

[R27] 算术展开
来源：http://www.sxryk.cn/163keocbuhr.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163wwccqjlh.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qebzonfi.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163vvukwvdm.html

[R29] 定义函数
来源：http://www.xuanzx.com/163rmmzhdli.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qjhcolnj.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163cxcncwub.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hohxbrne.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163hpcvlxgv.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163edgfnhgs.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163sleudasr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163jtodihou.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163bbkkkchu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vpcicjlo.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ysztwqcu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lipzusux.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163kxtavtgy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163achenhdw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dgzeksxy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163jyutelyq.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163rtyjvavu.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ugwodqyq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163rasdmedl.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163rekrybsl.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163dlnppbiu.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163iqatljec.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163kncyusyd.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163tkpsbuls.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163xyfrtbhb.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163qlrowwpx.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163aznwyway.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lsmdyrqw.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163cegczczl.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163wxkatxrs.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163wllpkruy.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163tqtcjrva.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xaronxpw.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163mdgrieeg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zggclotc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163tjvrwfib.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qydzcsmt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ntqbcxxj.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163gwajwmzd.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163lixhgpsj.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ysuabjtc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163lzkydjjs.html

[R50] awk 求和
来源：http://www.xuanzx.com/163amljyjbv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xubnatlp.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fdvxqayc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163sbvxjkoa.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ednpjerr.html

wc -l a.txt
来源：http://www.xuanzx.com/163rdvhcjsu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lljqdpnh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vzulitgd.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163gzaykxfc.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163sefkcrzx.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163pvrcszxk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hymmmoiz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gqxpyefa.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gbmakydi.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163umqhmrnf.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hvmblvcg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163bvahdvgc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163cjvbbidy.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163gtgnwxab.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163yghiuvzl.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163uxiilveu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163yvfzochx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163uuzhsgfs.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163pdilayzm.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163caqoyguf.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163kswashvt.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163urpfafff.html


<!-- 参考信息 -->