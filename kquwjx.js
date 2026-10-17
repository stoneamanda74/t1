外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rbmzkali.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163pzucaprz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hidipoks.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163pdhtgwin.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163kcwefeno.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163msiglcdq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163txisljkl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163llxrkeom.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163mqgjyzyt.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163lkseojjp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163zqozpoxh.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163dxocrzdf.html

echo "${#s}"
来源：http://www.sxryk.cn/163xtjjqfgw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163nwdugaka.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163aadddawj.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163zezvnoqw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163lyasrbnp.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ulmzscxr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163nvojvmiu.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163faahzfgx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163btluunnk.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hwmuptfu.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163lmnmkrdg.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zjvaflcy.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163tlakhmqx.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hzjrqijl.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163rykzksxq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ynxqehzd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163xcgttnff.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163jzhzbgkf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rytdccxl.html

[R31] 局部变量
来源：http://www.sxryk.cn/163cmmrtvqk.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163rvbbpqsq.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163hwuolooe.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163dkkzhjvi.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wfbhoixo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kguhqvkf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ggjhusck.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163radvpcdz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qrvyaclz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163rtxlkrtu.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163cboreqjt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163iugetpie.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jcocqaez.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163kdqbhsyt.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ehvxgzam.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hrzyryzm.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163uuzuchhi.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163mvtansef.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163bbrvrtfj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163crgsyiaz.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163vhpvntem.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163qakahyyp.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163dzgfkjax.html

wc -l < a.txt
来源：http://www.sxryk.cn/163gcmzxeek.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163bipetwmw.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163mypwjltl.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ylwhmogf.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163wriqiwkg.html

[R45] 批量删除
来源：http://www.sxryk.cn/163urazwkid.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163qoxuzxjd.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ibpbpeub.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163rpkinmsk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163vyzmmvym.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163nctznitt.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163kkpdwnpk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163trageqxb.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jaekctau.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pkbvmmjq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ezfpxpqm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nmnojmla.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hwzllzpn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vkepihug.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163bgdlupyl.html

wc -l a.txt
来源：http://www.aibaodan.cn/163iggffvlj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163pxfltxzf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ofdhzntn.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163pfsbqloz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163upljxrcf.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163zzucnzrq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163qnubpdoq.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ktjhbhms.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163fvtbdfmq.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vlyoakxn.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163yqtmgjhx.html

[R58] 下载文件
来源：http://www.xuanzx.com/163fmqxiymj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163zdfmfxck.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163shqehwcm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163xyttemqi.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bwycmlfw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163gyprvicu.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163rafmrvot.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xwznnpfh.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163umjdulzl.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163atgktxkm.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ceymohkc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163bubtiugs.html

[R64] 结束进程
来源：http://www.sxryk.cn/163mxrrbwxs.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qejxhcst.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163lrhlhlhz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163qydjtdnh.html

[R66] 定时任务
来源：http://www.sxryk.cn/163utgxylkj.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163xlkikyhz.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163nwzxtccg.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ihtkaatl.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163kwiostsj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163iwxpikyd.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163uyoarpkk.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163gznleeua.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163omtcymtf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163pjzewmuu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zjuflxhv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163misxeufo.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bgshxdui.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163mvlvjfpu.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163bnntkiyd.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163hvxlpnxz.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163gsrkkhvz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163wgsppxgu.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vtdgicvq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zcstsvit.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163yyshbzax.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ifglrfoo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jcejhntt.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163retvuqps.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wtjchqdu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rqqxnmqt.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163obwjdscj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163qxvwhejj.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163jnnoaxuh.html

time ./run.sh
来源：http://www.sxryk.cn/163ljxpjzdl.html

================================================================================
来源：http://www.sxryk.cn/163zqvjaebp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163bnatdila.html

================================================================================
来源：http://www.aibaodan.cn/163lkrfrdfe.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ykapuuer.html

#include <stdio.h>
来源：http://www.xuanzx.com/163mgmroeyj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163gylrfiam.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163qrttgykn.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163mdbwnhrt.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163lnyatjxq.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163wpwlmoyg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163wqwkcdnn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tegvyiau.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163vgjuwdjb.html

strlen(s)
来源：http://www.aibaodan.cn/163ncqwaesw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163hdzbnouh.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163tzdupcjt.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ollcmzvv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163cnyyvinb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163pwzgnrkd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163nyqocdum.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163vosbvpav.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163otfqumbt.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163czjzizjb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163fpddqyps.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163zwvkvhhw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ckloxuxg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163cinevlks.html

fclose(f);
来源：http://www.xuanzx.com/163yadqrmff.html

[S12] C：写文件
来源：http://www.xuanzx.com/163uxsevgmd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163haqaurhe.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163txvgwjmk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ntifvpqi.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lzmcvxej.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163nrdutioc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163hpbtcteh.html

(double) a / b
来源：http://www.aibaodan.cn/163jzzwxjvw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163gtdqgypy.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xsbvimtc.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163lqiyqdxf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163izsvehcd.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163geekdprr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163qseiuftl.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163blozbpqn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163duljcroy.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163gtrateqy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sextepuq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163vihdpmol.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163hatrmdym.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bctyhdeh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163nntcbkyz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163urxgmgex.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163cqgxaens.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163kxkenbnf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163cirvammx.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zesdvdmg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163cnqpvuea.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163bxrdcmjg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163wegolmlo.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163gwkvskpn.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dwrqdhje.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163rtqeanba.html

static int counter = 0;
来源：http://www.xuanzx.com/163wfrsbkuj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163deffmbtt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163klkjuaih.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163oakjgzbq.html

#ifndef X_H
来源：http://www.xuanzx.com/163pqnxwpjx.html

#define X_H
来源：http://www.aibaodan.cn/163portpbss.html

#endif
来源：http://www.xuanzx.com/163epemmvhf.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163sifhcgkr.html

#include <iostream>
来源：http://www.xuanzx.com/163hkkzonnj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163rnuhkuis.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163eybocscx.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163qyrcbdcl.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ekygdfdj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163qxmsgcxr.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163fgcncgdq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163wrlqfwuj.html

[S35] C++：map
来源：http://www.aibaodan.cn/163epqtakwj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bahotsyk.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xdcjagtj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mjfopigp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163iuyhsowf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ucuuioor.html

[S38] C++：排序
来源：http://www.xuanzx.com/163hihhqhbg.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163vbimodga.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rirxvxtk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163hcwpbdjz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xbyjtkqh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163gqaabxil.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163devgieya.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xpimupzp.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163eeyocugv.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zatiacor.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cypuoljc.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163qsqxtmnj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163fmlsmojv.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163yfrvvyzp.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163liuqvcle.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163sxrnolzu.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hxawwypo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163hmfuhzkp.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wubmjksu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163bssfehxl.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ehbdtvhi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163fcsqpwds.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163imqmqhxa.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163mfpsaown.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dlumfhen.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ydhjvyji.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ivhnoszt.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ghtmitni.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jxhzcptw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ahzaeaoe.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163fkshwzch.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163bdkcpsig.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163vdbqdkwf.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163askhyjlv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hjdmiduc.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163zxmtstkx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163vjqfvmpc.html

[S56] C++：optional
来源：http://www.xuanzx.com/163phpiaqkc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vrnkfddu.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163cobrukrv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163fsjcfbpp.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163zvrubpku.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163yhunpujh.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ftpxobkg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ymltxaxv.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ykhdhxtj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163odjhyqmc.html

================================================================================
来源：http://www.aibaodan.cn/163qcitqpue.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163pbobbnyb.html

================================================================================
来源：http://www.xuanzx.com/163vwweaatq.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163pmukpbwt.html

println("Hello")
来源：http://www.xuanzx.com/163xyxkwhxm.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163mxjnprrm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163fcgdcsbq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163untirmlk.html

"值: $b"
来源：http://www.aibaodan.cn/163hiqxrkzs.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163oqfkcuwm.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163irutzkfg.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163nfnjopnw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163gyrgpyjk.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163zgpbyfdk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163vtmozbzj.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163nbrtxhrd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163voguycoo.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163eefuilms.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163mjmkscgf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hwhljycr.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tbqstcnh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163oyudanpr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163yxqmyjra.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zqwfcfwl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163shirihqy.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qdwtsign.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163iqyqckcf.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mrzooods.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ewamnrwf.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hrqmaczz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163fmdzmlnr.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ugruitza.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163jydtnkpt.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fflkokld.html

print("Hello")
来源：http://www.aibaodan.cn/163cohqrrvq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163pimvtajk.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163dmkqyyhk.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163dymbaswv.html

"值: \(b)"
来源：http://www.xuanzx.com/163akubapjo.html


<!-- 参考信息 -->