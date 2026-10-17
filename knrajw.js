外链999!wailian999！

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163cylzvbsr.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163upxfwvxf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163bdrjsjeh.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163jlonuahb.html

case "$1" in
来源：http://www.sxryk.cn/163ctigacsl.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163qjenczvz.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163kqmytpin.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ijytakje.html

esac
来源：http://www.xuanzx.com/163fkgwqczb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rwbptvih.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163iaxeqedz.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ohmeaekw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rvbutyjh.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cncgkxxm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ehgodywn.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kelzujmb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163yyvogwgd.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ufhcbziy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ednkpehf.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163xvgusmhf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ajgtdvgz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163uujurjbz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ivzubthx.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163keialack.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cpjxjoix.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163eaojiabr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163jfrbsgfr.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ezzpzqxo.html

echo "${#s}"
来源：http://www.aibaodan.cn/163zlxrmkfw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xwvcftmx.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163bowtzvdh.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pdihgujp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ooibmmgf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163lpkwkacd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ewaaisgj.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zkvasbfw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ogcjjqab.html

[R26] 命令替换
来源：http://www.xuanzx.com/163wetxazfx.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163tzdlpspb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163gdlitmho.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rnfjgzvb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163uwvfoaob.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163hfiqktxr.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kwkciofu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163crskjutx.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163itmuzkev.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163zldbmggn.html

[R31] 局部变量
来源：http://www.xuanzx.com/163vnhzkpiw.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163rowpqtvi.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163mijqwpea.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163yrcvpnrb.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hacujcaz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163xdigawqg.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163zslgcwif.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qwgygpib.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ohbssumn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bkuxtdyl.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163eoveryjw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163jpzsblcs.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qeqageur.html

files=$(ls -1)
来源：http://www.sxryk.cn/163zkcaifir.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hvgisytl.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163lbdnwcqn.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163alkdfjkz.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163gzgfihlf.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jsxclkom.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ewqebiwy.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ojmyltol.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163bpnrsedx.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163sdrgqzil.html

wc -l < a.txt
来源：http://www.xuanzx.com/163tspjczsl.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163olautexk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163eufinddz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163pbgjyazf.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163acjsfync.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ovbkfvyr.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163poyutmox.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ntesxcmj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163mjuicqcl.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163rlqsimym.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163dhbiuwue.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zxnyyzkh.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163pvjxxfka.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ckecfbxf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163gkrxhlxq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163kbxgmupm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163btxonmdr.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163jnsbyayw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wdhfjlqe.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vsdzzkst.html

wc -l a.txt
来源：http://www.xuanzx.com/163qqfytvfo.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163yxomzbhi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163oajhvgxj.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163qewjmblb.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163pnxplhzb.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163diahtknc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163eggzzfkn.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ttowsvnv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gcamjmqp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163rnpxbljq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163mwudocjs.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qloapncp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163nmeqjumx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163czjzyosx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163upjrrcgf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163swxdmpom.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163qticdusj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163jdxdpomo.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163rdibhuni.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163qklxxgny.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163srmvjcny.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163oxposzei.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163edozwpbt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163gkpwqhij.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163lgmmwlzg.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wrfavgzo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163duwmquhi.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163eetcjixz.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163rdflyyiw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163zilorwif.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dyprgjtm.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rusmxjqp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163uiimgscq.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163arpacvjz.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gavxcyfb.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163sydarybx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163wormndhn.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163dbnncpve.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163gygfrbjp.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163nofmxobw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163nsvazuxe.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163lreoqbrp.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163mfeulwlv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163orqhbpta.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163fjgwgjsb.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163azkbhmta.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163zwopgzac.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163xxaotqpr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fwenyfxy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ugemnegx.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163qtgdforq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163zgiybzgb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163stmlotku.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jviqguer.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163uvmibipa.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163jjhecpxg.html

time ./run.sh
来源：http://www.aibaodan.cn/163cmqeptrb.html

================================================================================
来源：http://www.xuanzx.com/163xfmneuja.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qyamlund.html

================================================================================
来源：http://www.sxryk.cn/163seryajsf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163owldmmks.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163nntpiwje.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163gyuojarr.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163egmbjbdm.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jktrscqd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163mjdmimmg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163odnofatz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163texbaavm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163dyahtzkq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ujqdtipe.html

strlen(s)
来源：http://www.sxryk.cn/163isgvsjkt.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ykgsavrs.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163pxshbmfc.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zcltycyn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163uenyqvvh.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163sniuauza.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zcuktkwo.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qqzabpdh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163tflvudom.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163prrxagrv.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163uqwwprtw.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163osrcvedg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rfaocvfg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163syidryfi.html

fclose(f);
来源：http://www.sxryk.cn/163ifipmrjn.html

[S12] C：写文件
来源：http://www.sxryk.cn/163famwdcae.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163lfqpwaoo.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163extztznv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rlqiuohv.html

[S14] C：枚举
来源：http://www.xuanzx.com/163zcgzmpad.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163klpdvjis.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163vjqoizgd.html

(double) a / b
来源：http://www.aibaodan.cn/163qpcabbtn.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163qntoqyvv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163tabnexat.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qagatrdj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rsnusawa.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163vuhkhdzt.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163tmzoukyq.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163dbzonprc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cfryuhoa.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fqvfplmk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163outsnywz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wesadpub.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wypnlbce.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163gvrghtkq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163egaxieen.html

[S23] C：随机数
来源：http://www.sxryk.cn/163phblwgtf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163fwodvkbs.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163crgebndy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yrvvxkfx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bvzlbobi.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163kgonfcnh.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wtumeuum.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ldtzzawq.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163pxtqsejh.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163bnukceiy.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vwcpjemn.html

static int counter = 0;
来源：http://www.sxryk.cn/163bniwomab.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163vhsyshpb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163zovvmyea.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163zdiikgrp.html

#ifndef X_H
来源：http://www.sxryk.cn/163vbwbnujo.html

#define X_H
来源：http://www.sxryk.cn/163wlyxdnkk.html

#endif
来源：http://www.aibaodan.cn/163zkdssxhm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163fzfidjwp.html

#include <iostream>
来源：http://www.aibaodan.cn/163jvawgmfv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rmjbnobu.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163bagjbevn.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163bcbfqlam.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qujwydej.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dgxvuwqg.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163xjeesdkj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163nudzmjfz.html

[S35] C++：map
来源：http://www.xuanzx.com/163rawanqix.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163czasjljj.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163iqpuaecx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qsxeefqt.html

[S37] C++：set
来源：http://www.sxryk.cn/163pagnzfuv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163nbqruwxz.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ocmgjvvr.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163rtngnwrh.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163fvxpjpfn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163gnfqrhsf.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vzldulom.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qzfyyxya.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163uwabvnqu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163qwkujidc.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163uwpejygr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163glyaebwl.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163jejguqlv.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163dknlyroy.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ovdsumzf.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163xmuxzoly.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163xuvbdcpq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163givbiklz.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ocalsjvx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163rvqteskr.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163bofluiaj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163pfjsvolq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163kphmlzsq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163rvuioohk.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mjjtxwkx.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ojqfjezb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163uxtstikn.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163rcnnubiu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163icnsdhor.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vpemktvw.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163llskilvt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ajyzxkly.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kqzgjzcc.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163styjmhnx.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163gdvnsfll.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163virhacls.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jbxdawnf.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163tvlxrgqm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ffnnkhkv.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tqpqeogz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163vbedckwp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163dxzuxsic.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163zlkkhjej.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163fzbrtlbs.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163vbmepirv.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163fgbxrrll.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zetizjye.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163auenzueb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cqdbluzr.html

================================================================================
来源：http://www.sxryk.cn/163frvdislw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163lweusych.html

================================================================================
来源：http://www.sxryk.cn/163mgdmeair.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163jxjcvpjj.html

println("Hello")
来源：http://www.aibaodan.cn/163xhadeyfs.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163exaytres.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163shcmaowp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ccqldgen.html

"值: $b"
来源：http://www.xuanzx.com/163spibabje.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hbcywuiu.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163zgcneotg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163zexuwrfn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ibljeibl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163yxjqcyxa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163tmklvfmi.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163lekwqnuf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163xicvzmcy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163xeewhjmi.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xnnlkibu.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163edfrxoeg.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163teyokqdf.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163fysmgekk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wvtjvbak.html


<!-- 参考信息 -->