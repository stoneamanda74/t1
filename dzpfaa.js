外链999!wailian999！

[Q61] 移动平均
来源：http://www.xuanzx.com/163bnhlkfpf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163mbbijybf.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qinycurq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gwlhgxzo.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163hqgebyhn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163gisfgsyx.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163srvwbama.html

COMMIT;
来源：http://www.xuanzx.com/163bygmkviu.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ofjvyaat.html

ROLLBACK;
来源：http://www.sxryk.cn/163rirjuoad.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163csscvldj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163avklhgfp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163lxgmllfn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163qvvypxcd.html

[Q68] 保存点
来源：http://www.xuanzx.com/163fmcqtasr.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163dufwczzy.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163extnvncd.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163shiudkwd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163dhsgqorl.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163tdgztwit.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163lwiaelpa.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163rtutkcad.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ikrjdocu.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163nfvmhdrf.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163slkpclzv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163diqporlz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163fvfwzdvu.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163pimfxdjb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163pgywfkyb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163luhxyphn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163gxslsleg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ffjqeala.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163hfpszixj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163msebgigu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163woohecsw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zvnqzlif.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163egtoodqa.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163eazsjmpp.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ytgxkoec.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163tetiyygt.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163bejqtwca.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163fksjurtt.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163dpdjkwxv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163koosqacq.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163aawwutjd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163sljkozvn.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ehcgozmg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163oqbciqhm.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163efsthpup.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163oifhjrhw.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163gcjxxkiv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163zvltbwgh.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163vladyuoz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163jumzwtrf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163auzfvcku.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163pnucszzu.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163hzmzqkxm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fslejamr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163csqhpxhu.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163xghmyrzg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163oyhzeejg.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163vftjujod.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163kqvmcamy.html

================================================================================
来源：http://www.xuanzx.com/163lejvqxqj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163yxtvicjt.html

================================================================================
来源：http://www.xuanzx.com/163svpbigng.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163qmhzcvox.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163bjvbyvsj.html

set -euo pipefail
来源：http://www.xuanzx.com/163zbxeegfg.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163nuhnxdiw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163vbvjcwkk.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163rcvybnrn.html

readonly PI=3.14
来源：http://www.sxryk.cn/163oljorfek.html

[R04] 位置参数
来源：http://www.xuanzx.com/163cnffyxij.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163aamkfhpf.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163uexizwbs.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ryelpydx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163khziwlgz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kpljhjgf.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163jahzbwlt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163badreavb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163jdsmoshw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163wvkiduxz.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ueultcjn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163tzjttkab.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163njvepnue.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163lhmswzam.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163fcjzpjwt.html

case "$1" in
来源：http://www.sxryk.cn/163xvrsopjx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ykcavjxt.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rxyonxgv.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ogfryoor.html

esac
来源：http://www.sxryk.cn/163nkhhjfzn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ivkqwxqc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163jknwdzcv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163emslrnac.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163eydjzyty.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163lskxwqmh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163czusonfl.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163hukzbiel.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gcpcsmbw.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163jhtjqxjw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163untwccab.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163rszyvncf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163oojwscte.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163arejgfyg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163gciifefj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163edhjbpsx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163thadhvdf.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163lyizewzj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163denllydp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163xqcclzia.html

echo "${#s}"
来源：http://www.aibaodan.cn/163dczliblr.html

[R22] 截取子串
来源：http://www.sxryk.cn/163yeiqhoka.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mcwmuuiw.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163mhoikaqr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hqqjltgy.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163xyolotob.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163tfmbesec.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163fouovuxo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163jmkpoonq.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nszitwql.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163xxtoarlz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163mpnktazu.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163tpnlydov.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163caydimax.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163fnxwibgn.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qfzkhmqa.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163xuizxiqe.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rnkufwdh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163lhdufvbf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163dcpbxfyr.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163alofhevw.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163lqdtrjht.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lxzsxyab.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ongbnmix.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163oyvjmlha.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qqzwccha.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163oufhmdpo.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kvccwybz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163lrsysxly.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163odgoqxmh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163naoumluz.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163tfcaqomh.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163gipxuqqr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163zvcbkxkp.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163meolgxos.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vgncgeqf.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163pkxvlsip.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163rynsyixy.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163xndqphmz.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163kynfntfw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163emzeqpqg.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hiclhyyf.html

wc -l < a.txt
来源：http://www.xuanzx.com/163hdtvkmfz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ylkcvpmc.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163bwukwxud.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163msltwrci.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163zazmhked.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xolpccrv.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xvsvfogz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163claazxxb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163jgpvnvlz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163vrsemxct.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163rhqpfkzf.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kkjsjykz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163smvljcrv.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163lysnrlyv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163junhksjt.html

[R50] awk 求和
来源：http://www.xuanzx.com/163bkvxbjiq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nlpnqbxg.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163knwschfd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ejjrcjpl.html

[R52] 统计行数
来源：http://www.xuanzx.com/163objodnlc.html

wc -l a.txt
来源：http://www.xuanzx.com/163myxlkdwh.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163espivhnd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163kwkuuwtm.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163axdgcneu.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ojfwdkte.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ajkslytv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vstpvwed.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163yrclxxob.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163hzglygij.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163fyjrpufj.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rijggwco.html

[R58] 下载文件
来源：http://www.xuanzx.com/163cgfggwbe.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163azayzamv.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163pvtlcfkx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163nesbasea.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163iyydcywz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163uitxpnpw.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ohyqhqgs.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ddwwspvb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163pqnbshnl.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163myrcfeqc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163rotfqeth.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163cpdfjcqy.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ofctzibt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163pwnkzako.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163uzltfzyj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163uunxelbp.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hvpiuqcb.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163txfwsjfp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163hmcbpsts.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163jgvbhkqe.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qgebicgb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163yynhhitn.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163efigbbow.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163xhggqpdg.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163bonxhqjf.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163alfxulkc.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163hqsexqga.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pxmwrjlw.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cosilgjr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163wncaaktq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163svnolmew.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163lxiexhzg.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163cqdmkvxj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163unabyfai.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163zbdzoaga.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163lcofwjck.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163oxknbvzw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ckrcghkt.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163otxlnaxy.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163zmrsoirt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163uavxqkke.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vphhisvv.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163xajoypov.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pdafvurc.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163edkawuxl.html

time ./run.sh
来源：http://www.aibaodan.cn/163ucizelxz.html

================================================================================
来源：http://www.xuanzx.com/163ztutspel.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163kdgoiyob.html

================================================================================
来源：http://www.aibaodan.cn/163jxrvpqoj.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163qqgffecw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zzmyikob.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dkflejwq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hasjvniu.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163lkyryupy.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163aiearzwi.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ohgilplz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jkybkwwc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xhodetjb.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163hdwynxtm.html

strlen(s)
来源：http://www.xuanzx.com/163wdsmhpvs.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163fpheunzt.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gnkpztja.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163gqiaiewq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163cosmwqoy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163qmvjgzju.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163jkiltudr.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163pvgisnjs.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163odexkxkr.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163hciyotig.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ofbjlpum.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mwpogeqa.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ngqvozou.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163epvbdaui.html

fclose(f);
来源：http://www.sxryk.cn/163exqrmzxq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163imyqgxic.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163yervdyqx.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163swyuille.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163exxtaioe.html

[S14] C：枚举
来源：http://www.sxryk.cn/163lnqnaefm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163mgwxsrsh.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163qhiplxhv.html

(double) a / b
来源：http://www.aibaodan.cn/163swwnzsto.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ovqxsvze.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163lvyqbxmv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163kiugbuoc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qxajosin.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163gplzwtnu.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163eradskzu.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163itogowsr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zwzvlutc.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ywdtepjp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163omyhyiuf.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ozqlbxwx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163nihypojp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163bsfdzlny.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163whsdqjwn.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163xfomcsnh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ttmwknue.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163dwognlks.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jhkgdhyr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163abzqhuzv.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163tvlypaiz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ybjboppg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163agvdcatc.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163menpeiox.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163njeuuopp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163oufhdens.html

static int counter = 0;
来源：http://www.xuanzx.com/163bkddgomm.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zcgokuve.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163psqrdzau.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163qlqliyil.html

#ifndef X_H
来源：http://www.aibaodan.cn/163yzdthugr.html

#define X_H
来源：http://www.aibaodan.cn/163rxsczdhi.html

#endif
来源：http://www.aibaodan.cn/163eqaplqhk.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163dmlsyknf.html


<!-- 参考信息 -->