外链999!wailian999！

[A14] 注释写法
来源：http://www.aibaodan.cn/163crkcjoql.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163zytjshbi.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ccmaolsv.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kaypyric.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zlplvjiy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163gvrgrtth.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jdjqrddw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163mxedvovv.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163dcgfusxl.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163kbvuhafd.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163qsbvyfow.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163joqagutp.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163msznaril.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163cgyekmnf.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163jrswppvo.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163cgxnrmkp.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163cryftasj.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163vauxoqct.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ggqwhnih.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163quayevmq.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163uvokikrx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ixogqoym.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163uphtzesm.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163lfncnqjg.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ajnbogsk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163rqozytjw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163dcwxzkiw.html

[A17] 位运算
来源：http://www.sxryk.cn/163ggkxfljb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163sklnyekz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163pbsjhtai.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nregjhqs.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bddxnwsj.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pxeqhmsg.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eodfainu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163entrlgio.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rofwjvvz.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163rqjpaxel.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163hxzpiiyd.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163prjslyok.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ieivmnkr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163bhqvyhbq.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163dxohnsvg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ywpcobnh.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163phclkcax.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163fzzgrmbk.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163jkjmjbrf.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163obhswblm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163oydnskww.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163lphapngn.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163swbghrsq.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163joeslvor.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163nzahtsvc.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163yexkgmtz.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163dpgtjwfj.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163seglumym.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ncmjkdew.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163ypzubahk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163blriwoas.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163lflnnklm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163guzszxyv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163pktbrzni.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163jjeznejy.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163woxkcbnr.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ssztvsev.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ejtwrtlt.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pfsblipa.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163nznegdup.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uciyonac.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vtzitcmd.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xbdwtlxm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tdrmgawr.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163iefeilbv.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163nqnhrwtm.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ffyoqebx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163bwmbsune.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163potfdwvx.html

TS:   s.length
来源：http://www.xuanzx.com/163qhdgocpx.html

Java: s.length()
来源：http://www.xuanzx.com/163cqdyxhnm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163tixeqrkb.html

Ruby: s.length
来源：http://www.sxryk.cn/163qoymcccb.html

C#:   s.Length
来源：http://www.aibaodan.cn/163tetcekur.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163kkzdocoq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163rmxuhpco.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163pfuffbzz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tlfmwiba.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bnznqgaw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tnhfzurt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ljvftltv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163itmthldk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163mebemrvc.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163qwelqvlp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163yspnlmjq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ogmdmhzz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ulgnlkaj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163bcpznthg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163xtxsbzgc.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163zyilevqg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163tybamkrl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163iohfoxjw.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163yhrxtmhx.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163qwmfsktf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163hobawczq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163xwawzehw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163txsjbkvi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163efuavidv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jweytriy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163bjlmctgp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163adbchxdz.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rjjxwltk.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bwbgveqt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163hmlcdmqn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163nwolqpma.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163olnxvgcr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ttpdiird.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163vzsnxevi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163hjpheama.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163lmiuyemt.html

================================================================================
来源：http://www.aibaodan.cn/163vwgbqspz.html

B. 流程控制
来源：http://www.sxryk.cn/163rqjixszb.html

================================================================================
来源：http://www.aibaodan.cn/163zxjavokq.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163spdzdpfd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163yeyectcb.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163tgymuqjj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vbnbtfnc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163chtprawd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tsowrglh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163gmnngyat.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163fyfgwrjo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ftvqrlsx.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163chpvslxr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163rwqslmus.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163jqkvfjqd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163loajbfgb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163csndknrh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bbvmhgzu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163wscrhndg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163hegtcenz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xwrsboxx.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163qsxppqzj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163rsctvcrd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163mucmfntd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rzqumkyn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lukqbqcg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163lrnsppbg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163wapsgklc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163hukejgrd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163sawbsszh.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163scmrlvox.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163acmwpxtt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163feymppwr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cryctovd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lezbtbqx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163qvdfogvd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163tvsmvqqk.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163epcjxeav.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163icshkvia.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163jnbtonkt.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163gprjiozq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163thggqcjt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163tmqagccn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163twvukvpi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163frhsrmlg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163tllivjcb.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163okmfmobw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163gyzpeood.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163sronhwvp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ssafuswj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163wxscdrxp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yfxpxeap.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vpbxctgi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163orjqbhjo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163glbcvyti.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ykguaxot.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163awziremr.html

[B07] while 循环
来源：http://www.xuanzx.com/163tkdxkxro.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163iwaxseda.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163tsmnsxmz.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gryrtebw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pksctcwb.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qccbgihr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163hybyxxca.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163tklkwpjv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pgwxxywd.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ogaoesmr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163pyojuprs.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163wajvnlis.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163aykxqhia.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vryuqbvd.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vpqwlfmc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vffmnhdi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163kslzrfwc.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oaymcika.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163wlbkoqhz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ucqarmkb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163mhugatus.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163smcftevw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ugvkiqut.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sxrpnnqu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163loozocks.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163rhyfdndg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fxogbdpa.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jpnfmyns.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xvuftbgx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163zibkvlcx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163zqjfgeif.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163tapmotxq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163krzfokny.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163jbrcvsex.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163yimwyfsj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ojrvwxun.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163iptckmiu.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163owencxpd.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ibfdqnhs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163unefmbzt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wlfhykwo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ucpfugjx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163olrhhobl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163lqqtpusi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163lakprnle.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hiiitltr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jwreecmh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163olkvgxgf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163supfmsoo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pusemxhe.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xfujzsnq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ejcndyug.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163wvrlxksy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mfdbacwo.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kaehxccs.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163bmdcpcdc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163sjrwyjyn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yjvwokkx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hnuwmdmt.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163usyaivpc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ancltzma.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ccvyjpoy.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163avqpbell.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rlqnztua.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xcnnflkt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163wtkvgemo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xkecckic.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xovzdkhd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163siblqpaq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163nwbssmop.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163rmighzoo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ckgkxqfl.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wetluexi.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jpqszzxe.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163eolffwnu.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xnpnwesn.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kbczsrjn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163hudwyrbv.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163sgbdkmxr.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163zgxhhaqj.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163nmlzydqr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ubkcxzeu.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tjydrkvo.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163bixduyxc.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xojkkljt.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163acaiufrr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163rqgufuoo.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163iheaanfw.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hxxbuytt.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ssdjhnrl.html

================================================================================
来源：http://www.sxryk.cn/163awjkwarj.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lmoulbce.html

================================================================================
来源：http://www.aibaodan.cn/163qtfpvhkb.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163yjgfrbxu.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jmpquvqp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rjfxszao.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xnfcwyma.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mrnzmwjf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xcmwwnfz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rngczwqx.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163rcuhojwk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163axpwiunl.html

[C02] 默认参数
来源：http://www.xuanzx.com/163acebhzdu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163alvcwikv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163fwqndtoj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163xjjoettl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pfxzdhsm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163txtuhhlb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vauurcny.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nsdwmabj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163acbnljor.html

[C03] 可变参数
来源：http://www.xuanzx.com/163hcisfedj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bsvhmhvn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163uubjzgtz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163shizevld.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tdhjhyhl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zzvuamnd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kpwyjfvw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163kvdetbmw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rjdexfdx.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163lafgxxzg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163vxfsbkco.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163tfjsdcun.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163sdbkretc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qieyuiey.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163lmmutlox.html


<!-- 参考信息 -->