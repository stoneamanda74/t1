外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163iyclfpbs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163kgvfaubr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163edarinbj.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163icrdupvy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163aajceqqb.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163vlkwhjzk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163eslktsur.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163zvpgymip.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ylkznona.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ecwbrcpq.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xksqiead.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163bmarlvth.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163kftegoay.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163lpuyxlwy.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fharezdq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dumfdsns.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163sdlpnqjc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gqajqqrc.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163rwptczqd.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163vsdgxvvt.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163oyxkggrw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163gfaeqvim.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163hxjmwokt.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163zolhnvon.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163eacfyfag.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163suiaalww.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163zvaxonzd.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163nwxigufz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fkrnibcj.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163flxlhqjy.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163rjezkqqn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163kvvzdgnp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163skivfrky.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163dvqsbxwe.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163dnqszgvo.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163yavsefor.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ydrwvdjb.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zqwushuo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vumohvwy.html

[Q57] 行号
来源：http://www.sxryk.cn/163wjujjrpp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163slbfjroh.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163uldzoiks.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163nhuexmtt.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163rbwrjozs.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vygotaoi.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ytndnedx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163werglojd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mcdwcnui.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163tpacnnao.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163tjyjuwum.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163kbrtpeeh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163sfprcsyu.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163bgbylizb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ukrebjwf.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163rlkgxada.html

COMMIT;
来源：http://www.sxryk.cn/163tqyhkipo.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163uewuatkg.html

ROLLBACK;
来源：http://www.xuanzx.com/163sjrfapiz.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163iizqqtug.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163roxxrmcp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163kksiflsc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jftwgqst.html

[Q68] 保存点
来源：http://www.sxryk.cn/163mzlwpeki.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163cwcvuaee.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163uhdhlqlp.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163jrrduwqd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cfqfzipq.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163amkxtieu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163vdzzvzam.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163janxbsvc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163muxrjvls.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163umbvtqka.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163nxqrvnka.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163uieqiosc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163fkxgcoyk.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163guiagxug.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163lyazpyuo.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163toqmpoeg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163eetjaksg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ryndzmla.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163gezrtrrn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163drahrlzk.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163uorsqixp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163njjncuti.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163afvumamo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163toqdaryf.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ildylkib.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163mjuoipux.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163duyoypkc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163bfkxuomh.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163pwudmerp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163qtagyoqc.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163dbutczcu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163rxzbpasy.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163vcrrddxa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ubjvdepq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163jdhzzhho.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163rhxsrivc.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163kglwokjf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dsqmmhfk.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163uvjurnqh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163cmlhbqvk.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163bkrtlqzl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163xcgcjzcy.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ifmqoqho.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163luqjjffi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163pfsvnqbz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163dcqphpkq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163fnqcstog.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163whhmlgbm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tzbrbosm.html

================================================================================
来源：http://www.aibaodan.cn/163gwpplbch.html

R. Bash 专题
来源：http://www.sxryk.cn/163migvafjc.html

================================================================================
来源：http://www.sxryk.cn/163brrpsbbw.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163edpkrwdl.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163jnolzkjr.html

set -euo pipefail
来源：http://www.sxryk.cn/163eposmgvk.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163fxjdvqie.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163xqwgrmwu.html

[R03] 只读变量
来源：http://www.xuanzx.com/163lknvyjpk.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xcvproxs.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163glqtcpny.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163babapzqw.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163zwngadqj.html

name="${1:-default}"
来源：http://www.xuanzx.com/163yxtvhfre.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hennewjc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vnyrrztj.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rqcvefip.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163kjiqoyzk.html

[R08] 数值比较
来源：http://www.sxryk.cn/163lqckuhkv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gqtkieyy.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163qdvvxsfu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163skwgmmdc.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zjhvwlsm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163uqrgjqgp.html

[R11] case 多分支
来源：http://www.xuanzx.com/163dyuihfmb.html

case "$1" in
来源：http://www.aibaodan.cn/163lbtjfgcl.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163tbrwlsrf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163druniewu.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ljbnxuze.html

esac
来源：http://www.xuanzx.com/163wginbtsn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vdcpdyek.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163lcsixqrp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kyncoyja.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163crlewehu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163icebjzgv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ykljaxjy.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163lrsgpvna.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163acllslhx.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kxefukac.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163gcfaaixs.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163uqfqkfru.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hiccfiaj.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163srgzbguf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163avhhptic.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163skkngrsg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163zgrgzwwq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163tqusmrup.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163bijirvhp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163lktthypq.html

echo "${#s}"
来源：http://www.xuanzx.com/163tochbpbc.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163gxxoxaas.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ddlaffea.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163mpsjqagm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163zjkvgngh.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ngkvvzuu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163beoaqcyo.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163bgioyeqa.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163xgugvnvs.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163rvmhqzjz.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163hmfdnzik.html

[R27] 算术展开
来源：http://www.xuanzx.com/163zdcscchg.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163koifgdio.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163hddmzmiq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163vbfquxsi.html

[R29] 定义函数
来源：http://www.xuanzx.com/163agdtiwbp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wwboxfxe.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wtfriwbs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163cqcrnkll.html

[R31] 局部变量
来源：http://www.xuanzx.com/163vmlwtinf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163poippiie.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zxoporri.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163pngwbxeq.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163wdrlulrz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163rqriujxs.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163aljydlce.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tiokxbqo.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163szvwamzs.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163najltogx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jrlkqhdz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163iocifkxw.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163hxhxbdrk.html

files=$(ls -1)
来源：http://www.xuanzx.com/163epnrazap.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ozzakbqr.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ohfztngr.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163zekgbuvy.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163jtdmopnu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163uohyaxsz.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163yydkhcje.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163hdjnixgm.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163zouwmmre.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163qtnnnxol.html

wc -l < a.txt
来源：http://www.sxryk.cn/163isslinfy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163lyfduutx.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163faimgeyz.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163klhfetmr.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163lebrvspp.html

[R45] 批量删除
来源：http://www.xuanzx.com/163rrerfmse.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163vuzaevzs.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ysucxnpx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ccxnwrmb.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163deqfcilz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163hharqzeo.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163pzrdmuqx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163qoiufxnt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163upylfvqf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163njmcdccf.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163nosweqdg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163emfswbxs.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xauivwtr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163feworoht.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mbpspyyr.html

wc -l a.txt
来源：http://www.aibaodan.cn/163wbirwivp.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163pfxfbutk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qwixutyn.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163dxfszvrf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163cxpiiihk.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163jeiartnb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163rzqndgbt.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163holkkusu.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gpbxjnay.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163bjvrplht.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163zqhocugx.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fbwyzohq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163xygdzkur.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163kmulvowr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ndbltfel.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163trlcbosl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163awnrtgdm.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tszxnqtl.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163fpmfcsgf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163roiafldz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ipfmmxjz.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vdmonrtl.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163jhpgczoz.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xftnzgie.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163owpeajsw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163lvhahzfd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qvmappax.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163fgagptwa.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163yhettlio.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163yhoftqxi.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163xapnlbfn.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163lnutgxzu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163aeckvzen.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163pmpswkow.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163svdwaqdh.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hptzbpea.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lbmeuwws.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163unvbnagm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ohxkuexe.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rgvvskdv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rxqqszou.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163isbuuwld.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163yzrkdgjd.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ksmtejdv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163dkxgtkkk.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163audcsxmm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163eohuzoea.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163olknxxtn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163aeuepbjo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bqchgtjz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163khoahljd.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mlkehihp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163nguarzcc.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163uaqzwbse.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163cmxdtino.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163mfcaoogl.html

time ./run.sh
来源：http://www.xuanzx.com/163aajqbwzf.html

================================================================================
来源：http://www.aibaodan.cn/163yoxfetlk.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163flhavfih.html

================================================================================
来源：http://www.sxryk.cn/163ocpgkyjz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163wtxlnqnp.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ajzsiurv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wyrzvmpo.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163tboxfaij.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163fhvcrimx.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163nsstylta.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xfpyvqmr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ddhcjpwu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163gcvlfsbh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163lmxriwhj.html

strlen(s)
来源：http://www.aibaodan.cn/163tivyyrbi.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gijgoeug.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163uxhgmzyg.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ermfffes.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163rxyzpmyc.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ldshvjzx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163tmailgcx.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cewbxadn.html


<!-- 参考信息 -->