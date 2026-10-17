外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163gxbkietz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163veskwssr.html

[Q68] 保存点
来源：http://www.sxryk.cn/163iayvioji.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163okcbpwmp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163qujqnvma.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163zyaeqcdo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ugqvazym.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163vutwjgci.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163smckyxjk.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163uzabaypr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163excifbuu.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163wgoshfnz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ioqidrob.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ruiqihyi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163dvrmkzri.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163tsvvynyr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163vfhdjuqy.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163wuyummym.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163nfrrokal.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fjdwngud.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163hgbvpeob.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163xvxtvbaz.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jvxlsnza.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163nywzdpds.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163nktcyvgz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163iknskizv.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163glwwskpv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ckxbxxiu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163aktqqwks.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163rgcnmzot.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163gkizbfwi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163gsvcbkxg.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163uyvdxpht.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163xdpvwrfm.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163adlucfpa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163eexhkngb.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163icxnfdwa.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163vhdtktwr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163uazwsrhd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163gbmxouoo.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163rxecanii.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163mejfxqcz.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163stusdbxt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163gnxfnszz.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163sgnmjmgl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163oxayayrj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163jjuylopk.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163fehwtgef.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ianimyll.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hgjzdjza.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ixxuazvd.html

================================================================================
来源：http://www.aibaodan.cn/163gvsndtht.html

R. Bash 专题
来源：http://www.sxryk.cn/163bfakcsye.html

================================================================================
来源：http://www.xuanzx.com/163okfjwyqo.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163efjcklzx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163nlukxqfs.html

set -euo pipefail
来源：http://www.xuanzx.com/163ucynqeji.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163uzkkijjl.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163msgfdkjk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163xscadxqq.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hrwujavu.html

[R04] 位置参数
来源：http://www.xuanzx.com/163zbdhdqnh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xeytjmbw.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163hdsdcdeg.html

name="${1:-default}"
来源：http://www.xuanzx.com/163tepidpmv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163azrzebll.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163dwlibrvr.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163keibhxlr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163hfjrzcrh.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ophoqnoz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163oripubss.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bbiakmvj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163bflrnber.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163hosyowyc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163jobhztwo.html

[R11] case 多分支
来源：http://www.xuanzx.com/163lqhwxxet.html

case "$1" in
来源：http://www.aibaodan.cn/163ufpvwdxe.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163aorsobvo.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163miqormru.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163dquyeeuw.html

esac
来源：http://www.aibaodan.cn/163opabqghj.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163igckrmhb.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ndqhfijk.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ehaqdmwb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163lrhdwovn.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163stprfpge.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163yzbaxdtb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163fkscdhus.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163wnznarym.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163imxuanth.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163teangxuc.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163flvoxcjx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163hizctgen.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163mrwcxmnc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163sufeqmyi.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ainioyil.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163owutpryt.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bmsijrey.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wvmkopqv.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mesjybkj.html

echo "${#s}"
来源：http://www.sxryk.cn/163njnktgfx.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163usvyjrlv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qxqvcogo.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fkebwyuf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hbwhhyjw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163nouqujmo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163pwjsgzaz.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163klpfkzoe.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163shutkbae.html

[R26] 命令替换
来源：http://www.sxryk.cn/163tfflmtqw.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ekjpeotd.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kfomkvpc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xkxbrfut.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163dpushpqb.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yjydsxhe.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ltegeiup.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zopjhpyl.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163edyopbha.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163tfisdrwc.html

[R31] 局部变量
来源：http://www.sxryk.cn/163yivfswma.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ekyspcfn.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163jmvfqclg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mkcfntbo.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163bocfrnkz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163rbnglnvt.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163zspkefig.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zvibtcaf.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163dilrlcnx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163tpgkvidr.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bpuffnuu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ochxewca.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163dotfjdsa.html

files=$(ls -1)
来源：http://www.sxryk.cn/163zlkicwqb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163kfnxfrsm.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wjfnhohm.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163druqsbqi.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163hatoaqls.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163irpateaw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163earcyjti.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nsfopydk.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ebtlvtzf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163gfcfewhf.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163kxvehlvs.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cnumimif.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ztsqvktl.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163jnpfbtbo.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163borowiui.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qebnibpr.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xftrraqk.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dhuchser.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163qqwolqii.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163gkvfdrpt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163kqydvmrb.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qapduvbc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163dbgktovr.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163teszomik.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zfycclxv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163kockeqrb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163lcjcxijl.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163anfjheey.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163gzwhfdnw.html

[R52] 统计行数
来源：http://www.xuanzx.com/163cuwslnmz.html

wc -l a.txt
来源：http://www.xuanzx.com/163mfvpeltb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163qzvjonwl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163nylyptdv.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163dhvkwzkk.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bpqfkjbz.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163yxyelhdi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163upxfdgef.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163wbcoqnpy.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163losghads.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163mpmfypzn.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ibuoffts.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ccmfqjgl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ozisvpwe.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163phbpgbct.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163akorgtav.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163jynxskqd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mhhqhkhh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163uyqruypr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163plgawnmz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163mxztxobh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163lsqbdxtt.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163uicggbpv.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163rymksist.html

[R64] 结束进程
来源：http://www.xuanzx.com/163vniffskh.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163cafkbjsn.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163qfqswqtp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163fgkbiydt.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163knveahub.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163flijpuru.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163cghgkusy.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ncbjihrd.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163zevfpqxw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163slgsfmpq.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163afoflnte.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163njvmmldr.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hfyinokt.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ctqygrxt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163sijrdbze.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jjcgfrjh.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hprvdmms.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163gvoqfvri.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163kzrummnj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zhxdainh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jkatrwhn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163afegzmok.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163uhyesayr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163jtnyclcf.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163poyvnojo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qjjjohjh.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tqsozzrj.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hqxqagly.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163mmuuddpp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163wcqbwych.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xcxrqqwf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163dhpioxsj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163xtnobhje.html

time ./run.sh
来源：http://www.aibaodan.cn/163wgemmvew.html

================================================================================
来源：http://www.sxryk.cn/163xkbwcarx.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ewpdbdlp.html

================================================================================
来源：http://www.sxryk.cn/163qqxwctau.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163cqrvudjl.html

#include <stdio.h>
来源：http://www.xuanzx.com/163cbrljeui.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gybqpdul.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163asgoxtbo.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163edtgssex.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tcmdgzog.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163iqsviagn.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163khozhqgb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163nxmdlcjq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fjylmrbj.html

strlen(s)
来源：http://www.xuanzx.com/163ypldhkcp.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163nxybmzge.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ttpzyysw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xoaidmvl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163rcxpagag.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163sdobgjnn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163eovmeebr.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163eufruuor.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ytmequfb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163gsmfntwd.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ioxrkbmt.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163otlqqgzp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163szkxqijh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163xaryjgym.html

fclose(f);
来源：http://www.aibaodan.cn/163qnjaquum.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ewyrvcku.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163qfbqmhwk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pixmanpd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163zbmzgivd.html

[S14] C：枚举
来源：http://www.xuanzx.com/163urlkyoaw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ochldwqb.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163orlazjhn.html

(double) a / b
来源：http://www.xuanzx.com/163jvfqmwom.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xynsdxwz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163qznxlokn.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163rbsmyboh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163gzyhohue.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163vopvhhgn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163qknypuey.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ouetkilx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zgpydraz.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163pnqkqqjz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rlwbkgfs.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ibbsdewk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163xwxaeenk.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hfhknvpe.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ljqshvzp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163yqdrccrb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jmhkauum.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163pioeyveb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163zmcpqbmm.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xleczquc.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ppsnqntk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163tslsyfmv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163pgoogywp.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qdkbgrhl.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dppvbzto.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163hppuavdv.html

static int counter = 0;
来源：http://www.sxryk.cn/163dcuijytj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163mwpxrzhf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163azlkhkin.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163lkjentsp.html

#ifndef X_H
来源：http://www.sxryk.cn/163kywkrfvk.html

#define X_H
来源：http://www.aibaodan.cn/163nxdnuezr.html

#endif
来源：http://www.aibaodan.cn/163isnxmlmu.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mshjuypn.html

#include <iostream>
来源：http://www.sxryk.cn/163svztqfip.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163didnvgxn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163vxwjhpaz.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hjxzmomk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163urnjugas.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163egconufk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163jwwxipdi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ypwdgjrb.html

[S35] C++：map
来源：http://www.sxryk.cn/163mtiahdoc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163crnkjhbz.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163jilisbdc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dcskmlfq.html


<!-- 参考信息 -->