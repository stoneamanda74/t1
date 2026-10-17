外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163xkidublf.html

[Q26] 计数
来源：http://www.sxryk.cn/163jihkqzhq.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hyjjcjfc.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163bmbnwqtu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163urdschpf.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163gxfuilqt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163dfllbhjz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163zzvszouw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163efdupdni.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163dthoewqz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qqrkbsym.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163irepvevr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163pylrsypa.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163rhuevygz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163etdprsaz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vzoaejtr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163gaunywqx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163nguehvwy.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163pilyzuec.html

SELECT * FROM (
来源：http://www.sxryk.cn/163reincajw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163spwvhgam.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163lhiumvgq.html

[Q35] 内连接
来源：http://www.sxryk.cn/163keveeioq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163hnwrdcdv.html

[Q36] 左连接
来源：http://www.xuanzx.com/163qhxcyraq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ekyqwtui.html

[Q37] 右连接
来源：http://www.xuanzx.com/163rdwvqzab.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163atowxywx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163xujosucx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tymngalx.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163vxtnesfu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163bfvzarcy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ahkgrbek.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163kppsfzic.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163dufbvhku.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163dvzxznft.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163huubdzku.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163lqsnznyc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163wbgeauec.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ycysavab.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163wjqnpxxp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fdcchkxd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ueiwvizv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163rwshqoha.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163cqatgkia.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163whemvgoh.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ebtcphrz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wgqxsdwj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163szyxaofj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lavhermk.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163eczrmpia.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163cjguzqyc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163agcfzidz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163rxncfqkq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163odzxdovm.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163mepugqjc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163cnkzzoom.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163gzhrtmqy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163jcyppqbz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hhzsecys.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163hidozbvk.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163cvvtpbbq.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163cqqjptje.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163auifbnrz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163sixcnkds.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jzxaucwt.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163kbysniih.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163vhnldrzb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163noskqanj.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163hyxgzppu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163hpjeargl.html

[Q57] 行号
来源：http://www.sxryk.cn/163xphipihc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163wgaywczz.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ppzoiiea.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163lslfvbdh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jflyregd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vduudupt.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ypacnnyk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163nteuqxtq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163fsdhjjbp.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163azzxywme.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163gpjjyoym.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hyvkrmbo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dpfdqovj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163zbecyulb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163fbnwpmdf.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163qpyouzmi.html

COMMIT;
来源：http://www.aibaodan.cn/163xtynzuvh.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rutipkpi.html

ROLLBACK;
来源：http://www.xuanzx.com/163nhqpvqeo.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163sfyotrkx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qzwdwsxn.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163dwvxqsob.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jofarclt.html

[Q68] 保存点
来源：http://www.sxryk.cn/163liwcucjy.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ixvsusre.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163tbjcxmhh.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qkdqcree.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163bvoycvsj.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163czwjfmyu.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163mhysqvxy.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cnamdjvn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163mwzogass.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163bqgxntgd.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ypltqzfl.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163aihnhcmd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163hhmcxvby.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163iovygqvu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163dpsqlltq.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163buzhkwdz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163eddncdqe.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163kiruirdb.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163qdlwklfx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163boxkaykz.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163xdknuvku.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gtyrfsfb.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163mokygcit.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163wamdlogm.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163tblyqfos.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163vpdpezhy.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163yrnuykdp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163uruoifsk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hksolezz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163pltbeiks.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163wpfzbmhl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163qdfxfyxj.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163hvqtmbtz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ftdfqzmz.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163bnpfysjk.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163erjyrqcu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163dsgjwgpu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163rdbebxbn.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163wecrxgpf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ctopxjsk.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ryrsfbuy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163fjmzwblx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163qepxmsxs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163swhwknmw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qcjkoohw.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163xuysjdvc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163jplpczzn.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163zafkgsyq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163gwwsfeon.html

================================================================================
来源：http://www.xuanzx.com/163msdzkxio.html

R. Bash 专题
来源：http://www.aibaodan.cn/163mrsvyfkn.html

================================================================================
来源：http://www.sxryk.cn/163wdwwictn.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163saqqixge.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163okwsbiya.html

set -euo pipefail
来源：http://www.xuanzx.com/163xukcjcyn.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ywwaytkw.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163jyevssmp.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163sswjaukk.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ljdjhkkl.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ttwaytxh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163unqdrlxw.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163iattmohk.html

name="${1:-default}"
来源：http://www.xuanzx.com/163fwzbdkal.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163pgjhsyzj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163byjpuxuy.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163cuoyyfuo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ubdlbghv.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hzpvaniv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163addehgbb.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163izskyqje.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jvqqkirs.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163svbloyzf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163tsxmhrws.html

[R11] case 多分支
来源：http://www.xuanzx.com/163bxvtakar.html

case "$1" in
来源：http://www.xuanzx.com/163fsdrwnav.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dmxwmmpz.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163otmnpklp.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163royepqnf.html

esac
来源：http://www.aibaodan.cn/163gpzpzsvi.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dgpqjmii.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tpljbxnw.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163tcaygjsn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qqxjbtoz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163blpopeaw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163trwnierk.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163mnljqddf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163njtgqrif.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163vcryyghv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163lmmrjony.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163jebotcxl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163kwhcqzrt.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qdgnmeiu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163leynrjrl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163umbooktq.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ifihixfp.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vvsgmjcq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163nbruckln.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wnqrjezl.html

echo "${#s}"
来源：http://www.xuanzx.com/163nbhrmbjx.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ewnmwdtf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qpgfyltu.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163mcaclkrz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jezotyzt.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163emexvghq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163auxbdtia.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163apihvoty.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163avcitamc.html

[R26] 命令替换
来源：http://www.sxryk.cn/163otoowbut.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rafoeazc.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kvehoaie.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163mbnmbzcu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mwqwxpvp.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mpncyiei.html

[R29] 定义函数
来源：http://www.sxryk.cn/163rqdcnfbe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163abosclnw.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qlkjefmp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rjrcfgne.html

[R31] 局部变量
来源：http://www.sxryk.cn/163nuvyoydd.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163dosrnntl.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qljdetyi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163idywgwea.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ggsiieux.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vehvnmsc.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163zctbixpu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163shpwiufo.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163bmalezco.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163okhrknyc.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163mnrwjjzu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qubdjkak.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163iczdzebf.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jjikzavt.html

[R38] 管道串联
来源：http://www.xuanzx.com/163vsarbssc.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163zjeajspj.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163igkmvsqz.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hqahpoef.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163enqiyuxo.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163kxfhqmzd.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163gjdvhqrh.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163edstvkjg.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ttohnujm.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163yaxhdwky.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163smbhwibw.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163kpsvarzo.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163aiertrbf.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ikgxyjwp.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ddnooqdj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163aceoabqc.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163chwdchkt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163gnynacis.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dlfrbcsf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ryinfmom.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163acjcgmru.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163tvqhvmww.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nlcjnxde.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163pfvmjoyv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163epsilvgh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wblwiukn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163kumticlc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163rapsstap.html

[R52] 统计行数
来源：http://www.sxryk.cn/163hgomigfu.html

wc -l a.txt
来源：http://www.sxryk.cn/163uqgwdyvr.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163icgxwcvc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163esrvsdng.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163egzkrhzj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163upsztfvb.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163oyhkftwu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163czdvyxmz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ymwbarnn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163rzxpxciy.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163vldfydpv.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xgwlbuvr.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xkqffirg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163nmgsrrwp.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163jkwxzwat.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ocbnmhjq.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163cpihybgz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163aywuraax.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163rhuhsfjq.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rwqhhmph.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163rkhdsgjf.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163mljjtqyc.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163foxcokhr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163egxijtrk.html

[R64] 结束进程
来源：http://www.xuanzx.com/163uiaxlphh.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vhqiwzaw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163krxnzkcx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163swtyoony.html

[R66] 定时任务
来源：http://www.xuanzx.com/163snyjqmuh.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163eazceqhr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163exvmxrzp.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nefnlynr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ruhdgisb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xhaujdne.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163fuqdeprn.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163eobyrsco.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163jmvdbvup.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mcvbmslg.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ennxukjk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163grdlcfsc.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163sycjtyxt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163lvsfcqvn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163gagyynrd.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163aneexmiw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163vdqetabw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ievfovxi.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163fyqzoexp.html


<!-- 参考信息 -->