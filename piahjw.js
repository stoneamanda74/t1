外链999!wailian999！

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163cnsuboks.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163gonnkmsp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163nupknjqn.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dfgxpoyz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163thjqznqv.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163cyjnzlqt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ojgcfmua.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163fducmfso.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163lekhqobr.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163hfxtsybz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163zucqrhod.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163nladjzkj.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163gxgfweol.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163knyrhiev.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163wlcqypbe.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vedasotj.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ezjaldsk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163rcdlnarb.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163mqajwvxt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ahlmftzw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163eoabjrwv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163fiztrzge.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163lxjdtbcy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ozneucof.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163vnwxmkkj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163bltfedwp.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163qqlinjgi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ufbldaka.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163mmkqogrf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mhtczbru.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163lhefnpga.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163vvonripo.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163nbpumjni.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163mkhlkwjv.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163qlzmnsrc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163phumvgjt.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163yulqvlpc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ygzjclij.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cxqxirnv.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fneptikg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163mpaqsdjr.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163orrylrqk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163jecewkmv.html

================================================================================
来源：http://www.xuanzx.com/163zwcwokxh.html

R. Bash 专题
来源：http://www.aibaodan.cn/163nrpcckey.html

================================================================================
来源：http://www.xuanzx.com/163loskmjwr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163iqxesgog.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tmgsreqq.html

set -euo pipefail
来源：http://www.sxryk.cn/163jjjhwmbb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163hwxxukjf.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163unrpfjsy.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qjuytgyt.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gbngdvmw.html

[R04] 位置参数
来源：http://www.xuanzx.com/163vouiqrqo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163pmzvskoj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163pcuopqkq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ofifqicz.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163pqmxpdum.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ucrnyviq.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163hgnrkhwd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163vmbufhvf.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qyvwylin.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163idmtrnta.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ibtltmjw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163lxpiryzy.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163nsuhebwy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163yfykqiiq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163wbucmplj.html

case "$1" in
来源：http://www.xuanzx.com/163wvdkjsip.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163daehsomk.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ewlaopnn.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ypznnbmb.html

esac
来源：http://www.aibaodan.cn/163ntzcafjo.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163dtajfytx.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vzabjcis.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163tprxkmzq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163voyaqgwa.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163gnqexoaj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163bjapcczo.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163vpvwdrts.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163novjzafa.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163adujmrbg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163flqftrbh.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163rtfszffz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163qwwadcdl.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ciarunwl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163zprudeef.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163jueuuulz.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163pmkjough.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163wukghjkg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163mxgxafnk.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163tjiubnro.html

echo "${#s}"
来源：http://www.aibaodan.cn/163towjbbve.html

[R22] 截取子串
来源：http://www.sxryk.cn/163lkesdynd.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163nlxglrjx.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gqvwezdw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163xzrmfayk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163idrftlux.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163bnoaaazt.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163thzhikiq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qiqxgpmo.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ifhricwj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gondxqew.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jaxrcmka.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163yfvqrvha.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163wrmmddfz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163fkqyzaus.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163tyzczyvb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163nokbelsv.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163cbwliqht.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163cipofnha.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163smkdqblu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163oegolakm.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163xzztmmmv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xcwvoece.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163hdmefwwc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hbowfdzf.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xmbfjupt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163urzagnyp.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163kmgzyitu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jyukbwzs.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163gwmzaykb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163hfbzcqit.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163aijoiigo.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wljmgrua.html

[R38] 管道串联
来源：http://www.xuanzx.com/163tlzfxdwc.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ohftycfu.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ckglsrqe.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163hyjgoodi.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163urdjufnb.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163kpwuocyc.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163itqlgezx.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163jnvsdogn.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163uomyotoh.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163nnitvups.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163rmegpuwm.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163mrbkqbzr.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163needeiiy.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ghwgwxau.html

[R45] 批量删除
来源：http://www.xuanzx.com/163uzfvoqhr.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163irhgloav.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wextduyd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163zofbnujy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163hmxjeeeh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163muyhlgjs.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ltuupmip.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163mcfbxogy.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163hnygygmj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163insjxhxk.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rfynabyr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163uvpwtntq.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hesiktaq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cyqqdkfx.html

[R52] 统计行数
来源：http://www.xuanzx.com/163jzbbcudd.html

wc -l a.txt
来源：http://www.aibaodan.cn/163hkmlujhf.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jovryetv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163iacdokvj.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ifpsivvl.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163qaujuead.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163hndwcokx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163xdxzfxap.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163tyoswidd.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163wdiqlmvu.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163dqlnpigp.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163hpnfvwha.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qrnhromc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163aindkkqp.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ylehcimw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163nhvjitpu.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163uyagjmpq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163mzvafeep.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163kymgowtl.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cwpsgocn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163eptygymz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163krmhtbrh.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ojoktoko.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163uiqflkqy.html

[R64] 结束进程
来源：http://www.sxryk.cn/163sutcyrny.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dcxkfjqv.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163yvbkkhfw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163druewerw.html

[R66] 定时任务
来源：http://www.sxryk.cn/163nkfzrqyg.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163jjkvaqvx.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xeejgusn.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163pynpsexe.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163rbewftpq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ksyvobpo.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163dmxzntim.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163wgmlvlpo.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163aqohbzlh.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163kymmpuky.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ffitjell.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163lvusbwuv.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163qxzheoet.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163cmzyotga.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163aitmwrfr.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163yjcqnkpv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163itrfvibn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163dofntiwm.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163tsplqzum.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ktlgkdak.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163imicfzra.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163adulvtmu.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mhdhgmyz.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hqpeyfjj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qsasnqyi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163pwzudmdl.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163mhrsvbnf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163yxaeqjaq.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hbpvdnbz.html

time ./run.sh
来源：http://www.aibaodan.cn/163hjfedypp.html

================================================================================
来源：http://www.sxryk.cn/163vozrwsvb.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163sktfpdnn.html

================================================================================
来源：http://www.xuanzx.com/163dnipgdge.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163rjkkotxx.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zgcwjkvi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ctlmgqou.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xjsaevux.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ajhlzdsz.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163setergzt.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163rmmukham.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163slknqqpr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dyhjnflf.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yzzylyyl.html

strlen(s)
来源：http://www.sxryk.cn/163rdjczzpv.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mpbretpq.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163sgucqnud.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163rcwuwhbe.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ebewpajm.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163acssaavw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163lduhygxb.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163nwaigais.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163nsvdwlrn.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163lvmwxcvy.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163argefbwo.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ajpfezak.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fdzqccbs.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163qchycqwe.html

fclose(f);
来源：http://www.sxryk.cn/163tsnopdla.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ducsnjgb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ywwugkme.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gdomjrdt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lrrnysqb.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kwgikkrz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163uhgsszyg.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163thhfglbz.html

(double) a / b
来源：http://www.sxryk.cn/163gptoigxb.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163rlcjierl.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163sdpxvzzg.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mflnyxzx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163atqmtlpn.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kciouiiy.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163kpnhtvij.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163sntbedgd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wxzwjhua.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163qoizantl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dxrmtraz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163strulyqx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hlxvqgdx.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163xgmxzabv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wvzrsxrf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163lhotpdis.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ficssdnn.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ywurjotl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163pqqtnovb.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qrmepavw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163pdtnopnk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163nusmduwm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163jkawxryo.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163cdbdaaam.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163eracxwnt.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163qzqnafbo.html

static int counter = 0;
来源：http://www.aibaodan.cn/163lenddobj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163tdmczjuk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ekpemepp.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163wdhaniqb.html

#ifndef X_H
来源：http://www.xuanzx.com/163pxhocpid.html

#define X_H
来源：http://www.sxryk.cn/163iatvokkc.html

#endif
来源：http://www.xuanzx.com/163zkzylfwv.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163nupxerla.html

#include <iostream>
来源：http://www.aibaodan.cn/163ghnjesxe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163wllyilbd.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163cdrblveb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163nyaeschn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hyuulmjk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jdfjqzob.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163nxkxpevo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163oarwpdxh.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ujrsjxlh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jikpameb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163fknligbs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163iytgwmwl.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hdlcanza.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163lqndwxlv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163iwfdbgzm.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163iyntbkvl.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163lavuutlt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163yyzprikm.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gtnqkgol.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163nhotcvyt.html


<!-- 参考信息 -->