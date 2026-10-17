外链999!wailian999！

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163qnlibrum.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ojeycpqd.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163znridmkv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163sebmwwzv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163schfarrb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hcxvrmkx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163gpzazfsq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wwwyhawp.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163auwedcwd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163vjfjgzag.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163cufmrrfv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163wsapwpcq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163myxljdhm.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163mkezrbsz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163xbrlifqm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163fshmrocx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163dupheisf.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163lnilgkdr.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ofohpdme.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163urtjtibq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163antcxwrw.html

[Q54] 清空表
来源：http://www.sxryk.cn/163hcrayoxl.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zomeqood.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163rtrgokrc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163kyxjnlwm.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ixnakgnm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kcckitie.html

[Q57] 行号
来源：http://www.sxryk.cn/163xfxtwrzk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163kxclhebp.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163emgngxqm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xztscuha.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163dwwagddp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163byiecisr.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ilrpzgdm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zcmrqzgd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163comawtby.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163lbdbcsvq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163dngcztns.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163weueptql.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ndzfjyyt.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163zpnducxk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163nmtsvzym.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163wuaeztji.html

COMMIT;
来源：http://www.aibaodan.cn/163msfenoaf.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ksapeons.html

ROLLBACK;
来源：http://www.sxryk.cn/163ysnzfyao.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163lzkferpz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163wlfzrdky.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163uqdrvdun.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163igwmuaml.html

[Q68] 保存点
来源：http://www.xuanzx.com/163tceipqbf.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fpecsmap.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163qruunpaz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163gpbsoicw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ctqugjai.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bedqljsm.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163scdfuhmu.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163wbnznllm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163tzrybalv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163oemdvbgj.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163cxqenega.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zeuqjqij.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vrysvarb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zrxnfjoe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ftedglxb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163icwwyuxa.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163pnscibph.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163msdpjyha.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163gxcumkke.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163xfafmuzw.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163cvaxqxin.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163friahnzc.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fblvkxkt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ejmjzjml.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163sjogcryn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163wmziupat.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tvafklpl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jvwdpjfz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163smehudda.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wbvljvjb.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163vrnlwlkv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163xbjcsixf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163phkmvabl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163esfdfcut.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163dexpvnfp.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ecjjoijb.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163agwxoaub.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xfoggvtt.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163lqfrvnbv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163dqkqshyd.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ewwkzwbr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ppfesbtu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163fquqzzyl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163zdbhgkwv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163mffdwtlx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163yhdghnqd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163srrwuavk.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ugwnixao.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vknhctha.html

================================================================================
来源：http://www.aibaodan.cn/163okzaokhu.html

R. Bash 专题
来源：http://www.aibaodan.cn/163qhdovhlw.html

================================================================================
来源：http://www.sxryk.cn/163lvtkmcli.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163fnqxrwyo.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163uqkkqiil.html

set -euo pipefail
来源：http://www.xuanzx.com/163wbxdqgml.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163izimritd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163jfbzwkho.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163abtfrhtw.html

readonly PI=3.14
来源：http://www.xuanzx.com/163fdxqhwxk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163didoqago.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163svwpluxe.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163wkrnolbt.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vqmgnzjp.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163rsftzogu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ahilipzi.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xaptdalm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163szqzueia.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gaoyjrsm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ygefuutr.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163kwqhexdn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ehyekjmu.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163cjdxabkk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163oinbrdjo.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163uwdeoexg.html

case "$1" in
来源：http://www.aibaodan.cn/163thrawscu.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163cfrxmgdh.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163qudbaxru.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163upfkyrdn.html

esac
来源：http://www.xuanzx.com/163hoetyywp.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163iosqfrkw.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rnjmenly.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ybvgvdoi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163aniibqgb.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163svvzronm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163mbosbznp.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163jknothom.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rgntvuhe.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163lkxpexta.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163skexhgon.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163chtyzowt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163krzabogs.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163oddytpfx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ydjownws.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gbbthcum.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163tmcormrc.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163fovehvuh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163soqduvjl.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163nasodyvn.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ourblzpd.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163uvlqzxpl.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163swnayonm.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163hqwecnus.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163cxrrkied.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163dprlmxho.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163aocsvmiv.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163kjgserwu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163bbsbmbsy.html

[R26] 命令替换
来源：http://www.xuanzx.com/163mlqdpfxd.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163kwmdlzdi.html

[R27] 算术展开
来源：http://www.xuanzx.com/163dmeoqklx.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ghczpxan.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163cnbbqztp.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163zzinzmyw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163liurflak.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163aueuqlxo.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163lmycznbx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163bydvsgjd.html

[R31] 局部变量
来源：http://www.xuanzx.com/163jmffxamf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163twnosers.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163tgsurmcx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ijardbqn.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ofdqrcwd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163eshrwkzv.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vpnsyfmd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163semagsrr.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163tnnpxywz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163balbtdhi.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163rtuuyuns.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jnvnvttk.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163xazvbwub.html

files=$(ls -1)
来源：http://www.xuanzx.com/163thrmfsld.html

[R38] 管道串联
来源：http://www.sxryk.cn/163uikdfaup.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mdriaxmn.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163zdieldir.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163fsbwxxln.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163oxrwkled.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vqltlvgy.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163mgotiokq.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163mosixdjo.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163fvaiwmug.html

wc -l < a.txt
来源：http://www.sxryk.cn/163yjdnnjvz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163hnngnxoa.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163coeexkim.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163cdnwmcti.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163sfkdxoro.html

[R45] 批量删除
来源：http://www.sxryk.cn/163yhfytrwp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163qowkedie.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163giujoomx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163qfxqtzds.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ujoztblx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ldeqvygj.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163kxeqwtps.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163kilmehmu.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163aoactzdg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ndvngwly.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mteqwpmk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163yudyuqav.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163oexjffjs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163pmcnykcs.html

[R52] 统计行数
来源：http://www.sxryk.cn/163gmkzimkh.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qwemahlp.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ylmflbga.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163yjngdalg.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163znmbqrea.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163eswbbiyr.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163nwzbmiyo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163guflemhz.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163mrhxlbto.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163polkpxqc.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163szcvfkxn.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163kdzuwrup.html

[R58] 下载文件
来源：http://www.xuanzx.com/163yuwoegjx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ilqqrmyv.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ipysuola.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163gwhvjgrh.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lviozsil.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ucpmnkna.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163lncalyva.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163gzytennj.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163qucjvqcv.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cdxvoxbx.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163cemnrvor.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163hmorfigg.html

[R64] 结束进程
来源：http://www.xuanzx.com/163iwgqljnx.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163dessagkb.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rfbqmcov.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163cbmowdpw.html

[R66] 定时任务
来源：http://www.sxryk.cn/163rtwyxxgy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ezbavfyr.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163rnmjhhix.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163bpdzlqqw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ubosqgfj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163prikense.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163faiptgsu.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163oijpvuxf.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ogrzwehm.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163tofiojwn.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163jtcgfzcc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163sbnffgud.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ahjpzygi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163xkuefhrx.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163viwcvmaj.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163pavfgeqq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163jzhceudp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kmobsuoy.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163xdlkvzpd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163utilehnx.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163rtxorxqp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qgeahwom.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163msjtdbuz.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163yydhkdsw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163jdmqyuvi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fkkxeeis.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163kucbatju.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tyonjarc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ygskvuxa.html

time ./run.sh
来源：http://www.sxryk.cn/163mnzyiwzg.html

================================================================================
来源：http://www.aibaodan.cn/163guxrlvby.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ieoluexu.html

================================================================================
来源：http://www.xuanzx.com/163dktrtnho.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163pieoyijf.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hrztezhu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ktjvqxng.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163uvewhspd.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yabelfns.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163klwqfptr.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163iapgouza.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163uhggfmgn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163gugkrzca.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rhbrasuw.html

strlen(s)
来源：http://www.xuanzx.com/163lncaksnp.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dzrfiwwj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163hvfhdsyn.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ttldtgub.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jvyfzqxo.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163sgpqdhiu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163tolbaofe.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163cxkyamrb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163pmohxsla.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163zxrklqcp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163zdjwnmmw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163lukzbtbl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163eneupdhc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163gldgvcoz.html

fclose(f);
来源：http://www.aibaodan.cn/163bzrusawf.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lsddbxyo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163nxdilxmg.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163zrbvstsc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163rmumwdqn.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ezyirscx.html


<!-- 参考信息 -->