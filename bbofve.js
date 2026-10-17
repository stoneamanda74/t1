外链999!wailian999！

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ipnmljbo.html

[Q22] 排序
来源：http://www.xuanzx.com/163qqdcyymy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163uvwfoegy.html

[Q23] 分页
来源：http://www.xuanzx.com/163tmskvwby.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163jykkflfi.html

[Q24] 去重
来源：http://www.aibaodan.cn/163bnymchxp.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163smjqqxsm.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163vmcniqud.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ctvbkycx.html

[Q26] 计数
来源：http://www.xuanzx.com/163ebtfqlaf.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163adbuihxs.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163drbrvfyz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ortqlngh.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163usxxwnrb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163nfdmsaih.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163dbpzkisf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ufcqlrul.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163seojyijq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163neilebei.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gxsmzrao.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163jxgzibch.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gjyvzsdf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ihzavaur.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163hcdlhcgb.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163quofsheu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163gcskzbua.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163jodtkedw.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163idefjwcv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ybpdmrnx.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163yrlmcjey.html

[Q35] 内连接
来源：http://www.xuanzx.com/163cwazjuzh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zzhavvcb.html

[Q36] 左连接
来源：http://www.sxryk.cn/163oibcutnf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163opidqqvx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pylnkjrf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163pqmwshtr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rjgyygfb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163rxndymjo.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163amsixmem.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163gzvwrwnm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xpnamykn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vtjowifi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ecyvlqav.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tlhuylrn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163qzwxmoob.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163jhqoavog.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163tkxmdtfz.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163aolnhtxy.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163mvenusnn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ldubmgjx.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163wyeehkio.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163zvtxajcj.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163vlqqkcli.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163cclpssoy.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163uvinfllu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163oqiouoqa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163qqnjatve.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ipepzgly.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163bjulinlr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163blbfdszx.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163dzeyylwg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163aeuzzqdd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163mwdoclke.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163yfuohdnk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163wsbcsagp.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qimqluis.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163fulfdffd.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xcwethbg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163dkbicaul.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163mdexjuyb.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163tgemmpno.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163mxzwdpxa.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163igqkgwjq.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163unccgeki.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163qybxhsan.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ihrntwpr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tlgtvzuv.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163uoczbhug.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163qwnaxmmg.html

[Q57] 行号
来源：http://www.aibaodan.cn/163onopzmnq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163cxkqouqg.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163bwgbrgzh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ndqsxqiu.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163koebqpkj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ffpztqla.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163klyhoxnr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163bdxyasch.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163pbbtqtei.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163hviaeanj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163sryklkes.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ftgojdjs.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rylzqhpr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163okdhuxdk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163lwmivbsb.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163eofplgtx.html

COMMIT;
来源：http://www.sxryk.cn/163xtpyubqa.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163llhmwbut.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ptrfgycg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163tpbdgelk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163rgyhyyiu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ogbjpmvo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163efzesstc.html

[Q68] 保存点
来源：http://www.sxryk.cn/163bilvliph.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163tofgnowu.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163nfkijgsk.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163lbhdmzxe.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hvqnntvu.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163idekneda.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163rddrbgtp.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163evkhbrpz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163txeyuyqo.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163rhumscja.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163gedafnaq.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163thamoubt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163keiscmfb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163qionaids.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163sovdcntf.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163tvkqlmfv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wumowkvr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163bzzgnpwv.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163tnnavbkb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163uourxibj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ohoaatvu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163bsthkzus.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163rkrankry.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ibzheauk.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ghlheczz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163nsuwneih.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hhvqdtsu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163phphqwzb.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qhoeyisn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163rwzxebmn.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163daffjroi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163uokekrpf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xdxqgiqs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163zwmsmpep.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163yoaeqckd.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163nbykdxyv.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vkmicdll.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ihtbfmmp.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163psmscyzi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163giuwoygl.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163gcfhjepe.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163wsjphjkd.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qybwyjvg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ixpnvbro.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163kmuwgpuv.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163kdlgqjlr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jqimsbzm.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163dgsyfutm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163efbzusyc.html

================================================================================
来源：http://www.sxryk.cn/163xwixnjgn.html

R. Bash 专题
来源：http://www.aibaodan.cn/163zdgvxkrm.html

================================================================================
来源：http://www.xuanzx.com/163grojciei.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163zrrhxopr.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tkzmlgag.html

set -euo pipefail
来源：http://www.aibaodan.cn/163fmghhhqx.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163tashwwrh.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ihpwljpq.html

[R03] 只读变量
来源：http://www.sxryk.cn/163twzuakum.html

readonly PI=3.14
来源：http://www.xuanzx.com/163mvjprehj.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163rkbxbqdd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163nbcpzecb.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163zawmpqrq.html

name="${1:-default}"
来源：http://www.sxryk.cn/163qpmkaauw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163pbyceapt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163nmqnfdwq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qpxqnxra.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163uhczmqvl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ykczqsqa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163pwohrnff.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163apxpmhxy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163sigiuvqf.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163kpegvfln.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163linrrcjc.html

[R11] case 多分支
来源：http://www.xuanzx.com/163vnymkmdk.html

case "$1" in
来源：http://www.xuanzx.com/163yuksqfiz.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163pudczbwk.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ghcgfpba.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163snfuvzdk.html

esac
来源：http://www.xuanzx.com/163oveiyrel.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163dsmvyqwq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163sihepqyq.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163rarhjase.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163xnryhcww.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163gtplproc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163fociequv.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163vzxxzvnc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163rwwwkjxi.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163emaoeeqi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fccypvwo.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163noodlwsx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163cjftntlt.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163obqdvwjz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163revsnjbo.html

[R19] 数组长度
来源：http://www.xuanzx.com/163sdlftetu.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163wbsultom.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jglcytmj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163pstvxnyj.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rhcpteci.html

echo "${#s}"
来源：http://www.xuanzx.com/163rlvteuah.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bwkzdesd.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163jdzixvie.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163xxplvdok.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163qdivojqn.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163nqapewbj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163sjaqgzrh.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ywzgbaux.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163edsnskgq.html

[R26] 命令替换
来源：http://www.sxryk.cn/163uuaszfvo.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163falaklsp.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ighrpoey.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163mijiplpa.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dstakejw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163aqkqxynp.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163lqmngmhg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163zetjdlth.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163qylnvshl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163svwtrppf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163jdhiwurf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163zdrmckci.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163yrqzpzhm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ufmyjyrn.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163jxwnhzse.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163hsumiato.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ljxlkjls.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163omrxrzgq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163xctwoxjl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163vajoocbx.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163cwjybydd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vhbzlhqq.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163alpcvjgy.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163xezvlool.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wcljsisy.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163hzwibbvm.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163feustccz.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163cahvppti.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163tabgtfex.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163fgakqyww.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ruoqxbpx.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163evpbqzop.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163dipdrqqn.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ithdlyps.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163trgngets.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163bgtarzna.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ektjuifs.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163gidjgxrk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163lcxqfiqo.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163wqewuzul.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163yrdxtqum.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ttuvgpsf.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163vktymfrl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163plahtdnq.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163oibvdtpa.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ucsyotuu.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163uigumevu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163uzyjbnrx.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163iuqdevyx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163fyvrdiad.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ejfvuckz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163yycrmtlp.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163evqhlkcs.html

wc -l a.txt
来源：http://www.sxryk.cn/163wlorzlky.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163plgqwvpu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rozkdkqf.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ackbjlns.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163fgdsvmby.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jyqflrql.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163yvqjwbuy.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hmnnxtob.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163wuxfhnil.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wtaytizm.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163lfbilfuk.html

[R58] 下载文件
来源：http://www.xuanzx.com/163pvvsivxf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163kqgxfiry.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mabxjrjo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ickflymt.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vetumvpr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163kzqkygaj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tlzkeecv.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163cfcwojcp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jgfnfrjy.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vrqkdpeo.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163pgwmwaxy.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163rnoadqem.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163jwffjjpt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163njzkiueh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hhpxshfo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163vbxcaswa.html

[R66] 定时任务
来源：http://www.xuanzx.com/163chlxaawf.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163kjkvgpdh.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163amnlmwck.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dzfofljo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jzxjutkz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163qtwnughw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mfgvbvss.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163suaeecfw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163qrquciih.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163xwvosukw.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163khbtsyse.html


<!-- 参考信息 -->