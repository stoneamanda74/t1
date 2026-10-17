外链999!wailian999！

[Q63] 开启事务
来源：http://www.xuanzx.com/163yvtyrnei.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163nfhfvouy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163uyazwfxc.html

COMMIT;
来源：http://www.xuanzx.com/163aejwsnva.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163gsadzqlf.html

ROLLBACK;
来源：http://www.xuanzx.com/163zahtyjam.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163rhaodmvy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163uzkjucxt.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163oywypldz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163wlvbxxjz.html

[Q68] 保存点
来源：http://www.xuanzx.com/163rjejqhan.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163yrngmpln.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vqmaqale.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163durvfytt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163loduojku.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lvmhhyjn.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163uweljpxz.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163aqnwnakv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ajllsikz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163aaguyrgv.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163dqkvgntj.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163sowuxgsx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163mrwbrwsr.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163jdbnbhev.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163gslbaepi.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lsmbovbk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163umjyiqef.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gqncmmmo.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163nptlgnpb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163tqgqhvcn.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zpspuxiq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kruvmgxf.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163uibfulfs.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ahdpvsvu.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xjxgsncr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163lazpdfzq.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163enhiyslb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163pyxsonaa.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rwfmxfhz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163fztuspig.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163zdjyrmtj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tvlcslsy.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ouikxacl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163pdsjnqsa.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163yvxvblge.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163pmpxwkxr.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163zvjrfjdm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163lyuophhm.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163tgdatbwf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163gbxpwgoy.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163zqcyrtnz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163gdtcvgxr.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163roeslddq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163etwgmqbk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163aennamhq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ibohfdjo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jthlmusy.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163eqefmksg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163qipbclfw.html

================================================================================
来源：http://www.sxryk.cn/163bfakpozo.html

R. Bash 专题
来源：http://www.xuanzx.com/163axswfpje.html

================================================================================
来源：http://www.aibaodan.cn/163inuonoqr.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163slaorpdx.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163rgbexrqn.html

set -euo pipefail
来源：http://www.aibaodan.cn/163yfeckbvv.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ttjeodpe.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163etmdkqak.html

[R03] 只读变量
来源：http://www.xuanzx.com/163xdewdqqx.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xtfpwbvt.html

[R04] 位置参数
来源：http://www.xuanzx.com/163isjhvzdf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vxepbgfe.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163etfrcxri.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ngkivzbn.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163qlpezjaw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kjtznryt.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163nisjproa.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163cjxmyhih.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163mdcqplgg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163xyyvgroe.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163farlnxpy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xkrmppap.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163tspjstgw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163lfjvvtze.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163khvseoah.html

case "$1" in
来源：http://www.xuanzx.com/163wvwoiwoz.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163sksrjgct.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163pmlclgwr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ilwiwgfu.html

esac
来源：http://www.sxryk.cn/163zcxqouyn.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mnmstxpt.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163pwexnrau.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zeyzytxo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jcjwsaif.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163vgloistp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163aiysibwz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tacrcrsu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163zqumrlhn.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ahgazngb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163lmurhehh.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163zmtrdfdp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xmvbjgrr.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163znufuwcq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163rpcfycuu.html

[R19] 数组长度
来源：http://www.sxryk.cn/163omwjbnhp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163vrmsndgq.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163pqucmhlh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163isgikgzu.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163qcxlydvc.html

echo "${#s}"
来源：http://www.aibaodan.cn/163brgtejgq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163gpekqsqm.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163qfmhkssx.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163xzuyzxds.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ameseclt.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ylhiblrm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163nzbqfgcy.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163fnsgcobp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163yuejbqfx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ltpplyzk.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163upvtvcai.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ovsdnrth.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163dmkluiwj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pxjclfxq.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fehuadkv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163rrwxytzm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vvmsvtlv.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163atzdrjle.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ynapdena.html

[R31] 局部变量
来源：http://www.xuanzx.com/163atvawysw.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163dbdigbiz.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wwhsslbw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163tfsnhzsd.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163rsvyyokw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ocsiodci.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163btufvaqf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xjtdxgbd.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hfgdvmpz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163apwicfov.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163aauoulis.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163kuzevhzr.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163aovmokiq.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163gphwknrr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bppfglee.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163jvdyptnz.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163pjrboqqp.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163xtjfpmmn.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wjbrnahx.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dryhctsg.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163pfgwifel.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163cbegprmb.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mgxvieqx.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163erctbthz.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163eudveyfo.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163kqvouegx.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163mkcdzbqy.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163avgxqjjx.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vkvkcuyl.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163enijhprp.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163spvqfjbi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ulmgvgrv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163saagicld.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nwyfpshy.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163afjfehau.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mvtcwfxd.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163qcjvidbb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qbrihcld.html

[R50] awk 求和
来源：http://www.sxryk.cn/163slojzcnf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hxxmdgoh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bwzfnbwv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163balzzbmz.html

[R52] 统计行数
来源：http://www.xuanzx.com/163wrzfotlb.html

wc -l a.txt
来源：http://www.xuanzx.com/163xfuikgab.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163hlwqxjje.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vszuulfn.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163juuwakhz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163aciylawb.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163utuihvld.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jrxzoula.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163dovkvmgl.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163biktgdgw.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163idaclghi.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163mlypaftn.html

[R58] 下载文件
来源：http://www.sxryk.cn/163yuvvfycj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163lvrxdrun.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163hpnzsjxw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163fjrseyvr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163kofamtgs.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163jdbfwzzc.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ttsghhrj.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163unryxlxg.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nihedebe.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163zizluplf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163axbotctr.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qngeotnv.html

[R64] 结束进程
来源：http://www.sxryk.cn/163gcjxudbq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163dvpinpgi.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xqmogocl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hbkpfvia.html

[R66] 定时任务
来源：http://www.sxryk.cn/163wnokvfqg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163kwbktheq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163krzvyfio.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163navyitkx.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rlvcyakp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163yjnkqdqo.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wvqtoild.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163coihvace.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163woiocxyq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163wotoacvo.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163gteyeecv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163pzhumlky.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163lgsmfrda.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163aqldlimy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163graduthx.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lpibayxl.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ldkghdxb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ibdjiezf.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163hklvmrmx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163lcjmbkhr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163crjnehyh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163kregcwbg.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163yblrqtnd.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163hzyzypej.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163csvmvrfe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163hjiwpirt.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163sdqpbnef.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ehvssvlz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163rxpsbmez.html

time ./run.sh
来源：http://www.sxryk.cn/163dhtckuof.html

================================================================================
来源：http://www.sxryk.cn/163pnrjvvln.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163axsvspja.html

================================================================================
来源：http://www.aibaodan.cn/163tiwsiwkm.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163hswgurxi.html

#include <stdio.h>
来源：http://www.sxryk.cn/163mqentboh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163nzkxshme.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163flolzqje.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jfgdqrtk.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163vezewgvf.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163mctchrsi.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163hdfdubrk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zrwuutrn.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163hhieroad.html

strlen(s)
来源：http://www.xuanzx.com/163ydixifhm.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163nerhrrzi.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163osqkpcsz.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bqnuvbtp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163omqeqpvm.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jqjiewek.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163sjtjmxvq.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163adwqtdzd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kidgxvnq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163jstxorgi.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163kawjozzg.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163fxceiwvf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vbfspzcq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163bydkakut.html

fclose(f);
来源：http://www.sxryk.cn/163nvbxslkx.html

[S12] C：写文件
来源：http://www.sxryk.cn/163tuubberq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163lssigspn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163yclwbyis.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163jsghmwyp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ryjrvtmz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163iaylbbtb.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163fthgpqlw.html

(double) a / b
来源：http://www.xuanzx.com/163yzufmpow.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163upuqeirb.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163omsidgmx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hhhddeoi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ctlxrbmz.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163fiwtlsly.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163gjhrbfsq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163aeeifqgi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qrjdjezb.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163jzchkays.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163iisxamwt.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rpalrsjf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163kunsruex.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rqpriasg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163sgpfhklq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163rfyyzadt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163koxzeota.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ewcosbyh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ipdzghad.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163crngutav.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163attjlhbw.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mqgusxlm.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163lqvijsxl.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163alpbzmym.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163mucdvfqt.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zrtkxgbn.html

static int counter = 0;
来源：http://www.sxryk.cn/163bxvjlxws.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163laynlnam.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163nfgtfepd.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zkbddfos.html

#ifndef X_H
来源：http://www.sxryk.cn/163cwxxvfiy.html

#define X_H
来源：http://www.xuanzx.com/163oopjxoyd.html

#endif
来源：http://www.xuanzx.com/163beyfqpxj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163duoalwig.html

#include <iostream>
来源：http://www.sxryk.cn/163quegcrov.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gvmhotyt.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163qgbpzcad.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163yeimkqxt.html


<!-- 参考信息 -->