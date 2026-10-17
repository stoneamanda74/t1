外链999!wailian999！

case "$1" in
来源：http://www.aibaodan.cn/163dmyqjabf.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jmbjcbuh.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zodvdytg.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wrlbrjwi.html

esac
来源：http://www.aibaodan.cn/163zvoplrzc.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vqdehrli.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163oryntcdi.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163lzkpycnn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ojqnvldc.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ftjnbcgu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ykflyzcx.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163sabllbum.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163plgjarnm.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ofxjmhjw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163btrwyghd.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163uizmnrxb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163dnavaqfe.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163imhfzxxh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163pnjjchsv.html

[R19] 数组长度
来源：http://www.xuanzx.com/163tdvsacck.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163fbaqfwpj.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163oedrcsqg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163tkzqwlen.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ttyoedmw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163fgspqvvc.html

[R22] 截取子串
来源：http://www.sxryk.cn/163kpjtwkeq.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qvpeahio.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163rdtiioej.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163tuwbxste.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163wrpsadul.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wfdfohne.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163sdwtdogc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163tjznkndc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163vxqjdgvp.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rreukumv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163pyjhdbhl.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163duqwiuyp.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163gbfjcxdd.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163pteneypm.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ldptkqtw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163znnxcymw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wgbgnnod.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163nzrncqxk.html

[R31] 局部变量
来源：http://www.sxryk.cn/163stmsavcl.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163wckrrrni.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163rdypxxop.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163yermeslr.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163apqrlfll.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163fgpaaukl.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xcvmcoxg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tgyjauhc.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zuqpvycj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ytrovmln.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163zmcejrjf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163gnowccsh.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jxrkqtla.html

files=$(ls -1)
来源：http://www.xuanzx.com/163orjggyfn.html

[R38] 管道串联
来源：http://www.xuanzx.com/163mgzjdryy.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163yppaumaq.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163bumwwxll.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dfvpmjjh.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bxcnrzwo.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bdyrhfqa.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fjqzzdcu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163pyrawbyz.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163yevbqcrm.html

wc -l < a.txt
来源：http://www.xuanzx.com/163yezhhbtq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163uumvghgi.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hvremuls.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163cpjukfwj.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163eturzzim.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xqtkalgb.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163wglpurql.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ggxcigvw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163tayeurjg.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163nblfumdx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163doizuiic.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163htpkcexc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mkloxbsz.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mzwgzbgu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163uxybogps.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ecdusomh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kctjayjm.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163wmlnkgbo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163tsfkgplj.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qdfwratn.html

wc -l a.txt
来源：http://www.xuanzx.com/163tutxefhl.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vbcigcms.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ubqtgvcw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ovzelyhu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163mqwkkkiw.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163guknrdgh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163unvaefvp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163tatxsmsj.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163rsrgquas.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jvcassoh.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163pamcxnzx.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ywpunjol.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163inxfdtjh.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163mdekwdny.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hoguufyk.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163wvkwttwe.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163igeqlycu.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hahlqeoa.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163deqjbopl.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163kpzlswce.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rfpikxss.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163aexhfhfe.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163hqrpkqsf.html

[R64] 结束进程
来源：http://www.xuanzx.com/163bnalbfjq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163uwjtsdra.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gzikymik.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rgkycfve.html

[R66] 定时任务
来源：http://www.sxryk.cn/163exzxgghc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tmlrmolb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xcdpfzoe.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vzrvnadu.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163myveacly.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ytsbnnap.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163lqijbgox.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163aprdralw.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163juvamhbf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163viockuje.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163riexmjns.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163hlrxyncm.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163degxzgxm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163oilmtaee.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163llglrxpp.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ajhjutoi.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163jubwmrxr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ujdylfol.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163maepvnqs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163exjjjgop.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xqcvkgrn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163yzjjoamr.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ltrsjmxq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163fqjybzxu.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163sgdmmdpu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ddylhoge.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163rnbsntfu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163yberirhv.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163hrkkbgyb.html

time ./run.sh
来源：http://www.xuanzx.com/163wmynratx.html

================================================================================
来源：http://www.sxryk.cn/163uxwutppn.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ykewopqf.html

================================================================================
来源：http://www.aibaodan.cn/163sgodsfsk.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163uepginwh.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163wovluyoi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163wrbmuwtn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ebznachb.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ccepjhbj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163czckthsn.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163zmqhajzu.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163sgmobvsb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ekbzkxqb.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qkypmjuk.html

strlen(s)
来源：http://www.sxryk.cn/163rltoxhzu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163lkyintru.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163yyndisrq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163jridpcnr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163obtztxxt.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163iqyajmmr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ihsrxvcc.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163veckhxag.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163lbbclmpf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163pqjtgkbm.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163bndyfbfv.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163brkaacso.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163skylyreu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163mrdkcird.html

fclose(f);
来源：http://www.aibaodan.cn/163hfgzypce.html

[S12] C：写文件
来源：http://www.sxryk.cn/163baeqkzok.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163tvcpxanl.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163kvdsjged.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163etbyyrqi.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ufywfyki.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163nlapemmr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dctpkuci.html

(double) a / b
来源：http://www.xuanzx.com/163tkxfcrpv.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163yfhapqwu.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163unkvazes.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163utbiztdg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163lfqxovvc.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163hcgjnwyo.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163acgzvzmz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163zfvnjlru.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kqkepxvf.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jaupghth.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lyitebak.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163xiwvcobd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163fhciupxo.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163oypmkjji.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ytvxawpp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163lxvecypq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163vygeoygz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163vhcippbh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ixgdodtb.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163kmhfhdti.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163kawlswbh.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vjvunylo.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163rgeravry.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163nobcwrtp.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163lapyuopv.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qwlldarh.html

static int counter = 0;
来源：http://www.sxryk.cn/163xyigidxw.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163pgnspbjc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zcbdfehf.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163olpfmffx.html

#ifndef X_H
来源：http://www.xuanzx.com/163iznamrya.html

#define X_H
来源：http://www.sxryk.cn/163mttqisfa.html

#endif
来源：http://www.sxryk.cn/163hvggtrxa.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xhcwdwsk.html

#include <iostream>
来源：http://www.xuanzx.com/163hhdvsmwy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xxczfdis.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pjtyqbpc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fnelazus.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mjozlosp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gqodcpmc.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163brbpmfqk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163jzczyuon.html

[S35] C++：map
来源：http://www.aibaodan.cn/163vyimyjnt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163peosmhkr.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jdahwktw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163keylcicq.html

[S37] C++：set
来源：http://www.xuanzx.com/163iumfqjnm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163okvlrhzf.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163uzmsdjqi.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163eckpihsp.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163znbkautb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163dlynhytr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163bsysudlb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xbvzphaq.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jsebnzti.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163teqfjouk.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163hkvpyhko.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163pihlhlds.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163daopwmbr.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ugvkonmh.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163oqxsrlij.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163anggcogl.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163eztocnzh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163auhisnwz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163huwandto.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xlypbvae.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ayecnnnd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qkyhppgz.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nnkmvukl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163gzrsdrdb.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163munhqqxe.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163hyoclsch.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163xgiazdoa.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163khcbniwp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163zspvwhgn.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jjpnrxhr.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ukhbluhg.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163qwbwrofu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163frdhdoll.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163dmnhbhzz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163bhczwzjn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xwlbcbqj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vlmwaiaa.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gffmepmm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163kfkdjara.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163xbrfltkh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163dtkwpmyq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163yvzbfxlg.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163lnzalxwg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ixlfxyou.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163rtmhkrnj.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163pohffgks.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163dpioohjl.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163sbvvzwmq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163rxyjiupe.html

================================================================================
来源：http://www.aibaodan.cn/163iciahkxx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hfanrwop.html

================================================================================
来源：http://www.sxryk.cn/163idhccywo.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163vaobyuod.html

println("Hello")
来源：http://www.aibaodan.cn/163nerfykon.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163fwgefgnj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163etkfkfbs.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163cqrvtpiu.html

"值: $b"
来源：http://www.sxryk.cn/163xqccgzns.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163fhgqvfnq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163fxdpkcbu.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163gjjdmdie.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ipekvbkt.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163pnxhqbjt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163uhzclbug.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163dcshilhr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163bkntfusg.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163bodqlklc.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163flwzeqyb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lhyznrmb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163polftauz.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163obfmmdfh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163sorpcxbi.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163dymiwxuk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tmuvigkf.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163sjxzbjft.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163dbtpoqzb.html


<!-- 参考信息 -->