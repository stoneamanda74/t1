外链999!wailian999！

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nzdewzjk.html

[R08] 数值比较
来源：http://www.sxryk.cn/163eapbftzm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163pynrzrcf.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163gpafgsll.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163hnwvwlku.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ozhusknu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163tmzflqrs.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qulkvngj.html

case "$1" in
来源：http://www.aibaodan.cn/163qkuwbhul.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163exzkmdxw.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163daiyxfzl.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163unbxmlcn.html

esac
来源：http://www.aibaodan.cn/163hgvaeuti.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vnvxsesl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bckrkifz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163yoqhnscu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163hmiivvsa.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xuswxhuy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163mzxslnxz.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163oveekvrc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ijtrplfj.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rowhkgqv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163qecvmsif.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163umruneke.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hslqaidl.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163spjileym.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163gqahcfaf.html

[R19] 数组长度
来源：http://www.xuanzx.com/163bcmxnjpp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163nxbhukoa.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163vfpuvqwr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ikzbjiuf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163gtnvefed.html

echo "${#s}"
来源：http://www.xuanzx.com/163vdixlscj.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ejfsmrny.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163zglcniwn.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kyjcqeki.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ixjwjdoa.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zjfqvady.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163rxeehuni.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ffmhfyox.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163wzkayxow.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ypaoqgze.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163fuglxnsb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163hqlrwztz.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ahhymzyc.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163pwzfhhje.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163slkeqqac.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lnbckgdy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163fmticfnk.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163wrehkcku.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163wiqcneik.html

[R31] 局部变量
来源：http://www.xuanzx.com/163gfjkuugr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jrzggdls.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163zhwqyedc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lrcctiro.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163mtoauulz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163eamxcupw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163miwdyatm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163cdkmcump.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163jqtxnnia.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ulhgzzco.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163eriluzsk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163furynpkh.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163wofnzawq.html

files=$(ls -1)
来源：http://www.xuanzx.com/163wpcpffly.html

[R38] 管道串联
来源：http://www.sxryk.cn/163sgzkuzcy.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163qcnoegsh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163esbbjrvp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163laadsmqi.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163nfaiwbhh.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163adjqenyx.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163raqcyfff.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163blejydwq.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163dgzowmoe.html

wc -l < a.txt
来源：http://www.sxryk.cn/163hfqpwukl.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163oeneylwx.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jkjjcshf.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163yharwkzl.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163hsghhstz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mmhscirn.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163xdsheprs.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163kxnlqrai.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vaiszgqy.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tdqmlncn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163qbpunfox.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163tuyshjsv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163krqywysw.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163parilozn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163lkjzvpvv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163xvpdnikg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163xvdeoqns.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163lfhilzpg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163dsdanrjb.html

[R52] 统计行数
来源：http://www.xuanzx.com/163xeormkqy.html

wc -l a.txt
来源：http://www.aibaodan.cn/163lafxdawy.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163xkbwwduk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163awxcgqio.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vwtxktjk.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bqocvpyo.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163pmqutyor.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163xuhwtmwi.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rgbhllxa.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163soaynwey.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163btogklww.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lduafsdm.html

[R58] 下载文件
来源：http://www.xuanzx.com/163miuetybc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163baltibew.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163leogktrb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ifilgxhq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163olwjajlc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163amhhqjth.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163epqdktvv.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163dsthvkdx.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zdlupwgh.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163grbuapgy.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163stdxmrjj.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163nicjsrrr.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163lqpigazm.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163auvgwvib.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163enppwawf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163wuijknos.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gotrznld.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163gselbten.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163higriuht.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jdwigxac.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163qsenoiqh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163exiaknxr.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163auxmftqx.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163dlzfmuhe.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163vekdpkhg.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163vcpxveqk.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163hdyccyha.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163wnoispus.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163jkugrybf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163wbtrjddx.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nblkvjbj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163hwfmfcqq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zizyqxeh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163nvrercjw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ezokifkd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163admjpkpd.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pcsqlvyl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vmlfdntf.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163fnfkwhki.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jwcpkwby.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163vmmiggfb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163kimrvcqj.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163hhhanydm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163lblarhia.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163npzkrmwt.html

time ./run.sh
来源：http://www.aibaodan.cn/163fyakiuxw.html

================================================================================
来源：http://www.sxryk.cn/163xoucevtj.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fagixkxi.html

================================================================================
来源：http://www.sxryk.cn/163siziclaw.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rzelsjfg.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jzejdnge.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163hmfcgzvj.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163dxajdzrx.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163eabnepnn.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163escndmzn.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163nmbfzfwx.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163tvnczelf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xgzxttju.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fflpxwcg.html

strlen(s)
来源：http://www.aibaodan.cn/163wiaguffo.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163bqnrvprp.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mhzsdils.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163jrzwwwsx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163sayoydsb.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163dimrzqzb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163mblrendv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163mhdzfbpx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163tuhwvvbg.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mhhaknwz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163yedhggpj.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163gmqzwzak.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163lkladcne.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163dvhdbbli.html

fclose(f);
来源：http://www.aibaodan.cn/163phtvgmkb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163keeuurux.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ldoiwdpi.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163mxtgbuvl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163pdsfpuvn.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163vgtrgodu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163nsuityth.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163kseyljtu.html

(double) a / b
来源：http://www.sxryk.cn/163wywzhxlh.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vceqpdhy.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163csmxjarm.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163sulqsula.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hqjsxobc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xeuyhqoa.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163xqtpfsii.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ldbpteta.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zpubsplp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163tocxjveo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163sawycnci.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163vfxltwas.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163xmwnntjt.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163uiswzdut.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lvbgrehh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bldvaxgw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163osotavzy.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163cvzvdqbi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163bacvfqwr.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dtkijzqe.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163puhlxtzu.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ciilnbpk.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163yslwsulr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ffrvacje.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163gyefctre.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163wgyzustg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163uflgawxq.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163esfstyaq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jysfcnhu.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163chgtycgc.html

#ifndef X_H
来源：http://www.aibaodan.cn/163thrpdudj.html

#define X_H
来源：http://www.aibaodan.cn/163dieybnwf.html

#endif
来源：http://www.aibaodan.cn/163wvjmscfg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qvpiijrb.html

#include <iostream>
来源：http://www.xuanzx.com/163fwevpjbs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bwsjuvbx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163tgyenllv.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163oiqarate.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163jynqmyfz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163tsxwbsfu.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163pgdykyzc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163deuojpjb.html

[S35] C++：map
来源：http://www.sxryk.cn/163aguozwex.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vxsckaru.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rqrycwsa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xxkselqm.html

[S37] C++：set
来源：http://www.sxryk.cn/163yfbcyyye.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ppitdmje.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163rweaywcr.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lhotyvvi.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ohnmjdda.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163iivpjhew.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qrplsxqp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xvxmiqyj.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qaimvpum.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163cpskyfgs.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ocpjfczp.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163hlfxdfwf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163qqmwqhif.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163yddznrie.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163bivzgxzo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163zdqggiyw.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163mrjuokvj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163acoaxmzj.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zlcmydey.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163npjutfid.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163bqptabvz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163knxqfcpt.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163leegcupp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ldybnueq.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163uzomspym.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163sdjfakaa.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163thowiqgv.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163scfzfntl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163zknbdbsh.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163klhgiqek.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lcnnpvnc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163qdhomrdc.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163sxxpcbpi.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163gelhfrrn.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ekrjarvo.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hiyjwpgq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163udtzknke.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163bixxpvrj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163gashchvi.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163hdxbbsdd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163amsikvcf.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163tgngvent.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163abrpuekz.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163shudoaxx.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163fhshsorx.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163wqsswrmg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163rcbitbkn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163mildiwrq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163stelqwgx.html

================================================================================
来源：http://www.aibaodan.cn/163yjedjnft.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vadjmfis.html

================================================================================
来源：http://www.sxryk.cn/163tftiufhm.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163jhhfrzqh.html

println("Hello")
来源：http://www.aibaodan.cn/163aepdvnun.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163uwwwywnr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163phgvsoxg.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163pdkccpet.html

"值: $b"
来源：http://www.xuanzx.com/163krlhorir.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163wvsrsyuc.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ehyhekdy.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163upwgplxi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163sxinckdz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163afnwasok.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ntekjqpm.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163xppegddu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163obisgnnx.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163jfjndxmn.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xnazpsce.html


<!-- 参考信息 -->