外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163eyictniv.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163mmzrshah.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163plqhytre.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163wdpstnup.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163mennwkgi.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bpayvudk.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163dupqeasg.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163eorurlbc.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ssfdavjp.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163kicjsuld.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163galxguwp.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163wlovsjuw.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163xaxwpulr.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163hxpvhajw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163ihtyeide.html

[A17] 位运算
来源：http://www.sxryk.cn/163tobmrpiz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yslafwnk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163sqjosmks.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vptjirya.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163anwadptp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tlfjlony.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zvctewcl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lbvyxsrs.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dormbrgg.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ixhlnnuu.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lydbiqiv.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163pbsmrjdu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163vjquhljj.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163xdmxkfhu.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163ifdnrqbv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ytuvgctg.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163uwoipfxh.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qexhnqzw.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163nwaqtwho.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163tjvpcxau.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163dalfmuif.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163anylmoem.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163imcgibte.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163ygzwxknh.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163esavwbeu.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163gvbhctbx.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163vgpzmqnu.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163lepqbrmn.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163qegvqfou.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163xsbbnypk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163fsbvmsqc.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163hokqtnca.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163pajrwait.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163lurhhdez.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ifsubydw.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163kthnbgpg.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163rqbaepsq.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163jmtocavm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dnjmwipf.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163kafpocae.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163kgnskypu.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163myatyjcz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163srygalba.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163msglclei.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163xwwceyyj.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163xvwbgfnf.html

Py:   len(s)
来源：http://www.xuanzx.com/163azaubutl.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163fvyihoqz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163wkkyrqtn.html

TS:   s.length
来源：http://www.xuanzx.com/163kxjngdnd.html

Java: s.length()
来源：http://www.aibaodan.cn/163kfbdxizr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163isrydhlj.html

Ruby: s.length
来源：http://www.sxryk.cn/163pqhbqjhi.html

C#:   s.Length
来源：http://www.aibaodan.cn/163ceugtniw.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163trufauoe.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163rctbxnaw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163stdsbrwn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163prbzzhib.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163srnrgpey.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lnjcwxyg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163tjfhcdrj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163pzdiajww.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163okskcozz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163avctalbq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163mtwovljt.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163qpffvcbm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163zsizgqea.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163arfhtvlk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163dnuzpkbn.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163dulasdiw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163rmxtcqpt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163effzmrea.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jtsdadzr.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163soiponxb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163smdsyoya.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jrcepfvd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jwvmgzll.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163bkjvswwp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163adjyujpk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163slhmrwcf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163mqkbozwh.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163wqexflfl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bryymwuq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xscxcrya.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163togbsqor.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ltamwuvw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163sdkkeent.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163voaackpm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163xlllwbcq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163qufppzvi.html

================================================================================
来源：http://www.xuanzx.com/163dqkknmje.html

B. 流程控制
来源：http://www.xuanzx.com/163eeiqjlhz.html

================================================================================
来源：http://www.aibaodan.cn/163cabkkcko.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hbtydvdh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163nwkxrofk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163jlotvmho.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nklozsix.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yhpxadxb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tgwtxfzj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163dgqkdjmd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ljxzjzhw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pfoqnxdf.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163sfylsgte.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163qmqyfsfn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163sfdcmxyw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163maszsoad.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uxlzegze.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nsahifrj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163nbswjeec.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163nelcsmhz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hluzdifc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163rlsuqizx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163hiozkgjk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ficjhfrt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163uqtsgpqa.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nxxezmlj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163dulvvsqn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163opkzzbzs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hlbspmzb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163jcpowkin.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163kfzzfcur.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163uglyglzw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163lsrtyrvs.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wccunfga.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qcebhajp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163kzpcequt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163apqxtuaf.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163rajbuqjq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163pssltnmk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163hoopfrsd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163tbjgcdno.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163mqlhydov.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zvcwmcyl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nmvocqpf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163rekhibbc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163tcdfznwe.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163uzexshjg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163mjnnbkaf.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163kuroiszu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163flykbaoe.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163nlmeomel.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zvgygues.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ykjltrvr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163khxcowsm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163tgzcezth.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wxibaoav.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dcgmrolq.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ipuvrvpm.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163slhcmmsb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163azvaklgu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kigtfloo.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vklpwegy.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163asvcoqcc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163twqpbuap.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163kuszpyda.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163erfftlcx.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rzvthuwv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wryrrdij.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163hulytsrb.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kkqhvaor.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lbahgwef.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gykhdsyl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ltpacofq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163resgpkrd.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163aztwilil.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163dyqjmecn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163getjdgbz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163sctpjrsf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gvzzfctc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xkwzbhog.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gcjwtemd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163wgczyxxu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tbgflkco.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dlsjrcad.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163yqlewevt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lzqkcuiv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163lxtavfec.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163khccrqgr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163sdfuwido.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163mtkwdguq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163lpyqjrgh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163speobydd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163clzyerpq.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163qcrvnvak.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163uofoooyr.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163rpmuedso.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163imdnpjmk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ndeqaswz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zkuazqzc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163fsppnrlk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163xcqbxqyf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163xbqodpgq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xthnspbo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163zoruqpgs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163opizvziq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kjgnkkku.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ednbpwus.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nygajsdb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163utsmfvlt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ymxbinon.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163msrepuon.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tupnpaiz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163xzfrndwk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ujncxrmb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hleuqssd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kwybjcpo.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163qvqjqlzl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163xtgiwmgo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xoansuhf.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163uryceeyq.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163azwjvymc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163wsfbxjai.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163yhwpohbd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hsgzthot.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tsmczocv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163qxtifidq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163fnxctfce.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163fpuoywpt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163spvbgien.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163eugbjmfw.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ubdxsnef.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163jaqnggpe.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163msxinvmh.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ffqxrknr.html

Java: a && b || !c
来源：http://www.xuanzx.com/163fwzbcefg.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163fkradtoa.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163iqfmwtpw.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163iapuowuh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163xhyeriop.html

Py:   if not data: return
来源：http://www.xuanzx.com/163vwadkjze.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qnmxyvzn.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163anzomfne.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163buedicaj.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163tonidqlf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rjnotnxj.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163arwhkbyq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zeqlvuza.html

================================================================================
来源：http://www.aibaodan.cn/163rcusyxmo.html

C. 函数与作用域
来源：http://www.xuanzx.com/163wrkrtknf.html

================================================================================
来源：http://www.sxryk.cn/163hkagaqux.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qjyxgzph.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163euroqnos.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163odhxpvsx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ynrqasbn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ugluikaa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ninpasar.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163scnctwal.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163mbzeiuoa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fygvycea.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163jdxatjvj.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vyzbyjze.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163udbcpqsw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yuifyhbw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163khmxiufg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163tvtaegix.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163bonpxtqa.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nthcuskz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nklkiqhd.html

[C03] 可变参数
来源：http://www.xuanzx.com/163fdiptaeh.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zxgiufqt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163hspptwfh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mavklfnv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163sffewjxv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pidzkfpb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163yenuvkbe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163mtlkttjw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163yyafdrtz.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dmlzwsaq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ryunngpb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163opgchcnp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163fhaelyzl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163izqaamzl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163rclkdvpd.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163nfofgwtz.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lomatjac.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lgejdnnf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xhbpjtfa.html

Py:   return a, b
来源：http://www.aibaodan.cn/163agypnbpw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163aaxwymtb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163emdvoftm.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163gunlsagf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163sfprlege.html

Go:   return a, b
来源：http://www.aibaodan.cn/163dhdashbs.html

Ruby: return a, b
来源：http://www.sxryk.cn/163pbfphmhx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163vhxltbde.html


<!-- 参考信息 -->