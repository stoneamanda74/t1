外链999!wailian999！

SELECT * FROM users;
来源：http://www.aibaodan.cn/163uktmkdyx.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163sqgokekm.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163oilndxsk.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mrseeudr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163cqaazlhw.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163lzenmwrd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ugpczfwc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163nekblane.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xutzifdr.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163vcqvfjco.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163dhvcgxpa.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163kwpfmrrr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163qmjpwdpf.html

[Q22] 排序
来源：http://www.sxryk.cn/163hjldmxev.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163mmgizjaf.html

[Q23] 分页
来源：http://www.sxryk.cn/163lvgtwkkp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ermxyttf.html

[Q24] 去重
来源：http://www.aibaodan.cn/163oicgiuat.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163wwwlvoyf.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qgdnvboj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hnepearx.html

[Q26] 计数
来源：http://www.xuanzx.com/163xqyzsnzz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163iaqsidck.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jqwzqwrj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163cnbqdfba.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163chvqhdxu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163hgcsynou.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163xoijucwk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163lxmzgfkx.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163iybwbdbw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dtwjigaj.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163acgpkidy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163jmjsjtox.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163kehggwty.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ifecbqhl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163qihdsmur.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163okkphrcx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163udxkkino.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163odanlsnq.html

SELECT * FROM (
来源：http://www.sxryk.cn/163phidaakc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163gzducyou.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bxvkwmic.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pnqtuwxt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ovyitfqd.html

[Q36] 左连接
来源：http://www.xuanzx.com/163fojgqjwb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jwztbyfm.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163qnpfzcuh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ikacnjxp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163gcqtxbwg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qylfdapv.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163lhoiuarr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ycktzury.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163szoviofb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163eyasfyrn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163sgiqvwce.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163onlxaqkx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163xsbayvgq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163vmgavfms.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163atrekxky.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163zekedgag.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163dmrbifum.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163shjcglhb.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zcxhpcka.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163tmildiqk.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163vkasybdn.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ebqxycih.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163uyhfnrlk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zdzzdpzc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163arewfipk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bwnxyavu.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ishabgkq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163svrxymfn.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163vhnbnevy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163godvyais.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163rsiphxtj.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163gkyxagjd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163mimbujqt.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163vkpddlth.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rozqzyes.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163txldpjjb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163tdozdfgm.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163pvaupsxd.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163cfhmekwy.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163pybznpwg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163qeivhfme.html

[Q54] 清空表
来源：http://www.sxryk.cn/163essvjkcz.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163wsomoeod.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163heugmhri.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163iledngei.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qaqkfwus.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163urfeejuw.html

[Q57] 行号
来源：http://www.sxryk.cn/163wzouvpje.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xjnohtuh.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xlixzlsy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163umciwhvc.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ipkqzfhm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163seqnvpji.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ovbdbzsi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163dzvxrcfx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163hhxuusbj.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163vihhkwqt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163kyagpaqc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ydpxiztg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mtqopgoa.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163iupnioaz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163gfpdenrv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163smzncfhu.html

COMMIT;
来源：http://www.sxryk.cn/163xwyhltbf.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163gtmwrbia.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kxxvwuso.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163aouzhlfa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ohjzrasj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ieutsuxx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163vhwqszvo.html

[Q68] 保存点
来源：http://www.sxryk.cn/163kxqikynd.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ajcrkwad.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163cymkqjkr.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163sncfbihe.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163iddshldd.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163kebtqnyl.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ivkwmcxf.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163tglcvnhp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ydeospno.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163qcyncqlt.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163cxoandxv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163fposlicm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163qpekmqsv.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163fllpsimv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163mfyizjgn.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163xizxmpou.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163msyayxvd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163uthgrvym.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163vdtzmovb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163nsxuqdqe.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163sqxwxbkd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jocylugh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163gkzinmdt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163opudabqx.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163msaelvhv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163fqfnogvv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rmsftnfb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163mnnrgfix.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163yxvksyki.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hscarhcu.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163egjqhaqw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163pzdtrafs.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163dgohyxih.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163wsbzngfh.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163vswqdpzt.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163zswvorix.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163psqhhwak.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163lejpqbnj.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163iqwyrjkg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163klrdsymv.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163jdijdnlz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vvuhfloc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163tpuucprl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xykurivw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163owddcwld.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163htnpxwbc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163cfmzsctt.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163mbeuaamk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163wptczrfo.html

================================================================================
来源：http://www.xuanzx.com/163xaimcijp.html

R. Bash 专题
来源：http://www.aibaodan.cn/163errgggej.html

================================================================================
来源：http://www.xuanzx.com/163oruaqnpo.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163tpwlbcup.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ymlxqusp.html

set -euo pipefail
来源：http://www.aibaodan.cn/163myjdmazy.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163zqmrtqra.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163iwkquziq.html

[R03] 只读变量
来源：http://www.xuanzx.com/163vgspingh.html

readonly PI=3.14
来源：http://www.xuanzx.com/163dxrrpbzm.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163dpchkggy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mxilzabj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ewdphvcv.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ppaobymj.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163xcpuxrsd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163owszbxnb.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dswdwivv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163abtsjdtf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wkaludby.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163hiwhzbda.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163obuikvhs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163kcscedzs.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163drwnismx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163plshprwb.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163awobdtkp.html

case "$1" in
来源：http://www.sxryk.cn/163givyqwut.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163wkwjnnhh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163txtrwtks.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mhujucfa.html

esac
来源：http://www.sxryk.cn/163msiaxigs.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163cacxrxbs.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163nvfxyhup.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163dkzhcqdj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qemhetih.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163rdcpqzke.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163davhcmds.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163hhkgohww.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163efmuyrpx.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zebkrvfp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163peunhvsz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163txbnagem.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xhgdepts.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163zlcyemas.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163kpuamglb.html

[R19] 数组长度
来源：http://www.sxryk.cn/163hgijbcnm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163xahlrkwy.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163yrfnnyoo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163bgpfqiay.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163kpcexrvv.html

echo "${#s}"
来源：http://www.sxryk.cn/163uaspfhbu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163jrxlaaol.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163dzvcicbs.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163eoytrdrk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163pobwyslq.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163lqwhxqfy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ntffqnlw.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163xbubrshe.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163kbgchzyu.html

[R26] 命令替换
来源：http://www.xuanzx.com/163nhkugvcl.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163jcnawpvq.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163mfanmjga.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vffvpmle.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rpdpsizo.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rixaapyz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163cyljpret.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vdtohvuu.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ewhswxgf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jmxlzyyr.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163wdqqvcge.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163psqmumdk.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163yztjuaik.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163qdgchvzr.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163bnxpdwvx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mcduyjqe.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163trtoaldf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nzluwtuc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163psarhsxy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163pepdseuy.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ebxajaui.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ruteakjd.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163fbqxsmmw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163gdjnxpaa.html

[R38] 管道串联
来源：http://www.sxryk.cn/163nwjjxczi.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163sktvelgi.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163oermcmms.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zkddzzfq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163hobwhilw.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163axcgtogk.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163kidzwsyp.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163hnwbvgkt.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vpooxxuf.html

wc -l < a.txt
来源：http://www.xuanzx.com/163yrkbjyph.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163uakchdyw.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163cdmkfttb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163tpxmrkmb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163uecvmjqu.html

[R45] 批量删除
来源：http://www.xuanzx.com/163txqdrpxu.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163bipqgpxw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163dvrpoofr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163waibujwa.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qpebkocr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163enopaicw.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163gcvpjwhy.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163rgbrhvcq.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bilqsayu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163dnrirzai.html

[R50] awk 求和
来源：http://www.xuanzx.com/163tlpqhvay.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nwwwdxfq.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hzjihcvs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163baxbkahr.html

[R52] 统计行数
来源：http://www.xuanzx.com/163hexgrkqk.html

wc -l a.txt
来源：http://www.aibaodan.cn/163npqvvbtc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163yywqnlqr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163fuizoelx.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163rlehknuh.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163wfxjppcj.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163nnovhhfb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163fmtzziqy.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163cnswkmpp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163owcuaemd.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xsoxloah.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163qbaoojod.html

[R58] 下载文件
来源：http://www.sxryk.cn/163npwncknt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163cwhsyaxj.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zoaedpxn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163brtiuzik.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163tqzfsumi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163itojukdr.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163tpahzosh.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163rojmngho.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163aanzadpm.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163dymykbml.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163wxbpmgmb.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qotxmmlf.html

[R64] 结束进程
来源：http://www.sxryk.cn/163wuruslrs.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fjatdsyh.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163kuqtmcls.html


<!-- 参考信息 -->