外链999!wailian999！

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163cbrhkhju.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163xzxplyio.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kasarwph.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163nbcifxfd.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163yganpbva.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ixqpqlky.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jtmxjbll.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zzthmame.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ataqstbq.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163zhnepvyt.html

[Q35] 内连接
来源：http://www.sxryk.cn/163xvyyeugh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sswuhson.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lclduyqb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uwpjzzmj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163weloljzd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163vanlqiel.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163wwscdwkt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163hrmmzfhq.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hvxjgdaw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163iymfbrcl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163icdyoqwc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163uwrlndwc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163eluisrye.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163hwpqfvhc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163dchtdogs.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163dlpmewku.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hxhmmrhf.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163tunrhdyr.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163njyjwxsd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fiikwfid.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163uokdjbud.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ehuraoqy.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163epgcculv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163fskcihpx.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163mlaxxgzu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kjywqrol.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ucwydqst.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163oyvcnmfo.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163lerdvhst.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163bwrclukr.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jqorrpqz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163xvrkczxd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163nuvneoua.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163nferhrwz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qplshvla.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ehwflzni.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163lsmcgzbo.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163yquvvsae.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163tosqnpkn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dmwsmdzo.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163tkjrlbrj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163jvobtaej.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163afvacgtb.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zgubesiy.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163vplaowae.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163gadeywqx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163xpdqqdbh.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163nvchipcv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ehlcothn.html

[Q57] 行号
来源：http://www.xuanzx.com/163iruvszjl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163pgekwzgj.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163owsszxia.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ohafowse.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163dmwlwckt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163hlxfzwzt.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ellljlfz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163japllytt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163svaycykl.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163uqikzxif.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163esgfpswa.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163siezlbsi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rxizucqf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163unalaxgg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163aisspldj.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163zhfffhzo.html

COMMIT;
来源：http://www.aibaodan.cn/163dzatedcx.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163pcrdqpel.html

ROLLBACK;
来源：http://www.aibaodan.cn/163swygkobc.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ncikmufa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163jztgrdel.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163cymaccht.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163yfnzmvii.html

[Q68] 保存点
来源：http://www.sxryk.cn/163koqyhkwp.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163qylhhasg.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163huptphfd.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163iuhncrmx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163xvzneelo.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mudajpby.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163atdzouhx.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163gosavvsi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163qgoivygo.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163lflhqngy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163olfypxim.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163lmjrfpcw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163srwsekmy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163yirajins.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163twipwbvd.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163uzejojxf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163gowumnae.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163xmmbielx.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jtpqawdx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163iwwhizis.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163otftpcba.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163eeyuzetu.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nwkylqmh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163imsjdsbu.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163lvahwryh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kkvmtpww.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xeuzxypq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163aewxsojh.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ccygfmyy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rtfhnfsl.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163jmrlpnuk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163opttmqsx.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163doofcavh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163xzgrruvv.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163oxtfffyg.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jcmmitja.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bpfqctzt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163obphaksn.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163zqeiuwsd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163jnezexsi.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163irzqwdlw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163mpcsbtbr.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163mnxjagas.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163aovjisxf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163aehiejbp.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163yqrsijun.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163lpowdxhc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163mdjkqfua.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163rolvqvni.html

================================================================================
来源：http://www.sxryk.cn/163qjedudok.html

R. Bash 专题
来源：http://www.sxryk.cn/163aappulvv.html

================================================================================
来源：http://www.aibaodan.cn/163vrwgvebv.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163grvqmvjp.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163qejgfpvb.html

set -euo pipefail
来源：http://www.sxryk.cn/163nnkmrgdt.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163nddgxwus.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dprcnnus.html

[R03] 只读变量
来源：http://www.xuanzx.com/163wkxreoil.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163uejnofem.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bwdgevtn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163mwjkugxo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163anduwqlz.html

name="${1:-default}"
来源：http://www.xuanzx.com/163zjgdqoka.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ijcdofww.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163oqxlypil.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163nwcweogf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163cdmaiymq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163syuwzzll.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163amrimptp.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163guvwdone.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vzvwiazb.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nuctjtql.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163booriuen.html

[R11] case 多分支
来源：http://www.xuanzx.com/163klquzpen.html

case "$1" in
来源：http://www.sxryk.cn/163fzsepkuw.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163nnlwwsgr.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163nmgkhvhf.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163almdxmps.html

esac
来源：http://www.aibaodan.cn/163borvwxpx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163amfcmkdu.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tqmqhjvg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163yzjmlqnf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163btiziqji.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163eahzqhfy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163hwxzwfmz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163imcewpfm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163nzvjzecs.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kthhqqnf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zquurgne.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163iwyzbvmo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vuofcljm.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ejofsbpi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163diyoqooj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vgetelgb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163wjycxypn.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163cujndnwt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163abmzdidx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163qihtoixn.html

echo "${#s}"
来源：http://www.sxryk.cn/163wdulccnk.html

[R22] 截取子串
来源：http://www.xuanzx.com/163kbrarubf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163molqdedr.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163skhxzlbv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jgugzvdv.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hbtgngsh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163dedwzoac.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163pejkztjn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vhedtdwo.html

[R26] 命令替换
来源：http://www.xuanzx.com/163nrkumyui.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gnxxfwmi.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jsauwvda.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163esrlnbaj.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163fpvgciap.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163kypqwkuj.html

[R29] 定义函数
来源：http://www.sxryk.cn/163gfuehsuy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163gcxhhnny.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qxozdfxp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163plgqvgfd.html

[R31] 局部变量
来源：http://www.sxryk.cn/163jwpurfqj.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163qejnyftl.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ektcrpcv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163kulzupix.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163hmsauzne.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163cyqawzac.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wtgmkjfg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mayyyzap.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xepulgkv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ywilbvsh.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163cxsagksm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163mcmxgzuy.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ouczgteb.html

files=$(ls -1)
来源：http://www.sxryk.cn/163pjwfmdyc.html

[R38] 管道串联
来源：http://www.sxryk.cn/163naykwyrm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163qlcpetdr.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163fzgoabsm.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nuvythyy.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163kcaotfmn.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163nfzrwvgc.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163zsrsoeew.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163omwyemyv.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163gbbdxoli.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163bigsraun.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163mvkjales.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163jdoaytll.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163oxnmnctb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163njmcxcys.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ylmzlmzb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163jcuffeiu.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163bjufgkis.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163qmeawvxs.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163lvcehijl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163xltglioo.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ntqugguf.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ppkuiqob.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163yhlmkufo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wjvrhoun.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163rpukbbso.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163fgzolevu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163zzcpqngs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ddqafvne.html

[R52] 统计行数
来源：http://www.sxryk.cn/163fqvyaryn.html

wc -l a.txt
来源：http://www.sxryk.cn/163aglwxuof.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163okbpcaon.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163jfxsiqhy.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ypiclhlf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ozlftqca.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163nuwmpwyg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163jzotqmqj.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mwixlcvu.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163kfcohyio.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163mqjquoke.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163kevfbjay.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163mmfxsian.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163eenfocpt.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ghqkuyvs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163mjjlichm.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163msavbvby.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163wejlhabk.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163kipnlzyw.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163hydrkhac.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163trrryifu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ulfxiyau.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163bywhgbwi.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163pmeqnkmb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ohyiszny.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163aiaeuhqj.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gdgrnuqa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163zafctstw.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ngawxabw.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163sntygptc.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jcmugqmk.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163yszkbmaf.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ystbjyxm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163lmuqthot.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163xertjthj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vbxldnye.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163sectoyex.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163rntynawb.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163jfecgonw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jcuxfqjy.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ewyvzpek.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163scxtmlnm.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dqojvnic.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rxoogpdl.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163nsygprkz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ytfvigeu.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lbvqabto.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163jextakcb.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jablputc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163iyjxhait.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163fsgbdzit.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mhmrlbdt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163pdbmvgpv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163cgmhnbgr.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163nyamqxlz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163hglmhwxu.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163lffitmuq.html

time ./run.sh
来源：http://www.aibaodan.cn/163hnxilnbs.html

================================================================================
来源：http://www.aibaodan.cn/163atzqwrsk.html


<!-- 参考信息 -->