外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163hnowzltl.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163iiaaxyrw.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163nfmvkhsg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163kdvlsgqh.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163qeddznyz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163juzbmast.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163djfrjkzi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163uzmecvhu.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ssjesswe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163kwrttwvo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vmiqyumt.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ccpzwrlk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163hvaxaulv.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163jcsmhadj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163bdvnjdht.html

================================================================================
来源：http://www.sxryk.cn/163celrbayz.html

R. Bash 专题
来源：http://www.sxryk.cn/163kscrtiec.html

================================================================================
来源：http://www.aibaodan.cn/163rnzfpuel.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163uwsclopv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163uwldlvdy.html

set -euo pipefail
来源：http://www.xuanzx.com/163wchditzj.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ncehmzje.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rxlilxpc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163zyqgkwmh.html

readonly PI=3.14
来源：http://www.xuanzx.com/163xoncuknt.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163chgnnawp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mlikalbs.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163kobdgtdi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163kxgwfjen.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163lclpsfnj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jeeyyztc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163uvhbcfxw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ecveyzte.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hiboixba.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163npapdhkb.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163yroryxft.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jgaouinv.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163smekbgaf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163afjnjfnq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163njdrgpha.html

case "$1" in
来源：http://www.xuanzx.com/163wlhvlozz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163orfcrdnf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163tuqzsate.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163cqahlswe.html

esac
来源：http://www.xuanzx.com/163hpnzwepv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163eoukopow.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163czwfqxnd.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163cnchvbtj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163szaipafe.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163mpbuitvx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nwhxvifw.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163npdflcui.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ppkhgook.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163fzdsklii.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ifeusywr.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ctyzyfqd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163nrszavow.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xuriblnh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163oxkgwxoj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163unkixptm.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163uxngymhv.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ngepkvsg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ixxcnoct.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163nrpijlqz.html

echo "${#s}"
来源：http://www.xuanzx.com/163rurasjvx.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163rgovsqvk.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163rxmbywxb.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163lstoiftz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163bkzttute.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163mfewefnd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163egposqbm.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163isxtpdde.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163srebqdwc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163knjpmbfi.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163knlhlpsn.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163husowxmr.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ppmmvdnu.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163lxzrsqrs.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163oxzvekzz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163guzstykk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wjkgksyg.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163esevnypx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wigiozzi.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163inncwuku.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163qifueapk.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163pkyuisnk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163osvfbehd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163pgmumare.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163dbvrgxru.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163eiteguxe.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163greaqwmm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163nyxwfzpg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163gujgodgg.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163dbwrniex.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163jxuwunqu.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163bhgcoplk.html

files=$(ls -1)
来源：http://www.sxryk.cn/163utatzabq.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163kubpxxfs.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163trxaaxnh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jmgfifnm.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163izissxsk.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163njautwva.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163gfzghmgb.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gcovdoqk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163kadavjrs.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163tcwsunet.html

wc -l < a.txt
来源：http://www.sxryk.cn/163fnkukjob.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vrgljlcn.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163szbvgtwb.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ghzwleot.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163innavqsy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163lpqrhjro.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xixyjerl.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163yjrlmkft.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163tatgwhdy.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ktixvksj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163hkhfhbon.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ixvngxve.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163fobbcbzy.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bnjpimxx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dcvdgshy.html

[R50] awk 求和
来源：http://www.xuanzx.com/163gteqrhcp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ucewxqxh.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163jhxwhaho.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163bytackur.html

[R52] 统计行数
来源：http://www.sxryk.cn/163tlosnwdy.html

wc -l a.txt
来源：http://www.xuanzx.com/163lrglpxeu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163mzibjuzm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jmbzbvrt.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163jyclvccm.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163isdxxnuw.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163bxfjgrjp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163jdgseety.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163cmlqqfjs.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163xhwgxqzh.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wkwaciky.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ktlwfyrl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mjrinspx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163zdlpxqyt.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163bwrergwo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163sxachnki.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zfvjvpeg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163mylugrhu.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163dbfguuam.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rptftfwm.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163gjvlyufi.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ntsfuwkl.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163siinjfog.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163dbjysdgm.html

[R64] 结束进程
来源：http://www.sxryk.cn/163pcaejviy.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ewkhxtbp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163myhrmkyn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163nnevwfxv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zwayovyg.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163bmlewjyw.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163krblvxqw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163gqcdbcph.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163zgeeqfmj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163cfirobab.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163tlzbdscs.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yiktdfjw.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bmcphzdr.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uxdfnlox.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163fothfxav.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163kzlnfmta.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163bsjkxlvt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rznhbwez.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zrucftjm.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zfumnftp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163pdvdbhmh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ijbhzrpr.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163lkhaherh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163naqnxahz.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163yzstspwy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zurxsxis.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163gfwtoorz.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163dsamdrur.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163tpwgjibj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163tspsnoap.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ekyhaxhe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163bygdvnoc.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163myfowwlr.html

time ./run.sh
来源：http://www.xuanzx.com/163uhthszrp.html

================================================================================
来源：http://www.aibaodan.cn/163tmbzwezs.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163mlvfxnrm.html

================================================================================
来源：http://www.sxryk.cn/163nmzuneba.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163tlgisvtb.html

#include <stdio.h>
来源：http://www.sxryk.cn/163znhpklgy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163innxnzxm.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163kmrvyeja.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163clkhpmfo.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163dhruitfz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163guamrsgx.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163akhhhcht.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163emfixrqr.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163fbmgbafa.html

strlen(s)
来源：http://www.aibaodan.cn/163vkolrpeg.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163bubccfuk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163olenvvig.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fdmcnnsy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163pwzytnxp.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163gdqqhoyv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rfrvoczj.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ltpztazx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163hupydttu.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ptpidrad.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163dkippieq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163umxiobsr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163sxxowlpy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ctawzmzl.html

fclose(f);
来源：http://www.sxryk.cn/163wgzugppz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qksuliqy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163vhxfzdzq.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163isjbdwbt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vpvqyvai.html

[S14] C：枚举
来源：http://www.sxryk.cn/163cdssxiux.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hwtmtnni.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nzhfsske.html

(double) a / b
来源：http://www.xuanzx.com/163crxcgemz.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jfjtuixp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163njifpmmf.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163kkdrngde.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rfqqaxpx.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qudiuomm.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vqqhwkno.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ikhpqigj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yorgvrak.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ioydylpz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ubnwtxai.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163kzjczdot.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163iorancwk.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163qfgglgme.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ytacqike.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163xpxgbewq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ojrnsioj.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163eseeeutt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bjhgmzct.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163vqypqvse.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163njzokzba.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163penupeiy.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ihtdzyuh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ubjegkok.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163okqajvtm.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163etvsrndh.html

static int counter = 0;
来源：http://www.sxryk.cn/163qvdqwwvt.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163fkminvuc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163scdsvqjk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nturygpu.html

#ifndef X_H
来源：http://www.sxryk.cn/163mhudgris.html

#define X_H
来源：http://www.sxryk.cn/163qgkuepjl.html

#endif
来源：http://www.aibaodan.cn/163rdsiqbes.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163rqnelzsn.html

#include <iostream>
来源：http://www.aibaodan.cn/163nttbhhsq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ptymvjxk.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pykgdirz.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163yucpdtez.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163xphotfjl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163oqbgemsm.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163rhunlbdw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163dbycntfp.html

[S35] C++：map
来源：http://www.sxryk.cn/163oyemlikc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jtebnutl.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163blweqpbp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ztupcdmi.html

[S37] C++：set
来源：http://www.aibaodan.cn/163bsxpewkc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163czjqtxzh.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qrnvxcnu.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163twosmllh.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rfbqqzst.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163tgmmojwc.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163hcuqcgih.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163yjzjwdop.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163oxcaukoi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zbtnmeaj.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163wqkgosxs.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163nwtueeud.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163dilaykst.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163jejngabw.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163uvgmtmqn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163kbefoikm.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tcgzvtaa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163sqiypqak.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ydjpxmhj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163yvoweytm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xmrvtnaa.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zckntkze.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163pdbrernd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163xibuqsyx.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163mqqouwcn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163pcphkkqf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163biccfuqi.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163lzhnvozq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jrfmbgse.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163kiwanart.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ragvyxbu.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lnjhsbsc.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163dezyjihf.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163lylkmter.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163lfzxndch.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163xabuthzb.html


<!-- 参考信息 -->