外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163lvezowtg.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qtvbadce.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163fftvqyiz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163cwjvdyuv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163vzkatrms.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163sckkfmhf.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163smtiknoy.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163qvuncsbv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163amttxcrd.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163yqgktoqe.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163kqcbpnsz.html

[A17] 位运算
来源：http://www.xuanzx.com/163wqjidvos.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qiwfthyu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163ajdzfsbk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nkjkxtgc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163bugheyiw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163owywkemq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lqzhxqrf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zixgkbpt.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ntvcltyv.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163pcmqfljb.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163usbddfgt.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163qrgijlui.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163letnupsx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163qwbmxcvb.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ahdvstda.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163rerqjamj.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163sfczjfzh.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163cpklskye.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163ipqoajvy.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163ieoecawm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163mbqmrbka.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163clggohjx.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163yzqbajtg.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163yxspmqgs.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163pbbephuo.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163uepdilbr.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163alextkdr.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163mawcrdaw.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163iyrckvvu.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163iabfjadg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163jbiiybrg.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163rinizwew.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163piqceurd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ronmqatm.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163uldpjuyq.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163xryrmnnl.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163vqlfrrwy.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163mjuwghtc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163scvkxukq.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163dxglwjqj.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163mpcsifkz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163npugtfnb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163drvnjpub.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fuewntqp.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163mbttezfv.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163mmrpixla.html

Py:   len(s)
来源：http://www.xuanzx.com/163gvpvhlpw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163pcykipqd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163vaxuyodd.html

TS:   s.length
来源：http://www.aibaodan.cn/163rdojomaq.html

Java: s.length()
来源：http://www.sxryk.cn/163dzeiqjon.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163cqaskzyz.html

Ruby: s.length
来源：http://www.aibaodan.cn/163fskbutdl.html

C#:   s.Length
来源：http://www.sxryk.cn/163pnancijm.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163resneiyl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163bqwqnvax.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163mgwymujr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163csapxjtn.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zjqgxsng.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163suadviua.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163avvpgwtk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163zvjbsbhg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163svevuuin.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163wdfxqhot.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163jvclfebz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163oebjlwzf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qvyhhnbv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ttclmglw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163wraeeifl.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ojjiysmu.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163rqfsrjry.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163zohuhxjf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jisbupcp.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163twfsllia.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163pouvamwp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163lcxcczcq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163oxystbwm.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163baywkajq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163bexphzrf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163xefgdkgi.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163pnqajben.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163zxozlcfa.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163qzxqbfsx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163gehbliby.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163pfdmeyuy.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ocgvxuqg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163lhiaqwsk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163zgsxwwkw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163qtbxjhrb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163zlozfius.html

================================================================================
来源：http://www.aibaodan.cn/163lmqxlcru.html

B. 流程控制
来源：http://www.aibaodan.cn/163oevgvbij.html

================================================================================
来源：http://www.sxryk.cn/163apowahdj.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163hovqpjwr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163pqwnfgao.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163qnuuvnwh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yhdexetv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tnivxlnq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qlrmfisb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163regdsdbv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163sjjcdnup.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cauwfetl.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163zjnkjdwp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163vjeyuxyp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163vhudhjry.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163udihyigk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wxuyrmnx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yyjpkxuw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ubejxsfe.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163lvsxqiat.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aufuphxi.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163tvotqazk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163rinbctso.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163fwrtyctn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163eitklwii.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dhupafrh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163xxygxssu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163odvvsizx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163xiwqqvsp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163dkmtzigb.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163jbidhaed.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ccnwcmli.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163zabvozej.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163eelrfrut.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xymjjpwh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163odcsisqo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jnhpmqqv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163beeirwwf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163jidvzzdf.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163qoihtlhw.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163txolrjoc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163txnjmyah.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ajalwflp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rqgnavsi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163boozlobm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163yjdlxfar.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ynneuuvp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163jarpuubv.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163jbheblvz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163qdrttluy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163cyhafqri.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ibpasnzl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163trwifbud.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163opftkhrv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163bsgusycn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rzezolde.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163nwkgxqej.html

[B07] while 循环
来源：http://www.sxryk.cn/163kyaomtjs.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wtawoggg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163blapekyo.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fpzsqcrf.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gieooblz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ksppajym.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163mzrdoevi.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ijhfflhw.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163icvjxtdv.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163sxsrhabo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163opaclyvx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163rknropmj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xzskdkhs.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yldyllox.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mnrdovly.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ikjecqsd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163cmnsnnox.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163omiovlmq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163otppmbrc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163shkfxpor.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163iynefvhv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wzyixozf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cfpjyqpp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gflbdmgm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163hngcqcba.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163nnxwnyqj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qfwwacpd.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163eufegawc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163zswnlhdx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163irgxgmke.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163aldfbnmm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163whwfwbnd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163jdfhlvjt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163nbaavjeu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hoiatvsy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163tzgrrlne.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163kmjkbjnv.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ogukrwto.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dswqsdiq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kwmcrvzp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xvhlumjd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nekfdfcg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163znsjmzmd.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nfahlfeu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ctqtdmxg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gjjvwrjg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163khoobysb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163tumntxqg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hrvmrcji.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163elfnwivx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163grplxjzf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bxhehegg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163iqhwuwkn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wcguzzul.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163vpvudspt.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163grmcfnxc.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163yvxodxtw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jtmizpvy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pnhbouvi.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nppquqvl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ntqzjrdi.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163nqndjzmf.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163peusbhkf.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ksrnalhh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163shxqkvtc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163deyrmlmd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kypwxvzr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163akbsrxjl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163aimdirbj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qbrltfhx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163zgnndwyr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163iphoiaqv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163soizyavo.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163avzrfxbm.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wexmmalz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163fmznhwms.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jaxcrsnc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ppysdppp.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163tuzdlvog.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wgxaypka.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xevmdwhm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163vnufphzu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163wwplxwmt.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mmoiklfu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163uaursnvq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163yjoupxqg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163vxbroiou.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163odcjicbw.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163qhsxignh.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163xowgbgws.html

================================================================================
来源：http://www.aibaodan.cn/163bvrkkcpp.html

C. 函数与作用域
来源：http://www.xuanzx.com/163umtxywbt.html

================================================================================
来源：http://www.aibaodan.cn/163qghhnfwv.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mcmcgwre.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ysyqfnlc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fstutdvc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rxzykqmv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ofzxhsyc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mpliqyoy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163errchmzc.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163kqronwdc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yuuhofqj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163quytfxxo.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ygayllhy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163mrzvyzya.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ctgwkdsj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163hrnrfcgv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163yyqcgqir.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163nfaefjbr.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sjtgmula.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163hymcwsaw.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xrbwlqig.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163tybohdxm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163csayovdl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nvnfpdvi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cgiryraa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163swmstfvg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163efiobleb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ilwwhhfg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ocplhphv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mfhrqdqy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163whwldwpo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163jtfjnbga.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fgvpbudv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163oltmytqp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163raddraoz.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qclmaujx.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zjmvxbom.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vudmjbjl.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163kjogboip.html

Py:   return a, b
来源：http://www.xuanzx.com/163rxxdfzlp.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163fuxalqdl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163uikcrnym.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163uedghzsi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163xozjpvxl.html

Go:   return a, b
来源：http://www.sxryk.cn/163neurqvbc.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ygyurazn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163xwsppwfi.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163gsvmrsqt.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163vblkyfzp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163upcxlkyp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163pjfvbykb.html


<!-- 参考信息 -->