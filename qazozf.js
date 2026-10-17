外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163gqhgdegw.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163lgwbeaul.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163rkzdwgbd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163yjfgnsyv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163sbpamhmv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163cxonjhcw.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163mkrornes.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163amymqxuc.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163rsumzdsn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163rcisvjci.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dqznhhzw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163krlcuvli.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163aszxbpjb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163csmucctr.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163pbcxqhhd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163pwpoddxl.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163khxnmvdi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163jhtluapl.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163povcljcl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wmeihvtf.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163asajnpzf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163nilpegje.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163haxbxioo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163qqpktwaz.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163msjhisuw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163nfqwpbft.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163yzxhbbyb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163fpxwcvwj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163vcnbrkpq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163jjqyohwm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163gnunabws.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163honjjftb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163yaawcdgi.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163bbzuejoq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163cydtyvou.html

================================================================================
来源：http://www.aibaodan.cn/163dhcxtvmu.html

R. Bash 专题
来源：http://www.xuanzx.com/163dadboftw.html

================================================================================
来源：http://www.aibaodan.cn/163elzwxubo.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163djtxadvb.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jihadocp.html

set -euo pipefail
来源：http://www.aibaodan.cn/163bvlvtnkg.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163imiadmbg.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163egwapbzr.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163iedwqwzq.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163qmaywatp.html

[R04] 位置参数
来源：http://www.sxryk.cn/163emwgbrva.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163tkzfonkk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163cugsduub.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ezeshvul.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jhwlqgqi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ubmqrstp.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ipzxcnjm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ucqoyvwm.html

[R08] 数值比较
来源：http://www.sxryk.cn/163izhtxfjh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163pmtygdrn.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163dbbfjcbf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163macqwrye.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163egrksvgj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163evmeagma.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163wimdphix.html

case "$1" in
来源：http://www.xuanzx.com/163vqsypgqi.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163qxapypws.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163eguizijy.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hemvpwoc.html

esac
来源：http://www.xuanzx.com/163tmhqrxlg.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163uampyalu.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163mygbmenm.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fziozsyq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163yaniyuew.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kcunfbyn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163oggecgkb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ardleqbh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ixnydiar.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163zgrhtjru.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163bmrsgjmr.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163evarezed.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163dbunezhh.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ibpsgkgb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163gtmapzfu.html

[R19] 数组长度
来源：http://www.xuanzx.com/163rkoadrtz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163jfijvcgd.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163awuitsxb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163sjokchjw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wrumtbma.html

echo "${#s}"
来源：http://www.xuanzx.com/163vnlyfbve.html

[R22] 截取子串
来源：http://www.sxryk.cn/163iefwbncv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ljskzycl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163rbonyjlz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163trvfvgbd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ohvsfcxw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163wffokufp.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163cfhnogje.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163tuhjccje.html

[R26] 命令替换
来源：http://www.sxryk.cn/163cwcskcnb.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163fseaactk.html

[R27] 算术展开
来源：http://www.sxryk.cn/163hdbihome.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163uihytmoc.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163uarrcpvh.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163lytqoipk.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ybljiohv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163pvhvhfqy.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wtznjitd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hdlogzsa.html

[R31] 局部变量
来源：http://www.xuanzx.com/163uecoyobe.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mswbcapb.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163janurare.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ngolzkuh.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163omvulwgt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163okfvcrly.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163gpkaekvx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hzxrypgj.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163vugabktv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163xjxegzlb.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163uupaogsy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163fqrvotyz.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163vohojafr.html

files=$(ls -1)
来源：http://www.sxryk.cn/163aovgyxfg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ixywzyxp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163bctiwcwe.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163sdhkoepk.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163idgulqbt.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163zdosprxd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163emgkpyqi.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ilwymjsk.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163pbqhwpae.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163itedixoc.html

wc -l < a.txt
来源：http://www.sxryk.cn/163tjetmsxr.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vrhghmku.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163mqzeqzeb.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163tnjqldip.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163flqlqgmv.html

[R45] 批量删除
来源：http://www.xuanzx.com/163jtcipwyy.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mjesgdsk.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fiqvvjnm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rcdffqdj.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163cgmcsfya.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163biqfnbut.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163sphrawin.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rlfphntf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ephldojd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ikjfgrvi.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163bnpzcuji.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163qfczvlar.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163rithgrlw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163owlvmcuz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163daroxlqf.html

wc -l a.txt
来源：http://www.sxryk.cn/163cqucllmv.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163iopfuski.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163lxuspabk.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163levlracz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163xirxpuol.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vouaypvs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163fyavgbdh.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lcozmbnv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163rerjrkwp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163sfgdezon.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163lcpjeuii.html

[R58] 下载文件
来源：http://www.sxryk.cn/163iousfnzy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ribcsjtj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yooctcww.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163riotcych.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163htngwcad.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fjxvudtd.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163apugbhao.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163iltveudq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163fkrixxls.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cnotsswj.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ebklpqsi.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163iizvtxpl.html

[R64] 结束进程
来源：http://www.xuanzx.com/163pmcbotag.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163teeqtkjh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163epkgowwi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ujmilmyr.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hkcvpjxl.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lstunwkp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ethrowvk.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163iwrwaviq.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163cymfcjpd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163sxmuhsua.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kdmzrltj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jiefftdn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ityoufrl.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163canglnza.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163knetpvkv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163swioqwgc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163myapevza.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ssdmagnm.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163csxnnjjc.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163elzdnmox.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163pyaoozvn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xxdnymze.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gojjgovh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163paqnnpme.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163avemspta.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ygzixoer.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163iqqfbllr.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gqqvrieb.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163fhrqwzay.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163pysviypb.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163vgoefwmq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163uofpbxoq.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ecqfzbsa.html

time ./run.sh
来源：http://www.sxryk.cn/163kwcxdamn.html

================================================================================
来源：http://www.sxryk.cn/163cckpbjgc.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163leqmaryv.html

================================================================================
来源：http://www.aibaodan.cn/163gfebxcno.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163emhblria.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163qcmnkzoz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163nthpjkkq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hfloffht.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163yppleioq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163nbnvbheq.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xqvpfbof.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163phmbemot.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163cztclrcc.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163cfsphlzo.html

strlen(s)
来源：http://www.sxryk.cn/163vqcczrul.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dtrpibpp.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163sotdzjnm.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fegiqllx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fwghmneb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163qmmlqzky.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163rqcautub.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163nsfguttx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163xdatxlva.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pfqwjzre.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163mkqwqwih.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163bdzeuyls.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163yvoileir.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163apwappxm.html

fclose(f);
来源：http://www.xuanzx.com/163liaolyip.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163xykcprmq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163lckodkgq.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vyzbjwbc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163zeuichau.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163rscglpzd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163althgegf.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ydxsshcp.html

(double) a / b
来源：http://www.xuanzx.com/163ypzrflmp.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163zwolbvgs.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163pugfbadc.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163eqtmbrqq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163bfccnlmp.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ojrpsqrc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163muyhnrie.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163umzgppkh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rxfjwcpd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163vkgttolr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xuayxmba.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wrdnjrpk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163khyvzvzm.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ilrfsxqu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163dvtabjjf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163agqrmqsw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163vzfbiqrb.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163erpbumhr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163wjjkusoq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163xbgagfyu.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163rajuqbhm.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163eamaddai.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163tdlcgxoz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163zbjfzvyy.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ktcpupea.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163wamjspba.html

static int counter = 0;
来源：http://www.xuanzx.com/163gqwdpinu.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163qzurmyzc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163bdqkmhnr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fithpdpn.html

#ifndef X_H
来源：http://www.sxryk.cn/163qtewqipg.html

#define X_H
来源：http://www.sxryk.cn/163czteteqz.html

#endif
来源：http://www.xuanzx.com/163wbirabkf.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163rvwtjado.html

#include <iostream>
来源：http://www.xuanzx.com/163utwxgmga.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zvqjzvkw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gnevwfsg.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163uglbktqf.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163lamyunhe.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163mgsmaogl.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163jhgcprif.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163jxzoutmm.html

[S35] C++：map
来源：http://www.sxryk.cn/163vtsvxeqv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oyylvwqh.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ddjgtecx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rxjmuggy.html

[S37] C++：set
来源：http://www.xuanzx.com/163wzunbqgk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163dqhwnilk.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pjemkdgn.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163eeoirfox.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163smyhilpe.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163iqftmymh.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163vhrqhjvr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163jdiwxiut.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163kkliixab.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163jnmsttdk.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163feldujem.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163phdpalal.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163cpmkypdq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jwcswzxs.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163jnkvofts.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ivegdvtg.html


<!-- 参考信息 -->