外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163uqcbwccx.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vctdaaby.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163jrmhqdmr.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163siypigwe.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163paxkqfgr.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163fyqxvewq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uhxgroue.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163edinvscg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kmpuvwrb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163fjcmkhcd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pqcgvahl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163jdidgaae.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163xozrvpzk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ddzsbsbc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163pkrzvgnv.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163enptktrb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163mtvzdoeh.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163qdepzfca.html

[Q35] 内连接
来源：http://www.xuanzx.com/163sdfuovyq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163edrmmtbb.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163nafljnwk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qtllczhe.html

[Q37] 右连接
来源：http://www.xuanzx.com/163vwgdtglj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163sitthmvh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163echrjnzu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gwabrkaz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163cfbabbtd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ypifijup.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163rjmomrla.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163nvpbdmsk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163pizcstjc.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163qmlubamf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163bdfomerb.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163izkaocgq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ienxlson.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163opsqggfk.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163egrmsxvz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163pqfrpgqa.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163kwpjfoxy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163cpdhadnc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163xhyxaupf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163uoqrzapt.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163kiptwlvp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163slgjsowq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163unbioukj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jzeuznos.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ryjyzjzt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163mpyyvhjy.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xbcimpud.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163gxkfkymu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qhwipmna.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163oxswqruy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163uttjfccy.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163emcunlhr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163shgjsjzw.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ljmkkqzp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qkkzxycx.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163fsopgipe.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163mphtphpd.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163kjwvsvdh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163enyflfqa.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nwinzqph.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163lcgvtbnw.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ejiawhfa.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163bwgeyhip.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163wlxefqdl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163gpcsilol.html

[Q57] 行号
来源：http://www.xuanzx.com/163ujonseco.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163gtuakjld.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163tyzfrcva.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163adnrocir.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163zrlxttxq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ymjtvxvx.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163isoznrrx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zycngwtq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163tqmvktix.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163lbemukgi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163mfziddhd.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163icrwkvaw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wohvdssf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qewmkidi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mntrritk.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163oiceikwr.html

COMMIT;
来源：http://www.sxryk.cn/163ktwsrvma.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163wcqfklvq.html

ROLLBACK;
来源：http://www.aibaodan.cn/163msvwejno.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163tanbfdfk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163alikddcx.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163qwgzyfoy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163fiqsvnpl.html

[Q68] 保存点
来源：http://www.sxryk.cn/163fbqxcrlt.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bsfhecnc.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163pwjebdxx.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163jrbifkwv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163brdkpqxk.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163dxysotlq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zblypoag.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xjcpslzm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ialjlxry.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163zynbomck.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163pjsewllj.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163onzxgwui.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ovzkjrhq.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163idcgqhji.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163gahpqwtb.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163fyzuxkyc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163bpnpcugy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jbtrxhsx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ewhcywcw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ovpqwkcc.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163vxzebxyg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vzwyoqnk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163dgzjlpzp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163wzvimbyc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163engkptac.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163gclrwhxy.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ctuhajbf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163dsiyvivd.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163swanatda.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163lleeehnr.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163musutpjb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163dpvtcusp.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163xytxmofx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163kozvfblw.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kbuhrkhz.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163csazadtj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163kejaywlk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163sqcylayy.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163znomrroz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163jamvuaww.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xvlcxqrt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163pgpwrqyk.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163undkrwmn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yngbrizy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cmjnubnm.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163utampmzo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163fynmwqfp.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163oouhkxma.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163aztavrym.html

================================================================================
来源：http://www.xuanzx.com/163qhoztbfk.html

R. Bash 专题
来源：http://www.xuanzx.com/163ntuwrfdo.html

================================================================================
来源：http://www.xuanzx.com/163vhbutgph.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163cwndqjqg.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163pqlamhus.html

set -euo pipefail
来源：http://www.xuanzx.com/163zjfvggxz.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163pefwcttw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163luuhcvwx.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jmqbebhm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163wymswfza.html

[R04] 位置参数
来源：http://www.sxryk.cn/163imixrhjk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163nawgzscv.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163tyisxdfu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xtubccho.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hlxruadq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xfkzgvzh.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163lswepnhz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163qdahygjo.html

[R08] 数值比较
来源：http://www.sxryk.cn/163sayfoprx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163aqgzkpyq.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163hldpjpdx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163qbywvosl.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163geglxkjq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163linbmyvl.html

[R11] case 多分支
来源：http://www.sxryk.cn/163guwnrkzc.html

case "$1" in
来源：http://www.aibaodan.cn/163ggtzccqr.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163srfabpwj.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dgqbeibv.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163zezpmcko.html

esac
来源：http://www.aibaodan.cn/163dnknghfw.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xjhpmxfv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163jbahkjlh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163oecuocnb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163lesmyrbq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163qnohkzxw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rduryzkw.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163gmxewcxw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163fjosnabh.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163belroach.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163miltgiin.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163irpxozbq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163slytbqoe.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163cxtrccta.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163jpgfcdtq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163lwegtnff.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163wplqruub.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qomrcacg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163sxwkporp.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163twpbqkub.html

echo "${#s}"
来源：http://www.xuanzx.com/163uuhbntgs.html

[R22] 截取子串
来源：http://www.xuanzx.com/163tvcfwteg.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163jhpsmcyq.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pembnkye.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163cjvvtcbe.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163sldstzkz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163aoxxkvav.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163qwyuhbbs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163mfxlrnzq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163yzhsufrj.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163zqfxoogc.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ctlgisah.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mlrizmlu.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163gllgrzkr.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163bsfslecw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163akzexwyx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ifiqcskv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163bywcdxas.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hvusgfqb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163huoetjoq.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163efyaloar.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163iyarubdf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163whbzjzod.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163mhtaledu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163bvotfxuu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163uxieymrw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mwopccxj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qszddope.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163selmmjea.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163dvixhhqa.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ayibomtj.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163kwvijfxu.html

files=$(ls -1)
来源：http://www.xuanzx.com/163nfownagb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163zqbjxmft.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163bxodlmcb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ypedudds.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163okbljhsg.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163xppowvts.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qqjnrzni.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163yrgeyaxq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163dbwwxdzx.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wvsmtnfs.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jjubzxib.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ryccbnih.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163kmvplyka.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163trjbjqag.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ahsoovct.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zmtoxfcz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163telqsyho.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ssqsyvjp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163qvvmugwi.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163zsgrnlqu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163mfkkhhcp.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163iiomxwpm.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kkoccisb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163kjnejbat.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gmrukvvw.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163zylpcatq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163tzniuznk.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dhgjytpu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vewrjzbk.html

[R52] 统计行数
来源：http://www.xuanzx.com/163swestiwr.html

wc -l a.txt
来源：http://www.xuanzx.com/163ezvewjms.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163qlxxzeyc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163sprirhue.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163aqtuxbxv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ilrgbkle.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163bdoxkuif.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jinmjyru.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kuyvuurw.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ndydfqdd.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163fdhfvako.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jdoljzdj.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ogajlfzn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163bbrdigvv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163atkvqwnm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163hkwnqkqo.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163prydjhdv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fwlcdqsz.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163crqiusru.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163iuhuzqwk.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163flzyxpsk.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163qvfclfia.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163zxqalxlt.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ortvdwty.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ivaryhsw.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163vyazpuwk.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gfuljroo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163pkmsnnyi.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ewdqcieh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163oivtqbak.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163npsjufnc.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163oeohhvez.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163gujsfxjp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163czdxulqy.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163itqwfqcc.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163zfyymfzb.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163zihoelmr.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163oubnfeex.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163tmluqqip.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163flewwdnu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dhtebhzn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163chltcefu.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hrewcbew.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163nzynnhfm.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163drujzeht.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163uaikxaho.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163tuqsabpr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163fmjetmbf.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jluatnge.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bguqmrvv.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ruivyjzi.html


<!-- 参考信息 -->