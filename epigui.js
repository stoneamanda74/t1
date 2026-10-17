外链999!wailian999！

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nyqkywvd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163xtmcaqeg.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163oozucars.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163emnupcir.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ssllhdnw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163sbmgnxyl.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hdazbhxa.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163bxrwibla.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163xuatgvkw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163zaiapdzg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163izgrfkhd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163uaoezbqs.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163hfdptdxa.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163rdccvcgu.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163xrmukgxn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163zeysaxdv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bsffrtbl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163vgjxrkkm.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163scuskpya.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163hsjabiog.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163gihzoavv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163iqziduap.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163wuapqsdj.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163knkmlose.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jykdwjqh.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163oojkuknc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163lrvcxdpq.html

================================================================================
来源：http://www.sxryk.cn/163cupeiifc.html

R. Bash 专题
来源：http://www.aibaodan.cn/163vubrkegr.html

================================================================================
来源：http://www.xuanzx.com/163kxmbovsn.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tvqfwuzz.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ltyccyqh.html

set -euo pipefail
来源：http://www.sxryk.cn/163vpzbotwq.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163yocuzrfd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163wujqzdck.html

[R03] 只读变量
来源：http://www.sxryk.cn/163hdprnlwn.html

readonly PI=3.14
来源：http://www.sxryk.cn/163lrrwgyjk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163hcsygyqj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163tsbxrjmg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163feprteup.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vksagxoz.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163dfxxowmm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ahemwyjm.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wvmplhkt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163lmkdpzby.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163pmmgxvqb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163oraowzmg.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163nypjahyh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163uzivzuqj.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wbdqnbou.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163nxhszqyu.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163lyfgonar.html

case "$1" in
来源：http://www.sxryk.cn/163gcnvwyfy.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bykcdbpf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163xpmctarr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163tjakztbe.html

esac
来源：http://www.sxryk.cn/163otqdewql.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163fxrvnrkp.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163vayizhqj.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163kzoswgpy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163kvhysivo.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163hkbsvapr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163wcaapcsz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rrjotcaw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hfqlrzsz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xgfuaqmc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163yzltwtyn.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163dcobejye.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163tvgkmecu.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bwqligto.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163xxrepztn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163farkuiws.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163qewatwem.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163tpheeobc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163snyrokua.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163utsrhing.html

echo "${#s}"
来源：http://www.xuanzx.com/163mergfqdo.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ddieggex.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163bwsymdtn.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163qprsihwt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xirqfwdp.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163rbsojohm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mxrmcjug.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163lpurfyxh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163fyefelmz.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163bcwyexfg.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163qcwbryov.html

[R27] 算术展开
来源：http://www.sxryk.cn/163buwcxrkw.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163wgpdkydu.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163hwfqtlwg.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163opwrrmzq.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lttucgml.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163cudswfug.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163adovwtbg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ubmymdwc.html

[R31] 局部变量
来源：http://www.sxryk.cn/163nbmazfue.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163phblvzrm.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wpogzais.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163oxolgyyp.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lvbtqprx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163njzqkanb.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163imyjiuvw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rmwypbhz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163bzrsphya.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163cuvystgn.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163chjghofg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163mnqoattr.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163xanxwmab.html

files=$(ls -1)
来源：http://www.xuanzx.com/163oliivntd.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163btwdtblm.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ajmnkvzp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lpigguvz.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163cujuawov.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163wappkufr.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163rhnrpiqv.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163slxaluvn.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163cbcwjpmg.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ywicexxl.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163rsvywxtr.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ycngsajw.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163rzazdqby.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163jhdgnvsp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163nscjpgfv.html

[R45] 批量删除
来源：http://www.xuanzx.com/163donhlkdy.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163pigydlpq.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163cacmwdnl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163hdvavkus.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163zegsbjys.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163coqqjbpn.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hqedfret.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163qzuiishb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163jacsbiul.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163bawnpjyd.html

[R50] awk 求和
来源：http://www.sxryk.cn/163utrezyzw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163pivlareb.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163jplrkjuq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163aduvdmpj.html

[R52] 统计行数
来源：http://www.xuanzx.com/163fmfbiomy.html

wc -l a.txt
来源：http://www.sxryk.cn/163xasxmcdq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jksfoddh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163bdpykpod.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163vgpxpizd.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163jciomjqs.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163pcgdbkiy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163qaptuxnv.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ejsxoivl.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163hxghvfsj.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qhloifwf.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163frrxwtle.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ijvjcsji.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163rihtsojv.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163xanjswcs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ejphntlf.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163sjqpupss.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163utmwlhtt.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163cgcecdan.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163bcnlmnpf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163yuqzjrek.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163npatisjn.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ceflyzzy.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163gcamwxtn.html

[R64] 结束进程
来源：http://www.sxryk.cn/163jkafxnnh.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ealywjfl.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xignhazi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163bnvmpbmg.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wjcoqoth.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163mslkhnck.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163mljyzjys.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163xozbiraz.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163opegskij.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ydsqkiyl.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163xwlgrnky.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ecpyntai.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jnsnqqhe.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163jssjwavn.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163viaydqsz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163pdkebhga.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163xcybdlco.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163whziguun.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xpiggjli.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lqobknde.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163maxgfmcc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163gdjosgog.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163mwaaoakk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163dchwmjdt.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163pxozeobc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qodovhoa.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163kykppzuu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ofkydlrx.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xpsizqtr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163yocveudd.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163feqrpvms.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pizlfvnp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jwepfizt.html

time ./run.sh
来源：http://www.xuanzx.com/163fcuofxzz.html

================================================================================
来源：http://www.aibaodan.cn/163wpatoyjy.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163awigghpw.html

================================================================================
来源：http://www.sxryk.cn/163xwoyjybk.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jdvjqzdm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163mxcffkli.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163bmsboizu.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163xbgyfokd.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163foypkihe.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163yetslktm.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163uustbdgr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163jqazyxrs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bgkigfly.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ufgmwmqd.html

strlen(s)
来源：http://www.aibaodan.cn/163eojiuuss.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163sbrprwmy.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163lvtggmmh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163tmygilql.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dipxbxdt.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ylyfsjvb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163uxiobxje.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163gbvrpcyn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163msrcdbyw.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ipbkaite.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163kwxmspjl.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163fjlcnaio.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163wyhquxij.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dzfaiaiu.html

fclose(f);
来源：http://www.sxryk.cn/163zuhwkblv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163maqvnska.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163grvadcne.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163uttvmvim.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bxqkntda.html

[S14] C：枚举
来源：http://www.xuanzx.com/163xbxubvbl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163rohkgvdr.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163mjonzrkc.html

(double) a / b
来源：http://www.xuanzx.com/163jibjkxyj.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163hhfgemqm.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ytbeovpy.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163tfxbwetc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163yfhemvun.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163wbzgugce.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bviljagx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163sbrepgbf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jeoywkpp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zvntxwqz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sooajofm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ebaupykr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hpfpvshn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163rrhpcooo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163gvlmaizd.html

[S23] C：随机数
来源：http://www.xuanzx.com/163dlgpipxf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163huczfhky.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163zeockzym.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163aywudvbe.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ywvtzlbn.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163nxnckzoq.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163bwbsryjp.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163pzixnzta.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163jhdatoya.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163wtsrjjco.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rtavgjev.html

static int counter = 0;
来源：http://www.aibaodan.cn/163zkxoucpr.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163kogxwpbg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163wetukuiz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jxbkaidl.html

#ifndef X_H
来源：http://www.aibaodan.cn/163tyivqzct.html

#define X_H
来源：http://www.sxryk.cn/163mevqxxzb.html

#endif
来源：http://www.sxryk.cn/163rznxfrhl.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ydvmxfnx.html

#include <iostream>
来源：http://www.sxryk.cn/163mtumdcer.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gsjwiczu.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163rwuklovl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163rxksnlte.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ldiqfqmn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163jeiiuaar.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163yqglwcvn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ydowrfyf.html

[S35] C++：map
来源：http://www.xuanzx.com/163iouxkvgw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163txzuddvi.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163yxsstupx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nktdbhna.html

[S37] C++：set
来源：http://www.sxryk.cn/163kshxyvce.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163nqpvyfpv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163woeebezv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163eiakuiyy.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163kjzkfygk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163moyttcpd.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ppkglhnc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163sgiwhpuh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wbagurwq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163lzukmkve.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163aqjwqlvo.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163usazaluf.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ernmksyh.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163csbqakdo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ctyphjhy.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163nvfncdzg.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163uaqjwmza.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wfscxcby.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zfrcxhet.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163zbszvsoe.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163lswajcax.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163rkdpcyei.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163sqkmzqtg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163wsyujnbi.html


<!-- 参考信息 -->