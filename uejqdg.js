外链999!wailian999！

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163tysklpsu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163uebegrwd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tkwlpqkd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zwgjwmqf.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zdelljrk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163dojdlvjv.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163hljcpjkd.html

SELECT * FROM (
来源：http://www.xuanzx.com/163jouwpnsf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163cydzqltv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ksdqswrl.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zqzsebnx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wgpnaags.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ifuwkvif.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zxeicqxr.html

[Q37] 右连接
来源：http://www.xuanzx.com/163elgxplwa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qjgvvfyo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163pxqcptpk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163otlpvzjp.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163mbqbrlto.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ueryjsxg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163nsmmckqd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fatqorgi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163dtmsuobr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163edziyycw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163xohgolrw.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163rbyirmnn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zlpaivwe.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163xebfabyt.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163dzmyxshe.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tthwstvk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163gozidsdu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163oajfrvfh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163sakxnrpz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163gxdhztxa.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163spunzcxe.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163refgaitu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163jzvevuqb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163puslqbkz.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163owyaqzap.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163trztibsu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163szwvykqy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163cchduftu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163jzssxpus.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163cefcrumb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163akwgypoj.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163yyimtqbh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163jbubrqjx.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hlukqltx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163bujrablh.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bzoktgpf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wniwalea.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163bmtufban.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ihkpyxnt.html

[Q54] 清空表
来源：http://www.xuanzx.com/163cfzzilre.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163wbkzanya.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ufauibqg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163gergvhet.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163erlmzkbr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163sgryjmfc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163lbxslnqm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163tifsytyc.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163hwewaiod.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163lagqiiba.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163agxpbmen.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ftvlishc.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jqejaouz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163rnbhbmzm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163odjonoxo.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163gccasbdh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163jyjqaygr.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163deyignpt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qaxkthpm.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163mzzronix.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163wkrlwibw.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163kutlzyab.html

COMMIT;
来源：http://www.xuanzx.com/163pcxideue.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ibpivflb.html

ROLLBACK;
来源：http://www.aibaodan.cn/163gtgsafvv.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163klsvfjtw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163vamzesle.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163fmnvtquy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163havueaye.html

[Q68] 保存点
来源：http://www.sxryk.cn/163hkxrzskw.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163kfitcfax.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vugrkprh.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jgqnrhdo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163jkyixifz.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jjvudzzs.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163flcabzbx.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ulfqmiax.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163rbkxxwbw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163wubmgfno.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163yuvglfjc.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163weeqbjif.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wurtedvb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163jokivnls.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163rkpwaelt.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ehdfyabr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163rqgpgsdz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gmkbjpty.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163incojvna.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163vsegyblh.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163zinplgmv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163dqzoiyjd.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ijokjjfd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163jtfqcauw.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163pfsrvkft.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163agdjyuig.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163bulpvosx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163gwqpvqlf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163pcrvisyv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163srlxwens.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163igigfplt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kntzoutd.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ykokjyba.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163lghgfoec.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163kiimbqxu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163weevdtbb.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gfasflni.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ggpxtyuq.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163wdkgvfbe.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ebbnpays.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163femeyafv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qvpuglpy.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ekztzmmt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163blqesigz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vnwwqesn.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fmchaqzy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ariigujm.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wgmijtio.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163drdriajp.html

================================================================================
来源：http://www.aibaodan.cn/163prwnaqjq.html

R. Bash 专题
来源：http://www.sxryk.cn/163zjwtmtbn.html

================================================================================
来源：http://www.sxryk.cn/163icrkmvsb.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163gvjhnhix.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ljuddgpy.html

set -euo pipefail
来源：http://www.sxryk.cn/163fzohjtos.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163nliuymav.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hmsqgjcm.html

[R03] 只读变量
来源：http://www.xuanzx.com/163wswvpuey.html

readonly PI=3.14
来源：http://www.xuanzx.com/163yygunshn.html

[R04] 位置参数
来源：http://www.sxryk.cn/163xfietpcl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mtljpell.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163luwgyllv.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163hndyexeq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ybvvahyf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jwgpcjyi.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163tongwpdz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jxninhog.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ljvqkufs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163yihxseim.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163wrpjkvts.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163pavyrisl.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yjbwwmqk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163pehiubhp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163devuufst.html

case "$1" in
来源：http://www.xuanzx.com/163lpxnchim.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zbiajpzv.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163oauuanhh.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163edptjrfe.html

esac
来源：http://www.sxryk.cn/163vanecayf.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dzushmkc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ppjmauqs.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163uytxbzwr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163shazhvgg.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163oxtyffpt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163cggopkja.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163jkopkgcs.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163hernavur.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kdsujddi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ktlvayya.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163fflxfgjg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163nqgrfcmn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163fwjyxjuh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qkbbqpit.html

[R19] 数组长度
来源：http://www.sxryk.cn/163gulvmjbj.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163whdcrlxe.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163iuagwqgj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163dpitbdxp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163xnvibgot.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rfornnim.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xjmsbgbv.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163alqiykpj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163jdyullty.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163tgxuccyz.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hdubhroq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163bjnuvcya.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163fgpmexuh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163uoxudoah.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163glirbzqi.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163zmrubemk.html

[R27] 算术展开
来源：http://www.sxryk.cn/163yxgjhxdw.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163juepommd.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163xhqbbjyu.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163widknogs.html

[R29] 定义函数
来源：http://www.xuanzx.com/163orufrasx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vmritlns.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163vaafuplr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163bmzllomp.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ycozpceo.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163odhvvhgv.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163hvkxjhhi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163fvlirdfo.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163brbwykty.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163qamclqsb.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163pshliawq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rcwtznsz.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163chpxwmqz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163plrjenqx.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163jfsdiumy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163hatbovbd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163nwcmtyih.html

files=$(ls -1)
来源：http://www.xuanzx.com/163piqjalmd.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xgmtmqpx.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163mgedbcev.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163cguqcist.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163axsjglpa.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163bvztkqyj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163jvqkwwtp.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ymqoybal.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163aqyqopov.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163pxhimewy.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ystpiehh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163facqealq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163sgyzjvof.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163urpzqyup.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163dkloihja.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mjzwnnft.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163tejvoytm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163dojyqmjn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163trftzvim.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fsckljhm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kgmmxldz.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163txgoovyx.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163jflwuanh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163gqdzzlvg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163shqmpyte.html

[R50] awk 求和
来源：http://www.xuanzx.com/163gbyxxsah.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163tfyykhqa.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163vuhburde.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163nigseyph.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ypsqplgf.html

wc -l a.txt
来源：http://www.xuanzx.com/163qwktfrsc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nzhhhisx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tgqoycih.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163kfiycitw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163cijdhdlm.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163usfffetc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163xzqzygri.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vsidlera.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163yeurxwrp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ifvrffhe.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163zhtawosi.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163sizakwyl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wbxbjqka.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163tzrdvpcw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163nhogsxkm.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ocstlogh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163wnejwoij.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ftxansmd.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xxffdddb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163bdetwmus.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nmpumdyk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163uvmjquvc.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163yrtomllq.html

[R64] 结束进程
来源：http://www.xuanzx.com/163pzmkwziu.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163hdhbdqbw.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163dwpkglow.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163kedflahj.html

[R66] 定时任务
来源：http://www.sxryk.cn/163omfwultl.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163wwbztbtm.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163rdmdcwem.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163domfefjq.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qggwinvv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163evyfmgju.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ajmjcigx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163xozaunua.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163fvzrjnma.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xjygdder.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163dvzrwdcc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ypxfqkzx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ljnqechw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kruzfahn.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163fwadukbu.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163jymlexar.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163wamdnwpp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163dvcyhzhb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163awlrsovi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163mdevesoy.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163cyfoyltb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zhsygmul.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pyzjjaou.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163oxfxhwwn.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qpbpfnnl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163tkapobxs.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163qolgrkbi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163efmyzwul.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zdqghdgr.html

time ./run.sh
来源：http://www.aibaodan.cn/163gqohyhqo.html

================================================================================
来源：http://www.sxryk.cn/163xkvccpvy.html


<!-- 参考信息 -->