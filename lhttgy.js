外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163uljvpitp.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163bgsqxmli.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163eplkmkvs.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163wiovedpi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ckkpiuyv.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vwpohtob.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dxjvxuaf.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163tyuzwbnz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163itipmpte.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zjfclwmo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163czbduxdi.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163bzequcme.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163wkpfbajs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163bbwctyry.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163vzxuhalv.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ivjgnjqd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163avavdxrg.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163hkmxhqbl.html

[Q35] 内连接
来源：http://www.sxryk.cn/163scnrcwxv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zvinfljl.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163vgexrfbw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kuifddfj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ohoprrlf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163biqyuaax.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163fdjbnbky.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163xfjtphjy.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163jaurpjyc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163gplbpern.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163fhvzvpyk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jntymtum.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163eiuybnys.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163zcocbcof.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xbhofxdb.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qpilqqyk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ncpjgcxm.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163birjsusx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163twdfsjgf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hesahnaa.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163eycmtjrd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163mtlgolyo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163wlbruqjv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163sdsihmpc.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163fjjirmmb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ggobhrgz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163unairgbq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dndhbzcr.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163gedmxpei.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ekcihzqu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ajypatae.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163wzgszwjo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ucmiflqd.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163antaxhwp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163upmdijjp.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163stezybxa.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163oqrwctop.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163peyknsjf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163vevxsaqj.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163uiwquerz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hyqjywfx.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ahhveafh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gcuszkkf.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ngglbtxv.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zmuvzczv.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vznraryq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163gnurngir.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163owkdznxx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163pmgtwlgj.html

[Q57] 行号
来源：http://www.sxryk.cn/163qvqvwgip.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163djpopeth.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163dtwxtkea.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vjgjwoca.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163mfwxcotp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163jogprkuo.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163mwtjzsot.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163knfeubgp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xomulbzt.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163lzyrtepq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163bnpznoto.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163juceljtr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ljelwiky.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ccfmvzqj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163etqrleta.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163rjnudlrj.html

COMMIT;
来源：http://www.sxryk.cn/163kvumhqzx.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163qfbbxdqi.html

ROLLBACK;
来源：http://www.aibaodan.cn/163wrmwovbo.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ppugckql.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bhxepgtg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163yskttkqg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163sgxwpfry.html

[Q68] 保存点
来源：http://www.xuanzx.com/163hzbhfbmg.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163bxcuwfbp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rgvdgict.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163exntqsaw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163mvblfqdw.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bbrqfzga.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fjxtoiin.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rjegspvh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163cvywnnlp.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ljtdefem.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163trqttgob.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163llmidlit.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ukykjexq.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ydavindq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163xcaxscvc.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163kqtdrfbh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163jfpdaruh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163eynbngww.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163utedyqns.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163gyeuiavr.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163efjzvalb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163afqcmpwf.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163aulvzdcy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163qjlybtat.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163hmgcoyqz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163lsitmhwf.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tfmxabxy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163fpyzdiwh.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jhrypnzc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dvrtnwvf.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ahbclbdg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163mhdahoat.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163myimnhtw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cajhjqxb.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163vrjqgpod.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163fbxrcnpp.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qqerznfu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163sysqznvy.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163sacppjrf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ykdmmlkz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163dmkukuwd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163tgalamyp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163vwptuqsk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163gjcnegkl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163yftfdbmy.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ysnbynxj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163xzuzmbmz.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xfxcrkav.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ihkiabhd.html

================================================================================
来源：http://www.aibaodan.cn/163gvnvsclv.html

R. Bash 专题
来源：http://www.sxryk.cn/163oxarmwgc.html

================================================================================
来源：http://www.sxryk.cn/163rcxonuvb.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163cidtfqhp.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163lhuzfcpb.html

set -euo pipefail
来源：http://www.sxryk.cn/163qnniyiro.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163okrgzfof.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rloxkimk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163yhulvrpt.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163suldycen.html

[R04] 位置参数
来源：http://www.xuanzx.com/163lbqxxect.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163exuxnplr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163gksampal.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ksdkmsjd.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hncttrnj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163loltkevb.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163urubfgbl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163bvfmbcgl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lvqghrpi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163lkexojvt.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163kjsqjigz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mqwcbimw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wannywig.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163rshnfnfw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163bldmggch.html

case "$1" in
来源：http://www.aibaodan.cn/163mojvdmlw.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163sgvcaktg.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mhfxodlb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163dokjknym.html

esac
来源：http://www.sxryk.cn/163sifbdyol.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163bzafbeyp.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163gtwtgtbq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163flhtfcby.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163xdinqhsm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163fsfvhomn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163npyximpg.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163qrsyayec.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163wvcwgzmp.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163kznelgow.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163icbfuute.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163epcxqtaw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hybmyger.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163eaeijnzq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163emkfsonr.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163dvpvvsxc.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163mmuogedk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163hmfniqaf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ayipzxiz.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163iffihehr.html

echo "${#s}"
来源：http://www.xuanzx.com/163iaynqfuw.html

[R22] 截取子串
来源：http://www.sxryk.cn/163gfifxfyb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163twktmbsn.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163hvswhsfq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163josvfjhw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163wjudpqhp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163fbidkevi.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163vhpzklmp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163rqyndoxw.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163rspbuikx.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xxgsemmx.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jlqypcxy.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163qiqdorvz.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163oruhpxki.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ferpvppx.html

[R29] 定义函数
来源：http://www.xuanzx.com/163euwteqvh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ffvlgqal.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163uytwierp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163tsrabsyj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163qznlqucj.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163eihkwcsl.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163zozfkmvp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163hnrijoui.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163umagstjs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163puduafpz.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bosqxlye.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ynbpydtx.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163dqodydzg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163rmajrjmp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163knflzfma.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lxqgpkaf.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rtemdbsc.html

files=$(ls -1)
来源：http://www.sxryk.cn/163azgqctbk.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163aqoigkjo.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163aaeacmhn.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jrkjiugv.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163mamzxilq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vlkfpvis.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163gaoviczf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163uzhdpsbn.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163vzpocowy.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cnkauafz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163qqpnzmlf.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vztvhpgp.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ouwssweo.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163xdkerkft.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163dhkrnaan.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163qjtlqjlq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163gebqqccr.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163nznngwxq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163tqbfcxfh.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ghuhypsp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163oalaidkm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163igeixqng.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163dxuakvrw.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qucnxenr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163byxawkqx.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xkagoswg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163qiwrtkkn.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163wgornuqc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163kmxtphxs.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163rfwywevv.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fbuxstyn.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qxxvnnop.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163abtkcegc.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ruhydjsy.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bumetmzi.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163maernrhi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163pkqgreyp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163xewukekg.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tybpltgy.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qrzgkopi.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163gyzglgau.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163engizfid.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163namqmyqr.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163sebjupoy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163dmmhyiyg.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163uohztnso.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163nuydoawf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163mrwrvnbt.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163okrycgqu.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163myatfamn.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vszwagjq.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163gqdqwozc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163kxvfukwu.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ttzwmdlh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163rhsovzqd.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163qcxayccy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163dknluusf.html

[R66] 定时任务
来源：http://www.xuanzx.com/163cjstnkik.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ptuecysd.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lukqatjr.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163otlfmiha.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ueleojlm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ltceaopj.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ghdjzqrr.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163wokszdde.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163cnonrqdq.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ymnvwwqy.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163mwrjqlar.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163malvqnyz.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163jypzwqgz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163wgjbrpqk.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zyksykes.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163knwtgrfq.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jrsckjzl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163gtmgcfkd.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163mgxlcvsl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163njrvwuqy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xvewicjf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163omvetovu.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163fdaetlcm.html


<!-- 参考信息 -->