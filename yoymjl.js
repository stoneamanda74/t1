外链999!wailian999！

[Q80] 字符串截取
来源：http://www.sxryk.cn/163nncjdbmt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163kcldnhwi.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163hlmdgeir.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vuydwdpn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163eeyxfsmy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163zkoqdtom.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163eeeydsru.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163rxdqzppp.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163tgscvfvq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163qanijqhg.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163suzaysmc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163veyfombi.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163puyamauc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163nfkjhsfu.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163vlpcbhmh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163sprqxgnq.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163euddhobh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ghpxfvtm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163jhbmwiys.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rxxtetih.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163bekmgsmt.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163nzrshpdh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wrrzanqf.html

================================================================================
来源：http://www.aibaodan.cn/163ltimzcoe.html

R. Bash 专题
来源：http://www.aibaodan.cn/163njejdqlr.html

================================================================================
来源：http://www.aibaodan.cn/163kotrnowe.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qzkamjrz.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163fojhiota.html

set -euo pipefail
来源：http://www.xuanzx.com/163yxxfropz.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163itwnmgzg.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163hkjbmyqp.html

[R03] 只读变量
来源：http://www.sxryk.cn/163cwogyyuy.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dgqmydxu.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ogotthpi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163sotfakhf.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jpmxhaom.html

name="${1:-default}"
来源：http://www.xuanzx.com/163dxjujeli.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163txdaeujt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163podrrwte.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163gngrveaw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nzirbfes.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qfutxpqh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163sawrbpdt.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163yvitrdvf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yennmyzj.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163dccgxtli.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vrcgvisa.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163niurmzkw.html

case "$1" in
来源：http://www.sxryk.cn/163rlirzgpy.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163cwqvysyr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163jusclila.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ycodwgng.html

esac
来源：http://www.xuanzx.com/163inplatjj.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mqhbpqht.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163pqfpaomo.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jbnrrzwb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163etznhygb.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ymxktmyq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163xrhfdycx.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wmnhhcep.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163fbphnlue.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163oohntfjr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zfsequhn.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ezucjqmd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vocwnfbq.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163szbnneqz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163hjsvwdnk.html

[R19] 数组长度
来源：http://www.xuanzx.com/163kgsnsixx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163abcpdare.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163gulhtnss.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163dungfidg.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ejfwsfiv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163guisrgzj.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ifmrqdja.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163yqspzjgz.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163yzcomwft.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163qrqodptd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163yiuqretf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163dqfralkr.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xxvyaool.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ewsziwwb.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xarrqxwf.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163sosnexls.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ottvfzfx.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ipvsuuta.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mzsqxzhl.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qiicxnda.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zjitrvrf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163fmecjotj.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163evdqqrqj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163dpmajulu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qtevaxsw.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ogwtzncw.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163klpglwkh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163vhtrsfef.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163leynqyij.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hpvdzjkw.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163czwkihdd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163njcqfgan.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163spxpelgg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163sdhjwkbz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163cjkrzrtr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163apbpcyzs.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163xqqznmqy.html

files=$(ls -1)
来源：http://www.xuanzx.com/163hjmiyghx.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pjbalhhg.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ekvdybkp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163mtupjsju.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163inwevacv.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163fmgmnxll.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163qbyastdh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ibjlmfse.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163hzkvxpzh.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163flhumkbf.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jtsugivc.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163wtxfqyfu.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163yhgvgzkf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ygwnsgcd.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lfcdrtjw.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qollqtad.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163bbffwlcu.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163eluafpaq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163atljidty.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163afifaykm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163feyewzfb.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163bonavcfh.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163trxtantf.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163wivjoime.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pdphrtfr.html

[R50] awk 求和
来源：http://www.xuanzx.com/163fmepljjj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163gmcwvyjc.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163cvydooyp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163hchayoif.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163pupneueo.html

wc -l a.txt
来源：http://www.xuanzx.com/163rrmhzpox.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163oaeyubez.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163chzepfmq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lwjcraij.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163dsqhtsip.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163uzyjhaim.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163gwmzmigr.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163drndzdox.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163kdzphnpf.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163zetubukm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163kdderlwz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ykmktcee.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163dyagqimi.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ulktgyau.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163pikhjqgm.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163crrzhruw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jddszsgf.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ufjhutzg.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rrnampom.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163kokaokkx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163jdvknxrr.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163smibklno.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163doisseqy.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163hdihkvke.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qsfmibgl.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163qpypjeim.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dxkxjrzg.html

[R66] 定时任务
来源：http://www.sxryk.cn/163yleivcxm.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tuqxnpun.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163mcpqfday.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163gzgoijbx.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jddznjda.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jzahsxgw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163amaurrsw.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163bjohtnzy.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163quuxfbdo.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lcannvvo.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163yrfmblot.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163wkwpimhx.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163odlytgit.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163raqomnek.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163afwwyzpj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163oloappfb.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163eqnbejbj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163vfglhjbp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ipbsrheo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163fnibflue.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gbvtybxb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163proiwupy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bfufkvzz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163siztkius.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dinfhlzm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163wxcilyno.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163zjvfgowx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163agoopxzc.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163jbrwwxzf.html

time ./run.sh
来源：http://www.xuanzx.com/163npjmhttq.html

================================================================================
来源：http://www.aibaodan.cn/163byhgvvuq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163pxdjvhud.html

================================================================================
来源：http://www.xuanzx.com/163gqzjwsng.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163srgokypv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163bimygdwk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163clekirgj.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163cntvcimy.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163jfgxwzsj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jreqhtii.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gpbgilmw.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qwqrmktn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163aodlpntm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163hjchhslq.html

strlen(s)
来源：http://www.xuanzx.com/163nidqaadd.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163nspzejta.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163vdxxtnso.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ycdhwqzb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163srcciino.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ztjinowk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163uawgfdxj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163tilkrzao.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163qqopccwx.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163iyvryqqo.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163dtcwunlt.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163houoazau.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163vrqaksud.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163jvhtsihw.html

fclose(f);
来源：http://www.aibaodan.cn/163vsqyejls.html

[S12] C：写文件
来源：http://www.sxryk.cn/163gfospwde.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wedulqlr.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163oyctxwjj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163hhcenoow.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jdtujhwp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163fnxhhnrs.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163oowreqab.html

(double) a / b
来源：http://www.xuanzx.com/163rbmifqkh.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163xnrhsodu.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163mhpjbjpd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hxgwyggl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163tteffmbg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hgvesbvi.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163enxxgaxv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163yitfwjlo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163anfuickp.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wvecjvmk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163glnivpri.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163gyrdakjb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163msnsrqnz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163jbsbirzz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163unchzmwc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163trdqyisj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163pkvcmspv.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163xbznslop.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mfcifpym.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163iyguncmv.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163tcftgxls.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163umrmtumk.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163kgkzxtks.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163qehkxqkg.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163tgnrbkmk.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163sexgaixe.html

static int counter = 0;
来源：http://www.aibaodan.cn/163cvrjtkza.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163bkziftrb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163rbuywbsu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163cgioytno.html

#ifndef X_H
来源：http://www.sxryk.cn/163dkmqswgi.html

#define X_H
来源：http://www.sxryk.cn/163dydhqmkf.html

#endif
来源：http://www.xuanzx.com/163mgpapccf.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163hvcjkqkd.html

#include <iostream>
来源：http://www.aibaodan.cn/163cuqqmlft.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163galllxge.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163gyxiayky.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163yrvqrgeo.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163swgrdlmf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163etscexip.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163nsiksrtw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163vabglfay.html

[S35] C++：map
来源：http://www.aibaodan.cn/163bbpfwdra.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qgahllbu.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163fzstgkat.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dylxhujj.html

[S37] C++：set
来源：http://www.xuanzx.com/163ykpkiszf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tjdpctts.html

[S38] C++：排序
来源：http://www.xuanzx.com/163guiexahl.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rjfswvyq.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163fetfzdqz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163sglntlwx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163skxgmkzb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ejisudfv.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163waotlepd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dnjbkldo.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163zpkosuke.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163mqjzloex.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163tredaspo.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163hjfotpfl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163tiyobdxa.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163jaruetoi.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163samfrdbk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ayhjsfhr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ciiiuwoc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163rjmccebj.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wrzvjiui.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163gkobcxhr.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163poodajgz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163czvotgcd.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163gtvjnpnn.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ejosovhi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163oeiyickz.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163gpqoqyra.html


<!-- 参考信息 -->