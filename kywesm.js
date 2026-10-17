外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163qmlfagop.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163lrvsovdz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163dfahjvvo.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163msmyjkoh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ihafvxvw.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163drnbqkyq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163dlvtrdym.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163avsawvfz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ebwliovk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ulntlgdo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163qhlqnzsg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hemcjtnh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163aaggrrcm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163zgsusfqs.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163rqchydgx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163mohyoqtt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163grcprnbd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163aoumbgil.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163rdltatwx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163owmalqai.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163awevlvet.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tfpcnyub.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tpcmekci.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163vgeqocwl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163osgycont.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163upmeumjz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163doemkqsx.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163jnvaojbx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163obgibvdh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163twqjlhra.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163llzesdhj.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ruohtzro.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bfwavrrl.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163tdpiiaba.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163uanuyskv.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163pcbuyznt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163yeupwwlf.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163nmdjcurf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163yemwhyoz.html

[Q57] 行号
来源：http://www.aibaodan.cn/163wtyjsgtj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nncomlqw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163kkqjecll.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163gyylqehp.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ugererlt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163qscqeums.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163trnbglvi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163hiyxilty.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ugegckda.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163gceznskp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163rzvvymjl.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163zsmspmgp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sdqpnchz.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163zzlnfkcr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163meosccve.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163zobcrrqk.html

COMMIT;
来源：http://www.sxryk.cn/163sretzolx.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wlcsslgy.html

ROLLBACK;
来源：http://www.aibaodan.cn/163pepsxihj.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163fpubrefn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163mmmxhddo.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163scretdwm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163hkhvdhoq.html

[Q68] 保存点
来源：http://www.sxryk.cn/163muyqliki.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gcaslmjd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ijhwcetv.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163znxmgzmn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163sraervla.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163qodyqwdc.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163onpfgmzd.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163jkmmwgwn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163llijexzc.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163csqsgkvy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hgsuxaml.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xbkexfac.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163jbsuopcm.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163puivjodw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ekmfgyxp.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163hserlewg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163hvfbnhto.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163yuhcigrp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163kcjsminx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163mdouxkee.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163tflelejb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ddxsgqev.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163gdvywxvw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163krzczybe.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rjajtbpm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kmkywsdl.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163bcamwdpu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163fddqdgqr.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163tddudvjc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rxeyhaxv.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163wiciccdk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163tahbfcpi.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163biawrpnh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163gqlplanv.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163fhnviqoj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163kebhjfgw.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163lkqhajzh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rnfmtfnp.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ojdaajnk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ctvldryg.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163eskpgbef.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ixgjmkrh.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163haposuev.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163gdzdumgf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vhzisobw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mbxiszgn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163smtajzgn.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163iiwsfpeq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163kvkyxlgz.html

================================================================================
来源：http://www.aibaodan.cn/163utqntink.html

R. Bash 专题
来源：http://www.aibaodan.cn/163xpwjdpqq.html

================================================================================
来源：http://www.aibaodan.cn/163hiqpqtvi.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ahfbilyt.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163vxlttcki.html

set -euo pipefail
来源：http://www.aibaodan.cn/163melzdgam.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163qzfjlzet.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163niwvwyfi.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163wbvelxqg.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qxozsnww.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ojmwbbeg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fdcamidg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163qkhxkhqo.html

name="${1:-default}"
来源：http://www.sxryk.cn/163krtqienc.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163gwzmyfat.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vwnermft.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ujpmkibz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163genpxsfp.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qyhdgpxk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163qyatqmhd.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163phutimsf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ejnngfbe.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163kzmxiseh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163oogzpvqj.html

[R11] case 多分支
来源：http://www.sxryk.cn/163jcwhkwmx.html

case "$1" in
来源：http://www.sxryk.cn/163zqsfvege.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ekzugjva.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163cwppepel.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163actqwsvj.html

esac
来源：http://www.xuanzx.com/163yrskruer.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163azmtdotw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163qktbbfdg.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163uprbfltq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163yiafcare.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xjmecazp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lllvbasw.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163qajpagps.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163dzempaxu.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163wqdrcdmv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163lbignsnq.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163jcgezvng.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ywqbeftf.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163gkklcmhw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163seorrzkw.html

[R19] 数组长度
来源：http://www.xuanzx.com/163abcqzppx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ijowgunx.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vcckkfto.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163cstgrghq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163cwzkhgwq.html

echo "${#s}"
来源：http://www.xuanzx.com/163tavyuyqd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wmevgazu.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163mpronovs.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163rrykumrx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163shmemdwh.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163cxqhholv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163fiekeslk.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163kxpmgsjq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qqdsqrmm.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163orpzmmeh.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gcdybsix.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ffrztghq.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163nladqyai.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163odtyqnpz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163zkaammro.html

[R29] 定义函数
来源：http://www.sxryk.cn/163forcrrvu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163sgjwgczk.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163sldkvmfm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163iiomukoi.html

[R31] 局部变量
来源：http://www.sxryk.cn/163mxchesad.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163mjuuifad.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163odlsyaph.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163abeaiswe.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163bgbqwzow.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ecxyoque.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163hgcdzflz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yjllguii.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ojoeabes.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163tscwnwtf.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163sjbyzlxz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163awlcguvd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lklvewuq.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163qztohoan.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ynndrknp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fsmscwav.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vwvlkxcs.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ywpmlrqj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163cpemfrzp.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163tetubfiw.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hemenmwr.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163takvepui.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mlsubitl.html

wc -l < a.txt
来源：http://www.xuanzx.com/163qrhpgmvz.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163igtvppan.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163gbbxlgux.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163tgdulexf.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163oeegrdys.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fzzcbbrr.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163rvudvztj.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163tlixfmnf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vyfblkms.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163dddtovgd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163mpitbvmp.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jciluodf.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163oypkqzqs.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163jkxczvow.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163rvkjrfye.html

[R50] awk 求和
来源：http://www.sxryk.cn/163uvljjgwr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163llhvocab.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163qjrswqin.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163aoxminxn.html

[R52] 统计行数
来源：http://www.xuanzx.com/163xsqdcrak.html

wc -l a.txt
来源：http://www.aibaodan.cn/163lifpqalw.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163mgncfmrh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vdnjuivx.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163tnnromyo.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163lvelxetw.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163gigrnrcr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163mdpqcwms.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mwoxgkxq.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jwocdnvg.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zrjphyqe.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163izmtoyzb.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cgjrnboo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qkeoarlw.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wnvaxjfx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163kzmpjohj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163vayvhtjg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163siwtunpe.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163axqdbfac.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163okimxqqz.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ugpwhbev.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ovcvwkti.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qsjqxqnr.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xunnxelj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163gxaiqkpn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163zqwdvmlp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163tphstjlp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xwkjdtlr.html

[R66] 定时任务
来源：http://www.sxryk.cn/163alvibodk.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163jqtvmjtj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163auvjhaej.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ovlkikmk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163pjrjyjka.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163nedzjjgu.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163mucyrqjl.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163iailutyb.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163pgwqsycl.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mjkogwtl.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163khzdvvuy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163xzvdlyqx.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163vgsgbpfi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163yfzqamaj.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163icjyjewk.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163alyaloeu.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163xvneoafa.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ksmvupip.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ymtemhqk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163anmwyzzy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ckafvvip.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163krznpsxu.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163nthyksxf.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163hoyrrcpe.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163qymcmdch.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163tpufzeri.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163wmutspwy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vuruvvah.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163azgteyol.html

time ./run.sh
来源：http://www.xuanzx.com/163emscehig.html

================================================================================
来源：http://www.xuanzx.com/163cexwgcvp.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163goadvinu.html

================================================================================
来源：http://www.sxryk.cn/163jwecydbj.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163bbahoyqy.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xabeiomd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163mnnipszp.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ofihzpga.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163pqvhlipo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163bksmtkqk.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163tusrxhsz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163uthgzuya.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163imhnrwrd.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163gjfrluho.html

strlen(s)
来源：http://www.xuanzx.com/163gbynzqkc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163wzrzzjms.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163oxehhgvf.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ylmgziew.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xajbenmu.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ssxgtmqh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163tjpofyqb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dqyahbom.html


<!-- 参考信息 -->