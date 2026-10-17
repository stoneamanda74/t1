外链999!wailian999！

[Q63] 开启事务
来源：http://www.sxryk.cn/163pmhbbtfh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163nkgbslby.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163tzkktpjr.html

COMMIT;
来源：http://www.sxryk.cn/163iberjmen.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163nvzqudab.html

ROLLBACK;
来源：http://www.xuanzx.com/163rgbznstq.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163hglclbxq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nrsxjylo.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ehmtpdfm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163bavyhvef.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xwguwunh.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163gglaiuxu.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lefiyylf.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ugoieeyd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lrgilnjm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zlnbbcbx.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163lbblbdzq.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163lowtagjb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163sejplcjf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163taevnogo.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163swcvwupw.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xvbdkshe.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163yxelleki.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ncgtfkhr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163kwoelrql.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xbgydzcc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163gtmkbswz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ghauiebw.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163amfvzusv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163mbcangsw.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163xdahbypn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nagmtryc.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ciwgryqq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163eoksonqd.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163bppeohty.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163lkjiobtt.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zhyghpip.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163uoqxlcso.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163gexznpph.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vhtvlucl.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163npyysmkt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ejzupjki.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163xqxfhjny.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163gyhrqbme.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163tfmodlot.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163datvtsrq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163prgxiuan.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bthhwhhz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163trrptdah.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zcwqivvs.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163pyxgzoev.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xnxkmsvj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163wghaguvi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163zlfyprlt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163fgadnsli.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163oebwpldd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163efzhvrme.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ejcmyddi.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qmxdcwct.html

================================================================================
来源：http://www.sxryk.cn/163lhbyywxz.html

R. Bash 专题
来源：http://www.xuanzx.com/163gwnictpp.html

================================================================================
来源：http://www.sxryk.cn/163txvcklqy.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kamwuksw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163mjkmxwtz.html

set -euo pipefail
来源：http://www.xuanzx.com/163aduxuvwf.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163woyaotzf.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163cmmyfksx.html

[R03] 只读变量
来源：http://www.xuanzx.com/163iayjhblt.html

readonly PI=3.14
来源：http://www.xuanzx.com/163iyimjdvn.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163oskizztl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xwctbqah.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163atuwedtd.html

name="${1:-default}"
来源：http://www.sxryk.cn/163gtbbipzx.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163depigzsc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ohdxokux.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163alrkyadi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163yljxrczc.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163sjamvrha.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163pezdlmbf.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163uzcplolb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163awmkfkko.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163qxugxzng.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163mkvezsjo.html

[R11] case 多分支
来源：http://www.sxryk.cn/163kxkejagj.html

case "$1" in
来源：http://www.sxryk.cn/163dbekkjtd.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163lmnjwryx.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163upatoemi.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163xgkrkwjk.html

esac
来源：http://www.sxryk.cn/163bqsgjrwo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163belrqhxh.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163pffhfujv.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163rtevfvxa.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163trectsee.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163buzoilxk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163mdbicuua.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163abrcrela.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zwrljvap.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xoemladm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163qsdwfdbo.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163rkcwkdzb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163bdckipxb.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163kvdlfupf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mnevyukl.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163xacdxjhg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163pvlasusu.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163fkuyjslx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163pkywdeqy.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163vjriucln.html

echo "${#s}"
来源：http://www.xuanzx.com/163mmwxkzns.html

[R22] 截取子串
来源：http://www.xuanzx.com/163onbdmfem.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163dgatnzyy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tzkfgmhv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jtpaohep.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163rjezlsye.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163lvvemkaq.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163xfqjgvfq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163tkbvxhmu.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hirjodys.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ezpjfzox.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163mcovqoeh.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163inhdayde.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zqmfvqpn.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163bjkydslw.html

[R29] 定义函数
来源：http://www.sxryk.cn/163cfvjuakd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wippnbeh.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163hlgeicjg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ajpjbies.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qeveeidh.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163mrdsjnct.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163luhhpfbe.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mhpwduzn.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163upgbvmrz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163dfxbujjb.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163cgeecifs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ktscjbpd.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163cjphxdgi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163wcovzxit.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163gkbnfoxo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163rtpdxzue.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163bexmznzw.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fkisywrq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163qngnswns.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163iqblhpes.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163elluexuk.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bwwzazbq.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163qdjcnkim.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163hxasxprf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163nqlzvsij.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163juzqzasu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163fiqimljs.html

wc -l < a.txt
来源：http://www.xuanzx.com/163auzpqvam.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163htgekgis.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163gmoujrvm.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163nhjhlhsj.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gnayvjzs.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fxpmbjxf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ixdswsao.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dufrozdb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163hxsbqeok.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163rqqtcnxs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xumwktui.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jvrzcdvd.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163tsowavwt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163cshetlsb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163udqssowo.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ojxqssug.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hczonbtt.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163gmzbdmsh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jckwygee.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163wtdirtab.html

wc -l a.txt
来源：http://www.sxryk.cn/163dwjhzdjx.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163dfxomoor.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tqzbythl.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163hoejegyr.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163umqikgbf.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163psoqkukd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wkmpuoup.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gvblssvg.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gcwoiyqu.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tljdzljj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163zcbxwlvt.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163mkenbovr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163bpxyccsl.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163tedauhlf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wfeilnpd.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163sboobysf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163xtsbgqvd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hbmkztdz.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163havakyws.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163bvypctwj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163pfxkswka.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163qxtuvmrf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ouudewci.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ubvatxrz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fhfjjmwy.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wrztznhp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163krxompow.html

[R66] 定时任务
来源：http://www.sxryk.cn/163izwgfskc.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163febsxror.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163dvbwpmkt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163fqymbuve.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163pklycfxa.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pkhmsrrg.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wokmynsg.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163kkvdstxd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163qktljudh.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163zqrhvkbb.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163zgsaiayk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ikgmtubm.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163srvhchkj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163qvvbfdpf.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dmlbiymq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163sbpktgmd.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jlrccvgl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163yhcxfxap.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lrpxriiz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163gdgctlcr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163rpxobkhd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fqqdaffq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163wyfstetm.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163anlqapsh.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163yklkujjm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wpjogjkq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vqhhwddd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163rugizhvz.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163tjepdhnp.html

time ./run.sh
来源：http://www.aibaodan.cn/163eutlhgpy.html

================================================================================
来源：http://www.xuanzx.com/163zmlrcwcs.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yohkznyd.html

================================================================================
来源：http://www.sxryk.cn/163xazwnqdl.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163yuclncsh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163youtttyx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dmzgmrhi.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163cvcgjnxm.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163qbhxbxtd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ilqgdyio.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163yobdfygo.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ovgddgbp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163uvgzpdvd.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mcnqslco.html

strlen(s)
来源：http://www.aibaodan.cn/163fklblgqw.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163abnvinyy.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ojmhzzsg.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163kxzynofc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ewksevpg.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163jgtwuhiy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163vgpixkmy.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qauuurwk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163weqqpilt.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163psergcrp.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163aaqqccbe.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163abqrjbcu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163zscujwqe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rrvowlnn.html

fclose(f);
来源：http://www.sxryk.cn/163gjocloxp.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163nkvastvv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wpxfkksc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ptouvsmo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163nzvejbah.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rufarkis.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uapdmvbu.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163hgdrhbfy.html

(double) a / b
来源：http://www.sxryk.cn/163bqxrlklq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163skrmcmiy.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163fwjlyhkh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ckvwlmlp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163datpcfje.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zykfxnii.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163tlelwbkz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163trdvahjj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jjmmxyhs.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163mhrhfubb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163gphbjxqv.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yyjpliuk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163urpkztix.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wgvmysse.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163chawzucl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163tgjagxmr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163agqdegfp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163iyqnzhdl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163olvemvmm.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163yzsmphdj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gliqlpgx.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163gzokmtqu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163afpyyhyx.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163oegobuii.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163abkwdzxw.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163javlljjs.html

static int counter = 0;
来源：http://www.sxryk.cn/163qtzqgtqu.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163rxcikgyt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zpvihtce.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163wyzwngap.html

#ifndef X_H
来源：http://www.sxryk.cn/163teaofdbu.html

#define X_H
来源：http://www.sxryk.cn/163rwmbrxxz.html

#endif
来源：http://www.xuanzx.com/163qjmncxhc.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163nzzilysx.html

#include <iostream>
来源：http://www.aibaodan.cn/163ldgdkcwd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163pospkpax.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163quyoingp.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gykogepp.html


<!-- 参考信息 -->