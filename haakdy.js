外链999!wailian999！

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163rttugxvq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163asztixnj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zwirztxb.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163zfhwbdyg.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163dhwtsljk.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hrmvhqnr.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163rzgmsycm.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163oeaparfu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163klxxrwrm.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163vrnkleuk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163nzqpftpk.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163tgdlzufh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163eydimesd.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163sdpeftbd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163hozrhuyr.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163hgnglolo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163sblslaqx.html

[Q22] 排序
来源：http://www.aibaodan.cn/163pveosjxm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163btvboxes.html

[Q23] 分页
来源：http://www.aibaodan.cn/163iurjgvpx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163dexcfeow.html

[Q24] 去重
来源：http://www.xuanzx.com/163aubfqjqs.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163gppsqprb.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163hapcecfk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jhkmncgw.html

[Q26] 计数
来源：http://www.xuanzx.com/163rvnpyxcs.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163fuxnxpgv.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163taccndui.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163djptdhop.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jdlskinc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163txyesfjt.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163bmfqeime.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163pwzrqcik.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163mhluvxbp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nwazrndz.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163maleyluz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163tlwpjhxa.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ywtdehln.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cxvctkvg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163bfxidhxe.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163gctjqlns.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163fukganrp.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ofznasrf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163qjkqpgsz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163unqdptfi.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ylmnpbby.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zxhavxhj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gbfrkczv.html

[Q36] 左连接
来源：http://www.sxryk.cn/163aqkmpoyh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fdvlvlky.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ocsiqpmu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163rhcswycm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rprrgtlb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163rgvxkfcl.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kyopmdiy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163qbbymrfd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ztpsmrvs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163xfgevleb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163awqbfznj.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tlowowrx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163mvclnnpu.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163guxbelov.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lmzcivib.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163veulwslk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fvxocooj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163cpkhgrac.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163eprwdjsb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gyzqfqon.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163fhaelaoc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163cogztowe.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163cvryexmb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pnddfhvm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163cqwbwows.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tjypazqk.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163kpnazgml.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163nrodjuvm.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ughmsqct.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163nfapfyxj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qeqxppiz.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163fqxhmkvf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163vxtargbm.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163stbjmykv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163nhuupalb.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163fxlbkyfv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163cqixhrgt.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gqtxslhc.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163esbotuft.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163cjodwjxu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163wazkbyyg.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163wvqrtzqv.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163txrxpnac.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163sjbxnzva.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163zczqeiip.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ueqlfjfe.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163muadsreh.html

[Q57] 行号
来源：http://www.xuanzx.com/163vkwgaquv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163cxvkvlbp.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163lddkhhjc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tjldtovl.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163bwcvixry.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163bkqisqxg.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163vryabsxt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ljchkldx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163czopikcx.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163dfzbrmti.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163fgcqvckn.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163henhmbxy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163agncueow.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163xzgplses.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163zusxteic.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163hveisezm.html

COMMIT;
来源：http://www.xuanzx.com/163ihwyehke.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163zicieanx.html

ROLLBACK;
来源：http://www.xuanzx.com/163ghydhdjm.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163lrotachw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163kkdxljfc.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163tkszfiqk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rzbglkxx.html

[Q68] 保存点
来源：http://www.xuanzx.com/163osujrvii.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163cmbezhxr.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163gjedwlgh.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163uhnbmrkj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ousnomye.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163chfsvcdl.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163edosojta.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ynpkgrea.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ntnopmtm.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163jjclegej.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163envkgfww.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ncpztdko.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163lxxmswqb.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163iocwmoam.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163clijwqpg.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163uqpmyerh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wvuubkmw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163aihwbown.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163uzpqovhu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rafpaxgc.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ewpxrzrr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jxcgjsdp.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163cxjvusyv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163aaykxbdv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163bbtipwby.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163tkeonnvv.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163egmyybdc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163soutvclo.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jxivyjmi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163rxcprfnv.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ltqegtfu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163crmcexmy.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zhelptdb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163uvrwpexq.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163divgsxup.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163gvsthmbu.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163mrzvgjns.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163grwqyoyr.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163gdedgcyd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163edlodqnu.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wbbbfekd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163oxnlcizv.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zhiywtqg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ahahgbvy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163zxbzjevp.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xasddqcc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163cuoqnzcf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163jqupddgz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qgjkyutz.html

================================================================================
来源：http://www.aibaodan.cn/163zanvyfqk.html

R. Bash 专题
来源：http://www.xuanzx.com/163kedkorqc.html

================================================================================
来源：http://www.sxryk.cn/163xqbbmlbd.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163mhgnlxfw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163wuiyelse.html

set -euo pipefail
来源：http://www.aibaodan.cn/163rcgpisxf.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163yrynlfvy.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163daukbzxc.html

[R03] 只读变量
来源：http://www.xuanzx.com/163dslqewhc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163xwhlmtlm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ktdofxwj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163zhbeyavd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163grghemcb.html

name="${1:-default}"
来源：http://www.sxryk.cn/163tfehxhla.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jpudggot.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163twxtltcj.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dadcrfzp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163otaibeul.html

[R08] 数值比较
来源：http://www.sxryk.cn/163cddxcqye.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163zyhiuovs.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163sfqsfdbh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163wxemlmyd.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uevaxkqn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163njizzfmr.html

[R11] case 多分支
来源：http://www.sxryk.cn/163popeorio.html

case "$1" in
来源：http://www.sxryk.cn/163sxvdmncg.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bbtfagtm.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163okekfkkx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gkasorue.html

esac
来源：http://www.sxryk.cn/163mdgyfroz.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ccarggzq.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163mwxphyxz.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163qdlqkocs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163cpyhhusb.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163gpukdbul.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163sgwcnphf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163lumdgfpg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163aogwouuw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163gymfuplp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163dtqjrvlp.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163nourobal.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ooslgqpq.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163juchnqps.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163sbepxthu.html

[R19] 数组长度
来源：http://www.xuanzx.com/163pjiygdso.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jiyvhzye.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163xkxowvnl.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qqiqpzta.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163zdefaahs.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tmhdsgqr.html

[R22] 截取子串
来源：http://www.sxryk.cn/163gaqtsgrs.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163sgmmazpo.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163jmfseyiv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163zopfseaf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rbnwgfsb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ogcrfldy.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163slyurowe.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163xdsfejfg.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163slpsuvdv.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163yfyoqxho.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163qgylrmbd.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dfydzcvo.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163kcwsnqur.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163nkwkuupp.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nwlcguws.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163qdyqwrdl.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163zjdruznz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xbcmwkaa.html

[R31] 局部变量
来源：http://www.xuanzx.com/163kogfafzd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163uqhnusbc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163slqbqmlo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163kcsvqneo.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ijtleqso.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ywehzkzo.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qinwvect.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163skfscpnv.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163nymuzsbu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163rdxdsvpl.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163demotxxz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163mumnktrq.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163jrrkcrmv.html

files=$(ls -1)
来源：http://www.xuanzx.com/163txmgrtyn.html

[R38] 管道串联
来源：http://www.sxryk.cn/163jqxvdxaz.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163siyqkukc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jxyeelit.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163rnsfamhf.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163kasnxdjc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163anqnbawa.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nxhsrtph.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163nmxdmcoo.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163rgehetye.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ncaqqiyz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163rmpvdxoj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163pzrudhcd.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ucvajpxq.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163daidzrgl.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ngpbstkm.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163uxvlyxtg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ibqwimbq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cfnbrupl.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163gblgubwc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163eoiyhzwh.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163lqrduqpy.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163lgnarepc.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163islrlykf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163rpfipdjd.html

[R50] awk 求和
来源：http://www.sxryk.cn/163sgwjvlov.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163rfdzxzxb.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163glmrfoxb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ottsnhbz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cetlhnac.html

wc -l a.txt
来源：http://www.xuanzx.com/163yqzijdan.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163rwzetriw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163bsdsuzkt.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163jcneykwn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163vrnmdieq.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163tfdsqpzg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ttbmlrzf.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163xovxtgkb.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163hozqunkz.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gpftjibu.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163tcnmawar.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fgfgtfxc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kpmnvbrb.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163jixgmsey.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163bgofapol.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163opanndaw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163suaolvdc.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163butejugx.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163glsvfmat.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163qesindrp.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163kkcefoov.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hgntcmkm.html


<!-- 参考信息 -->