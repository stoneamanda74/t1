外链999!wailian999！

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fptsrbam.html

[Q22] 排序
来源：http://www.xuanzx.com/163xscevivk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jkbskcmt.html

[Q23] 分页
来源：http://www.sxryk.cn/163hdkpwwke.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163wbfvpexv.html

[Q24] 去重
来源：http://www.sxryk.cn/163bufcyhuz.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163twwraubi.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163lnfcbbhn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163kukaimmt.html

[Q26] 计数
来源：http://www.sxryk.cn/163babootve.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mvqlbmkj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163irnqprxj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163bnikrbdt.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163rqiccuei.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vcmnyovd.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rguybwnv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163pxmzivnu.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xvxhpoac.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dmfchunx.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163arrsskey.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jlghzqji.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163gcyndqli.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ygoiwjpe.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163rkvuzjes.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163orobqyru.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163wsjdlkfo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163vikmqgwv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163yavnigwd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163zdflnwsp.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163lqlchimi.html

[Q35] 内连接
来源：http://www.sxryk.cn/163tlyycsst.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xjwdmman.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163txttehgg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jlxipxor.html

[Q37] 右连接
来源：http://www.xuanzx.com/163zxpyhhpw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163mfxpyqvv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163dvxwemrp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163vcncfskb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163vpwujpty.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163kqzmuatl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163fotvqizr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163jyiavjly.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163eanqkgkj.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163bbkfyvob.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ichduexf.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ttpmulhx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163agxbhpwf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hivxpsij.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163gceftlpp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xciehajx.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163lbccnofm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163qjwmfras.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163xjvuzwoi.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163heosmtpn.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163kwhisqlb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jhalrhol.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163mrokhwgv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jjeibjik.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163bgbcxyip.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163vvvidijh.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jicmxirq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163zkqvigct.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163lkkjkhha.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ysouvule.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ecalqxno.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ifmbcznu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ugztndbb.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163inzoeaea.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163bajuhkpc.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163keeilmur.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163tatsmjcw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163jwneurnw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163eevemucb.html

[Q54] 清空表
来源：http://www.sxryk.cn/163dfyaeqfc.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163orbntuai.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163opksidzc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163vuekwnvs.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163lmfugqgy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ibzpirti.html

[Q57] 行号
来源：http://www.xuanzx.com/163kmexygdx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163fptkykun.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163eibymnqc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jnyrldck.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xdsbdjte.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163kzybnswu.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163fttrythf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tgoijetr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163yjorizel.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163bsosnmtl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163pehgrawd.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163nhfawvor.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rdvdbumj.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ncltifix.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163zjowhskl.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163pekzlzbw.html

COMMIT;
来源：http://www.aibaodan.cn/163urnuskke.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163bjhuomzg.html

ROLLBACK;
来源：http://www.xuanzx.com/163pyjhjweq.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163kvwcaitl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163nuobqeya.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163eefvrzuw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ocgqpgzr.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ogsusntt.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163uopemdui.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163adtghfas.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163czflhqwd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163mchzeqig.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163pdgbhkyq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163cinwlayb.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163jgjajfsb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163gerbcwey.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ybistjpv.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163scabeqvs.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163hcftucym.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163umdjsozl.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163pzulfnka.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163yspdhbrw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xyklwyek.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163nwykhtpx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ptfzcgtp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ojoehnzg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163gdnaycni.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ikokghlv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163iwqhonsl.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163wqkeckyh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163dhczeupl.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163xoxismrb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lirjtidj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163blmxaglb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163kbkfytwe.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163cpcykmnd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163mwgnfqce.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163dgposocb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163muovefgr.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ymudughc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163gcckgnsg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ajzomsrf.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163blwvchuf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163svjmdpjg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163uwmgoyuz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163eroqwlup.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163aketvrot.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163rtpcasbz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xjwsphfy.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163rvhyskra.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ebuzgyee.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163rzpfthha.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wvginewo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163flmwmbki.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163bfswpenq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163wkuzyzlk.html

================================================================================
来源：http://www.sxryk.cn/163qtpqfkyt.html

R. Bash 专题
来源：http://www.xuanzx.com/163ogthlrdt.html

================================================================================
来源：http://www.sxryk.cn/163dzzruqge.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lsiswxiu.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qphexpqo.html

set -euo pipefail
来源：http://www.aibaodan.cn/163gtdkeyhd.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163inccobwf.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163jojttjyd.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ejinlynp.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163dpiosswp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qvvowudd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gtvmzqml.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jeirdsis.html

name="${1:-default}"
来源：http://www.sxryk.cn/163vyvitafj.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163rlhlsgyc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163cfzhgmvi.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xsefanqb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jxorfsmj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xzhqncsa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163utnwyuwj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zrzzqtdr.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163lesyamcg.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163rhjjzppl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163sfdhxrgz.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163upmxbmwc.html

case "$1" in
来源：http://www.aibaodan.cn/163ycvtwzwr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163loklnstp.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ocumqqpx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ajahvgfb.html

esac
来源：http://www.aibaodan.cn/163glajnqin.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163txgvkrew.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163yzdkwsbd.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163wqumgvkz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163hgzumkkv.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kagsdybj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163cwjyahro.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163vxjmpocr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163xkogkurs.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163lhlqjuaa.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163agyyuedh.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ripzjcfj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xylwlxng.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ycdfpdqz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163obvdodra.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163vzfqpdqa.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163skgmvmpv.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163haltfaxm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rsyyhujo.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163asneudyu.html

echo "${#s}"
来源：http://www.aibaodan.cn/163qpiorulb.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fhrfdwdc.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ieocqxbv.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163xoioekua.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163tuaplxin.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163juexpqle.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ljjzvfur.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163khiepmpa.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163kbqolomu.html

[R26] 命令替换
来源：http://www.xuanzx.com/163pigngfnb.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ndourxsb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163dwfgivwa.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163elqiofzh.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163quzbohwk.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163dpxbsgpo.html

[R29] 定义函数
来源：http://www.sxryk.cn/163jiavgsus.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163aoheulsp.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163xhvpjujh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163tmxqnbqc.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ascbetuv.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163eewswyuo.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163jzsiiepw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163rdyuseoh.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163bkbszmgr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163fzcqfxig.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163cffnovlq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gbwcfqiv.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163yzvqxnlq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163exphzrec.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163xtnbwscf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ovbimtzk.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163azyinbrw.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qmfzenzc.html

[R38] 管道串联
来源：http://www.xuanzx.com/163kswglkpp.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163lfgyfkoc.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163vqfwxdav.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163rgalsspm.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163notbkwul.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163noscwyvb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163dndzmeuh.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163hufnjmel.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163zwcimocg.html

wc -l < a.txt
来源：http://www.sxryk.cn/163njdvkjzr.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163bfajrzum.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163onvvhkwa.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163juolrrax.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163rrkxdxxe.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xvvwczsz.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163iivltcko.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zzdiiywx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163nxdbyrdf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163trzsbgio.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163totwmhwy.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163rruewjbm.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163dcwxhvbv.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163bjyeewqw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ovwkeioi.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163rdghkjep.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ehxghmuz.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163yzzpyvam.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qosybjzw.html

[R52] 统计行数
来源：http://www.xuanzx.com/163oxifryce.html

wc -l a.txt
来源：http://www.sxryk.cn/163zzdfuixd.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163hlqmwxpn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ilwfoucg.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163uyakixtk.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163gqdyiwwm.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qemqqtwd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163otbaknay.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163jhsrlyik.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163kfmjazqk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163sutumbuy.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163cosakqzp.html

[R58] 下载文件
来源：http://www.xuanzx.com/163kdzwltfd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163prmxeeks.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163coqmltzm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ncdkncho.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163igzsclce.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163clwmxtsj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163zumkxamx.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163hdtdgeej.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163hcdjemui.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163zdtjlsbr.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163svqvsizp.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163wpafidtz.html

[R64] 结束进程
来源：http://www.sxryk.cn/163lycfnjuc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ilwtidsa.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wlttflgu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163lybiaoki.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gkvwwtrp.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lywudrak.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163cyqkyfqp.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wmznwnqb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hbjtqgvz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fszttnbv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vfbsgkyh.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163lxsvcwvd.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163kbcecptl.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163sxjbrknf.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163yuezbeer.html


<!-- 参考信息 -->