外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163dstohrjl.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163xubldqab.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163rgnzmgsm.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ajenoujx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jvchxrui.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163svhyknzf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163shiyzuby.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163fdcdzlfb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163qndilsya.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163odwsqcfj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jxnmczqf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163wfzswtrk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ydmdvimf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163nanbmocb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163odmxgxjg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163uwnqebcj.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vuthcfux.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ddiphpyj.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163tbrdsqym.html

COMMIT;
来源：http://www.xuanzx.com/163iouftbhy.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163vmzoikdo.html

ROLLBACK;
来源：http://www.aibaodan.cn/163dqdznbvo.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163atnprrvm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qwdncokc.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163wsflkino.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rgzjlkqf.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zdedoacq.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163jceuysbz.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jbhykzqj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zdczqhyd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163jhybyitt.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163udfzvhep.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ulifejvg.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bfeiushg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163swtigrlg.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163acybcmrf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163uwzsdyof.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163fznawchg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zxafozex.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163qibqrwqf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163nwlxllbe.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jbcuaqqq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163qxtmfhzv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163fbpplvjc.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163kzxhfmbs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163byjsaecy.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163bppmgcet.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ppmgamtb.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163tdrpyycu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163nyswepvm.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163gomabpfr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163eqazeufu.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163febdlsfe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163nojgqzlq.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zcyzjcov.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163wpedualt.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jpbeltqx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163jdeticdm.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163nnehfhfi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163evnumymr.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163gikhurls.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163evjyfbvi.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163lwjjndkl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163yokftmmh.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163zgvuabjp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163mgpxhgce.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163lwwprgjq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ulcxhyud.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163wcsnmpok.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163grzzpyar.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ajyiacvr.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ctcuyytg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163gxqjztsq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163kwnwdsem.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163htoxcvnw.html

================================================================================
来源：http://www.sxryk.cn/163ijitolgo.html

R. Bash 专题
来源：http://www.aibaodan.cn/163pdbsunjj.html

================================================================================
来源：http://www.xuanzx.com/163ojpcdrau.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163xkptfghw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163lfdsnpef.html

set -euo pipefail
来源：http://www.xuanzx.com/163sckzhoti.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ftotymkd.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ewtoolfy.html

[R03] 只读变量
来源：http://www.xuanzx.com/163uuapvapx.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rmhgqbgc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ejjibzdo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163gnjoflww.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wwfzwcmm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ckrdohlr.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163aduomkwj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163axeypaoe.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163vmcsknmu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hilnzfvd.html

[R08] 数值比较
来源：http://www.sxryk.cn/163hyqnlxnu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ibxgwdmz.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ncdewjcw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mclhhmri.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163gaytqlcx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163yhdlvqmx.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163nigxvhke.html

case "$1" in
来源：http://www.aibaodan.cn/163obdoaazw.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163qqhnvgub.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163rgvcokmg.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163zjejltlj.html

esac
来源：http://www.aibaodan.cn/163ksftlllo.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163shwfwxes.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163shhsxrhj.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ndhicdlv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163mrserrva.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163gdebflct.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nrkaefad.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163srrkfhsa.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jsojhewg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xpbpelzj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163nzkgwzvi.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163axqeesrw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163orfxjatg.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bjmmalqv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163yiltfsrh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163bbnppwzi.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ovbzdcxu.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ydpbkfov.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163hdszcabt.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163jvkafaum.html

echo "${#s}"
来源：http://www.xuanzx.com/163cblsudur.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zycurkli.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163bojynvvr.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163piyogjsl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163nuluuqze.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163jqvxuree.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ekagffzd.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163egbkourg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rulpmadd.html

[R26] 命令替换
来源：http://www.sxryk.cn/163hgtvpqbw.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163sbarimvi.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163outruqxb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163sqcvvfva.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pefdaaed.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ikoccznk.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163koutwzdi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dvcswfeg.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163onkojkwc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ouobatue.html

[R31] 局部变量
来源：http://www.xuanzx.com/163anfgvzqw.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163hzyshltc.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163tqqvtbox.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ltklxxfm.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163jxkbjwig.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163nudkxvsr.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163oacitanb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tztsgpvx.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163lweyrscv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163exkhxhxo.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163kuexkzjl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rgtzxzqe.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163gvbyrjma.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163xbnusnql.html

[R38] 管道串联
来源：http://www.xuanzx.com/163zbuyvsuk.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163nkyskclm.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qbpzylid.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rdpaepwd.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163wzwxpkbv.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ybauxlrr.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163wxjyhgrm.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163nvpszxrt.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163jaakkccx.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ojwkxjzh.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163qiueweid.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163civufsky.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163sutzzlgw.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163fcmzmhky.html

[R45] 批量删除
来源：http://www.xuanzx.com/163nxvqbmjy.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163calwtplx.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163mbcdoyzp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163chtcixmt.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jydixxwy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kevnocdk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163bfunzvfr.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mxspylix.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jaqrchvj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163uxrrdlau.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163enpyhbjx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163elcrgyqm.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163dyistxpi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163bdwzcacg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163pjpfcphv.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fflyrosz.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163pxuoskre.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163zhtddnsd.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163grtndelv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163vcqeevlc.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163fydldcbk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163sdizolha.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lmlxluob.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lggsmpdz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jogjydqu.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nxycltxm.html

[R58] 下载文件
来源：http://www.sxryk.cn/163gsnfuzgy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yeuaqsxs.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163nduweygy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163tycuromd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163sgfebzul.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163tttmgaib.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hmsxycqj.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163srjxamtm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163stbwjwbz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163hsilbern.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163wgrsaddl.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163nwdmshzm.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rqwniyrl.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163naeekmdx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163efrocdrw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163merbajkh.html

[R66] 定时任务
来源：http://www.sxryk.cn/163honqlece.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163droxupam.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163netmepob.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163vzwejktu.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ycyssysf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163asfgfdwb.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163kniusnom.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163zpxdfwtk.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163etsixona.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163xvnnusuw.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163wdobaxln.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163fqqgqcsa.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163kvqzaktn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gsbedrto.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xizvjvua.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163eakpeodi.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163oiqnpbpm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163tdydvwhx.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163odlcwrlu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163mwlgkbed.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163idrodgbx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163jybzbrko.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pnxkoihl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ogerossz.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163qgsfimve.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163dkubaagx.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163znpbqcxk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ggppujvp.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163sblftlnm.html

time ./run.sh
来源：http://www.xuanzx.com/163khsyierd.html

================================================================================
来源：http://www.aibaodan.cn/163fwyteztg.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ygopxjmf.html

================================================================================
来源：http://www.sxryk.cn/163qxujmsjo.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ptnuybpd.html

#include <stdio.h>
来源：http://www.xuanzx.com/163zrwzmnfb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163yrsladdh.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jlzmnwmi.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163bcempete.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163sfyrkonb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ksvvxfko.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163twibyblg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bplrivjm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163sdstbuna.html

strlen(s)
来源：http://www.sxryk.cn/163sulglerg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kbcjsvwy.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163wmnnhpcv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bcprulao.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jafdgsxd.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163nvfhryzn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163hfbknnxq.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hukpyikr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rmboejar.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163sdqlghua.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jnhqecck.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zybzreyu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163kacdqwgw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163hdnqozrz.html

fclose(f);
来源：http://www.aibaodan.cn/163hynqnzsf.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163lvyjsvyr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163tskipeqd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pzoqdrjy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163vizaykca.html

[S14] C：枚举
来源：http://www.sxryk.cn/163fzvfnnyi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163uszciqrb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163fkklfvej.html

(double) a / b
来源：http://www.aibaodan.cn/163bzrwuwnq.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163hdkgyehn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163dwhqokhz.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163jicfwewl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163tpmbcfde.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163whbertth.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163qcojikzr.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163yaqswvzz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pyptqowq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vxddkfvs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ldvxkizf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163lonuozqn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wtkffutd.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163amrwxlbq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163btriptva.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163smgjkkqz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163qdbjifjb.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xuroqmok.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163tnkdyxac.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163zgixkehy.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163eyebibll.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163upbfxbdx.html


<!-- 参考信息 -->