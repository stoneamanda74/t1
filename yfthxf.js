外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163baxexkni.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163cwfateis.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lufavdpu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163pdsacbtn.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163avezrnof.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163bgycikgg.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163mgtpmbfg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163hianvqfb.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ymgjifnf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163gavfjged.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163cuyupknx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163owejaefx.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ppqxxaql.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163mfllygik.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163atktkeit.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xqtnaocb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163igqllrpp.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163igrmvixo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163catvagyn.html

================================================================================
来源：http://www.aibaodan.cn/163zgcwfvin.html

R. Bash 专题
来源：http://www.sxryk.cn/163asdqcarz.html

================================================================================
来源：http://www.aibaodan.cn/163yueaflnt.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163zfpcwjpw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jhqorxjb.html

set -euo pipefail
来源：http://www.xuanzx.com/163nzpyziam.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163tivfpzll.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163aptucwvx.html

[R03] 只读变量
来源：http://www.sxryk.cn/163rmhujtom.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163syhohedp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163uistozuf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ntrofskh.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163zuxinpfd.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kdtmyrcb.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163xemmcccj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163zboagyjc.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163sdhrhsfi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163kjvvaaks.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xvjcwknj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163rtbcgjdj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163fcelxxnh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qmpkexbo.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163mwsokdmk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163fxhijqfd.html

[R11] case 多分支
来源：http://www.xuanzx.com/163orsfedsz.html

case "$1" in
来源：http://www.xuanzx.com/163nfcqwzrw.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163xyjwvmwg.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lcveezko.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163aerdhhzw.html

esac
来源：http://www.sxryk.cn/163hewhutxj.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163nunqiock.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163shahfavc.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163tigzbfxm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163xuuycsse.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163kuhwuksz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163smhfgjgk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163fhhvtqqf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163dncnjfmu.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vgaikbgq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163gekaprdr.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163lssrlstl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163mocxpuuy.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163npngvorg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163auidnnmo.html

[R19] 数组长度
来源：http://www.xuanzx.com/163edbenbfy.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163gqxqlswe.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163cquuupga.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rrsybumu.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163cecuersz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163pmnnjcfa.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163npzgyvvn.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163sqclxaqf.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xayolakc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163efxfichp.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163hwfxloof.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163xstfjqsa.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163isgnqvyo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163dyvliozj.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xxkwmxsg.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163gnyxbsop.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zhhawers.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163uxhteqkl.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ciyauwrb.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ubjgpjgu.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163jclsiofs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163xywqfels.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163vamkguhy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163kiqsagph.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zficszax.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163zhnikpcn.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163gbdbahru.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wlzjfskr.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163vkrufgot.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163kqdbuwjn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jtdmibbo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xrpdiuek.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163lmzbljmp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163cenrhemf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163zxbapxsf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163aufylvtv.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163wzqkogro.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ywtlhuik.html

[R38] 管道串联
来源：http://www.sxryk.cn/163lzxjmfsa.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ecrdysfd.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163gfrltkit.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163oknfkcfg.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163zzdddezd.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163jqonnumm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163mahkbago.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kivwyjhw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163xtfbiszu.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dwzpitka.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163lmdmdkmd.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163zpshhqzg.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163mpplxurf.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163qozeoooi.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ilhariei.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qvhtittu.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dwmeiuaf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163dwzqraro.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163emnsgqor.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163dlffkjad.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xzazzqfy.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hgoksdud.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163hxhztnim.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dxjqckgg.html

[R50] awk 求和
来源：http://www.xuanzx.com/163cyliztir.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163erkuztnx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163egzebfbs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163rmsljvib.html

[R52] 统计行数
来源：http://www.xuanzx.com/163pzldfnyf.html

wc -l a.txt
来源：http://www.aibaodan.cn/163xqoxinkl.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ivokrfpk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ipgncmwo.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163iekdmwln.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vmogvxwq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163jcdzctqf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163wajvuzic.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163zvtkolil.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163jtatbrmw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163kxdackwd.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lobmwbtt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163juliupmg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163koqokqzk.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163rtpsfmlf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163hgibxekr.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163gifxilxp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tfjtxieh.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163cgilrucx.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163pcmmkghb.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163uommaour.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163nvdwamdi.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163duieabge.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ruohkozk.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ixrovzht.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ssvavmfp.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163qnjfvndi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qemefhig.html

[R66] 定时任务
来源：http://www.xuanzx.com/163dhciuhki.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163emzxaogc.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163clsyothi.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163rrdrnhkz.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jidbilad.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163bhfidsow.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163cazbfekl.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163zowwebcs.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163snsjbaba.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uocuyuvb.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163iwstoerx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163xfhcyujo.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163jpbkcbyb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gbgwsjbe.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zejppfbp.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163pglpwyfi.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rexifpax.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wppybgld.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ybgvdpeg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ucnddwsg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163dgvrfeqe.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pfmniaty.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163rhcesmcp.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gvxfsqhz.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163nohqmykz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ipordikx.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163sfmrryyu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163fktwmekx.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163xdssopew.html

time ./run.sh
来源：http://www.sxryk.cn/163berubeut.html

================================================================================
来源：http://www.sxryk.cn/163ttrdoxkd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163nkqcihti.html

================================================================================
来源：http://www.sxryk.cn/163qplgygns.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163gzdhovij.html

#include <stdio.h>
来源：http://www.sxryk.cn/163yzdkagxt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ghzqhziu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163qtojohxi.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ksuxjfwd.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163fgvbgalg.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163mqkkcsqa.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163mhikclqk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163gvwikywo.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163iosogiqy.html

strlen(s)
来源：http://www.aibaodan.cn/163hacrbbuj.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163dprnnocd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163uhbmqqad.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dsxsismv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kycvvxfr.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163fnqihaew.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163abrqyxgq.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163schamfwx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163njsnkcun.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163tjqmzqyf.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163cnevfbas.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163wjdjsbnt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vixmkrtx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ygdopztd.html

fclose(f);
来源：http://www.xuanzx.com/163qfdhiert.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163lgevsmsr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163dtaevqte.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vdjpmohs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kcqywfjv.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163cqidbsrd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163uxnwyjfd.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163tgilmvko.html

(double) a / b
来源：http://www.xuanzx.com/163dcoatgzv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ghzqwgzo.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163kuablhhz.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163pdzjyhsi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163amosvmin.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kmlpcyqq.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163cdeufqez.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ckfywxmk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ftvlskxu.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163txhtzvuh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163spdsbcra.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163uocafgqz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163jtbjoroo.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163wxkwxyxj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163nhkvkjun.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fooelqwf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163dopkcukb.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163zdwqlugs.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163azsqiach.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163gvpyuoza.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jdxdfpwl.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163xnplvvxy.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163fdrbzemo.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ovjvyjrx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xzuxekzt.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163brngbtfe.html

static int counter = 0;
来源：http://www.aibaodan.cn/163xlwxxlmf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mbbkczos.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ngabtdfh.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163gtwsdnus.html

#ifndef X_H
来源：http://www.xuanzx.com/163jkhiahnu.html

#define X_H
来源：http://www.sxryk.cn/163mketdsmj.html

#endif
来源：http://www.sxryk.cn/163tyvaikaj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lvbxthxn.html

#include <iostream>
来源：http://www.sxryk.cn/163bjfcizie.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163kgkggqkw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ailgiong.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163uwmxkbxa.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163hvojftrr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163dyrrxrfz.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hxbabwlj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163zollpykz.html

[S35] C++：map
来源：http://www.xuanzx.com/163fckadftz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dfquxtbj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ifmucoqd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163cmaoilpb.html

[S37] C++：set
来源：http://www.aibaodan.cn/163spltgryi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163iovhcqcw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163dxktksdi.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ptrdmbtu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163backoaag.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163wqzwbwgx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163fwzokfls.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163lpiwiqia.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163fodxmwiz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163cajylckd.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jeskawcg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ziljmqes.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wemkewel.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163uxxbvqfb.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163fzdsvecd.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163kmwjmjsr.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163uqwajayu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163iaufwzdz.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163bbwyvkhx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163hezqqulu.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163kssuvkzd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ikwdzfja.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163lpqrrosg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rwhhdbnr.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163btvthwxi.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163lxpxhlft.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lrgbrkup.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163dhcnoczp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hdcwryfa.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163xftpgabc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ehqgnnou.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163irspukyl.html


<!-- 参考信息 -->