外链999!wailian999！

[Q76] 按天统计
来源：http://www.xuanzx.com/163reflzfdw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163gfnkcwhe.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163crialvvk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163acaluahh.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163itvgzjsz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163uzugkoqg.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163gekbrbpn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163szbeikab.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163avfielwn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163iyhbtsso.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jbwotaub.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163dusizjlj.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ztiofjpp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163emyekpnk.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163tjmxobhx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lhpywclf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163yhhezcmq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163srhkmeot.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163mdkglrrj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163mxviwioy.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163sscquoty.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163dvzpekvi.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ukdwhzfz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vtdyywhm.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163yikdamqx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wzlzjdyp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ykalzlmv.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163zphltpxe.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ltjmzevy.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lywzzpff.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163bsptxydc.html

================================================================================
来源：http://www.xuanzx.com/163wfcevtzk.html

R. Bash 专题
来源：http://www.aibaodan.cn/163zxoqccdo.html

================================================================================
来源：http://www.xuanzx.com/163etdrdcuc.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163zozplnyf.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163cgrslzdi.html

set -euo pipefail
来源：http://www.sxryk.cn/163zextxdqf.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ufdsacdk.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163drabppkq.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ztbfxeor.html

readonly PI=3.14
来源：http://www.xuanzx.com/163aihjfcvu.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163eictmkfm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163kcplqxih.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wxxyhupi.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xzzdbrqe.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163dfcatijj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vnvmuggo.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163yxmrmkcg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163fpoqbqdq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163nalsiyus.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163kmwgbmhn.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ekhyxnlh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163drtvzeji.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163kmayrjcu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163labjcypt.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xqoslqtv.html

case "$1" in
来源：http://www.xuanzx.com/163xtxvmtcr.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163fpkaiqzu.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163qdvnvphm.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163wipzcpzm.html

esac
来源：http://www.xuanzx.com/163kayfnwqm.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163fdehxkzb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163jowgbrse.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ymyauqvf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ksjzvmye.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xuwplaff.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163modyaluz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163bxivzgfp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mtuadaqf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163iubwjdjs.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163almveran.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163nyuyoqjd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vcqwknzv.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bncbxrym.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ipkttwat.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xzlxwpdw.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163uuirdbpp.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163gwsrlhcn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163bozhjvnz.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163bovikukm.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lcyxvzxx.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qnjrtdxp.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163vvcffmmy.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163xyezcrfb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163mktyibtr.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163bzbtdnek.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163tmnketms.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163rkkswpsq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163teljdnrf.html

[R26] 命令替换
来源：http://www.sxryk.cn/163sqerlylf.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163invfngti.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163olatiqrm.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163hahzyuil.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rrnerfja.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163vwefogsc.html

[R29] 定义函数
来源：http://www.sxryk.cn/163itrogwyg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163bscfleqg.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163iboyrbux.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163lzumslcw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dkuauygw.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163xxxarqyu.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163nnxbisvh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mdcepwei.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wrzatezs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163dktyyimu.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163royzkzzd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rwkojohr.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pndpdkvn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163uyxvaobw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163nuaeeupm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vhtprjgn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163dmiqnnaj.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163dsdelwet.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bmohfyyd.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ygubclms.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163yqmognnq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163eeyitlvx.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163gyqvosif.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163uktcnssf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163qrnoglbv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163vbxpxulq.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vozacabu.html

wc -l < a.txt
来源：http://www.sxryk.cn/163snlmbmlt.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163fsqfpbjr.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163xyahdoom.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163fqabjtwa.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163uxvbdjwz.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ueotfzhi.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163brhtaare.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163hcfpgrhd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163svrthdnu.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163koolxino.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163abpuwrcp.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163lqaqocae.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163axbmjrst.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vfcptzae.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hypdzdsf.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xnzqlsom.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163xqjkhpuz.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163miftkawt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163osecegxv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163kueiztgo.html

wc -l a.txt
来源：http://www.xuanzx.com/163camvncig.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xbkrjmqa.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ncwlpuon.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163qgorboan.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163owvctehf.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163roelwolo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gzeikuzy.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163yoshrfkt.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163vxqmkuyb.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gbaazifv.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163fblifxbr.html

[R58] 下载文件
来源：http://www.xuanzx.com/163kucqefyl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163joxuejkg.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163bxabctnx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163dccoogqw.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163itwvtezw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163uruwozmg.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ykxpkklu.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163iabqnbtz.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163mctppuyw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zskyzhgp.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163eukwcgnk.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163nawsljwo.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163vutzegqj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163enfyigue.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163fiwvsoel.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163xbufxjki.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hvidhzfh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163stetuzvx.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pmvzrwho.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163aptgskeh.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163gnkbudkb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163mqrheucf.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163nogcdfzx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163bbjxtsez.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tayahutl.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163psbybkwe.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163qpibekkc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163waeddgyw.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163hfnneoql.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ewufvvfa.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zxohupvi.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163inaqthcz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ovxqpxom.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hspfrenr.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163mohtylpk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163kprjnajh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163axucmbng.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163coclrfgm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163hltyrihp.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163rfbvmihf.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lwahapot.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163dclaemkz.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163csrwtznv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163trpgqmli.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163mcmovluq.html

time ./run.sh
来源：http://www.aibaodan.cn/163hodzfrlq.html

================================================================================
来源：http://www.aibaodan.cn/163gudooyej.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163dwwdbvsa.html

================================================================================
来源：http://www.aibaodan.cn/163cfcqfbzp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163psjvpjja.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163suvhhgfn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163tytzlcmh.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jlvtrhzr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163yzzrdpid.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163gboiqrkj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163sriapgey.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xkyvmgmt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163nckfpsxv.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ksqwwhzz.html

strlen(s)
来源：http://www.xuanzx.com/163urdxwmzc.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163tsspcusx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163miwhdqoz.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163nqaiszvq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kadlgmad.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hxpwqxvv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163sbndissr.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cmustkqk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163horpeeye.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163phdnltkp.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163hkraztpv.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jdybfvhg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163lydwanys.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163dsjhauma.html

fclose(f);
来源：http://www.aibaodan.cn/163dseqqghf.html

[S12] C：写文件
来源：http://www.sxryk.cn/163izvlkgyr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163dlibxolv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163lzgiptyb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zgxvetgb.html

[S14] C：枚举
来源：http://www.xuanzx.com/163xzfadpfu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163btnzseoi.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163impxidkg.html

(double) a / b
来源：http://www.xuanzx.com/163qawbekjk.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zjikttgq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163thhfqdwf.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163rprckqrw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163pymjtzxf.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163cqdjvpvc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163oecejgrv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163zvueugrz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sudsvakk.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fsefoqte.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rlxyysym.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163gymmaimp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163scsytzgt.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qiaaihok.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xcuycznl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163mkjskkpe.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163hcrzhkal.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163gzwgfyjk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163clktwlhw.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163mgmnkbzj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163rivgxket.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163trbmfpwi.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163finazlkj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mxgseuca.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163oezrolir.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163elbqhifk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tzvhaoow.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163uanstpzl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vjprjxlv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mqlbuozf.html

#ifndef X_H
来源：http://www.aibaodan.cn/163fnbefxxm.html

#define X_H
来源：http://www.xuanzx.com/163lttnvxeu.html

#endif
来源：http://www.sxryk.cn/163kjvmgztg.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163auzrhawf.html

#include <iostream>
来源：http://www.aibaodan.cn/163hbinrdyl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163kotneuau.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ieweoghw.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163zkgmysep.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163judxbkhl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hnszzxca.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ihunquav.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ucjrcfzo.html

[S35] C++：map
来源：http://www.sxryk.cn/163dcybtduw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yolsgtvk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wcndflip.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ejwqpvfg.html

[S37] C++：set
来源：http://www.sxryk.cn/163udpxmevc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163huxztubp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fhvxwvzs.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163xofjcoyu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163wkbcijpx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pqbpyknf.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163hppdvlmj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zvwfcwlz.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163gumrcwrv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163roxxuiag.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163mrjpzluq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ijqiovux.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163nwptruxb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163jwwpbdcn.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163wvgfiaie.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vhzxvvtv.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163dksobrmo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163evbqtsda.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ykqnregz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ybuhtouk.html


<!-- 参考信息 -->