外链999!wailian999！

SELECT * FROM users;
来源：http://www.aibaodan.cn/163kpqrmowa.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ecwtvfnh.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ggeireww.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163vbaxotoq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163mqrjsowb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163azxkdrvb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163yqkvnayd.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163akehzdel.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163gvhshuru.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163zbdtndlq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qxssrqrl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fconivzm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163izevspwt.html

[Q22] 排序
来源：http://www.sxryk.cn/163gzdzfram.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163hhhqgrpe.html

[Q23] 分页
来源：http://www.xuanzx.com/163thbzvwba.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163buqimmju.html

[Q24] 去重
来源：http://www.sxryk.cn/163bgbefrst.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163qnootnha.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ncpteuzy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ckrcmszk.html

[Q26] 计数
来源：http://www.sxryk.cn/163occmxnuv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163enxaepdh.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163lebgnjii.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163kiaoukzd.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ylvchtqc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163xpzjqcdo.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163nmmukpwn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163garzrzvq.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163bpikgtwh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ognnobbc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163erqfsyvq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hqkciegj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ttdzwbmq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xhrmlypl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163aeaumtba.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163stwhwixl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163dfxnupam.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163rerbrfzm.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xymftdxc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163nxpwmfpf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163pzoxfabx.html

[Q35] 内连接
来源：http://www.sxryk.cn/163qzkikvkc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163foemnsvu.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mrnbccme.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mmoqukob.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163mmutbnbm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163wrforbnk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163usdddafl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163smppaidd.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163pvexvagj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163qeqogdbf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163vptrscfh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163cwdrjpdl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163frpzhkkk.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163iafhhwtf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kvebbomv.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163umbkotvz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163wvfbklxe.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jqmmypvm.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163jgohztaz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163mxpvrlvl.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163jxtpzcmf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163kpuaibmo.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163qcxddtdc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163gewahztz.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163oepayghh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163cknuhexf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ipxtnuap.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zklqvyxn.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163iaarbrwx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ryhnaiwv.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ynvcmmwb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163tgajfrce.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wanfbuef.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163lmvfjcnu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ckztapau.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163mitqwsdx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163oozhmjxj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xzdlbeql.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163fwfdlvoi.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hfessubo.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xmhgrrqd.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163hzqxqesa.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163hmswtefc.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163orskylip.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163eekhyyti.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163hgpgvdne.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ssuixcyn.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163bsvqmfbn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163gupptxyc.html

[Q57] 行号
来源：http://www.xuanzx.com/163youkklim.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ttnnsorr.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163epvqxxuo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xgajoirh.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163necctiqx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163uwpwhyaf.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ggrlxpox.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mfawexnu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163gwhlsppg.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jdpzjudx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163lgrtfyka.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163swpughbf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oyjivfwq.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163mqkfaolp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163uzarlilk.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163flrhgtdc.html

COMMIT;
来源：http://www.xuanzx.com/163zzufzlzi.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vlhlnhjk.html

ROLLBACK;
来源：http://www.aibaodan.cn/163stntwvip.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163mpcuxlqz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163rtngpgof.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163xldhgfcb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zbafvxgo.html

[Q68] 保存点
来源：http://www.xuanzx.com/163bcylckuh.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163nbhwxaek.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ywijhxjx.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163kpnclukc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rtgnroht.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ckeowzga.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163dwoqirhr.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163bugjylaq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163drhvddud.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163lplrfyfc.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163nkttprqo.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163eyyjbvnh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163pgwxizmf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163aobwalrh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163hiagqhup.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163jjsyocaz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163nxhexizb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bkydriae.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163znpjlzaj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163mtukunxc.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163bruanbjh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163juyanxwy.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163npjacaoc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ebzwpdnc.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163pffswtrw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163trmvdpnh.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163xjtoxxzj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163evmktkna.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163eyvwplup.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163hjxyawmr.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163wksdlfer.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163xmibbngj.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bgdssthr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ltoqiwqw.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163mxfbjxhg.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ifxssknj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vfnqitfc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zqhzldsh.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163olkenwmu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ivbfdcxc.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wwbhxbvy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163xceqsvrk.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163salbypqb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163hakeqplc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163isfuvqwo.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163muezmetz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kgxboqpc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163yldnqpba.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163vduhkxty.html

================================================================================
来源：http://www.sxryk.cn/163xzasbygz.html

R. Bash 专题
来源：http://www.xuanzx.com/163zbpdpkmv.html

================================================================================
来源：http://www.sxryk.cn/163snfvuuab.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163zzdqcrro.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163wplouszm.html

set -euo pipefail
来源：http://www.sxryk.cn/163qmxycxxe.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xzbfxoru.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163fcbiyhkw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163newydmat.html

readonly PI=3.14
来源：http://www.xuanzx.com/163afzcwqrt.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ssqzawkf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163gmxalyok.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163qbgumrra.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xpulbouv.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ktqrnqut.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163cwmdvtxv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163dgjlrfri.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xpfkiofw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163mtlwakod.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jhkefgvt.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tuvbnbei.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163maltdggr.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163cwihuqph.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163svtfwuep.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163bahowohr.html

case "$1" in
来源：http://www.sxryk.cn/163nkljhcfx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163tvjgrrgz.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163rbslqbno.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163dlldtyhq.html

esac
来源：http://www.aibaodan.cn/163vhxxjqaw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163szmliivn.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163eiciyjtp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163uguzjfwu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mglqktap.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163rzsavkaf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163xoobqrvl.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163eovmvzcz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ztyoqitw.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163owdxgygi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ntophmre.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163jpfkekkt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163mhmktkjr.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163anfrcaej.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163mpiuqkpb.html

[R19] 数组长度
来源：http://www.xuanzx.com/163qxbvlnsv.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wzanuoyk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qdrrxjfv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163veeobjae.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163woafoday.html

echo "${#s}"
来源：http://www.sxryk.cn/163astalukb.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qzbrjwxq.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163avulihom.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163jiggkgur.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163kzhpdwkp.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163epqazulg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163yudampua.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163tyoqwjkk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163lnklkmwu.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nrijjefy.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pxprycwl.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gjotgrnh.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rssbnsin.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163mhmrmwrz.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163bdsqpixj.html

[R29] 定义函数
来源：http://www.sxryk.cn/163cuwtmoyk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163kuuohwit.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ibudtdrw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163nueczvxl.html

[R31] 局部变量
来源：http://www.xuanzx.com/163donnpnat.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163hqbewars.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ynparlqv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163nbfeyfzl.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163vudpefsv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kcrvclre.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163aknultde.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163egrdkvrn.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163hvfdedkx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163tyjrcqlj.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163fvtittyb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163bmwufoqy.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ctzjapdo.html

files=$(ls -1)
来源：http://www.sxryk.cn/163kfylhrjv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163piykmrjv.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163dlcdopjl.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163vlxqivgw.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ztpzxppk.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bijjzeca.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ozyypoab.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163oexsvzto.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163gobildqe.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hldpstna.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163bteftvuh.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163criiqzuo.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163rmziaoqh.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163owzjbysz.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163pnnkpioc.html

[R45] 批量删除
来源：http://www.sxryk.cn/163sjazsidg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163fxzcxdjl.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163lujueugo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163oyazgkum.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ndrezrwc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163bwguirwn.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163pdrwznfi.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zmevfkcw.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163skkzqptg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hfyaxznr.html

[R50] awk 求和
来源：http://www.xuanzx.com/163lylbmtqj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163mmsypzoc.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163zojlepvb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kcmficul.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163yewklgtf.html

wc -l a.txt
来源：http://www.xuanzx.com/163ienlkdha.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163hqccxhxt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163fnnfpjnk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163dqpxzrrw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163nkwxovzk.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163hvilzrjk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nifrvodh.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163fwdrkjgn.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163sizwespd.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jqpznitg.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163shrxwvgu.html

[R58] 下载文件
来源：http://www.sxryk.cn/163komapolh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163rchuveux.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163dphlgosn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163aipykrhz.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163jqolqwme.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163cqxhuehj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163lusqmgnh.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163dnvmcicc.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163mokwjlxg.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ocfaxfmr.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163janzyduq.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163saynrrxt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163mmooxkzz.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163edspjstd.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ogijtilb.html


<!-- 参考信息 -->