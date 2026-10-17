外链999!wailian999！

[Q76] 按天统计
来源：http://www.xuanzx.com/163eoxvmsfs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163mbefqjyl.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163bvibcvns.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vttrpdom.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163tonfrvzv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163plicggix.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ptstjtny.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163yfksnkua.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163pqiemvby.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163qsewsitt.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163glndxgse.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163nrtktimx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163tcncebjw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163bpatggff.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163yhyzzbwo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163czqbcnlf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xyluluhc.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163srdjcopo.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163saoadnch.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163vefolihl.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ftbucgne.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163sginnkac.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163zdsslqwn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163bdczgpem.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qoptynla.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ldralbgv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vkcmmiiq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mbmtuxve.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ehwhezcc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163odbkbzuu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163rgxcqray.html

================================================================================
来源：http://www.sxryk.cn/163acxbahts.html

R. Bash 专题
来源：http://www.sxryk.cn/163rsfpcnvs.html

================================================================================
来源：http://www.sxryk.cn/163wvppoufq.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163vcptlalw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ubcbozym.html

set -euo pipefail
来源：http://www.aibaodan.cn/163wkrpqtgg.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sqapfkov.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163zrwqohay.html

[R03] 只读变量
来源：http://www.xuanzx.com/163havakpsz.html

readonly PI=3.14
来源：http://www.sxryk.cn/163vcbpvzor.html

[R04] 位置参数
来源：http://www.sxryk.cn/163iacuuose.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163zmmpmzhu.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163wtbgrtom.html

name="${1:-default}"
来源：http://www.sxryk.cn/163otvxyqba.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jbsubdkl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163meqcoess.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163poxtriym.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163glyxjwji.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qlehsutk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163isjegazy.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tqwvbjvo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163cujmfgit.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nxybqgcl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163cotxnqwt.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163piutfkkh.html

case "$1" in
来源：http://www.aibaodan.cn/163kgugkivx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163kibbulzp.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163hoyfthlh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163nzaexwzc.html

esac
来源：http://www.aibaodan.cn/163ctwpdhtg.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163stanhjtr.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tozizunm.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ciencsgh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163yihszpws.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163stpxnbip.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163hhvdguru.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uwluzndc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163reqlfteq.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163yvnsaaqe.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zohukspp.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163hfwfchxf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wsmxfsue.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163eowdzzbb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ifsvvitv.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ggnvqgzc.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163stbdvxyj.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163cuwifflf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163zpfqbipf.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163zgwczhed.html

echo "${#s}"
来源：http://www.sxryk.cn/163whlhpvey.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qgyeccov.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163tqgqoxik.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163lhuyoqza.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163olowrtqb.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163wxcwrylk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163pnwkxfse.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163kestryuv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163wekojnux.html

[R26] 命令替换
来源：http://www.sxryk.cn/163rtgeehzw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163lzdeqxkn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163lcnjzjnn.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163prtqxsvy.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163kbhagezu.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163lbflojiw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163udkidzcl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163khhgyscd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wnhfxlgf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hjxiwmai.html

[R31] 局部变量
来源：http://www.xuanzx.com/163kfyolann.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163rytcaood.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163jtcvkhds.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163oyqqgtjh.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163plmqgxof.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163knipkqig.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163qalkxqdm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163maklnxqq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pxksczln.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ueduezwa.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163onrgmjuz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163hfbxisju.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163sogkwist.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xpunijmu.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hthnfirs.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163sceyoojp.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163czqvsmyz.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163sqnewqrm.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jpsfzezx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ssiahlqn.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fjseqljf.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163gahajred.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ukhzbevy.html

wc -l < a.txt
来源：http://www.sxryk.cn/163uwxcjhtq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163bdchrbxj.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163yzfevozv.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163nfkiscqa.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163uaycxyvc.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ffliqlom.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163yscrqtbv.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163dlxynhxz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163yxavfcyf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163pdzrwckr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163pcsanmni.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fbcjkddn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163owngnihb.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163cvawzoox.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dxyehjjm.html

[R50] awk 求和
来源：http://www.xuanzx.com/163zprfiiez.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hhmxosey.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163eyyzagtf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163niwxldju.html

[R52] 统计行数
来源：http://www.sxryk.cn/163kptzswmx.html

wc -l a.txt
来源：http://www.sxryk.cn/163iddabktp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163queexolo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163gadapbox.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163bhyxbknb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163wvjojtbc.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163dldozyvz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ypaepwel.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rrhutxdd.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ppuqfmmf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163xjfdjvqm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163fyxfvlyz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fliqcfvv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163vlufttwg.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163nvuvnelb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163moyyciax.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163rblkufdg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dkpkspkj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hmwvvyhg.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163hffhzhpq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163efkbadnf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ifgfqfke.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163zwnuqzeo.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163floqnyda.html

[R64] 结束进程
来源：http://www.sxryk.cn/163qozenges.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163fxskrgis.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163fmhppjxl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qolpldzc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163btgbucmd.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163acwuzxdp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163whcycboj.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163urweknyl.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163aypavwtr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163uoqjebso.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163qfhxxyxm.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163bbikfiiv.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163wppraait.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xlkzcnhs.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rrurjwnq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163mbybiyjw.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163pkhvcwzv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163pemwyvli.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dwugfrvt.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fhfpatuk.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163tinibska.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163tkwudzbd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163eotzupzj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163smdgepvy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ewisgsgj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163seixwzwq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jzvpvwot.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163pgakpvun.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163tmsjfnlr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zfxbwhkm.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163hlkgnbsg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163dvdqmccg.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163spcnzlot.html

time ./run.sh
来源：http://www.aibaodan.cn/163keqshfuj.html

================================================================================
来源：http://www.sxryk.cn/163lbrnkmwg.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163yraecbmk.html

================================================================================
来源：http://www.aibaodan.cn/163fklctztc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163escgsehg.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163thbwdjpd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163owgzudry.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163fupomwxo.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163npcjkjhu.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hrxzmwej.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163yhmykkoa.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163rkcstprv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ewuoiybd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kpjiqleh.html

strlen(s)
来源：http://www.sxryk.cn/163picrxvnp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163pfhebmcb.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ixoeknpv.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163imughngk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163uymdnhux.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163pdgbdnpx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163blfjohrs.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163jpzhasiv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ahcyttwc.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vipcezik.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zblbtvrw.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163bkuhgaru.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163eoqfkrdu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jybgxuff.html

fclose(f);
来源：http://www.sxryk.cn/163umafpxzv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163vbwjlwcj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163faqhslpa.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ivgijecj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bgbhlhmk.html

[S14] C：枚举
来源：http://www.xuanzx.com/163stqbbbdh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163nykkhdoc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163rbddcpsa.html

(double) a / b
来源：http://www.sxryk.cn/163ahthxklc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163jiilxxjw.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163eafddtnj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163bjenpoes.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163waavmjhn.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163upkfmulr.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163yywvnaiv.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ynghknpf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163gvwktgfp.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zqoyjgvh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cvhhfjsx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163cccfnpbw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dxrxrovw.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163fkpskdvv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163krigrpke.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zhzeevtt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163rpiseuld.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xfdlymld.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yerzocun.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163cicqgpnq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hybdnmrs.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ungtdhss.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163aoqdfwaq.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163pkewrrte.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163feydjqty.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163gbruacid.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ngijnjhl.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jauwpbtd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163apmjbhfl.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163yghudmqr.html

#ifndef X_H
来源：http://www.sxryk.cn/163pcdzbrmu.html

#define X_H
来源：http://www.xuanzx.com/163yzeqcbfu.html

#endif
来源：http://www.sxryk.cn/163dmcnkasa.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163tcoetgnz.html

#include <iostream>
来源：http://www.xuanzx.com/163aecqnnnt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163aeuudayp.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nvbxufbo.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163sjyfuxzk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163yqeyimnk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163nhvpvsyf.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163vqzjngqy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qqgnxnbp.html

[S35] C++：map
来源：http://www.sxryk.cn/163btqqavdt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fhexcepr.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163uhdvzhzy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uofankny.html

[S37] C++：set
来源：http://www.aibaodan.cn/163rnvicjiu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163pzkehqxv.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163jdtlzinj.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163pknlizyc.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163spljfqpf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163gdiczqoi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gcbbzkxg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gghxuuwl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163vpmafinb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163shanmnhu.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163cvnsxbcg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163byhshxcf.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gzubnosy.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163swhhuvmo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163gpmssrkt.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ofwxgnvv.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qhjaxqpk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163qhywcsbi.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163bnndwhpu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163cmctmhga.html


<!-- 参考信息 -->