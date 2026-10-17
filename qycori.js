外链999!wailian999！

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mluvmuum.html

[Q24] 去重
来源：http://www.xuanzx.com/163soarmtuh.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xjrxlcrb.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163iapdpfkk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hbcmyejf.html

[Q26] 计数
来源：http://www.xuanzx.com/163guthjpiq.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163piexxice.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163olvuhuuq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163pyjevupz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163pmywhnpp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163jsewugyn.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163fymklybi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163auyefcwd.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163fztsvirq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oiqseexv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163zkyxuvbu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163boruzqaj.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163aqemdqrl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163olraubnd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163yrbtgztu.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163pkzawsyt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163hmuznrtt.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163cdxtmycl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163sbbdrxui.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163gbjsqhfc.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163mtlpzpdc.html

[Q35] 内连接
来源：http://www.sxryk.cn/163tjsrmkyu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dkqmabqg.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163gdniclzc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gfabffls.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kybzizla.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163tidvsyfj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163eqcgwapb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tbwzlytl.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163dlxpxugz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163apcmyrfh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163fuzazpff.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163kxqkdyzi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163dppoijjc.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163nvmvgdck.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163xqrtxpgg.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163dkfphecf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hnwwpmua.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163vzmtigiu.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ihckbznq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163woozdkzn.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vqogvofz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163rygorzds.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ojznptje.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ohugrgwh.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lctftvbu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163imzqeyng.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wxvmxlhe.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jtpxaqvb.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ptitbsmc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cwevjejh.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163sifahoyf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163alqhfwuf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163nqkyibwv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163fkpkomzo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163fpfwltdt.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163kemyytcw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ccnfyhwd.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lhdwdgrf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163rovnupku.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163smyzelvp.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hbfkoive.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163iawnntuh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163egcuijit.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bcfgmlli.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163uvpmnydi.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163havbrljl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163vsrrlsea.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163doelssnq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163oyrineaz.html

[Q57] 行号
来源：http://www.xuanzx.com/163xvkpwusl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pvdfsqps.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163uxzhgqvl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163suoaehrl.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kstkxksk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163upbfjzbc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163raqniohn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163kncjoujc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163sldbewwq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163pimkbhzz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xugefahs.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163driupwbh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163furimzwo.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163htbtncvi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163rxcheifg.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163risbspiq.html

COMMIT;
来源：http://www.aibaodan.cn/163sydfvmfn.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163mrpaqkth.html

ROLLBACK;
来源：http://www.aibaodan.cn/163oebnifjj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163kejilvsm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163owwistec.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ywbyqfne.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163etgqzqzm.html

[Q68] 保存点
来源：http://www.xuanzx.com/163hebukccy.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163bwrpnfur.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163whoxlsrc.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163xhvtmhev.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163lzrqrhbg.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163juvqrgxd.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163iezcrtdr.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163hslirrmw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rmrdbyij.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163vjudfism.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163djovfqhx.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163khuczyhi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163pygkegtl.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163omxusmac.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163kuoutzbu.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pooawxrh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qhnfadah.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163jnunbweg.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lfddjyxp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163irgtrwzx.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163gdtlfffs.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ziclljac.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163xxyhotyy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163lknsndub.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163lgqrhvgz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qfnitdau.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163lqhvxnxw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163mhyzdgfz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163lruydsek.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163bybbomcv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163cqmplphu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163rkjyxmpg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163mjmaxleo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163sjajvqba.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kzfejcwg.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163snyhqgte.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163tzwkzzna.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dhzjpeyt.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163zcdcxsbm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163jetfxsxq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163tydpkhxl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163bqqxoaoh.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163jltbhnpa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163imgtqvco.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163awfiktwy.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163kbajaxfa.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163dgnyxtvw.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163xyxukvvf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163rweyluge.html

================================================================================
来源：http://www.sxryk.cn/163ixsiricn.html

R. Bash 专题
来源：http://www.sxryk.cn/163yyylcnff.html

================================================================================
来源：http://www.sxryk.cn/163ipsntyqu.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163fgfcwdai.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163urhsfpra.html

set -euo pipefail
来源：http://www.aibaodan.cn/163xisnjwws.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qqkkubdy.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163wxxtrfxp.html

[R03] 只读变量
来源：http://www.sxryk.cn/163qsqcxrtg.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163eleodoxi.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ovebpssq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gzfjfgod.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163hyhpokkb.html

name="${1:-default}"
来源：http://www.xuanzx.com/163pqxxonth.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ghxbrzov.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163hxjakfgg.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163krqcyrlx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163fzderovl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163jyskyaep.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163djqtiuhe.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ecfdzgbj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163rhtejpqj.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ahuebscv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163iokwtaxt.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163zpwffmcf.html

case "$1" in
来源：http://www.sxryk.cn/163mzzwxazk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163lbyosncp.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163nkkwyeqn.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163xdjsbvhy.html

esac
来源：http://www.aibaodan.cn/163hpflwrfb.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163fpgcvmhm.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ayqoojxm.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163wmeyyush.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163tlfxevlt.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163vdhlfmbb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163bkxrzikc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163llzfmwoq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163qawdridq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vrhmthoc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163mungmvro.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163fvuyacez.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163kugwjbvc.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163duhxgqvl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163aqrpgdbz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163pmwmeyqx.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163sdljxzmo.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163xzkorkdn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163nlubmztn.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163erlslxti.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ipzfdnur.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163avdaqsyu.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mrkcwrys.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163bktdmdey.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163mdemdilz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163oiutqhae.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163miqvvutt.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163krkdnqut.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163plmqobfg.html

[R26] 命令替换
来源：http://www.xuanzx.com/163qmhwhudn.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163htbsmfzb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ybkzmdtw.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ubynrlqu.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wvwkpuwq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163oqtvzhhc.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kpknzybo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163cayoncey.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163obarsjtn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163hvkrtzno.html

[R31] 局部变量
来源：http://www.xuanzx.com/163nyrutzpn.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ushrrmfv.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ijwdkeax.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163zutngvni.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163pounevit.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163scnuolgp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163kexyjtgn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fogfcjjh.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jhjlfvku.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163fmvegyxp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163opsqeweq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163rpfpgjqq.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163eyvukxzp.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163dcwgwviv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163jfkuvavc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zuuvvhfa.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163fsywdqzh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163pzacftwb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cvrhjwgj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dtxmplik.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163sinhpamy.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ksolgoca.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163zmrlbgnp.html

wc -l < a.txt
来源：http://www.sxryk.cn/163kysennbx.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163leetnpaa.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163lapiuica.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qawylcrr.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163xybdlfga.html

[R45] 批量删除
来源：http://www.sxryk.cn/163gkwctfys.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163dgljtcip.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163bogqapqd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163reszblgq.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163clwcoxuw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163rairmssz.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163orakatgw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163aigcnlpb.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xtpdwwtb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163lbghrcay.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hazkjjmk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xyaeenfw.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163vpeokbvw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163fljozyus.html

[R52] 统计行数
来源：http://www.sxryk.cn/163yakryajx.html

wc -l a.txt
来源：http://www.sxryk.cn/163wcdeoyee.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163cspcivva.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163jkxkpzbb.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163oltiavix.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ecsidkbi.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rzoklxoc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163antmbysq.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163tsrbykcl.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163cceqoajq.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163iesgqvme.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vtuljpxz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163mszndjeq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163zjvftrbj.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163tizerfwm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163aqgddlqh.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163pcyuixix.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163mgkalofp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163unochtzu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163rddllrgn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163osmcanvv.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163stpccopp.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163qpbnhytb.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163pbfgfjgu.html

[R64] 结束进程
来源：http://www.sxryk.cn/163pkjkdbih.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163aukjvern.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163vchncmmv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163siocffwg.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ofgzvomu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163dkwbddoy.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163izvmbacu.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163yyxaesxm.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163pxytousz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163agdolhnc.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163aknghefg.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163jsjmazhs.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163zaddulre.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163siabwfal.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fijtlkgx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163brzvulxr.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163gnnwejdl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163xjqgjygz.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vmuithvf.html


<!-- 参考信息 -->