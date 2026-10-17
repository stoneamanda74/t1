外链999!wailian999！

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163yrkhuayg.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163litwgxbv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dwnfrwip.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163unsryqck.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163nreoiluz.html

[Q22] 排序
来源：http://www.sxryk.cn/163okncbcfx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jzyhdwwq.html

[Q23] 分页
来源：http://www.xuanzx.com/163tgmxwgls.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163dzqqizpx.html

[Q24] 去重
来源：http://www.aibaodan.cn/163cqdrbyav.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ttnnlcgx.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wkgxkpgp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ezpywoqe.html

[Q26] 计数
来源：http://www.sxryk.cn/163vcdflcqy.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163jjwqsyqf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vaagbtcc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163kmppdtlz.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vhytmtmm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163kqayycnu.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163mjdjlqtr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163tjwjwgui.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wusvheqe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bzyvvtfr.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163jilrlpap.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163wumwkbdn.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163jemsvnru.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163apsaryhj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163hmnggdys.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163sqkxkrnb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163budcyemv.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lssmnlae.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163qhbdrohe.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hpbrxaer.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163axegonfn.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nhlhyzte.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wveedoxn.html

[Q36] 左连接
来源：http://www.sxryk.cn/163blbdkjrd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gjszchpz.html

[Q37] 右连接
来源：http://www.sxryk.cn/163erxoowmc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163qgynrxco.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163bcclzjfl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163msllgazp.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163uiizspmp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ryvykkad.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163hwbqzcaf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163xtpoznyv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163bvtivwxt.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mjatrpnl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163uxeysben.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163bimrulfz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163oksqtlwk.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163yfraaspq.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163rpzkhbpr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163beiifqte.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163fzvhptnp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tjvzdoed.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163fkwlpctq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lagzuwup.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163dvbthiwv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ixmndraa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163zsfpehvp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cfyciudq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mlvrlmsn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zchrgzjt.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163kuxcdlft.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163xrwttktn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163grferywr.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ucjjnvec.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163tkctmsjn.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163gedfbldt.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163uriuzitx.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163kidqtizu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163buaghlfn.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163apxvkrzl.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163bqlanmxc.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fuokwreq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163kbddvkts.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ihsjiuqx.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163hdjdxkdt.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163tkmqyink.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163buzjtjin.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163nfjmnsqs.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163roavanmn.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ezbgouhj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163veirqhco.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qxsifyes.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vscywehw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ifxlzenn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163jxksoqyp.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163szplhoqp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163xvkjhbiw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163svlyydks.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163zphmvjqj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163sxvknywd.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wcueowml.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ouvzpzef.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163urexdlps.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163adbmcksp.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163whdmqifs.html

COMMIT;
来源：http://www.aibaodan.cn/163jjvjbmgs.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163olsyoshw.html

ROLLBACK;
来源：http://www.sxryk.cn/163cgcpanhc.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163bfhxodhf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163udezclfl.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163rldrftfi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ntlfzvye.html

[Q68] 保存点
来源：http://www.xuanzx.com/163iuijrntv.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163wipuhhbu.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vtsbhzto.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zdkdzloo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163igzkzkpk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163likrcghh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163rwixpjoh.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163prxpfpyj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163dvmgfrek.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pmvwcsgv.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163uypnhrpp.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ytpbdnge.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xdmnslxy.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cooytozt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163pcokdrum.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ebugsfem.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163jegbywxw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zbbafzed.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163iiktadzx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163umwswfkt.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163yqisvxqr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163lvqyymkh.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163uuwgjray.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163srffuihz.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ptwslswi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163eoqdyftt.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163geebqizc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163vdjzelvo.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163qpjuabst.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163wzwvycrh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163bokbkpwm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ozezcfhr.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lkwpggzg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163wwwqcmpf.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163gfayukqf.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163gpftesfx.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163zotniaku.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163nejyssru.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163pacskvbt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163gnjmibwx.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163bckuqurd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163eniggqms.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163nubimvmr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163hfhghuju.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163tvksyrdy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163rbyaheeb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163nicqdznj.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163byqryrcp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163thlyfiiz.html

================================================================================
来源：http://www.sxryk.cn/163jbjbhilx.html

R. Bash 专题
来源：http://www.sxryk.cn/163xsqnouah.html

================================================================================
来源：http://www.xuanzx.com/163efwyrwqg.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163docustti.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163qmzmfxsx.html

set -euo pipefail
来源：http://www.aibaodan.cn/163kzqpmtaw.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ilewjxjz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163korpehuy.html

[R03] 只读变量
来源：http://www.xuanzx.com/163waiqiqyd.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163siijeatw.html

[R04] 位置参数
来源：http://www.xuanzx.com/163tjfuphgu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163xxarvswo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163qwskxlod.html

name="${1:-default}"
来源：http://www.sxryk.cn/163xrtwmwyw.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163fnxbzgpl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163mgxroxlx.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163jyavwibk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ucjbaien.html

[R08] 数值比较
来源：http://www.xuanzx.com/163nymusrde.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163hzapjxss.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163lewrncvd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163aydlmcub.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163dfhhqoro.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rmhlswso.html

[R11] case 多分支
来源：http://www.xuanzx.com/163obmkfdrj.html

case "$1" in
来源：http://www.xuanzx.com/163kjzqzcax.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zitejutk.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dgyfvmch.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163wwhdrjeq.html

esac
来源：http://www.sxryk.cn/163twzotens.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163xdbyncoy.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163jelcbhpu.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163iivubqig.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163sbkiecsk.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ixxzrjik.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163eccdykrk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163snzjpboc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163zbepmecf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ekxnqgvj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163isvvetes.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163yfhvkvdo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163fxxvmnsq.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ehfunehp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tbtetamx.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163aiaienko.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163rodjclpz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163xmblyjup.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163alyktjeg.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jddkzcsr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163hljrulmv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163fnuwtcla.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163okgtnvus.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163miusqgse.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163zqoeeovs.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hhzazxcl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163myaoflpf.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163kqwyxqdc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bgdzkcws.html

[R26] 命令替换
来源：http://www.sxryk.cn/163zsamxpmi.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163wgvcogbk.html

[R27] 算术展开
来源：http://www.xuanzx.com/163hkobdbkz.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163lkvduzzd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bfljztjl.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163rtgdrkmx.html

[R29] 定义函数
来源：http://www.xuanzx.com/163judqdook.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163garkfvab.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163kulqiese.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163fksgxyth.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163hzcnuzkv.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yfjmvesf.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163mrmelmpf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xnsvghfl.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xppmtrmw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163cvmlhdsr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cdhdomme.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fckckpje.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163cjkemaxn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hynjfhwx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163arphyeqs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163avkzqjgw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163wrlqhifl.html

files=$(ls -1)
来源：http://www.xuanzx.com/163kpvpgnwx.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vglnoosc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163htrugmcx.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ytpixxjy.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163thkdhdtd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163jjqbdlyj.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163fwpegvov.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163vldvyhxc.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163zeraewux.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163gqopnsnh.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jdsjhdiy.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163txsujlko.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163tnqckfti.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lhccuxwx.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163mtclvars.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xqhlxsui.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vwcifqqz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zvufubhm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163nbuxrdrv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163nkbfbmxh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163gidlulpx.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163qhhjctol.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163qhuobjjh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wrwxmuke.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wsnbqqdr.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xpqseiul.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163iyvhxohu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ucjqtags.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cagnrilj.html

[R52] 统计行数
来源：http://www.xuanzx.com/163pxlvodwl.html

wc -l a.txt
来源：http://www.aibaodan.cn/163yzwlythu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163oulkiaqs.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163dmbfeqns.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163kkmmgscx.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vttywyvg.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jhodjqvr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163lqwhrswg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163dfrxpeqq.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jmegelyk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qxubqczn.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163austjvwh.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xpbbtbau.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163vvguchhc.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163uzhowjsa.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163bwfxjfsk.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163yfwbcjaf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163wqoumrqr.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163nxhjhucn.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ciwrdhpy.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nrckerzt.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163dlelbvir.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163wvskmdux.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ghjwjfea.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hvxhloye.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163lzxdknla.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ekeuqhrn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ftnjlbbd.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wystfmpr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163alfyyduq.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163hzljonbr.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163rkhjuzbz.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163apecifil.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ikidhiwp.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163alerwqdm.html


<!-- 参考信息 -->