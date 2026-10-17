外链999!wailian999！

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163dvqukjbn.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163hwrxcndu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163clhlwhrl.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163fekebhsp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163xqilnnhh.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vkbbufoc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163neigrphs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163dyzahfxo.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163levhttcx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163umtxlrcd.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163tzcpzeer.html

SELECT * FROM (
来源：http://www.xuanzx.com/163wrapbwyj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163jafnzwzi.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163izmtldox.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zasoxpmi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zsayvcfc.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ivrggseu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163nsescche.html

[Q37] 右连接
来源：http://www.sxryk.cn/163iaorhzbu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xciplzcn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163kkqhbnou.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163iezjitgc.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163lijahkkc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163nllufnko.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163uinrxwoz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163azrlwzlm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163pvjwrhfr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163lgdixkhr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ziqxtuap.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163hmpkxooz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kvjbksrw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163exfjlzak.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163stfbyzqi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ghxsoewn.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163vriesbvq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163pipaiaey.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ucqbbglv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tsuixxxs.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ikhktzup.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xwbttyij.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163rczbrbbh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163obxzjimd.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163yrcevlxs.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163hndcyovt.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163aofrhvpz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163rokcqumq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ktstptca.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163vqwpgeup.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163nielvdkt.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163uzzgsjkr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vpbvvkxc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lwrfmyrd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ylmmnvbb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163nqtvpkgn.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163qtntflex.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163kfshzdgm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163kimlthez.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ykcarbop.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qoyotxmv.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163bbmtjyvo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163jcvitzvp.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163mtlkqxdk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163hjztctqk.html

[Q57] 行号
来源：http://www.sxryk.cn/163kjvsqmjh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163kckomacu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163uhjtndui.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qxaqprln.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ghdouybj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163mpbzyumn.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163thbamfgf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163imbkvtvo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163jwqpkilr.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163cpmtatae.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163suacorrj.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wwnkaxfi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vokoiqxt.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163wmqvfddk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163bkftjqrj.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163kdkyqzsy.html

COMMIT;
来源：http://www.sxryk.cn/163shyfadfq.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163xwaafbva.html

ROLLBACK;
来源：http://www.sxryk.cn/163wdbnhkml.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ftcwpopz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163gbpdduaf.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163tiicdllb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163cvmtdaen.html

[Q68] 保存点
来源：http://www.xuanzx.com/163jmjuhowa.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163khjooztl.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ujlvzvdx.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163otgxjmdf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163qkdloucm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zxoucyfv.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163qhfnjyue.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cuasqxci.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163whcltyea.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163cjzhijzk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163uhyzjfsp.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163euncztro.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wtyutuuq.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163twxlschi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163znxwrqfw.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163nculxdgz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163bbkqlmho.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ljiapmwy.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163eumyqoag.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163kqrqsfcj.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pzhjubjj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163lmnxghqt.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163teongkbq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163xglizedb.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163gvayuuwy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zwacyzjh.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ulrfzhmz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ulvaabhl.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163jfbkigcy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163okdgeefg.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163mttpdaqb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163bsbxvcno.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163tttlnnfb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ukomhlcz.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163kvbsbrbb.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ciesvltb.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163nnyrsizq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163zwfyjowx.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163rldkinnh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163yygofmea.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wgpfffym.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ufbotdok.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163xjtdkjnv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ibxahubb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ckqfpxnd.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jvztjtvk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163lybmeayq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ssxxccep.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163fywvcjyq.html

================================================================================
来源：http://www.xuanzx.com/163ryzsncku.html

R. Bash 专题
来源：http://www.aibaodan.cn/163aofyrgad.html

================================================================================
来源：http://www.sxryk.cn/163sfmpjpzr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163dmreoclv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163aieiozzh.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ictmtudr.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163mmoerzjf.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163fpqddknl.html

[R03] 只读变量
来源：http://www.xuanzx.com/163omfqdwbm.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163pkoleafe.html

[R04] 位置参数
来源：http://www.xuanzx.com/163exiqifna.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163owpsplmg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163zideamat.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163gbzigtib.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163vhdkelju.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163drhtvpow.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hmqajcsn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163leubpdid.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163skvvezsd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163rveoxmiy.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163mwvsrqzx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vuqckkvj.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163vllqrpyl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ziokfefc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163rxejyhph.html

case "$1" in
来源：http://www.sxryk.cn/163jqdqxdae.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163fkecvung.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163sucwjzjk.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163vdirempc.html

esac
来源：http://www.sxryk.cn/163aluzgojy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163uwectewl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163nrdrxrwr.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qzjefqnq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jtwjlean.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163mqkmyrbl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163dfmbdcvt.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163pdnwlfpb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163gywcxndb.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vrzsbkjw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hermozvj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163jqpkfooq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xdzyppzn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163duansmjr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163kwzqlkyj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163mhkksfev.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163iahionom.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163cwfdzpot.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163gsqwlyki.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163thgwcegy.html

echo "${#s}"
来源：http://www.sxryk.cn/163ukwgerwu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163fifptvfl.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163egeamvor.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163lrirpyfq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163vrsnypan.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163gxicpnsx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163zfnuzfat.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163uvptodos.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163axptnqvw.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163cpchbooz.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163bhvtgmun.html

[R27] 算术展开
来源：http://www.xuanzx.com/163tczbdskl.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163vtbroequ.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ztzfmtqs.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163aaoeaapc.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ktqpevhw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163hcvkqsuf.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163hkqwitoz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163cwrdrwmc.html

[R31] 局部变量
来源：http://www.sxryk.cn/163tbbwfluu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163jxiqsqex.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163bcffemvn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ujfdhbxa.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163azprlypj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163kazlbjsf.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cvsxyurh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jqeghxud.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163dczbvhmh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163jvwogqlx.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ivpyoazy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163nghgxzrq.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163iubgxuzr.html

files=$(ls -1)
来源：http://www.sxryk.cn/163abgatezn.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163yayosfap.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163kyxqrkif.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163xsiurduq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163swsrzqcr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163gkjurcyr.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163nwhlidkx.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ywrotkdv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163wsbhpavo.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163gfsmbjpn.html

wc -l < a.txt
来源：http://www.xuanzx.com/163cgvtcfsm.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163eyipykpw.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163yfsdkxkl.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163nukcrwtk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163tericzal.html

[R45] 批量删除
来源：http://www.xuanzx.com/163mnqscoqa.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163wajfpnrh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163llnlqacz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163xqupviue.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ehqamzon.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163lnztcknm.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163acubozox.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bqgdovsv.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163qquxvepx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ntcpabgd.html

[R50] awk 求和
来源：http://www.xuanzx.com/163odcaldvf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163cdpgudch.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nnkcashn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zlghwpud.html

[R52] 统计行数
来源：http://www.xuanzx.com/163sltdwiwo.html

wc -l a.txt
来源：http://www.sxryk.cn/163dzywtbsr.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gdlyfinr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163eywsasme.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163apcuyezm.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163pgylbchx.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163caipcutw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163oqrvjriw.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163sfjvffet.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163onlaybwu.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163uzarynav.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xiykjmqf.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163holskzwd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163mnouwfsu.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yuxtnfzl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163zxqoiwup.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163qjvdjeqz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dpdyawvi.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163shgzdgah.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163psctmukb.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163vobdlblf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163lsseuozv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ywzuksde.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163lowztmqx.html

[R64] 结束进程
来源：http://www.sxryk.cn/163jeolbjhx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163tgarucek.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ivwmnomz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163gmzdvadb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163uwgsqtwn.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nvqipxwz.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163cifsxcuv.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163fbzkxnyw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163udyrpihj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163obidursf.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lirozbgp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jgwdiiit.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163gkfkmekg.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163gkjmgskp.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163dkolmfmr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163wdokvomc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rvshxefn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163jrbbyile.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163xsugjzhl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163qzhdcefv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bniypiph.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163nrntqkoo.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163jcwxvmah.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163bnvzbpen.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163mqxzppfe.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163izczwtut.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ckyuuitt.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163dtzebtde.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163apxkpbiq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jkwydgjj.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163gscvhehg.html


<!-- 参考信息 -->