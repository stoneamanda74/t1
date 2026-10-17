外链999!wailian999！

[Q76] 按天统计
来源：http://www.xuanzx.com/163aexuztxk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gptktpjf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163drxrhjbn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ebdenhaz.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163wwbezgyr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163escdgwwg.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163pschhtqq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163mbkporvt.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163awczixqm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163qbfnjady.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163tiowpybn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163twsjwiwy.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163sbufosfn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163plvhxgrw.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163hrsdtvsr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163cabsbtxi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ncbrvgjc.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163psmcaeud.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163asvacupa.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zbkydyrf.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163dvsuefpu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fifjynto.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163zqftuvzv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163yygpjuxd.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163fidehovm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163jywehbsy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163vsacaigf.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qmrkuitb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163uxkklupy.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163yxakgwbk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163pfosbsdw.html

================================================================================
来源：http://www.sxryk.cn/163lpqdzpgf.html

R. Bash 专题
来源：http://www.xuanzx.com/163fbwzjtfh.html

================================================================================
来源：http://www.aibaodan.cn/163qrmkhxub.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vjczxlng.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163zanmbgkq.html

set -euo pipefail
来源：http://www.xuanzx.com/163etijaoar.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163liiluffj.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dtomszfe.html

[R03] 只读变量
来源：http://www.sxryk.cn/163juzsuost.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jytzlprk.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hrocehrd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163utswsrbt.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163yoxdewse.html

name="${1:-default}"
来源：http://www.sxryk.cn/163pghgbmcl.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wrrdoihx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163qeeijpze.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163sungoxxm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163pielxqbd.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lxwepfat.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163tyzedtwg.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163xinewday.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mihfpaiy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163dateuhui.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163yungdghw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163zbxkhoil.html

case "$1" in
来源：http://www.aibaodan.cn/163kiwfylrz.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fdlzvega.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163surrxguq.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163bgbgmovl.html

esac
来源：http://www.aibaodan.cn/163dkaefeed.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vrabqest.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bldolukc.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hfhxpsxk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rarldygl.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cxmzodbj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163vkzenonh.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163juqmsorp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163eozivpjj.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kjnzshsq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163beayqwxy.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qkrhnknq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163qeloozez.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163rutxcklh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qcargkos.html

[R19] 数组长度
来源：http://www.sxryk.cn/163wfzmksit.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ddydpqcm.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163buqwzvdy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163slnqtrtl.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163tzvdjazt.html

echo "${#s}"
来源：http://www.sxryk.cn/163evauwhtr.html

[R22] 截取子串
来源：http://www.xuanzx.com/163nspkvmwp.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rfhufmxw.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163gqoparpz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163xzzoldfu.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163tqnvadpj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qngmqdrm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163akigjaji.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vgyhiarx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163uufupdlq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163gveaabty.html

[R27] 算术展开
来源：http://www.sxryk.cn/163sprnircg.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163yyexguov.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163tdvhotyv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163gbbbvwwf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163qpfsymfa.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163parhbphe.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xviubxjz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163dojzcnoh.html

[R31] 局部变量
来源：http://www.xuanzx.com/163yshlclai.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ypoulcpx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ddhyeonp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163wocjxdix.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163obbeetrl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163rpuefxgi.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163lxcksetp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pkezmcan.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163nfuvopja.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163bstvkshg.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163cdhljcpr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163znzlfqsp.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qekxbgsf.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xzanftiw.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163bqholflp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163wtkrjqwd.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vnzljecg.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ancckjhu.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163zbmulvcq.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163tkakseoe.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nufafauo.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hbrimbtq.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163wzodotak.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163tuvajgvm.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163jelxgemb.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163pkplejqs.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ocktvtyd.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163dfvzxymf.html

[R45] 批量删除
来源：http://www.xuanzx.com/163piabzrpg.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163haqsuboe.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163cikvhwor.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163isqwmenc.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hkgugorg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163spccbeom.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163byrrevry.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zvpmioyk.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wxdejdno.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163duhfzobr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163iazjnbfb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163zpevmptu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163vspgswni.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qqabnpkw.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cfjrexar.html

wc -l a.txt
来源：http://www.sxryk.cn/163kzxvwvke.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163excrzngd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163jyqmxxhl.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163cfjtxzxk.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163irpogolw.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163dpauqxiw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ggtrzuah.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163jmcyknyz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qtkbopre.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tixfejby.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163lxvgdyzt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163lzefjpko.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nejmzjrk.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163sdknojlv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163qfjfkrsn.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ehcnmepr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163xjhqfjwf.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163waicowwv.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163pmirstpa.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rajmrytc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tperublg.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163jybapfnp.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163tudxtwit.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wzprnisd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qcbmrxtf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163riqasxhr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wrijkwvn.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ggjdxcfb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163mydykrpe.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163lygwpsvj.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ykrszivw.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163xqtmhujs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dmadyobc.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163xuztqnic.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163fyiqylcm.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163yoofkwbe.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163tzfvrxod.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rlguyjep.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163sciqppvf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qfcktgxn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fzeisoqx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ydsiyxuf.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163acllnwkl.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163xjsnbfar.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ubekvrta.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163bcyoiumm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ilgycmkd.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163zribuefa.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zvnrszmx.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163uiakcpqy.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lhroppua.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163uwpjqbmx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ohfgiurk.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163tfnbdpeu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163syzsyfvs.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163tkdwbsba.html

time ./run.sh
来源：http://www.xuanzx.com/163fwocwikh.html

================================================================================
来源：http://www.sxryk.cn/163kvukocyt.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163icrkptce.html

================================================================================
来源：http://www.sxryk.cn/163enorvvbi.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tbpegbvk.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hxrssdjf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ykewvxsx.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ctyqcfnd.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163evvnpmfq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163icgnwqwe.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163colqatdk.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163drcrvyty.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163dhpczuea.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163qslukniq.html

strlen(s)
来源：http://www.aibaodan.cn/163wnnjgvzx.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163fcacftpk.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163dvgobdxr.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zbxbclle.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163qltmrpcn.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163duqhxpok.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ricmhptw.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cmjejqif.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163gmehjobh.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163katwjujk.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163rqiqwjhj.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dicberaa.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163oiawmvpi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163rhssywro.html

fclose(f);
来源：http://www.aibaodan.cn/163wnvvablg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gkthvupm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163emwkieba.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163vesirngz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163iusvxisk.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163tqdssber.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dtisdlru.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163pgbvlrka.html

(double) a / b
来源：http://www.xuanzx.com/163lhnxfdie.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163elmqbzpt.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ghquppke.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163xbzrvlqu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163xkotoyvp.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163jioibhtl.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ecijnrdk.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163nzxuelxp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163axewtnxx.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163fpccnfvb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fuvjtbbb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ynowqnmu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163eeuikdgg.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163vyjdgmda.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163wcghiupj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mtbjoisi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163belyvpxd.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163nyukdibb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163gaztsbgn.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163eyhygtze.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163itgfnvlz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jzcpipvy.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qzdbjpjf.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163mycbjtsk.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163gnqcqtdh.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tnahyupg.html

static int counter = 0;
来源：http://www.xuanzx.com/163rezxktwc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163eqffkhxv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163xdkoaydt.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163orvjyaji.html

#ifndef X_H
来源：http://www.aibaodan.cn/163valtvcqf.html

#define X_H
来源：http://www.xuanzx.com/163tzchcprd.html

#endif
来源：http://www.sxryk.cn/163qtbcsclj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163biqoqqdp.html

#include <iostream>
来源：http://www.aibaodan.cn/163zfvabqya.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ntwgnsga.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163weouzgnf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mjnlybjq.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163cfsaqstx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163latfiypw.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163yiqwjixw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163yufaifzl.html

[S35] C++：map
来源：http://www.sxryk.cn/163mwvkggpq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cyocdbve.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163garzvvkx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mtytekdg.html

[S37] C++：set
来源：http://www.sxryk.cn/163uubxmeut.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163odblqmdb.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163xslbbaau.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163qkjaemhj.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ctadkuij.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163rprehogr.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jnyudjsq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163yxhndabm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163wixvmdvu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dxxzzcfl.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163dgktaucm.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xaajwmde.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163eaegxhdc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163sjbnwpir.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163pbfjbzre.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163znsbwxsb.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163pvrrtlbc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163aniywfkx.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163itmjncrj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163qsvouipc.html


<!-- 参考信息 -->