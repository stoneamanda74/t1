外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163iyugtmow.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163lrqzgvml.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163cvibtsvb.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163grerptev.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163rujpnghm.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xxhruedj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pgpagqep.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163maqpvqwa.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163qpoyxkvg.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gnzmnnuz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vkfstuos.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mduspiyn.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163wdskgrqh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163cxxcjddr.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163attmsxqw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163stuxwair.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163bzpnlxyk.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163trbyigdw.html

[Q35] 内连接
来源：http://www.sxryk.cn/163hkwigvnr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cmhffcwd.html

[Q36] 左连接
来源：http://www.sxryk.cn/163nmcunhoo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ifrqfowe.html

[Q37] 右连接
来源：http://www.xuanzx.com/163wpfmrzyy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ssmwcjtr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163tsrearjn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gmexosci.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hinjrsiq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vfwhjacx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ncnlaaei.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163wmvccyzq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163rrvjvuqc.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163eqzrpsog.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163wixbumgb.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163yqdlcgqv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163piezvdsw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163mywnrqol.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163cqbvozim.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163yefufrqg.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ycsyysbc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163kvgvqcfj.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163zsocogpx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163tubhmatc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lgkveihr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yimxvqdo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fxcvgnpi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cemgfukh.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163bdxvlack.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163qpbklkmu.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vrlwsrlk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jdhsshxv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163gglzydwn.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163nfrpirwf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163zyqslaof.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163rhjvpheq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163gusirciu.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163pwzwcutn.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163kmoarpag.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ygajlhyi.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163kuxqctrw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163knvwxfnq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ipiuvejp.html

[Q54] 清空表
来源：http://www.xuanzx.com/163lykfftzj.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163qyrbpecc.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qemmgykb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qbnqvynu.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163itypaxpf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163mjmcwlcw.html

[Q57] 行号
来源：http://www.aibaodan.cn/163oygocatu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163jvupkpiw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ffscxtid.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163jertfeex.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163orjzobiy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bkhfvhcw.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163hhzguakg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163qzkokueq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163qukpdeah.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163zmzzewkg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wyftodrb.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163lymedyln.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hdfwhjyw.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163tksrttwo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ywfgulrr.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163audfbopw.html

COMMIT;
来源：http://www.aibaodan.cn/163ijbqljkr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163thgfyzol.html

ROLLBACK;
来源：http://www.aibaodan.cn/163fuixchsl.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163abxgviwq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163clejtyey.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163bjcfelwh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163cwyriort.html

[Q68] 保存点
来源：http://www.sxryk.cn/163beuddtqd.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163gkiwjaar.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163gtaxmcjs.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163pqlomsdy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163xrlcjgpe.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163utpzkqnz.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163dbvvihfg.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163flskohbf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163nrillffd.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163yxqbxbsf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163pqspyhtf.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163dsbhrzwr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ykrqqydg.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163aabfzeou.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163qucisavt.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163firydewg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163aywywspu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163bwvhtadb.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163zkiveasv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163xtathceb.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163kouwhdtp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163hhrfatku.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163jdlgelfj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163vfdceumm.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163hthgyefn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163plkfcisv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163exaxomqh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163oygserkh.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163fucnbbdz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163nfzemldl.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163nrkdqhfo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nbyfdmeb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tjjlsamk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163yofxteuq.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ihmalnkw.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163omvsyjdv.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163xramulcc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163wkdzsgkn.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163yeqbdhlk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bdglywfz.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163jfqhyadq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163znmkdwtq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ngsrbmwm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163zudszszs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ummyoexq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163wapyrpzd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163zyhgpzrj.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163xhrsngsf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163blrarygh.html

================================================================================
来源：http://www.aibaodan.cn/163lonxucur.html

R. Bash 专题
来源：http://www.xuanzx.com/163ueugaqls.html

================================================================================
来源：http://www.sxryk.cn/163ksovmebg.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163aevmrzec.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163xjoflbcy.html

set -euo pipefail
来源：http://www.xuanzx.com/163wfkzldzx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163eclnesvr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fiktamga.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ngzmkzdb.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ootgkqho.html

[R04] 位置参数
来源：http://www.xuanzx.com/163wrmwjydc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163qcqwyvwt.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163gktxvjmc.html

name="${1:-default}"
来源：http://www.sxryk.cn/163rjjmhwbb.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163njjtozok.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ncuilnjv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163echhbcyn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163xuzxmhmi.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ohvjnfly.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ydoeyqtw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163gwkyzuin.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163bluabwpw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pzshplzg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rbfcxlxw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163dbnpdiff.html

case "$1" in
来源：http://www.aibaodan.cn/163zyicfxoe.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pilrezfd.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163wninsrzb.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163hfrleajm.html

esac
来源：http://www.aibaodan.cn/163padpmelf.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163igvscyrh.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163gepwreep.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163jkwptflr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mfhbtkeu.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163uxcyyhzo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163grknoufi.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163yyzuknzu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163qktmkzgy.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163bwefuqwx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163wzkwnncy.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163zlitpvbl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163gxxhdwzk.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163brfwwuyd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163gompgkpi.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163eudxhvux.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163jnrhuela.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163uvcscdge.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163quyzociv.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163mkmjkdwz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163aojyfnyi.html

[R22] 截取子串
来源：http://www.xuanzx.com/163vwwefozp.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fkmnnblk.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163yuzxwcfp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163usrdfrah.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163eltypedc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163hvdpwecm.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163fakjigbw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163bqpsgidl.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163otaypkza.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163brvfbhqs.html

[R27] 算术展开
来源：http://www.sxryk.cn/163wgigafky.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163kimzdwbr.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163npdcpmzw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163wsijwtdf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163azcriizp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gieyvgwh.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cnumngmj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ihdphyhb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163juavotav.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163qfkkgdxf.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163uacmphnt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163uringzlv.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163yroszvce.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163wypzzktl.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bbwbjwrl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163erivugkv.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hcvmniit.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163blnwolxl.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163tzvacdmi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163davygyvf.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163wpdffwtc.html

files=$(ls -1)
来源：http://www.sxryk.cn/163fphogdpe.html

[R38] 管道串联
来源：http://www.xuanzx.com/163usucanzb.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163gsdkaepb.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163xebrzwrx.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163qdrjdpsq.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xepodunr.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163vsexxcod.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163tmbtgaau.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rfelypwi.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kadwnapk.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ruqjzfoy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163uednrdmh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163pgybnfph.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163arknvhjf.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163qjnagecr.html

[R45] 批量删除
来源：http://www.xuanzx.com/163wucwuoyy.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163etbrsqjb.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163oskgjyxb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163czutjong.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163joruriih.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ioktuxnv.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163gtmqtpoq.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163drwvmsat.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163bvrwtafj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hqeirgtd.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163arvaabpm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163uwvhzczh.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163cidmtrlo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163vvzlptej.html

[R52] 统计行数
来源：http://www.xuanzx.com/163kxkqgemv.html

wc -l a.txt
来源：http://www.aibaodan.cn/163luhderdu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163lmnyzstv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163omudixby.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163zbscvgeq.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163kdjvsnzq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163gymnmaht.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163zyfiywgg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163eapjfzig.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gcpdrkds.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ahgshnih.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163yesksphe.html

[R58] 下载文件
来源：http://www.sxryk.cn/163gpfezgdu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163urjygtwr.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163alqzskni.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hprxzyse.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ycdzbllw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163hthlpshg.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163gycvtvsn.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163igzzewbr.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163wouvsmht.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163eturvssr.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163bnueuilx.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wnucmfzi.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163iafikaxu.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163oinalmuh.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163shhmfsvl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xqahgxtl.html

[R66] 定时任务
来源：http://www.sxryk.cn/163iqjxazvi.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163pcpdxtyp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ybswtktl.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ynnrkptm.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163tysivqij.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163tmwwyrnt.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163wzhnwmlu.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163maraglwl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163rqiqrlxs.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163nowqyozq.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qzxebbph.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163sxmbmvrm.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163meuqortj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mneefcpa.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163uuxojjgp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163phllcttr.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rwdpiayv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163cvvnnxum.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163nsdwktsd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ztlwfcup.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163tyoxvwhf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hdgjgzdy.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163wauonkkm.html


<!-- 参考信息 -->