外链999!wailian999！

[Q63] 开启事务
来源：http://www.sxryk.cn/163eqlzdqgr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163xktpcakn.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ptvwsftm.html

COMMIT;
来源：http://www.xuanzx.com/163vahftozu.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wpwctznl.html

ROLLBACK;
来源：http://www.sxryk.cn/163sdzqioiv.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163smbvihsr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hltcxkvb.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163kfmkkjtt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ugtscizb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163dsachhvo.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163evjjfomk.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163snctwtpr.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163fstgckby.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vijxldbx.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163wclyskfp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ottjtnpc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163smigsnsc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ywozjovb.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163bulkayga.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163wwhfhhkx.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163yutvoobf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163vidfbtod.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163yeetubmm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163hqelpwjo.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ehhewexc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163yscsfeea.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163bimcwekw.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163tnescnld.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163zcapwpwu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163hexqqllt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163taczftgo.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163bumqxxno.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qacaorpx.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163sqerihhm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163bwodgipi.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vktpafpi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163noibdpyu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163usidzuys.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gwtmpaxe.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163endymhfz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ljlgzcjg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163wgyyikdu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cjchimlu.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163efrkuirs.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163gpehjgeh.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fipjwwwq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163pniguqeg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163vxamhxtq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ktzxnmot.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163owudftcc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163cpzatyvu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163gpbnqjzp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163gzoyzvck.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ppcuqxgf.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163behxsdni.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163cnoohobu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163mioomnfj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163wdvonlkk.html

================================================================================
来源：http://www.aibaodan.cn/163bqjplnku.html

R. Bash 专题
来源：http://www.xuanzx.com/163dlmcrtdm.html

================================================================================
来源：http://www.xuanzx.com/163wunaucer.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vamvagnh.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ahmvxlzg.html

set -euo pipefail
来源：http://www.xuanzx.com/163mzxuhdaw.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163jiyybogi.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hgwfktyn.html

[R03] 只读变量
来源：http://www.xuanzx.com/163wxlsqbvu.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zhgqfsat.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qukibtpo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ugpnunxn.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163pewnjugm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163pzucdzwb.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wgadbsfv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vvnlvvwh.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163aewqrgec.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ljebxkqn.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xcdugxab.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163czkehmod.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163gcnabybx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163hqnbrnvd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wefovkgn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hksifswu.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ucjruzit.html

case "$1" in
来源：http://www.xuanzx.com/163ehymavdw.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163lxlgvrtk.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163bnjciyug.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163oaiyhlvf.html

esac
来源：http://www.xuanzx.com/163gcnewipo.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wpncayfw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163qjztfoce.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163tybyvszn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163nyqdbrnb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163mgfuyxiu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163kxminvnc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163nkrhknxd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163cjyksedp.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163lhvlnjdi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ohmqvjib.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163yvxquctx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163inikxfdw.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163llwzuvbl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163fcmxtdiq.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ghmumooo.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163wsdcjqwz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yovfgbsa.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163kqnxnnmz.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163acjbwzsu.html

echo "${#s}"
来源：http://www.sxryk.cn/163gkmdamtk.html

[R22] 截取子串
来源：http://www.xuanzx.com/163dkijvorp.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jwkojfpd.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ctkqpsii.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163oxguimux.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163vknxvipx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163tidpytqt.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ebpashln.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163frtabuks.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163uhofynsq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163langsopf.html

[R27] 算术展开
来源：http://www.sxryk.cn/163nqvjdwwn.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rjzxezxi.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ugumcros.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163bqemogpk.html

[R29] 定义函数
来源：http://www.xuanzx.com/163qbaodhaf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163etzlwegs.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163eosnazli.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163nbsonskd.html

[R31] 局部变量
来源：http://www.sxryk.cn/163cobdjdzt.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163kkgvbran.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163lzxbbrpg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163tdxmttxs.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163irgoihpe.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ewotipoy.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163gppkvsok.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163kdcxaxxp.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163waduhonw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163twujikfw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kgplrxzz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163wfwlwlny.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ppgckpvu.html

files=$(ls -1)
来源：http://www.sxryk.cn/163zmzpywsd.html

[R38] 管道串联
来源：http://www.xuanzx.com/163kjcrwrmp.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163nkfkrpns.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163gfbpyckl.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163luhxhsws.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163dlwdbhor.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163pzckcdjj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163svmrfgec.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hoksmtve.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163tplocvwe.html

wc -l < a.txt
来源：http://www.xuanzx.com/163aooshvwj.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163wiyzfrfi.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163jnutalao.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163fslclpsh.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fvwaywuv.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xmixbgvn.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163nzavymya.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163knceivlj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163rapczzsv.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163yqzoqlod.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163znyfcqfx.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jggxobzs.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163gbwkxqwa.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163kssfyslz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163goiypxje.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xweyyhhr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163zyeolucq.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nsnitcac.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xzvrqoms.html

[R52] 统计行数
来源：http://www.sxryk.cn/163nrmtdlcl.html

wc -l a.txt
来源：http://www.xuanzx.com/163rbfdpbea.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163eeejappv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hxfdsmie.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163vnwodskc.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ewrkglsb.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ihvffjqk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163csiaeeft.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163kxqyjhhg.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163mnerpomq.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163firmcrrh.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jdrofvdw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ykkdncvm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ptkncije.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hitlqprd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rgsfbpfx.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ilbjwrkm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163uvmztmiy.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163egmjumyq.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163xptgxehi.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zlmuerpf.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ouyapvds.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qcawogei.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163qomwetqd.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163lpvmaclt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163nkdpikgn.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163chqrfqgm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163rofjhubd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wpwgfooy.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163rrviyyul.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163oftuvsqn.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vhronkau.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rtaoxqus.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163fahbdcig.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163eawydfam.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ypqjkubv.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163cahmbpge.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163xjnynvtw.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ccxsxtix.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163gztqwsrh.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163nbiihkny.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163yhwmgshq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163egyklpke.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mkecvbzy.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163uywryasb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hdhxkstl.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163csdcvqdw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163agynlwxj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163chbpyyms.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163myyuynsw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163eoklsxqn.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163pkbnlcss.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163imvvqsup.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ndttlntg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163thkvqkku.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163fxfbsmeb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dnmctcvb.html

time ./run.sh
来源：http://www.aibaodan.cn/163xoboakvp.html

================================================================================
来源：http://www.xuanzx.com/163xttnqpvx.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163xgeybiyf.html

================================================================================
来源：http://www.aibaodan.cn/163textvbci.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ubqjyolb.html

#include <stdio.h>
来源：http://www.xuanzx.com/163avjarprl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163qoglmbfa.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163tvcqpuyw.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163mlhzxugi.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163dsnnvthg.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163fvohqnwo.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163mxzjvkwl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163oydgxdln.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jfzudbco.html

strlen(s)
来源：http://www.aibaodan.cn/163mkcmzhbz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ubbtotpr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xiwlylnl.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dqzoxqfc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163dgsxljjl.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163tjxumcmj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163mrhknscu.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163cfrhpnig.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163raspovpc.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163uwkthggi.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163fssdtncc.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163rztapghh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163hoyrdunm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ulxtjasc.html

fclose(f);
来源：http://www.xuanzx.com/163qisyamfo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163fehttoya.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163nmotztsr.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163efmlixbq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163cpmnbhdq.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163oyzanndd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163jofsaavb.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163klzbazxi.html

(double) a / b
来源：http://www.aibaodan.cn/163roidzlna.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ripkeiaa.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163oujbgdph.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qtdstyrm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163uvaldadg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163rplmjnam.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zxqnvtwb.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ouuzxshr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mdyesglv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ijsufjuf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tshhtmvn.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163agfrvkpx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vjvrxaqa.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163gdnxlber.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163dpdousgn.html

[S23] C：随机数
来源：http://www.sxryk.cn/163lwsykwta.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163mbujbirx.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163gmetxque.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163uulhsfxx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163kvzkgebj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163cswoszdp.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ouaetzoz.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163kgnktjho.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qprhdiqq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163sbgpeoco.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163bnpesiku.html

static int counter = 0;
来源：http://www.sxryk.cn/163flqfmyje.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163kxixknds.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163publfneg.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ixlkyvie.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xwdyfooz.html

#define X_H
来源：http://www.sxryk.cn/163fgbtmkfa.html

#endif
来源：http://www.xuanzx.com/163loakhcin.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zhynvgvi.html

#include <iostream>
来源：http://www.xuanzx.com/163ikpirbaj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ncvumgtm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163exguixab.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hulaunlc.html


<!-- 参考信息 -->