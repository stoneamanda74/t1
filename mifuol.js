外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163zrhdkvmj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163gcaczhgd.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163fyxcatru.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163tsxbqnhm.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xsiojfzb.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163prkozwub.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163wznoaqhv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163gkclqrvs.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gclaxeap.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ybxzdiby.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163yebjktxi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163prxvrjyq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163aqliegvs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163imrnxwxf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ecmkunks.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qmsohdxr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163iogvjcnp.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163sjtyqasn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163islnsvqs.html

================================================================================
来源：http://www.xuanzx.com/163vkhvzxdh.html

R. Bash 专题
来源：http://www.sxryk.cn/163dfypigtv.html

================================================================================
来源：http://www.aibaodan.cn/163ktxqrlji.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vltrpjlo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163eathjfrh.html

set -euo pipefail
来源：http://www.xuanzx.com/163segrlwun.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163fvclpesd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163yjwcsdhi.html

[R03] 只读变量
来源：http://www.xuanzx.com/163decvpoea.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ccdqncqi.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163vgsihyvg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163yikcwjeh.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163hqjlanfc.html

name="${1:-default}"
来源：http://www.sxryk.cn/163bftjezqu.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163eomjynhq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163snjjzuzf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163bzdhnswl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163fkyajxtj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163jukzpqwg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163dtovdfwe.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163whotocrt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ngsnkmcx.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163xoafidak.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163tqitzpmk.html

[R11] case 多分支
来源：http://www.xuanzx.com/163kwwccwwo.html

case "$1" in
来源：http://www.aibaodan.cn/163wcplcztw.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163natjvrjk.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163hsodkfow.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163axwjvcup.html

esac
来源：http://www.sxryk.cn/163lnezbzqu.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ocvddzgx.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163lybccuir.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163brdvoonm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ubfarqzf.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163mafigtix.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163nttsxhvg.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163uzndfbbe.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163abjeyepz.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163fipnlodq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163vfhqlrfs.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163zgfayftl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ryykwdoo.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163vvmeeyca.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163egsqyetw.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ndgtuzsx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163pzhbyqvx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jkodjsdb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163niljcuai.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163dntzddbc.html

echo "${#s}"
来源：http://www.aibaodan.cn/163wdhetdqo.html

[R22] 截取子串
来源：http://www.xuanzx.com/163fbmmehzi.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163uxhadnqf.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163abwmlwgz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163czfensuz.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163guiywgwh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163lbjvgtxc.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163tfgvrsnq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qhfttzax.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rrnpwzhu.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163yxeycpge.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163euwbqrht.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163asmkewwv.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163qcgmapld.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yojcoquq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163jrnzuzst.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163tpkwctuj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163iwvvftty.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163bvjunppu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ejneedpj.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tbadnyye.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163gocffnpf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163kufijrqz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163iflsdtlq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163yfpyfqul.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163rwbetzby.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ahyosxic.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163teoxudly.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163vkdkyphs.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163pujyvbzt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163oigxojzo.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kkumjfns.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163yszbxshq.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163lttczkmf.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163sciqnmgw.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163vvtwjazq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163oyuepgpb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bseobfnb.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163vhqvdshe.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ohpotyyv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163dcnfvoqs.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kznoaqxp.html

wc -l < a.txt
来源：http://www.xuanzx.com/163vavycefo.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163dqqmgpom.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163cvofnfhd.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163iowywfzp.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163jtckpefn.html

[R45] 批量删除
来源：http://www.xuanzx.com/163nofbiydv.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163nhptqfmb.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163oqknpgqq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163bagauwge.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ashgsemn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163surllqev.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163tmakfevp.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hwldrzzi.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nuzlqezt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163pnohefcd.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163oyixfjuu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163niklsdvi.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163zuhlrzgw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cptakfli.html

[R52] 统计行数
来源：http://www.xuanzx.com/163vmpgorta.html

wc -l a.txt
来源：http://www.sxryk.cn/163ncznwmvy.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163gnujoxlq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163eshcwhzd.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163irdjnvfs.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163pvpvajrt.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163sjqigxyd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163sepclcyr.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163nlvghyep.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tfwjmrzl.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163fndvztfd.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163rfjjikwv.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163bxzfxqvh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163cwgkekkw.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163lwojtoaa.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163sgalobah.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163vqpioppf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163raetgyxa.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163wfbwkpqa.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163tpmgroxm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163spyymbuo.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163swyounmi.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163dwkbibdo.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163psnqudwa.html

[R64] 结束进程
来源：http://www.sxryk.cn/163rjrzoydn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163lqtsqong.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163cxvgvdwp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163iugyzehk.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163yaukygel.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163rvgjgqrg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ugjdmwrn.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163vkqshccy.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163tczldoqt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163kvdlzhud.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163kdtogwqp.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163szaacfrg.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ckuqovqn.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163bcbxqcue.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163xwjakfdc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ndoomzfk.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ivawotpi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jvqlowhb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163wlwgnzlv.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gcblsres.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163drutfpky.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163atxzdnom.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163yhgztybj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163biklohuj.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jwkonmbn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dmhrhdif.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163goevwreb.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163qckmospi.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163iejabokn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pomubkjp.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163azbycrqh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163uiulunrl.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163xdaqbdid.html

time ./run.sh
来源：http://www.sxryk.cn/163oanfkigy.html

================================================================================
来源：http://www.sxryk.cn/163nydcapsz.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zjlfgmge.html

================================================================================
来源：http://www.sxryk.cn/163tyvqgnxz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ybzjthyi.html

#include <stdio.h>
来源：http://www.sxryk.cn/163gwzvtzqa.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163tvvccpbi.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163oslcoqjd.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163eqztasii.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vyyrcras.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vrejkkpb.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163hlxqjphq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nvmrpghn.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163aaaxccjv.html

strlen(s)
来源：http://www.sxryk.cn/163ywcxhstf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163flhzhqtp.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163jrgdjddw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163vhxwgniq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wrpyqpmo.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163acdabzax.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163fgcatmio.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163anyxsjfg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163pddgyghb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pzmxzoyr.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163dcienucv.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163tnezhent.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163cqbmyoqr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163pxsnrhow.html

fclose(f);
来源：http://www.xuanzx.com/163xbfhejku.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ldfwgyuz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163lwxoqsrj.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ptnmcsyn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ultedgcn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ejjhathg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163uhetylcn.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dgemmcjb.html

(double) a / b
来源：http://www.aibaodan.cn/163fjxrmian.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ogoyzmmd.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163nxitmrkh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163bmzqdtrv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ngwrunjn.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ezwbklez.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163wewmrxdy.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163gtwmmezx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jerjgczc.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163jzzyciqx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163riveuufc.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163btahczlm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163xlniupzn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163suuokehd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163otwhhbbx.html

[S23] C：随机数
来源：http://www.xuanzx.com/163kujbvvyw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163uiptrebp.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ditglyzt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163tvzqqwuv.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163oblbnoxz.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163tzzxibis.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163xpjudxjd.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163zyizlkhs.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163yrjeoxdd.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bdcmxdfr.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wwvmziwr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163jpnkocsn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163xjrvcobu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163tavoclcv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ollqddwj.html

#ifndef X_H
来源：http://www.sxryk.cn/163olsaukjd.html

#define X_H
来源：http://www.xuanzx.com/163fraqgrmd.html

#endif
来源：http://www.sxryk.cn/163ocsjrwra.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163oqyggzxz.html

#include <iostream>
来源：http://www.aibaodan.cn/163qdyohjob.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163sbvweftc.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163evavtnzg.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163nukwgasc.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163yrhcgzjo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163afufecos.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gravtbbf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gdqdqotd.html

[S35] C++：map
来源：http://www.sxryk.cn/163gcslouid.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wxjybilc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163uaheewry.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fjrqoddy.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ydqgratv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gekihjsl.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163nyvxvnhc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163auviexpr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163lpwxmxdz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ikgldinf.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163hscupxhb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163agbxkbad.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163qwjnqlma.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163qgkjcwgl.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zlgmwldo.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163etknscwv.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ytunlkmz.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163jdimxqea.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qgynujfk.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163igvqxzze.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163mztpgzde.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163pahyrcag.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hrneijlc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163reozjoqy.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163fpvqffzx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163jdmvmcak.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163yomeyenw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163pxgjkeja.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ngdytwzv.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cxhxciyk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163uiqvjabo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163eukrumdm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163fmohaapf.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163aryrncpk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163rbjiurbd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lpexnkao.html


<!-- 参考信息 -->