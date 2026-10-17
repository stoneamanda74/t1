外链999!wailian999！

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163qifpmfqp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ezmxlmjn.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163kqvwsqvt.html

[A17] 位运算
来源：http://www.aibaodan.cn/163togakrhj.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xeblntik.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163zvvasise.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qqusnkkl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163vknwushn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lhiczmrz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vsqdgfhg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163emhkksfy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jlmqkwau.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163fbycloti.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163teekmzvk.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163qkhggmmg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163quaulixg.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163yhkgmsee.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163tuxtjvrj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163yiahtixy.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163clajdemy.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ximuwqpw.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163fiuxytdw.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163viigdhxk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163jlbrdplh.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163oumxqtgr.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163kinhqvwk.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163xphoxcyv.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163kwrorziy.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163kfimvtqt.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163hoyutcdb.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163mikryuxt.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163unwskpgo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ivjdrtlw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163vaeyskdl.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163yoxxwxmq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163ngihiqbo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163nfllynsp.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163pgdtyjyt.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163faajifyd.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163hjhjcibd.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ykmfxycj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gfccnmyl.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163oovdppaf.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ibwmojpa.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gnmktacc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gxaoxrgv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bvjgprar.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163oinkmhfk.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163kbpujlja.html

Py:   len(s)
来源：http://www.xuanzx.com/163bprkdtck.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163mcffscof.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163fjcvbqdt.html

TS:   s.length
来源：http://www.sxryk.cn/163cgbusmiv.html

Java: s.length()
来源：http://www.xuanzx.com/163eqwuuavl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163nxjamccw.html

Ruby: s.length
来源：http://www.sxryk.cn/163jmnmssrc.html

C#:   s.Length
来源：http://www.sxryk.cn/163lcxcxcjo.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163vwhifpco.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163txmeizwe.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ostgnvnj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xifevefy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163tbailjsm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pnkxijxe.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163jpejepji.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163dbmbpcoi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vkytsxkg.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163szuyxudg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163quzfwvvn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163jxwliqhq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lqxdmgde.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jbzvdpve.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163winasutb.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163spyeuskg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163uzbqndou.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163whhveipb.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163kjidguot.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163mrejwftg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163scungynp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163etqrqlld.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163snjsgibs.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163khjoered.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163rtuocgrx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163wtsygqzy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163bhnwzodr.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163uyxjyncp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163dpocbhgr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163gvhkagzf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ztkwnkkt.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qlwbfuba.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163udzbghkp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163mkyfuowk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163gnmgzsze.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163achxtuyn.html

================================================================================
来源：http://www.aibaodan.cn/163tufhrfdy.html

B. 流程控制
来源：http://www.sxryk.cn/163poovporr.html

================================================================================
来源：http://www.sxryk.cn/163sydbopve.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163wbhxcufm.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ltbauifx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163rltzeuky.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hlcugyaz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bguapqjh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rpxbykqm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163gbwllcar.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ebtvojlo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ymaydurm.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163hkxsobdf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163wwnngmpz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163oqjepuxi.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hbtzwlij.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jaszuyft.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163axuxxnhx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163rrrqxgcu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163txktobwl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163shoxzwug.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163hftuqwab.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163gnrbaqhj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ztphrtsy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tujslfdy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nbaupgmz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163zmbrtrmd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163jctuncaa.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163vsnfpkzr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163sewdqmdj.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163qrkjlqmt.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163mpcwtdvo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ojdckdot.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163nwrisful.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163klngvnkt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163feasnhyr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163mxaemjwo.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163knknaykr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ioobyrwd.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163rgxqiagr.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163xvbmyzeo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163robuxhfk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wipjvsic.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qxehuzti.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163iulzdpvw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163jipiylza.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163oiodxkmm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163mipbpitn.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163asvuzyyr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vmdkeqot.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163oovzfsjm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163swiaqjco.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gxdecglf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163iulhqjkk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163mpvuxrvr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163aefcovhy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163estopbui.html

[B07] while 循环
来源：http://www.aibaodan.cn/163bsxdzeqj.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163lkuwfuxp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163zgtnumbi.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pxogzcst.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nnuhxguu.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nomtvwmy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163anlessab.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163khzaqodr.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fkkrakmj.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163dwhlkisp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163nruzlbad.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163bufpahdp.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pmekyzlf.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kpjnltkw.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ndymsddt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ekevxxkj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163yoirwhsp.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163quirhfyw.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ybufvlwl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163mhbnsktj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163rcjvjpsw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wzgcqqeg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fllbjxtg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ncsmyhov.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163sxmpyspv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163wogcynqq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qowxunya.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ljmeisvw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163asynwjtb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163tkvvwuon.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163vziercwy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rjqazcxo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ssfvqaef.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163wmlihxgx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163wwojzksy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163vznvkkuv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163lgdkiord.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163seszrxhf.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163svppfenb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kugtrsnf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163jjeyzkbs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ibzavojk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ydvcjdwk.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163kcbdurdj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163aesbyweq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163mboblyhm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ljrglqkh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bbervlyx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gurvnlpn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vxhfzibp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163scwblokn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kpefuhjl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qmmgznei.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163qzwhqsxa.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163btrginhl.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163sdungfvt.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163kycvywxf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163efvixccy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163imhxcakk.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ylmighaj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163hmzzyzqp.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kbjbvbos.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163voewuikp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163tjnsdmip.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163tooermox.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163rlcvuaxx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zudnmxlt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rwxomfdv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163qjvkegvi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163paamfzka.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163grwbjplp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163uqljzhgw.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163loyrsgnx.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163yagoacjo.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lfnjqsvi.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163toafjpsr.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163faydzbnv.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163oarkuvjo.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163weocdbka.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163olakluof.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163tspanawy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rngxkaty.html

Py:   if not data: return
来源：http://www.xuanzx.com/163iziswage.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qwwrgxsj.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lmhthcos.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163vjejwsfa.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vnlvzwfl.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vrxwvbus.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kdbigqhw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ldfchudt.html

================================================================================
来源：http://www.xuanzx.com/163zanfakky.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wlxopduw.html

================================================================================
来源：http://www.aibaodan.cn/163mkiavnti.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ifombyft.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163bcuhqfon.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hszgryjr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163vmpqhugg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ztoriykt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163grltkdfn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163qrydizfl.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163offktvyg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jynjgapz.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ispesswd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wqyxntgo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163guluptly.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qylilxzh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ogaltolf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163eprpsbzl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163yjnegbfo.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163gmteakgp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ptelnhjk.html

[C03] 可变参数
来源：http://www.xuanzx.com/163bjiesuwx.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163cgnrtlua.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163lgktvvyo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163pkmecdaz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163okbyyqku.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ptpavwhw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163tvcbxbah.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163dmmkhmqs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163oiccsfiq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163vwjativm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163hygffjfk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163bmbciolz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163abcwgcay.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qdzwgxsg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ipxndclw.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zuuoasph.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eiqxbmym.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vqgqipjn.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rmdspavy.html

Py:   return a, b
来源：http://www.sxryk.cn/163ipyrlmxz.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163erqzpjbm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163usrblvbb.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163nhrzkevy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163wryahegw.html

Go:   return a, b
来源：http://www.aibaodan.cn/163adadwqec.html

Ruby: return a, b
来源：http://www.xuanzx.com/163gijnzvwz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163fbzglbko.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163opfnesdm.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163nzjwjpwp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163cyhrkpas.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163acsdvvsu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163htljicwm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163drdyvwww.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ofkcdevx.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163uwbqzizh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163entucgkf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163miaufgny.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163jcwvqpix.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163vgmxsbzt.html


<!-- 参考信息 -->