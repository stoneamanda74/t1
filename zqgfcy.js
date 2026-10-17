外链999!wailian999！

[Q33] 多列分组
来源：http://www.sxryk.cn/163vffgpikg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163tcbgfasr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163dzdmdmhk.html

SELECT * FROM (
来源：http://www.sxryk.cn/163weesplss.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163hfmevfzp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163lvnxtnvw.html

[Q35] 内连接
来源：http://www.xuanzx.com/163kgsyawyx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gwpdfftd.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163otjjgvol.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163amthhrrc.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wmbqurdc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163yyeffnix.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ndtbmswg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jzetethf.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163gdzlygmo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163nyzzxkcj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163dtumqpja.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163gnskgwji.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ohggsaec.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163omyibkxn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163tvrvbkbg.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163sbsytqum.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ftkpyqdw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163mkngouwj.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163flomvxhu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163erpwixrj.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vzdoroty.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163wjvohamu.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ixjmlszl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163zwncmoxj.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lhzfqfzs.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rwtbjuzz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ltlidljr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163zcsqzatc.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163izukohqx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163gyuszncw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163tztyoyql.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163tjvmnfne.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163csjaweqz.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163deyxkets.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ehtwpmfv.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163hlzqaqip.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tlsqrryf.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163nuqtyrtl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163zwxiqpbq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163aegchyfx.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ndupchvy.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ybsxkqya.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163oppytkdf.html

[Q54] 清空表
来源：http://www.sxryk.cn/163kmvjskbg.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163vahltdeu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ydfhpycu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163vynwjmbt.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163avfnkscm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163clrhtvrm.html

[Q57] 行号
来源：http://www.sxryk.cn/163ipehhdnd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163zcxebgzt.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163vcslfmjo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qjqcrqul.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xrvvtbsk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163gimhbzvz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163bsldwvcs.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jcmnpsos.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163pzaxsxpc.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ibpnajsd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163swwhxuwr.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163utaxcvtx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vrmbrzan.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ttpqwfkg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ytjpjpeb.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163luxpgpen.html

COMMIT;
来源：http://www.aibaodan.cn/163hozvrmdg.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163opetujcf.html

ROLLBACK;
来源：http://www.sxryk.cn/163aqjvegjh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163kzfbihvh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163qujicgie.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ybylchfo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ocoxhygj.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163qvarvspb.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ytsaxeqn.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163izqqzheb.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ivxioxpk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ejwzpxkz.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163losctcpb.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zyqaidvc.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163hxhqmvjd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163vtktntzc.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163divvvjhz.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163vjodfbfw.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ocorjviw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163klchrryx.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rhlooiro.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163iqgmhayq.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pzlutweu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163gurkvqyl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ozpiahyx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163jqvcbeyf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163sciyzsut.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163hjgyftxz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rhqmnqvq.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163dlwuxath.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163vxklcgkg.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163nwtvyebu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qikybvml.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163thlfaoos.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163flhidqnu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163dncqzwbd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163cfrjmhuo.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163qxtxratp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163wnqlcclw.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163hmkircwn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163fbtztirr.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163zhrblkjb.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163klxvvtvt.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163dojnpfuy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163udephevj.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163jqsqilyj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163lfpdfbhc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163mikmdndo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163etwkbhdk.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163tfudwhec.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163prniioco.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ekxdtbgj.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163wwxxeeik.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163zwiwcuzm.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163uqpuvoya.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ucglgrcy.html

================================================================================
来源：http://www.aibaodan.cn/163oloyoqwv.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ydyojbaq.html

================================================================================
来源：http://www.aibaodan.cn/163seozalcr.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bxaqduvr.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163gpumsknd.html

set -euo pipefail
来源：http://www.sxryk.cn/163hudvsser.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163clnqnxsx.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ojcyerho.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163eucusmqv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163nfunqzmc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ordbuakb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163fuxelxix.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163usztbizl.html

name="${1:-default}"
来源：http://www.sxryk.cn/163sbmuukxp.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163epfnepyy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163qlqmqfwt.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163zxkqnbmy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ogurhnpl.html

[R08] 数值比较
来源：http://www.sxryk.cn/163fdxnwcxv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163haxydfon.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163rbrhcpgm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jaunrrpg.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163kgiogzbq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163iterpdxr.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163uzyrdhyj.html

case "$1" in
来源：http://www.xuanzx.com/163cokludxe.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163kujrekdx.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dqnozzvy.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163vqoskwcb.html

esac
来源：http://www.aibaodan.cn/163snvctoyl.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163pmpghron.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163dusljykx.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163pninjbud.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jdpytczr.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tgpbkvet.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163mktyugdj.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163btswymtp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163qpdgapfm.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163jfvtawxt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xpymsdsi.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163nhfeurqy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ywtcwkzn.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163fsbydjmd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163jsjdiflm.html

[R19] 数组长度
来源：http://www.xuanzx.com/163tgsxlcau.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cuyncllk.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163vjbbkacu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wlaufnup.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ylhvqpig.html

echo "${#s}"
来源：http://www.xuanzx.com/163vzqlcmvd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rhaxljbf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163cgimkqhg.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fgutqgsr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163wlpikbbf.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163wiyjxarl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163lcampuud.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bcimfhvj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163xtaguoge.html

[R26] 命令替换
来源：http://www.sxryk.cn/163crzyrelp.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163wbkxdvyo.html

[R27] 算术展开
来源：http://www.sxryk.cn/163nduunotz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lnlvecos.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163nlagkspb.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163dqyepdnr.html

[R29] 定义函数
来源：http://www.xuanzx.com/163kufcvpfs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gghgywie.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163lggqwhzq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ytwzzzoa.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dpedvnzc.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163thcukutd.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mxhbtpdw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163efhbmrfz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163yhmtppym.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qbzaxitc.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ehhostnp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163abgskozt.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163pmnviolm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163lppwsvru.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163bniljinb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jboznlzs.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163mkkavlku.html

files=$(ls -1)
来源：http://www.xuanzx.com/163gcacovwj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gjywzfnu.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163obehbcqu.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qizjzfnh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163lkmmixzu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163lumztqwr.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163rjuxoscu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hytqeyyp.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163cebjatld.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163riaixoyu.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ukhkboko.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cvyhumle.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163zkfuapxm.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163bmjunrnm.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163yssxoxyf.html

[R45] 批量删除
来源：http://www.sxryk.cn/163duumhdtq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163casbnmzs.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vznildsn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vhtvrikb.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tndakwmo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wagqoqfp.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ndyimgol.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163bdpzwehq.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163anjturaz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ptytvafa.html

[R50] awk 求和
来源：http://www.sxryk.cn/163trwpnxjd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163krigkosi.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163jqpxbcbv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ydqhirsf.html

[R52] 统计行数
来源：http://www.sxryk.cn/163qwjcaypz.html

wc -l a.txt
来源：http://www.sxryk.cn/163ffdxyvhm.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163yxhrcgau.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163csdbnjim.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163nkxtolyj.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163luyhbhuz.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163yyxvhvff.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163axxhabcr.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163iaihhtzc.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163bwrnyfzh.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163rqkypdbc.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163cqpjdshq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163hpqztarl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163vwpbqfxy.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zvdsaykt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163cyryzsxv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163folheizn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ufspculk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hjchjdgu.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163eizttqzw.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163okjlcyuo.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163cmesoepq.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163rbgnesoa.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163nwchevja.html

[R64] 结束进程
来源：http://www.sxryk.cn/163iywioagf.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tqztusit.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163cledijij.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gbwirpen.html

[R66] 定时任务
来源：http://www.xuanzx.com/163mqeghalc.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163epqawued.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163vhoufden.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ytfadyeo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163kufyrthl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163klftbutp.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163rukyzgcc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ejfkmkmo.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bkrpxpzd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163arwrjvhg.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163zhtxdzhs.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163edixroif.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163qxtgpxve.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163riyvwlzp.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163imxzuwwp.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163vfnssmvh.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wrayvbdp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wautmqau.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163tcodtxnt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163rsztisoy.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163xwpcumne.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ywseyyvn.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163fwtirkch.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163igbdgpxm.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163usdhqmul.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vkzwynaz.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163bocdhnua.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163iolsnfcy.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163sfzzxwyw.html

time ./run.sh
来源：http://www.sxryk.cn/163adppgnmy.html

================================================================================
来源：http://www.xuanzx.com/163vtjogijg.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163gojpfvwl.html

================================================================================
来源：http://www.aibaodan.cn/163tfazzatp.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163izaikcpo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163xzciyrfw.html


<!-- 参考信息 -->