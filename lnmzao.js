外链999!wailian999！

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163zbygxmks.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163kokzjvzf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163khmharvz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163beuruyux.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163czsyludr.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zftqzmub.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163jqkulsyb.html

[Q23] 分页
来源：http://www.sxryk.cn/163qjqskenh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163yjbnmrmv.html

[Q24] 去重
来源：http://www.sxryk.cn/163nnskqnyt.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163usgguwrs.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163wdhshlrl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163adxcnohn.html

[Q26] 计数
来源：http://www.sxryk.cn/163wzgmfihn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163jzjufvcm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163szakxfep.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163arigthul.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163azamweet.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163prunavgi.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ttdnskea.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163nbeyfhtv.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163eedilmcb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zkccyuhw.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163iagwgaqp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163zenfwltb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ivjwipjt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163idthrkwm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163sgblcazo.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ptypoiwo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163zairhqmx.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163qcsiqjnz.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ixikhsqe.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163bkmxqlsd.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163fmasyikt.html

[Q35] 内连接
来源：http://www.xuanzx.com/163hfswcsyp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xjbircbv.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163chxzfwty.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hdfcupwg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163llgaxwqg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163waubqvfj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ajdjshla.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163tdtjscpd.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163czzrwjtx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163drwvchfi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163nrjanagk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163prdebetq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163hdadvbws.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163qrodynfg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163azcvhjoy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ubppmdbt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163seneneov.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wiymzlga.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ativdbnd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jxnbjwfm.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wxqkdlss.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163mmfxivzc.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163epqiwper.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163eoywpwnn.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163fuwqbgnb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ixumvnhh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163jjziohnb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163eqltdhtv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163btzxatgs.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163wzyodmet.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163vxpfiqyl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163iyserklh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163sznihwmg.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163kdycbtuf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163jfrdyzpz.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163nztvwwmw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163uwrzqlrr.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xrucfwpd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163jmctyiei.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163wkrmrxqr.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163jgugaqkh.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163rgrsuhsq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bbjstyze.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163vmkefybw.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qnooxufz.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163dxtqkgkt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163isulqpxk.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163siupzufu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163tgazhsbu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163oidmviam.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qwibkgwn.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163cgylwgce.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tvwkodik.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163tfvubaih.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163mbqfkydb.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163fnzcecrz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jtxjuzxv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163aerknycx.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vdjlavgz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163fzdetrjm.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163quxrmcqe.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jmwfwlqp.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163uceexkhf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mbdfweci.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163fkbfeqlk.html

COMMIT;
来源：http://www.aibaodan.cn/163dvfylpjy.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163qbzplozr.html

ROLLBACK;
来源：http://www.aibaodan.cn/163emfunaxp.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ztaddfab.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163gzaykhfn.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163icmdvuyw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163fykkcgui.html

[Q68] 保存点
来源：http://www.sxryk.cn/163skpogimh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163jqfjlfwj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163shthskxm.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163eugqarjq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163aurppmpq.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ueujoyek.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163uldkquxh.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163lfubpvhp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163czseqodl.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163njamulen.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163unihtlxf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qhpuyejt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ohromzdp.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163wssclmjd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ruqjusgx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163zygpkicm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163pzhapnnb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163vwiwnuev.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163kikalgoc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gpmeqmgz.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163fxkfgkif.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163tscfndmt.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xcyecoqj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163hfguwofk.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ajjpgeyi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163vezjsnfc.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163dpabegzh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163jjyhffsn.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163clbdolgd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163lgsnwymh.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fnbtnrrn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163koclvcqo.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lokkredo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163nieuxluc.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163dosnoyoa.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163qtxebtmw.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163xleouoom.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163tfhcsoso.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163locfqick.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163atijpcmx.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163rixqkuet.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163uiavsupy.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163szblodfa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163jouwsnox.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163qivrqvlx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xtfszxcz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163mbjncwya.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wdxrqylh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163fvbikrwf.html

================================================================================
来源：http://www.aibaodan.cn/163vpxudqvd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163pxocmynq.html

================================================================================
来源：http://www.aibaodan.cn/163eiweckzv.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rlfaefwz.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163mchhmeqp.html

set -euo pipefail
来源：http://www.sxryk.cn/163miqjxzxf.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163anxwshus.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163nqdejxic.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163qmiabvcf.html

readonly PI=3.14
来源：http://www.xuanzx.com/163tptllvqe.html

[R04] 位置参数
来源：http://www.xuanzx.com/163cqmltcli.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vsuhduen.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163iwdjnibo.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rzcqbxmy.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163tsgxsazq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163nsdgwbow.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163zckmufgx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jhyjlyfn.html

[R08] 数值比较
来源：http://www.sxryk.cn/163scfllyce.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ivlibjib.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163gcxhwucm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qzinjrju.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ipjafson.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163miwanyno.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163jhcdqtay.html

case "$1" in
来源：http://www.xuanzx.com/163pxvcsmcz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163vqbifncv.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163bppvqktc.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mxuarqlu.html

esac
来源：http://www.xuanzx.com/163plyngrxq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rtjjbdkt.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163onfwguai.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163llcoruwe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ozoxdbfg.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163oxjtdxpq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163uvmfpwlb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163sqdvpnoh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rblegkvp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163dclzyjqi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163izavwiov.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163airntizp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fqwhzbeb.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ghvhepbo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mnleszps.html

[R19] 数组长度
来源：http://www.sxryk.cn/163xxfbnojr.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163adlkyxob.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lokrqzja.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vkesncdk.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163kxljkzfa.html

echo "${#s}"
来源：http://www.aibaodan.cn/163endhxwwj.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163iedabwae.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lnaoxewu.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163oqgflgmp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163erhkncsh.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ritesjal.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163xmxdnfqu.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163hforfauv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163wyzadkkv.html

[R26] 命令替换
来源：http://www.sxryk.cn/163kmpkqavc.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163fxdfiehy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163wkumonlq.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163cgwasgqb.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163higjbdah.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mbtyjlag.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xizxtqzx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163smipmtnb.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163zjvqjhln.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163aqovlesf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dqlaaols.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163aulatwon.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xfbhweuf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163oefpifhb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163xuuiecao.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ytcthfwd.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163reoxgncm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fhvziyzz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xibvvaag.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163mtxucnkh.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163skwxgwcf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163yunyhitl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vffftzqn.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ajolfigs.html

[R38] 管道串联
来源：http://www.xuanzx.com/163aedphafd.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163booycwbn.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163angrrnzp.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163anihbohh.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163kpdirlti.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163lmarrpwi.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163mlvpjgta.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163nfanijly.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163qvybxomk.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163calmagvq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cgpenkmy.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hfgksrbx.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163yflnmgex.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ohycagdb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163zxxjcwge.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163gjzybpuw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ztnnlwkl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163nmnryctv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qctpqyru.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ackgysfj.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ytiqznrg.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163qoikaouh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nskbhqie.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163iyutajha.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163dlmwggtq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163isndkrbx.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163epiahizz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163jacmjhuo.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cwspzhlb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163mdofchgu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ejviarel.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163exovfxeo.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163uccdcthd.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rqhildki.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163upxvvnyo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ipeyygpq.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kvovjsby.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163afgnezac.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163brjwmgdl.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163gerijmln.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163giblbexz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163oohodvpe.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163fpxkkuvo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163gxpsuiuv.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163oamullox.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163yxthuvgs.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163bynexnwt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163zhqevzzw.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163waleqkiu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163jzayvgkj.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163levvttfp.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163wqugkbvv.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163zsjognar.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163gzdwuszh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163sttznobq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163lxodqgzx.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163hcazitfm.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rsfgephe.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163fxwjjdeo.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wkddxdfq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163nswklniq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163mzijncrv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163smosotwo.html


<!-- 参考信息 -->