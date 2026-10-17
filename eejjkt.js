外链999!wailian999！

esac
来源：http://www.aibaodan.cn/163hnshaamt.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163dfisdcqd.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163dqkidpih.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163tdygqjmw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163zjydbgbz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ogjniteg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163frzbtorr.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lixbwffe.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xnarpkau.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163lclngesl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163hrkijugx.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jxfxmhtj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wugmhpgm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163nibwtzsr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qycimrzj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ggeaausx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163yvbngunr.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163omyerljq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163hgrvwuqf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163mehfgdmr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163qelsrsut.html

[R22] 截取子串
来源：http://www.xuanzx.com/163dmwyhede.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163nffofmro.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163tcgsikhp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163kmbpjiyd.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163tronuwpa.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ilcohoxl.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163uegbigmn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ayzrtdey.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ziwqhpoq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163wwwzjtkz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gkzdguyj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163xivrdkmn.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163slkjible.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163xlxyybap.html

[R29] 定义函数
来源：http://www.sxryk.cn/163hxfvomsm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163fozscpcs.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ayhvnzfg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163vxttjvlh.html

[R31] 局部变量
来源：http://www.xuanzx.com/163clgwvpvs.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163qexrwizj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qghbvgyd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fyxntktr.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163dthsumsi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163srgkffxu.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163axobxptw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ejcjbozl.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163tmvkmqaq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163hnhgclty.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hfgnormq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163cnjmpkpr.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163mzpbdwvu.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rwbfcrtx.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163okkaxynm.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ivosbqip.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163orodayhq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163rtsexjrb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163fadhyyjx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163bodagbls.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163viazuzyw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163vvhxfdhu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163qnczbazl.html

wc -l < a.txt
来源：http://www.sxryk.cn/163uzkqhmre.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163xallplil.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163jtwxfqlk.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163igdajyjq.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163hmtvnaci.html

[R45] 批量删除
来源：http://www.xuanzx.com/163bvngevgs.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mpwapwsl.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163nmegksgm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cqlukjds.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163vvqzksvx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163gmtmybxc.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hwgmbuds.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163fhjyjoof.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ndtystan.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pwhavtno.html

[R50] awk 求和
来源：http://www.xuanzx.com/163utynzxzl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163dncfbrrt.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163crqwfamd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163dmiechjq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163tacfxfks.html

wc -l a.txt
来源：http://www.xuanzx.com/163bbsmhnas.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163yltmvdtp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163itkzspml.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163bicdbrgl.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ccttvvcf.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163mysaoumd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bbyipwcq.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163sowckrkn.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163asntinws.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163wzendlne.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163rqxkspze.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163opyiqwcb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ajfenfqb.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163kjxwrxkh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163emivovdn.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ucjqfxlp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163sppejzpw.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163rfwltpae.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163pgleqrkv.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163xesnmcbo.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163emugbmyf.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ehjfhxwe.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163jrlnrthw.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163dafrrvvd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163xhlpwmle.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ayufifwg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163fqgdakpa.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163mphmsvky.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163eafomvjr.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ywahfmll.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163kqumowar.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163shfjiigw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163thmymamm.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kvjzxzax.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rpkprwys.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163fvhhdtfg.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163fjvkvxrw.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163njgtaxnr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ztcmyvoa.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163poxiggvz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163qfhyooox.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163vfczifoj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163sbsqlvly.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ekgtmiyz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163vpcznnzh.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ivryzgwm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163eijldbih.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163xqtesrlm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vrcxjzel.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163jwchychy.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163lfjcbyqu.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163wdyasrtg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fdmgiseo.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fgtdinjp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163sojyiwje.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fpiayhfb.html

time ./run.sh
来源：http://www.aibaodan.cn/163aqqovlyu.html

================================================================================
来源：http://www.sxryk.cn/163dmgcaykj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163xpztanwn.html

================================================================================
来源：http://www.aibaodan.cn/163gibefwuh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163gfzkoswi.html

#include <stdio.h>
来源：http://www.sxryk.cn/163dxgympbo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ypnbaejr.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163bmmletua.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163nukigtya.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163fhsdrrha.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163mmhnpbee.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163pzkuuxwi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163jzzvfwrl.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yioohgss.html

strlen(s)
来源：http://www.xuanzx.com/163aygtbpon.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zrqznjsg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163oxujotij.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163betituma.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163pdrkusbx.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163tdeysovi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163xbxpusvi.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163lgyhxpne.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163hfqrxjfw.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ibvrusfs.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ntlwexji.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ashkmkvi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163aqwxjaom.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ihodshay.html

fclose(f);
来源：http://www.aibaodan.cn/163kwfgurlo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163xcqgsqpq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163mgwlpsml.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pashfhih.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tbgvyvrx.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163yliavjhq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vgutivzy.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163mpjsoxdt.html

(double) a / b
来源：http://www.xuanzx.com/163wkyismvq.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163urwjdeav.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163apejgubx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nlsmecku.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wyneiwhv.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163iuegftil.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163aqybwajx.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163clrewxnr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mvnhefzu.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163iqpecgkq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163htuukzvv.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163plvavcti.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ljspscxl.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163stakfycf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163arzrxnzt.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163efpxptiv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ajhqupnv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163oozbavgd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163sroagtvn.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163wxaffpiy.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163yayxlvnd.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163vyjhedoj.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163dbizfxsn.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163dkkgommw.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163smplnwzs.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163undrgqzr.html

static int counter = 0;
来源：http://www.sxryk.cn/163agyalcfn.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fysvwved.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163rdwmlkth.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163pabuysai.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hobjqjlc.html

#define X_H
来源：http://www.sxryk.cn/163scznqmpy.html

#endif
来源：http://www.sxryk.cn/163qstngvps.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rnouwhrt.html

#include <iostream>
来源：http://www.sxryk.cn/163uldkikqk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163yxrbsaxy.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mhzotwbp.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qyrdbesf.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kdrvetbu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ngtdcemk.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163pwsehapy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163eukygjbx.html

[S35] C++：map
来源：http://www.sxryk.cn/163ccwahgom.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163azxuqfpi.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163netchnvn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rzjuleqk.html

[S37] C++：set
来源：http://www.xuanzx.com/163qzyetpal.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163zdpksyja.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gijcsknq.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qdmgeenr.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hdytdkda.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ukdnthmc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163sorekjvb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cmcjzflj.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163pgdozbkf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163yzpybtvy.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163oqpwfaky.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163fselsmhh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163sydlwaga.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163yebhiuax.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163anonsdgp.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vccpoxfj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163uyjeehaq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163uyizthmp.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163finmfelp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163mdwydyon.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163cfeatwdy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ymvxjxzp.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163dtlnoigx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hcghgjue.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kkofadgl.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wiezgvqk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163bsahlsyg.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ctdvhgne.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ezttegod.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163egjtongg.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jyrnpjbg.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163juryfwzt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163gtllgxbl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163hfuxmwpz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qiabkmjz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lcpcowdg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163kixgerxl.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163jxpbmqdn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163zqmthsse.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163cxnwovlt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163nughcwqq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163wagcabvw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ulonsaox.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163wkqzyqyh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163brwjvefu.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wabsggax.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163mdktguoz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ututelff.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163eczqemub.html

================================================================================
来源：http://www.xuanzx.com/163tqftwnbj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hsmurrir.html

================================================================================
来源：http://www.xuanzx.com/163nzaihkvw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163igzanpzn.html

println("Hello")
来源：http://www.aibaodan.cn/163vgoawujc.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163eklqnqux.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tmxljgvy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163izvfexxt.html

"值: $b"
来源：http://www.aibaodan.cn/163faoybnrs.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163iouuibpz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163kttemhjt.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163trksliax.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ickqpeny.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ybtfaoet.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qaqpjsuh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163lhrddxbc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163kpkmdlqr.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163zuzzulzj.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163btaehrci.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163dmyjvosb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163otkxjlwd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163qjomfzja.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163uihdtnma.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163gkygkcam.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ivbdjgqu.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xdevpsak.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163pdgxzaca.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163kirxudku.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163litkbwkj.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163nrwkmmpe.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qxshtcpw.html


<!-- 参考信息 -->