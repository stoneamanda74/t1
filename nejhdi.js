外链999!wailian999！

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163voafxgbx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163nlmmftoe.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163wgrlnzhz.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163wuuzafiq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163lhftyyxi.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163jzpkyjnb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163fofnruph.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163pdhlpetc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163yzsuqemo.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hsirdttz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163qsfvouum.html

[Q23] 分页
来源：http://www.xuanzx.com/163qxvvdycg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163dhpdxyaf.html

[Q24] 去重
来源：http://www.xuanzx.com/163xcaskjal.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163xshxwemv.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163pvsmvokg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163sncddocf.html

[Q26] 计数
来源：http://www.sxryk.cn/163kpnjvlxf.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163rkeviimq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163nrhzxmns.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163prducmee.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163elbxcsxx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163wbcylkey.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163bnzgmedm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163nvpldwdp.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163zvmdtwgo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lxgtidfb.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163fbicyewt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163njxmrdud.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163uceppkcl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mklbdnnx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ebyadbiw.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163jwklmhqn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163jzfvqnzv.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163tbiylagn.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163epmbhzap.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163dkcyysdl.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163rgqeaohm.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ecbrjtav.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rxgmugou.html

[Q36] 左连接
来源：http://www.xuanzx.com/163kegxjfrk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163todatbru.html

[Q37] 右连接
来源：http://www.sxryk.cn/163evyccpbz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163flapuspg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163uewkipkj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163befqlvik.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xtaracjm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163cxhsrrwd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163mcgfgilx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163perpteay.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wirkzxrb.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163moatvykk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163piposmwj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qxllwgbf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163lnvpteev.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163upnrhwsn.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163xxtqcilb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163efpbtfqv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163jtornzxt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163omsvrsjt.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163nfdjqjop.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163lfmdlhod.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163jqpgvqrq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ydqrsjxp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163mjgkvnqa.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163enhxsevq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163thsevbjp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163gmjgyvpv.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ugeduebz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hxkwvscc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fevbfdri.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163vkxolobw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163cltgybsb.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163itugdhga.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163spgfufez.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163pekjxnpp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ympdtcow.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163yygcbyri.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163pvmpxyrh.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hvqvwxdw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163tfjshcuk.html

[Q54] 清空表
来源：http://www.sxryk.cn/163volvdidj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163rsgtcrzo.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163lifjutxe.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163kveujvqp.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163grwzpytp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xphzkhpw.html

[Q57] 行号
来源：http://www.aibaodan.cn/163dxcklwey.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jjyqagpz.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163fwonvmjf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163eitbgsby.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163zfhxtvne.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xriwkgrz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163jmsgtxsu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ffxlrqea.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163sgqaplzn.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ymzypvlw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jhwiudlh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163unoqvkhv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163scdearko.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163fkktnwit.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163zwjzvgtt.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ezntxsir.html

COMMIT;
来源：http://www.aibaodan.cn/163bgecabaj.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163scimlieu.html

ROLLBACK;
来源：http://www.sxryk.cn/163yklpkbed.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163udibwdki.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163nngviftg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163spjywtja.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163qiizewoe.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163pnegpjpu.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mwkvsoni.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163chwppjaq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mcmgxgal.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163dwjznokg.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163mzzvtpwq.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163kzibiwnu.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xjrwrcvt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ykizflhx.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zhsbkwca.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163alhwrrhs.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163negtihkd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vgcaxewj.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ttasixaj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163kwilnwic.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163mlwtyweq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163sbtwqoue.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ctlfnoqo.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163cuxxyodq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ebbmeurp.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163lqxtpdeh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gzpbbrko.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163roqrxufh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163thbtoqfx.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163tntndctu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qjtuulyx.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rschvhre.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163kgyfrzuy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163oyyzhtqg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163qsuyvnvl.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163zeacswdb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163fppgfqaa.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ovtdyfjv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xuubqesl.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mzgosxkh.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163mqwcstvy.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163rlcxffad.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163eljzafgm.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163sjgeyuuq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163iyegoxxr.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163uucnzybd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163mcnilkxl.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163sokpcryj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wrmzzgdi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163mlcqiesb.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163azsojkjq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ceniugke.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163arjylfel.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163drulqnnt.html

================================================================================
来源：http://www.xuanzx.com/163kvsbdztq.html

R. Bash 专题
来源：http://www.sxryk.cn/163bzfvmyeg.html

================================================================================
来源：http://www.sxryk.cn/163fyefnqky.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163pwqwjvrh.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ubijmlbi.html

set -euo pipefail
来源：http://www.xuanzx.com/163oxdafuae.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163gyydfael.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163dvdeleej.html

[R03] 只读变量
来源：http://www.xuanzx.com/163lneryxss.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163oksgohtr.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jwoyisph.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wuexbakf.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163lvxrvhgq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163fdgizwws.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ohvzamhy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163bxnhrwca.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ihwhxthh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ojpjggtn.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163mclhfhff.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xmykxhif.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hxfctuuq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163vjmmxyes.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zsehhtqq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163tniqcslw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163jfuohunl.html

case "$1" in
来源：http://www.aibaodan.cn/163bubrgego.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zzpmtlfn.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ikhietch.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163chtfaptb.html

esac
来源：http://www.xuanzx.com/163qawvifjj.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ktgbnjla.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163jmybezyb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163pmcxfecv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vykjnyia.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tqmcjczu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163zjvrxspp.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ewpfjxhm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163xmokcxsw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163tutgxfyu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163aztrlsqu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163cmkgujjb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163wyxbcmro.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163dxupbnjv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163kgpvveoj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163fnnsfgyi.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163qloujfnc.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163cosbvcbr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163rncsytme.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163iqzzusjf.html

echo "${#s}"
来源：http://www.sxryk.cn/163rhyiyhmp.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163inzchoyg.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cloaadwd.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ddrkdyrk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163slrslota.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163dkkfnzfu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vjwnphra.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ggjsxgje.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163rysgynyd.html

[R26] 命令替换
来源：http://www.sxryk.cn/163cglfdrhy.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163rpqyxuxz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163fwehckmj.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163mlzqodmh.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163yccsrlhf.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mttowato.html

[R29] 定义函数
来源：http://www.sxryk.cn/163taslaujn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wsrozdmz.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163emdmcvaf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163emxepgti.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163fsbpjkks.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163gxbqihlo.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163mcrrbbcx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mnqzhxuk.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163fvkrowln.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163nhhbunyd.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163lwfpajmu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jtxjukyf.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163xnmbxzpn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163qoqqxdvm.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xclwrvec.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zyyxlcmx.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163hfmnynwe.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163jcpixawe.html

[R38] 管道串联
来源：http://www.sxryk.cn/163mczdzupy.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163zxyuevnm.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163cqjbszxa.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163faiorhle.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xmtdbdjp.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163jkmdoogj.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163dmsqrvmf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163rysrupdy.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163szwfzstb.html

wc -l < a.txt
来源：http://www.sxryk.cn/163chwevwah.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163zkrvxunv.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163zhzjatrp.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163mhvmjima.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163tjfwzuon.html

[R45] 批量删除
来源：http://www.sxryk.cn/163fhlwsble.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kiyrurnz.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163evrlizph.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163feksflav.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jyebwyko.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163btahxbry.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jdnwrczc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163jkqcwfuv.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163rxodlyrm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163irikoevo.html

[R50] awk 求和
来源：http://www.sxryk.cn/163vcfbgeih.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ycznidvk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163tkwnohwo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163dzhgxbhv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163njvcjoxk.html

wc -l a.txt
来源：http://www.sxryk.cn/163uvjjsvjp.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163oojlwvhi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163qfacayeh.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vgxoudyi.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xazdcvho.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163votlyzaa.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163qpqilzjm.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xjwufllz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163shggcobu.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ircuirhp.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163axgsiobg.html

[R58] 下载文件
来源：http://www.xuanzx.com/163urcpclgl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ytioikdh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ydulkung.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163nvlxidwh.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163qcbdvuyn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163huvfqiwj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163abhyuzzs.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ueltuqid.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163dipwubrj.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163szazrxko.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163cwlglfll.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163eppxnnhc.html

[R64] 结束进程
来源：http://www.xuanzx.com/163sjdnufbp.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pydwzhzt.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bwyupcae.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163vqkjyvgk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kvfbxdkt.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rnpmmrqp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163arxiqtoc.html


<!-- 参考信息 -->