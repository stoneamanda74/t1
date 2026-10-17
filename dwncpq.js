外链999!wailian999！

[Q76] 按天统计
来源：http://www.sxryk.cn/163myydjkcu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163efqrollx.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163lcxllhms.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163eesexkho.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163cfyrohag.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163comulsmu.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163hvdtomql.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163izgmpdjc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vgatiofn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163wyzxrfik.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163umzzmatf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163srpspdxn.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163jrdvtign.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ofqivyad.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163gmgwrrkf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163iqaxuhtb.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163cgrgibjg.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163zqxcwgeo.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hnsrmsio.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163apkakddj.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163uxwsodog.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163gvdvcrse.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163haidcfqk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gkcmrbgc.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163rurmebza.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163nluwsxsa.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vkniacjt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xmrweydd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163fiseiptn.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163gmutxdyz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163brrxanaw.html

================================================================================
来源：http://www.sxryk.cn/163vfotrffu.html

R. Bash 专题
来源：http://www.sxryk.cn/163fdbsmdgq.html

================================================================================
来源：http://www.sxryk.cn/163nipwcudf.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ywkltlhl.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zgpyhuvw.html

set -euo pipefail
来源：http://www.sxryk.cn/163olecqdtj.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163vohpqjjg.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163cmizdeei.html

[R03] 只读变量
来源：http://www.xuanzx.com/163uhfsufmp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163riumxzjz.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zcidftzc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163lrumejth.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163fnrqgmpc.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tbhbzgor.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163fchgpqgk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163czkxqlex.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163nysavpcg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163euezmpxr.html

[R08] 数值比较
来源：http://www.xuanzx.com/163iewkhpbv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163trwtohwb.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bjhckzbe.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mqsdjvfc.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163uhembjxs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163qhdtgfye.html

[R11] case 多分支
来源：http://www.sxryk.cn/163cslotrgb.html

case "$1" in
来源：http://www.xuanzx.com/163hdkqshqf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163tzioiuop.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wrecdhfe.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163cxarwtsq.html

esac
来源：http://www.sxryk.cn/163zupgtyre.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163uvfspmcc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163bijewazk.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ktnqrdkp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163dyavwajc.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163afkaspwn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163hbfhqdwt.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ghfjmoxh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163otvfowzs.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rmjsuspl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wlhpnvyz.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163tnukidcr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163uqqltjew.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ffhtnbga.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xvpcflpi.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ccdoxvph.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163molmibbz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163uzxwrqlg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163dwokbrks.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163nlfakcxc.html

echo "${#s}"
来源：http://www.xuanzx.com/163hxuztsdn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163hrbmvaft.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163upbbuddq.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163yrpudrsi.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ncprjhyh.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rlmvgzjo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163jiadscjp.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163yebjrcml.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163pjodkyvl.html

[R26] 命令替换
来源：http://www.sxryk.cn/163eevnzdpn.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163jgisehxs.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163lozdqpdw.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ndocefft.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163yvvojrys.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163drczztrm.html

[R29] 定义函数
来源：http://www.sxryk.cn/163rsvofbld.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163fsgwfwlg.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qcfjvzvp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163wbsgyylu.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163sdapxwgj.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163swhumizx.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163gekmxpbe.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163tbadriqx.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lllufuyg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163bmaopswl.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vhniiiym.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163eswdzyof.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163evvwimvs.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163kacswtfk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163nbarjgqx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163aathvsjs.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163lvdtuiop.html

files=$(ls -1)
来源：http://www.xuanzx.com/163zbwivtwh.html

[R38] 管道串联
来源：http://www.sxryk.cn/163pnqcgync.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mvueotgp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163bptsidfg.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ickvbfwf.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wrcuffsk.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163zdswlcfu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163giesnyir.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163bttzdgjn.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163gnbwgbts.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ygzbjvpi.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163lkfkawem.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163htycqhhf.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163rbcikhws.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163hzlafpsw.html

[R45] 批量删除
来源：http://www.xuanzx.com/163tagyyldi.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163azbqngex.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163xceplxcs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163gzaxinzr.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163vxsnchhq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163rbsazsmu.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163tcpxuwmv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163zdufuhhn.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163velthjfl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163gbokmttc.html

[R50] awk 求和
来源：http://www.sxryk.cn/163szkagbpi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ldfolipg.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163elcnptyd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163qnwysvgk.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ansnyknh.html

wc -l a.txt
来源：http://www.xuanzx.com/163sensoxwr.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ejpuqyez.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ehorvkwy.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163cailcrgs.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jpoftodf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qmjqnldo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163yepaxbno.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163vrwjugck.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163edpbqtoe.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163yajndzvw.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163vbkzktyi.html

[R58] 下载文件
来源：http://www.xuanzx.com/163jgclbeuf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hauuvmrs.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yjwyoldy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163pednxjgr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163hlgvanzs.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163gihirkud.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163wxhlfsaj.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163cziiiisk.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163owkimqeq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163kwguvnue.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163kamlbjad.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ecxztxck.html

[R64] 结束进程
来源：http://www.sxryk.cn/163epxndoxu.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163hynugmtp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ldkwlorq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163yhvfiirg.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163icbxgous.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zmtgalwl.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163obplkziz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163fvdnobtg.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163fxdqxvpa.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pimmiqxs.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163qsgpbhbz.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ivwxzwco.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163rvmoquab.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qyepeuvf.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fdwiboux.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163guddxwoy.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163lrvfapve.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163nwttmlid.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163wggtyuqo.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163oaezqhwb.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163jbvzrhlz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163bhosuvzr.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163wbctksek.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ngrgybfn.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163cfnxrmni.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163yujyuanr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163mpwwflog.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163tsengtjj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163syfqustd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163tukevjqn.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163zwbfruwo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163bcoloshq.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163oaaqhzoe.html

time ./run.sh
来源：http://www.aibaodan.cn/163oujtiuid.html

================================================================================
来源：http://www.xuanzx.com/163qowiwlit.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163fejkksql.html

================================================================================
来源：http://www.sxryk.cn/163wpawjvxw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kskpqwlk.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163uiufcjiy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163demyhjcy.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ssyxalvy.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lsrowtzq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163xetvcmkr.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163fwuubiwt.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163rhrjfcpm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163uozghgni.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163safovouh.html

strlen(s)
来源：http://www.sxryk.cn/163udlvmqku.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qbamsmtk.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163gldbxonu.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163tamzpcmn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163njibmjvk.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163eucjbntu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ooawrfzw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163nuyueewb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163awtulmfm.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nppkyceb.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xnfkqsea.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163lgkardif.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fzxycdve.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163plvkqvmx.html

fclose(f);
来源：http://www.xuanzx.com/163rklpiomn.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163eyyjucrt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163aeasftxb.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163htgypwyh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163grqybmcx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ozityadw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163bzipkitc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xasvfyuq.html

(double) a / b
来源：http://www.sxryk.cn/163cezhnnab.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163gpugkliz.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xbqqnyjj.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wvzjscrg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163dvqitzjr.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163iujmhdct.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163xgjmgmis.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163britmylk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bawzyxhu.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zrsfparc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lchdenyu.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hmetolvy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163gqomkjbp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qwbkclve.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163blmjjurd.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ymqsixvk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163geanepfa.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163unktgiox.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163lhettezc.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163gacosaso.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fpgcogdu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163kipuljlb.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xbmpzqey.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ziazfaqf.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dhwykwzy.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zfcpzppc.html

static int counter = 0;
来源：http://www.aibaodan.cn/163dggjtuiy.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163sbzqsokf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163meupjpsa.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ehrnqlpg.html

#ifndef X_H
来源：http://www.sxryk.cn/163hvydfhga.html

#define X_H
来源：http://www.xuanzx.com/163oipoekxr.html

#endif
来源：http://www.aibaodan.cn/163aldeeada.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163guqbtesm.html

#include <iostream>
来源：http://www.sxryk.cn/163sizuzzha.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163avmjqjtj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fcvkgpaw.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jegjpgem.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163zloeibic.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ckuscqdg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163beonudac.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zdkxdlxx.html

[S35] C++：map
来源：http://www.aibaodan.cn/163posadwhs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wqcxwxqb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163xbdimvrg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163guzgalkk.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hegrdmmy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tdtfhoot.html

[S38] C++：排序
来源：http://www.sxryk.cn/163sdrjiuzj.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163eufagjoe.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163izbbtxuj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ctrqcwbj.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163wbexiwbn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163fkwcpjoj.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ymurecai.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163mafswspz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163swnbyaye.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163rnhncmzc.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163crrfxiec.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163yfufjccu.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163thhksdqs.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163yusayeko.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rgaolrhv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163hjrdefnf.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zcusyuez.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163rpszvhzi.html


<!-- 参考信息 -->