外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163tiiajhom.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163woppmgam.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163rdmvwjun.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163wjjygcai.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xoxxowlz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163gdeankjh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yyvpcyox.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163iwkiypyr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163vjnvfknp.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163xogbklya.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fmudbtci.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163qfytplts.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163skpbklkh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163limjorxl.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rtpqgwvv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163fqgmdlaf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163vkoliozj.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163rqcvfold.html

[Q35] 内连接
来源：http://www.xuanzx.com/163whvtzpmo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ivipdwws.html

[Q36] 左连接
来源：http://www.xuanzx.com/163bztnoghx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ouhmxwes.html

[Q37] 右连接
来源：http://www.xuanzx.com/163glftpkms.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163adpuiojb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163arizcrxr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zbemiirc.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mxfdwcer.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wdyggcti.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ysxadyiu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163khpnspje.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qohnyovt.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163mlgrvoft.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163nutapxqs.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163odcqxudj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163edeyoqir.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163wmskdmfm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vqyvxovi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ieojjkwh.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163jmmnlhuz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163qkrqsort.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ywoztwli.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163qvadzksb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ihzddtzi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ltqiicfb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163nxkwrdzr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qqzgbklf.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163hylfpzar.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zhkabzsa.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vwvnzowe.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163fslkvyal.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163hctvoepk.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163soiqkver.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ypzalmgk.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ielrhxfc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rykuhenz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wvcdmuyk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163acgvtfnb.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163cwjfyopc.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163obqyyicv.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163zjgjuhzn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ulqvmbew.html

[Q54] 清空表
来源：http://www.sxryk.cn/163yiepgvrp.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163vhpvvxrn.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163cuqcpnhg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163lknxhgki.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vobrvldq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163pgdnpjmi.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mqkcuozi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163zrkglpzc.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163vzturdqp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163cbnaqpwo.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163uvcchiwl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163nzmyvump.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163uwqfivhd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163hgolqjnv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hzgllzad.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nlfthzpw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163wxqsssjw.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163wnznbmsc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163teogxbft.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163khpvoxbs.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163pbayulfe.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163entptunh.html

COMMIT;
来源：http://www.aibaodan.cn/163mntbmydj.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163qjjvcemx.html

ROLLBACK;
来源：http://www.aibaodan.cn/163qofkbdhl.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163jejooxfh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163cxogaoai.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163dvqfwmgl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zybtaeha.html

[Q68] 保存点
来源：http://www.xuanzx.com/163jcwleaxo.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163cmqhbreu.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xktvmsqv.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qxnrbayc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163wmdppehf.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163urlftpnb.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163aipttybw.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163alamxyhf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xuqcimqs.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163dysprnzo.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hmpwpndl.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163jjeuvqbi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163cueciraf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163qhermefu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163zazjolrk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163wyfhdcmm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ubyoucyf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163tuhcjfca.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163fmkiqseg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163lkrprygj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163slljengh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163sdralejf.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163kxrqctgc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163gnfxpdsn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ztdksefy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ckxoodgp.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163amrtogwi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163woejpgvx.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163fwgldljq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163tauhqvhw.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163xcubryqa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163rtutnwax.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163diyekjsg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163esojorhq.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163jupvdprj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163lcoppbbq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163jgeteeju.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163evtkegew.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bphwigtp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163txijrhyj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ympclyyn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163zxhwysik.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163hqegzdgj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163lgaozrzs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163bsendjas.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163tfgvbeqm.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163joohofgj.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163wkvosidc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163omzzstvg.html

================================================================================
来源：http://www.aibaodan.cn/163fwzxayxm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ggxwancv.html

================================================================================
来源：http://www.aibaodan.cn/163gygqigkq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163uvaiwvxn.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hveyvfux.html

set -euo pipefail
来源：http://www.sxryk.cn/163simmuxsq.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163kojhvjvw.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163gvjgfnlq.html

[R03] 只读变量
来源：http://www.xuanzx.com/163xpwygqog.html

readonly PI=3.14
来源：http://www.xuanzx.com/163oetyrgqy.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163becnpibd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163qtiqpaxd.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163sbgebuvr.html

name="${1:-default}"
来源：http://www.sxryk.cn/163hxltqpgj.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163mipgtobt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xsicwkjj.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163fxroaync.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163pomvmopc.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fxjpgruz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163pstfbckx.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163zadbtkoh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xesriafn.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ejwiitnm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163popfuaxz.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163wqrdwrbt.html

case "$1" in
来源：http://www.xuanzx.com/163rngnrexk.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dzklklld.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163gstdlmxd.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kcdeycit.html

esac
来源：http://www.aibaodan.cn/163infsdpah.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163awdggceb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163srjvjxrq.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163qsbdzpuv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163kntzstgt.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163adftdodb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163wzjogowg.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rophlsqa.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163yleruays.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163tzatwbsb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qspknuiy.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ewymmeih.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163uuwdwyvg.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163irjgrfro.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163mcwqfdpx.html

[R19] 数组长度
来源：http://www.sxryk.cn/163xqwzlufa.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163xlkufdxn.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163dkgrylba.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163iexllnuv.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163nbfcxyyz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ipdwsgug.html

[R22] 截取子串
来源：http://www.xuanzx.com/163aydaddup.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163wlyniwjd.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163qlavlitx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163bmacgopj.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qijabjmx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163etwadgrw.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ieehdsxz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163mkkhezxl.html

[R26] 命令替换
来源：http://www.sxryk.cn/163metxfsef.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163rtalzegw.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ftfocidz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163xmlfzxbr.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163simiffaz.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163rukwcvxl.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163teqwxelu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163evwjtwwm.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163mmoqfcbr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163cpzgzjvy.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fgcmpycg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ishhyviq.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163eppletpn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163sqvnmvxk.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163rgxzgztj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163pmrvcgtr.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bjwxhjrd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ddgreybx.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163nheuperh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163fffpdkuw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jwcbwlrx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163mmkjisxu.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ffmglcko.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qnywpork.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ofcwxrcc.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163sgewjfol.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163iidjkrsu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pnfqvqgl.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163huqtagbo.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163hylhjflf.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163tuxuabul.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163nwlqantz.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163yxqvzwcl.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ekhnslyk.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ilcymkgi.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163zbpfqnrk.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163zmuosaiq.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163txdqyxmw.html

[R45] 批量删除
来源：http://www.sxryk.cn/163wftqxsib.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163sqjpfcom.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ekihbgnr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163qodkzwrp.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163innyapnj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163xfjanoec.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ynrzvfms.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163iixlqobs.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163zmhpjpbj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kavhteqa.html

[R50] awk 求和
来源：http://www.xuanzx.com/163bmybywtp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163mbxtjtye.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163wxzeeyhu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163aoabfosm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163rnjppiqr.html

wc -l a.txt
来源：http://www.xuanzx.com/163uwalmeos.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lkkpaeol.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163utzghaua.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163qcsnegyk.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rnrannnx.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ndggvtiu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163osqbuvdi.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163uahazndw.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163yolpxvwa.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163mfeoxrrh.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xnnzemlv.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163evglkmuc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163umrrwhww.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163oyxtyacu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163tmhndrhb.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163xugmjuyr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163fwglnmog.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163txsdfedy.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163wgonlova.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163eyztyace.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163esqflsti.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163aotwakts.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dullwuje.html

[R64] 结束进程
来源：http://www.xuanzx.com/163drgkzupt.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pbngurif.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163nywkpotd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163nkrlkxah.html

[R66] 定时任务
来源：http://www.sxryk.cn/163atnnepxd.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163dxbefief.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ngycvybi.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163icgolamp.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163rvnmqaqi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163lyblyyfc.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163lqqwjpfr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163kbhvpkxq.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163notqiasj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163urdjnmkr.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163wifkggbc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vdjurqgx.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gorejtrm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kqcyfwqj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ugyiuxtw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163azxedzcf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hbkfxwsy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ytbwiipx.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163emeathil.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pmsihqqc.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163eqtfgjqh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vleujdcm.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pnwxnysf.html


<!-- 参考信息 -->