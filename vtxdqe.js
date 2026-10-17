外链999!wailian999！

[Q63] 开启事务
来源：http://www.aibaodan.cn/163anezoxxe.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163pvkfpldu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163kcwvgcjv.html

COMMIT;
来源：http://www.sxryk.cn/163jgepevnk.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bjlgqboe.html

ROLLBACK;
来源：http://www.xuanzx.com/163edcnhyfd.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163mmskbtdj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163gjcwvtct.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163osywbqeq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163aqdeqfbt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163nrfzdonr.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163wewiqpdh.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163qmiqrjpw.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ctaruajw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163qrgovenj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bcwrqdko.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ipjwknwl.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163pybtglll.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163brhqkltu.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zzqyukss.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163fjlkqueg.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163myosjenx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163gtvegviv.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163qguupesf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163nyhqyyfx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163rkwbrwnk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163fkhwpagd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fyysqlbb.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163exnbhnuw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163hrinuqsr.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pzybnfsc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163vgksyvsk.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163epckdxkq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ywqngcis.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ccwioimb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163afwfhwpy.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163lohdqbnv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163kshqlhat.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163olosnxlf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rmjkwakk.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163eqajyafz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ffztwnfm.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ivawvivs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163tvzxovnp.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163zbelwfan.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163hqhzdmyz.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163woobsxxm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ufbiellg.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163oiornews.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zvdlyhsb.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163jugkzjjv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163stmqqpim.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163fkblyetb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163skbyrvrg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163npktjbta.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163nebumqzf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163snshurqg.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163aqubxkdb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163jenrczui.html

================================================================================
来源：http://www.aibaodan.cn/163bmksyzxi.html

R. Bash 专题
来源：http://www.aibaodan.cn/163qaroxebd.html

================================================================================
来源：http://www.aibaodan.cn/163jvjtcrud.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ewjzwnmc.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ajbtwidg.html

set -euo pipefail
来源：http://www.aibaodan.cn/163apncmirh.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ouievvei.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163dfmfrauj.html

[R03] 只读变量
来源：http://www.sxryk.cn/163nbjhqxvp.html

readonly PI=3.14
来源：http://www.xuanzx.com/163stfhxksm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163nnkkxzcr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mjgxxcve.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163gzzkpirp.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ktjosppa.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163bcgyzcvt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163immzeyji.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163vucicgjj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163eoamvhfq.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ffqwenpp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163rnewqdmo.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bzfrkpbu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xiwdpmsa.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163fxcgaeer.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163hxxcymwf.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163aossybke.html

case "$1" in
来源：http://www.sxryk.cn/163xuxmllzl.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163tkojhqfk.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163vzdsasfh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qmusnjoy.html

esac
来源：http://www.sxryk.cn/163zliyssxa.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163hrckcukl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vdjckkno.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163zcmahvpr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163uxncdujs.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163zbibuigy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163yekwrkdz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163vdxqjygv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163wiifculg.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163djbalaei.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163fnovffhe.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163vugqmqbh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xcwakpdt.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163qekuahyv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ilozkyzh.html

[R19] 数组长度
来源：http://www.xuanzx.com/163rvyrggmt.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jwmhnyif.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ajxkduvw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163bkfkmitk.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wxkzmbqw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lrgixwdv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ytfjkgwn.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163xcljxyoh.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163qpngtsjj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ghxzstfk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163civzltdy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163mpuqwxcp.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163nagjsbjn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163kbjfrgls.html

[R26] 命令替换
来源：http://www.xuanzx.com/163dcdgwotp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163uqnzgdaf.html

[R27] 算术展开
来源：http://www.sxryk.cn/163mflwpgtx.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163kbkbgpqq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163jhvbmsst.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163mlurbbdl.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163jeoobssf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163wsprwwmi.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ndsujdud.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ciweelyv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163djpveywo.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tzmkboku.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163twdtlpse.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fvsuuxxq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163mjppqjnj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xkdohyor.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hatquwpd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163btcwucky.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163bvfnbzbp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xrbdoenu.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bkbmfequ.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163foranthr.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ygrgkheg.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ljkraqvl.html

[R38] 管道串联
来源：http://www.xuanzx.com/163szzkcqgs.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163shtbwoqr.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163lwlgkapt.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163qszedhtu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163uismptow.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163lpnslqwy.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gkyuirip.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163grpaihrp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163useiwgsf.html

wc -l < a.txt
来源：http://www.xuanzx.com/163rgzkhdrt.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163zhwjpntq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163dgassfkr.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163nanaxanp.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163viauunzi.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163yndzdgmj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163itrhjurz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163eglnmxtx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wtpccvhp.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tkypohgd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163yjgoybzo.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163eukxuhur.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163taxbynun.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163sdeupdor.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dekblcdv.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163tjqxsvsd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163qicovcqh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163pxzigdxt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jcokkoeq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163kpjiolge.html

wc -l a.txt
来源：http://www.sxryk.cn/163dsgioitq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163oeuuqimw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163foemxhnt.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ptqjnfgs.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xfkygxvb.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163vidomode.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163txcdeqed.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163nmnfwhaa.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163niipvnux.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163fqgxkgem.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163odywcyib.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163yevfzxnu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mxexrxap.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163lhelxknm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163rxiqmjnl.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bypbsxtx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dykxnzqq.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163zgzaimzv.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163dnbsyosn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163voklguzy.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163urljhkad.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163azavgitq.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163qbaxespq.html

[R64] 结束进程
来源：http://www.xuanzx.com/163pbfjeetj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zouiudzh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ygrropha.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163qbjlrqbr.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gczmphwt.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xtebvsip.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163aqtuedhl.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163raidqsyr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163huzaluau.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163awpyhtqo.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pzofgqkc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163kbftefre.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163wcxvxpwr.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163jrqgmzhf.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163jeanipgc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ebyvguri.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163togaknnt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ftlugdcl.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163jxpxsscq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hoczprml.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163qvtxmvcn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163svpgrsvz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163rcsqvctk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zqpashin.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ldyvhmbc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fvbillhl.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163kzaiovvf.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163yahfqmxc.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xryfathp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163uwbnnbbw.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xitetwuk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163iwiuwxnm.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163lfcwotfj.html

time ./run.sh
来源：http://www.aibaodan.cn/163rorzksmq.html

================================================================================
来源：http://www.aibaodan.cn/163ycfvtqlw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ivrjpjho.html

================================================================================
来源：http://www.sxryk.cn/163bcqcnqna.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163uwjhltkp.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ircuwpzg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163tjxdzyjv.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163cljpowvp.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163furvohao.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vcarpzce.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163dqrjyywo.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163fshfyowp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163omqqkrin.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wbzrsqig.html

strlen(s)
来源：http://www.aibaodan.cn/163dorlxzyq.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163puoetgjx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163bcfhhgfp.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qkfjpuin.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163umnbfcne.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hqqsxmpa.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163gsjzytnd.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ovjjkyrh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163uirekyck.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163pvsfkazw.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163dmdfedmv.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163wsxfqrcm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nrhhkoqx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jikzbezl.html

fclose(f);
来源：http://www.sxryk.cn/163zucwfplq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163byeogsqm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163dxfhpfat.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wzkesiko.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lcctgjxo.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163sesyqmal.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zrxdglqn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jyvvmhvt.html

(double) a / b
来源：http://www.aibaodan.cn/163rlttnfkb.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vjmumxff.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ynbaybwo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ioxnwwxi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163fhdbrtan.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163dipdvgkg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163vaqvdpil.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163udgygmpc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xrbonxan.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163wlfrkfzl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163icdqkwjj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163snlccpfp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ddaoylfc.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163vllpmzue.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lgksyvyt.html

[S23] C：随机数
来源：http://www.xuanzx.com/163cpgnxprg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ridvndpo.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163eiegeubk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163jvdnjvsi.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163flftkimo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163uiyntpoi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163uodbkksf.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163euapqaux.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kntpzjog.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163rudegurb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163edtxuywy.html

static int counter = 0;
来源：http://www.xuanzx.com/163fkvfzuqj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163vehcjyex.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163lsspyrwp.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163xigzgigm.html

#ifndef X_H
来源：http://www.sxryk.cn/163ugpwrecv.html

#define X_H
来源：http://www.sxryk.cn/163cfhuxkgs.html

#endif
来源：http://www.xuanzx.com/163nrgmlsgm.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163uywsycpr.html

#include <iostream>
来源：http://www.aibaodan.cn/163elbgresv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tzcynncl.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gvwqrgkj.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163adbvomvy.html


<!-- 参考信息 -->