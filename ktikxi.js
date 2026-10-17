外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fsaeisiv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ksgbkpzk.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vielzeud.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lneallfi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163fdbyxqlw.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163krbnshfa.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163cgatqkdm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163wrnkdfyu.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163oosajvuh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163nenvoxlj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163mnrecehu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163wdbrueva.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163qwhhvrio.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163bdlhuphs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163lkkzjnff.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ywqnqwoy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163gdysftfw.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163zxvrvveq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163eymosgfl.html

================================================================================
来源：http://www.sxryk.cn/163bnibvoik.html

R. Bash 专题
来源：http://www.xuanzx.com/163pxjeeupl.html

================================================================================
来源：http://www.xuanzx.com/163whodcwgd.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163jdqgyuqj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tffjvstx.html

set -euo pipefail
来源：http://www.aibaodan.cn/163nvrwdkph.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163dhkhwxdf.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163isdejicy.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163xyfgbkac.html

readonly PI=3.14
来源：http://www.xuanzx.com/163mvulwkvn.html

[R04] 位置参数
来源：http://www.sxryk.cn/163vijvtzyn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163jrydvfrw.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163efrrusji.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qvxbaozw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163mabsniix.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ylpefvxt.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wwsvxoxk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163vbnrurzb.html

[R08] 数值比较
来源：http://www.sxryk.cn/163pdzrtrlo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163hlpgkqxa.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163rlboavbb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gffowktp.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163akmycrwa.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163yowwmpss.html

[R11] case 多分支
来源：http://www.sxryk.cn/163cokqydzj.html

case "$1" in
来源：http://www.sxryk.cn/163ycdxjawz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hsupisvh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ucjetgmz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163zkyjgamx.html

esac
来源：http://www.xuanzx.com/163xkmpzeyt.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163luafzfdj.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163eqabpqsw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163tfochzwv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163sdepmsdg.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163mhrwdpug.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163nisqofzg.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163htgmsxxz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pirpnvvq.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rexcdplv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jimcqvel.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163hsqxutye.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163znlwmunr.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bbnskjjq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163zsimmkmv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ntwlyrle.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kxvedtdu.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163okjazcbo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163bcqbmuqk.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163lxodiafn.html

echo "${#s}"
来源：http://www.xuanzx.com/163xkfpvpkk.html

[R22] 截取子串
来源：http://www.sxryk.cn/163zepyfxel.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163yjdmjumy.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qywkpzdu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ynsbczzk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163kxfrbcmo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163niwyqtxp.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163drdkfsds.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163pnclovwb.html

[R26] 命令替换
来源：http://www.xuanzx.com/163fklimkpm.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163qlrpflka.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163gxmkewvt.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163nmfchsvd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163gcoodjae.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163lyjlmqct.html

[R29] 定义函数
来源：http://www.xuanzx.com/163phthneas.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163yuqzhseq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163yrjsumlh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163binmmglu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ubmahqkg.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163gorodfth.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ofhbicot.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163zftsymcw.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163uromvkbu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163sydlzalj.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vmnlyagh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163didnhtsf.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163eaieidtu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163eseexmyj.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163kibiruue.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ksbkyums.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ufaminhr.html

files=$(ls -1)
来源：http://www.xuanzx.com/163scjpinls.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ryurxnpy.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163gnxniqyt.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kwyqfccn.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163euparlba.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qjmmipgm.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vqgzhcbf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163cqllznjr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163kuepfwyp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163riixetfk.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ylwlwmlj.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ouybgkoz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163dqnbzjsj.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163jjssnqli.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gcstwpoy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163rtmmedzq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163eifodaub.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163xkvgctro.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163edkaqrld.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mxmxkwke.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163kdcqmmpg.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163nbaafwnd.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163uwkcirnm.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ldpbfxdi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dtbzkwmz.html

[R50] awk 求和
来源：http://www.sxryk.cn/163gakglkis.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ohhgyijb.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163owmfhyts.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163mxohpxlz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163uocbzplb.html

wc -l a.txt
来源：http://www.sxryk.cn/163eqfphgsw.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163bbrqxqix.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ofhokunn.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163itcvdsxz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qfyoeyjr.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163xlmiudob.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163cefwgyvm.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163iygyykmp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163kzvsyfly.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163reaffvzh.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163mdtrwgbm.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qfmqhrol.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wkzjqxux.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163rhqveyqs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163epwvncky.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163oobeqcgm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163eladopwm.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163lbchkcwh.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163gpvagdkl.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163otskeuxi.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163cfeusefv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ucxuivmm.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163oftrspna.html

[R64] 结束进程
来源：http://www.sxryk.cn/163qsbbgmun.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ojhzqoso.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163plqnvvax.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bjuqgsot.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ixtfhqkc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163edjtlufu.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163onrddsbw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163smzafvwh.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163bholcmpf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dogedamt.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163fecfuxfg.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vtpymkul.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163faeqmznz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163glmhnpay.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163bcirydjt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163gsskngca.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163wkmjlref.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163zwjadefx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163dcigregj.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zbcrejkb.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163dtealtbt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163npnayekf.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pgjpdygj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163kckaoazg.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163dyqpqmog.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163phxgzzpn.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163nzbecrxf.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163stnjugjd.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163drmqmbuc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lzjfqjss.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163cengrmug.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163memdhpst.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163cyjlynzb.html

time ./run.sh
来源：http://www.xuanzx.com/163brtpotel.html

================================================================================
来源：http://www.xuanzx.com/163poxmqnua.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163dhiroohc.html

================================================================================
来源：http://www.xuanzx.com/163xqyjoqbc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xxnfakva.html

#include <stdio.h>
来源：http://www.sxryk.cn/163agxvrtuc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163umximqjy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jzvnrvny.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163mysnpkip.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163tfkryxez.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163kmnmqqzx.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163xeiezvsh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163lyudrqjv.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163atbbvzrs.html

strlen(s)
来源：http://www.aibaodan.cn/163awnranyg.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163usenwxwg.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gfdrugov.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163lgcldsxv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mkedszkb.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163oaobkihu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ejemsddu.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tnxrhtev.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163bukdppsl.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qzwndges.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163conjlosc.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163gbmxsefv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163nagnrrhj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163saeectlu.html

fclose(f);
来源：http://www.sxryk.cn/163rwsvtnqw.html

[S12] C：写文件
来源：http://www.sxryk.cn/163xtiqeuoi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hnmbzxnw.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163weaxzsvh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163byfqikyf.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163yuvfmmvu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163slhrvwth.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163yflihqiz.html

(double) a / b
来源：http://www.aibaodan.cn/163ktxplmrt.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163qtlhagzs.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ccxrgyld.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163avhratnz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163nzkuqehs.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163nwoiludn.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163griydtyn.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163zyufikwu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mzpddbtc.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ikgnaltl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163blmknpxn.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163noogkeiu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163zipbsupz.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163zbjjkurr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163sqvzimft.html

[S23] C：随机数
来源：http://www.sxryk.cn/163upqeuhik.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163douweeka.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ygucjmsb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163wespbpwo.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dnvkculo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gtcmwlft.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163uyxyilwn.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163jtndaexk.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163iyhtqrvc.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yaqisbfh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163fdtvwokr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ztvziebr.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163duyemnru.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163lpjtgegk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163hazugpof.html

#ifndef X_H
来源：http://www.xuanzx.com/163ukhshftp.html

#define X_H
来源：http://www.sxryk.cn/163boybvsbv.html

#endif
来源：http://www.xuanzx.com/163bovtmxmx.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ianqqykh.html

#include <iostream>
来源：http://www.sxryk.cn/163pbxmnpqs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163lrrtutat.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163iryjqtsc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jwfauzyi.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163izntmghu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163unumoqzz.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163loebdbmw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163urkwsrfp.html

[S35] C++：map
来源：http://www.sxryk.cn/163jmfblsqd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hqhadsgg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rrqfoxfg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hkcngqnf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163vzqqqeie.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163sjjuwasi.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fksxskhf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163scmbuslk.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xcbwttej.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zktdtjjn.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163rmujnxnf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163metrihcg.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163vcdrwogv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163zekxxyga.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163crkwynhu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qofudnlg.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163kznvtmzx.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ozlpzrjp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163vbderwxc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163envejbgr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163wbiudtkd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163zcjwotdm.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163nbhuacxo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163bnipammr.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163zcthsnvy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fjvdeqgf.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163hywupjjj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163exociayu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163unikwinq.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163izulrjuy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wsxdosoy.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163bxsbyxnt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ijmheyvb.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163mpqhmfek.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163bqqoamoy.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ipccmogb.html


<!-- 参考信息 -->