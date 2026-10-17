外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163hcvmnarw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163fnjqpnrd.html

[Q68] 保存点
来源：http://www.sxryk.cn/163dpqbyzuo.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163cmwmaqdz.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163bdzgajrt.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163yefsilyv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163kglfykuf.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163tcivjgkp.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163dcaiyvrm.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163zircnoud.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163setcdldc.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163xlqnjjbx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163fsnzrndk.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xfvhuzae.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163menmksqw.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163tiluwigu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ezyibthu.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163fdxifiit.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163dyklxret.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163hpmwanjp.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wzpkkakj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163fyhjovml.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163tpuivmyx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163mgrviwlz.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163wrdwfzlp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163euyaswso.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163kfkuhdgb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xyftnzuu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163fpmwricw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163sgifecnh.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163flvzjmvj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dfqisdgw.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163vlgmmugb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163dekbwwvl.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163bxquxlhn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163jzavbpwu.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163mqfunvzz.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163dwsxoglj.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163wvdigehd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163kydoiouw.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163fvkcyjxt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163iapzohso.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163tvmwkxkz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163nuclubje.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163znorfprf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163najftzib.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163aelsfitw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fonhsode.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jvivcpwj.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163pmrwpwzv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163frlmuofp.html

================================================================================
来源：http://www.xuanzx.com/163upmfqpsk.html

R. Bash 专题
来源：http://www.sxryk.cn/163brsqycwe.html

================================================================================
来源：http://www.xuanzx.com/163vpxzmtyp.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vicqawab.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163lkhkesxk.html

set -euo pipefail
来源：http://www.xuanzx.com/163wqhkwnyz.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163wdpllszk.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163muhxxoxd.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163nrmbpzgc.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163iwezoxnn.html

[R04] 位置参数
来源：http://www.xuanzx.com/163arwueglt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163wwvvutzc.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163edejfbya.html

name="${1:-default}"
来源：http://www.xuanzx.com/163zlocjfjg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ldapqbif.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163dhzvqxif.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xisioyio.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zkfyeaus.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gzwsfdif.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163zrfnzedc.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jkjitdwm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163eiqjjmfh.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qiuxrtoo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163wozjicbr.html

[R11] case 多分支
来源：http://www.xuanzx.com/163jinejbda.html

case "$1" in
来源：http://www.xuanzx.com/163xdesbais.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ydrkkoel.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ducjqxrv.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163nuxyqgkh.html

esac
来源：http://www.xuanzx.com/163uunscfsc.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163coqcxfwi.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ikjxuehc.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163sdnngync.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163nkggcjul.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163uslvtvur.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gevwoknl.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uehegztf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163apuoxroc.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xbynwqwe.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163uqkucwdj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ypjtuvte.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163lnuzwvwx.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ensbjlcb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163cvtbayxd.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163eeicixvt.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163xyxfakmh.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ygfholka.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163pmoglgyy.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163lbpajvym.html

echo "${#s}"
来源：http://www.xuanzx.com/163wkgvzpdn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ahrnnsva.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163iydhnrpc.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163xbmvquse.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163sozusgyp.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163cikyzzew.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ltwiwzit.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163djuwmgyy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163gahivixj.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163iyynxwid.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163lerszrkw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163wxzveixk.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163wimdvmfl.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163wymcjqby.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163svnieofs.html

[R29] 定义函数
来源：http://www.xuanzx.com/163awuuldqg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163btjuqdzw.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qcxigzir.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xlvrowtu.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163aqspqaei.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163bgpewlpw.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mzszowdl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lftulbix.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163gdhpaiuh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163urhljjvp.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163nirtmhhp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163oedtbpxd.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163sqhcrrwq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163fvgoqkrq.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163xptdjjgp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163sgdnhfhu.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163eeflrglv.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zbraiffu.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bjdjtkmm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163xafynicv.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163pzyebtjr.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163alrdgipf.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cxwpgbsh.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163xlfduejn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163yuoctsas.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163naickibx.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163diljpydy.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163cvldtdzy.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163dozzydbm.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ttjgevvo.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163jpxtbnwy.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163vfoldtha.html

[R45] 批量删除
来源：http://www.xuanzx.com/163sravtpdi.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ebqrpmqs.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ycnvrqie.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jxqjxadk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163wkrqtdwo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163adkyjzoy.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163zdvihufr.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mimtiohi.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163stoeezob.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163jywwhfml.html

[R50] awk 求和
来源：http://www.xuanzx.com/163oqgdysaj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163emqaiqob.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ewfybpkq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163vvorpkmr.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ujipbatq.html

wc -l a.txt
来源：http://www.xuanzx.com/163jsbmvekq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163aakcofey.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163kiwdonsm.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163gmggjfji.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xgsgpmcn.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ttfnvrul.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163snjoxvsp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jqmmvfar.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163xcklfvov.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jogqacgm.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163bvccbbir.html

[R58] 下载文件
来源：http://www.xuanzx.com/163eitbsefn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163icmhxuit.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163kmihoidu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163dxqeulkt.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163rbihoyrd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163pkgrjgqo.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163gwmlnegs.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163mltufldy.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163sbhlipot.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163mfknkfgm.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163dzcbwkrs.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163gyxxvlnl.html

[R64] 结束进程
来源：http://www.sxryk.cn/163jpnquiex.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163bazmwywf.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163rxgqkwns.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bgfqzojz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163mzgktvtv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qlepungx.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163yhylzlmb.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rxakicpw.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163zaqpcron.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163kztlnyfa.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163tldrlqht.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163jeawtboe.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tzihdsbz.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tltwvctj.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163tqtvejsn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163dpztsrvz.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163hbukggqq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163naffpumu.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163qflsvvqr.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jsvrrgqd.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163eqquakzn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mqrzhkru.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163patbohse.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163vuwxskgn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rrdqaxfb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tyymikko.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163hjedjhfl.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163biubtemf.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163wybwxpxj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163mqjzyahh.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163nvyepxkf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163kvxovmus.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wpxamyfa.html

time ./run.sh
来源：http://www.aibaodan.cn/163uzntjojt.html

================================================================================
来源：http://www.sxryk.cn/163ckhdgtgu.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163efbtkfgx.html

================================================================================
来源：http://www.xuanzx.com/163dpymjgna.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163mqnntddv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163brkgpoty.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163riqrzkls.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163qbqdyctv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163nqhdndos.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163tjuqhgep.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163giayvfmx.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ybvndswn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163yhoptbhp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163cigcwfjn.html

strlen(s)
来源：http://www.aibaodan.cn/163jdxjqvey.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163tfwdaxub.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pssnfysa.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163nhibkjme.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ziclfilf.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163cakwazub.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163gdrekmtb.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163smfyiwdc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163oqabbipu.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163rpxcxbmx.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163lwguexvy.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163oqcoqlbm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163scjvfmeo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163utulkchv.html

fclose(f);
来源：http://www.sxryk.cn/163ezanebyo.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163wenltxwp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163iujqfjtq.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xqtdqljn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163gwlmldep.html

[S14] C：枚举
来源：http://www.sxryk.cn/163karrhlph.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163gjduuqdt.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nvxbofyl.html

(double) a / b
来源：http://www.aibaodan.cn/163qeddjpyy.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ffnlxbvz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163bmeanptm.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gsbeyzyp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163funptovt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ekywldff.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163njtvnjrp.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163jmpjnngn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ntymvnjf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163bcaqhrbi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bqxapzmm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163uelncziw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163mdikseko.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163huhgxmco.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xgoiwlpq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163swlztuhk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163jjmfkkvm.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163gehoemqj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163soxcyspu.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163xwagvdil.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163plcaawjw.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163neutlqvy.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163brkgfnst.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163heprggfp.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cqrqarar.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163dykdmtjl.html

static int counter = 0;
来源：http://www.aibaodan.cn/163cehbthff.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nwloscek.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163qvydspzi.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163kyaigxoj.html

#ifndef X_H
来源：http://www.xuanzx.com/163xrlaisxz.html

#define X_H
来源：http://www.xuanzx.com/163fululkpf.html

#endif
来源：http://www.aibaodan.cn/163vwiatuqd.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163vykjickv.html

#include <iostream>
来源：http://www.sxryk.cn/163hvpcbrob.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ijzeubtu.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163cpboaxsn.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163jmvnkgku.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163enhbjzxh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163laqujbff.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hovxxsln.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dzlbomjy.html

[S35] C++：map
来源：http://www.sxryk.cn/163aaechqvs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163afhjwljb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dtpdhvop.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xixyrikc.html


<!-- 参考信息 -->