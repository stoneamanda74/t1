外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163pxegpauh.html

[Q26] 计数
来源：http://www.sxryk.cn/163ebvagudn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163awxwookj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163zggizhtl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ozeizfws.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mglswnza.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163gbtbrkqp.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163vghjqqlp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163qjmyyzxw.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163dvqmscid.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163onjqggbk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163mbjdylsx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163qqwsmlpf.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163fftppnrb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163igyfurij.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163jmdktyfx.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163cntnbrqn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163iwyavewy.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163gvjcrfwp.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ovjklfej.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163waitnnjl.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163cedchrmx.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163dmyrzcfw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hnowhfgp.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163frnmqbgf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163llakrwhc.html

[Q37] 右连接
来源：http://www.xuanzx.com/163zyycuzvf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163utaomqey.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163zbsqvslr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wpafycgu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163zqfwwzqu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ynbbiahk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163woafitez.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163mizuvaop.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163zrzmhlws.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ffvbxsow.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163blucvhzv.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163oiqharde.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xzmvszqh.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163yrgaeaif.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163fahfyqzz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163idacirsq.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163hjtqvyjh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163lqlfotyg.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163srbkxadd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163voymrlxa.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ompyfosd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jrmsuwtb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163brjnkzpp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tfhmjovg.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163sykzgkwj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ynsmzxmm.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163zagkkauo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jdteyeas.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wnuuqlvt.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163jetzpvjj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ahdrudzw.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163oqewuzng.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163wdsroier.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163glwrceyh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163lapigoct.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163olghwgec.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163vynmqomy.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163trvleaff.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xzwtwhny.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163rejdrzwv.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163iwejisfq.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163lwogkcql.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163mzeouuij.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163qwyllphy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ihglnmzi.html

[Q57] 行号
来源：http://www.aibaodan.cn/163rqswbokg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163mwwsszad.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163uuocimvx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xvmxgize.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ousyjtjf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163cbfueqtt.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kuonzemm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163vysonzgd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163htndgezg.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163artdvjdp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163tdpwmckc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163xmjapfsw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vyfhmkqq.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163porycawg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163pdakzctc.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163hfjqtfpx.html

COMMIT;
来源：http://www.aibaodan.cn/163zrjqcmzs.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163pgyvzrod.html

ROLLBACK;
来源：http://www.xuanzx.com/163ufjxerpd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ucnnekay.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163dwtmepme.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163skkcszyj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163bkqxcjny.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163yggbdevx.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163rqxffbwv.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163juozgmnh.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163dvklyulu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163dxcsahrr.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163wyauanas.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xqawksar.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vjusvmmx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163uwqcfkfj.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pvwgeraf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163oitzscdq.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163eypmdumb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163aoiapxgb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163lieyefpe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163yvtfidor.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163dmzwxkvw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163agirasjp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163wtpbhzgn.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163mwhslayt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ukjgwykj.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pgtxsysk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nfggosaz.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163azjfhllf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163qwvbkppg.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163djhnfgyz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wynhduxs.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163zmuynlsg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ifmvwnkv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ibxppjyf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163cemwdqir.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163dtuncdzu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163dyegrcic.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163serwaxqj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163opeafwst.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163qmmnnrem.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163wzobmzhs.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163zvxhakcp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163peoitzlu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163wgcikdxz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163pbircdub.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163zacqklxm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ievudffb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163cpvbjvjs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163iqvchcsl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ipshswkf.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163yxcrgppb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163tarcrusb.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ibycjfwu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163febttkfu.html

================================================================================
来源：http://www.xuanzx.com/163ukzqxnix.html

R. Bash 专题
来源：http://www.sxryk.cn/163ddritubw.html

================================================================================
来源：http://www.xuanzx.com/163ukushnav.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163hwlduern.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163igcogtia.html

set -euo pipefail
来源：http://www.aibaodan.cn/163eirsowuf.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163dwzazawh.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163qfaoosxv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jxteowsz.html

readonly PI=3.14
来源：http://www.xuanzx.com/163lbpolgpm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jqtkygel.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163dmcfruxp.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jcaplvoh.html

name="${1:-default}"
来源：http://www.xuanzx.com/163sspifcks.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ovdotipc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ameaucrc.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163viaxwfvz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163etmwruvv.html

[R08] 数值比较
来源：http://www.sxryk.cn/163pwxwihub.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gutiaefb.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163akaxwchn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163bhiaqnin.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nnzpxtmx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rratiypi.html

[R11] case 多分支
来源：http://www.sxryk.cn/163soqxbrzl.html

case "$1" in
来源：http://www.sxryk.cn/163pjjnwnjd.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163eyrllkhe.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163jhkmecmr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163txbmakup.html

esac
来源：http://www.sxryk.cn/163neoceavi.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163rqzibfeg.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163vtfamwto.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163xwvtuwxv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163nmavedjf.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163bmadfvjm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rtchwfza.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163svjzenmw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zkytbdtr.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163yismtynh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163aaeaoabn.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163kpomfsie.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zpeqgylz.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163knbghure.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163djwrplky.html

[R19] 数组长度
来源：http://www.xuanzx.com/163frjvlrri.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163zyqqtcrm.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qrnpjsej.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163yfjxwwia.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163irwdniqc.html

echo "${#s}"
来源：http://www.sxryk.cn/163ydbcnkiy.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ibwlovoa.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163lzbplgrb.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163nhkzyhpk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163hsdymzit.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163pjzesgok.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163pjqdmhpj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163fqzqmtkt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163llmccjrl.html

[R26] 命令替换
来源：http://www.xuanzx.com/163dfyyxfbx.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163hpuhlgqv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gijcvgjz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zkonefmc.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163elczlvug.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163buepvmaj.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ztgdfcql.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163yxqgeftk.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ekpldxhf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xyithske.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163jcewjzox.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ldkctesu.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163uebrgvlw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rvmfexms.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hehyflxx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163vkgmlzcg.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163qthcaoyh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bbqvvkqh.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163uuucfdul.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163uenuhztc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163rvtqwgue.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qwwhhiah.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163uourztzw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163phlxmsqb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ajuwhuba.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vyzldhkd.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163dbtkidft.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163fmgsrtwn.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163eqynambk.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163elisqoam.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kriglakm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163asazkvhp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163coiayqpt.html

wc -l < a.txt
来源：http://www.sxryk.cn/163qkpwkagb.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163lflbmtou.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163qjaszscd.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163horxgdks.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163pwplowvx.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xktyiwca.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163luskkagx.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163rykkntoc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163hkofpvjg.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163xjbkroix.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163etvxwnrf.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163igggpfad.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ypnuottl.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163lnqoqjry.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163jrclwoza.html

[R50] awk 求和
来源：http://www.sxryk.cn/163doxivjfh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163uenmmhvk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ogzzwwxn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163isycsxqu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163nmzluqqz.html

wc -l a.txt
来源：http://www.xuanzx.com/163nfmfpotr.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jyrhsmrl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ossztegv.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163tqfwnqzq.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163lmehbakx.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163iyrjpbdi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163kbhdpdbt.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163dohnttil.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ictlomus.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tyggifrp.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163pevcncaw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163vobbtfuk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163aolnckiq.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163spgtungn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wbsdlmfh.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163cmhnpglf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163nmlimcqk.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163iainywfm.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ecivpugc.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163jldnkkeg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163avwytsvi.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163kpzysynw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163igwurgau.html

[R64] 结束进程
来源：http://www.sxryk.cn/163pftqnldb.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ilfypgmu.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163zgiwehjc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163qtojzcdc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ipnsodwr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ynmsvktm.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ezbujaia.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bbqwnjkx.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163okvyoefv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163iwazrcog.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163lmtocydt.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163kzfldhsq.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163yxnqefws.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mqmnohjp.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163slionzzq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vbplvapu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ttuzgren.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163njytnvxa.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zeonxdyn.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ucmhxgiv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163uaacqilq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163togeziqr.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163rxlsxquv.html


<!-- 参考信息 -->