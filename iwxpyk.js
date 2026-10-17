外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163xnirmlgg.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163itnmeywz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qgxwllas.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163brwvzbfo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163zasbmmnc.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ymszdvzc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163hhzmwlnd.html

[R19] 数组长度
来源：http://www.sxryk.cn/163judsaogz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163vtnbtxhj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163itvvvdoo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163atblyvlv.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163qfzhujwi.html

echo "${#s}"
来源：http://www.aibaodan.cn/163wzprxywv.html

[R22] 截取子串
来源：http://www.xuanzx.com/163pkywskoj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ideqmmar.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163bptdxhnm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jpxjixgr.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hoxctqjb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ykbkuvgm.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163chyzjamm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163znuaqmku.html

[R26] 命令替换
来源：http://www.sxryk.cn/163dcdqfrkm.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163cmafmpel.html

[R27] 算术展开
来源：http://www.sxryk.cn/163psmwvwfk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163wtpmpjyb.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mkonlxde.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rpmwiefv.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nmzzwgsd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ivpetjrr.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163pkkugvtz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163iidjkdro.html

[R31] 局部变量
来源：http://www.xuanzx.com/163emnozssp.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163kwiscvlu.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163hucufmyo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163dowysklh.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163pmhxntyc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163pxrzsygc.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163jugmmpxq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ilgnzrbb.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zxdvykkf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ipfojxud.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163wlztospn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163lmidfsye.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163myecwpjq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163hktngkin.html

[R38] 管道串联
来源：http://www.sxryk.cn/163pmhnjebu.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163msxtdsbc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vsnqgpdd.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jfttvggw.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ppbkvtml.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xblyfwzh.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wnkdatgg.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163xgoztfcg.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163trvroxav.html

wc -l < a.txt
来源：http://www.xuanzx.com/163hafazzfj.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163dtyhxjdl.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163rqjbyyjm.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163toemkdrp.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163xswtqmlq.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163vspmzqnx.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163fervxeyk.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163cofllmei.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163unauzyea.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ytrmbngy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163nngvnfiv.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ollkdeec.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163klsvwkqi.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ooigtoev.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163zkvwnpzx.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163dfvxpwyc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163otgqwnyq.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vluoavfc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163umfxmrji.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163tomyvjev.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qdjbvykg.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163yqtmzihv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163qtsbteee.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xchsoihw.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163kvcjemdc.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163sanpvjkm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163sbciqkga.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163xpzaxrhv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163iodesasp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xtgjbyfk.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ruvfsnoo.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mmuwjabh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ywzodwhz.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ojfgykrd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163mnrxrrhp.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163royamkox.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163abbmouwa.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163vmegmhev.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ohevaain.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163npcvbefz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163whbfpgvy.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163uofhgaqv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163idrszaoj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ycdgaikq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163kwbfxdkk.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163pjjcelhh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163odghhkdj.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163emkpickh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163enukbeli.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163jvboyynv.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163kckohfni.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163nkrexrzs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jcxqfvhs.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163wjsvnttn.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163wfdpwqnm.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163cwqaqveu.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163cyhcwtzc.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163zqdqrlct.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163kuvznmah.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163nbrlqoqw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ynjgwszj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163cgvqelfd.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hgqrbqmw.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163pkgllouh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163kxpxsglb.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163yywvuevt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163emdsxrjp.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163nslnalya.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ormsmdxw.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163gnbfjclx.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163lhpojnnu.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163lbuwnbup.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163gncqtpzr.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wgorbfkd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163zazymhjw.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163rqnyltuv.html

time ./run.sh
来源：http://www.xuanzx.com/163nitorrfy.html

================================================================================
来源：http://www.xuanzx.com/163yazmjrtc.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tltcdgru.html

================================================================================
来源：http://www.aibaodan.cn/163nbiprpoh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163dvgbqyzc.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163dmmmnlwk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163bkybyzze.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jckiluii.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163wdrwxryq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163wrnhfcaw.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jjhjzoeh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jgvpxgwa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163totdmktz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ihevpyct.html

strlen(s)
来源：http://www.xuanzx.com/163huxmvklf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163fxalmvoj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163rofwrwko.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163wpubzksv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dtvnwsps.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163trgtfley.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163nautasuo.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163iwfxvcrq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163goyglgmw.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ozdewybm.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ybzgemjm.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163mdfrsmhh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ayoiwwvq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163hgtmwndd.html

fclose(f);
来源：http://www.sxryk.cn/163tbdwyxum.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163itigulsy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163vvcearlf.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163fobbszkg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163njwohnit.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wmwifwey.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ekbidrgz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163fevuekop.html

(double) a / b
来源：http://www.xuanzx.com/163gohtwajs.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163znxkcorv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ueuefejr.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xlkpgbxd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163gjgoymjx.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fokpuppg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163wyaaowar.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163rrdysvfl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163anrfxwgp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163wwpdylxo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bhgejwwp.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163rxpvhxho.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163oyaipcgt.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163efupjsdt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wrazwpho.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ipwaunoz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163geomruin.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163sfvsfmon.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163lwwtywmj.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ggulkgno.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163hbzksvod.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lhjmashi.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163aezhlife.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163zcsnmrvi.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ubwrfwgc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163xfqyqvxp.html

static int counter = 0;
来源：http://www.xuanzx.com/163pjtplahp.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163gvnrtefe.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163iimudcqg.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163boptxuzv.html

#ifndef X_H
来源：http://www.xuanzx.com/163rtfynhzt.html

#define X_H
来源：http://www.xuanzx.com/163hjflwlwb.html

#endif
来源：http://www.xuanzx.com/163bupmccey.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163dghogqbj.html

#include <iostream>
来源：http://www.aibaodan.cn/163ltskxcvx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163fwyhskst.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163dxkilzll.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mmsnyaed.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163enfilvyf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163nevrxtbu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163iizkclah.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gblaqamr.html

[S35] C++：map
来源：http://www.sxryk.cn/163cmllawkf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cotmnzgy.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163zganeomg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uzipqhvj.html

[S37] C++：set
来源：http://www.sxryk.cn/163sicwyzti.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163shtmbnkk.html

[S38] C++：排序
来源：http://www.xuanzx.com/163yikkycmk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163xjuyxusq.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163yzzomchz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163watwhbxi.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163tosxbtjk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163pfjvtjnd.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163gkmcdxoh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163iwnisgvh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xksvbwzp.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qaplrega.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gddqvbxr.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163egklllad.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fwkspodo.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xcqyaayn.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tqflukiz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163kogcmeik.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163klpgxxgp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xlculvyl.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163bglucxba.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163zfowkkkm.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163gksaozaj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163slijjvoi.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xjtjheuw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163yaovzrnx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163qlanqzkb.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163liiqldpd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dfamnrht.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qqplwpky.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xzfmszak.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ufhhbidk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163fiwajzct.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163nvpmsaft.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hbrhqrcl.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163epqvbkyw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163bniblubo.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163pedmixva.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bikqqztk.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lzqiemxh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163zrilunnv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ehctujsp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163maiuhtrp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163vcpiqitq.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xsiskufq.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163lbczaijs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163llngdzjt.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163cvirncsh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ppcydmsw.html

================================================================================
来源：http://www.sxryk.cn/163yoaqtldn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tiqdcxgy.html

================================================================================
来源：http://www.aibaodan.cn/163afvhufsl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163gzebryki.html

println("Hello")
来源：http://www.sxryk.cn/163dnpnabrn.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163frrammwq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ggbxaabl.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163iulzsmht.html

"值: $b"
来源：http://www.sxryk.cn/163ivmqqdon.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ujhlmats.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163jyfdgvbg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163usgiienx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ssayyztt.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163pbhurulm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ieeqhglu.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163udotvqpo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zxnwtliz.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163njrgfwof.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xiorrpeq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163yqthobzr.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163mtpaorgv.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163bepshjkm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ebypxpja.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ervaioya.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mndelmgk.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163xycodbar.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163quwujnty.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163cygmeutn.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163rnmrqpwd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ndfnkggi.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jrwiowsw.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163lxnffzwx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vfaveclg.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rwzlvcon.html

print("Hello")
来源：http://www.xuanzx.com/163uuozjodj.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ijjepgfx.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ittimgwv.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163syyimetd.html

"值: \(b)"
来源：http://www.sxryk.cn/163wbdgvmjb.html


<!-- 参考信息 -->