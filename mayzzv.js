外链999!wailian999！

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wvnhvpav.html

ROLLBACK;
来源：http://www.sxryk.cn/163krlxeweo.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163cnizgdmu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163joqsnkjo.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zjtlshbs.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163pumtqqzd.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163olpkjggx.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163akdjassy.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163uaooxeol.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163fdzrnvfu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lrckmjyd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163yhgvokqu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163tbtnkaoi.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163sukhcjvt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163lplsryju.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ztkwtuup.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163pgazwxhg.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163jkxokiyu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163degcpxkp.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163gqiplsab.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163mboraoow.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xwgypuxl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163vnzgokbq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163otbaqwpj.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163wiopydqg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163qasgvyus.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163fugjemdz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rhjgcnxa.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163opzovcch.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163gssixiyh.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163nuspxrdn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163btnxfrar.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163icvsebwj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163wnpmbbcc.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xlytisyz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rleexpbe.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163mphalsip.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163gdyuepyo.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163mjqycmrv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vbjqsnhz.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lkrkrycg.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163hizlsbrh.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ezmdcbye.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163tdkwzxsc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gtuldnki.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163kylgzihl.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163fgywbwcu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163tjductup.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ilsuugag.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163skhjhhnd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163cakqjwlt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163zgiomgxg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163djzirplv.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163bffwvbjx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163kjzbezzc.html

================================================================================
来源：http://www.aibaodan.cn/163sfrtowvr.html

R. Bash 专题
来源：http://www.sxryk.cn/163cwimittf.html

================================================================================
来源：http://www.aibaodan.cn/163jsatwumv.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xjthiwbo.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qbduxrjk.html

set -euo pipefail
来源：http://www.xuanzx.com/163btxwhqfo.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163izzqjlqj.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163dafhybvy.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hmnkgqcv.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zjyplxcc.html

[R04] 位置参数
来源：http://www.xuanzx.com/163azdwejcq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163uvtwfcis.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163qunoupsy.html

name="${1:-default}"
来源：http://www.sxryk.cn/163aiqtmpzj.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163zdcjjbex.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163rgoevomy.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163dythmzpp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163dfkqfype.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bshvtpet.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163annlihen.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qfksitmx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163uhnmywjz.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163jfsltnpc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163hjnfwgqd.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gfvamuyp.html

case "$1" in
来源：http://www.xuanzx.com/163lzyabblv.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163rskpzatz.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lwrwxfxp.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wfwiuovx.html

esac
来源：http://www.xuanzx.com/163bseahheu.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163lpkcfrqs.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163guxypfej.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163xcnlzkpk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vjnzyijl.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163jgipmyki.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ehfzntfl.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163muhxrzjd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ytaktsxb.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163koasooka.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ltgcrfsq.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sgywscgj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163dmplriul.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bzvandck.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163xkavaidb.html

[R19] 数组长度
来源：http://www.xuanzx.com/163rgmqksvu.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163qiatbsax.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163almvdeal.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rltkebin.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163krxbzgwj.html

echo "${#s}"
来源：http://www.sxryk.cn/163icpemdcp.html

[R22] 截取子串
来源：http://www.sxryk.cn/163maaxopku.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163lfmmjkqi.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163clodvlbh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163gebycxzx.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qhycextn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163arvogdoo.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gzfheqfe.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zalexcac.html

[R26] 命令替换
来源：http://www.sxryk.cn/163uoxgsqnb.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163otryjzzx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163nddkvxlh.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163gtrhjqth.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163rmznyfja.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163hsnhcfee.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163tjrcfiao.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vbvlvvfj.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jvflplvc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jibzxzax.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163aekorbll.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163afmfvmrj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163txmbuujo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ulughtyp.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163fndsmkwi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xiwbxdnu.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163hzqqotdo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163evgnjbin.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ddmakikm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jirekaph.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163tbjhyldp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163bbakcmkr.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163abtnlmco.html

files=$(ls -1)
来源：http://www.sxryk.cn/163stcfelxt.html

[R38] 管道串联
来源：http://www.xuanzx.com/163armazipd.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163tbktnlar.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ehjrtrag.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163brxbgwmm.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163padipati.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163krjvpzks.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nmwmyfrr.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163hqkfwzxc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163cvzoomfi.html

wc -l < a.txt
来源：http://www.xuanzx.com/163zjnkutyx.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ujyvfmag.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163uvfukbdo.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163aoncgixi.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fqvnnnor.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163nzpgeiet.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163bsjjvubh.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163odaskxyf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163znzfnbzp.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ubhplgxw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163niktgjyd.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163glfesyxc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163cerlvjuu.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163yacvgdiq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163obeyetbr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163wcttvrwd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163rcuxuagb.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163yvmcjupg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ftuydmhd.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163urnkxadv.html

wc -l a.txt
来源：http://www.xuanzx.com/163dojijslq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163uzdwkixo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163taselsao.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163lyxkxycw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163cxuhomzb.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163xiidgdgo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ntwleuyq.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163kveofsvt.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163buaqilgz.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163sdnumxge.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163efqjhfys.html

[R58] 下载文件
来源：http://www.xuanzx.com/163bldqpice.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163gsbqxvwv.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163rjaxadar.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163tfgtvdiw.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163jpwswzwb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163rfnlwwbk.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163lhnoxbdu.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163slnrpxfn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nbltaaqq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163njwskngu.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163frpfdemw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wjyiruef.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tfqahohf.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163lcszakay.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163fzxkmygm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rcnskzfv.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zizlzayg.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163pfjtbwls.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163nvimavmy.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163rmgeyjzk.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ykzepdrc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163hlnikjjl.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163fxpgyfie.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vlxmuioq.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163pbshiyve.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163dybnrqac.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163daakzxql.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163yccytado.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163zcfgppxp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163deyuessi.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163nvocfphv.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163lywfcilw.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ritokqkm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163feevtreo.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163mxnwnnbz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163kpzieizh.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ivafjppe.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dufvuhew.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wvhhltwl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rgfrcyhu.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vpahweny.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pmecudzw.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163fzqtkmip.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163krukfykm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hqtufkow.html

time ./run.sh
来源：http://www.xuanzx.com/163eghctgto.html

================================================================================
来源：http://www.xuanzx.com/163krmkqnkf.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ghbifoqr.html

================================================================================
来源：http://www.aibaodan.cn/163vukllnyn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163htsjiwon.html

#include <stdio.h>
来源：http://www.xuanzx.com/163wjnxozla.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163jzfyxwsj.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163hwtogeza.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vektwhbv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rqgnvtnh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163syozutto.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163umztlscz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163tqzfwcez.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163srtxcchr.html

strlen(s)
来源：http://www.xuanzx.com/163xkkfvhiv.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163bfrullbo.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163frmqoaqh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zdzottef.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ankkvcia.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hthgqhdj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xwafrhdx.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163xdspeiql.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163frzhrzvg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163fhhcldmq.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qchhcpka.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163dlktjfnm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163pibggxph.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hifnroqq.html

fclose(f);
来源：http://www.sxryk.cn/163adwkbjxb.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mxtyfygr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163nqsmxxkn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163piuflqra.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163olopszcl.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163omuiyvnd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163dwqaszgk.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163tcfiyxcm.html

(double) a / b
来源：http://www.sxryk.cn/163obvncgmf.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vgmxrgxe.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163lqipxbvt.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163dtxvxshb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163dirwcgaa.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ddwlstdo.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163dywmewpw.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qhihjzwt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pnovnulr.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163idropobk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cfoxjhcz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163iclrrwab.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163plcdctqe.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vlzxnuil.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163miqjompl.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kdqjrhbi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163izzxkzlm.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163dcnjmyye.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163hzfukquv.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163cwlsljqq.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fvezoldk.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163kfpxvkkg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163slarqidq.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163cpwwfnbs.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cbztirgz.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qquegwml.html

static int counter = 0;
来源：http://www.sxryk.cn/163ycwjhnjk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163bmczzows.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ztoftlzj.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163lukgathz.html

#ifndef X_H
来源：http://www.xuanzx.com/163imkytvbx.html

#define X_H
来源：http://www.xuanzx.com/163pwamutdj.html

#endif
来源：http://www.xuanzx.com/163xhbemawk.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163cftzxhtb.html

#include <iostream>
来源：http://www.xuanzx.com/163ritcetof.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163rnrpodza.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163aaexsmxa.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gkwgzcbh.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bxddsuel.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163etrwstvj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163knrakdiq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163wixgpbqs.html


<!-- 参考信息 -->