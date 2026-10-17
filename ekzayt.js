外链999!wailian999！

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wvcptsgh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ufsnnens.html

[Q35] 内连接
来源：http://www.xuanzx.com/163mxhluemh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ackyetfr.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163vawygzsn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vnilzooc.html

[Q37] 右连接
来源：http://www.xuanzx.com/163idhlrnem.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xiwfioog.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163gkjnvcwq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163aznaekqx.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163apxtghro.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163btxdmhmx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ywnmlmfk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163sqfayiru.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163rqrweuay.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163oaxajwcd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163drdmwkmx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163fgsfofbq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163vsccrjxw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163mxnseuyz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163upwhjjsv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ljnsavds.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163bkhbirjw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163yfucufgr.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163uftezfze.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163lplhqvgv.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163uvmhbzcv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kgnmmxbl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163uzwyvpuq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mzxzinsc.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163xvsdrvdz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zeliymzy.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163gheycmiu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163exdydfau.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163gjtcjltt.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163uxwlzcid.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163zpylzipm.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163tmrxbhev.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163akpkzcce.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163zbxgabpz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ereqhvju.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163upceqlrd.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163snnnwnrn.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163dtbbzjhl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163wuuuqobz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ectluinv.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163sqdghqzs.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163gjqmwgmx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163mevflqdh.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163rwgohndv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163hkuqxddj.html

[Q57] 行号
来源：http://www.xuanzx.com/163avecguyn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163krrcgaoi.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163llyzezlv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qiztrhpa.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163adycbnfm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163epjitzuk.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tkyjxegp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hoxcxgbz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163bpwfleqn.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163unrronwv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163sexobjml.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163urxakync.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mchvxhdi.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163tcwbayfu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163othwtoce.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163nutjaggc.html

COMMIT;
来源：http://www.xuanzx.com/163mikzawjg.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163crtwbzwu.html

ROLLBACK;
来源：http://www.aibaodan.cn/163wcbfzazc.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163fyattgmz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ytzjvpbu.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163yjwixtue.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zrqlysfd.html

[Q68] 保存点
来源：http://www.xuanzx.com/163jagrjzid.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163akvkttow.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ylcadpqd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163hinfsstd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ijedwmtg.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163qawoxqkw.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vthevtxr.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163jhlaqdbn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163pbnjsbxv.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xdvkyyfk.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163akpolguf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163emtaaeio.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lfxudcsr.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163hbgyewvb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163qwounmvq.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ivqtucej.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163fagtfsqb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163rbbgngoi.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163sbkhknty.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163owpwkixk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163oadoiqyt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163mcaetcks.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163mtodimxk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163cgjapbvm.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ffyucycs.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163pqteqbzy.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163xpvlacrz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tmdfwlzb.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jepjvosl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163occhvcoj.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163wyeomeaj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163szumgwyx.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zvqnpdst.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163avpptqbr.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163gyneseyd.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163mvojmshf.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163yvtnrxwj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163mdozzniu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bbwqmoxt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ayyghcpn.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163kdmxcilc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163pjmgnqay.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163cptuyorg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163igeglkrd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163gmtlamxx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163mkzxyjox.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163tgjagxum.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163lfboiopu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163lacoacsg.html

================================================================================
来源：http://www.aibaodan.cn/163hwsgxsvp.html

R. Bash 专题
来源：http://www.xuanzx.com/163sgnzvzgt.html

================================================================================
来源：http://www.xuanzx.com/163vkigwsdg.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ttmfgzbp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tidzpmko.html

set -euo pipefail
来源：http://www.sxryk.cn/163ptojisdf.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163sdqigory.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163loiiskwr.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163dmfjvbtu.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zxjztzwu.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ekfmqfcv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163hmopzxtm.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163zoiwioao.html

name="${1:-default}"
来源：http://www.sxryk.cn/163gcryzfos.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ivzjnqcq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163svbgyrxo.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163snqhzcgj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kpngrlon.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163jcokpvge.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vfqwoiis.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163dtykjohf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163hgtxhdyt.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yvbcivgi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163yvlvgqgd.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ndggtcpa.html

case "$1" in
来源：http://www.sxryk.cn/163ubbzlsps.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pcqonkvq.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163yqpsqjbe.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163klnzncko.html

esac
来源：http://www.aibaodan.cn/163paixethg.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163jamxwelv.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163wkptzvzd.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163tyyijnsg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163yfkjuupt.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tvgmzhyh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163pnumtvny.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163guafcbwv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163cvcujjgb.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163fwewflca.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qmufknaz.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163grxnjgex.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vabsyxtt.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163mmlnbnfx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163onnpaxsv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163rnmqabop.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163fvfcbffp.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163sactxcrt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163bhwtxlxt.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163owcqejdj.html

echo "${#s}"
来源：http://www.xuanzx.com/163ixfwieaw.html

[R22] 截取子串
来源：http://www.sxryk.cn/163urdwcgem.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163agdkjtpm.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163lvmtvynj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163dbnybfjq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163snydhpyg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163umlurslk.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163fkjnvqwo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163aubucypn.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ejylgwtl.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163mjgnndht.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163wuuzalkw.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163snerndso.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ucbzxrpz.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163chaatuje.html

[R29] 定义函数
来源：http://www.sxryk.cn/163mstximlo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163otusloim.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163sceceuad.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163vdbyzzdt.html

[R31] 局部变量
来源：http://www.sxryk.cn/163xzfyayff.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163hhugfkdw.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163hgzvnbtn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163kynhhzfz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163jyulbskw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ofrxhuyi.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163snkypkjw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kvjugzjs.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163eiliycsr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163uaknfiwi.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ficyzhdz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xjgreulz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vibzyggd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163bnqyipxq.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163xfnoepym.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dcrggxmf.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163oztyqbra.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163pubuiiew.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vlapursi.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163mhhvrbwk.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163cnyawxpn.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163igimxkpk.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163wieswnte.html

wc -l < a.txt
来源：http://www.xuanzx.com/163rqphozeu.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ylojlppy.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163qgvzfdpb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163jenzchbr.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163skujngtb.html

[R45] 批量删除
来源：http://www.xuanzx.com/163obwczhks.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gldemtbx.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163csticlcc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163wgxclrij.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163eaheltfj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163vxlzbcsr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163kyvmyngx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163qeestoqz.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163yeqzwvta.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ftzyiuke.html

[R50] awk 求和
来源：http://www.xuanzx.com/163foekjgva.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xfzkgdpy.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xnybnbuj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163eossyrab.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ccgqicxz.html

wc -l a.txt
来源：http://www.sxryk.cn/163ntaqxcdj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ydfunlpg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163peqigpix.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ydysclym.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163sjrzjiro.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163qijcjfoq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163lajmfcaj.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163mehoneyh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163nqwcijfh.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gsyboixn.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163uikwzjyk.html

[R58] 下载文件
来源：http://www.sxryk.cn/163woeouogc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nfxeobbw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163qblfevjd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163tccgvatn.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163lydhzrjo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163zgtsuxub.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tuaqyetc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qxsxawvl.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163lzzwaerj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bqcmqegb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hijxgizm.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rwhhjblm.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ilaqgdob.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163mndjgfny.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163jtucczmb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163egcfwqwv.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163cwgbzxpt.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163cxtcbfin.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163fglsxxvl.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vhziakvl.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163kopmicyk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cdpldilk.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163yuvcdvbj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163khgcjypw.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163oxqqoszo.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163zdqnsnaw.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ipkpswal.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pucaorgr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163eqnaucqe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163eiafnxqw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kekbyaif.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163tttfivlk.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163xqyxhjvs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163pwlbtbls.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163kcqksutl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ykraxhsz.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163nnpcmrrc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163apxilqwz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xyurgajo.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163cnoksoey.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163kkyppoxb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163zffjalrp.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163pilvcbxw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163sctyiqhb.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163gwxsmmsv.html

time ./run.sh
来源：http://www.xuanzx.com/163quidsumj.html

================================================================================
来源：http://www.xuanzx.com/163gmgeondt.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ozntjxho.html

================================================================================
来源：http://www.aibaodan.cn/163nehdluhh.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163oeyutpbg.html

#include <stdio.h>
来源：http://www.sxryk.cn/163tdeurjca.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163zvbyhvxg.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163enomhgil.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163baqvimfd.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163znnowyrj.html


<!-- 参考信息 -->