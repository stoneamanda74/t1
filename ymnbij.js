外链999!wailian999！

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163fsckiizu.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163immiqvnp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163dvfxyzdi.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163agxokolx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163zekatlwu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xflatfsk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163uisumggc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163wgwmqefm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ekodnprv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163suibugjl.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163sudhspgv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dxtlalzp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163nitmiodb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tjpfmxri.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163giroqwky.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qehgknls.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xucbyhwg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vmyfjprm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163qslteumn.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163gyrqrbmm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163nbhjklqw.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163nrjfsxxh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163mihsbtlv.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163yfqtktvs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163onbhalfd.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163cvkbppll.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163txqskurf.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163jsthufnx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163dbkkvrct.html

[Q54] 清空表
来源：http://www.sxryk.cn/163kdmlrreh.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163sgatrlds.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zvjxqtwl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163bxepaaln.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ptuiwnru.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163dtufuhrr.html

[Q57] 行号
来源：http://www.xuanzx.com/163qkifkpym.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163nrffpzge.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163amaoiftb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163yaampthe.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163bqrlmrlx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163gvyxsdpq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163fhkjyvsy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163axqtuhao.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163dalnpqpn.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163kmadqrtg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wjlkagsb.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163avhevegm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yfolanbc.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ljnfdwjx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163jlvpqkqp.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163hihocixk.html

COMMIT;
来源：http://www.xuanzx.com/163vblcwrab.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ifyzcgfu.html

ROLLBACK;
来源：http://www.xuanzx.com/163ccvyomzg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163tahgulpu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163movywuyg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ihvjrnaj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rtywhspo.html

[Q68] 保存点
来源：http://www.xuanzx.com/163bmqqftbc.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163byhqbhje.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163tlvyibju.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qzylbujd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163nmgcttkm.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163taimbocb.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163bmyakvpk.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ldggigyv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163klupbmhv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163rrwmqaqd.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163dnrubkgk.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163cbrumcbw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163fjtzihmr.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163msghyugf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163bhngorqd.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163srizcbhs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163yghlvzmw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bbgjdmxz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163zadxiwpl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jbxjjdle.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163bnszfgfu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163wgkzdqkc.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163urgkubym.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hplwhhpv.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163pilkxypj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163mhqvlhqp.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163nokqdrng.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163kgqdggah.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ssgsfjdn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rzsnctle.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163twmderbx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tgjouvsr.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163lsdqtwkj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163nsywegoe.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163knemdzin.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163higkqgtq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163yysfzvkg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163tsztwjgt.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163kjzlbhvy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163igavbmvj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163yaruqwro.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ucttiglr.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163jxlfupdm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163wkaklunv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163tbpnmiwd.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163hvrxdvlw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163iukfkojf.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163habixskd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163fzlqostm.html

================================================================================
来源：http://www.xuanzx.com/163usrkupqk.html

R. Bash 专题
来源：http://www.sxryk.cn/163igrsdwxf.html

================================================================================
来源：http://www.aibaodan.cn/163uhpaampe.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vncfrrni.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163thceoshu.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mfestpeh.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ayuizhur.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fvuhqheo.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163awvzxidj.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pejgykov.html

[R04] 位置参数
来源：http://www.sxryk.cn/163deqfwdgf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wrtskbyd.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163lrvpfige.html

name="${1:-default}"
来源：http://www.xuanzx.com/163wkreaama.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163pvwvicew.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163sbgmxqvm.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163wrjcmqie.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163gbnbecak.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qynwwegv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163clfdcips.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163racorcnu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qsvuooay.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ghxnnjtj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163arccnfxe.html

[R11] case 多分支
来源：http://www.xuanzx.com/163antejyiv.html

case "$1" in
来源：http://www.xuanzx.com/163xgapashf.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163cwtktbkq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163wwkzkqwu.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gckcfbkk.html

esac
来源：http://www.aibaodan.cn/163doxqdaci.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163kpljukrj.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163svcnrmhy.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ndvemwmk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163slmqkcze.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163dlvyysjx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163hpsoouyt.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tgvqqjcz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rucdfqvh.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163xxpddlii.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163vmnexenr.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163xcrjyxgi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163uqdiqyln.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bfnstyvy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163syincpff.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163fwfxsvvs.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ytvjifus.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163otkuyqft.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163tzecboek.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mzbzuxpm.html

echo "${#s}"
来源：http://www.aibaodan.cn/163brotmbol.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qxklprbb.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163hgqikuar.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163mnpiucuh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163kdfrowcp.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ebmpnoak.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163abcjwmnv.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lhqpsgbp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163bqgmwdco.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ixwjoihk.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163kedhtnpl.html

[R27] 算术展开
来源：http://www.sxryk.cn/163wnfilcjw.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163nfcfvixn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dbzfzxpn.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163aeviydmd.html

[R29] 定义函数
来源：http://www.sxryk.cn/163xqtjnlmw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163rynmfjmv.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163vlacgjyv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163mdjmpzbt.html

[R31] 局部变量
来源：http://www.sxryk.cn/163cqidbjcr.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163fsuvemrg.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163aiayxpwg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163wufwaron.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163kegmusep.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ilglsqwq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163onsjnsen.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163oevytdgv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ksyjvtmd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163uijryzrx.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163bqelhdnc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163jonjsqio.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163vfgzflqu.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wvprrsbj.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ufrffmeq.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163sdkeasso.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163fdupdxgb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ttkjgzpn.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163wijdcrmk.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wzlfuhin.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163mdwnqzyr.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fdexuqxc.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ulyopibc.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ugxhrnki.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163aaouudtd.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ocqhrhyo.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163duacwihb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163nbsducpr.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ktwmzijl.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mrgutcfj.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163hspsqchw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163fzljfcuw.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163jykjvvop.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163svxobcyw.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wzeiifda.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163iydfmktg.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ujhdgehn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163bwgcyevd.html

[R50] awk 求和
来源：http://www.xuanzx.com/163obilfvwy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163tiewmclv.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ydagabdq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163rbtkrpey.html

[R52] 统计行数
来源：http://www.xuanzx.com/163uyegclzf.html

wc -l a.txt
来源：http://www.xuanzx.com/163fkqeqhcc.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vhytqmwt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tnnjpdyl.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163kbgpyajx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163kqwduddb.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qdhgdpif.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163uhobensh.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163oxxmmxcc.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163usrkpmku.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163iaijxxex.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163yokjumla.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ofqojavz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163rauetcvq.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wtmwzyvn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wikiqdlu.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163dpcuwlwp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163yagxhhvj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ssyjygph.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163euhvgkga.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163xxdvmrmf.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163hjmqsllo.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163wzmnhlij.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163oaczflpr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163enwinmsw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163zzqltsqd.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xnsxbxen.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163vfkpfuou.html

[R66] 定时任务
来源：http://www.sxryk.cn/163niqvdosd.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163wqawtyyp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pvhkbglx.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163goohenpx.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163azbtbxwx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163mzvmewuw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163aybihqlf.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ythpperm.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163jynsskoy.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163dswmuxop.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ikepgxzy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163hyanlfgk.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163uyajmoaj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163tzmrypud.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163fiwchuux.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163yjtumzup.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ezyvhtxe.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163quehmnsd.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163fxymafoo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163vjrwxrur.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gtnvzjrs.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nwgkthqj.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163upxeaomq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ehdffurd.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163krzpxvzq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ktcuoytr.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xndxqmud.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lhnnnbxg.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ohjjigyt.html

time ./run.sh
来源：http://www.aibaodan.cn/163fhcxglwo.html

================================================================================
来源：http://www.aibaodan.cn/163kgvuogiq.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163zkhrceph.html

================================================================================
来源：http://www.aibaodan.cn/163jnsluhoj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xyorzvvv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163gdkconyf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163cscwlgnq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163vblgloxk.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163dotudsqy.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163spkknxyy.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jtnsbijp.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163dlboecys.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163lzwopjzw.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163fjlvtaiv.html

strlen(s)
来源：http://www.sxryk.cn/163vdvegdqb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163cneecfqi.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163aapctkup.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163etsocalf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163okcegluu.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ruqcqaov.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163wnuvrsqs.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ukpnzjqv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ojwcxhqd.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163oyizwykq.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163wxrnvagw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163vzkusble.html


<!-- 参考信息 -->