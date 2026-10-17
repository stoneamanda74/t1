外链999!wailian999！

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163hovzydcm.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cnkwawnv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163fcahevis.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163jdojwgrw.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ggstktub.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163thmuqxpn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163moeiqcwc.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ykflngid.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163lygmduvx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163fqkqsvtv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163pmdxtpdr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163byphyzpg.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163frameyqb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ituhedlf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zsuzgejh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163bxshwqvt.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163zbpofpnv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163jifhgtaa.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zhfimnmi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163hykgteni.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zcoyfnji.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163lwyksphk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163nuombjdy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dfksbsdu.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163olyjbusc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163iqqtwcnr.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163qhsrhofb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163cltmpwml.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163dmfeuglx.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163aqaqsidc.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163odfflyhn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ajtcijwb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163wffctpkn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xzgtiulf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163lnicwbls.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163bqzdolkc.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163lizwsbso.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163lrqheoqk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163owufzfnn.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ozvxjmyi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163niptegnj.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163kamfnjas.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163jmnqrcxz.html

================================================================================
来源：http://www.sxryk.cn/163dteupcvn.html

R. Bash 专题
来源：http://www.sxryk.cn/163amalckre.html

================================================================================
来源：http://www.aibaodan.cn/163neivdgrr.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163nsxihjxe.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163quoqoxlb.html

set -euo pipefail
来源：http://www.sxryk.cn/163wzjzbdlb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163swischlq.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163qnjajose.html

[R03] 只读变量
来源：http://www.xuanzx.com/163apakzsrl.html

readonly PI=3.14
来源：http://www.xuanzx.com/163htgjectl.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163pjdiotvj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163orffutzk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wptlvaan.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163cxbxjpoe.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163yjzdezgg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163dfphxmbg.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163qxlswsch.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163hllyxpcm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163uahphdwy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163iwvtrvzo.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163gzqpakkb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163bxpqtjhx.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163mdwxkubt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hiczcvxo.html

[R11] case 多分支
来源：http://www.xuanzx.com/163myhgwdxp.html

case "$1" in
来源：http://www.xuanzx.com/163fssfwkai.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163wvczfgcn.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163buelqrdc.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163omqvmsea.html

esac
来源：http://www.xuanzx.com/163deocksrm.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163zyajvqyd.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163iefzuhqc.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163iimudhak.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163dxzledcq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163zftllijb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163fokciexb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163etvgyrwg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163honogdkc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rqjaqdva.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xavbucqv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163akthtplb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163pxtqfevy.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qjipwhtt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163czwndgbz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gtevycou.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163pzbasfcx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163vkenzywm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qhtryfqm.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163dlusjjft.html

echo "${#s}"
来源：http://www.xuanzx.com/163ogoritot.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163jjphgsva.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163osbbuona.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163jkwudkpw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163micrcpgg.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163wcacixad.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163avemkaqt.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ufnewnnl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qjsvodeh.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wogvtmaq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163lhazyyjl.html

[R27] 算术展开
来源：http://www.xuanzx.com/163onhcnmcf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163uckdqmbm.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163mpezfdwa.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163wetkqgbm.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ahycciho.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163pvwnvgdx.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163rtdpttcu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163abkhwycg.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163bisrpwwr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163psfaupzf.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ouaftguz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163cdmwulbz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163hkgkgptv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ksggbszp.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ofhzxtzh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mnfdzdwx.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kwhsanrj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163mqapgapg.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163iadrzlan.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163juomtiyu.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163xxjfdqsj.html

files=$(ls -1)
来源：http://www.sxryk.cn/163djgrkljh.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ylrdefcp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163leukynld.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163sawoawwq.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163swilvvtt.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163rgjvwvvd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163hkpldjgq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163momlubtg.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163tmgantzl.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163lwuscitw.html

wc -l < a.txt
来源：http://www.sxryk.cn/163hnelpjww.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163tjpininy.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163owransso.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ayklokxs.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163vbpjhfka.html

[R45] 批量删除
来源：http://www.sxryk.cn/163deeknvfl.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qndpshic.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ueqnwtfs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vpjndsjf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163yfmketdh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fvrddicp.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163okjjmcyi.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163npihlamj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163kvbjqodd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163awfvpabp.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ekympgot.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163qtnmmtbp.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dihpfxje.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ttnsxwoe.html

[R52] 统计行数
来源：http://www.sxryk.cn/163fdstqvjm.html

wc -l a.txt
来源：http://www.sxryk.cn/163pprsycip.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xixxnjun.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163idopbnwx.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163gerdojjr.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163pqziztei.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163hsfxcplc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wftuydib.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163trbfgsxn.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163bnkomnsf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ydxvvlex.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163auhosqih.html

[R58] 下载文件
来源：http://www.xuanzx.com/163nihycfvf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163hdemyuvq.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163vvaqgpmm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163lipptpdy.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zszjntca.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163htmzqxgh.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163fuehxmnk.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163rvpbienz.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163kpbjnjkj.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163fassumun.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163wgsndsfm.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dktpepsb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xutpklor.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ijmkhmsl.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bscayffh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bcmekcfh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163jfzsxvfo.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ddxjwvzj.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163nlykbxpc.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163agiemsfu.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163pqqtvset.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163wailgyhs.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163mqqizqem.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163sbktdhmv.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163zjqrguyl.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163evoumunh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163rqyruirb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163deritvta.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163tllfadij.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kaqpywxb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163aujcrlzu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163xbwsjhiw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xewhmdbn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163nqaxhxie.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163btrgveep.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163cociezwe.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kbrnjdmg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kieycyvd.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163sbftszwk.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xfpycshl.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hkslbcef.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163cuzbaaks.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163tstuditn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163mzntschx.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163yxbvdczk.html

time ./run.sh
来源：http://www.aibaodan.cn/163eyfchlje.html

================================================================================
来源：http://www.sxryk.cn/163doeklekz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163umgmxlpj.html

================================================================================
来源：http://www.aibaodan.cn/163frscxytg.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163bgkwwsxs.html

#include <stdio.h>
来源：http://www.xuanzx.com/163tweftxdy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163osowutmo.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mxedvzfp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163zsuzlvao.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163rvnkjpjp.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163cjrsgouc.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163wngpascg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vgoxixmd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163iagzidsb.html

strlen(s)
来源：http://www.xuanzx.com/163rxssiqku.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163acnyiunz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163lptpwdws.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ppdostgt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163taxyhgwx.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163icqbafad.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163buwmndkw.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163cuxxhivs.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163crteiwph.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163lmvzkvwj.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jziogkph.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163exhyqcla.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ygeojpxm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163olqwbjzr.html

fclose(f);
来源：http://www.sxryk.cn/163rrvdxoqu.html

[S12] C：写文件
来源：http://www.sxryk.cn/163prcishaa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wlacvgub.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163pwtxetef.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163pmacglrw.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163fjsseoqf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163erswulft.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163dkrnwjqa.html

(double) a / b
来源：http://www.xuanzx.com/163hmjskecl.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163wlbazayw.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jnxcckrn.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163zyhtlmvb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163idpecgts.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163vmhgunmu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163yzrmqtas.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163oiablndp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jsfrglfs.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163enptxrcp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gdcublxy.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xzsbgfws.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gscmpxbf.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163yvnjhgdv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163qxkigyyd.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163rggdntpp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wqbxnijn.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163tupcozbb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mnqlyfqv.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163aflqgehl.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zusdmelt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ziyfazmk.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zrqvrvgy.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163dgsczcxj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163slhwptqu.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163icyeyges.html

static int counter = 0;
来源：http://www.aibaodan.cn/163kbfvrgzr.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zmcaeymy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ymzgzgsx.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163biecdpke.html

#ifndef X_H
来源：http://www.aibaodan.cn/163jevowgjx.html

#define X_H
来源：http://www.xuanzx.com/163vbaoombf.html

#endif
来源：http://www.sxryk.cn/163hulaqrmy.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163dtaoirut.html

#include <iostream>
来源：http://www.sxryk.cn/163rpsmjutj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zmpbacsm.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163dxakrcvf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163tvqbuiyb.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163narvjiov.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163wdchyllm.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163dmjiudji.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163hvxvgtpf.html

[S35] C++：map
来源：http://www.sxryk.cn/163qqkqpuyd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wsyuxoct.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gdneqlai.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163oipymmru.html

[S37] C++：set
来源：http://www.xuanzx.com/163ajeiaweq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163cjeoljrd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163fvvugihp.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163dyixwhbt.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163wdzchomd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163wbnbpaqw.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jhsfeqmb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ppbwbiwc.html


<!-- 参考信息 -->