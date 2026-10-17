外链999!wailian999！

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163tluksuzc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163atijsbhg.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163sodlxngw.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163vfnsdcmp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163lrsnexul.html

[Q26] 计数
来源：http://www.sxryk.cn/163vnbhhele.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163akdkporq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163cmulzvjq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163yjniuchl.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163kvqpgvyy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163xtlktpfo.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163hhpgbzoj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ucqsvdhk.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163gvkhylub.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rzweucum.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163llvaqpnp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163tlzgxptd.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vvqmwzig.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vtsmpyxk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163nvcnuryd.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163bqivogoy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ysqbpixh.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jihygbhh.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163gitfxeaj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163aifiieir.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vyndjxey.html

[Q35] 内连接
来源：http://www.sxryk.cn/163urdpjvis.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ulphfwxo.html

[Q36] 左连接
来源：http://www.xuanzx.com/163inrhhjsb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vfdpahyp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163pjtulnkl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163rfgwdvhh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163qiekilyb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wjupjysc.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kdnnuotj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163qbcjlvqa.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ujbyjfaj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163rtifwkwx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qkbfqyxi.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163tlybzdgj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163kjvhwujk.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163rgwwgqgc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163fqipdifd.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163xvkuirqn.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163luducthk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163gkimugit.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dcgshocg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163haglskxw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163xwjzobel.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163wgawwuuz.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163bdbwtcvu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163smljdxjc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ixtnuugl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163akkflkjc.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163efgfbroj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163qnovnscv.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vdpsygan.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163pqgxgnvg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163nmyxvmgv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163grduelsl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vbkmovaf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163bgawbwvj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163sgnabfqg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wpxltdul.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163wysupmkn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163qytcqsbf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wdpvhpbh.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xaxozkys.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ngwkzedw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163hbjdvkpj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163pxpwfsih.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163utsbjvin.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163symgtpnt.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163rkbmwklw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163odslukej.html

[Q57] 行号
来源：http://www.xuanzx.com/163qlpiictv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163jkxudegf.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qplhihyv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163vowhlifk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163zyvfuymj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xutefvga.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163titaidan.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163vfuqcgvd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163wnuwlooh.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jgmalgzw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ingiubuy.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ikqobdhh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fjemonje.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163olaiyzwq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163dffauaxz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xxushiaq.html

COMMIT;
来源：http://www.xuanzx.com/163htajiqsg.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163goshqpls.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kmgeaybv.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163htfljppz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163teyttkuq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163gclkwhpb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163zyeyfhlf.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163safczkqv.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gczdaiku.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163oslrsjlz.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163kwqhmuhd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jsdbzeab.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ukhblahe.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ohylgwlx.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163pbohatrk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163uxmsooui.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163bieytaam.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ozbtmino.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163oalvyyfc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163bucfujvy.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163alhfmdpu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163zmmumtab.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vjhxblnv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163emlbyvek.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163luycatah.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163arvtoaln.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jgwmuifj.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qghnsruk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163gyqpbwdn.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163jaggtqps.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hrrofqvn.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163dvacvuqd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163vcoyqhuu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163drhdrada.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163cofqssib.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163bqbzlrtu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163lqkusqgy.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163yvpwqlef.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163uciwajga.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163qatggtaw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163sxffhgua.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ogomopyf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163qcidrrtj.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163rasodckp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163chrbcrrt.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163uknzgnyg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163idhgmtnj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163vtzkghmo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xlaozmyk.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163qdwvmekx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163fyqcfsmt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163tdqckrcf.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163crrnxfaw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ujzpgsbn.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163gsnbrhsx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163fxmupddj.html

================================================================================
来源：http://www.aibaodan.cn/163pwoypica.html

R. Bash 专题
来源：http://www.sxryk.cn/163kfdvnptr.html

================================================================================
来源：http://www.sxryk.cn/163elcumclt.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jysxqotc.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tvkahpdh.html

set -euo pipefail
来源：http://www.xuanzx.com/163wmfjrqws.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163cqgsxiag.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ynnxiutj.html

[R03] 只读变量
来源：http://www.xuanzx.com/163aenewvgb.html

readonly PI=3.14
来源：http://www.xuanzx.com/163iajqshts.html

[R04] 位置参数
来源：http://www.sxryk.cn/163oucjbuut.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163odledbbn.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163oawohlri.html

name="${1:-default}"
来源：http://www.xuanzx.com/163nvbevwyl.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163xkiucdmp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163xvgewlfe.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rzgytxzn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ocdwyseh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163nmsthmyx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163nqotxvuz.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163urjqujzg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163veusilum.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163yqjmddge.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163yxmkbubz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163secoxbfl.html

case "$1" in
来源：http://www.xuanzx.com/163pdmfiwtf.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163wxabjkia.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163zfwnjhjy.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163uzsbttnb.html

esac
来源：http://www.sxryk.cn/163spejzvdo.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wfomlezd.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163qkwubugl.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163xqmdvfgw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ciyotbxy.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163thdagota.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163cxhlficy.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163sfxnhknq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zizawlpq.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zsxbhmpv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163cqfuotas.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163rpremsmy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163crykmbux.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xbirlhpp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163pgxvkpdr.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163dqpusrli.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163sxtxnrhe.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ugftysfb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163iqbglkbo.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wgkovplx.html

echo "${#s}"
来源：http://www.xuanzx.com/163cqivaoks.html

[R22] 截取子串
来源：http://www.sxryk.cn/163qigvsjmw.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163fnprvnjc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163grzgwqoa.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163bvmrstuv.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163wyiflbrk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ijlgjrgj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163wrqclrjj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163fcgaxral.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lnowidfb.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xdonpksn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163xgjkbhty.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ewrebijl.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163eqvtdips.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163khsvahte.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qxcaxnkg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163iubqwbfk.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163zamtbynt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ekibouzt.html

[R31] 局部变量
来源：http://www.xuanzx.com/163rhzehpne.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163dmgieccy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163bpqncvgs.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ovrqxygp.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163lvyypbay.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163mbhwjajs.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163agcrxgsa.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163oczzvkvc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163trkfyngf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163fgedwhkh.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163nrdvaloo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163tndatyuj.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163heeulstu.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163pfdncnfh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163nerhetwa.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hwjuweyv.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qhogglwn.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163jirqxkzc.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163rkctdgij.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163nzjknkoh.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163phduubkw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163dsvryjgl.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zjifhqil.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163wetmpmhc.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163bysyujqj.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163enfyvnwr.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163spwpptfj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163hzmrfwmw.html

[R45] 批量删除
来源：http://www.sxryk.cn/163zzlloqyj.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ageniuwm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163qbwbwqwc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163mwizfzvx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163pbmsnzfs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163vhxbuzea.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163zwekhbkm.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163gcnvbicl.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163tpljpvno.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163nxcpfkyv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qungbgut.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163gcwqscak.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163qptlfwdp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ngxvywga.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163axhnbhep.html

wc -l a.txt
来源：http://www.xuanzx.com/163nmmqxjqg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vjuuezsf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vvldetfk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xqkwjkij.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163yqcsbemu.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163kizfaibl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163zkwamtfy.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163iantdrvg.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rkxnoxvj.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ifsynnda.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163slfbvynm.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cnkcwwlb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163owljurjl.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163lepxndmy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ceecfhvg.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163gxmmxcvm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163atitnobx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163jjxphrms.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163owgjdvgm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163rwpdytss.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163dunxmnyv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163wyaqsdjm.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163bkylnmxh.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163kqefdgax.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163qlwgamin.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wpqfhxjr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163cwuiflrb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163doeqwbzu.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163gltkzhlz.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163olkkkmiq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ddrfgdmr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ycjwwbrd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163eoonsfnw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lqebyiow.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163raqcoggc.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163vnmmzhee.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163xlaxadvz.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163hlotdfcd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163dbxgykyl.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163eiwgnajf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dpfnjxvj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163lbzbxyym.html


<!-- 参考信息 -->