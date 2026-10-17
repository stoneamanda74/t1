外链999!wailian999！

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ncbjibym.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163djlqeudr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163mngcrwdz.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163caabtegm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ofqrqyex.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163iodbpoli.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163hftuizhn.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163xmylexak.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163meslorsn.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163enkgayfl.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qnhefusj.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ymgppkbc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163jizpqgec.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qyivjrlt.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163mkakyyai.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163revspwve.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163vwtbwjlm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163yzefhbon.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163dybmnkea.html

[Q57] 行号
来源：http://www.sxryk.cn/163kmnuhpde.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163aegytmbg.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163tbsspajk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ngksejte.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163wrfozctv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vjkpqfck.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163vtkkkksx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163oalshgac.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163tuwhswhl.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163zgskbbwb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163sfqauwbg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163lthyjoms.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xcxhhscq.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163kmgqytaj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163gqawzunt.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ppxalidg.html

COMMIT;
来源：http://www.xuanzx.com/163gwcumnzf.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163mkrmodup.html

ROLLBACK;
来源：http://www.sxryk.cn/163wvptlsfh.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163jxbaxqkq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hkhynkqg.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163vgfiqpgn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163earmhynk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163nnovhrvw.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zuehrsah.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163radiljik.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163uuyxvjsg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163bdfevdqj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163gotjsogs.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ecmchszb.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163hwibjkhs.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163hswavlel.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163vjhnzzov.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rszylxvp.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hxsygopv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163suyyarrc.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163fmmcqqtw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163stttsshg.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163jzvesufh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163dwjttkjm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163cyvbkyvc.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163visemxdm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163dzrxrqsy.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163lsxtjqtw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ebhfhlos.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163hbcessfv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163elihregv.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163sjgafoxt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ptlhnukj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163getbkxtd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163muufjhov.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ezeezyms.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163hanczggv.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xpeyfvxb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163uocwpthg.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jjrrpvfj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163dhcwopmg.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wsdajffd.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ddirdpid.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163wsdyxzlb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163anfofgkn.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163skvgvioh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163iecnhiim.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163bbkbkiko.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ktspmcvc.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kbvygrht.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163tzvbjumm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163mggzuhqy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163laxxghpu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163wmifiuzj.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xyxjeekz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163vgdpgxcb.html

================================================================================
来源：http://www.sxryk.cn/163fisgwolc.html

R. Bash 专题
来源：http://www.xuanzx.com/163djfgaywm.html

================================================================================
来源：http://www.aibaodan.cn/163cymtfvpj.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163doarrdlw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ulrbyilb.html

set -euo pipefail
来源：http://www.xuanzx.com/163tzbhgtqm.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163zxtxqjln.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163wtqgpagi.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hqtpgdkv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dkijxawx.html

[R04] 位置参数
来源：http://www.xuanzx.com/163njzdqrhe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163wwxzdzke.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ftzsunuh.html

name="${1:-default}"
来源：http://www.sxryk.cn/163enfybfgv.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163zgrjaahq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163bkyhuigr.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sfzyhixp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163xudrujgq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163jlydklbj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163kgfoypas.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163umkqrsys.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163tggpyzdy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163tfjscufn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xroeczyb.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cdhiicju.html

case "$1" in
来源：http://www.xuanzx.com/163ljgxrvgk.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163wvmkszin.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163cyzapxly.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163zvfbtomg.html

esac
来源：http://www.aibaodan.cn/163iqcmwxap.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163eyylupyw.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163sfffgyci.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163yrphjlon.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163cxsynjvq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ckhdlwqf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163omxkgvug.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163mfuzsclg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163haebmwyt.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ihhzgfpk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163cvvtlskw.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163vdreglvl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163rbcfxxka.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163yqkwxjwa.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xnvbfngu.html

[R19] 数组长度
来源：http://www.xuanzx.com/163kbmgjgmk.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163onnyfipb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163wndiepnk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163hxpkwatc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ldyslcmx.html

echo "${#s}"
来源：http://www.sxryk.cn/163leqvicfo.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163hfsfygww.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163dufrhiza.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163wktltrlf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163dlezjkxq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163xmtohymn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163gvtdfpwy.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163eyzuygsr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163dmcdrmai.html

[R26] 命令替换
来源：http://www.sxryk.cn/163pkiyqfbv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163qmkbvbkt.html

[R27] 算术展开
来源：http://www.sxryk.cn/163oatsvycb.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163qmutbrxi.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163oetlerpe.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163eusopctr.html

[R29] 定义函数
来源：http://www.xuanzx.com/163iqohidrq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zipaarou.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163zhhoykno.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163maevudqi.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ykuzkztm.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163qkoeerkb.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163rrpmcbzh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163uqpbzjto.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163oxdgqfce.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xfygdozf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163giemwrml.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uuchfsze.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163cczprter.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ysejikzy.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163glwflewf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zxwtfjve.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163uavedoil.html

files=$(ls -1)
来源：http://www.sxryk.cn/163rcdrdoqp.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wohgulya.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163tgdfzfpq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163syckzrel.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163jpzwbibj.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163yywvdvke.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ojkhcmmo.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nxdcnpsu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163vuqgnicz.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163eflmukzx.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dmcupxdw.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163fmthajdi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163pmhuemxx.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vzdmhqse.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xltrcnwy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163sqbkkker.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163rhdestct.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163pxiwwvxt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163cgfukfgv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mywhhitr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163rhvflksz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163loqokpfn.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163rghtivdh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163tpskinka.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qgbpvggq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163lbcmxklc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wtbcozvq.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163gdjdyiab.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163solmscsr.html

[R52] 统计行数
来源：http://www.xuanzx.com/163waoternp.html

wc -l a.txt
来源：http://www.sxryk.cn/163rkywpgaq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163fznydzud.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163egnmdstd.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163llsowkkb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rrzmyuyu.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163gdwbdagz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ftkcxept.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163tzjwlzwn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163qurjcxbi.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163uhegubmc.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163sswhtuzg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xuzfxsvk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qyjwajyn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163fwhhxjmp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163vajhzdaa.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163oebsigps.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163scparhli.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163iolypfaj.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163urkdtmtv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163uoqdxgkb.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163povqkovd.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ugfrkpur.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163bpdhfxkt.html

[R64] 结束进程
来源：http://www.sxryk.cn/163osjpzrga.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dneztbyx.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163kizvrqbi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163kyypqelz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163tdsqkvcc.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163sfcjjwjd.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dcredjeo.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163hmsmxpmr.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163szeslmid.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163susdhfvr.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163vvfrsbsh.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vxcynezv.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163uckypjme.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163micpmbat.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163wxxpyuzw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163oizblami.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163yntuatkl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163koyrnixv.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163pvgcakon.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163xnvbweac.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163wbjirwsu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wfdvrbti.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vpzhoapy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163vypandzw.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163tzlhsjsd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lgtmxmoe.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cuimzkmj.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rlvduwzh.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163vytmxtwo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163nkldimqk.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163oparrnwh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tthhlyfp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163svtauzaq.html

time ./run.sh
来源：http://www.xuanzx.com/163gvascfgt.html

================================================================================
来源：http://www.xuanzx.com/163kbycezyb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163fhxmwteg.html

================================================================================
来源：http://www.sxryk.cn/163iffjrkgn.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163pisbonfc.html

#include <stdio.h>
来源：http://www.sxryk.cn/163oyxieejg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163iuzjktvk.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163omchojli.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163foebslwg.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163gomokanb.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ciqixqxu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163fzqwbzrr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kwvplzbq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ydgxyjah.html

strlen(s)
来源：http://www.xuanzx.com/163isdttmav.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163wrxquenw.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ombdpuly.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qprvulvl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ekkyenvy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ybluckvj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163agsfpvgo.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163zwykyquw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163vdejyazw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163joqhtlzj.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163brfeyskt.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163rxbyyybi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163yqlwreia.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ddhuncjd.html

fclose(f);
来源：http://www.aibaodan.cn/163qjjdtvha.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gdmpbfax.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163sftaccab.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163juylfdou.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lqqgrzis.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wuclgeyx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163fzknlray.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ewogcpko.html

(double) a / b
来源：http://www.xuanzx.com/163hjwrjvql.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163wrsnzmxt.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163czjihepx.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xwbifmaf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163epiljuom.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ctrvound.html


<!-- 参考信息 -->