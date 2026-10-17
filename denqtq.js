外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jpdcqcjm.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163zwypzyax.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163hmguhmus.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163onmsivfz.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xujceqlg.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163mzzcawja.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163vlgihwdt.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163dladjzhc.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163yoslukrw.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163somqanql.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ytoimnvx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163mzciqfmr.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163hqrslzql.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163lzjlmqyf.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163qkhbxrme.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163rkskqvmx.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ivbnehvx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163kalvkayq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163mnlnglil.html

[A17] 位运算
来源：http://www.sxryk.cn/163rophmhjg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yglnylvz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163eokcwdge.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163iyrpewkc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163znqywygn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lswcdwmt.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kqzvcomq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tmwkegmp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lgpndtjk.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163sfwexqhq.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163rjsfftte.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163rkjgdrgt.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zzlntucp.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163fefruxvu.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163wvdgzwqg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163pjstkgzh.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163tbwmtmdw.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ngsuboam.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163xjxvrmkt.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163sqtcpznb.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163vhewsjnx.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163dngpvajm.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163nlpduxax.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163gfhrqebp.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163efdhczaz.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163fclpytmn.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163fezyornb.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163pbegtjoy.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163xgmrqnec.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163gqoiuhaa.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ryyxvmln.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163tcsuuzar.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163snutmktw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163mbixkhcw.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163vljmlyhc.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ifztaskc.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163oqizggfm.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163voohqome.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163burlntvy.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rvotdhyk.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163khlelctg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pjfhzofp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ljemnigm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uhznqibb.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163aosqucvd.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163qtoddofo.html

Py:   len(s)
来源：http://www.sxryk.cn/163kuyxtoyd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163irpjrdup.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163rxziilmb.html

TS:   s.length
来源：http://www.sxryk.cn/163rdtlwgln.html

Java: s.length()
来源：http://www.aibaodan.cn/163ssjkusrc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163zuvodsec.html

Ruby: s.length
来源：http://www.sxryk.cn/163pcmzsbkt.html

C#:   s.Length
来源：http://www.sxryk.cn/163oafamhpw.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163bsbisodr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163hxawaizl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163rjcbigqr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cexvaukr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vqzupcvc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zrfdfhnc.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163wtkqeyfx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163kezrxypz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163okjpgffh.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163cbwrxxxj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163imwbymzh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163paqhhwtj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gvlxndvx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163bvzmcwrb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hmmlqqpe.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163adututuf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163uqeullfj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xfznsyuw.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163txmdmkuz.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163hecvmkju.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163qmnqktwy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vcbohskx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163alkbhred.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163cgbhcifd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163wsmlaevq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163imnypjuv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163cmyzszjd.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163rxjcztpu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163frldlojg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163tpjtfnoi.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163tuptrxnl.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163aienouzk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163aqzybjer.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163aqphrtcn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ckzrcavd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163rlgahhri.html

================================================================================
来源：http://www.aibaodan.cn/163orcvrzws.html

B. 流程控制
来源：http://www.xuanzx.com/163zmdmpmns.html

================================================================================
来源：http://www.xuanzx.com/163ysauehnm.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ritpqdpe.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163tiliklvj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163hfdlvbql.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163olysyqxp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163itcwzlom.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iotajdyw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163hvaxrtly.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163fgpjmuan.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163myvzxocu.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163znpfczkr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163dfbhxvso.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163nceeqosn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pdlnrtyl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163epbjgjje.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ezzrpddy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163lvvrmjfc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163xiobtnbe.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yutqzqbm.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163timbslbo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lktucypu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163opgqvubj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wdfnkywp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zggwwluc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163uqbthbik.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163gikqnzmn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wahamfqa.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163wbmtgqcw.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ajkjqkdv.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163oiseoquc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163fankngcx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163yljuiuav.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ujtbysfq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163brqdbmdz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vebtmrzr.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163jflssudc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163cuteyiaj.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163qcrflwxc.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163bsyrcvzh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163hacuciwn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163argwghbv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xcllikrd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163lsapnicf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163onridvxf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163grcramcp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hszzjcpg.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xgasamzr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163hcxvyube.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163kcjffqca.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dhsxsbju.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ljgxvkdq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ghfkydom.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163wbmrrzhb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163gfhuyiuk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163sbnbfmfm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163bhdefipg.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163zihibzdi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ytfksrde.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lekajrpt.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pvwurhdb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hltkypnk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163pymbjpmh.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163xgjaqhkx.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dnsvwepy.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163idcixqol.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163kmiswlfi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163zauidiqq.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jvnnmwhx.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yywfruhl.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vmyxwzmt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163xefqgqxj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163mcluowaz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163anpgnmtb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163naheuoxy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163zyvdmrrf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163dtzuduql.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xuxekugx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163grbyukok.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oqykqfbm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qjbcgqtk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163gtlavfhj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vzwuekyk.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163zgaoqdzk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163evdchnvw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163poxevasm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163sdzhmcpy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163dkwftvrj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ihoaqqlv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163obdkrlfz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163zhmknelv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163tglyuroh.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hngwbuwa.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163yhqiedxp.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kuudokxs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ropbfybw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gqvyhohg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163rrfqmouy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163jfrxfivw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163eamkovdb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163sftrkkcd.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gwxoegxr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163hbbctzcv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163blkhflcf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nkejgkux.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ksrqgcys.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wmtcbsng.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163tjcjxpku.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gemflzcd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jqrosohf.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tysexsjy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163scekobkj.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hsdmjpdd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dlkqnsmh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163crtlktcv.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163wwlamoig.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163wfrlfcbg.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163pcycsuwz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163tyiokqra.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ndcnfqxh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163veejhgwi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163yiqprulo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163abwvrihg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rjgataqc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ekkskexv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vugxmmbc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ngyfankm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163yxcbrdhk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163rwwdivaf.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163eqomgdkp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163lzonrnlg.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163klczrqkr.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163roufvahu.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qzuecrcy.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163gpmnawvk.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163gijvvpic.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163btxskkvb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163tuxqegki.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dnqydbkg.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ldtefnyc.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ewkggbgo.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163bvgptggd.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163piyeacqi.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qthsxbsu.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rcsgxvku.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kvdoltuh.html

================================================================================
来源：http://www.aibaodan.cn/163mikfkefr.html

C. 函数与作用域
来源：http://www.xuanzx.com/163crhpptqu.html

================================================================================
来源：http://www.aibaodan.cn/163wtjypgeu.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dykzabmi.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163lpttrlxq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163efefjheg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jzksjzpm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163faqhpngd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ncevdfnj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163pleslfaw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163yptmtqqn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jmpethto.html

[C02] 默认参数
来源：http://www.sxryk.cn/163acqljddl.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wjmvggml.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163rpktvxrm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ixiswtcr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qcjwgglx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163zrfrfceq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gpnovvrk.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nctoaclf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163rdymvfue.html

[C03] 可变参数
来源：http://www.sxryk.cn/163vlkgemso.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nyqobujq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163hkvbkuty.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ywumfvgl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ffqsnlhv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163csgkragf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163khuwwdsg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163luqdhfza.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xccwgdvu.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ylsrmaje.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bqhbpahd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163wvyzggzz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ftcsolgn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163zovsfrpb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163mcmfdeuc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ukbazitd.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163djgcmfap.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mqwbjbkw.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163tjqdsrhk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ygkidsii.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ncdolwqs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ijbxifkz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163kmoohcdl.html


<!-- 参考信息 -->