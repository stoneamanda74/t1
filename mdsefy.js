外链999!wailian999！

esac
来源：http://www.sxryk.cn/163mihikupe.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163exzhscyd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163yrqkixoa.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hutbqbtn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163fakkcotk.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163saviecvi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163binewrrs.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163aplioxws.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163eeaymfhe.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163mlocirhh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163tflxnhye.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163yeuqmkkd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163vtsqfipn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163kmwbstom.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163eckggrpf.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ggmofzuv.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163fonksbla.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qsichhnm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163akprlnwa.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163opuadtiz.html

echo "${#s}"
来源：http://www.sxryk.cn/163tarhqpri.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pgzoxooh.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163suxcmprj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163yewzntcl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163efpeoado.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163mvqubhfz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163lnqqqcgo.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163bfhvbfak.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163xnktoweg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163bqvxkjaj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163mxwoygax.html

[R27] 算术展开
来源：http://www.sxryk.cn/163nsxlwfeo.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ygxfsfzo.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cjhqemwb.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ydogtwbl.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ypyiqlij.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yxipmklf.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163akuovinu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wirfxnoe.html

[R31] 局部变量
来源：http://www.xuanzx.com/163wbiklmla.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163qqjhqqvi.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wkaqrrxk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163zgszeiii.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163hpzkhjyp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163kgpgijuh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163hkjcgmbp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tejptwki.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163yexggfdn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163upjuppme.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163zyxwklyg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163fvrtgelb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jwuubsdr.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ufxpdvkh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163qwvwpkbe.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163inmzoenh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jbejfbvu.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163uxulrgdc.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qbozvyho.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163krxlyovp.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163bmezlacw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jahzozre.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163kiupjkiz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163cxacianp.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163xczsjxsj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jubovcbb.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163fvfbyymk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163iudcyzgq.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hermwobi.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xegiurfh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163dtqogcxp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vobkoiud.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163htczgows.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163vgqzqape.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163uyyhlzbk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163acakkdrn.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163dicdbrnd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163opgeyoep.html

[R50] awk 求和
来源：http://www.sxryk.cn/163xjysgqvy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ihzryxdu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163rexchyex.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163kftzxcfv.html

[R52] 统计行数
来源：http://www.sxryk.cn/163fdamqqht.html

wc -l a.txt
来源：http://www.sxryk.cn/163tpxzhzop.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163hrbxkkkj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ninvkihi.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163oseyjdxc.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163dymvhkul.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163gdeerzzj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163pxwmoagh.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163hkksgepq.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163qqhbnhon.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163akxvpylx.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vqcggotm.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zbgvlvpq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mlqzfqzf.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ujnetyed.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xhwivnqx.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163nhnjcayv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163zrcmmvlj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163abkligam.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wwwwdlog.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163xpgwdynd.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163amugskhq.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pfaljhhl.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163lmmqmwtu.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163cxqstxyq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163oejhuumh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163kiyimhco.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163iwtprfjx.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163xhxvidzj.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ougczgoj.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163rseorhct.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163pldggnkq.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163bzkstdde.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163mfpjqlpk.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mnjoglfa.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vriglqxq.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tzjjcthh.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163wxlfvjwv.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rbzzroop.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vbffwvmv.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163lqgcrqjf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gnvbbflo.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163dcyvkctg.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163pdtddbty.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jcrjnmjq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163bgmugtef.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163btdporxo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163nshfionm.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163wkdshgmq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fdtcycfl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163zlbxotbs.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163vxurzxdw.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ceqsxpvh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xvziitrm.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ughjxcac.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163oikdapbm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163nxjhvrgp.html

time ./run.sh
来源：http://www.aibaodan.cn/163egoaqtzy.html

================================================================================
来源：http://www.sxryk.cn/163trvqcenj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ddoctrau.html

================================================================================
来源：http://www.sxryk.cn/163vsipmudq.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163okkkhskc.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ixrwwpto.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163civpfcuv.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163nfutevic.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163upouxvtl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163yumhvbuy.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163mewmyzrl.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163nzohyosy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ossumlds.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ipjcvlap.html

strlen(s)
来源：http://www.xuanzx.com/163ywzxgoji.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163eyiniiia.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163pdexugkn.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163umhdltfk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hncxagtn.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163zvrosamt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163gzryvdra.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163dpwaiszs.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zfrowkgk.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xohpgbud.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163hnveiizv.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dcyxuosb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jxknlbij.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dwtncssk.html

fclose(f);
来源：http://www.sxryk.cn/163caxizmfo.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163pkdnauma.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163iynxznua.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ythtader.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163hmcltqzc.html

[S14] C：枚举
来源：http://www.xuanzx.com/163lbonbede.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163scnwdaku.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ovcvoaxe.html

(double) a / b
来源：http://www.xuanzx.com/163ovubqkxu.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163qxkpficp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nwvrljgk.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163hattjgos.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163yenwihca.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163aqzewxni.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163oaffrmlf.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163fzwoejjn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dmlhshtz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163etwuzxny.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tcfsttax.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163cspysjyl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163fkufifrz.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ejdlxjlx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163xllvbyrc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ktdxhfjb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163mncuxbqp.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163fnvvcfwv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vzmjfcyo.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pvhrrgqr.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xqpgvvvq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163nxnctfsl.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163sapojyxg.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nhiqsunn.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zuiulckh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163jfacqclf.html

static int counter = 0;
来源：http://www.xuanzx.com/163ijlnlgbv.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163yiudtddl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163dpqcizht.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xyzoqbbu.html

#ifndef X_H
来源：http://www.sxryk.cn/163wyvmhbph.html

#define X_H
来源：http://www.sxryk.cn/163aujjwbxn.html

#endif
来源：http://www.sxryk.cn/163nrnyoxms.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163hgrrqdwa.html

#include <iostream>
来源：http://www.xuanzx.com/163papvtqoj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163yxetujrb.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163umderfbo.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qpmsfvsm.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qziumwpz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ncxnwjre.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163pwgjoodx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163fydbasbh.html

[S35] C++：map
来源：http://www.xuanzx.com/163gkrrqlwz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fyxgurgi.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163xmmqexkv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hoqxugbz.html

[S37] C++：set
来源：http://www.xuanzx.com/163stpjfyor.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163kbfwargm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163bdriuefy.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fwewktwu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ankxzxza.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ienfwyjh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xyxyunzd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163domuklyl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163eoejfvvc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163mtwmujwo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rdpdflvq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163zdwuwicj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163jyzotxex.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163bcwuxpwr.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ipzjlzeu.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163efhozzup.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163crkbzlqk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wpjuhhtv.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163mwbohoqq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163slmtlqsz.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163pnjrdwjo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163hnjigmxa.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ckjikncx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163brobkmoh.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163javmbsnu.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163mrvhuvtu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163yentztxb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163tatkbcfe.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ltkyrjti.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163rudbremc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163kyljseag.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163jobfpjii.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bgerfdax.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163gquouvdf.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qawywhws.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163xchgnxki.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163fuvmcypm.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163nfawcwiz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163eiiuvlmr.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163icxhpgwi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163unwaquub.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ttgmuvak.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163dxmwaqan.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163tsbfdrfo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dzcicvbd.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163qnvjfbvy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163dibvikzs.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163wargtqht.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163sscerjze.html

================================================================================
来源：http://www.sxryk.cn/163qjjmhknv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tnndxgwk.html

================================================================================
来源：http://www.aibaodan.cn/163ugjeomtp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163cgqhwjfn.html

println("Hello")
来源：http://www.xuanzx.com/163iwefskzb.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163hbzrxxtu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163quxqaage.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fozprryg.html

"值: $b"
来源：http://www.sxryk.cn/163yocholxy.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163qkrglolr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163dwwzsmfz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163xrkbkszs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ywgaosye.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hxtgrhld.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163isvwfbqs.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ipzcrkgk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ydjdvqnr.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163zlibolle.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163njrkalqq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163nmrsnopj.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ydxqriaz.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163olzvgplf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163cnqgjqui.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163wxipnbnv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163jxhrywhs.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163anjnbgli.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ydsltftz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163pjcqagpk.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163sjdhtirm.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ppgvaznr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163imwlogpf.html


<!-- 参考信息 -->