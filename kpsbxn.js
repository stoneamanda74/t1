外链999!wailian999！

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163tnzahght.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163zvivlojg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163squqibum.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163sbaxdpdh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163tsanxowv.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163bihcaeay.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163fsojqhou.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163hwdklqpv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ddbqheib.html

[Q22] 排序
来源：http://www.aibaodan.cn/163tqlccxsm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163jceiybwx.html

[Q23] 分页
来源：http://www.aibaodan.cn/163cseqvige.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ydlafqig.html

[Q24] 去重
来源：http://www.xuanzx.com/163nsswwvtk.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xkqlwajt.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qdptlimg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163lwwxymsv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163eyxsxxpz.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zcwiatyq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163qbrfrdtn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163lqgpkoou.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163tworirmy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ealtjujl.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ivtjfgrv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ogqgojvj.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163sfxfyqbd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wlifqllp.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163krpglckl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163zprmsgmb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163jdxrgsgc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yfiqizpb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163oromlden.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163pzjvgnhl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163wqsxtbyq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163yxsfrvyo.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ooioyknu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163emfmmisv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163aukihnsh.html

[Q35] 内连接
来源：http://www.sxryk.cn/163vvfljkvg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zbzhoide.html

[Q36] 左连接
来源：http://www.sxryk.cn/163itdbfwcs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gypzerky.html

[Q37] 右连接
来源：http://www.xuanzx.com/163cwqowrrn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163lgilcgge.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kkyqxcpx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ccqesyiq.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ijryhifh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163rgdxdccz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163bwxxluiz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163peusvqkf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lpxagjrj.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163fulqzsyj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163kvzpzdut.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163roadjdki.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163qrsbcsrz.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163miwkdffs.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163yogqzrec.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163pycfzdjg.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163qxoctnnh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163wrhmlcgi.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163jnrbfsfu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163rhvyljdm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163qbklpeix.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hsttdbcx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ibzrxjed.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hqwenbtr.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163tmhmuyjh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163frjahjgj.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163vyyncyjm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163pwqcgqiv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163vxusavuf.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163khqgfwjf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163kzaavfgx.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163geghtpal.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jjdfbxdm.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hmlpktal.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jkvlbiub.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163xwmlxnrv.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hdctvhjq.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163aqvjwefj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dpjdmjge.html

[Q54] 清空表
来源：http://www.xuanzx.com/163lqogedfw.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ayobkcga.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cfadgxjz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qcfaowbp.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163tosijndd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163rlpowdih.html

[Q57] 行号
来源：http://www.sxryk.cn/163yyqwtrkx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163yrpslxbx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163bcfgvelh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163brgyovqk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lbtydvvu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163twqchwzn.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163viauyuol.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ehwdqzcd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163pxfgwwkh.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163fpxthiez.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163fjghzqhs.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163wijakxuo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163acjtpaxy.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163dczaokrk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163qfqxxrbl.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163gyxpxjuv.html

COMMIT;
来源：http://www.aibaodan.cn/163xwdgciby.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163dnritsev.html

ROLLBACK;
来源：http://www.xuanzx.com/163vedijqoi.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163wpszbwll.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163udeszred.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163sixbayhj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163nvixtmhb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163pnuouiiw.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163hfunkrvq.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163dnxuhbrw.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163qjexgkal.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163qkfilodq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mibzapwu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163kzrimvnz.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163zxgicwyd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163bvudmkpw.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ducrvbzm.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163rjuicvks.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163mgxfsnui.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ohifvaon.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ocqvxwbe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163pqrrcvjf.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lfhmmoqt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163exmwuhxc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163rwbtpqci.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163pzotwgzb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163cnoswoze.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163azeratzt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163xjiwsqdn.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163vdyvmnon.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163itxgqupr.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163xfbmhdkj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163kytzqdee.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163zffksapv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163kishquxq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163wsdunveq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163uzoehwdv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ysfhmsbs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ftjgwvod.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163studkvrs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163iktwnlet.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ovmbeqpb.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163iqovlktf.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163msphdhrm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163tbscpxfl.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163pztadwrm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163udiazbpf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163kcrrrfhi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ullkmwma.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163sgjhvkss.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163txfmesii.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163eqppubro.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163mjfxqjcj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163tehxxutp.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163wwfpzmmo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tfuvcdtn.html

================================================================================
来源：http://www.xuanzx.com/163xfotsipe.html

R. Bash 专题
来源：http://www.aibaodan.cn/163pobcxmpc.html

================================================================================
来源：http://www.aibaodan.cn/163srnamdnq.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163uaxcvble.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ydwqdzvb.html

set -euo pipefail
来源：http://www.sxryk.cn/163puhkssas.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163htpcpmzs.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dviaiulo.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qgwizynp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163bkdphjrc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163pcfaqdpw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mhjbqhne.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dxaxituy.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163objhyyam.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163tjcbgovm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163bhsutgvs.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163edghdjyl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163bpojuhpg.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163apriclsv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163sjsoztqr.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163fstxsseh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163szmsaujy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163dowsuref.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163mlnnihmu.html

[R11] case 多分支
来源：http://www.sxryk.cn/163tuoploer.html

case "$1" in
来源：http://www.xuanzx.com/163dszjmndi.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163fvilxbgi.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163cydgvasm.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163pqdbcblu.html

esac
来源：http://www.aibaodan.cn/163idbxlyfv.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xllxebkf.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163stlpdoji.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163nbmnbbvm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163izmoctjj.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163anioijxo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163tjuunqmb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163pbuwrqec.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163fcywlejg.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163syltieit.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163raqiqxvc.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163umkfzild.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jpwvucbg.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wdccjhff.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ywsvptys.html

[R19] 数组长度
来源：http://www.xuanzx.com/163lcdycovx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163nnhpnkdv.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lhvxovot.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163nimdueiq.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163kqvoczes.html

echo "${#s}"
来源：http://www.aibaodan.cn/163apwoqxmx.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ofvitgfw.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163acvdlitd.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163atawtvto.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163cpamnozw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163oozdpzvd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163teelwnko.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163pewshfvv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163gpkfitmv.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163nntdppxe.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163arpiieos.html

[R27] 算术展开
来源：http://www.xuanzx.com/163qjijrimn.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zbjxgodd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ykwfyvhw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163mzpabiba.html

[R29] 定义函数
来源：http://www.sxryk.cn/163gpklqczd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163znjoxnbm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163otqqeypm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163qktjayfp.html

[R31] 局部变量
来源：http://www.sxryk.cn/163mhpmiwqf.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163vkgvowys.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163omgywcor.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163vursflib.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163hrkuapun.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163wvvoxuzr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ftpkckrg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wzkmlrlh.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ptkhsyhn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163jkpuveso.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163lxsuvmzs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lfuowjbx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163nvmmufxq.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163wslexzhg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163otuhgtxx.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163knkwstqq.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163fccgdvzk.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ncxpakry.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jicpdmav.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163antwglbc.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ktdbrbzb.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163lyphkgtk.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163taitqwwj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lcbebzeo.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163xsgcgxrk.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163icuztzab.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163bbqjfhon.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163twidario.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163diabatpt.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163yyxbzsiy.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163bupebyxi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163rvzmvnzi.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mqdropcd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163sqgfmsjk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163onwtsxcz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163quyvjfaw.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163aqbacoxw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gwcdjmpk.html

[R50] awk 求和
来源：http://www.xuanzx.com/163saquoipo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163wjimhinf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163gxaprqyx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163oouxjqui.html

[R52] 统计行数
来源：http://www.sxryk.cn/163uilhtcxa.html

wc -l a.txt
来源：http://www.aibaodan.cn/163wyhnggyb.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ciqgpvhp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163aotxephw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163svveilgo.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bpiqnpdm.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163flrexdgd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wsmjmral.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kyxevibj.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163phcsmlhh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163oaqtplid.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wynmqrej.html

[R58] 下载文件
来源：http://www.xuanzx.com/163osmtutwt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163btielybw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163suqhewlr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163acqndvqs.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163gmigancl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163cqrmuood.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163lzmzdnio.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wtrseqme.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163pejkbswl.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163cpxnblsy.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163phrzltck.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163aqfrrpzo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163fbxqhuzo.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163btcvsrwx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163cthozvgq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163orgiqdgq.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163htprwtsb.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163pmnubump.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163xhsjcsxl.html


<!-- 参考信息 -->