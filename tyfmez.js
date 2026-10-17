外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ntpvieoz.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163pwuxzwyb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163tmdwyble.html

[Q57] 行号
来源：http://www.xuanzx.com/163edqyltnb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163drwoaixt.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163yytcvzwr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hiylfjcf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163tikibwsu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163yvwipubh.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163znqjqzar.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163noyvxcbw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mkfhaovd.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163makmnnsw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163lhhffdul.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163krwnacmb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dwunolsr.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163kxcaevce.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163uzcrtvbc.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163bilkcxhk.html

COMMIT;
来源：http://www.xuanzx.com/163stdjbavr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163dragqrmv.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kkgggytt.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163fhqmpeok.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yjxikidl.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163uogvpfrf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163kyjvrsmf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ozqzshaj.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163onvdfqmv.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kbaifsgj.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163vadajspi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163filccoab.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163uxagajbm.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163czjahsve.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163mmzjayjf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163kiphhtyq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mzwvpyen.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163mcflapjv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163majoarok.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zaqzpetl.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163yjamizyr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163jezebyuz.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163qfuizrim.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163kqfgjsam.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163anwadkoi.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163cgpykzwi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163txtqhzve.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pagasfiz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163dlchfrrl.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163lbadyaoy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163bnfqcfaa.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163umunlvsf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163rftnnwwx.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163vcbjdmek.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163eobncpql.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163thxrlgcq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163cumlkzxo.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163gheffetz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ubdusuqm.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jfldqwwt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163klnsauks.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vqllltve.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163aywfdzgn.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163oorgnfxc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ktsrlvhi.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163hdvesznl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163twdttcby.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163nfijibew.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163scotbvwu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vwjhchtm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163kvlvpduj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xcpcasif.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rdghwbgh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163nphjapuj.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163yyzjzqms.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ohwkfyrp.html

================================================================================
来源：http://www.aibaodan.cn/163dpxxdfyi.html

R. Bash 专题
来源：http://www.xuanzx.com/163egjcyouz.html

================================================================================
来源：http://www.xuanzx.com/163kbyvdyse.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163lxmzccln.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jaeatzjz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163nfemkudd.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163cieyeshp.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163qqgksymt.html

[R03] 只读变量
来源：http://www.xuanzx.com/163pxvjmytw.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jbqdkpas.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hklydefh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mrgllxap.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163icaoyptr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zwuqjowa.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163szjavozs.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163rzoshqih.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ekposcqg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163vgfkyqhm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163tuoxemym.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163dywkbser.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163kgacvuhv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163miktprno.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163vjtlzfue.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163nqlhxyuh.html

[R11] case 多分支
来源：http://www.sxryk.cn/163aqbyjrum.html

case "$1" in
来源：http://www.xuanzx.com/163hxhqzucc.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jjkntctu.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163noolfvfc.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163fxhokaaq.html

esac
来源：http://www.aibaodan.cn/163omjjcdhs.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163nnvldslc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rhlvswpu.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163iohvxcox.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163cfdixjoz.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163fbxrpnse.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163dieofdfk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163iwoxrexx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163uuubgawy.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163jfeefrlb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qectqspv.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163thklsipt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163npytmfae.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163jcctnfyq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163oqdumlkb.html

[R19] 数组长度
来源：http://www.xuanzx.com/163rjibpyvz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163cgndeqsj.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163wuvxcqfk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ptupnunp.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163qgdxcohb.html

echo "${#s}"
来源：http://www.aibaodan.cn/163deklnmgi.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163pnebozrq.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163mqmibkwu.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163gqmurtnr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163yfkjvhdn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ropqflsf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vabekkve.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163skwgfrtv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163kdgxcqst.html

[R26] 命令替换
来源：http://www.sxryk.cn/163dvqojlhb.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163kabaddpz.html

[R27] 算术展开
来源：http://www.sxryk.cn/163oqgrvntr.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163gcacctej.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zubnxiva.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163qzdooutx.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163vkbzaapf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zlepmgwy.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163iskujusd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163umuvrxnm.html

[R31] 局部变量
来源：http://www.xuanzx.com/163apczspqa.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163mwihcnoj.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163cjisfmhe.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163gyqgjnmi.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163gjczpfoj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163pbwxiawp.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ksniyvtg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gpulwrfh.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163glburjea.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163yizjdknr.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wzpsilip.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nhjlmywm.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vxndvpgs.html

files=$(ls -1)
来源：http://www.sxryk.cn/163mzzcqnbc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wyaiirtw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fibftbeg.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xqkaecxj.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xmwulepi.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163fzdwidft.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163myjxymnw.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163wahvfkbt.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rmlubgya.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hvqtptbu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163higwzgvh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163jnszjcmq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163bygzpdyi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163oaqqgbjl.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163uelxjguc.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ttkkfkaw.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163wraajksr.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163rzvvbnhf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163iipssoiy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163xiobekzk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jrahzfvv.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163khxwynul.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163uaaovheb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ocrlifnb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163irmafbfb.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163digskydb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163icjoqgip.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163jirzvphz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163iiqdowks.html

[R52] 统计行数
来源：http://www.xuanzx.com/163aqulglod.html

wc -l a.txt
来源：http://www.sxryk.cn/163zolhmjab.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ozujdufw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ruvohwwj.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163hcuhamhb.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163qdogswva.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rlznlsdi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163wsckmbvh.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rtybrvcg.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163aeuwjlhp.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163avvweyfx.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163yhresqfn.html

[R58] 下载文件
来源：http://www.xuanzx.com/163kevlzlkx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ykqqbpys.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163kfxttdyq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fjysdhiy.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zejhxukv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163rkznzugb.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163mhultagz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vqzfopir.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163xgbkuqmj.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ysigrjfx.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pgmgsbdw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163jxwahgce.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rafovcrk.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163hzwqwpxn.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163yisjaufr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ckmgpaib.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163eypeskmf.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zherdrca.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163cafwoocc.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qlrnkmvs.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dulaenqw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163pcaoklnc.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wdlfxlla.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163lssrsvjf.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163nctzcqan.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163hqmwvgqa.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163cenhprku.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163abfjaptr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163rzuugvxz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ogjlwphk.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hwevkszs.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163zqwxwoid.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163vupwgfra.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bwmfeexo.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163mabuwdbq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ejxkspem.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hccrjecn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163lnianrzc.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163yigsormc.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163rwwjcsoe.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163pnzqdaet.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163hivlmnfa.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163yahqgkvl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163kvuqeyjy.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163cvacywhe.html

time ./run.sh
来源：http://www.xuanzx.com/163bhtwmivj.html

================================================================================
来源：http://www.xuanzx.com/163ouatzvvh.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pvrekzxr.html

================================================================================
来源：http://www.xuanzx.com/163hneuqbit.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163hpgrjert.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163iggahxpv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163kdnibwcz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163pbxxtedi.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163emhnxjch.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163yfxyzxbf.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163comtvadi.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jdjrzjnt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163fszviukf.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rqqwlwyr.html

strlen(s)
来源：http://www.xuanzx.com/163dcmtbfeh.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gakmtdsl.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163jxofrmpx.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qzboijam.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wskujptx.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163qjwmurzg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163zfmplfqu.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ctoekpnv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ymgjikpb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163tnorrali.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163cogqrhue.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163undojimp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163syhgtnnc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163fhecfjvs.html

fclose(f);
来源：http://www.xuanzx.com/163twspwbpn.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163hhkqgfaa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163nbnlpbbg.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zqzkjlfp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163wavsdugy.html

[S14] C：枚举
来源：http://www.xuanzx.com/163pndwynyr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uckjhrjh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163yuqpgycx.html

(double) a / b
来源：http://www.xuanzx.com/163yfvakykn.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163fwveqmvk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163mnzsybdl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163zaajjiqn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163lvzlqpdb.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163jexlohhb.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163xtryannj.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163rksffpow.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163daiaskzb.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163kbzsihfn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mdoonoia.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163voyacbqv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163xkytksri.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ydvyiqgp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163obxlzthf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163unhikwjl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163dwrtcuis.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qbjlspvk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163krsquctu.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163rktwjmcm.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hqhbqnxe.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jklcrgxd.html


<!-- 参考信息 -->