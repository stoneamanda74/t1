外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163oemxiivf.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163mikllsvq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163xousiiph.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163stnzydnc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163idywopdf.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163aotibksh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163tjexyuhl.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163vkclwfbp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163kvgxxybi.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163awyezvfu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163aezsxtpp.html

[R19] 数组长度
来源：http://www.xuanzx.com/163fxoztbpx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163sywugkrn.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163okmziqkj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163dvyiudat.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ameuphng.html

echo "${#s}"
来源：http://www.sxryk.cn/163ebsiccrh.html

[R22] 截取子串
来源：http://www.sxryk.cn/163mnghanyr.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ppgnqafq.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163lrudowwy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ghidcdho.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163dbrteinw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163uagydbpv.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163wymkhgdc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163rwtqvsic.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zcakpkxv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wulcngfg.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zzcpzlfb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163idqtlqjw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163crykyhfs.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163cklrfhbj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163tcljqwbg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163capuidba.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163zcevzowu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163jrpvafqb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163lvmbdzwr.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163fnyeolag.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mtwzyhzw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163kuakfecs.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163txbyvpxq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xwmvcgnm.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cyevkdnk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ekiqagta.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163zkfwjibe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163tobmtjga.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163vndfiqyl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163xdrulqeg.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163sobeiymu.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ocvgmuna.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163rpogsiok.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163akadfkco.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163mpjvidte.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163usjdrdwf.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vyuqjnlh.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dntnpnge.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163cbxsbsap.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163kxmqapbj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163uegkbywp.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ylsuwogz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163zngvlfch.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163eqkfrcdh.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ytnvrvgj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163scqsempn.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ptvsamen.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163cafkyzig.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163lnaptbob.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163xqqowbvb.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163twvbdevh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163uachuwva.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jypeddkm.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163meeyicva.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163wcwkafju.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163gjuygrel.html

[R50] awk 求和
来源：http://www.sxryk.cn/163njyygiim.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163usqtrwkp.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163xecafvyu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163phguhlnf.html

[R52] 统计行数
来源：http://www.xuanzx.com/163brdtrpfw.html

wc -l a.txt
来源：http://www.xuanzx.com/163jzmhtxfh.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jwmwhkge.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163jbsgayon.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163gpskehgn.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163sktltpnn.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163eaotjmff.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163txibflwz.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163lapvwtha.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163cvjukigs.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163jcubpxfo.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163tbtdywbj.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163tbrbcjch.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163uzbyjetg.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163javgglxg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163gufhgqct.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163pdjwqyyd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163elcqfggi.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163mkyjqpcs.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163jxqtphuq.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163poqbihkr.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tezdrati.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163kjbtnrkr.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163gfialfyd.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163gbkfbxfq.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163bmoaesdz.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163sbyadrkk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163btiyxbuq.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ogorflia.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nqwrahzw.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ztgfania.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zqeyjzkz.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163xxsvwogz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163zvdgdzci.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163bjguqrhu.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163iifzuhwo.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ikmeomnz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163jsltkuww.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ltunjvxt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163gonpofan.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163kgevfbyf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rumfhrfa.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163qrhqwssy.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qxedddfb.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jltpupwt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163oajgdlpu.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163agtomkdp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163uaijskcd.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163nlyyqamz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ejusfjzc.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ciajqumf.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kpugjiiz.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dtevyaei.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163phlperxq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163uywtjkhe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wwhlhckw.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163fpsxbjkq.html

time ./run.sh
来源：http://www.aibaodan.cn/163xjwbqypw.html

================================================================================
来源：http://www.xuanzx.com/163xeprvkzb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pgktafqt.html

================================================================================
来源：http://www.sxryk.cn/163xisvocbp.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tkvvyqzm.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mefqzavn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163tutilnls.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163uapyggfn.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163gxayrwqo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xjujvnlb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163dvbehpjz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vbwpciqc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163jkfxacot.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rfwxsvgg.html

strlen(s)
来源：http://www.xuanzx.com/163vtxteteb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163aqnrmfww.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163kszmrsyl.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ogrydifw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163gqcqolru.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kpaxvtif.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163wuepngnc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ymunfgug.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mafhklvo.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hzbnjttx.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ajkssfdv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163oksqoxzb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163usqrcvdy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163nzsuuljj.html

fclose(f);
来源：http://www.aibaodan.cn/163vtwkurnx.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zufoovpf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wkehkxko.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163raqkmnje.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163werzltyb.html

[S14] C：枚举
来源：http://www.sxryk.cn/163crmcnmxg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163rpybvhig.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rgrnnqxt.html

(double) a / b
来源：http://www.aibaodan.cn/163qhkzqixd.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163athayqtm.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163lcldtiea.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cgzscfnh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163styxsljd.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163skdsvmrs.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163newxscsv.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163yjhtvusl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mxehzizz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163zvqoztjx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lsghroea.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163pmdnwohh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qolbnxzq.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qzdsjbmi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163solxvcds.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163qsqupgse.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163shakoila.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jdlwihnj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163rripzbya.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163yudbirgm.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163uqrsbgaz.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163irfrfzgn.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163nvrzyiya.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gmojdrrb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163joqvmyif.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163guzherbz.html

static int counter = 0;
来源：http://www.xuanzx.com/163pynbbvct.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163cpnlvpnb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163zhblgfnv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163smdfugtd.html

#ifndef X_H
来源：http://www.xuanzx.com/163xbjvndtd.html

#define X_H
来源：http://www.aibaodan.cn/163zcmwdnpv.html

#endif
来源：http://www.sxryk.cn/163etvxprqx.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wskzopxh.html

#include <iostream>
来源：http://www.sxryk.cn/163xandbqwf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ccuibasp.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163tavnxsmm.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163atbvnznc.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zaizfcav.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163qwgghdsm.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163xnbjmpij.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bwavgnhh.html

[S35] C++：map
来源：http://www.xuanzx.com/163tsjstkgw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wyntswww.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tlaxscpt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zdmthmms.html

[S37] C++：set
来源：http://www.sxryk.cn/163zfeopjau.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163iveupyge.html

[S38] C++：排序
来源：http://www.xuanzx.com/163sniuuddz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163fcyvwgwq.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163defxkcog.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wvhqtmcp.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163llctnjpd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qxaiolyk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ebflqdvm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vgudgons.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163tycbzlma.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163osmbtqdn.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163pknhmbck.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tysjjqkm.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163tvskdpsb.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163gdxlkadk.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163apscmymg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163xxawleqb.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163byuxfpbe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xivnamta.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163vpjsmqmd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kqqdnozx.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163zrjaqazg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163phbwszwg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fylokeao.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163gttsgffl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163czpqejsl.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163fvfyrlku.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163jbrccidb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163xtlxsjlf.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163uvomptjj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163gufpsnud.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163bzdbiijp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fxcadrzh.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hyysuxgv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163lvyorwno.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163srqavocd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163iattywxd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vtlgavot.html

[S56] C++：optional
来源：http://www.sxryk.cn/163yoczzrdp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ipvrrmha.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dxrqlrso.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ixacpcwl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nvatrlpw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163kxzvkjeu.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ritalsln.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163yxtqzsdz.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163auwmzhbb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163evcguyvq.html

================================================================================
来源：http://www.xuanzx.com/163barlodna.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163crytjkdy.html

================================================================================
来源：http://www.aibaodan.cn/163gandvotn.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163kvcutwtj.html

println("Hello")
来源：http://www.xuanzx.com/163jabvjkwu.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163gfweubdm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163zzyemosa.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163rmlbeuwj.html

"值: $b"
来源：http://www.aibaodan.cn/163adlbuhii.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163lciiwpnh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163qcjhthyf.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163kunzxtuw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zwnkhrix.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hqaheslv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163rllelblg.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dttvtfjk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163gxcvdwnt.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163npgnbdps.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163atrjhyzn.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cwvmcbez.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163lnqburak.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163wfahgyvt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163zxiaiyhl.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163spfqzqxd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163facujbjs.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163iiposvyc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163gpalxyal.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163zsosrcbh.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163hkiutmhq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qglprlcq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163lxqldmop.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163iljtzkje.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163rxsvpjzo.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163nuusicry.html

print("Hello")
来源：http://www.aibaodan.cn/163wsbbsofe.html


<!-- 参考信息 -->