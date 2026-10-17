外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kzfvjxpr.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163bckddsen.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163qzrlsrpg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163wywkxvil.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bxyfyuns.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163revnihhf.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163lfazcnba.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163wzyvwbiz.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163eclhuyjg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163oefbtmil.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163nprdxeed.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163yweqxqtt.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163shamllkq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163wwoenlqq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zpilneyz.html

================================================================================
来源：http://www.xuanzx.com/163forccika.html

R. Bash 专题
来源：http://www.xuanzx.com/163wrjbpuix.html

================================================================================
来源：http://www.sxryk.cn/163wrfyxwcy.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ttbdswen.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ephrteya.html

set -euo pipefail
来源：http://www.xuanzx.com/163srnvfmja.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163bygxogpg.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163nlbpymsd.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zkrqordy.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ohtqsniw.html

[R04] 位置参数
来源：http://www.xuanzx.com/163vajodohg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ucbxjohr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163asoslddb.html

name="${1:-default}"
来源：http://www.sxryk.cn/163xvdrnsrt.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163iwgoclua.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163nhklfyfq.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ufpdjxbb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163hkrjkvzc.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163uakbwyfs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163kfvrbmif.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163hrojbwuq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wsonksjt.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163khfowjds.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163cgezoxnp.html

[R11] case 多分支
来源：http://www.xuanzx.com/163efhhvglf.html

case "$1" in
来源：http://www.xuanzx.com/163bdsaaebu.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mzcoyfgl.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ifunwwxl.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163uhqdinea.html

esac
来源：http://www.xuanzx.com/163liygsszb.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163damoefmy.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163trmmovxj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mcajtnge.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163vrynkizv.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163wphajaki.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163kwtpbpvb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163wclswuto.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163obaoapib.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163htgmwvlo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163abnitghe.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163lgvteaxr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xcflixug.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bffbvclf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qvdeojth.html

[R19] 数组长度
来源：http://www.sxryk.cn/163swazgjae.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ijmuigcw.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163asogdjme.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wmrbbfaf.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163yojpchxx.html

echo "${#s}"
来源：http://www.aibaodan.cn/163hzsxvvos.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wksnzngm.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163spfaesuz.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163inazvejc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163obyqmuyj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fafnahgf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163qkungcbx.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163jzfkptko.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163aataiufa.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163nqrxpaqa.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163obheynen.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163pbcagvhe.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163iuybibbd.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163xboqbxxc.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163wwzaeeqh.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163dqjzbxkc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vudyktqq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163fkeuzmto.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163aiiqmgjw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163sycbcoqk.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163numnzrgv.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163myaosoer.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mrtppvob.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tntexafa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163edaxmdav.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fejkvtwi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fifilxec.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163usohbrqv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lfhsyvib.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xrpteydy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163tzzccvau.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163myvsvmzr.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163covxcqct.html

[R38] 管道串联
来源：http://www.xuanzx.com/163qoasaxwk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163sfkmarak.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163hupzolgy.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hircdwbx.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163nhcunjfq.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163wfjetamn.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nxpmvaml.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163focdrhir.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163zcaaeugp.html

wc -l < a.txt
来源：http://www.xuanzx.com/163czkfctdf.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163uvgxpvgk.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163gtpvydom.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163rhddhzmk.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lxuhzkof.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vkzeytea.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163kqmqxhav.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163gimdvkau.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vzffswex.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163udttflgr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163oojwhhss.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163vtvgbqfc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163vcbbkdbo.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ileozoti.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163nupuujjf.html

[R50] awk 求和
来源：http://www.xuanzx.com/163soxgmjwj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163gfktzuxa.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163joqzcvee.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kwfdwluy.html

[R52] 统计行数
来源：http://www.xuanzx.com/163dmkkdzav.html

wc -l a.txt
来源：http://www.sxryk.cn/163romnmmlr.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163akinlvmx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163jsrnuujv.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163sflpmpfd.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163qxxwdnge.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ebzlican.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163qdbxswvg.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163vwpotamr.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163tktdkptp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163rgcaanye.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ixlpfnhq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163tuwiqbea.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163zflbghro.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gtmxuyyo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163qhojrqvx.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vzvijvsm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163impxgeup.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163tjqgwcyp.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mwakidlm.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ucjvcwry.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ckwrugep.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163etezfkhm.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163upcqjbnr.html

[R64] 结束进程
来源：http://www.sxryk.cn/163pfunuyco.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163dwhwctji.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163oxectjks.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163iievpnhr.html

[R66] 定时任务
来源：http://www.sxryk.cn/163rwcomsom.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lyzazqrc.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wzmrlkti.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163fgsezchv.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163qpxkhkcs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163kpyuufct.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pnacixga.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163wjsyugtx.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163jlqinxcp.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163gufsfcnb.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163deiepxxu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163dzgljyok.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163nyvvcldq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ydsiznpz.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163sxeilypf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ssziczqq.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163nlwewjhb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bnvojpdl.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163mbjejjoe.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163alzydrek.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163cvmqydpz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wmcvcvsx.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163hpgphnbs.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163pikofgyw.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163oyuhcayb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163uzwgnoap.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163iosnhupu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163yzexjvhe.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163iofpymnu.html

time ./run.sh
来源：http://www.aibaodan.cn/163kirtoeuc.html

================================================================================
来源：http://www.xuanzx.com/163lbqwnqxu.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163nqysmeoy.html

================================================================================
来源：http://www.xuanzx.com/163mhpwjehz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163nsuomdyg.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pzspemxf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163xjhmgbyz.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163tsyxfgvl.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jqdsbewx.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163dafuabgc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163dpevweut.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jvehbime.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163dtimfalr.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163lbibvmpt.html

strlen(s)
来源：http://www.xuanzx.com/163bmepcuiq.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yvugzlei.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163orccgalo.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163miphlbld.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vlzvgiph.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163nqlpsalo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163spoophrn.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163vbvvugsz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mvwbforo.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163pibanjsr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ltnoktbf.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163rjozwaor.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163htetdoot.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163phquvhpy.html

fclose(f);
来源：http://www.aibaodan.cn/163rspmbtpu.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tmtqozlv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ahjxwulm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163nmdghfvb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163csmtuaep.html

[S14] C：枚举
来源：http://www.sxryk.cn/163mtajsxda.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163llhkhnhx.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163immxkrei.html

(double) a / b
来源：http://www.xuanzx.com/163zthifvcx.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163adgwyiua.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163tijsycax.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163vsszynol.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163gdhcdztw.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163mazkqgwl.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163uffaoizd.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ubjqqqdv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lgharqgd.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163bfvnpkqc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gjnzxjsa.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163cpmkuxyn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163tzzbgkwg.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rkbnuzmp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xurtejrz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hrqzmvub.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fbpxqtmf.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163szcljzoa.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ewfsilms.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pcdaclpg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163bijmrhwj.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163oglfwcfg.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163xidxkgzg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163yconnais.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163qqnkwmxc.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163gexwskkw.html

static int counter = 0;
来源：http://www.xuanzx.com/163ajcpurjw.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163excgpoqh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163hqjhvnsa.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163vtxucmkm.html

#ifndef X_H
来源：http://www.sxryk.cn/163nndptmex.html

#define X_H
来源：http://www.aibaodan.cn/163poypxjow.html

#endif
来源：http://www.sxryk.cn/163lhzjcamm.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163xvaskvud.html

#include <iostream>
来源：http://www.xuanzx.com/163fyxpbott.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163bvdamyyd.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163bimwduwl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fhhbroli.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163jetdqnkx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163bqvsakoa.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163fhxtlmcw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163qxwhhnns.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hhhhgdwo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fknprdnq.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163grtelyoi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163sukxrmds.html

[S37] C++：set
来源：http://www.aibaodan.cn/163yymkbfjb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163pyosrgrq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163worhawkr.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163oltrvvnx.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163umvveatu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163mnpqldkr.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163wboiszsd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vlkkgrgb.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163xcqzkdli.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163uizpsizx.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ghhyqkhc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163feygpqcd.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163elhxttwq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163yhqtclld.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163csgybjsb.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vfgkgrbf.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163kfamsyuz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163hgbudvgx.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163kxgoydlw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163nfgygptf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163dzqxacwg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163libppvrb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163szditfya.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163aulomjrh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rqofkhpv.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163xclbevkx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163texcvuxa.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ljrtlacv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163gkcwnkdp.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163dwhkjnmo.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163kuoubozz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163fsbdxelp.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163txxraavy.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163crmbyoqj.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kiozuyfd.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163priuoich.html


<!-- 参考信息 -->