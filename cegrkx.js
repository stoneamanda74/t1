外链999!wailian999！

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163dkjojcwu.html

TS:   String(42)
来源：http://www.xuanzx.com/163vhzkdfwp.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163axhqauat.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163idcflywv.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ygcnigrf.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ljpymnua.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163tibfdoqd.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163jfqmgype.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163nxdntavw.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163yhqauerx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163kujyjnak.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163jlxnbubn.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163zpebdmew.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163tzsapswm.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163rhdcpqju.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163jqbshkqi.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163dzywiwxt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mrigdylf.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163smloekkb.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163tahngolz.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ognzgodn.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163qxxnbpzi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163htrerplu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163oebhlwth.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163bqaeuebp.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163nmeakmve.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163wftjymlf.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163jjhkwkmt.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163gqozynez.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163jvihssvx.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ehvtuabr.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163npoaxree.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163zdgutkji.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163cdnxjwuw.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163stvprctk.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zoqhamet.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xydtdbvk.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163aoslqucr.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163axepyubz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163kafyqzlq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163phqxcbtb.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ousbodrw.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163sdptgoxa.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163agsjlixd.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163kwmzfsxx.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163gmxuigtj.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163mjyarsnh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163httydbyr.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163ejrgzdtm.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163mqtjwvpv.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163jbixbmvw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163rvbcenbz.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tnusfhgr.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163kwvmulbn.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ikmkowej.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vjpncmun.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163qletvoyc.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tcexrecx.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163twhwloab.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tzvehvwy.html

[A14] 注释写法
来源：http://www.sxryk.cn/163bzxajltt.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163brfxjyzj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163afgtjfmy.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lkamygyg.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bejmwhwf.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163bvrovqnv.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hxpafnyq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163xypbuamu.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163uyaiozvs.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163bcpqlwty.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163kujpxvrc.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163idpfuhtz.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163iojijcab.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163xdnrhdqv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163xfmejhju.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163delkjkyb.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163hqqxchyr.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163krrtlqun.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163biuipumq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163kqyjafve.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163hdsvrxwb.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ayixckxb.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163xjwirxsy.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163wbkpvakd.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163yldhdidt.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163fdntyggt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163klbfbvhq.html

[A17] 位运算
来源：http://www.aibaodan.cn/163wnejunzo.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ksydkhkd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163lionsoqp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jcfpjrni.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tfbbwwzy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ijorgihq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163avjonwbw.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ebghduyj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ehjxrhbf.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163chvgcvee.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163bittookl.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dppecsdn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163vhkjluvr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163rfzunoje.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163aeehcmcy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163mznnlydy.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ndnvwnqy.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163vqujkeup.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163cxjdxgrg.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163qdlllqlr.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163xdtxxzsk.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163zryhruns.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wpjagbjq.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163pqngcphy.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163uoinpxqn.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163jcvfnqjh.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163dkzxtxei.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ditlkzcf.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163jyurcser.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163egczsgon.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163hhhkzdsv.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163hhylapze.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163cslfxnhn.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163zkqiudud.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163dpgasmtr.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163rlwbsjdr.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163akpimvhr.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163wlrwscpo.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ygumiwri.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vzqbzgsf.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163gvmfmtku.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ttgqclqk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xcznugeo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fqxnpqjg.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163jcjsunkm.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163xlvedpuo.html

Py:   len(s)
来源：http://www.xuanzx.com/163zsgalugx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163umupnfjl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163bwueevle.html

TS:   s.length
来源：http://www.xuanzx.com/163trupnuaz.html

Java: s.length()
来源：http://www.xuanzx.com/163zdxnbcph.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163iunwgllx.html

Ruby: s.length
来源：http://www.sxryk.cn/163aoglggdl.html

C#:   s.Length
来源：http://www.xuanzx.com/163abkhxjzs.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163soysxjay.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163zbsndwrn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163tltkuuwf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163iizgqbxf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wqnxojrj.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xaeoynms.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163iyayklwb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163nfmhhlwb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163dlbeqglm.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163tncqdptr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163xliygugd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163axpxhpfv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ydcqlpxh.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hryuiwic.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163xebnxmiq.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163gkujijfy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163yhomhlvv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163sxeiheda.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ikyeuutt.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163utklyktv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163eblkaqne.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163yokbszmq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163esnpuezx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163vewsaufr.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163dcsbomeu.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163fxkqzhnk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163clejznpo.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163zviiqabh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163lkpagcvs.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163sbnbupcj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163bkjkbvmv.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163mqlcsnxn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163nzsgqbrq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163elezbona.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163jrutbzkj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fehjfsgt.html

================================================================================
来源：http://www.sxryk.cn/163opjizpit.html

B. 流程控制
来源：http://www.aibaodan.cn/163bicrkjug.html

================================================================================
来源：http://www.sxryk.cn/163ndeexeyz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163sqtvogzj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163yjeagejv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163mbjdgivg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nsxekgoi.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ejjqrpbl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yebiysup.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163wenxoiwi.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163etmribqd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oscgmkef.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xudcmesc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ohsdbvyz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163oyuycxwd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163iqoyduqk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xyczguzz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163djotsput.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163irqqbauz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ovhnqxmr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wjgtxfeq.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163vrfhytus.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163fjtcsaam.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163bmatxdnb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hmsyxacf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163drwqcyzi.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163yfskawua.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163upjyhgnx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163iydsagyv.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163rgiuskmw.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163otzadtas.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163kzjkkcfo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163zgoijcsk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zrvmapbx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163aawqzcrb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163difilwvo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163bqgerygt.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163kjfydbil.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163dmsurhgz.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163hcmapnid.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vvbbyoss.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163slvtqqei.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fgjbvstw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cngfsruj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163tfddiklh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163vttawriz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163zjgdxope.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hfmxqyqj.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163oejyjalo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163dhyewllb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tvscywoc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mkkshtqv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yhxcdvhi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163arllkadk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163soumbqoi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hveyejwd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rznihclz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163kfxbzimg.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fwtcocbp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163bwlrnuud.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wjxzysah.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vgxcwpxd.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163impywefv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163iznakmcy.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jkqclrvz.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jmltxlmr.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163kamczypu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ixaroybm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163gpndkosw.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vablbzkt.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163supoqkbn.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ohbismsv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163znamjpze.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ecjbvknz.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ikenzblx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163brpykbum.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163soqtbowe.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163tigqbmji.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163meqgcsat.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163okjlelpp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uinynbih.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xmdppgpp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pfsnzuyu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bqrfmqpn.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163gzpzepqe.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163gukmjjjx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163fqicezcd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163helabwql.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163thgaiwhh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163uysehuda.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163zenmfcxv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163vgbkvlqh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ubmvwwlo.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163kdamcozh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163tafahvnp.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163zgpybsad.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qhstrudz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xqsfsbwb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zwyfjydj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163oqlifcty.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163desknwvv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163tltsvhem.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163hqkupacl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163cvmivbci.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163maefnulf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tijywpvq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mpuqlhne.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ymyvhyxq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163rsqoabnj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163iuiyyrct.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rfvhygrx.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163lndopusb.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163gwdsdkvi.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163duyewcwb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163muapaepx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dafyasol.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163zltilstx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vfxrdbxi.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163tsckvyxe.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163pqufbfyh.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ltscdmta.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163pbbziktv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ukeqypwi.html


<!-- 参考信息 -->