外链999!wailian999！

case "$1" in
来源：http://www.xuanzx.com/163okbupdur.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163nudnkrpc.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lcwfwxhp.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163rfghvjig.html

esac
来源：http://www.sxryk.cn/163ygsvqbbk.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163cdhsqczf.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163uaegqkli.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163msbxbsph.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163eoaxupmc.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xudtkbft.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163otiwfige.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ohwjezza.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163zxafbmev.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163tiboobel.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163emfckean.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bnordrcj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163mwbyzqft.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163iqhjnfzo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163sbemmwfg.html

[R19] 数组长度
来源：http://www.xuanzx.com/163hlgprdob.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ackjlbsw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163zahoicmi.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163uscyfltu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163xwnrwnmx.html

echo "${#s}"
来源：http://www.aibaodan.cn/163hohfyetn.html

[R22] 截取子串
来源：http://www.sxryk.cn/163dpyuinis.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163bnizzwkq.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ionwlxyg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tvgdhkit.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163aqvnmncr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ckhpejfq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163kyspxuwb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163uhbmczsw.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xkvjtlkb.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ncpqgrnv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163xmonaibc.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163xpnnpkoj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mtelljgp.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qyexnogx.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163iuuxhfio.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163rdklzdrt.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163fvrtddsc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163vdadaodl.html

[R31] 局部变量
来源：http://www.xuanzx.com/163pvmhajqs.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163htfzmphb.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zarzkcbl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ugxjrjhb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wpdknqpb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ocgqkpvt.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wkuovkos.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zujmwfua.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163olprlxfy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163kbhotjij.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hvpmkdpp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163dxvwvyxc.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163yyceyxzu.html

files=$(ls -1)
来源：http://www.sxryk.cn/163baxhrjcr.html

[R38] 管道串联
来源：http://www.xuanzx.com/163jcqlyqew.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163sfhjsjhr.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163khgpihym.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163lmcefwdc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vvlrikru.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wgoigyci.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kcniiikl.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163sdngbkqj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163utjygigi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ugvsmhbz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163oxxvkzsk.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ulwbktth.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163dhqiauvl.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rtofevaw.html

[R45] 批量删除
来源：http://www.xuanzx.com/163clzwsrgw.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qtgbjcud.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163arvioqvd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163pzhbouqi.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ddyzcxgi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hytxoryz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163aoxpwlvb.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163oghwafqi.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vqmwdslf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bupiqsje.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mfenfyih.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163pmybtiqe.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163iqdslwgq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163kmfkghog.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ayosysgq.html

wc -l a.txt
来源：http://www.xuanzx.com/163hjsoqesa.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163yyysfnxp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jccbvyvv.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163eaxgikep.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ndwwrpry.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ssgljsso.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163kingovlq.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163orrxsknh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163asqzvaqh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163glbybifo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163yaqeolrx.html

[R58] 下载文件
来源：http://www.sxryk.cn/163yfznnsnz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163bymayffa.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tepfqebg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wppeagyo.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163huksbxvu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jkqnqdhl.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gcjjbuda.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nbjnspst.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163cfvhityg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163vibtqmmf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163jsxknohm.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163nepavksk.html

[R64] 结束进程
来源：http://www.sxryk.cn/163nxpqvxoc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163orcrrmaz.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ucedtjjn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163vknyflfm.html

[R66] 定时任务
来源：http://www.xuanzx.com/163qtpgvbde.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163eiwjjsoe.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pecyelww.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163flntvxcr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jwdnjtdc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163lxixgxtd.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163fbtitcvm.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163tbdrwezz.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163xrtfoapi.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tzwkqulx.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ijxikfdk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163rustpnvh.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163kzwxlyph.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163tqrtdhdj.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163amwjyywx.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163xaiozodb.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163cuhoxyip.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163syztuitw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ztmydfvs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163hlnfdfgv.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163cmjncjub.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163imkaqzzl.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163auzpjmdr.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163shpymsaz.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ozsbwfam.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163rqdmlguq.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xtgidzzs.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163wnnzsohz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163xxlvulsl.html

time ./run.sh
来源：http://www.sxryk.cn/163dwwiunui.html

================================================================================
来源：http://www.xuanzx.com/163fbuabgwj.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163dipivihm.html

================================================================================
来源：http://www.aibaodan.cn/163dffjfcgy.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163hjxfbjjg.html

#include <stdio.h>
来源：http://www.sxryk.cn/163tanxskaj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163lphaonob.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163vnapqdhd.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163aoofvjtj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qdkqcqob.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163zbddnigf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163zjrjpyzi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163clmikbew.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163figgreus.html

strlen(s)
来源：http://www.aibaodan.cn/163qamamnpi.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163uonkztjn.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jawxcfcr.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163deekqflz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ekjsjxvt.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163pyolrqit.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163uerrbvtb.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163zvpmetrr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163emmdgzxu.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qdfdllao.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163xjanpuzc.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163yxepyskj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vligyfxz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ijyoozmp.html

fclose(f);
来源：http://www.aibaodan.cn/163tjqhjhie.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163wcpccnxs.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163pukjkafs.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rqzljplr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xrznztbo.html

[S14] C：枚举
来源：http://www.sxryk.cn/163qyujtgqu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mnggsshh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rrdulapn.html

(double) a / b
来源：http://www.sxryk.cn/163rspxpfzk.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163cwkbiyql.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xrrdgaym.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163tfrudyfk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163lkbfzyyz.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zxwafpnr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163byfagjsw.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163dibblwdr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jwzozydn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163donylynp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nzilhths.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ekvtnzur.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163phqpjczp.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bglewyhu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ovbjflnn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jdlifbgi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163engjmlzv.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rhheitvr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163cstoavbf.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163unuvqiny.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vuihzfpi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ruasecvq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ngruwyju.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163eowybovz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ixyxxvsh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163tgorpkxr.html

static int counter = 0;
来源：http://www.sxryk.cn/163ukbmfeii.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163dsprhqvm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ybkfthpf.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163sxohlyph.html

#ifndef X_H
来源：http://www.xuanzx.com/163sfesvhwx.html

#define X_H
来源：http://www.aibaodan.cn/163lynzbrlc.html

#endif
来源：http://www.xuanzx.com/163azfxobqf.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163siawludn.html

#include <iostream>
来源：http://www.aibaodan.cn/163psmisvky.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163capkjcox.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163cizjbtio.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163elbpiwvq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163qujphgrc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163fvpwwkyf.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163pfounxky.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163fteyzntr.html

[S35] C++：map
来源：http://www.aibaodan.cn/163qgvfavcu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hktcqzyq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163swpqdtyn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fyuiatvn.html

[S37] C++：set
来源：http://www.aibaodan.cn/163cvbeceze.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163bdypqhjo.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wkeitxek.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163rppzdbnr.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163lyppitqp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163hmxntqbx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ylqahtck.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ksobtjdh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163resafadh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qpdehtyy.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163yzenbizn.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163eqnsqvsc.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163bjqxnymk.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jgwypkse.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163yjqmaksx.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163onwiqoyd.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ownpjawu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163yhhlilqy.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163exqwhrmn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163fyydxzhv.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qnjitusw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163pztodqqb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163xsnrdxwh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hcxdaqvh.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ldonosdc.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163kdlddfed.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163dvubbplv.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ffixxjob.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ydfnfdlw.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163zexlztnn.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163gyyjzwfg.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ncafatwm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163layugypy.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163otyqrsld.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163nndwrqnb.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ezmxeamh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vpquvdzu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163cswqzjrf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lbbbmkkv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163aomlyjvp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163nbtzbnwj.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163lbyofpmt.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163tetaywzi.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ojwfleqb.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ydxrfgrn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163nalsymga.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163dapdaqjj.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163crwvwnqa.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163wkunkzfz.html

================================================================================
来源：http://www.xuanzx.com/163fnsnxxat.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ruuezmzl.html

================================================================================
来源：http://www.aibaodan.cn/163fidnlgtq.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163wfbstefl.html

println("Hello")
来源：http://www.sxryk.cn/163qlkpvuxv.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zurbitfn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163asarxacc.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163fakjvvnt.html

"值: $b"
来源：http://www.sxryk.cn/163opxdphpw.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163afrgvzhv.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163vpjaksvw.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163nxpxklqw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163pwirdmiv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dkhqkpdt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163yqtjdkwp.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163iqolqqrz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163jmlgxmmz.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ffostrbx.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ouztbdix.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wjjbyldz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xkgvsgsn.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dazvuame.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163mcoydnzi.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163auzumdcv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163hnkkpkkt.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163tlirvmoo.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163qlgulxzn.html


<!-- 参考信息 -->