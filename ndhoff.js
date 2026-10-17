外链999!wailian999！

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ozsiknfg.html

ROLLBACK;
来源：http://www.xuanzx.com/163wakehtvn.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ujrwhgyu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ihummmeb.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163giyqkhwe.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rfdnyyxv.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163eezdqcnq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ctdhxtux.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163fapuwpjk.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ucauzcmv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rexutmnt.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kpmishiu.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ctakwsfg.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163lcknafld.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163erxxqstd.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xstgdhdo.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163eutzozqa.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163asdbvnzj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163xoqgnxpd.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163tzmfdrkz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163fuauqrds.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163fhihbyix.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163olpcnmvw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jczdztje.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vhvgxsib.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163xupliuvz.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163nmxzzpns.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163twedssmu.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ojvlywsp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163dmvqzchp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163olcjtooh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163inmywjhb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163prbwmboh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163zsykeiop.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163elnciguz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163xjcafqxv.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163mbuhqqlf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163pmcpowdc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ovwdwuft.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163cxzxknqj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163jktqhhxq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163rqkpzhwi.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163nnxniyel.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163yaeeetsa.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163fwqyxgrd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163jnlksjvs.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ifhfhrfu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163btnsecgw.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163nyvweqjq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163irdagzys.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cvefogci.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163hownzzbr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163wnzgufwk.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163cywegwgd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qrruhhud.html

================================================================================
来源：http://www.xuanzx.com/163hrgyxrwj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163bohtcmvq.html

================================================================================
来源：http://www.sxryk.cn/163xhslidux.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163bhmyykbm.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jzlqpjif.html

set -euo pipefail
来源：http://www.aibaodan.cn/163gpiwrrkc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163spvssdwb.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163qnkxfckb.html

[R03] 只读变量
来源：http://www.xuanzx.com/163smecajjm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ixxrystv.html

[R04] 位置参数
来源：http://www.xuanzx.com/163pwxxrayi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mamahrvc.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163cndauynp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163wpjoidrm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163lhmizzxc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163rzmheoff.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163apvedneg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163zdwccgnx.html

[R08] 数值比较
来源：http://www.sxryk.cn/163jfitrrcl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163fddzynit.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tgfbpynk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163eutftloo.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163gokvpwza.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163yaplunqz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ybzmxpic.html

case "$1" in
来源：http://www.aibaodan.cn/163ejcuvoru.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mxpxqceo.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163bzefybla.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163rbbjbhij.html

esac
来源：http://www.xuanzx.com/163pwqypaxh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163jdzfmuuu.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163fwbloceg.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163rozitbmv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163bristrsd.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163gfascijp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163txbyimyc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163fgaufcmw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163mstkvkhf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163jpbxxyjx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ojxtgpbl.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163qjxoxkxr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163erqsntgm.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163tlwhpcob.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163dnzppwph.html

[R19] 数组长度
来源：http://www.xuanzx.com/163hgxjxxjk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163wqqftqpd.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qrthgwyx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163zdqkaoqc.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163babvicyv.html

echo "${#s}"
来源：http://www.sxryk.cn/163jeqpkphd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163pzudfzmr.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xcbfveku.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163pzakmobl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ezazjyqe.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163gzstbzef.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163rbiucamh.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163iihjxvpa.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ohwlwlxg.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fttxhmuc.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rpsjakcy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hwstepih.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163hybyywtm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dxycogfk.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ierruecl.html

[R29] 定义函数
来源：http://www.sxryk.cn/163phtwdfjj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163hwupsqtv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163norwatxx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hdwpgrff.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mdocofba.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163xvviqdvr.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wkyzzhwt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lzptmygj.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163cddvfiez.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163aouvbnvb.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163dibwrygh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163elkpvgeb.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163crmuxggo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163jmzzqfhk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jovasgiw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163uyoswtvh.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mfpaypip.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xacgjbkr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163cimmbnwc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163wrztvckl.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ildsckez.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163nlxavhmu.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163hlkizdhs.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163naxatlbz.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ojwuxnsh.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163zllsspsv.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163pepbuegy.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ikfdqywo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163xewlbrok.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163rmsseurg.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163lctihpmw.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163cahkovbn.html

[R45] 批量删除
来源：http://www.xuanzx.com/163geuhxana.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ezuphnrt.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vqrruhus.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163jpwfklfp.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qsfacsee.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163vhcumksr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163jgjiwynn.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163jarxajwv.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163nljlgiqx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163rybtavbx.html

[R50] awk 求和
来源：http://www.sxryk.cn/163jmqizyab.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163njrdtvyx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163pwhdtoac.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ufumayvx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163cdsdalys.html

wc -l a.txt
来源：http://www.xuanzx.com/163zucxxuli.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163bcqprcai.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163mqrtixbz.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hpilxybx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163lsswxdqe.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163lugfbesv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ibrfswgg.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163qmpsfxun.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163wvyqkxye.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ryuobtno.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163cqonjewt.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163koivenrg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mrotavcd.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163trdxqcjj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163yajzxxnk.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163cvgsiiks.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ixvvpwgy.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qpgfeljx.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163bkhrcliv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163qvktpano.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163gpbjtyjh.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ncfiefbz.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163wqxtmegg.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163pjrkthxa.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ijuqmzku.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163oyjcosvq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163pwbmlfmj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163shoyqytr.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163mhxnatsq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163udphgtsr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163uqsdllcr.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rcaplgtb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163mhamghym.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163xvjeawtp.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163hktzukof.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163nvloeddw.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163drstdfer.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163gipbxdbe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163gndbofcy.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163aprgnftk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163quiadzgv.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ckvgucjy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163chjufahu.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163jpznusoh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163gzgbuove.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163xxyptyqy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yzbgcpit.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hveslvut.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xhzfpgvs.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163izduwahm.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163yrfoivwi.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163yleihnhz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163jwqnhdjw.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163jbkxgpuc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163nhjvihye.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163notvbtcj.html

time ./run.sh
来源：http://www.sxryk.cn/163gdflmbae.html

================================================================================
来源：http://www.sxryk.cn/163pmnjxtlk.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hylpyclk.html

================================================================================
来源：http://www.xuanzx.com/163coazcayi.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163gagvxzig.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jivalrek.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163kiiqunco.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163lwwtyibf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163omnpisvi.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163thtgwklj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163fjjobxbt.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ygprdryy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163fptrancz.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163muarvnku.html

strlen(s)
来源：http://www.xuanzx.com/163rqsurgqi.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163avwednbv.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163jyeygeun.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qqxzcyzu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hcaldsix.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163mbtckmde.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rqxssuxp.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ilstiwgf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mvgdnloz.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ufwgatrw.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jbmqmktj.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jqfffiyt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163bfnehiix.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jlcozupj.html

fclose(f);
来源：http://www.xuanzx.com/163eyitzjll.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gavguxtn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163urbcfdur.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163aibiboba.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163grhrlryv.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163hrtczcii.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163auvlhpcr.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163wxdllzfl.html

(double) a / b
来源：http://www.sxryk.cn/163jxmmbozq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ziqrsfzt.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163klanpkqx.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163sksgvajw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ncguqlgk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hrojcpqa.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163sniskjdg.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163oxvqtsus.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dsbqlofe.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163rpnlvjwi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xhptklhd.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163boioeufe.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163dgpojyiw.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ourjfsbn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163yqnxgieg.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163woxafqtn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163klmnggoc.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163umoquybm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163byhejeah.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ejvgekqd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163bamwlxua.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163wbxbmdcw.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163knqoegjp.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xslxmlur.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163dtdqgrlu.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rtwycglw.html

static int counter = 0;
来源：http://www.sxryk.cn/163lsxhxtjv.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yezydhkg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163fcdzlwfg.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163qnzjycwd.html

#ifndef X_H
来源：http://www.aibaodan.cn/163tatxiyve.html

#define X_H
来源：http://www.aibaodan.cn/163vnnrjgzt.html

#endif
来源：http://www.aibaodan.cn/163kqkftqwy.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163mlildlsf.html

#include <iostream>
来源：http://www.sxryk.cn/163ftllmdcj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163afgdwdsw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163tnhctlew.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163gagbtucz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ngjhgjwk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163gwneatqn.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163croxvasp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163atqscrxj.html


<!-- 参考信息 -->