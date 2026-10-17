外链999!wailian999！

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163wkbktugv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163qouxlraw.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163oxibbzqz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163jprvnkcd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xtwuhykh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163qvaaiphi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163zaaabgtg.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163zodrupwr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163dwnhbpll.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ydlsqlti.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mzrszfvg.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163rctzttvk.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163couqgjxn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jmdqftzx.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xhvmmfpn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ubbawspo.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163emeqvpfm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dgfgvlpg.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zskonbfw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163mcyrnoeo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163idzcnymz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wxatkkap.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163tzoltmrv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163wpdfrqla.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163llbaybhu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163pjcbkknh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163zbtfifmm.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ayihxeux.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163dargirgb.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163nhxluctj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163eyhkwbxo.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163tgronurb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163dqtlummq.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163pjunfsct.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163vhlbsoet.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163clvzmvxl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163nhkpxisc.html

[Q54] 清空表
来源：http://www.xuanzx.com/163itfruske.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jyyxjoxt.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163fxeekipl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163osdbocpi.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ifynrzng.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163dqgsnegz.html

[Q57] 行号
来源：http://www.xuanzx.com/163leogtwbt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163bdzudlpy.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163wcdoyzcg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163calbnsip.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ultktivs.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163zjkvcvdx.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163pnrlrqgl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163hepnyjjh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163wzjzxomz.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ubgkkaoj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ogdboggl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163lgfqdnxl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ixpqocpe.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vbojgekb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163oumxdrrs.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163rlbgnwql.html

COMMIT;
来源：http://www.xuanzx.com/163judkpdof.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ggtdxase.html

ROLLBACK;
来源：http://www.sxryk.cn/163ibaihqel.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163oavpaaao.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163owfwmtsi.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ejjwzppo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163luqjbyjg.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vlalxmmp.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163tgttpudb.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163snqpbqlp.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zrkvckei.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163kjzfxjva.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163usddeecq.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163uofcqbyy.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163qyxwkaaf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ielcnvju.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163nbipfddo.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vqtuxprk.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163bjuyupmh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163knthwlxb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163pholifpj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ijftsltz.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163wcmdfbxq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163hrjdslul.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163zocyouty.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163gaibzwzr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163vqlwiiyx.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163sbukltzn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163tzvsxloj.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163wgcxnvky.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163adsxpdhw.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163iqodgkmx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ceoxregr.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ebrvtdmc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163mbxaoyfg.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163exsyomis.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ayokxrbf.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163fjbyjjjn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163kyklmvip.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ioljxzyk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163midnmfqy.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163krjvdkhf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163nyepsjzz.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163pshfcmbo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163luaanawp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163kxpfqxvf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163tpesbzks.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163mxlxmyng.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163bfurubfw.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163slmsmqxv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163brkvomcc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vjzamuju.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163nqbnpqgp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163lcoqlqpg.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163soqztwzp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ghravpnx.html

================================================================================
来源：http://www.sxryk.cn/163icooebtt.html

R. Bash 专题
来源：http://www.xuanzx.com/163kpbtsvnc.html

================================================================================
来源：http://www.aibaodan.cn/163xxozfvtp.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163konalauk.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163eraqpctu.html

set -euo pipefail
来源：http://www.sxryk.cn/163hwnwfpxc.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163fizgedxt.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163jzzzzjdu.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163qryvbkyr.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163zazmedib.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163agpqqlun.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163nnqnyrft.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163thrixbjb.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163amoafvsq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ndjsddek.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163cmfduosr.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xinqaynu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wqbyncze.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163jtkvjkzf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163oogqjlug.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163bmanogyy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xmgqdulh.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163hshbipyd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163bbrrktvs.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ywvuvhkg.html

case "$1" in
来源：http://www.sxryk.cn/163rdzozvyz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bcxpbirw.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163csxrdzbs.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163nwzfdzsh.html

esac
来源：http://www.xuanzx.com/163yakhrvmw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wfvrtbms.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vhaejhpu.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163biffjyil.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163fgwvkotz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163qxwgyigi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163yaokuvgy.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163qyldbumu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163hwkwyzpf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163jrxtmmmi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163dalhiwhz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xmthgmwj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163lnlxwfyb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163rztbcnru.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hhgqifhc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163bvrhrjzv.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163hemjiira.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163edmxoxzg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163fqfaxxit.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163eljhkooe.html

echo "${#s}"
来源：http://www.xuanzx.com/163hutaqsnt.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ljvtsvra.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qvkhxwrm.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163mfvqwkew.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tkwldiio.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ytcgjquu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163aqjpkfxe.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vmfihrjw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163bwrnxoip.html

[R26] 命令替换
来源：http://www.sxryk.cn/163idagduxu.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163glcadmoh.html

[R27] 算术展开
来源：http://www.sxryk.cn/163znrxkeqc.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lqhajjbw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163hyhxtpwj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ewhsmdzv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163nngbunaj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qtyjlitj.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ampxbakr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fsmfznuh.html

[R31] 局部变量
来源：http://www.sxryk.cn/163oetenfuc.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yyyvplow.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ptjmcaka.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163pyxsnvcd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163dqfkrlcc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163edaqbkkk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ridqfrkd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jpwlgmiv.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xwxctoab.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163wwxctkqd.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163idtixywy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163bocxvwxi.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ojerzaoz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ayscppjr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163mydxgmec.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163dnbcfcnk.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163lvvskxog.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163renwjuea.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163aatiwjhs.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hfozspcd.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163sfbydqfe.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fgjesicl.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xaopdlkz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jnyfetzi.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ncfsdflw.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ttwextcj.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163bsxjqsnb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ahfubare.html

[R45] 批量删除
来源：http://www.xuanzx.com/163syixyvwh.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163fhficnoi.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163dvynguux.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163hevozrvr.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163qhsvvnzs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hszykukv.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wlnlzgnf.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163uslsoijv.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163pkmghlzp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pmdcijng.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lcwjfdfx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163quimpbts.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fuuthraj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tyzcwput.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163cfvjurgp.html

wc -l a.txt
来源：http://www.sxryk.cn/163idvzrelc.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163zjrtifgg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163pfhsbbem.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ozymsyem.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bllrekit.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163rfdiyjjf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kpapscyp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163xilolbzd.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163efboaclw.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ahgvedbf.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163iinhpbqx.html

[R58] 下载文件
来源：http://www.xuanzx.com/163jrgywhef.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163jzzjowtg.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163pqckfnlq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163dkwlswcd.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ezjanspz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dymvaenh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163zjrpqbzj.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163kgjvabtc.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163itsehayq.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163hdoprydx.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163kmsnheeq.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163zhgeikul.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163qytdfbwf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163xnvteauh.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163pkcqpbvj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163lrlhlgpr.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ogkgbgcl.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163cwsrjjdj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163qmgnakpv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ddisbgzj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ybcobafc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163rouijqbp.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163vpxbwkkw.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163lzzrqkyk.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ztdxfpkd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163cdiurewg.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163emhjsarj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kgigltzr.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163glwmbvkq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163eydfkfrg.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163lfzmjsyp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ucduhbyb.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163edvhrgmc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163rdwpunma.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zpbqhedf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163yplkdzsw.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gnmmnjvd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cmsgiaew.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163owoyihxl.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163dgnwciis.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163beksoiul.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163gbbdnzmu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jbjuaees.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jgdxkgvs.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163bohjgpvb.html

time ./run.sh
来源：http://www.sxryk.cn/163qafhfskg.html

================================================================================
来源：http://www.xuanzx.com/163pnvtqapt.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jjcobrhw.html

================================================================================
来源：http://www.xuanzx.com/163dsxbvmgd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lblcvbzg.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ehdkpieh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163dxxejhpn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163nsgjcqvg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163tfcwvrbq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163uhacrdqq.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163newyjazg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163omihrxxz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163lfndcpou.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ouqoesvi.html

strlen(s)
来源：http://www.sxryk.cn/163nmrzjrjj.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163doeuzfvv.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163klfsabjw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163sckidfbi.html


<!-- 参考信息 -->