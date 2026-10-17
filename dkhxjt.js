外链999!wailian999！

[Q65] 回滚事务
来源：http://www.xuanzx.com/163oknisdag.html

ROLLBACK;
来源：http://www.aibaodan.cn/163qvhsycpg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163lzghypia.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hbrhtelc.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xjjfbfio.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163cfsuqvdv.html

[Q68] 保存点
来源：http://www.xuanzx.com/163idlcsqry.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163egjcpcty.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163vjhkpkxe.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163nepxipmx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rfkjagko.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163uvkihogs.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163jdrecxhc.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163aumgaxxu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ymawlzum.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163huffljcc.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163eyfmyavq.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ooxzagcr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163pzteucux.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163jjsrttts.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163iwzilwaw.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jrlfkpiw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163evmgyzqa.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ftnxfzev.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163mzzsgryd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ztotffra.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163hmwcjrfm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163evgwmeai.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163fvkvkvpw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hztadpwo.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163npymmnoc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163sxxckqrj.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163imjdtyca.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163wrrtvygw.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163bsokjwet.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163nekmuaws.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163vbarwcej.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163jpxnsrjv.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163siqmznqz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163vtvmdeam.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163sjizyahq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163epdroqvr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163wthrleyy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163cxnndesg.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163yrbqhvma.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ptvqrlqp.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163dxmbcgvr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163trpjtqbg.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163inepukio.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kndimqnv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163anmwwjfy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163eaudddmj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wlxmpwuv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ggtwismi.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163mceyjypf.html

================================================================================
来源：http://www.aibaodan.cn/163kjmafgyn.html

R. Bash 专题
来源：http://www.sxryk.cn/163vgpaglpl.html

================================================================================
来源：http://www.aibaodan.cn/163qjxqkyae.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vyyypuka.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ioqkxbkf.html

set -euo pipefail
来源：http://www.sxryk.cn/163cfkhdxjy.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ghhwgdev.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163aetimzkn.html

[R03] 只读变量
来源：http://www.sxryk.cn/163rhnykbdz.html

readonly PI=3.14
来源：http://www.xuanzx.com/163lmsnvcih.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163vtrepxhq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163alogbfwb.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163oeagxouu.html

name="${1:-default}"
来源：http://www.sxryk.cn/163cmjmlwxg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163syfndoiw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163dnwfbdcj.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163luovvijg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ulvhlybp.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163tmhcpnwg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163dhtrrlqz.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163qajwohlk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gxvtusfa.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163poihncrv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kcltalto.html

[R11] case 多分支
来源：http://www.xuanzx.com/163relznoyb.html

case "$1" in
来源：http://www.sxryk.cn/163peluednw.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163oauujnyi.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163iqvcjtqb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163whsqkptv.html

esac
来源：http://www.sxryk.cn/163jshdpqev.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163tmnffvuw.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163qxzxugfs.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163gqwkfcdj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163lbjmhxti.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163bslyuagk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163zbnfcduo.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ziynetpp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163lcweujmt.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163pcvsqmbb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wlcuwluk.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163swbcmifu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ztqzoqla.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163fmgtvvtx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163qhtugcqp.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163vslqvhgp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163tudbhscj.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163uchoaxwz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163hrsdjrtg.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163nydodssa.html

echo "${#s}"
来源：http://www.xuanzx.com/163sikoxyfa.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ikctawyc.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mexzgzai.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pdsqdmad.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163bshzyrme.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163cxmncwba.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163rxphsbkh.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163pykabsgu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163imrrjtyx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nueieuxt.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163plctzjcc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jdwozktb.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163trdyjvdn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qndmmxdi.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163atuxezpg.html

[R29] 定义函数
来源：http://www.xuanzx.com/163rtbcfhol.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163lcwpuwyk.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163yvzljlkd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163aetwmnhe.html

[R31] 局部变量
来源：http://www.sxryk.cn/163wariytru.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163whyyxqoc.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163vtynrxek.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163sfpxisvb.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163mcurlvhx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163kczbfabd.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jtyokjby.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zbudvfvi.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163sbvfjsvp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163zpzkfmij.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163zjqtqqbn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rcauouzp.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163nkmlinkk.html

files=$(ls -1)
来源：http://www.sxryk.cn/163zuiybnwj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163edriymey.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163yhugvrqy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163rhoegzoc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pociwtdb.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163iwrsjbqs.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163oxilvevh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gnvaklqq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163okwoswis.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163syowltpx.html

wc -l < a.txt
来源：http://www.xuanzx.com/163dwoykinc.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vjatysyd.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jhmkrkyw.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163gsiewzhh.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163jysgmett.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163umqjxhov.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163wgwaeirz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zdhngcag.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163mwspmcps.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163exkyylxc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163iqmgwhpy.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ehtxfyqe.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163iaoeqxmn.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ndeyeafk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163snvddlvu.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vqovqbgt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163vmvigiqm.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163tdxnmsxf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163qplrbcbl.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mpgcdvkn.html

wc -l a.txt
来源：http://www.sxryk.cn/163bzarrboy.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163bfztgpix.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163yvmjsadi.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163sbbkfqqf.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163joflxaxh.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163tybffsmz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ryvigvum.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163yltvjrwk.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163vpurfipd.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qpsdkdqu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163cazcklta.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163osvfqicf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163qkkpmisy.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163xnwkuugt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ibfgtoya.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163himmmabb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163vzgoqkyx.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163jpefezzk.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163xsjeilhg.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163iurhmwje.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163xuinqglv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163batlmcka.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163zdvuiyjh.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vvfiegkg.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163gekxhnzf.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163eospcuhx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163haeoaezp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163mevawljx.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163unokwjre.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163yuaptnxi.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163zbcgcnhk.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163fftczxma.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163tnvslutj.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mggolugg.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163qkuybldy.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163loyrvwad.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163fkkkgtyv.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tqhonxuf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zplyjxdg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163imrospep.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163cyljvdic.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163trjfktuz.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163uljyxepe.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163pywbrmsd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163brlppain.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163eiuiwlfr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163tzqhkfbd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ryopjtmf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rvlwtbbf.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163hbzdpjql.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wetitnde.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163djyhvduy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163tkqfpuyn.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163hseclezn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163exfneejv.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pvrvnyiz.html

time ./run.sh
来源：http://www.aibaodan.cn/163ukxmgtul.html

================================================================================
来源：http://www.aibaodan.cn/163wxaximja.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hrykdmqw.html

================================================================================
来源：http://www.sxryk.cn/163hlyfzzxg.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163dbxxtcua.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163fvtixajd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163mohwdfjn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163fpltdnth.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163pfssabio.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ckoiyjia.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163sitxnpuq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163tmwtadit.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163hmecnrkv.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163yqlgxvtq.html

strlen(s)
来源：http://www.aibaodan.cn/163iqytuyyf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163butdwgnp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pcxtvvhj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163iafmrpkx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163yggwzpki.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163nsrpiwnx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163hfzugqcf.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qlnebnqp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163tkpbiulk.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ottfsujc.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ohouplcd.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163xktzdohk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163mlxkumtp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jdsxgubi.html

fclose(f);
来源：http://www.aibaodan.cn/163kjnbckdg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163bqklvnha.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163xwgzvziu.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ldxvuoly.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163stghgcdh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163yjyxwidr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163kfjmaros.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163chaiaela.html

(double) a / b
来源：http://www.sxryk.cn/163wavwccvr.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163muepjbtk.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ympoblft.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163vouiabws.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163arhbmvfo.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163vofhxgjc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163shjnnmbw.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163mbyvypkq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hlyugbku.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jleobpmr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bkexgctw.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163nzrcsizy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qamjdgud.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163sgkmshhz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kpexgqvy.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163bylreawi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cyuigxrf.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163naostjdm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163dmasddwe.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163rrueffxp.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gtafphqv.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163awgjjmgq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163dmmktqnw.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163jlgvrehy.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cpdrpqwu.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163fmgnzilc.html

static int counter = 0;
来源：http://www.aibaodan.cn/163zibckehp.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163bnpyfptc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163mzamkhvb.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nvmizpdm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163fozyjadg.html

#define X_H
来源：http://www.aibaodan.cn/163obnmqtoh.html

#endif
来源：http://www.xuanzx.com/163skzvtmwh.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xtmsdpem.html

#include <iostream>
来源：http://www.xuanzx.com/163zrnwsekk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xgqnsiqw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163snovqeus.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ksamefvm.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163chcfqsqk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163eutmhypm.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163sdulhjze.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163nsjepfbd.html


<!-- 参考信息 -->