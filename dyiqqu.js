外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163bvuyfvnl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163xqpyvvik.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163aguckcsf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163oblxbolp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163unvlhobm.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163iljucccm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163fjjpmuiz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163lftsgwic.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163cbzypojx.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ycxerzsy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pbefkrrk.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xdgkyoxo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163tklvmkqq.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ktaphhtf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wcnascod.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163gpxpsbdb.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jiupuopu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163kxelymub.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163zdstjejp.html

SELECT * FROM (
来源：http://www.sxryk.cn/163apwvyvcq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ojblgzkh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163fvovrkzw.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163bgkqmcuo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tmpeloej.html

[Q36] 左连接
来源：http://www.sxryk.cn/163xmbrecqw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cyyetkkp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tsrvcjsx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163vagjykwx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163amlruidf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163oofwqroi.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163rdlbifjh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163dauthnyh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163uctgccok.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ygnveifj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163usfbgyhg.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163rvsreqjv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163bqlrtrbz.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163czyznkgy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163hgxutllk.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163wjtyfjln.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163awkirwiw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163qvwffiay.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ogtbqutg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163okldewba.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163mksvwuuw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163gqdxstru.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163igpuykfz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163eyqpwafr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163wxecdvow.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pofldorv.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163vrblodar.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163tcigsinp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163lsayptqh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163mgwbjqha.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163loombjnd.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163qhyhrfby.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163xwbkottx.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wnrlozum.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163qfhvharc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163abrvhyeu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163suojtvua.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ababupnf.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163akldsuot.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163llvscraf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ffdamywe.html

[Q54] 清空表
来源：http://www.sxryk.cn/163suyyziav.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163utmnsrto.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163lcdkyhln.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163fhhqxhwt.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163mfvpheai.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zalgqcyb.html

[Q57] 行号
来源：http://www.sxryk.cn/163lphpeaib.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163gdxjfebu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163lvxbjjnk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163yjfhhjbb.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163qxyvhshx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163apknqtde.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jedfiila.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163begyvjwv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163hkflrhhi.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163lbbditbn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163njtyvewr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hzgychzz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rayyatzo.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163wtfmnxsd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163gnjpyems.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163qulbvoci.html

COMMIT;
来源：http://www.aibaodan.cn/163zstrtokt.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163gnylwwtt.html

ROLLBACK;
来源：http://www.xuanzx.com/163txyzcnme.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163rkhtofda.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163sufsgjsk.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163gvzaisnn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rczcpcpb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163aydpzkwe.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163hmxtjvff.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163adzzttsb.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163iaaixwxh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163abiklhts.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163bvtbcqey.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163msoxioas.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163pisyroqf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163agtdueey.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163pxzmtzrp.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vojocsrm.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163brzqmqsk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163fktermlw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163esvykrhq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163jzraveme.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163zpzeasia.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163uhaptkzh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163icnvurzg.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163aoqgzhsg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lvksyizj.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163nkvchvtk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163gkfpekho.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ojsrrkgj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163mdcaogbn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163svnhlxrc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wxdpqkap.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gynjvroa.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163zlwlkrli.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ukvrvmpk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163nrsfucnp.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qdnxqwmo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ulqbujpp.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163sqyetlyj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163uflivhpt.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163winzhrcr.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ujprkdif.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163klmsldti.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163zbrbxddg.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163uvubwjmx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163nudgyftz.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ejriquxi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163fiqyvqmw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163caggteze.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ujqnewhg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163oapsxeqv.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163twxofqmq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163rgswwgok.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163obpedwed.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zxdzkeyt.html

================================================================================
来源：http://www.xuanzx.com/163gvnkpymb.html

R. Bash 专题
来源：http://www.xuanzx.com/163jmezccxy.html

================================================================================
来源：http://www.aibaodan.cn/163pqefroyt.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163hfdxslgs.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163bcbggxak.html

set -euo pipefail
来源：http://www.sxryk.cn/163rmajdmbc.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163dfolhvxj.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163aqioocol.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gkqemshf.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ujdhkffx.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hwpodcqx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ipuxyclm.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163whqmaavg.html

name="${1:-default}"
来源：http://www.xuanzx.com/163girdfelu.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163zucqglgk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163nmobkvxb.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ofdwuhcf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163mqdyziyb.html

[R08] 数值比较
来源：http://www.sxryk.cn/163rsshfmqf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jwdskziz.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jvzpukwf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163uqaitfgd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163pmzvlfzm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163uvmxqwwm.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qzhkxtgo.html

case "$1" in
来源：http://www.aibaodan.cn/163ehmquzat.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163eyycdxaa.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163qkaqaqtw.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ilpzqsmp.html

esac
来源：http://www.xuanzx.com/163whpocbhv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163bjfwwphs.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tbbalpql.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163uglaxegy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163tnvsfkgb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163vijuovyy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ynibiqzi.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163mlcygvku.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163crodyfan.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163enoivaep.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163gtqwxdqw.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163kbplltes.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ibtnerqe.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xuzdylih.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mcnzeaok.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163spftkleg.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163nmkxldmj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163foauoqdp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163hgtvayxn.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rqdukgir.html

echo "${#s}"
来源：http://www.xuanzx.com/163flwyosgx.html

[R22] 截取子串
来源：http://www.xuanzx.com/163vxjnjtbj.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163vvjajvje.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163tfgqmfeh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jokybsmk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163wvnqcuxd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163eyamphjj.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163odrgouku.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163upmqlgva.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163eeiqsmgu.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163lgavbfkr.html

[R27] 算术展开
来源：http://www.sxryk.cn/163wslotbyc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163obxyrxve.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163wrmyqvmb.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163xdxoygax.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163pkuqgqza.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163gxhuadaw.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cwgiljfu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163vfruiwfs.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mdexqmci.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163wzrouwwi.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163xkzxyman.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163dxxbcksu.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163dqofazli.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163tlieesac.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mwjfrnic.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cpdwlhcz.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qbqayklo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lqzspbdz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kxgiukxf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163tpmwrnkb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163spwmvfpf.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163acaejqna.html

[R38] 管道串联
来源：http://www.sxryk.cn/163jofudmgl.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vrelqaxs.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163nlnpioqs.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163yziqxeqh.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gqycgcxm.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ngnqqdru.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163uuagftcr.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163sdhvcgca.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ofegkkgo.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vdsgxddg.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163qzianrud.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163xsfssdaa.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163noexavvk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163podyfghg.html

[R45] 批量删除
来源：http://www.xuanzx.com/163uznlklij.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qtrakcof.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163qwfemxnw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vvfnpdcc.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fvvoadvr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163mamhkjmh.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163lalcvxbh.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163foiweuuo.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163uwprndcj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bvdwnylc.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mgwblpns.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163aurwxofv.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163yqtqqewn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qyrjtgrl.html

[R52] 统计行数
来源：http://www.sxryk.cn/163paqgdvhs.html

wc -l a.txt
来源：http://www.sxryk.cn/163giphvcrb.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163fwmtzthg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163dztireln.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ldzkwvag.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163nggchlzy.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163bqliyael.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ughkjuzh.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163cuzzxnxl.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163wawyocld.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163hktysell.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163rtypsvyd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163rfawvsal.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qhatixzx.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ibgxkmql.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ucusnvhf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163peslzjxy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163bzglptev.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163swhmzakt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163fpfuuuzo.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163cycovqsp.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163fbyzbcyt.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163eyeexvso.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163wqwkmhav.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dtjsusno.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163zijvxbfc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163puzrlyrb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163fiegltpi.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gvbzqcsr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163urrqfnfr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163cxkjbfpw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163isyuvohq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ndnkzkkc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163qxdffqnt.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163mqtuvxyi.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ngcezmae.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163zrixcqee.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163safuqctt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163reopmkuy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163biscszqq.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ktleoato.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dtvhlxab.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dqkelknt.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dsvckwpy.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163iwxbgope.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163godpuynj.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163tgcizjbd.html


<!-- 参考信息 -->