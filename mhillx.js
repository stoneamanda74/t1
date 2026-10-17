外链999!wailian999！

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163zvvqvoaf.html

[Q24] 去重
来源：http://www.sxryk.cn/163idpnfgcb.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163rvjuxmoq.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ktitqfpd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163dtptcevk.html

[Q26] 计数
来源：http://www.xuanzx.com/163mcimxspw.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rbwhgxlr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163osazymjo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163uirutcxj.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163yzgtqmra.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163mdfejblh.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163umxwyajg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163godmxfni.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xqthcazg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163osvqnsbb.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163icvdhjyw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163fvpxyiqs.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163mifxetwk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hqwwyfci.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163agpzmcik.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163gqcofgvn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163kwzzdsbr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163rhuxaawy.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163godirbwd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163uwzjrnrt.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163dfzrzrgt.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jtbtgipt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163muubbvud.html

[Q36] 左连接
来源：http://www.xuanzx.com/163btouhsub.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163chqpfboq.html

[Q37] 右连接
来源：http://www.sxryk.cn/163mmncwahv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163uoyfjsau.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163wwralkkx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163fwhrdhaj.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ltnvghal.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163fghoowek.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ypouefbi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163edbtiopk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163qtxpycvf.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163znmnzqer.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163gcjeficu.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ivlblojp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163tnjydxhh.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163qanizfxa.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163amqykipn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163kgtcdymt.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163cuvmqlum.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163oklukbbb.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163slzgvtsb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ahpqxiws.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ruzaxenc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163twdrhqrl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163klksmenw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qvqahqce.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mcekeqyd.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qfsipzuu.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163unvqxpat.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163jlavyjhw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163pyxfruis.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163rnfulysb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163fsootijq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163icjoxxqb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163xrlidtwm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163uxkzpeio.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163urqdzrkv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dedfmaeo.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163kkfzrxdl.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163lsejtaod.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163siyzuqls.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163kgtouiya.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163rhanfvup.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163vkgvrfxp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163lsufcfog.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163dpseemks.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163konqraeh.html

[Q57] 行号
来源：http://www.xuanzx.com/163yitoweug.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163vknjyhql.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163jqfxjxey.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163rogitqpd.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163avwxyuls.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163yibnpsfm.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163diiwvgxe.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163yjzmbret.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163yjvlqykq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163eohalmer.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163znqsrhhk.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163netvpkti.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ovpfkzxa.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ncbyrlfq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ujmxwjzk.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163vsafkoff.html

COMMIT;
来源：http://www.aibaodan.cn/163twsuwpie.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163zpjnkxai.html

ROLLBACK;
来源：http://www.xuanzx.com/163wojhwddh.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163iqvsgxxi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163jbjablmx.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163dshipxzw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163odsobndr.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163nhidiarq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163bckzxspi.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hewztiwn.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163qubxhmfj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ghfnwkpl.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163khtqnhva.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jmvifnlq.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vimhxwop.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163gmfsdtda.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163hpfadqnx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163vyjbmeng.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163wpjivtvz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ayxzxozt.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163fywmqphe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vfazjjhx.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163tattrcjd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163odhixngj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fecjplah.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163plpbbqcx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163gevguynm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163fsuudwuw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ikexkkwj.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163yhggsnjf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163tzvzmzwt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163jmwhwtnx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163fqxbyras.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163eptavcab.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vafvxltv.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163xklrpjsr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163crviulsq.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163nskvldsc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163hpzmabmv.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163gnpywjet.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163mveudwtm.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163prisrxon.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163yliteiyj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hkdvjkal.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163aanqtrni.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163zynoxmjv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fcfitptc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163apmlsqgi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163awmvvqxd.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163lwdsdvsp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163inrwoigw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163fwwhysfo.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163dzdblcyi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kboeybwe.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163esexqkra.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zcxulwuq.html

================================================================================
来源：http://www.xuanzx.com/163uzsvuuco.html

R. Bash 专题
来源：http://www.xuanzx.com/163tynudwef.html

================================================================================
来源：http://www.xuanzx.com/163fetssrdv.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163yirfiaaj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gtmauyqr.html

set -euo pipefail
来源：http://www.xuanzx.com/163jwsqiqfu.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163oxvgkvnb.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ufimqtds.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ihqkcqnu.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qntnwvzj.html

[R04] 位置参数
来源：http://www.sxryk.cn/163zhvvnpqs.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163sysebpms.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163pvsudofq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zhdvjuon.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163izllquue.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163eibkrpob.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163psydhcgg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163tepevnxn.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163otzsbbwr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163kxjrkjbq.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163hmtwazxt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163dyxemddw.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163rtqqsbon.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qwkvthtl.html

[R11] case 多分支
来源：http://www.xuanzx.com/163phjpeoyd.html

case "$1" in
来源：http://www.sxryk.cn/163dxrpdqjt.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pabutuxx.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ljmvytwd.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163aavfwjky.html

esac
来源：http://www.aibaodan.cn/163yynpoodw.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163golsvjae.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ufrjdaxp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ypxdowar.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163urrzogqd.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163gcswfgjr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163icjmpqlz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kmmfijdv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163kqmvjkvx.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163rwtfhnxm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163mobqcfcv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163zxvwwzgd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163kxldggsw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163uvjfaqwt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163jflhutzy.html

[R19] 数组长度
来源：http://www.xuanzx.com/163bjmlfuxv.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ubgsnwzm.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163sornddsq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163zchxdmjk.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163bjqshmif.html

echo "${#s}"
来源：http://www.xuanzx.com/163sitnoret.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bgzizvzp.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163nnunuamp.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ndjbtujy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rbygkehd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163emxfrvuq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163occyddec.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163vansahkn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163wierxhon.html

[R26] 命令替换
来源：http://www.sxryk.cn/163kmrnunes.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163kcywvvfa.html

[R27] 算术展开
来源：http://www.xuanzx.com/163fyabsook.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163luhwowix.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163nbtoextb.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ijdqymrz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163vvcgdzoa.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163atnnshkp.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ducarpbe.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ghxnehzr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163bqndcpwa.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163heabowdv.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163dvxfaykn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ylpgrqtc.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163obudcera.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163hqiwthtr.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163fhoeucod.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ujywwwym.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163iocmykhj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163dvwcanqe.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163pmlmgwzg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163oqljnsvz.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163hnklmanb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vhowddxs.html

[R38] 管道串联
来源：http://www.sxryk.cn/163jrwtijxg.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ywubucle.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163qkfdwbzd.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163upwsnteh.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163sdggvnai.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163rswreoal.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163tvuqkwtx.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163nqfrjvbn.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ipfsyjqg.html

wc -l < a.txt
来源：http://www.xuanzx.com/163hiuvkjqt.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163cdgezzoe.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163cjkqxeei.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163uhhdjirz.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163yujrapkk.html

[R45] 批量删除
来源：http://www.xuanzx.com/163cxzhzcir.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163grhaaeyr.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163cdnwfexj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163wklgbvls.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163idilcmpf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ccqfuriw.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163pmitxiba.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163fqzzwzrd.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bbxduyej.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163vyllsude.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163agysqkhd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163fueqllzv.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hxhpdxcj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163xbsfqmhx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163evqvqvfu.html

wc -l a.txt
来源：http://www.sxryk.cn/163ntondluy.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163hotjuuxl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rmjkhokf.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zkzdrdby.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163sxvsgqyu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163voxkhgld.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hxdzptwx.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163nswayyqu.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ubgfdqgr.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163hjehunfz.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163hebpnvdp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163bxnzgzzp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163myjruyhm.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ktqmtigx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163vbwenebe.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163iudekvpr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ufcdmhhx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163dnyjcztr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163jogrvued.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163lathxofk.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163qkrqcqzj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163rzzjmolq.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163iithbegn.html

[R64] 结束进程
来源：http://www.sxryk.cn/163gzzjyney.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rxxqdvsf.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163eghijznt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163zrikwsuy.html

[R66] 定时任务
来源：http://www.sxryk.cn/163bmllgjye.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163twzlbmxu.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163lswjmalv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163gdyseuzd.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rqzbqtby.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163jgjbluis.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163uqkslekr.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163alxisjod.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mmvtrdzo.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163sgqueszv.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163epphasqp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ffvgpqvm.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163zdlbgipw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qbkzrxri.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kzzndosi.html


<!-- 参考信息 -->