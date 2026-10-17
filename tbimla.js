外链999!wailian999！

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fxwvedit.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163cegelkvt.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ymzhnzez.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163vuuhooya.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163evmfmaak.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tghmimtn.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dmsdldey.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xenllzdb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163crjenhap.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163uxcyocbq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163featppwa.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163lwcoovyq.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163mcigdzpm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163dreogcdb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163zmyupgnh.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163pcnbokwy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163skfzvyxx.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163thnfrzxm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163vgzcwyiq.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ghyxnquc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163wyysitxk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163rmsypemo.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163qtdyexfk.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tltkxydk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163kyrfhqbp.html

[Q54] 清空表
来源：http://www.xuanzx.com/163yfpclito.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163hhxrsuso.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ztlrtekm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wqnlcaqy.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163gqusttnc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ytdspsng.html

[Q57] 行号
来源：http://www.aibaodan.cn/163nkokifci.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163klecsoah.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163hshpycqk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163icmowtkp.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163labxbdcs.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163nrdfmopy.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163cdblbowm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163jrmpqfgc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163yntbioil.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163dqijlazo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163mgsuyfur.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163dezetumq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vxnonlnt.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163eduywteb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163sqqjrnmj.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163cstleqes.html

COMMIT;
来源：http://www.sxryk.cn/163jqlseqgb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ofqjvzeg.html

ROLLBACK;
来源：http://www.sxryk.cn/163rbubicpp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163suicvffl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163qfssvhzn.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163jbsefkig.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163raomyqoe.html

[Q68] 保存点
来源：http://www.xuanzx.com/163xutwzpas.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vbtgsacn.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163clwzwrqc.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qlieaaah.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163azoxwbgs.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163flfvfltu.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163emcretmc.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163sbozkphm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xmrdtlnu.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163uyiriwkj.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163dmzykcut.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163acpvjwfx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163flcexetk.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163vycsvxya.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163jkdkbalb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vuyaindt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163nvdfscet.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gwfancoh.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163tqxzmacf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163zdfwlizy.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163uoksfcgm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163nxvdvgoa.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xamokmkn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qtvxinzf.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163drikgrdy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163fdxacyai.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163xzduczyb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163lsusepeq.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163iktsiald.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gikralva.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qsjjxvrw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163fdswhvxp.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163hcqghnqn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163sosvzptx.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163bqktobpu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mnidodoh.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163skaxsfot.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163fkcdabxq.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163wmgphaxm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mgxobiih.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163iipfbvhm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163kmxincww.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163jfcbpekx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163crveiinu.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163gpzludcv.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rkwxpvgh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163qahlthvt.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ugvlzvcf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163lqcdfzrw.html

================================================================================
来源：http://www.sxryk.cn/163ofohvmsm.html

R. Bash 专题
来源：http://www.xuanzx.com/163zdhosjtm.html

================================================================================
来源：http://www.sxryk.cn/163wmyhwxms.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163zuzencdv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163smuigwsy.html

set -euo pipefail
来源：http://www.aibaodan.cn/163pyeoknhg.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rtaqxqgc.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163qdxsztxo.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ytrbizfl.html

readonly PI=3.14
来源：http://www.sxryk.cn/163sytkpeiv.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ukqpzkyx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ykwmxdtx.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163vajthahv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163atljsuxd.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163haonzudg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163xcrlqczh.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163yrsxwcyb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mqxmbscj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163rjzuqxpv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163iqlpqbiw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jjzzhjaa.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163bwlpivcs.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pwsenive.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163puwzbhzp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qzazntkt.html

case "$1" in
来源：http://www.xuanzx.com/163usmmrlua.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163rxzkvvps.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163fosirkoy.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163huxxigya.html

esac
来源：http://www.xuanzx.com/163rjltpdmk.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163vpqpyayq.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rnahckua.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ifykeoya.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163qatbarhs.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163hkduahst.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163kypvmprn.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tknhwxpw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163qltyznzr.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163lgmpdwxh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163rbarcxuu.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ebnlanfx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163qehzgirv.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wcgruxwn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163orvwsbln.html

[R19] 数组长度
来源：http://www.xuanzx.com/163pitchrtl.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163dxoqzdgk.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qrmmowqp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ijmykmdw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163kopjjxky.html

echo "${#s}"
来源：http://www.sxryk.cn/163cstfnuqj.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163yxpdejii.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163zspdcpos.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fenamwvq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163cafutydo.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163cyjoboql.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163zpwgbrtr.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163dgcczlwn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163feougugc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163jeomrpej.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163emuzmbdk.html

[R27] 算术展开
来源：http://www.xuanzx.com/163yifeyzqo.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mcsvxgsi.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163uslmlybr.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ykflzqod.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ufftcxdm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ecbdkyga.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ubpykzqg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jitbhrxn.html

[R31] 局部变量
来源：http://www.sxryk.cn/163bwjjrujd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163jfafvmfh.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163lolpmoze.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163nnmnodig.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163dundzgyf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163krefhydx.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163dspgjqbx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pazrmeos.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163bynrnolz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163osfcyhiu.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163dhhgbksg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163egltxwyv.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163buzodotg.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163yxplobfl.html

[R38] 管道串联
来源：http://www.xuanzx.com/163nruthvtc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163usnkxozq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163yupuvmpl.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163aegltvml.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cpnacgzx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163iyitthht.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jxgwfcdr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wfelkydj.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163xxyrwijy.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ivsabctg.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ozrksnaz.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vayvmlbu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vwwvxwny.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163udromksj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vmmjctef.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163qggwezbl.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163odkoxgze.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163fngwsiam.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163akecowyc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163yfmtgxlr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xkhngwxe.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163eknvwxah.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163swhuvqmj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dmyxtzlg.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mgsoypco.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ugbvyiqy.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163hahcslvf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ztvbdhtq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163leeqjdzs.html

wc -l a.txt
来源：http://www.xuanzx.com/163aupvxiwz.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163mvndqvxf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jssjmjyt.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163cppfqyoq.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163orasymto.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163uejbvejv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163eoebgdcc.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163dedbqnzb.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163vmydoqzz.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hcrmdzew.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163klcinewj.html

[R58] 下载文件
来源：http://www.sxryk.cn/163cgyhggdu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163kvzlpxyg.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163etxsgxrf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ztoceptt.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163lkcmmsxk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lnjvqheb.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163zjedowmz.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163pxumtblk.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163tmhkfvyc.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163bwkfevcg.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163wudfagib.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ndtyqaas.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ayjyopco.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163hfrbapxs.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kddqvvsf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163rvnakvoy.html

[R66] 定时任务
来源：http://www.sxryk.cn/163txgelqsx.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bmhjfsme.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163yqlxygnn.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163sinmlwcz.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163zejmbmks.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163gdazycii.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hgtttfyd.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163rgzdijnk.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wlrgevco.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163thnlkbag.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rhawhodw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163nxkwznud.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163wlmgrkfw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163lfesutku.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163znzgglit.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mqwusfcw.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163uxlxbgum.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163nmcqwbvb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163yksgfdvw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163mhzahtwr.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hrconsce.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gzrmjjit.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jwerczkj.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kzbxelfs.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ttwvctpo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wnwgilkn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ghoranem.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163iwrfwxbc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hawnncqc.html

time ./run.sh
来源：http://www.xuanzx.com/163cpnxoxfb.html

================================================================================
来源：http://www.aibaodan.cn/163pzyqbrsb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163xlmmopwy.html

================================================================================
来源：http://www.sxryk.cn/163nsqtxncn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163bemiqsvm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163dffyeswe.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kouvgorh.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163wwbeebvm.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163bbowdnkt.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163mukjaijw.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163rufgmmmz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163myxreepe.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163snnxygbf.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fkcbcund.html

strlen(s)
来源：http://www.xuanzx.com/163asukbtak.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zlswylok.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163aceqiijt.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ejizpmvn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hknwtorj.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163fxqazxqj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163rczuqbmn.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tneyjthm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163pvlvbxgb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163tqneoteh.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163uhvadevz.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163izcqgjsf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163drsddjsv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163paawgmov.html

fclose(f);
来源：http://www.aibaodan.cn/163rhvlzkts.html

[S12] C：写文件
来源：http://www.sxryk.cn/163rzrqurxl.html


<!-- 参考信息 -->