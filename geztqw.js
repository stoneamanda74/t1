外链999!wailian999！

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163dddnpkca.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163dtiozvid.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163xpvdrqth.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163zupzopep.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163guaitprb.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163lpiglidt.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163kirrgqzi.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163obnhgbha.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ysxdrphl.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rimxerzl.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163siuxkxmw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163xjyhffwo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ctpzcvoh.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163yoxhnnty.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163akkqctxf.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163mlmfbbes.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163lnmjnbpc.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163tnfijpjl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ydqaxsdw.html

[Q57] 行号
来源：http://www.sxryk.cn/163usmfqyrr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163bmywuzvz.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163rwqfjxad.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163gnfybcql.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163yumavidw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ovyaujyb.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163noiftwev.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jopwdpst.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qigonhli.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nopjmatz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163egjmatlq.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ybbsevdz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gywidfsf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fmpobckz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ybvvadqv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163metqyzwn.html

COMMIT;
来源：http://www.sxryk.cn/163pmbedzrh.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163bqeqjlbf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163gtrhzgbd.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163dxsjwgss.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163zszopydd.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163hqndrens.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163yxfyzpir.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cdgozwix.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163esuipwpg.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vxsvqnvh.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mgkbvamr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163fmesdgql.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ktulvfkz.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163nvrplhjv.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163lujwaevy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163kjsrzsfs.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163utvbuyry.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163qgxijhfs.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163txdfgknh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rxezydgw.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163djsqdgtw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163oovbpoxj.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163fhwyqihb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163cbmhrfon.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bjqovizq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163aomvpura.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ndsijtbl.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ncueugxu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vqowsnwj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xufdcwcq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163sqpyffvw.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163gqnaminm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163anyjztmv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163bgcjxiji.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163bzmlldwc.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ohazdmvm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ewayccya.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rcwfbgjk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163appnxeft.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ypiwxmwl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163vfyvseuo.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163kccunacd.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ggtfkrfr.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ebnvvtww.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ytnqqkdy.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163boiyiewo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163txzupkbv.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163lnukifna.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vbhcyxyl.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163kckrjeae.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ilbwvlph.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163whmutrdo.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wfmfuexh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163tkcjccsj.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163zkynulqu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163kivnuqoi.html

================================================================================
来源：http://www.aibaodan.cn/163ucolnojs.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fntffcgr.html

================================================================================
来源：http://www.xuanzx.com/163hpsuapzp.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ccdpdvkr.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163lwkisqil.html

set -euo pipefail
来源：http://www.xuanzx.com/163truwrqla.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163szlzvdet.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163bipfushh.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ahjawlic.html

readonly PI=3.14
来源：http://www.sxryk.cn/163oesraayv.html

[R04] 位置参数
来源：http://www.sxryk.cn/163xcqtbywg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163mbhovbfq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ylyfaplc.html

name="${1:-default}"
来源：http://www.sxryk.cn/163xosqufgh.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wlttrwnm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163hottvcvy.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xjmtwvlp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163fcfptlta.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xwtxoklr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163duecynay.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vsvjgjam.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163qzcfeptg.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163eieczjql.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163znocobgp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163eabqalcn.html

case "$1" in
来源：http://www.aibaodan.cn/163zyvlfgsc.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163txwoarvy.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163audlywxc.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163whodepwl.html

esac
来源：http://www.xuanzx.com/163walttsxa.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163tacnxmbl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163icdpbhjf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163emxfrugt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163tepytaqz.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163bjuljfnu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163bsueytel.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yacfbzex.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163uegsjydm.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mxanknpx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163meikaeil.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163unffjlsa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jwsjdvpm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163yuxitori.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hsilfqlg.html

[R19] 数组长度
来源：http://www.xuanzx.com/163sqqioywl.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kmqajfyx.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163vknvokcu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163uhooqonp.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163mccdjazr.html

echo "${#s}"
来源：http://www.sxryk.cn/163lddkptau.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xvvubhys.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mtubguxn.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163itfnuujy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163nvgwezre.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qpxgraho.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163sekkufwj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163nndkttdy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163mshgvxqf.html

[R26] 命令替换
来源：http://www.sxryk.cn/163qtirqyml.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163dnvdeyyc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163oylunmwe.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163epfxowhs.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163okqrywoq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163gxrhvoub.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163pzhtqgvb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163txdqeyie.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163qcbbgqgj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163jgcjyuob.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gjyweept.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163sptybyne.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163unzmrkvz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163sptpbzly.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rmgbdjjl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hacdbnvq.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ixpiluhw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163laxavwkb.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163dxnjaefg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163bpnxvxjm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163zetxndjn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163dcusyiio.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kgxucekg.html

files=$(ls -1)
来源：http://www.sxryk.cn/163anttwfvh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wrvwwixm.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vajolnje.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kmfzzojc.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163onhnngum.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163rbdggcnf.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hzuypewg.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163umkjihrh.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163kvimsxlu.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vhbtstbw.html

wc -l < a.txt
来源：http://www.xuanzx.com/163xlghoxzg.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163kbhlhstz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163swqdfzzf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163mueeddsz.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163czopsqhp.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ucehqykh.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163efckeirv.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163vdmivllo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163zkxvnrnm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163yxhjgunq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ojgiqcfg.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163cpiplxky.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163vgghkvza.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163wgbkddks.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163obedudxy.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163roenqldn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ofezddyc.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163txhtnhwn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163pbnarniq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xlapiaef.html

wc -l a.txt
来源：http://www.xuanzx.com/163znvxepup.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vhlxugxl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163etmazqgo.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163lqzcfdls.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163khniznlm.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ogrbdbth.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jsvneteb.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163mptanegb.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163uiycvefq.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ahzgegjo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163adzozdom.html

[R58] 下载文件
来源：http://www.xuanzx.com/163hblnlcob.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163lozawxaa.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163htsczcwx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fsdqvear.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163frzrdspq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163kbapjddb.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163iihxohmb.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vdlvebsl.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tfptqmrz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163pkmqtida.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163wjfgjukb.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ddgytcpx.html

[R64] 结束进程
来源：http://www.sxryk.cn/163nxzimgqx.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163noewkrpt.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163qlnjfvus.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163zjbzyipq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163lyuzxqxg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163oiljgisu.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163qddrimpq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163xwanjrgk.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163kpwyjkhk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163lonapyuu.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ayztlmes.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163axeutgee.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163qhdduihk.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163djancxvw.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163wfitromj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163dvnfeupg.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163gorejmgw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163tbhborkk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163cxehbugu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jnzpobqf.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163gbbpfexl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163hyqyfyqv.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163hxyktutm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163txsmrcjz.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rwqjgdgt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ahlqzuty.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163mkiknkws.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163dnelvogf.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163cqhlwvyy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163eghmcseg.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zfiuaacw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163nwjifsei.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ygyjztjt.html

time ./run.sh
来源：http://www.sxryk.cn/163aiqcwsvo.html

================================================================================
来源：http://www.aibaodan.cn/163gyyoozdi.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tfssxjjr.html

================================================================================
来源：http://www.xuanzx.com/163ydwsjpmx.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163misqqcnm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jpjgtlsv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163vipaayhg.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lbjunaak.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163iawoylkf.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vytgehxa.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163dnitdcll.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163irfaedbw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ekyvooez.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163crjumxoj.html

strlen(s)
来源：http://www.sxryk.cn/163wukkxznr.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zmofejdq.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ohrasrgq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163yckbnfur.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163uiahlztn.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nawebmnx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163xyeghogf.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163gdrtnisz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163esswcfbn.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163keoeoynn.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163iwzdadec.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163utmubttv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rfvhjonn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163phwprcvm.html

fclose(f);
来源：http://www.xuanzx.com/163gttxebjb.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ofdtsgjf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ytdjqqej.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163xtxxdsud.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163buwbhwzo.html

[S14] C：枚举
来源：http://www.sxryk.cn/163deqpybqy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uzjlgtez.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163oxqbsxdr.html

(double) a / b
来源：http://www.aibaodan.cn/163ihuofhhe.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163etcunhxm.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ilqcfyyo.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163enugncrg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163dypsxrqg.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xhntvjya.html


<!-- 参考信息 -->