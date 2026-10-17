外链999!wailian999！

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163umpzlyxe.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163obupjteo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163pazoosgz.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163bnggljtk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163mnddadwy.html

[Q22] 排序
来源：http://www.sxryk.cn/163fsdkaxob.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163fstfzgtv.html

[Q23] 分页
来源：http://www.sxryk.cn/163gqpxxnys.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163papevpre.html

[Q24] 去重
来源：http://www.aibaodan.cn/163mkdlvqrz.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163txhpfcie.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fgoqehug.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163zfgasccx.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ppbnfcpr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163pxaqvmdg.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163rcohycva.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163zviedecg.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163waiftwjk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163uiqxvily.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163lniaebqw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163nwyolqsd.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163gxxxzebu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vpryaemp.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bhbnlcza.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163shqmfmup.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163lpaogkdw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sgbpiuga.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163yyxupbhc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163apqnwpkj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rxmblwle.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163gouwvjfm.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163uronhdum.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163aedqypkm.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163cngqdftp.html

[Q35] 内连接
来源：http://www.xuanzx.com/163wnoduiyy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qhrhczts.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mehfnndx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163nbhtuxcn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vfyhjcky.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163lmprojjn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163psfdsave.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163durtqhor.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163czqtuldk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163rmlzezyu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163bgrasgks.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163zsjzirvo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163hsgasxpk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163vvhnnfjb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163uhjsgzyf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163pislspfh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kkyspvvg.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163xwatoiln.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163htpopvxh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163zkxsiduk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163cdrbvoia.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163dynvaoaw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163thwezzcp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163fejkkgbi.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163vyeecgql.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tgmbllau.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hhvjfyhf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xpnahnsh.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163rfpivobz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163whkpamcx.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163dxmbfgec.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163opctcdfe.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163sjyhnuod.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163twusuzih.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163tlmzltaa.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163qmfrcsww.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163nvfgpzbj.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163rxcgcyui.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dobbvhqz.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163nbzfyqyc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163nymwdaof.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163sjnkvhln.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163cqmoxmbk.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zuitxirs.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163wvteweae.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qzxafugh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ayqlvjsn.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qarursga.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hbrloscf.html

[Q57] 行号
来源：http://www.xuanzx.com/163xuxcwiev.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163cziummfn.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163jhlliquf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163mlqkesoz.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163fbkoodjw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163obgtuybf.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163upoejnyp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ixhhhwwo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163jfzaqgug.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163teimyowq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163udsethjp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ehxebzkt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163undcclze.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163npsiobty.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163baedkmqx.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163huvfnawf.html

COMMIT;
来源：http://www.aibaodan.cn/163pkckkzsj.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163iatrdrfn.html

ROLLBACK;
来源：http://www.aibaodan.cn/163uklvkzpt.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163cctcnetk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163pwugfkhh.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163wwnspcxl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163gertltls.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cbzbjcnm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163tkguzwdy.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163utbzcgmh.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163fnaciixm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163bjatrtah.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ceqvsjta.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zwanjlnl.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163qokuiwor.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163abhiysnh.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163elxzykdz.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163awjvakvq.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163yrrtffqd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163eoteyqzh.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163hupmycub.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163kdmuoluw.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163xdwvqdlo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bnmxjwko.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dqdhrlnk.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lnjiiyvw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ezzhdnlc.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ybwdpecg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163qmgnsosz.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163colkexvf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jighelvv.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163mlmgdvyw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ntkivhjq.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hawfhdgo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jrkingqr.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163skcwhxyx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163levgeuwu.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163pckkovda.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163mvikqwas.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163fsmjirmw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163tkensoss.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163bwysbqpx.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ewixszgn.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163tcekahmr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163fhaipxwm.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xafivgko.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163gsyhulbh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ahrrjtpj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163nyggygso.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qbdsocbx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kehhvwqj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163mhacslfj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163yzgkqusg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163evevscnb.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163uancmejq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ulygjwvt.html

================================================================================
来源：http://www.xuanzx.com/163mbpewfru.html

R. Bash 专题
来源：http://www.sxryk.cn/163oelugghs.html

================================================================================
来源：http://www.sxryk.cn/163vgjiponm.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163wfsuiecu.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163evgwjhub.html

set -euo pipefail
来源：http://www.sxryk.cn/163goinlvon.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163bchlzjeb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163oiinhgzo.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qrgjofss.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pcwfzwfw.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bkbjushi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163hnwpcxwo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163whnyveez.html

name="${1:-default}"
来源：http://www.sxryk.cn/163tkvutykv.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163crbbwzik.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163idmzuszx.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163botiydld.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163pvaznfvd.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xbrmrxag.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ujrgbryo.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163cpmcdkxp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163dibdozwe.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ejdmiqdh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rdiyqfon.html

[R11] case 多分支
来源：http://www.sxryk.cn/163kejiogcd.html

case "$1" in
来源：http://www.sxryk.cn/163osuklwge.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163cjqkyocj.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163njhvkzji.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163rkfxarye.html

esac
来源：http://www.sxryk.cn/163ulvjgdjy.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163vrbxzbue.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hcvsujzq.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163hexroqwz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163anpymphr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163mynsmfgi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163uludlwfn.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163kyhhwbnq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ahgkrtlk.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163iurrovxy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163pluqzhsp.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xycosyvg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hrdeukfw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163iafjoimt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163kvqyneuj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163poyfbrbu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fxoiwkbz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163dngicjvx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ppoglccp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163eyorfwmv.html

echo "${#s}"
来源：http://www.sxryk.cn/163imorbtic.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163aqllroyu.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qdposglf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163bgjbrjdg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163vdwbuguq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163geifbpwq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163cgvvrugy.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bciystkv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hedfshlg.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xyuypkom.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163fbxdmtuz.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hmwvlsgh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ogipojju.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163qppnknmq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163hkrksrjf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163tgjnqeai.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ugbeltgl.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163owihqecq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ibkbhfsw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163adlkcses.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163dommgayq.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163jzalwntv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ewlljwhf.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163tduxdmlj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163dzyovoeg.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163akqetisl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gbqqibsy.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pkpsjlaw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163iegeyfba.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163tvrfbgjp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163xushgscx.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163trshwmbh.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ghdiapvz.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163fcxqtaqa.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wqtcfesc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163hgjdrnqa.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163wkdqbrpx.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gwgemtnu.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163jhppxcjf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163qvdnyvpi.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163eggezfpl.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163qgwryabe.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ycbdgtqw.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163riursfmg.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163irzyuugi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163iiqikuma.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ctmijqar.html

[R45] 批量删除
来源：http://www.xuanzx.com/163rlbqhqxp.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163pewlbqvl.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163eyihyczb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vrkzjvhs.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xijifzed.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163rzaufprx.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163evulctcm.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kjmfoplt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163pbmrfgfb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163oovycfgj.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163etsmhwdc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163fyhyqsrw.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163vhsjprgn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163badwnatp.html

[R52] 统计行数
来源：http://www.xuanzx.com/163onhpylgl.html

wc -l a.txt
来源：http://www.aibaodan.cn/163vphpnwdt.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163adipdcgp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163gopcvhua.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163twznabfx.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163isudzdqg.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163txucpjwm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163catkmlze.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163zxnnijqn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163oiexjwbm.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xxekwgka.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163miltsrgf.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pznsgipm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yvypumrq.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zugmsfvf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163maljocib.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163uwmaxayk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163znbmzmna.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163vycgpxwm.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163orhqvvnm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wlrfhiht.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163fszdywrt.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163zzzzkpog.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163laedclwo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163nnewnzaq.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163fkzefzkb.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wvfwkrwp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163iwvnulhd.html

[R66] 定时任务
来源：http://www.xuanzx.com/163skvyhzqp.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163puzllncw.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163vceuadkf.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163pxfzbagl.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163zqqtqbtw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163imriogrm.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pnkrrgse.html


<!-- 参考信息 -->