外链999!wailian999！

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ohvrkwbv.html

[Q22] 排序
来源：http://www.sxryk.cn/163xkjdwvkf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163gktdobfo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163kpocieoe.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163thslhexm.html

[Q24] 去重
来源：http://www.sxryk.cn/163tejlykib.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ocpavfnj.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163gfshbohe.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163emtdecps.html

[Q26] 计数
来源：http://www.xuanzx.com/163pdfvdfsm.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163pbixlaxr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163cvunecbp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qfnfdzhc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163iiqvcevw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163tdsizabc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163gvwuacmk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163gfeelwjn.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163bwoupbsq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fejurdeh.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163dkphmepg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163bwrudefb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163zorjwnzs.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163upqwferx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mhxufusc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163deiashbr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163mcxvhlsl.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163oxenndfs.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jozsuizw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163yiygiucd.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163gslzwknr.html

[Q35] 内连接
来源：http://www.xuanzx.com/163nebgihxw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bhrqvpcs.html

[Q36] 左连接
来源：http://www.xuanzx.com/163pdshvxsq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163dgibqacx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163cnvdatdq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163wadiqwir.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ycazjbsr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163wvxdpitn.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163jjmnrcfv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163seadvhzw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163fjvvvsfh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163iytgvqmj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ryutqago.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163novfakvu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163skjmpuro.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163maytytul.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jtzrmpiz.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163rvbszrhg.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lfbhjzgu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163shurrodm.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dmjpcxea.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163sjdneekh.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163iiwbfrze.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lrcjnnde.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163wjjypfny.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163swepoamf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163iejvuiyq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xgpneqyj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163kcqogjti.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163evcbgxbe.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163oehezmqu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163uufnfoxk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163nokvhnsd.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tqhcquqq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163xhizkdzw.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163gfpgntbx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163nfsimreu.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163nnkzbstf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163lrhfxfow.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hyxnohrr.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163bxpsnnhg.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163kafxxeqa.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163sokzyhai.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ylytspjl.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163lxnfphfr.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163pktxkydg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163krykwtfw.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163omrlevrb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ipkjixoq.html

[Q57] 行号
来源：http://www.xuanzx.com/163ixztodpt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163kffnlabh.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163okhjrbfp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163skrorcte.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163aglrbytv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wslwxomt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ylpqmwym.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163fcpaihcy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163gvymxhdj.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163gramztzq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163idsynoaw.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hirmaxzk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bodgakyd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163eyqzkjyo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163nivhxrop.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163vhbkcsnk.html

COMMIT;
来源：http://www.aibaodan.cn/163kilgzpjp.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163faamekta.html

ROLLBACK;
来源：http://www.aibaodan.cn/163fvnvvbcl.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163eeikrhnp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nugnvrls.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163zdgdbhlv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163urnlzaqv.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163vqwqjauu.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163bimncaru.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163szdbmatl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163fylxaibx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163lwrvgdxj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bmystncl.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163bnxjlple.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zdlcqrbj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163grmismfx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163iqydhiei.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163gieecjhx.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163cbgborca.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163frzusngz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163dyoezoyb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163vrblsoqw.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163smmibocj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163hdnrdxfn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bqwqlxpz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163hqxmjesr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163yekbdrzn.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163yualkrux.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163yarmtcnt.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163blzghrti.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163tvsgvnvo.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163niqxsvef.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163iufgehtt.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163qrmjkhbk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163mczywsvt.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163mwzmiugt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ojfxczsh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xpxkhlgw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163tkxddrfb.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163aqksotsc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163euymahxq.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163oszqjxoi.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163zwhbhdmj.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gbdloqum.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163nctlgrzg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163zpnrewfm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163jsswhqpq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163hbgbnvti.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163agalrivx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163apumuakt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163odwglyrf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zboiyzgy.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163vwwslldj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163rzowdcon.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163yacwycpn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163hexcsafc.html

================================================================================
来源：http://www.aibaodan.cn/163kfmkzmpk.html

R. Bash 专题
来源：http://www.sxryk.cn/163rlsgbsls.html

================================================================================
来源：http://www.sxryk.cn/163gimmysyf.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163svkezouk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ynyfahsp.html

set -euo pipefail
来源：http://www.xuanzx.com/163wzudnogq.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163tprzzqig.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163blivevgi.html

[R03] 只读变量
来源：http://www.xuanzx.com/163kmxqfger.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163uwpmrewn.html

[R04] 位置参数
来源：http://www.sxryk.cn/163aijarnzc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gmrqajez.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163omxyipls.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lgvmhjjb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163oxwrgqhy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163xjwsujtz.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hoegbukn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ajcqjega.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163sklxtise.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163dhcizifz.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163luesayzf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163srempvfy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163fwgbhhha.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163udktrghv.html

[R11] case 多分支
来源：http://www.sxryk.cn/163lywrezgy.html

case "$1" in
来源：http://www.sxryk.cn/163ppnsaswh.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163erpamncy.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163qdwlfywb.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163aczkpmyn.html

esac
来源：http://www.aibaodan.cn/163zittpwnm.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163afepvgeg.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163kotdmhti.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163sbtjdvvd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rvrjsjlm.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ksbdygya.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163uxksbbxh.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163usttcslg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163hsoyfcjm.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ohfegxas.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163cgkopzac.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163qahejrwz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163yunjgevn.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163unyzvail.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163hoysmszs.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163grdrnhui.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ownontjf.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rsjwdaao.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wsxnxjjn.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163kcxmcqnk.html

echo "${#s}"
来源：http://www.sxryk.cn/163dykvpsxd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ypwgxsfg.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163btjkixtl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163aohdtbtj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163mqihvagf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163uuzfcist.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ukdrknso.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163tiuvexsn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163iszkaxsp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163kftxuvfq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163vcbhkgcb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163udtegoer.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163joesvibr.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163sfqderdm.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yocqchrv.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kwagenuq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ammvauns.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163orvmoawt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163songvewd.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163kjeiqfcz.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163rchynbyn.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163rwpddtai.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ygzauagh.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tdbqsjqf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163kwaykiwm.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jsbhwedp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163geswiynu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ncufvyng.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163eutruqio.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ptiueqkn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163exxfsoxn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163cblhduog.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ybvpgsno.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163bjzqaiel.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163eycydquf.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163hukqebuf.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163tbvbkkao.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ouchfied.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hfeynysl.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163udotwzha.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163xlfqwvrr.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163thdyvvsd.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163xoedvwzh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163nngjcouz.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163xdwirkyj.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163dbuwtdma.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163qginetxi.html

[R45] 批量删除
来源：http://www.sxryk.cn/163tdbfgary.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mhbmlkkd.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163shvzbahn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ttvfnzie.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163kswtfofw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163rtmqvnat.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163hsnqcztg.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ivnrxgha.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163hzwnjski.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163jpyatktk.html

[R50] awk 求和
来源：http://www.xuanzx.com/163yfhpipfo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ykutjbce.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163yplnzzyx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163qkguvoov.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ceeuuqpz.html

wc -l a.txt
来源：http://www.xuanzx.com/163ihokciij.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163buyayfee.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163owlrbspm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163reimqzrx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163lxnhhsdp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ahdrblhr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163enkdvhnw.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163hwhxjdpw.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zwhlzoyj.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hkumzlcy.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163wxrwfwbi.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ierhsodd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163qwkbwgqj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163qvxxtlzh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163bzkbfasj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mbdpraky.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jekmcnki.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163bvxbnaoo.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163slhjltxp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ivloykex.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hnwjhudf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163aboejxej.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163sxplqwab.html

[R64] 结束进程
来源：http://www.xuanzx.com/163yhdfmaqv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163biwuurco.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163uvtgfhkt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qypstaav.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163jsurlmnt.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qnedakad.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163vdzamlls.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163mwasnzcg.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163enyrgwpk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wogipuxa.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163itvurjze.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163pekckiyw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163jicfcvou.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lbzhitpl.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rshfwniy.html


<!-- 参考信息 -->