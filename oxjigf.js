外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163swtxqajl.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163drstonfy.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163olqjteef.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ydrjjncc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gytjmbip.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163jupeqgwg.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163fevaihgv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163yqhdgscq.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qzfoftlv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163alwetbyi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163erucgkjd.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xldzqfez.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163zupesiub.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163mpzyjsyy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163exyplvqo.html

================================================================================
来源：http://www.xuanzx.com/163bheftpcp.html

R. Bash 专题
来源：http://www.aibaodan.cn/163lmdhdeuz.html

================================================================================
来源：http://www.sxryk.cn/163dhehixqy.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163zwqaxzrx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163mtkfewcq.html

set -euo pipefail
来源：http://www.xuanzx.com/163eecyukba.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163exefvsop.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163bxjdfram.html

[R03] 只读变量
来源：http://www.sxryk.cn/163qrnrczje.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163obgylvow.html

[R04] 位置参数
来源：http://www.sxryk.cn/163fhrxarmd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163hzmmekna.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163lfjjisnt.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163gcdezhtv.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163duwmmlsi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163nchohgjd.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163evbwvaik.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163yvlchfsg.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163sdbtoglj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ahjcaqny.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ckmlnpdd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ihmaiwcl.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163cpcjtsln.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163wtnozbet.html

[R11] case 多分支
来源：http://www.sxryk.cn/163fzsueyjy.html

case "$1" in
来源：http://www.sxryk.cn/163gqdhjhze.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163zwvoyjpn.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163cylzbaxz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163kipntjcd.html

esac
来源：http://www.sxryk.cn/163fmjovpot.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163uwurtzsb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163zpdmyctb.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163btxebdus.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163olngplmm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163latddbpy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163znovqxnz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kxtcabsm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163wtyjrodq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163emrmgfwu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163mhpuughn.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163mwnszsso.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ktvundjh.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163yfuttqut.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163aqxfgmnb.html

[R19] 数组长度
来源：http://www.sxryk.cn/163yuravcnb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ovjzxizo.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163efqpotzn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qerzfbzq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jpchqbpr.html

echo "${#s}"
来源：http://www.xuanzx.com/163oqcszjdf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wfxupcpw.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163yccprmlr.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163bvryrkjw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163vnxlonna.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163lyswhkny.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163alzrhbzy.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163umpintba.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bvikxjfj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zmkhipwt.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163pzvvdana.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ghkbziox.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163cqaizlzf.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163kpledfvs.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163pjhptvuc.html

[R29] 定义函数
来源：http://www.sxryk.cn/163jnsgayws.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163nvchocbn.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163oxydgqhz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fyflihzb.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163zpfkbzcu.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163usamioix.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163hdnrylfh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ppkaocvc.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163bxpjfsmh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163bsxcxebq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163sudkaaok.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dwibfamr.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163epztedvk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163uwvmyldo.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qmazgymx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ihuqammb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163iyebwtey.html

files=$(ls -1)
来源：http://www.xuanzx.com/163tmbuuqof.html

[R38] 管道串联
来源：http://www.xuanzx.com/163nnryecwq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163wqlpsigc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163grnwiswn.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163eawxokay.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163tumjjmjp.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163plsseeai.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jydyhbnz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163qcpxskml.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163rgakrtui.html

wc -l < a.txt
来源：http://www.xuanzx.com/163sbxoreps.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163anyjbpvb.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163pgnylmib.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vbemrnhq.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163xovbcnjq.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kjuapxng.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163esgrldga.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163tyfaekur.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163szmjesxg.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fthwifot.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163loevrwrg.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xtmmrfth.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163cgimsdsy.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ftzgkfgf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wtpcmcom.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vpizblxj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163rofgrzap.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163opjqqqxg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163iaoaftpp.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163egponbmr.html

wc -l a.txt
来源：http://www.aibaodan.cn/163obomndlv.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163zclplgtt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163sxyofyrq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163hfqkcjym.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ekuzmfjq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163fshmbkob.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ayvuwalx.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163jmrheiwx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163pwodgsxf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ymzztttp.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163rtuhiuto.html

[R58] 下载文件
来源：http://www.sxryk.cn/163gxrdripb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163mnjugtis.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163lzrvpbdu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163smpubseb.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163fdiyhxql.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163bprmlqsb.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163kxxovkyo.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163priaduap.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163txpgjgdj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tvqhuijo.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163cqxlrubv.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163txgykezm.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163rutkgpfn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163dtmvnqkw.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163qozwusam.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xjtzhgut.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163alwumdce.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163pxesmmbl.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163uwvfixau.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163dddkhoil.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163uebmxjhq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163lmmyqsyk.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163iqcboibm.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xuvttywh.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163umuxgbab.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163iurqndko.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163apmkgdbn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163tqhrcvdc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163vawxflmg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163bbadkqus.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163aitkhypp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qnkbkzbx.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ayuqqkhg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mmqkymih.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163iountmrd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xtlugwbx.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ogmhkbxq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xxfayhir.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163wgajaqmj.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163zeghkret.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163cjzmrxxa.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163khgutntk.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163rvjhqxte.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163cgoydega.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163cdimjhxo.html

time ./run.sh
来源：http://www.xuanzx.com/163hdqdwvda.html

================================================================================
来源：http://www.xuanzx.com/163rrcuckhx.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163qltpvcvi.html

================================================================================
来源：http://www.xuanzx.com/163vhgvqrzp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163nzenegvk.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163gpjgztri.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163utzwkhiq.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ejazuqju.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163rpbgufxz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163btvkwqhs.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ijwhcwdf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163mjzofrso.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163bsgejezn.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163rsrqnfus.html

strlen(s)
来源：http://www.aibaodan.cn/163ghjzxjoo.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163gwwmncit.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163fijzblxd.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163axtsylpv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163cgxvvajf.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163whvbavoa.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163qwihobhv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163pdeesbsm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163tewivctw.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163qaaomvyz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ohyzgbvy.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ylzjevqt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163llxpgsnc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rwsquned.html

fclose(f);
来源：http://www.xuanzx.com/163aimuamrd.html

[S12] C：写文件
来源：http://www.sxryk.cn/163vihgjozv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163fvxaqdnk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vtilmhtl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kxiiznyh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163azbcqcgz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163pdlfojrr.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fizdqqyo.html

(double) a / b
来源：http://www.aibaodan.cn/163tsarrngt.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163zqifmzio.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163klcbktzn.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163sbhkhbcz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163nqemftpm.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163dzzbmxff.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nkrdpjss.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wztmboby.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kmxrxsea.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163lkzydkzr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163exgfcplb.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163jkepqcae.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163kpdasvdy.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vlvzehwo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163gymizgrv.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163hdjgmcoj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163dqnvjgub.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163sbdyhgua.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nqctdape.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163wspnzwje.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163abdvlgtc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163cpwfcdma.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163fzvsqbxk.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163synmcgtx.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163qbtgygrs.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ishoqbjp.html

static int counter = 0;
来源：http://www.xuanzx.com/163ndjfkfro.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163muoyrftk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163gdhhaxji.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163paxrqfdn.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zplrmilb.html

#define X_H
来源：http://www.xuanzx.com/163fksxdskz.html

#endif
来源：http://www.sxryk.cn/163zkiftgjy.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163lojgxftf.html

#include <iostream>
来源：http://www.aibaodan.cn/163gedlxvsm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tzzmhjcs.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163niubpneo.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163poszmqlj.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163zpmkunil.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163vwadluip.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gzulwmwg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163kmymjhns.html

[S35] C++：map
来源：http://www.sxryk.cn/163cyedeqpp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163snckqsvx.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163lwqbptfq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gxhqdozf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163caqcmuic.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163hkopnvvp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163khxqgwmt.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163efaaupid.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163bmkbflxa.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163bziwrsba.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163eijbitgs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163rawkpvpo.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rlsdaqvu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163scxfaknp.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163kzmqihch.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ajfjmpay.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163inscogye.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163bvyvphcj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163filqctfr.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163kguezkhi.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163yfbclcpp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163kmnpiizo.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163pkskcfwl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ifwzvzde.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ngwkhaxh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ggcvhqkr.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fzafzggt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163iytvhuly.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xduorcbe.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163bjcrpcyg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jehnownj.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163dkjrwbyl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163cfkeoobx.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163atsnqzhx.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163hkvhvxtd.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163byrbpfds.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163uxqyckdm.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163beblezdw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163hwkwvzbt.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163orzhotro.html


<!-- 参考信息 -->