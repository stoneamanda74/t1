外链999!wailian999！

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163obljnbfg.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xkcevqwm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ngjspifr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163sjmajquk.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163aclfcmyd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163tfholesc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163uxwyrocq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163yuvscwed.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dhykbsbk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xgixpdrq.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nnetkvwb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kxakgbqe.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163egnapqil.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vzauendh.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ngasrfpp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163sfbvgpsw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163mkeuhisw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163fzosxira.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kbncewxq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wwjpclal.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163mslbufah.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163tauoxvra.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163vaaybauk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163crkqphte.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163vnscphtk.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163leccfeqb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163htggyujy.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163jgncwyaa.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vdhvpruw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163xcmieofv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163uoufontu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ctvqiatx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163tcnvmbel.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163lgmzglal.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163evqanfrh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iabkwawn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163dzajnsdi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xciugysx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163fdpaebyt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163gvvnfper.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163kgaynwac.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163kfbhrrwl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ymrbakmv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ydkxagbi.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163esoozygr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wmaakyxf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163aymjejjf.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163pgpbsjtk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163tjfzhmpj.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163czeelsel.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163bregjwwb.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163mspeptvg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163dhotnwrp.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163zvcfpmgs.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163eiilqgly.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qijgmhdz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163uqtqmjrj.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163lucuemsl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163qvkwoyhg.html

[Q57] 行号
来源：http://www.aibaodan.cn/163afxgtjxt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ejqfarfo.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ejarclvk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163anfbedke.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163phmezkah.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163iepilozq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163sothkwvx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163gvymgeve.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163goyzmhfz.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163pdxohxxg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163nryuudle.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163vjgslvzs.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kbhmdkwv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163dntzrxlv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mjhyrgke.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163qnydcugv.html

COMMIT;
来源：http://www.xuanzx.com/163qrtsuswa.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163xsrmqjnv.html

ROLLBACK;
来源：http://www.sxryk.cn/163gpywyzbf.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163pvisxsbr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163iwcnveuf.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163lsrbittw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163orvvltyl.html

[Q68] 保存点
来源：http://www.xuanzx.com/163wziatzwq.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163pruyoqrp.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ntjlekqq.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163xeukccgn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163rcklkoxr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163cwrjamcr.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163wkhcwumc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163qckrvcxj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163qdcdyahh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ffomfyyu.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vfoetiwr.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163hvcviddi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kieyskbq.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163biyvqgfv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163fakhlnjg.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163nhxiahrk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163nbesrovz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163yifjvnxq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163lmzsdxqz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163cyymsdbm.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rvaobumy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163enbzhqdv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163zpbreuuq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163qiiidcll.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163tqjafqmc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163sjfepusx.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163fkoemjqh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ioezjkll.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ndjijhac.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ahyqqypn.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rhdhrmqb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pfqrgazl.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ukaixmmv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lfycqyhv.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163tmsanbpq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163bwkdrfya.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163oqiysays.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163inleebbc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163zmbddddm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163rlierqww.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163rslgvxlf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ajavsayb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ipwujdij.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163uhmtsrdm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163vihglucx.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163azurpdbn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jadoodgp.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163seepirtu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163gsviqmjo.html

================================================================================
来源：http://www.aibaodan.cn/163nsbfpoeu.html

R. Bash 专题
来源：http://www.xuanzx.com/163mtzereke.html

================================================================================
来源：http://www.sxryk.cn/163tcgwxfen.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163emncgqzx.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ctzeuene.html

set -euo pipefail
来源：http://www.aibaodan.cn/163nlowirmk.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163efjhodjo.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163olonhlnq.html

[R03] 只读变量
来源：http://www.sxryk.cn/163rtmizszq.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ocrhgqwp.html

[R04] 位置参数
来源：http://www.xuanzx.com/163zufmyeje.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163wsduynzw.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163uutwgixy.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163yxroboqv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ssaemdtq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163pmbnuokw.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163phjuvjqz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ifbcpsgz.html

[R08] 数值比较
来源：http://www.xuanzx.com/163slvvswqn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ebmdhuis.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163dvopounh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163itdecbpy.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163bxqjjryv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hvzavoez.html

[R11] case 多分支
来源：http://www.xuanzx.com/163razecusw.html

case "$1" in
来源：http://www.sxryk.cn/163lfcpkmmc.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bvncphpw.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163jcffzbof.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163bcytyosb.html

esac
来源：http://www.xuanzx.com/163pgcqbgxm.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163xnctqrom.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163liwshacs.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163tvuydsqv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163uykoqcfl.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163bddlsqbg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ljonrvyp.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163unzfmucx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ufzaelct.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vjsnevxj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tvqohvqx.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163wxmumqxx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jyfhjeun.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163cknqlxcf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qlxfwuxi.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hbjsxvte.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cnsbugiq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163euhuthex.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163rmjtmmid.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163lvqqnxpt.html

echo "${#s}"
来源：http://www.xuanzx.com/163zokmklod.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rhmqgjxy.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163orfqowqm.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163rihlrfzh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163vzipzdgh.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163uaysgpce.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163muotdtrt.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ieybblqn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163esisdinj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163thjvkqam.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163rgucrvos.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ewpbkijz.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ykibkqng.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163dwxvppym.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163eahsnsis.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ksgktptk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163wqnluawr.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163haaoaimd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163hpnrzjok.html

[R31] 局部变量
来源：http://www.xuanzx.com/163schqpzyg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163viqwyijy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163pygnbbrz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163uiajffau.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163visawgvs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163arfieqyz.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ddzggyvq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163inarbyrs.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ehzwqocd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163srqrsktr.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163pcdtnisv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163fzkazhob.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163tkjfyqhn.html

files=$(ls -1)
来源：http://www.xuanzx.com/163nesdwect.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ovhsxdus.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163yxntbylr.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ejjrumrc.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bisituan.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163xkaxyozx.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ecgeimju.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163rwwtkkix.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163auiyesft.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163tibjkaaq.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ptcdkzpe.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163gedbopvt.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163fqqvaknz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163fowhgdeu.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163zjasrpfs.html

[R45] 批量删除
来源：http://www.sxryk.cn/163voylykrr.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mynssqlb.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163xbpjaupq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163yysxtdiu.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163oxsksxen.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cqtyijsd.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163mnlikqnz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163xkdkupff.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163comuvdmw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ciwmzxbc.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xkfnngfn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163bldafzll.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xoctjjna.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mtojwpqs.html

[R52] 统计行数
来源：http://www.xuanzx.com/163hhljcchh.html

wc -l a.txt
来源：http://www.xuanzx.com/163jzcfghqr.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163mrprchac.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163xmzpisnl.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163wwqoibxh.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163wkymuvss.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163kieoatzm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163notlgasd.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ofcbpqsc.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163cnnyvbih.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ssoktpsx.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163edtuihmb.html

[R58] 下载文件
来源：http://www.xuanzx.com/163btcrwmgy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163jryvthdd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163kuskgwud.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163fmobtsda.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163glkhavbv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163rgqhcjja.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ahsouihg.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163hpuhkafo.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jxxgbgsz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163axlcwuvd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xflpmkvm.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163untdgiyb.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163dmrigzhw.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163aluhiyds.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163eqvfasnp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ctorwbec.html

[R66] 定时任务
来源：http://www.sxryk.cn/163skanymge.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163yycawfqj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ivxuxcqi.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163aopqmaml.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163sybfqmlo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163sotrcomi.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163midtemph.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ebtyqzgk.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163iseuykuv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163mcflsfxn.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ilbethbc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163jxfywuea.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163egxovuru.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163qffdgypk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ctbytvbq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163wbyvlhgd.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lhzpafdu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163bvjzlunp.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163xhnzhfic.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ourxgbvj.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163zznltxir.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yinyewyk.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163fqkploxv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163njmutsuu.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ajhdbuvv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163itlaveod.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163mzlutozz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163jhwudext.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163wilnpgnk.html

time ./run.sh
来源：http://www.aibaodan.cn/163sqeqhsmy.html

================================================================================
来源：http://www.aibaodan.cn/163iocxcwce.html


<!-- 参考信息 -->