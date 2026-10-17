外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163cbkeoztw.html

[Q26] 计数
来源：http://www.sxryk.cn/163vavwdozs.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163nkzpqqeq.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ghwyyzgy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163mkxieozk.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163gzntsljk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163cktlyzlp.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163voijqfmc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163gygkxdwg.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wqkblnhw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sxwuqygk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163jzkourdg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163riwtxgum.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163llbejzew.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tgccjrpr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163bnmxxngo.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163kirhanwn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ipwizwre.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163dyypztbs.html

SELECT * FROM (
来源：http://www.xuanzx.com/163krhravah.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163bipuchsx.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163bqusliji.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163fcjorytz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vcvqlxra.html

[Q36] 左连接
来源：http://www.sxryk.cn/163mrvhkcal.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rxprvics.html

[Q37] 右连接
来源：http://www.sxryk.cn/163septesgd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163trzfcgua.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163wyetxmcr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163yjzytlqq.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qppdnyck.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xgxiaatw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163sgigwvmq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vdqomoth.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163juqvvbbe.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jfruqiee.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163krevpttp.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163lkoouvyg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ukpopaxe.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163zhaqzjdp.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163xtfrdgxh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163uocyulfr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163xqrjixsy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163igyhhfiq.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163hkjumwbk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dzwlrhwa.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163xhnzjmpk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bxtymdnl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163newcvjtg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mmhbizfv.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163nddtvlrq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163dvnwroja.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163crjtyhph.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163emfgiyfz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163vvkgperh.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hzruuope.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jowmquhe.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163zqecuizy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163wizhcerm.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163gvjavekm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163dnmkimff.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163pdzkbryv.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163qmuwmoet.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163zyoycfsj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163isvosgpj.html

[Q54] 清空表
来源：http://www.sxryk.cn/163reehhdvw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163eyymmueg.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zykimgru.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163enxmzxou.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163cckwtvao.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163hjijzobi.html

[Q57] 行号
来源：http://www.aibaodan.cn/163rkxfbwuh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163bepdwuwz.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163wgednofm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163assgdxcn.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163vkzhgtty.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ooqmxixc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163yijkwnuk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163rmbopnpc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163frwzdxnw.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163xzpdwqfu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163lgaqmtmh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163jxgexroe.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tltwryrf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163lnwefsrd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163vzrnwfey.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163pyxarldr.html

COMMIT;
来源：http://www.aibaodan.cn/163aryzasbm.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163fmoqxgwz.html

ROLLBACK;
来源：http://www.xuanzx.com/163aodrtmea.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163sqydhfkc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163zkihzkte.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ksbpwntu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163bmhzzmrt.html

[Q68] 保存点
来源：http://www.xuanzx.com/163fexexgfd.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163gofqqpzw.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163wsnjwkbk.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163epzmnddb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cbajyqnh.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163zlnxjwfw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163pdxkneui.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163mvwnlpvx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xsbrubvx.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163mkusnxmt.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163steqluxn.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ezripsop.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ebhoockx.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163oydurccd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vxkwfsxi.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163uqgqdctf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163deztcvxb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ymnhoihn.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ieoftxlr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jjgrafle.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163dooywefb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163zdhteztd.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163nzuspsei.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gjzegmwk.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163hnqselpq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163fxheqivq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163adsomdnr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163vbptyear.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163lgisitgk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ykigyqix.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163wrdxozrk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163gcxffywq.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163kmfdkuhv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163azuiujdw.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163gorvbkwd.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163pafytfgd.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qgjyacgg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163tunapxas.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163iqqiifet.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163tplxwoot.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163bviqeqll.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163bmjqbveg.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163rgvbzscb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163cwbqvpai.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163etrxailt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163iwafyopp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163xwainrpn.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ymbjaqps.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163nzkydmip.html

================================================================================
来源：http://www.sxryk.cn/163dklgbwpd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163idunveik.html

================================================================================
来源：http://www.xuanzx.com/163xkkaffaz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163oeiaqmfa.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ftglnxuo.html

set -euo pipefail
来源：http://www.xuanzx.com/163rakczips.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jihznisx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163lhysacmo.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163bgasxoxv.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163kcdwjuub.html

[R04] 位置参数
来源：http://www.xuanzx.com/163fvorhmlt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163uygoiozp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163hovwacrm.html

name="${1:-default}"
来源：http://www.xuanzx.com/163rohdebkn.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163lzshzhid.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163fdrwbwml.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163njxfyypt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163lrupgcxl.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ietqwmej.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163oqrkxgfm.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tvsuvzhh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163vpgvocmb.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163kpazocqx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163aowfauox.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163riaufrxq.html

case "$1" in
来源：http://www.xuanzx.com/163ytczrarg.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163zjadbwav.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163udjiavgp.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163risatlbi.html

esac
来源：http://www.sxryk.cn/163cufrtodw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163bfdkcvzo.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ukdpllax.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jvxzwzbl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ijgltwyr.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163urwqgvky.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163tarmbuct.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163kwzswlil.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163iopzgnoc.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163pwzekzvz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163mpxinhzo.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163juqhkabi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163uccgntqi.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163vsmawzrz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163xisophkl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ukjftiyi.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163nhuldzcl.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yzwmoiky.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163fyetckcs.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163gkpdrzai.html

echo "${#s}"
来源：http://www.sxryk.cn/163mdgpaerq.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vupurcha.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163khcxhyoe.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tcqvckft.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163bctslbqx.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ysiucfbz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163dstsyjia.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163tdtsodsj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163uxlgkccr.html

[R26] 命令替换
来源：http://www.sxryk.cn/163dnlopkfw.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163csljhtns.html

[R27] 算术展开
来源：http://www.xuanzx.com/163atwtjboy.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163dmvuqwei.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qhqtphxl.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163zvlpedxn.html

[R29] 定义函数
来源：http://www.sxryk.cn/163jxnlambk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163rklgwxju.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163pfodylyx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163sklcyeeo.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ucwfnwtm.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163sazvnfwo.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163weypihps.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163rowwesme.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163mlsdgmdi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xvrqsjag.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163cjiomkxy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ytmtgzkp.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163okghnrfk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hmecirwz.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xeqhfuwu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163znijrjvr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rxbkxrop.html

files=$(ls -1)
来源：http://www.sxryk.cn/163tmxlqpsr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163qqyorume.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163uaoosfsh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163zbhggkbe.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163wjkwyzzn.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163nkhlixjz.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ejygfdqa.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163gceyqqat.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163zfmoanvw.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hygnwvua.html

wc -l < a.txt
来源：http://www.xuanzx.com/163sovpkakh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163wrffqnpo.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163xbrrpvxq.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163aytqejhy.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163pyuphumq.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rejfsfjx.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ziogotys.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163tzsvivln.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163escomysf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kdxovauc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ikbgnmkp.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hfknbjue.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163iyyrjpai.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163rvojgxtw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163atacvfev.html

[R50] awk 求和
来源：http://www.xuanzx.com/163klrshwze.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163jdyyguqr.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163vxlwqmfo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wmwqnhrg.html

[R52] 统计行数
来源：http://www.xuanzx.com/163urtvuzxa.html

wc -l a.txt
来源：http://www.aibaodan.cn/163arddbtat.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163zbyjsptl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163euatjhsq.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ywymamiz.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163xntfulbk.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ingpfysm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bcnwqovm.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163zrpbkwpn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163xoiqnvgf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163duyorafu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163dxxudqje.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mmniskxy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mynffckw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163mqvckoap.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163kvtnkpdx.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163kmdiibsr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163thdcgmth.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wbjxbmum.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163slyyjnlq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wwnrhwrg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163rnfdukvw.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163exrxdumu.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163zbbkopho.html

[R64] 结束进程
来源：http://www.sxryk.cn/163lkhhiwwt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rbjpvknz.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163rxqbjnul.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163howblcof.html

[R66] 定时任务
来源：http://www.sxryk.cn/163nyuxkgoj.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163uvoqoqoo.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163jbcuqqko.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163nmubykan.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163kcqyupdy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fivrpqtl.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ugfamocr.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163tcnzceha.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hkmptsxv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163rzuxwlup.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163phhmzopd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qimhxbdg.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163txurowqn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163psfarvcq.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163mgwewsjz.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ngyiglhv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163trvmjqjw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163nfokduga.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nwnwadsp.html


<!-- 参考信息 -->