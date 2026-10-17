外链999!wailian999！

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163htgoaoar.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zgjueznv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163etquhwvi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163oxjrhjnm.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163bekejilr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163dlijnpwf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fskjusdo.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163mizpamqo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163iztpordc.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ocgzjrhj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tqgjygib.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163vdvubtnm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163mwiqbefl.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163youmqubs.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hevmmest.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163kmqikfik.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163tzlhtael.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163btizvmqz.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163voyubmcv.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163rkwzabdo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163jngnatvh.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163yegficqn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zealhbgr.html

[Q57] 行号
来源：http://www.sxryk.cn/163swxjunar.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rnhtpsfi.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163dvadfjbk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163yxqsfoej.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163gdqzfjcq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163bghqoeid.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163yrybfifb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jerznunf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163hzxtatrf.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163vdfxqppi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ycycmxnc.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163svpmjxja.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vqeworyk.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163lvatkrhs.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163fzrkzyis.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163yyvljxhg.html

COMMIT;
来源：http://www.xuanzx.com/163jderjjqn.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163tpqauceq.html

ROLLBACK;
来源：http://www.xuanzx.com/163jnarnmcq.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163jrwinopi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163hhyxzmoy.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zamwnues.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xopstgrw.html

[Q68] 保存点
来源：http://www.sxryk.cn/163noufptqh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163nelwstbq.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163lqxocqrb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163tzehglnb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163vypmwdql.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vxbbmjqp.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163yliptqhq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bdmzlbfw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163womuwqit.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163lcjmpxyc.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163gvzfgvkp.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163whxveljk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163wjxpehxp.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cdxvuklv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163sobociep.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163mhshuecd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163mqgcoodu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163vbiuoqzq.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163bfidnfyb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163olumwuub.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163mbsiotiw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163mrhsqmpe.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163tscripkj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163qbdoligd.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163docwdrvt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163cxtplndo.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163gqcuxuai.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163qvlzfjrn.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qmiangcm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163maslfgsm.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163sumstafy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163zigfbbjo.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163tugynnjk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163zxrddfep.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163rwlvgyyj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163pjvqgojf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163zubcargc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163bvcdywoh.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163scmuqbrb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163sjhayywc.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163qiiudxgb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163kjtsbvmn.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163mfjubycs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ubklpecf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163vpbkjnfn.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163nwltmtdi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163jyznihgp.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lajcflqc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163neevnlts.html

================================================================================
来源：http://www.aibaodan.cn/163tvmqyizq.html

R. Bash 专题
来源：http://www.xuanzx.com/163eaexgnpr.html

================================================================================
来源：http://www.xuanzx.com/163glemuztp.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163mdyfoene.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163soeaweyb.html

set -euo pipefail
来源：http://www.sxryk.cn/163harjkcce.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163imogkshv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163vlljzfam.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qzhzvxan.html

readonly PI=3.14
来源：http://www.xuanzx.com/163obxqgdup.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jyskibij.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163bbkbxoua.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163koevjvym.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tizwwnck.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163tbryewgv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ilzgioiz.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163eefcbkrn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163oxwhorfg.html

[R08] 数值比较
来源：http://www.sxryk.cn/163dboopvsh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163wiwlvyji.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163xwsnsyqn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163lrvbsegr.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163eulmfgxy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163cqnokzrp.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163gbpawctz.html

case "$1" in
来源：http://www.xuanzx.com/163napivxrm.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ofocexsu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163kcotkuso.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163uyqputtk.html

esac
来源：http://www.sxryk.cn/163rhvtyyop.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163idrzkpsq.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163wsviaunc.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mqfhfupz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163amlimtca.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kbnhoynj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163larravat.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163vuhfevhe.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zqiylvcy.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163uyatsjcr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163wclphwbf.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163akxpcozk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163owxtkswn.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163hocezfhy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ofumsljq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163mqjtabmo.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ghlsaimd.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tlpbutda.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rnanosoh.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ghlgcitr.html

echo "${#s}"
来源：http://www.sxryk.cn/163rjwgxyrj.html

[R22] 截取子串
来源：http://www.sxryk.cn/163aaddnkyk.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163njcjmdqh.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163madbjqny.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ozegdrxd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163nidjwwth.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qzpsztch.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163iqjhnzir.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qkjdldwc.html

[R26] 命令替换
来源：http://www.sxryk.cn/163brcbgagp.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163aluxusop.html

[R27] 算术展开
来源：http://www.sxryk.cn/163whpszbfn.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163nntgtghv.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163lctqnlrn.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163hjwbuazl.html

[R29] 定义函数
来源：http://www.xuanzx.com/163xcqcinia.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dgokomsi.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jzemkzaf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163qqdzcdxb.html

[R31] 局部变量
来源：http://www.sxryk.cn/163mlnwbkft.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163eafcjanr.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163lhefzetl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163nbvaqgbr.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163qnqwmeqg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163awvwakqq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jrxmuqrj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mlvldmgv.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163deggwsug.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ekwbpdqx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163fbtslhoh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163shmqqasa.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163nsefhwxz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163jmhlixzv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163qhduvzwx.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163pbfveync.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163eslokjhi.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163uqtcdvlz.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jthsnsae.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ieqgsgqn.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163yvqhjowu.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163sabuvipc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ercyzckq.html

wc -l < a.txt
来源：http://www.xuanzx.com/163sgqxbnie.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163mrhpoggf.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ynxgbcbr.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163xhbyskym.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163wixfyftm.html

[R45] 批量删除
来源：http://www.xuanzx.com/163wacketbu.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jitkufjx.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ngwkkubd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163zsjxzhos.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163zztrdbwb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163bfhkhfra.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hokrbvcf.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163lroloxgm.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163aputwujw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hrrjpbcw.html

[R50] awk 求和
来源：http://www.xuanzx.com/163dkehkque.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163phyvuzwo.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163sntktcfe.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163jqmwawjf.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ptdusoka.html

wc -l a.txt
来源：http://www.aibaodan.cn/163pobiwjxn.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163mjywcjib.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163dykjhaqy.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xtadscvr.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163miqvilsm.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163xhjpwesh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cetqqukr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163etpyzywe.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zrqwsqpt.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163hyxamkiu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lnfksgmb.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163hdjtkweu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ystrmiku.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163kdptipfh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ctfqpmnr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163povyusol.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163jkpdvjil.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163jjtrivvt.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163egsedqzs.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163opvihgax.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bjvqyntw.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163mtgtcnsb.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ytwhraid.html

[R64] 结束进程
来源：http://www.sxryk.cn/163abfcchzj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163lpznfqnu.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163dzfhvyim.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163oklgthbm.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163incmrjdc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ajeeljdb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gpdjqkyf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163itxfucvw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ltyumbdw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163gwuecdvb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163bzkuwjsr.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163slttfdum.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163eogtytps.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jxtqfvzt.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qttqxclh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163jkbnnqss.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163fosifybi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163xykjusbn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ofuebypp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163thyirtjt.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163dzxxkjbq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163kciheunf.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vqtkwnvr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ktildgwn.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163boroenix.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163kykrymod.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163urxuclum.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163aomuvyoa.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xumemoca.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163roimujyh.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163wsaqvhxb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ettgmcsg.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hepqtgtm.html

time ./run.sh
来源：http://www.aibaodan.cn/163mmsovliw.html

================================================================================
来源：http://www.aibaodan.cn/163hsnytnrk.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163irpqwmsu.html

================================================================================
来源：http://www.sxryk.cn/163fpofaajw.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163biypqefs.html

#include <stdio.h>
来源：http://www.xuanzx.com/163dsfeyskg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163bzykxini.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163knhwmysx.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163gtefmjha.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163cbmcphmo.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163tawjnjes.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163zgalhjfz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163vyhaiido.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163hmcktpjm.html

strlen(s)
来源：http://www.xuanzx.com/163hunhqihe.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gvvrmqkv.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163gnkasxkj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jhndmkcl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163oofpxljk.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163nkvvcpdf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163hfilmlwz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mxkhswtj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163oyrlxphd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163nvwybqwd.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163omvyzdnk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163nfpucfcb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ggvgzamx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163psbyyast.html

fclose(f);
来源：http://www.aibaodan.cn/163estopbbh.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gmtqokmy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163uwvxvqtp.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163dnhirvnn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lilktrqw.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163sjcswrzz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163utbaconr.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163hfpeoqtp.html

(double) a / b
来源：http://www.aibaodan.cn/163voqpqvix.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163jrporaqa.html


<!-- 参考信息 -->