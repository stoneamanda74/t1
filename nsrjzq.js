外链999!wailian999！

[Q36] 左连接
来源：http://www.xuanzx.com/163pnrptizp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uarohhsh.html

[Q37] 右连接
来源：http://www.xuanzx.com/163btfutjiy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163woezmfrn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163txakqton.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163bkxrshmf.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163wamjooeg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163adlqjpit.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163yqxfushy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163dqxuftsl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163fcjdjkee.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bfifuzbo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163mwmjcsnr.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163beyruems.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163poueqhal.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163tmyadzzx.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163kqivwifc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163qxyumsjk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wwlqadlc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163fnasuqln.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163fsyyfciw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bgpuilkm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163uesojivg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163snmgryhi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163bktkhmwr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163htcheqyh.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163povvfbpw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ilsfqnuu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163hjqyupcc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163uhmselug.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163mczkglyp.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163zlmcpgeh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163omwjsrtr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163zkdhgiwf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163xowvxmxz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hdccryun.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163cotgcjhb.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163wrbwvuyi.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163iblykaar.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kpilbbhu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ebyjemkz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163yesqwpoj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163kiajgdoo.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ryplwbbv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163guopwhwu.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163cgjhshim.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163lhosksry.html

[Q57] 行号
来源：http://www.aibaodan.cn/163nhjxflyd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163zasjeswe.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163jpckxsuk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jstasrgn.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163nvnztwix.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163gmzphrko.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163zqukddpj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ltcvcktp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163sktketrw.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163wefmhlkq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163fpfvrfnf.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163tnmbpamd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ullxlsxu.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163hztrcppc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163yhwoogll.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163heqwxzec.html

COMMIT;
来源：http://www.sxryk.cn/163mylwbjpz.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163muuhlrmj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163xasiwgqq.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163buvaibbg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163alhzqlgi.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163oiuqnira.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163mgheljwt.html

[Q68] 保存点
来源：http://www.sxryk.cn/163kzimkeha.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163arkykkxb.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163nvnqgesu.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jwjcuksz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163evvpvsmk.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163hindisqg.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fqbchzyg.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163wmhqabbj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163sdkeoivz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163himijijv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xprmrgbz.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qfjjrvpa.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163xouiwqaf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163jwldyjfh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163favrzist.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163upbuvacd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163onlqbsuf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163iakahylg.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163msvmbkzw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wezvynzm.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163xksxiced.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163livlqecq.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163vhrkqgcr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163taehnjps.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163jfrkmokh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ujwfchpo.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163jqeefvfd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163wyuxdklz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163urjcniiq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163zlogzpln.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163sdbzeoqv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163celtuurz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163fwhulzov.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163tsgzyzyd.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wsqtqwru.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163csjaqcma.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163usjynppy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163cipbvsdk.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163bxkznltz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163mcfbpfjd.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ftfzigxo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163iyjhizrp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zwtvwnqz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fniieqxs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163xuqlhxvl.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jmdigitl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163urlngzep.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163eojathov.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163npipowjc.html

================================================================================
来源：http://www.sxryk.cn/163qvakbdko.html

R. Bash 专题
来源：http://www.aibaodan.cn/163semucwml.html

================================================================================
来源：http://www.aibaodan.cn/163meythlwl.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163yuhqzzol.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163dpfvvvbq.html

set -euo pipefail
来源：http://www.xuanzx.com/163wocqywyv.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163mnypgccg.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163bxtfdbrl.html

[R03] 只读变量
来源：http://www.xuanzx.com/163delzygmg.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163gshhvzuh.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163gtivudxw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163efhemdep.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163olhieuff.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163omgdqlsu.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163esdoqvka.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fpipkyox.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kbzxexwz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163pnxyiabv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bmqmwhut.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163rgqkgctt.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163yqjwbrdw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163dnubwvia.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pecysopg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163zfxoqrlw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163rnrpwbvk.html

case "$1" in
来源：http://www.sxryk.cn/163yxivzgzr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163iverjmtd.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163azgohqsi.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163tinmeesi.html

esac
来源：http://www.xuanzx.com/163ezdjtqoc.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163tynlawoa.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bshqpbyy.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163hlgkasuc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163nuffxjnk.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163dqfstosc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163orihjkbw.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163qxlabrdt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163iouroyee.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163zlzwwjeg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163sakirojk.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163tgnnpeli.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163hjxslvin.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163yqdjxuwi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163nzfyvtfv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gojaanvg.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163kzqljual.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163frycfhtj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163kovunopw.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ceoogcpz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tkakyvct.html

[R22] 截取子串
来源：http://www.xuanzx.com/163gmvbpqpa.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163gjvqnzrj.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tjymqejx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163lbfblccn.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163vlymkrpe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163fvqlpxhq.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163sygwowec.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163agolinmu.html

[R26] 命令替换
来源：http://www.sxryk.cn/163jucchkjg.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163zwvxseiv.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163dfdsugfd.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163sulmvgwc.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163fccmttdu.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lqugggxz.html

[R29] 定义函数
来源：http://www.xuanzx.com/163joynvqtz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163tgnnddjh.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163nhiagtsi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163pnupqrle.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ukpdtreg.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163thgouxsu.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dutrlznj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163bafrxvjn.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163qbphumwx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bpuzecea.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xjyfdwfi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tagvtbct.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163scxbzcoj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163kcxpaail.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163wkujxvzp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163txoydiho.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vrsgcnyw.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xegxxkms.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zwzwuxkm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163elxesryx.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163yinernos.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163voxpuulg.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163plbrageq.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163rqefhmwb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163yhwigusn.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163hsjgpsbf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ajaggsuv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163iwldnboq.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163wdgstplm.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163aatmruet.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ddimajan.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163hesnbqit.html

[R45] 批量删除
来源：http://www.sxryk.cn/163aqzkqofo.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163nqxhjcex.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163izvkllbb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163toeqltht.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163vzgesbwt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hgsuqtxn.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163zobiuzkk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kezerifc.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163cglwzkew.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163uikqntsa.html

[R50] awk 求和
来源：http://www.xuanzx.com/163wuisbneh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xzbylbfh.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163gvhsibwy.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163spislqqe.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163bqdqespt.html

wc -l a.txt
来源：http://www.aibaodan.cn/163zjhvthth.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163yjxbnfcc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cdtuwure.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163pjflwaoa.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163wxqmgxwc.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163uhhivsbt.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163rojcuthk.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163bgdtvkog.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163bqvirmjv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qtflmzjh.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ppxwsbdg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ekpntmlx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163fpwpechw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tbzjpwrb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163zlaofdgw.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163kkebgvcn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163iprwxwtv.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163iqypvxul.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163awulbwbw.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jhiuugxl.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163luxgboeq.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163gdasuonc.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163fakdhije.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163pntytgmw.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163csuckpfy.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zfysmikd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ebqagvdq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163lodjvvim.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163pdzzynni.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ixqulcrc.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163amvvydnt.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hbvyzwhm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ejsbanrb.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163lzlhjwld.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163bgxkjwhn.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163vrwcwxjq.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163yketkumt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163scyzgjzw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jcevcakk.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163pfktrcig.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163mcjbuioi.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163llsdqmde.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163oukpltfm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163dnyzwzau.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163glprgkfj.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163luljkvxs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163mlsroiqj.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rmebnxio.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jpbmcvec.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163wcbtehri.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163tosqhnki.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dydogpzz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163kfwesmqr.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163qtevydre.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163xgzwmjki.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163raqtdvug.html

time ./run.sh
来源：http://www.aibaodan.cn/163dpyluipl.html

================================================================================
来源：http://www.aibaodan.cn/163arbcfulu.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163xotwjaut.html

================================================================================
来源：http://www.aibaodan.cn/163jtsqzqqu.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163dpbqgygl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163fykotupz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163mrubvpyj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163nilefdlu.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lflltmnl.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163kwlbotoi.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xplpkris.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gbfxtows.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ymykkrxm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163oowneatd.html


<!-- 参考信息 -->