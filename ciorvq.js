外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163mtzntgpq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163kltzbdpp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163gikterhm.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163rfwqeiin.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163qjukyecq.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163gftcpnsq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ufmdzqir.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jytyhqwt.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163zjukgwdp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163yjrmuuil.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163fxsxandh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163sebkaacp.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163otakuqmn.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163usticwsf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163twylrukg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xwocngsq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ctzirsxv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yhllrfns.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163wyczhdky.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163pyardimd.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ywewdjwi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163whsmygjb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163hsqdubcn.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163lewycche.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163llaxtwxs.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163apojydax.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ursnopcd.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163qqecykxv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163keiqnpke.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163esleorab.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ralmvwlu.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163slogxkpp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vxdkjicw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163itfsyhcl.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ssrgxuyg.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163rdjxhhac.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163omntwrjk.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163epjnvquu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163vmjjuyiz.html

[Q57] 行号
来源：http://www.aibaodan.cn/163wpiqfgie.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163sargpbgd.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pzbhseke.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163oajpdcfl.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163dwcopdto.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wstlihye.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jdyjxgbr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163vwgwgtdf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ikyielbd.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163klfdfdst.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163blxckjia.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ipenrtpk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wsnjcsvz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163fofrxhed.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163cmzrvqny.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163valhknom.html

COMMIT;
来源：http://www.sxryk.cn/163wybqlhur.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163stjdbgop.html

ROLLBACK;
来源：http://www.aibaodan.cn/163fmqsmcol.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163rnchqsbm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163crqrcyoa.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163vlzkpygm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163tcuzxkjc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163elsemueb.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163phomqtpm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163igujdtov.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163urcenyzq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163vuqbdsll.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163tokoqzxn.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163lrprckzf.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163qeckpnmn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163tzxdzfyq.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163suycvqnl.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mfbukwdm.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ozoptezm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zywdycko.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163stoppibq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vsotlpvx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163bcyyjvjf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163cxwosbjj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163aaeefasd.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163fxfrkbum.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163sazfhpzq.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163kjemxmsh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163uiwixzjw.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163wbifunqt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163iqorgetl.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163txmwzgww.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163smbjpwjo.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163hzjzlscv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163uctyxzxs.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163hzhwztpn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ohcgzoub.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163uvdekylo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163fmhgughi.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163diwkmyuz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163azifhwlu.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163sgdybgaz.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163vopwaoil.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163nzutnltw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163nitobcvw.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xopumytx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163hzvantjb.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163plimiwgc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ydxounbe.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163mhqggigz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163sfefffkv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ujjdkhbg.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163narhrncf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163repielef.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163eseoftgj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vgiweguz.html

================================================================================
来源：http://www.xuanzx.com/163hssqnucx.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ocohylej.html

================================================================================
来源：http://www.xuanzx.com/163hqlncnbf.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rmcutsvp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163amcalhso.html

set -euo pipefail
来源：http://www.xuanzx.com/163advxecid.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163suqhawhz.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ojjsgxme.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gccfpjyk.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jddgldpe.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jbpyyzvq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mfuysplu.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ognbwerc.html

name="${1:-default}"
来源：http://www.sxryk.cn/163fsowdvzt.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163kxqxvqvn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163fatchyoe.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163gfiqyoph.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163apvdnpgv.html

[R08] 数值比较
来源：http://www.xuanzx.com/163crbnjxrd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163blgrsqur.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163rjfrbrwm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xidvylkx.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ztlwmsas.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vspajlop.html

[R11] case 多分支
来源：http://www.sxryk.cn/163uxdhoziz.html

case "$1" in
来源：http://www.xuanzx.com/163rucspsao.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ryeflkig.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163gmakmqxj.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163tvkoucze.html

esac
来源：http://www.sxryk.cn/163qyfpyoej.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163fzgqtidc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rslabixp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163sociwjpt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ssevdwdf.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163lqxbzoqf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163dorlzxuz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163xjtmwqld.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gmruimjl.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163uyglsgov.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zcncuowi.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163eaowngdw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163gtmbdmvd.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163umiwkqeq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163kqepauba.html

[R19] 数组长度
来源：http://www.sxryk.cn/163powlnqnc.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wotpeaoh.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163dligvwpt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163fqrzgdpn.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163qbprolpv.html

echo "${#s}"
来源：http://www.sxryk.cn/163hzojzdpz.html

[R22] 截取子串
来源：http://www.xuanzx.com/163jijdqcsg.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qfhogjof.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163bpmqhmmk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163oobbkkoe.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163vbavlzwn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163uetghmkm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163unogvxlm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163fvwxvwup.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rhahbznm.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163wlxdgjdw.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hozmqkbs.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163qxjdgyqn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pjvapkno.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163pubsnimn.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fjliyuqv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ahbekrte.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163obkpfasc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xoieldjf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163sqjdvdrn.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ttqjkbom.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163bogfquip.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163baiyycpb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163nniylsfp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163jdvxvxsj.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vvbpqrzk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xjfwueak.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163wekpxjkk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163vgmtuvco.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163yjkzahug.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163bidvamto.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163cuviangl.html

files=$(ls -1)
来源：http://www.sxryk.cn/163njpaskfd.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bcpgahei.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163oufchkph.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163nlibleih.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163inxnvqbn.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163xpcuzlpt.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ctdnxous.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jfktbaxt.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163gzyldxpo.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163dkejnruq.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163nasdvtxx.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163spryhupt.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163xaizjcyf.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163przlmfwk.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163elirqafa.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163yyoiabhq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163gxotjbtt.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163eyppmvpg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163geougxtk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ywtqjfwa.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163iuevjsra.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163gvxzfjrs.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163jjqaphdx.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163niszvjqy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gtiphowv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ywweycbx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163lbqfjdfe.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163sgmcshih.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163pmbqhzut.html

[R52] 统计行数
来源：http://www.sxryk.cn/163oxngcyxn.html

wc -l a.txt
来源：http://www.sxryk.cn/163alelklso.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163usbmovpa.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163sgtscmey.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163snkrghan.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163wdqgtqwx.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163hfimwpbh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163zbcgnkka.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mrkbfmmd.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163qzpiyxob.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163yfxwopau.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163bigqgazc.html

[R58] 下载文件
来源：http://www.sxryk.cn/163oncmdgkt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163breevchp.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163jjlvmzah.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163qxniaqdj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ybgqmxji.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163pknxsbfx.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ukzguvyj.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163tcxclxiv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163xuezjjfg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163zkdiyzmu.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163tbwwycas.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xvlvnucu.html

[R64] 结束进程
来源：http://www.xuanzx.com/163mckrkeez.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163lvjcldyu.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163nvxeweoz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zluskbwq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163thrbifom.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ovhthjnb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163lctbzoxk.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wllrmlsp.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163sgwffiec.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163gzbkcaqh.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163tvwweira.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163qbeoovjv.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163iszasycb.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qfgvhwnp.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163khryictc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163mdkqpqxn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163juvvrjhn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163dfvthwae.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ffsjrpwh.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163mrbclcfr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163qaagohtd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163arrciotc.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ohdsjmko.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ekkbyohs.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163scvttkct.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ezwynnou.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xwtmoduf.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163vjfwrkib.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zhawzfke.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163dvyrtxim.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163edknjgmm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163aztyulcq.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163cqglfyer.html

time ./run.sh
来源：http://www.sxryk.cn/163mvjydabn.html

================================================================================
来源：http://www.sxryk.cn/163dbwpwjod.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zbbdnqlv.html

================================================================================
来源：http://www.aibaodan.cn/163lbhgqchu.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163fizflzwl.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pnnwbjky.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wxlwjrpe.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163apittube.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163kewgobjp.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163cfzfdcms.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163uynxrayi.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163laapknir.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163wdmartkd.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163iepoltfs.html

strlen(s)
来源：http://www.xuanzx.com/163ujnkntgx.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dmwbmcng.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163nxwfodgo.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vhixyfjp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163kiefvuqn.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163scvnrhwg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163pemdwzsn.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qqwiawps.html


<!-- 参考信息 -->