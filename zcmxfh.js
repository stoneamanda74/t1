外链999!wailian999！

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163qomlnoxe.html

[Q24] 去重
来源：http://www.xuanzx.com/163zbvzhaco.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163pghjmduz.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163rchffieb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163oewrtefe.html

[Q26] 计数
来源：http://www.sxryk.cn/163mmqpqdud.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163jzylclhd.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163odljhzwv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163aijynpie.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ssgrzinz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163retsvqjr.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163igigburi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163rtdxrlku.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163eclqjvzb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wwtcvzff.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163yejlwvxa.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hvluetvn.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163cjdlzyrt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cpvtigao.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vnxfldih.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ytqlfvnt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163jlzsociw.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jwvffwjs.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ehxbhcgo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163sutovvrl.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163nqodmxzt.html

[Q35] 内连接
来源：http://www.xuanzx.com/163rzemwuhh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rxdsqeum.html

[Q36] 左连接
来源：http://www.sxryk.cn/163eqndefqu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xmsodzvx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163qztdchzc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163uafjomme.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163gizxgago.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163dtdezudx.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163wihnwxhg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163htpbjyqv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163olhxsrfa.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163dfkrxdcw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163yrhnawgs.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163potjknjw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ijmnsfpp.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163kqegdsla.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xrjabdvl.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163nduiyijm.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163lfkqtyxo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163occrkgip.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163hehufoam.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163tsveumdl.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163hltorfsb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ywoqtnkn.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163obvdtdny.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163abmqbvfp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zmtkwxad.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hysjbzlf.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163gxeyqxhe.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163vyoetnci.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163osatwblz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qpdfxyez.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163lylsaxba.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bwqqvtyl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163hgmjjfsn.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163fuyejjik.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163vdgbhigy.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163lfvvlbgc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163avsdsqof.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163qidvdhrv.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163fiommqee.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163tmptwnwf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163uwhpvtnp.html

[Q54] 清空表
来源：http://www.xuanzx.com/163thshbabp.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ieajbeju.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hmaajbjo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163txpbfejk.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fyqvukhu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163uauxhndt.html

[Q57] 行号
来源：http://www.sxryk.cn/163sbzbecah.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163vatnanfb.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ucugsxox.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163dszrzhjd.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163tnqamlhq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ftywgubp.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ieppcfqt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163cpzddgxa.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163wxqjsiol.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163apxkrpam.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163yumykxxs.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163qlucprdg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gqjsymaq.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163tuadktyb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163aeahmcyb.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ozcxlgkb.html

COMMIT;
来源：http://www.xuanzx.com/163itpoezej.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163uordmdry.html

ROLLBACK;
来源：http://www.aibaodan.cn/163crkuhdlg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163nqeaxfyw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163jrgyvzhx.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163azfotlue.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163inujgicv.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163qweouxaf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163goxghkoc.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xkjgsbuk.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mjdjhzxo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163yterktut.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163wzttbadv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ryyfcsmv.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163yedigjqx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163jrsjzdgf.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163icccyyih.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163oyzlujjm.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zwxgnxei.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163lvhrzssf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163mqzjbfmq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163xrwfjhhq.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163bgbyrudi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163whnoxyne.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163evvidmgm.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163mhfvhfok.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163liccxbmk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163nedagoiv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163xeqeqejo.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163vippxnlf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163dmmlmnhj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163jfbnalni.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ggvrhoqm.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163irbmklis.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163kqlcbswf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163jzjavscf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wvjslavu.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163qbkhnhrm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ouqjrkgc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163rkejwhny.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163izisjqmw.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163hgajqibc.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hvonaqjn.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ljeumjhc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163qhmvnuiz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163aohdvcna.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163kqvxbspp.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ophngspn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163fihewrec.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163lkxtctye.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163uubpfoci.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163zolbtlul.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lrlynjlf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163qnfcmkng.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wwuhgpzr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vszwkbuq.html

================================================================================
来源：http://www.sxryk.cn/163spnzfpef.html

R. Bash 专题
来源：http://www.sxryk.cn/163eyggbthc.html

================================================================================
来源：http://www.xuanzx.com/163dpxmqhdm.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163twtumudu.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zlgdbwyk.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ijuujbmf.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ezteysdf.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vogtzblx.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qojgqtjm.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xlsmotla.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qdfpnwyi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163bxexdend.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163sjqmbpyy.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zunomihv.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163swkynukt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163amjbvxrd.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163bivsdiis.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163kylioczo.html

[R08] 数值比较
来源：http://www.sxryk.cn/163bnzvrfzg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ohcrzwfi.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zhlnvdaw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mqjnjdvr.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163kqevsqxq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163zyuujatj.html

[R11] case 多分支
来源：http://www.xuanzx.com/163evqzyacw.html

case "$1" in
来源：http://www.sxryk.cn/163oapbfirp.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bivrceoq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163cnzzfxzj.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ltypvmbv.html

esac
来源：http://www.aibaodan.cn/163mixsmpsn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163oskoxjej.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163kmmoaiit.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163gewcbswg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163rdxfwnig.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163dvxgyepl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163focalmmd.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163loglvzxx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ylwstjuu.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kwukxvqo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hbcczzef.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bzvicmxg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163bbzmxupy.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163sgtfybow.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163fctdlmzb.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163zehpxmvt.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163yrzjmmwm.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wiqrltpj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163kyvpsvvi.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163isqisbxy.html

echo "${#s}"
来源：http://www.xuanzx.com/163zlcxqzdc.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pscwdxhv.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jwjuebfb.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163prgsetwp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rpccbzdg.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163aqgmxnsy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163utiuhxbn.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163difvlcuo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163kuyizyre.html

[R26] 命令替换
来源：http://www.xuanzx.com/163pmibochj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163czipwhdr.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ymutlzjq.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dnzhuwfr.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163qbypeuys.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163pbahmxjo.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ycgrrriu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vthndwwl.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qjfqauyu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163qthcomoo.html

[R31] 局部变量
来源：http://www.xuanzx.com/163yuupghil.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163fftzdiqy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ctjftkbd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163oqgsqbez.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ahawlros.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ximbtvcl.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163cxvpcbve.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wcuwcsje.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163cdewqhrp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163yboatnho.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wcrsegsq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163kxyctqji.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163xfezmrvt.html

files=$(ls -1)
来源：http://www.xuanzx.com/163khuwjeqa.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ukkxbnlf.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163rxconfcb.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ejqyuavk.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163dsbnxjqz.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hnbbwvvt.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163rtxrwghf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163cmrswhwm.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163plefpqmz.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ysuelbcg.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163xvbmncaj.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163xbuhdqso.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163uptqxamj.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163cbaoqden.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163bptwkujs.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163axwbclsy.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163onstzevt.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163wzwipefm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163hwojxzox.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163stqetoyr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ppffzokh.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hpyxqaob.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163efwfndlh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163gyvbssnc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163wxlsfufe.html

[R50] awk 求和
来源：http://www.xuanzx.com/163exuxcawq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163rroiikwv.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163iizubdxi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163pmmrfcfz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163qmehgwiq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ryylmdgk.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163odwmjfal.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163crprcmdm.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163hipzmdxd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ezpgtrvp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ojyvmopc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163smjyfnsc.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163nhemjskh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163acwlwkmt.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163cgaeydtw.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163esufwwpw.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ihmrqopl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163oskpwygf.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163dyxmjhxj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163znobludb.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163qhuwolwn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163zrbdjhrp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ueybgdak.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163dwrnzokp.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163kttldbgr.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ivvhzpxt.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163onbplzyu.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ivsrrivr.html

[R64] 结束进程
来源：http://www.sxryk.cn/163umhoihpt.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163nxuadmrc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kkbhmrvf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rmomecpx.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163youmnxxz.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163wctbanjq.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163agrfwpii.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nvehzlaz.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163wpzuwdjr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163skbbgpol.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163yqconfvt.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163krtbmswv.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163pwyppiue.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rgssqvzy.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mmwuofut.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pqcsuomv.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163vzjhefgs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163igaqaqsf.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163hgrhkikm.html


<!-- 参考信息 -->