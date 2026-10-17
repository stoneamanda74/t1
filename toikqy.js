外链999!wailian999！

[Q80] 字符串截取
来源：http://www.sxryk.cn/163dazqvkzi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163hoqxjply.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ojmtwaqd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163vyzzogqz.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ajpzjmuu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163zipctfxd.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ownygxdv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163yjkrcgza.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163umydgnvg.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163awbyplqq.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ilrmwusb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ogiljmbk.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163fefdgijv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163srhjjvex.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mzhzngsl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vsnltocc.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163aalqhijs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163fzjooyhh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163uenooeyh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ijwzcgfu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163fayokmfx.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163mdncuteh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163jrlnorxx.html

================================================================================
来源：http://www.xuanzx.com/163kdrhozha.html

R. Bash 专题
来源：http://www.xuanzx.com/163wbnusfmk.html

================================================================================
来源：http://www.sxryk.cn/163ueznhnmu.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163xjtslafw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163hpzzqkio.html

set -euo pipefail
来源：http://www.aibaodan.cn/163jciaytbe.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163tpvywaiw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fucrahld.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163qrdnerzz.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cvewewje.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jcikndml.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163lvteabfw.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163myyuenep.html

name="${1:-default}"
来源：http://www.sxryk.cn/163povdluaq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163yhwsyoel.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ucarfxtr.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163worhsquz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ptjgygyb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163wrizlqlg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163niekmiqj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163nbtbliiy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163sghhlrta.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ecyzpalo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163fjdhdvcv.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cvpuaivr.html

case "$1" in
来源：http://www.aibaodan.cn/163lmlhnfom.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163cwxaiddr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163reefjjcu.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163nkxigmmx.html

esac
来源：http://www.xuanzx.com/163plfylcer.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163cvtgmrap.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163qxabafpv.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163xtsdxjqn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qblmypcb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nuzihifv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163pgwvsoes.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163snahmedc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ekwopkdp.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163naqktlly.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163yyfwpmwz.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sscowmmq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163iekpabtn.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163hswnhcpj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163szyfppww.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gilrlhsd.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163eqisklbs.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163vwlaxzzo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163auhidgzq.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163dadwqubz.html

echo "${#s}"
来源：http://www.xuanzx.com/163mkqegkij.html

[R22] 截取子串
来源：http://www.sxryk.cn/163yqzgsayh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163fimlkqdq.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163yhgmpeyg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163fewnoiex.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163dvsmknmh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163slrbvixn.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163nvcsdpko.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163jaavkggk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ewklbkgq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jdgbuwkr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163fjfeomaa.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163aoyihscq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hwmwzkzo.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163volwlmfk.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163iryclegk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ntsuhoct.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163mgnppifk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163kosdusol.html

[R31] 局部变量
来源：http://www.xuanzx.com/163deoauwpv.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163rlfijvex.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163bjtbfzys.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163famiegnd.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163iitckgfx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ajqsbyin.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163vsxkrnhl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zowndmnn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xpygwwds.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163kgxwbpuw.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163htxnqmrg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zksoqtrs.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163rqawcgpb.html

files=$(ls -1)
来源：http://www.sxryk.cn/163gkurcexa.html

[R38] 管道串联
来源：http://www.sxryk.cn/163nlivlkap.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163wjfnahhz.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163unfrlfvm.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163hfoftcau.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163jnjdtmrf.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163brnfxjmd.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163nxudcmpt.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163rzgomlmr.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163szmmdiag.html

wc -l < a.txt
来源：http://www.xuanzx.com/163enfgjwcg.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163datqheeb.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163tohlenbn.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163jzewaqox.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163inckpjmf.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163qtbpafga.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163peovlams.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mssquhym.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163zqqqqxpg.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163aotspkzk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163meypqdws.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xmvdwfoq.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163bxuynhsh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vtsgtxcr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163btqkgqqa.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163fjsbztda.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163fnxrjwbx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163nkrtgtsb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163dsszzawz.html

[R52] 统计行数
来源：http://www.xuanzx.com/163rffnlcoo.html

wc -l a.txt
来源：http://www.xuanzx.com/163dveacayf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163cbbgyrvw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ijezsclx.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163excgrsha.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163puiniazz.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163oiiojjnj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163cgapwjuz.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163eavztmnp.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lpxgwhus.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163vxbdmtkm.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ofybpoxm.html

[R58] 下载文件
来源：http://www.sxryk.cn/163tgoriscx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163lsxhtrgk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163sopcgkio.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163gztuenxv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163alpbqilv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163rstgkyrm.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163kblzanft.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163likzgxse.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163qzffnhhb.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tmgxenta.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163hdpycfsk.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163soyafsjj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163auryovqk.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163cyagfxvs.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163kugiqcyc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163xiguadco.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163azoecpyl.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163qlhnylnb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163euyjekxp.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163zvgcxrin.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ksyfurqb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xziwizyg.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163swvmfnna.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nayejurj.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bimdrkvm.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qcqujuof.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163eyzggaug.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qevcbbnc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163wqgppoyo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163qbzxsopk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163uuzakrua.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hwydphtk.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bjrhdxuv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163xieycnwy.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163oydrdzxi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163cvzwingy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163vxzbynur.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fwykgnza.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163nxfyjwqu.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163fmmfijty.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163dkbuhqiu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163efqprkts.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163chgxdvha.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163cburdpwm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163vbnxymid.html

time ./run.sh
来源：http://www.aibaodan.cn/163vobwyiuv.html

================================================================================
来源：http://www.sxryk.cn/163riwpicbq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163orlaefol.html

================================================================================
来源：http://www.sxryk.cn/163timqklba.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kxnybixv.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kjtkounr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163nqbasxwu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163rwvonxvt.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163npqnaefq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vgdbyvst.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163lxqxwofe.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163qqgmpclp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jlmtvbfm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ekzmzypl.html

strlen(s)
来源：http://www.xuanzx.com/163uepmrbap.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163vrkqwjhe.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ceigflvl.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163gojhamid.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163yrsthdfy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xufmoopc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rvoukknu.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ozfkynwu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163gqikcotw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163blvbekia.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163gezlefyg.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163lvdkmits.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163yuwygxtl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163srodqlqc.html

fclose(f);
来源：http://www.aibaodan.cn/163spmpuyrs.html

[S12] C：写文件
来源：http://www.sxryk.cn/163qwhkynqx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jngsaovm.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163utjddity.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163sfgpfzfc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ectwxzbz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pkcnhsni.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163dvzablef.html

(double) a / b
来源：http://www.sxryk.cn/163vscwiste.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mxcgnabj.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163wtdyskhw.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163sjkpwmko.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qwiqgnpu.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163nqddypnd.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163nspcntep.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163yhldzsun.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ytwbbqpk.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163imbhwbpm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ylzcnoso.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163urmfyshv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qvrnigca.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nobywifv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163vbotxvpi.html

[S23] C：随机数
来源：http://www.xuanzx.com/163onjhxspt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163hcqczrkk.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163wsttlfbf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ygasqcmm.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163comndabl.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hrumpmrl.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163xnfpoltm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163hfuqylvx.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163cyuwggxw.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163hsztlavd.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163wenfbzyw.html

static int counter = 0;
来源：http://www.xuanzx.com/163jwgifkvp.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163imzwawyr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ifhxvtup.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163fwmgctct.html

#ifndef X_H
来源：http://www.sxryk.cn/163golryqmt.html

#define X_H
来源：http://www.aibaodan.cn/163jghvtije.html

#endif
来源：http://www.aibaodan.cn/163ccfirsyr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163bwvyigdt.html

#include <iostream>
来源：http://www.xuanzx.com/163sidjfnfo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jpxonnka.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163tohttrza.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163qmudlylm.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163zmvegerp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163cncfizlo.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hbbcmggb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dvbnuecw.html

[S35] C++：map
来源：http://www.aibaodan.cn/163dirtqkvo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xkoexasz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ypfzpnch.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jekrgsak.html

[S37] C++：set
来源：http://www.aibaodan.cn/163myeumadd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163wjncjekq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163garrheto.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jvwgpnvo.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163cuxkvzjl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163isclvaml.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ffohrwip.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ndsnscxu.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rzhvnuzx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xayularh.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163pivladnk.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163vqfpqtzp.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163oyzmdtqy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jccwmzux.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163mkxskxfp.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163rdhwkmqh.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163zntqzwxf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163aqlqopsq.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163pcxwhfpw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163pddtoder.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163oeopmkek.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163eaiiesdx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163qyafldom.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163updpcdgu.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163oddoeopy.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163oifzykqq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163dtucnusx.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163dbzzeexa.html


<!-- 参考信息 -->