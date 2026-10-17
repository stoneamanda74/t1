外链999!wailian999！

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163poyisvgu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163vavobmjq.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163pbxtpfaz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163sfordhtk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163scxfhbeq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163cfepxrtz.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163xsxecssi.html

[A17] 位运算
来源：http://www.aibaodan.cn/163hdbaeuxr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xppwdapi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163wlxzxkkv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yazoizqc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163heqkltqi.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fdiovfio.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kbpqxfji.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mpzcgggs.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gvzbguij.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163iaaodilv.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163aoboqbgh.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163vpuvnths.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dwbddrge.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163jgafsgfa.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163lfyhcrhl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163brumlhzs.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163hrjneldv.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163koyegyby.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163tjgypmiw.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163mvsnhscv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163orylfnfl.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ybtzpbhi.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163rzesmdud.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163txaisqqv.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163dkttpfet.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163kxfnknai.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163lpxlqodl.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163llnbcgpc.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163anuepusj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163pszropxl.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163xsdyuyis.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163wfdqpdtj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163amftjhhh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163latdzqpp.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163bieejjop.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163cjewcvoj.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163npzvmbbk.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163lsguldzb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ipptpowh.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163tbopabwa.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163wihfnkci.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wdykzsre.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163grzwslfq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vltediax.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163gozmnvsn.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163xzhrkkuj.html

Py:   len(s)
来源：http://www.aibaodan.cn/163bivrnvpj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163fzxsljwg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163kvhnrzcm.html

TS:   s.length
来源：http://www.aibaodan.cn/163skuzwgai.html

Java: s.length()
来源：http://www.sxryk.cn/163ioqalggj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163iqpcthkd.html

Ruby: s.length
来源：http://www.sxryk.cn/163rpcngfmc.html

C#:   s.Length
来源：http://www.aibaodan.cn/163pvayabgl.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163vhjbdiai.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163cyjmkboh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163lfvskrdi.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163oyswepqi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163cnldvogn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163akaeumoa.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163zcafbuge.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163cafhscbx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163faohssum.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163lmhnivbw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163khtqukue.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163tzwazhow.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163zeoyifwa.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163okcnvrzr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163fhnibfif.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ompplefk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ihynbtfa.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163bumutmtq.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163llpwolwz.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163bxpaalac.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163nqykdivi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163cbbehgvm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fivnwhjz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163xhhlnsjt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163hymabhax.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163qfdgdtjz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163tzlnakgk.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163bkzjjwvw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163aruzfjjk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163gdctfosr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163tdmybwcv.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163nwzmpcgz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163qhdplxje.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163zjixqjeh.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163dupykxxk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163onsuqrzg.html

================================================================================
来源：http://www.xuanzx.com/163xtrejmep.html

B. 流程控制
来源：http://www.aibaodan.cn/163fsbqipxw.html

================================================================================
来源：http://www.xuanzx.com/163hcmaepay.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hyhyctvd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163fdvdrbfv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163trjwjkyn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vwecxqyj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pcmyzwgp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zclwzqix.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163jwiavnbw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ciqfbpfg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jbystvsw.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163sihcpesy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ccibhxwg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ccwtfvhm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bapusitp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vmhxrjrh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cqaolnxu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163olvonucs.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163jantipda.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163roskcvwf.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163yhycagxp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163egyssufq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ootnudoc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163pgsktwtk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163oukvluoz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163uguzsave.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163cxaeepvf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hegumqtr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163opyralvu.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lrowbmox.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163nqecjqou.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163pbghasfq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rkidndap.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tyngvfal.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163wtkqgqan.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163uqnvgswv.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163pvuzhmea.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163helchmub.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163wchbctti.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163qcrmxlru.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163okarrarf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wgogjdca.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bafskyyi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163yzhzxpof.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163vvoikwvo.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163xdsdpklc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163laqcxage.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163sdvpoonr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ranpirre.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163bmpxkpxx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hhgaldxf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mbwpveis.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163wyutmnth.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163nsisuekt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163vgmnyolo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163gnksvybc.html

[B07] while 循环
来源：http://www.sxryk.cn/163fjubtroi.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163uujdkkrt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163pfpxxpjz.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lsgqgmuw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zbeugnch.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xodoiwbk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163tmamrxxd.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163wfjfyyfo.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vjrnzsqc.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163vsrdzcrs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bzphikst.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163genndaii.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kzwshaot.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wbjiuzsh.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163oqpjhchv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163maklykmt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163hzlgfkjr.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163srzpbvqq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163vqhcidcw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vupbqfzs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163txkwmgzh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163taklbbtk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tjuuqpqi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163evvfpzyc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163gemsetwz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163wbaoqghh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lwybgmfb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163xnjvuoik.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kaqorkvy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163zzlqyysc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ekcawlxr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163gjpkpbjg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ywnetrhx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163cqiexumt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163fhiygwvv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163mzyaoklo.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163exmxjrkc.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163rswolysf.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163bvcxgtyd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bztcfkez.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ugadkgpp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ycxglosv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kyucrpix.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163cctrzpbd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zkqjkpvb.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163lfsbwxko.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163owsnwofh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dgjsedwf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xcnswess.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kbluotea.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ydrzmjuj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163drvfilgg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163sdyimovg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ifaczltq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163qepjwefn.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163chnmdslj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163cmhyicte.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gytpyxtn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yctimuon.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163btdhpurv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163mhiyjqoe.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dectqxzv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163pwgumtvu.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163jknexkip.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163javzhnfy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ejcuclln.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hyugnipt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nxxgddsj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163hpdpwvas.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163fblwjglm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qusxsncg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163bldqocfi.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163dopspllm.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163vqoaiydp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163frfemvbr.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163izhfvwyv.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163bieycjdl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cowvrxbu.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163yfgvmmga.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jodjhhts.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163makmynrg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163agxsadbh.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lknspgug.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wjskafzs.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163mirsoblv.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163etyjcmxe.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xqlywwbm.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163yixjikoc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163bbqsesly.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wcuenztu.html

================================================================================
来源：http://www.xuanzx.com/163dwleterw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163buiqhfdm.html

================================================================================
来源：http://www.xuanzx.com/163yizimhqb.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ijehjoge.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jpldndkv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ynxgklas.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xhvaqvls.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tjsapghn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kjezjepx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163hgfgtnis.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163nqdyvdzq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lafbzyvr.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163edpnjrji.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163apuekjcy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163sthmgtgt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ijxutnyn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ojbrufib.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163zqgrpvxw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163bfvyimgg.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tgtkdwoa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163urmmqljk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163fhmmzxnb.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ijrjtjtq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163deoanzop.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xjvypnlh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pzpgthog.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163idvjgbxi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163froyeqhl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163acabkbjk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163hyzjkadb.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gnglhzza.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163qufxftsm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163kzumccnm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163oawhfpzl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ryhaiibh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163zpumryhw.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163kymearhk.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ibyajcxy.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zgfpkies.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xihizwsi.html

Py:   return a, b
来源：http://www.xuanzx.com/163kblgwgwz.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fohkujkg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163nhiweexc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163rmyfmkhb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ouumvwza.html

Go:   return a, b
来源：http://www.xuanzx.com/163qbxnmmvq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fmdkssoa.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163sxvvpwgk.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163slidmmsg.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163fiyephiu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163tounxgev.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ssvrluwx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163gmgkdtwc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163lisajzum.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163xkwecieq.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163tbihidqs.html


<!-- 参考信息 -->