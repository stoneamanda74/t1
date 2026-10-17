外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163heliytfy.html

[Q26] 计数
来源：http://www.aibaodan.cn/163mskcxahk.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163yszeszhp.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ivnxfdnl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163mdphypfl.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163dsrbcjld.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fvukcqul.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rxvgkgya.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163bcaptzww.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ijafmuka.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cpcptgff.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163gejgcjwi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ujxsgbsq.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163zoexmvuu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zimqyalt.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163iketcthy.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163rsvvqxmq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163nktchdlr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163tpcqgfyo.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fcfsavdx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163mwspzmoa.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bcovyrmv.html

[Q35] 内连接
来源：http://www.xuanzx.com/163rstchmmf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uzajohon.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tvxjugcx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vciclfgf.html

[Q37] 右连接
来源：http://www.xuanzx.com/163uarkykjc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ucjliycv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163klisqctj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163lzqapmdp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163tutapfdg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163vzjcahys.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ndmzmtwh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jraiwxxv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163hexsxajb.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163tkpyqeya.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ewjtrdqx.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163bifthuoz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163msugjstk.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163zfzpkeyw.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163akwmzueb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ulqbrdiq.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163wypyzwlc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163nxvhdinu.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zntdgnee.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ftytsphe.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163msojnjfu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tjdohclv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163mkbdhlie.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qbanqdmp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163greqnofc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163vmcnijwd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163fkeytbnb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mfyhgjaf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163guvoprhc.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hefrksoh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163daidlugd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163fgqtmrhp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ecvbmxlg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163uumvycob.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163rwaljrid.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163uoqxzovm.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163wonkgphw.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ramvddfu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163bkvomomg.html

[Q54] 清空表
来源：http://www.xuanzx.com/163qrnvxfbo.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163yxqwuhuk.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163pgpbyphi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ublqvktx.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163tfbhkebw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163gpvaiovj.html

[Q57] 行号
来源：http://www.sxryk.cn/163hojvoifl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163bldwlkic.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vzgqgjhk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163lzgafxxh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lhauewot.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163mgqzhgcb.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nwhxtnnf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163bdfwpsjf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163vjjuacgt.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ilvyovzv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163aubyzjst.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163oktqldje.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qjsmdvyd.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163kaijcchk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163bccuuckn.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163nsvexddx.html

COMMIT;
来源：http://www.sxryk.cn/163garixhhh.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163slaupotj.html

ROLLBACK;
来源：http://www.sxryk.cn/163pxhfjytf.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163nffykmwm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163bqkdpedr.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ngzgarvy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163zmezlhow.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xvgzgjbc.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gkfdzohc.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vwyqghnh.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163toyarbjb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jslxhhnp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163lbrkyzhs.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ztjpjifc.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163bsfewsuk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163hrgtzjmt.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ylrmjinc.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163cnearliq.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rzcpnvuq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163gurmkitj.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mzrnqtzh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163fgnbejpk.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ojukhsxf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wqtxzjew.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163cnqlbpan.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163xyqbnsmx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jaidvgkr.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163gbgdzqua.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zogvjnpd.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163phlwdjta.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163mrbhvprt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ntgfujuz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ajrafsdg.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gzaqmdit.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163sothbfps.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163fereigbp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ykbmaipk.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163awplwfun.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163oydhbzzk.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163rzutklln.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163cnmppvgf.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ksagolvq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hdvigydf.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163wsvfowsq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ftzxzzlm.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163fjzuzmuf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ivkuhmsy.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163weurkbgs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gdprrozn.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163gaaselbd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163zbifuoqe.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163nokqxtry.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163nxxlnhxe.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163bbcbfdiw.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163rklfjhgl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xmkcerwi.html

================================================================================
来源：http://www.sxryk.cn/163laesnpjf.html

R. Bash 专题
来源：http://www.sxryk.cn/163uugcuufi.html

================================================================================
来源：http://www.sxryk.cn/163ookstgyg.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163wkzklqxs.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163grjmbfhq.html

set -euo pipefail
来源：http://www.xuanzx.com/163raeshvfo.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jalksdkl.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163bnvkbzel.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163pufsalmv.html

readonly PI=3.14
来源：http://www.xuanzx.com/163htsgcyxl.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mqhjltda.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163iqnfggpw.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ctghocwv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ecwhaoja.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163evuvwbkd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vcectjeg.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163tsgtymhy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163oqwjcqsz.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163hrxcyida.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163puntawwp.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163nljuckub.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xokahqpl.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ldzlgidw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hlfjsloc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163lxlbvgbw.html

case "$1" in
来源：http://www.sxryk.cn/163nvrrntpm.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163qrqdorkl.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163unoyizmh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hozmrhpp.html

esac
来源：http://www.xuanzx.com/163pqgkdccn.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163iavkixkk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bvdbizzh.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hkarlroy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163wjhkmftr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ixbiqkge.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163jzmtwnwd.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163okufwcme.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163hqvyyosx.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163frwwmndi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163yqqgetrz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163qkrbngaa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ymlxzxwf.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163kyklewyg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163padmylzr.html

[R19] 数组长度
来源：http://www.xuanzx.com/163oaezjrbl.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ddyexals.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163mhdbykxw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163svlhrxpq.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163liofqzcw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163kycklaig.html

[R22] 截取子串
来源：http://www.sxryk.cn/163xtadsmtf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163fgluugyr.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163hsxgkjjd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163gytbxscu.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163dajrgagd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163fwlftgqq.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163kvqzwnvp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163cfhcoafg.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hscznyqw.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163alyfinje.html

[R27] 算术展开
来源：http://www.xuanzx.com/163umieckpm.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ozamkwwz.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163unszwara.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lohyfyyh.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163iustuewl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vjgfzqow.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163kiiuujui.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163dahtnoza.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ibqdzwjc.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163otgbsunp.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163opldbeii.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163pvqgkjrm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163llnloltv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dwzdjzbm.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163hqzvupke.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ngbwshnw.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163dxvkanos.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163yijhygnf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dieqschu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163sibikliw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163juacaxsy.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ouhfksuv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163aunexgeg.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ahzykpas.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163vjoankkv.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bvwsovat.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163wkpfldhe.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qfiozlyt.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163eqhufgmk.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163gmpfegft.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ugcpivja.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163wdiduzso.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ntyrvkuj.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163otatbfee.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xudvqwmk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ylkihlji.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xdiqnimg.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163buvirvbd.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zybcjakg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163mklypzit.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163plahidmp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wumcedut.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wrslqydt.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163dtjzzoom.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163gfqpeoey.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163hfpjjqan.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163igvwqxfc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163mernmbum.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163qklnakhs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163iwogxvmc.html

[R52] 统计行数
来源：http://www.sxryk.cn/163umxtrbpt.html

wc -l a.txt
来源：http://www.xuanzx.com/163mdywbxdx.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163vtjbboop.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pucwsscg.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163naotfxjw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163sjnrrcmz.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163umayhtph.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163cutvrpsx.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163apknndni.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163vizyvkwo.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163bsndvalg.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163buczeykp.html

[R58] 下载文件
来源：http://www.xuanzx.com/163fmciphsw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163rcevbkql.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163xpngwpwy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163sxtqtwpr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163dkteveum.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163lfknzrbn.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163doqxkvhf.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163dinxbfqg.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163odpzppbv.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zgckfgxz.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163nqhdbzts.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dvaopnap.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ljgemfkf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163cjaguray.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163fxpjqgag.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163clgmksar.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ikzfjpmr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163auilxtyl.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163rcpbpdrt.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163lhaogsxq.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163kqbpwkgo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163aqnyhogp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rhcsgztp.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163xxkspbaj.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163mgjvnzrz.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jgzcliej.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163gotkzkut.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163tufifcjk.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163wfzjxskf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163lyfrdjwc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163aditebvk.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163lsxlcqcg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ktrmfsom.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qwbumcoo.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163hekbtoqg.html


<!-- 参考信息 -->